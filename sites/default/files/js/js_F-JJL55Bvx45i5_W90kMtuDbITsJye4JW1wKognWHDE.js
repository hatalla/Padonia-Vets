(function ($) {

/**
 * Attaches double-click behavior to toggle full path of Krumo elements.
 */
Drupal.behaviors.devel = {
  attach: function (context, settings) {

    // Add hint to footnote
    $('.krumo-footnote .krumo-call').once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="' + settings.basePath + 'misc/help.png"/>');

    var krumo_name = [];
    var krumo_type = [];

    function krumo_traverse(el) {
      krumo_name.push($(el).html());
      krumo_type.push($(el).siblings('em').html().match(/\w*/)[0]);

      if ($(el).closest('.krumo-nest').length > 0) {
        krumo_traverse($(el).closest('.krumo-nest').prev().find('.krumo-name'));
      }
    }

    $('.krumo-child > div:first-child', context).dblclick(
      function(e) {
        if ($(this).find('> .krumo-php-path').length > 0) {
          // Remove path if shown.
          $(this).find('> .krumo-php-path').remove();
        }
        else {
          // Get elements.
          krumo_traverse($(this).find('> a.krumo-name'));

          // Create path.
          var krumo_path_string = '';
          for (var i = krumo_name.length - 1; i >= 0; --i) {
            // Start element.
            if ((krumo_name.length - 1) == i)
              krumo_path_string += '$' + krumo_name[i];

            if (typeof krumo_name[(i-1)] !== 'undefined') {
              if (krumo_type[i] == 'Array') {
                krumo_path_string += "[";
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += krumo_name[(i-1)];
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += "]";
              }
              if (krumo_type[i] == 'Object')
                krumo_path_string += '->' + krumo_name[(i-1)];
            }
          }
          $(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">' + krumo_path_string + '</div>');

          // Reset arrays.
          krumo_name = [];
          krumo_type = [];
        }
      }
    );
  }
};

})(jQuery);
;

/**
 * @file: Popup dialog interfaces for the media project.
 *
 * Drupal.media.popups.mediaBrowser
 *   Launches the media browser which allows users to pick a piece of media.
 *
 * Drupal.media.popups.mediaStyleSelector
 *  Launches the style selection form where the user can choose
 *  what format / style they want their media in.
 *
 */

(function ($) {
namespace('Drupal.media.popups');

/**
 * Media browser popup. Creates a media browser dialog.
 *
 * @param {function}
 *          onSelect Callback for when dialog is closed, received (Array
 *          media, Object extra);
 * @param {Object}
 *          globalOptions Global options that will get passed upon initialization of the browser.
 *          @see Drupal.media.popups.mediaBrowser.getDefaults();
 *
 * @param {Object}
 *          pluginOptions Options for specific plugins. These are passed
 *          to the plugin upon initialization.  If a function is passed here as
 *          a callback, it is obviously not passed, but is accessible to the plugin
 *          in Drupal.settings.variables.
 *
 *          Example
 *          pluginOptions = {library: {url_include_patterns:'/foo/bar'}};
 *
 * @param {Object}
 *          widgetOptions Options controlling the appearance and behavior of the
 *          modal dialog.
 *          @see Drupal.media.popups.mediaBrowser.getDefaults();
 */
Drupal.media.popups.mediaBrowser = function (onSelect, globalOptions, pluginOptions, widgetOptions) {
  var options = Drupal.media.popups.mediaBrowser.getDefaults();
  options.global = $.extend({}, options.global, globalOptions);
  options.plugins = pluginOptions;
  options.widget = $.extend({}, options.widget, widgetOptions);

  // Create it as a modal window.
  var browserSrc = options.widget.src;
  if ($.isArray(browserSrc) && browserSrc.length) {
    browserSrc = browserSrc[browserSrc.length - 1];
  }
  // Params to send along to the iframe.  WIP.
  var params = {};
  $.extend(params, options.global);
  params.plugins = options.plugins;

  browserSrc += '&' + $.param(params);
  var mediaIframe = Drupal.media.popups.getPopupIframe(browserSrc, 'mediaBrowser');
  // Attach the onLoad event
  mediaIframe.bind('load', options, options.widget.onLoad);
  /**
   * Setting up the modal dialog
   */

  var ok = 'OK';
  var cancel = 'Cancel';
  var notSelected = 'You have not selected anything!';

  if (Drupal && Drupal.t) {
    ok = Drupal.t(ok);
    cancel = Drupal.t(cancel);
    notSelected = Drupal.t(notSelected);
  }

  // @todo: let some options come through here. Currently can't be changed.
  var dialogOptions = options.dialog;

  dialogOptions.buttons[ok] = function () {
    var selected = this.contentWindow.Drupal.media.browser.selectedMedia;
    if (selected.length < 1) {
      alert(notSelected);
      return;
    }
    onSelect(selected);
    $(this).dialog("close");
  };

  dialogOptions.buttons[cancel] = function () {
    $(this).dialog("close");
  };

  Drupal.media.popups.setDialogPadding(mediaIframe.dialog(dialogOptions));
  // Remove the title bar.
  mediaIframe.parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
  Drupal.media.popups.overlayDisplace(mediaIframe.parents(".ui-dialog"));
  return mediaIframe;
};

Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad = function (e) {
  var options = e.data;
  if (this.contentWindow.Drupal.media.browser.selectedMedia.length > 0) {
    var ok = (Drupal && Drupal.t) ? Drupal.t('OK') : 'OK';
    var ok_func = $(this).dialog('option', 'buttons')[ok];
    ok_func.call(this);
    return;
  }
};

Drupal.media.popups.mediaBrowser.getDefaults = function () {
  return {
    global: {
      types: [], // Types to allow, defaults to all.
      activePlugins: [] // If provided, a list of plugins which should be enabled.
    },
    widget: { // Settings for the actual iFrame which is launched.
      src: Drupal.settings.media.browserUrl, // Src of the media browser (if you want to totally override it)
      onLoad: Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad // Onload function when iFrame loads.
    },
    dialog: Drupal.media.popups.getDialogOptions()
  };
};

Drupal.media.popups.mediaBrowser.finalizeSelection = function () {
  var selected = this.contentWindow.Drupal.media.browser.selectedMedia;
  if (selected.length < 1) {
    alert(notSelected);
    return;
  }
  onSelect(selected);
  $(this).dialog("close");
}

/**
 * Style chooser Popup. Creates a dialog for a user to choose a media style.
 *
 * @param mediaFile
 *          The mediaFile you are requesting this formatting form for.
 *          @todo: should this be fid?  That's actually all we need now.
 *
 * @param Function
 *          onSubmit Function to be called when the user chooses a media
 *          style. Takes one parameter (Object formattedMedia).
 *
 * @param Object
 *          options Options for the mediaStyleChooser dialog.
 */
Drupal.media.popups.mediaStyleSelector = function (mediaFile, onSelect, options) {
  var defaults = Drupal.media.popups.mediaStyleSelector.getDefaults();
  // @todo: remove this awful hack :(
  defaults.src = defaults.src.replace('-media_id-', mediaFile.fid);
  options = $.extend({}, defaults, options);
  // Create it as a modal window.
  var mediaIframe = Drupal.media.popups.getPopupIframe(options.src, 'mediaStyleSelector');
  // Attach the onLoad event
  mediaIframe.bind('load', options, options.onLoad);

  /**
   * Set up the button text
   */
  var ok = 'OK';
  var cancel = 'Cancel';
  var notSelected = 'Very sorry, there was an unknown error embedding media.';

  if (Drupal && Drupal.t) {
    ok = Drupal.t(ok);
    cancel = Drupal.t(cancel);
    notSelected = Drupal.t(notSelected);
  }

  // @todo: let some options come through here. Currently can't be changed.
  var dialogOptions = Drupal.media.popups.getDialogOptions();

  dialogOptions.buttons[ok] = function () {

    var formattedMedia = this.contentWindow.Drupal.media.formatForm.getFormattedMedia();
    if (!formattedMedia) {
      alert(notSelected);
      return;
    }
    onSelect(formattedMedia);
    $(this).dialog("close");
  };

  dialogOptions.buttons[cancel] = function () {
    $(this).dialog("close");
  };

  Drupal.media.popups.setDialogPadding(mediaIframe.dialog(dialogOptions));
  // Remove the title bar.
  mediaIframe.parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
  Drupal.media.popups.overlayDisplace(mediaIframe.parents(".ui-dialog"));
  return mediaIframe;
};

Drupal.media.popups.mediaStyleSelector.mediaBrowserOnLoad = function (e) {
};

Drupal.media.popups.mediaStyleSelector.getDefaults = function () {
  return {
    src: Drupal.settings.media.styleSelectorUrl,
    onLoad: Drupal.media.popups.mediaStyleSelector.mediaBrowserOnLoad
  };
};


/**
 * Style chooser Popup. Creates a dialog for a user to choose a media style.
 *
 * @param mediaFile
 *          The mediaFile you are requesting this formatting form for.
 *          @todo: should this be fid?  That's actually all we need now.
 *
 * @param Function
 *          onSubmit Function to be called when the user chooses a media
 *          style. Takes one parameter (Object formattedMedia).
 *
 * @param Object
 *          options Options for the mediaStyleChooser dialog.
 */
Drupal.media.popups.mediaFieldEditor = function (fid, onSelect, options) {
  var defaults = Drupal.media.popups.mediaFieldEditor.getDefaults();
  // @todo: remove this awful hack :(
  defaults.src = defaults.src.replace('-media_id-', fid);
  options = $.extend({}, defaults, options);
  // Create it as a modal window.
  var mediaIframe = Drupal.media.popups.getPopupIframe(options.src, 'mediaFieldEditor');
  // Attach the onLoad event
  // @TODO - This event is firing too early in IE on Windows 7,
  // - so the height being calculated is too short for the content.
  mediaIframe.bind('load', options, options.onLoad);

  /**
   * Set up the button text
   */
  var ok = 'OK';
  var cancel = 'Cancel';
  var notSelected = 'Very sorry, there was an unknown error embedding media.';

  if (Drupal && Drupal.t) {
    ok = Drupal.t(ok);
    cancel = Drupal.t(cancel);
    notSelected = Drupal.t(notSelected);
  }

  // @todo: let some options come through here. Currently can't be changed.
  var dialogOptions = Drupal.media.popups.getDialogOptions();

  dialogOptions.buttons[ok] = function () {
    var formattedMedia = this.contentWindow.Drupal.media.formatForm.getFormattedMedia();
    if (!formattedMedia) {
      alert(notSelected);
      return;
    }
    onSelect(formattedMedia);
    $(this).dialog("close");
  };

  dialogOptions.buttons[cancel] = function () {
    $(this).dialog("close");
  };

  Drupal.media.popups.setDialogPadding(mediaIframe.dialog(dialogOptions));
  // Remove the title bar.
  mediaIframe.parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
  Drupal.media.popups.overlayDisplace(mediaIframe.parents(".ui-dialog"));
  return mediaIframe;
};

Drupal.media.popups.mediaFieldEditor.mediaBrowserOnLoad = function (e) {

};

Drupal.media.popups.mediaFieldEditor.getDefaults = function () {
  return {
    // @todo: do this for real
    src: '/media/-media_id-/edit?render=media-popup',
    onLoad: Drupal.media.popups.mediaFieldEditor.mediaBrowserOnLoad
  };
};


/**
 * Generic functions to both the media-browser and style selector
 */

/**
 * Returns the commonly used options for the dialog.
 */
Drupal.media.popups.getDialogOptions = function () {
  return {
    buttons: {},
    dialogClass: 'media-wrapper',
    modal: true,
    draggable: false,
    resizable: false,
    minWidth: 600,
    width: 800,
    height: 550,
    position: 'center',
    overlay: {
      backgroundColor: '#000000',
      opacity: 0.4
    },
    zIndex: 10000,
    close: function (event, ui) {
      $(event.target).remove();
    }
  };
};

/**
 * Created padding on a dialog
 *
 * @param jQuery dialogElement
 *  The element which has .dialog() attached to it.
 */
Drupal.media.popups.setDialogPadding = function (dialogElement) {
  // @TODO: Perhaps remove this hardcoded reference to height.
  // - It's included to make IE on Windows 7 display the dialog without
  //   collapsing. 550 is the height that displays all of the tab panes
  //   within the Add Media overlay. This is either a bug in the jQuery
  //   UI library, a bug in IE on Windows 7 or a bug in the way the
  //   dialog is instantiated. Or a combo of the three.
  //   All browsers except IE on Win7 ignore these defaults and adjust
  //   the height of the iframe correctly to match the content in the panes
  dialogElement.height(dialogElement.dialog('option', 'height'));
  dialogElement.width(dialogElement.dialog('option', 'width'));
};

/**
 * Get an iframe to serve as the dialog's contents. Common to both plugins.
 */
Drupal.media.popups.getPopupIframe = function (src, id, options) {
  var defaults = {width: '800px', scrolling: 'auto'};
  var options = $.extend({}, defaults, options);

  return $('<iframe class="media-modal-frame"/>')
  .attr('src', src)
  .attr('width', options.width)
  .attr('id', id)
  .attr('scrolling', options.scrolling);
};

Drupal.media.popups.overlayDisplace = function (dialog) {
  if (parent.window.Drupal.overlay) {
    var overlayDisplace = parent.window.Drupal.overlay.getDisplacement('top');
    if (dialog.offset().top < overlayDisplace) {
      dialog.css('top', overlayDisplace);
    }
  }
}

})(jQuery);
;
/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 *
 * Dual licensed under the MIT and GPL licenses
 *
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div><div class="savecolor"><div class="removecolor"></div><div class="savecolor0 color"></div><div class="savecolor1 color"></div><div class="savecolor2 color"></div><div class="savecolor3 color"></div><div class="savecolor4 color"></div><div class="savecolor5 color"></div><div class="savecolor6 color"></div></div><div class="button">Replace</div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));

				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			},
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			},
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {

				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						colorarr = $("input[name=color_saved]").val().split(',');
						for (md in colorarr ) {
							$('.savecolor' + md).css({'background-color':'#' + colorarr[md]});
						}
						$("#" + $(this).data('colorpickerId') + " .savecolor div.color").each(function(index){
							$(this).click(function(){
                                $(".savecolor div.color").removeClass('scactive');
                                $(this).addClass('scactive');
                                if(colorarr[index] && colorarr[index] != "") {
                                    var cal = $(this).parent().parent();
                                    var col = HexToHSB(fixHex(colorarr[index]));
                                    cal.data('colorpicker').color = col;
                                    fillRGBFields(col, cal.get(0));
                                    fillHexFields(col, cal.get(0));
                                    fillHSBFields(col, cal.get(0));
                                    setSelector(col, cal.get(0));
                                    setHue(col, cal.get(0));
                                    setNewColor(col, cal.get(0));
                                    cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
                                }
							})
						});
                        $("#" + $(this).data('colorpickerId') + " .savecolor div.removecolor").click(function(){
                            var cal = $(this).parent().parent();
                            var col = HexToHSB(fixHex(""));
                            cal.data('colorpicker').color = col;
                            fillRGBFields(col, cal.get(0));
                            fillHexFields(col, cal.get(0));
                            fillHSBFields(col, cal.get(0));
                            setSelector(col, cal.get(0));
                            setHue(col, cal.get(0));
                            setNewColor(col, cal.get(0));
                            cal.data('colorpicker').onChange.apply(cal, ["", HSBToHex(""), HSBToRGB("")]);
                        });
						$("#" + $(this).data('colorpickerId') + " .button").click(function(){
							var cal = $(this).parent();
							var col = cal.data('colorpicker').color;
							newcolor = HSBToHex(col);
							activeitem = $(this).prev().find('.scactive');
							activeitem.css({'background-color':'#' + newcolor});
							itemindex = activeitem.index() - 1;
							colorarr[itemindex] = newcolor;
							newsavedval = "";
							for (md in colorarr ) {
								if (md == 6) {
									newsavedval += colorarr[md];
								} else {
									newsavedval += colorarr[md] + ",";
								}
							}
							$("input[name=color_saved]").val(newsavedval)
						});

						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery)
;
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/**
 * hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 *
 * @param  f  onMouseOver function || An object with configuration options
 * @param  g  onMouseOut function  || Nothing (use configuration options object)
 * @author    Brian Cherne brian(at)cherne(dot)net
 */
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);
/*------------------------------------------------------------------------
 # MD Slider - March 18, 2013
 # ------------------------------------------------------------------------
 # Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
 --------------------------------------------------------------------------*/

(function ($) {
    $.fn.mdSlider = function(options) {
        var defaults = {
            className: 'md-slide-wrap',
            itemClassName: 'md-slide-item',
            transitions: 'strip-down-left', // name of transition effect (fade, scrollLeft, scrollRight, scrollHorz, scrollUp, scrollDown, scrollVert)
            transitionsSpeed: 800, // speed of the transition (millisecond)
            width: 990, // responsive = false: this appear as container width; responsive = true: use for scale ;fullwidth = true: this is effect zone width
            height: 420, // container height
            responsive: true,
            fullwidth: true,
            styleBorder: 0, // Border style, from 1 - 9, 0 to disable
            styleShadow: 0, // Dropshadow style, from 1 - 5, 0 to disable
            posBullet: 2, // Bullet position, from 1 to 6, default is 5
            posThumb: 1, // Thumbnail position, from 1 to 5, default is 1
            stripCols: 20,
            stripRows: 10,
            slideShowDelay: 6000, // stop time for each slide item (millisecond)
            slideShow: true,
            loop: false,
            pauseOnHover: false,
            showLoading: true, // Show/hide loading bar
            loadingPosition: 'bottom', // choose your loading bar position (top, bottom)
            showArrow: true, // show/hide next, previous arrows
            showBullet: true,
            showThumb: true, // Show thumbnail, if showBullet = true and showThumb = true, thumbnail will be shown when you hover bullet navigation
            enableDrag: true, // Enable mouse drag
            touchSensitive: 50,
            onEndTransition: function() {  },	//this callback is invoked when the transition effect ends
            onStartTransition: function() {  }	//this callback is invoked when the transition effect starts
        };
        options = $.extend({}, defaults, options);
        var self = $(this), slideItems = [], oIndex, activeIndex = -1, numItem = 0, slideWidth, slideHeight, lock = true,
            wrap,
            hoverDiv,
            hasTouch,
            arrowButton,
            buttons,
            loadingBar,
            timerGlow,
            slideThumb,
            minThumbsLeft = 0,
            touchstart,
            mouseleft,
            thumbsDrag = false,
            slideShowDelay = 0,
            play = false,
            pause = false,
            timer,
            step = 0;

        // init
        function init() {
            self.addClass("loading-image");
            self.wrap('<div class="md-slide-fullwidth"><div class="md-item-wrap"></div></div>');
            hoverDiv = self.parent();
            wrap = hoverDiv.parent();
            slideWidth = options.width;
            slideHeight = options.height;
            self.css({width: slideWidth, height: slideHeight});
            slideItems = [];
            self.find('.' + options.itemClassName).each(function (index) {
                numItem++;
                slideItems[index] = $(this);
                if(index > 0)
                    $(this).hide();
            });
        }
        var lock = false;
        function slide(index) {
            step = 0;
            slideShowDelay = slideItems[index].data("timeout") ? slideItems[index].data("timeout") : options.slideShowDelay;
            if (index != activeIndex) {
                oIndex = activeIndex;
                activeIndex = index;
                if (slideItems[oIndex]) {
                    var fx = self.data("transitions") || "";
                    //Generate random transition
                    if (fx.toLowerCase() == 'random') {
                        var transitions = new Array(
                            'slit-horizontal-left-top',
                            'slit-horizontal-top-right',
                            'slit-horizontal-bottom-up',
                            'slit-vertical-down',
                            'slit-vertical-up',
                            'strip-up-right',
                            'strip-up-left',
                            'strip-down-right',
                            'strip-down-left',
                            'strip-left-up',
                            'strip-left-down',
                            'strip-right-up',
                            'strip-right-down',
                            'strip-right-left-up',
                            'strip-right-left-down',
                            'strip-up-down-right',
                            'strip-up-down-left',
                            'left-curtain',
                            'right-curtain',
                            'top-curtain',
                            'bottom-curtain',
                            'slide-in-right',
                            'slide-in-left',
                            'slide-in-up',
                            'slide-in-down');
                        fx = transitions[Math.floor(Math.random() * (transitions.length + 1))];
                        if (fx == undefined) fx = 'fade';
                        fx = $.trim(fx.toLowerCase());
                    }

                    //Custom transition as defined by "data-transition" attribute
                    if (slideItems[activeIndex].data('transition')) {
                        var transitions = slideItems[activeIndex].data('transition').split(',');
                        fx = transitions[Math.floor(Math.random() * (transitions.length))];
                        fx = $.trim(fx.toLowerCase());
                    }
                    if(!(this.support = Modernizr.csstransitions && Modernizr.csstransforms3d) && (fx == 'slit-horizontal-left-top' || fx == 'slit-horizontal-top-right' || fx == 'slit-horizontal-bottom-up' || fx == 'slit-vertical-down' || fx == 'slit-vertical-up')) {
                        fx = 'fade';
                    }
                    lock = true;
                    runTransition(fx);
                } else {
                    slideItems[activeIndex].css({top:0, left:0}).show();
                    lock = false;
                }
            }
        }
        function setTransition(fx) {
            options.transitions = fx;
        }
        function setTimer() {
            slide(0);
            timer = setInterval(next, 40);
        }
        function next() {
            if(lock) return false;
            step += 40;
            if(step > slideShowDelay) {
                slideNext();
            }
        }

        function slideNext() {
            if(lock) return false;
            var index = activeIndex;
            index++;
            if(index >= numItem && options.loop) {
                index = 0;
                slide(index);
            } else if(index < numItem) {
                slide(index);
            }
        }
        function slidePrev() {
            if(lock) return false;
            var index = activeIndex;
            index--;
            if(index < 0 && options.loop) {
                index = numItem - 1;
                slide(index);
            } else if(index >= 0) {
                slide(index);
            }
        }

        //When Animation finishes
        function transitionEnd() {
            options.onEndTransition.call(self);
            $('.md-strips-container', self).remove();
            slideItems[oIndex].hide();
            slideItems[activeIndex].show();
            lock = false;
        }
        // Add strips
        function addStrips(vertical, opts) {
            var strip,
                opts = (opts) ? opts : options;;
            var stripsContainer = $('<div class="md-strips-container"></div>');
            var stripWidth = Math.round(slideWidth / opts.strips),
                stripHeight = Math.round(slideHeight / opts.strips),
                $image = $(".md-mainimg img", slideItems[activeIndex]);
            for (var i = 0; i < opts.strips; i++) {
                var top = ((vertical) ? (stripHeight * i) + 'px' : '0px'),
                    left = ((vertical) ? '0px' : (stripWidth * i) + 'px'),
                    width, height;

                if (i == opts.strips - 1) {
                    width = ((vertical) ? '0px' : (slideWidth - (stripWidth * i)) + 'px'),
                        height = ((vertical) ? (slideHeight - (stripHeight * i)) + 'px' : '0px');
                } else {
                    width = ((vertical) ? '0px' : stripWidth + 'px'),
                        height = ((vertical) ? stripHeight + 'px' : '0px');
                }

                strip = $('<div class="mdslider-strip"></div>').css({
                    width: width,
                    height: height,
                    top: top,
                    left: left,
                    opacity: 0
                }).append($image.clone().css({
                        marginLeft: vertical ? 0 : -(i * stripWidth) + "px",
                        marginTop: vertical ? -(i * stripHeight) + "px" : 0
                    }));
                stripsContainer.append(strip);
            }
            self.append(stripsContainer);
        }
        // Add strips
        function addTiles(x, y, index) {
            var tile;
            var stripsContainer = $('<div class="md-strips-container"></div>');
            var tileWidth = slideWidth / x,
                tileHeight = slideHeight / y,
                $image = $(".md-mainimg img", slideItems[index]);
            for(var i = 0; i < y; i++) {
                for(var j = 0; j < x; j++) {
                    var top = (tileHeight * i) + 'px',
                        left = (tileWidth * j) + 'px';
                    tile = $('<div class="mdslider-tile"/>').css({
                        width: tileWidth,
                        height: tileHeight,
                        top: top,
                        left: left
                    }).append($image.clone().css({
                            marginLeft: "-" + left,
                            marginTop: "-" + top
                        }));
                    stripsContainer.append(tile);
                }
            }
            self.append(stripsContainer);
        }
        // Add strips
        function addStrips2() {
            var strip,
                images = [$(".md-mainimg img", slideItems[oIndex]), $(".md-mainimg img", slideItems[activeIndex])];
            var stripsContainer = $('<div class="md-strips-container"></div>');
            for (var i = 0; i < 2; i++) {
                strip = $('<div class="mdslider-strip"></div>').css({
                    width: slideWidth,
                    height: slideHeight
                }).append(images[i].clone());
                stripsContainer.append(strip);
            }
            self.append(stripsContainer);
        }
        // Add strips
        function addSlits(fx) {
            var $stripsContainer = $('<div class="md-strips-container ' + fx + '"></div>'),
                $image = $(".md-mainimg img", slideItems[oIndex]),
                $div1 = $('<div class="mdslider-slit"/>').append($image.clone()),
                $div2 = $('<div class="mdslider-slit"/>').append($image.clone().css("top", "-75px"));
            if(fx == "slit-vertical-down" || fx == "slit-vertical-up")
                $div2 = $('<div class="mdslider-slit"/>').append($image.clone().css("left", "-145px"));

            $stripsContainer.append($div1).append($div2);
            self.append($stripsContainer);
        }
        function runTransition(fx) {
            switch (fx) {
                case 'slit-horizontal-left-top':
                case 'slit-horizontal-top-right':
                case 'slit-horizontal-bottom-up':
                case 'slit-vertical-down':
                case 'slit-vertical-up':
                    addSlits(fx);
                    $(".md-object", slideItems[activeIndex]).hide();
                    slideItems[oIndex].hide();
                    slideItems[activeIndex].show();
                    var slice1 = $('.mdslider-slit', self).first(),
                        slice2 = $('.mdslider-slit', self).last();
                    var transitionProp = {
                        'transition' : 'all ' + options.transitionsSpeed + 'ms ease-in-out',
                        '-webkit-transition' : 'all ' + options.transitionsSpeed + 'ms ease-in-out',
                        '-moz-transition' : 'all ' + options.transitionsSpeed + 'ms ease-in-out',
                        '-ms-transition' : 'all ' + options.transitionsSpeed + 'ms ease-in-out'
                    };
                    $('.mdslider-slit', self).css(transitionProp);
                    setTimeout( function() {
                        slice1.addClass("md-trans-elems-1");
                        slice2.addClass("md-trans-elems-2");
                    }, 50 );
                    setTimeout(function() {
                        options.onEndTransition.call(self);
                        $('.md-strips-container', self).remove();
                        lock = false;
                    }, options.transitionsSpeed);
                    break;
                case 'strip-up-right':
                case 'strip-up-left':
                    addTiles(options.stripCols, 1, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripCols / 2,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-up-right') strips = $('.mdslider-tile', self).reverse();
                    strips.css({
                        height: '1px',
                        bottom: '0px',
                        top: "auto"
                    });
                    strips.each(function (i) {
                        var strip = $(this);
                        setTimeout(function () {
                            strip.animate({
                                height: '100%',
                                opacity: '1.0'
                            }, speed, 'easeInOutQuart', function () {
                                if (i == options.stripCols - 1) transitionEnd();
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'strip-down-right':
                case 'strip-down-left':
                    addTiles(options.stripCols, 1, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripCols / 2,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-down-right') strips = $('.mdslider-tile', self).reverse();
                    strips.css({
                        height: '1px',
                        top: '0px',
                        bottom: "auto"
                    });
                    strips.each(function (i) {
                        var strip = $(this);
                        setTimeout(function () {
                            strip.animate({
                                height: '100%',
                                opacity: '1.0'
                            }, speed, 'easeInOutQuart', function () {
                                if (i == options.stripCols - 1) transitionEnd();
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'strip-left-up':
                case 'strip-left-down':
                    addTiles(1, options.stripRows, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripRows / 2,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-left-up') strips = $('.mdslider-tile', self).reverse();
                    strips.css({
                        width: '1px',
                        left: '0px',
                        right: "auto"
                    });
                    strips.each(function (i) {
                        var strip = $(this);
                        setTimeout(function () {
                            strip.animate({
                                width: '100%',
                                opacity: '1.0'
                            }, speed, 'easeInOutQuart', function () {
                                if (i == options.stripRows - 1) transitionEnd();
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'strip-right-up':
                case 'strip-right-down':
                    addTiles(1, options.stripRows, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripRows / 2,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-left-right-up') strips = $('.mdslider-tile', self).reverse();
                    strips.css({
                        width: '1px',
                        left: 'auto',
                        right: "1px"
                    });
                    strips.each(function (i) {
                        var strip = $(this);
                        setTimeout(function () {
                            strip.animate({
                                width: '100%',
                                opacity: '1.0'
                            }, speed, 'easeInOutQuart', function () {
                                if (i == options.stripRows - 1) transitionEnd();
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'strip-right-left-up':
                case 'strip-right-left-down':
                    addTiles(1, options.stripRows, oIndex);
                    slideItems[oIndex].hide();
                    slideItems[activeIndex].show();
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripRows,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-right-left-up') strips = $('.mdslider-tile', self).reverse();
                    strips.filter(':odd').css({
                        width: '100%',
                        right: '0px',
                        left: "auto",
                        opacity: 1
                    }).end().filter(':even').css({
                            width: '100%',
                            right: 'auto',
                            left: "0px",
                            opacity: 1
                        });;
                    strips.each(function (i) {
                        var strip = $(this);
                        var css = (i%2 == 0) ? {left: '-50%',opacity: '0'} : {right: '-50%', opacity: '0'};
                        setTimeout(function () {
                            strip.animate(css, speed, 'easeOutQuint', function () {
                                if (i == options.stripRows - 1) {
                                    options.onEndTransition.call(self);
                                    $('.md-strips-container', self).remove();
                                    lock = false;
                                }
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'strip-up-down-right':
                case 'strip-up-down-left':
                    addTiles(options.stripCols, 1, oIndex);
                    slideItems[oIndex].hide();
                    slideItems[activeIndex].show();
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripCols / 2 ,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-up-down-right') strips = $('.mdslider-tile', self).reverse();
                    strips.filter(':odd').css({
                        height: '100%',
                        bottom: '0px',
                        top: "auto",
                        opacity: 1
                    }).end().filter(':even').css({
                            height: '100%',
                            bottom: 'auto',
                            top: "0px",
                            opacity: 1
                        });;
                    strips.each(function (i) {
                        var strip = $(this);
                        var css = (i%2 == 0) ? {top: '-50%',opacity: 0} : {bottom: '-50%', opacity: 0};
                        setTimeout(function () {
                            strip.animate(css, speed, 'easeOutQuint', function () {
                                if (i == options.stripCols - 1) {
                                    options.onEndTransition.call(self);
                                    $('.md-strips-container', self).remove();
                                    lock = false;
                                }
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'left-curtain':
                    addTiles(options.stripCols, 1, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        width = slideWidth / options.stripCols,
                        timeStep = options.transitionsSpeed / options.stripCols / 2;
                    strips.each(function (i) {
                        var strip = $(this);
                        strip.css({left: width * i, width: 0, opacity: 0});
                        setTimeout(function () {
                            strip.animate({
                                width: width,
                                opacity: '1.0'
                            }, options.transitionsSpeed / 2, function () {
                                if (i == options.stripCols - 1) transitionEnd();
                            });
                        }, timeStep * i);
                    });
                    break;
                case 'right-curtain':
                    addTiles(options.stripCols, 1, activeIndex);
                    var strips = $('.mdslider-tile', self).reverse(),
                        width = slideWidth / options.stripCols,
                        timeStep = options.transitionsSpeed / options.stripCols / 2;
                    strips.each(function (i) {
                        var strip = $(this);
                        strip.css({right: width * i, left: "auto", width: 0, opacity: 0});
                        setTimeout(function () {
                            strip.animate({
                                width: width,
                                opacity: '1.0'
                            }, options.transitionsSpeed / 2, function () {
                                if (i == options.stripCols - 1) transitionEnd();
                            });
                        }, timeStep * i);
                    });
                    break;
                case 'top-curtain':
                    addTiles(1, options.stripRows, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        height = slideHeight / options.stripRows,
                        timeStep = options.transitionsSpeed / options.stripRows / 2;
                    strips.each(function (i) {
                        var strip = $(this);
                        strip.css({top: height * i, height: 0, opacity: 0});
                        setTimeout(function () {
                            strip.animate({
                                height: height,
                                opacity: '1.0'
                            }, options.transitionsSpeed / 2, function () {
                                if (i == options.stripRows - 1) transitionEnd();
                            });
                        }, timeStep * i);
                    });
                    break;
                case 'bottom-curtain':
                    addTiles(1, options.stripRows, activeIndex);
                    var strips = $('.mdslider-tile', self).reverse(),
                        height = slideHeight / options.stripRows,
                        timeStep = options.transitionsSpeed / options.stripRows / 2;
                    strips.each(function (i) {
                        var strip = $(this);
                        strip.css({bottom: height * i, height: 0, opacity: 0});
                        setTimeout(function () {
                            strip.animate({
                                height: height,
                                opacity: '1.0'
                            }, options.transitionsSpeed / 2, function () {
                                if (i == options.stripRows - 1) transitionEnd();
                            });
                        }, timeStep * i);
                    });
                    break;
                case 'slide-in-right':
                    var i = 0;
                    addStrips2();
                    var strips = $('.mdslider-strip', self);
                    strips.each(function() {
                        strip = $(this);
                        var left = i * slideWidth;
                        strip.css({
                            left: left
                        });
                        strip.animate({
                            left: left - slideWidth
                        }, options.transitionsSpeed, function () {
                            transitionEnd();
                        });
                        i++;
                    });
                    break;
                case 'slide-in-left':
                    var i = 0;
                    addStrips2();
                    var strips = $('.mdslider-strip', self);
                    strips.each(function() {
                        strip = $(this);
                        var left = -i * slideWidth;
                        strip.css({
                            left: left
                        });
                        strip.animate({
                            left: slideWidth + left
                        }, (options.transitionsSpeed * 2), function () {
                            transitionEnd();
                        });
                        i++;
                    });
                    break;
                case 'slide-in-up':
                    var i = 0;
                    addStrips2();
                    var strips = $('.mdslider-strip', self);
                    strips.each(function() {
                        strip = $(this);
                        var top = i * slideHeight;
                        strip.css({
                            top: top
                        });
                        strip.animate({
                            top: top - slideHeight
                        }, options.transitionsSpeed, function () {
                            transitionEnd();
                        });
                        i++;
                    });
                    break;
                case 'slide-in-down':
                    var i = 0;
                    addStrips2();
                    var strips = $('.mdslider-strip', self);
                    strips.each(function() {
                        strip = $(this);
                        var top = -i * slideHeight;
                        strip.css({
                            top: top
                        });
                        strip.animate({
                            top: slideHeight + top
                        }, options.transitionsSpeed, function () {
                            transitionEnd();
                        });
                        i++;
                    });
                    break;
                case 'fade':
                default:
                    var opts = {
                        strips: 1
                    };
                    addStrips(false, opts);
                    var strip = $('.mdslider-strip:first', self);
                    strip.css({
                        'height': '100%',
                        'width': slideWidth
                    });
                    if (fx == 'slide-in-right') strip.css({
                        'height': '100%',
                        'width': slideWidth,
                        'left': slideWidth + 'px',
                        'right': ''
                    });
                    else if (fx == 'slide-in-left') strip.css({
                        'left': '-' + slideWidth + 'px'
                    });

                    strip.animate({
                        left: '0px',
                        opacity: 1
                    }, options.transitionsSpeed, function () {
                        transitionEnd();
                    });
                    break;
            }
        }
        function preloadImages() {
            var count = $(".md-slide-item .md-mainimg img", self).length;
            self.data('count', count);
            if(self.data('count') == 0)
                slideReady();
            $(".md-slide-item .md-mainimg img", self).each(function() {
                $(this).load(function() {
                    var $image = $(this);
                    if(!$image.data('defW')) {
                        var dimensions = getImgSize($image.attr("src"));
                        changeImagePosition($image, dimensions.width, dimensions.height);
                        $image.data({
                            'defW': dimensions.width,
                            'defH': dimensions.height
                        });
                    }
                    self.data('count', self.data('count') - 1);
                    if(self.data('count') == 0)
                        slideReady();
                });
                if(this.complete) $(this).load();
            });
        }
        function slideReady() {
            self.removeClass("loading-image");
            setTimer();
        }
        function changeImagePosition($background, width, height) {
            var panelWidth = $(".md-slide-item:visible", self).width(),
                panelHeight = $(".md-slide-item:visible", self).height();

            if(height > 0 && panelHeight > 0) {
                if (((width / height) > (panelWidth / panelHeight))) {
                    var left = panelWidth - (panelHeight / height) * width;
                    $background.css({width: "auto", height: panelHeight + "px"});
                    if(left < 0) {
                        $background.css({left: (left/2) + "px", top: 0 });
                    } else {
                        $background.css({left: 0, top: 0 });
                    }
                } else {
                    var top = panelHeight - (panelWidth / width) * height;
                    $background.css({width: panelWidth + "px", height: "auto"});
                    if(top < 0) {
                        $background.css({top: (top/2) + "px", left: 0 });
                    } else {
                        $background.css({left: 0, top: 0 });
                    }
                }
            }
        }
        function getImgSize(imgSrc) {
            var newImg = new Image();
            newImg.src = imgSrc;
            var dimensions = {height: newImg.height, width: newImg.width};
            return dimensions;
        }
        function slideReady() {
            self.removeClass("loading-image");
            setTimer();
        }

        init();
        preloadImages();
        return self;
    }
    $.fn.reverse = [].reverse;
})(jQuery);
;
/*------------------------------------------------------------------------
 # MD Slider - March 18, 2013
 # ------------------------------------------------------------------------
 # Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
 --------------------------------------------------------------------------*/

(function($) {

    $.fn.triggerItemEvent = function() {
        var slidepanel = $(this).data("slidepanel");
        if(slidepanel == null)
            return;
        var $self = $(this);
        $self.draggable({
            containment: "parent",
            stop: function( event, ui ) {
                var left = Math.round($(ui.helper).position().left),
                    top =  Math.round($(ui.helper).position().top);
                $self.data("left", left);
                $self.data("top", top);
                slidepanel.mdSliderToolbar.changePositionValue(left, top);
            }
        });
        $self.resizable({
            handles: "e, s, se",
            containment: "parent",
            resize: function(event, ui) {
                var width = Math.round($(ui.helper).width()),
                    height = Math.round($(ui.helper).height());
                $self.data("width", width);
                $self.data("height", height);
                slidepanel.mdSliderToolbar.changeSizeValue(width, height);
            }
        });
        $self.bind('mousedown', function(e) {
            if(e.ctrlKey) {
                $(this).addClass("ui-selected");
            } else {
                if(!$(this).hasClass("ui-selected")) {
                    $(this).siblings(".slider-item").removeClass("ui-selected");
                    $(this).addClass("ui-selected");
                } else {
                    $(this).siblings(".slider-item.ui-selected").removeClass("ui-selected");
                }
            }
            slidepanel.triggerChangeSelectItem();
        });
        return this;
    }
    function pad (str, max) {
        return str.length < max ? pad("0" + str, max) : str;
    }
    $.fn.getItemValues = function() {
        if($(this).hasClass("slider-item")) {
            var values = {
                width: $(this).data("width"),
                height: $(this).data("height"),
                left: $(this).data("left"),
                top: $(this).data("top"),
                starttime: $(this).data("starttime") ? Math.round($(this).data("starttime")) : 0,
                stoptime: $(this).data("stoptime") ? Math.round($(this).data("stoptime")) : 0,
                startani: $(this).data("startani"),
                stopani: $(this).data("stopani"),
                opacity: $(this).data("opacity"),
                style: $(this).data("style"),
                zindex: $(this).css("z-index"),
                type: $(this).data("type"),
                title: $(this).data("title"),
                backgroundcolor: ($(this).data("backgroundcolor") == undefined ||  $(this).data("backgroundcolor") === "")? null : ($(this).data("backgroundcolor") == 0 ? "000000" : $.fixHex($(this).data("backgroundcolor").toString())),
                backgroundtransparent: $(this).data("backgroundtransparent"),
                borderposition: $(this).data("borderposition"),
                borderwidth: $(this).data("borderwidth"),
                borderstyle: $(this).data("borderstyle"),
                bordercolor: ($(this).data("bordercolor") == undefined || $(this).data("bordercolor") === "") ? null : ($(this).data("bordercolor") == 0 ? "000000" : $.fixHex($(this).data("bordercolor").toString())),
                bordertopleftradius: $(this).data("bordertopleftradius"),
                bordertoprightradius: $(this).data("bordertoprightradius"),
                borderbottomrightradius: $(this).data("borderbottomrightradius"),
                borderbottomleftradius: $(this).data("borderbottomleftradius"),
                paddingtop: $(this).data("paddingtop"),
                paddingright: $(this).data("paddingright"),
                paddingbottom: $(this).data("paddingbottom"),
                paddingleft: $(this).data("paddingleft"),
                link: $(this).data("link")
            };
            if($(this).data("type") == "text") {
                $.extend(values, {
                    fontsize: $(this).data("fontsize"),
                    fontfamily: $(this).data("fontfamily"),
                    fontweight: $(this).data("fontweight"),
                    fontstyle: $(this).data("fontstyle"),
                    textdecoration: $(this).data("textdecoration"),
                    texttransform: $(this).data("texttransform"),
                    textalign: $(this).data("textalign"),
                    color: ($(this).data("color") == undefined || $(this).data("color") === "") ? null : ($(this).data("color") == 0 ? "000000" : $.fixHex($(this).data("color").toString()))
                });
            } else {
                $.extend(values, {
                    fileid: $(this).data("fileid"),
                    thumb: $(this).find("img").attr("src")
                });
            }
            return values;
        }
        return null;

    }
    $.fn.setItemValues = function(setting) {
        if($(this).hasClass("slider-item")) {
            for (var key in setting) {
                $(this).data(key, setting[key]);
            }
            return true;
        }
        return null;

    }
    $.fn.setItemStyle = function(setting) {
        if($(this).hasClass("slider-item")) {
            var css = [];
            if(setting.style)
                $(this).addClass(setting.style);
            if(setting.width)
                css["width"] = setting.width;
            if(setting.height)
                css["height"] = setting.height;
            if(setting.top)
                css["top"] = setting.top;
            if(setting.left)
                css["left"] = setting.left;
            if(setting.opacity)
                css["opacity"] = setting.opacity / 100;
            if(setting.backgroundcolor != null) {
                var bgcolor = setting.backgroundcolor;
                var opacity = parseInt(setting.backgroundtransparent);
                var rgb = $.HexToRGB(bgcolor);
                opacity = opacity ? opacity : 100;
                var itemcolor = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + (opacity / 100) + ')';
                css["background-color"] = itemcolor;
            }
            if(setting.bordercolor)
                css["border-color"] = "#" + setting.bordercolor;
            if(setting.borderwidth)
                css["border-width"] = setting.borderwidth + "px";

            var borderStr = "none";
            if(setting.borderposition && setting.borderstyle) {
                var borderposition = setting.borderposition,
                    borderstyle = setting.borderstyle;

                if(borderposition & 1) {
                    borderStr = borderstyle;
                } else {
                    borderStr = "none";
                }
                if(borderposition & 2) {
                    borderStr += " " + borderstyle;
                } else {
                    borderStr += " none";
                }
                if(borderposition & 4) {
                    borderStr += " " + borderstyle;
                } else {
                    borderStr += " none";
                }
                if(borderposition & 8) {
                    borderStr += " " + borderstyle;
                } else {
                    borderStr += " none";
                }
            }
            css['border-style'] = borderStr;
            if(setting.bordertopleftradius)
                css["border-top-left-radius"] = setting.bordertopleftradius + "px";
            if(setting.bordertoprightradius)
                css["border-top-right-radius"] = setting.bordertoprightradius + "px";
            if(setting.borderbottomrightradius)
                css["border-bottom-right-radius"] = setting.borderbottomrightradius + "px";
            if(setting.borderbottomleftradius)
                css["border-bottom-left-radius"] = setting.borderbottomleftradius + "px";
            if(setting.paddingtop)
                css["padding-top"] = setting.paddingtop + "px";
            if(setting.paddingright)
                css["padding-right"] = setting.paddingright + "px";
            if(setting.paddingbottom)
                css["padding-bottom"] = setting.paddingbottom + "px";
            if(setting.paddingleft)
                css["padding-left"] = setting.paddingleft + "px";

            if(setting.type == "text") {
                if(setting.fontsize)
                    css["font-size"] = setting.fontsize + "px";
                if(setting.fontfamily)
                    css["font-family"] = setting.fontfamily;
                if(setting.fontweight)
                    css["font-weight"] = setting.fontweight;
                if(setting.fontstyle)
                    css["font-style"] = setting.fontstyle;
                if(setting.textdecoration)
                    css["text-decoration"] = setting.textdecoration;
                if(setting.texttransform)
                    css["text-transform"] = setting.texttransform;
                if(setting.textalign)
                    css["text-align"] = setting.textalign;
                if(setting.color)
                    css["color"] = "#" + setting.color;
            }
            $(this).css(css);
        }
        return false;
    }
    $.fn.setItemHtml = function(setting) {
        if($(this).hasClass("slider-item")) {
            if(setting.type == "text") {
                $(this).find("p").html(setting.title.replace(/\n/g, "<br />"));
            } else {
                $(this).find("img").attr("src", setting.thumb);
            }
        }
        return false;
    }
    $.HexToRGB = function (hex) {
        var hex = parseInt(((hex.toString().indexOf('#') > -1) ? hex.substring(1) : hex), 16);
        return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
    }
    $.removeMinusSign = function(str) {
        return str.replace(/-/g, "");
    }
    $.objectToString = function(obj) {
        return JSON.stringify(obj);
    };
    $.stringToObject = function(string) {
        return jQuery.parseJSON(string);
    };
    $.fixHex = function (hex) {
        var len = 6 - hex.length;
        if (len > 0) {
            var o = [];
            for (var i=0; i<len; i++) {
                o.push('0');
            }
            o.push(hex);
            hex = o.join('');
        }
        return hex;
    };
})(jQuery);
;
/*------------------------------------------------------------------------
# MD Slider - March 18, 2013
# ------------------------------------------------------------------------
# Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
--------------------------------------------------------------------------*/

(function($) {
    var MdSliderToolbar = function(panel) {
        var self = this;
        this.panel = panel;
        this.selectedItem = null;

        this.init = function() {
            $("#md-toolbar a").click(function() {
                if ($(this).hasClass("mdt-text")) {
                    self.panel.addBoxItem("text");
                } else if ($(this).hasClass("mdt-image")) {
                    self.panel.addBoxItem("image");
                }  else if ($(this).hasClass("mdt-video")) {
                    self.panel.addBoxItem("video");
                } else if ($(this).hasClass("mdt-align-left")) {
                    self.panel.alignLeftSelectedBox();
                } else if ($(this).hasClass("mdt-align-right")) {
                    self.panel.alignRightSelectedBox();
                } else if ($(this).hasClass("mdt-align-center")) {
                    self.panel.alignCenterSelectedBox();
                } else if ($(this).hasClass("mdt-align-top")) {
                    self.panel.alignTopSelectedBox();
                } else if ($(this).hasClass("mdt-align-bottom")) {
                    self.panel.alignBottomSelectedBox();
                } else if ($(this).hasClass("mdt-align-vcenter")) {
                    self.panel.alignMiddleSelectedBox($("input.mdt-spacei", "#md-toolbar").val());
                } else if ($(this).hasClass("mdt-spacev")) {
                    self.panel.spaceVertical($("input.mdt-spacei", "#md-toolbar").val());
                } else if ($(this).hasClass("mdt-spaceh")) {
                    self.panel.spaceHorizontal($("input.mdt-spacei", "#md-toolbar").val());
                }
                return false;
            });
            $("input.mdt-width", "#md-toolbar").keyup(function() {
                if ($("a.mdt-proportions", "#md-toolbar").hasClass("mdt-proportions-yes")) {
                    var proportions = $("a.mdt-proportions", "#md-toolbar").data("proportions");
                    if(proportions > 0) {
                        $("input.mdt-height", "#md-toolbar").val(Math.round($(this).val() / proportions));
                    }
                }
            });

            $("input.mdt-height", "#md-toolbar").keyup(function() {
                if ($("a.mdt-proportions", "#md-toolbar").hasClass("mdt-proportions-yes")) {
                    var proportions = $("a.mdt-proportions", "#md-toolbar").data("proportions");
                    if(proportions > 0) {
                        $("input.mdt-width", "#md-toolbar").val(Math.round($(this).val() * proportions));
                    }
                }
            });
            $("input, select", "#md-toolbar").keypress(function(event){
                var keyCode = event.keyCode || event.which;
                if(keyCode == 13){
                    $(this).trigger("change");
                    event.preventDefault();

                }
            });
            $("input.mdt-input, select.mdt-input", "#md-toolbar").change(function() {
                var name = $(this).attr("name");
                switch (name) {
                    case "background-transparent":
                    case "background-color":
                        self.panel.setItemBackground(name, $(this).val());
                        return true;
                        break;
                    case "left":
                    case "top":
                        self.panel.setItemAttribute(name, $(this).val());
                        break;
                    case "width":
                    case "height":
                        self.panel.setItemSize($("input.mdt-width", "#md-toolbar").val(), $("input.mdt-height", "#md-toolbar").val());
                        break;
                    case "font-size":
                        self.panel.setItemFontSize(name, $(this).val());
                        break;
                    case "style":
                        self.panel.setItemStyle(name, $(this).val());
                        break;
                    case "opacity":
                        self.panel.setItemOpacity(name, $(this).val());
                        break;
                    case "color":
                        self.panel.setItemColor($(this).val());
                        break;
                    case "border-color":
                        self.panel.setItemBorderColor(name, $(this).val());
                        break;
                    case "border-width":
                        self.panel.setItemCssPx(name, $(this).val());
                        break;
                    case "border-style":
                        self.panel.changeBorderStyle($(this).val());
                        break;
                    default:
                        self.panel.setItemCss(name, $(this).val());
                }
                return false;
            });
            $("a.button-style", "#md-toolbar").click(function() {
                if($(this).hasClass("active")) {
                    self.panel.setItemCss($(this).attr("name"), $(this).attr("normal"));
                    $(this).removeClass("active");
                } else {
                    self.panel.setItemCss($(this).attr("name"), $(this).attr("active"));
                    $(this).addClass("active");
                }
                return false;
            });
            $("a.button-align", "#md-toolbar").click(function() {
                if($(this).hasClass("active")) {
                    if($(this).hasClass("mdt-left-alignment")) return;
                    self.panel.setItemCss("text-align", "left");
                    $("a.mdt-left-alignment", "#md-toolbar").addClass("active");
                    $(this).removeClass("active");
                } else {
                    self.panel.setItemCss("text-align", $(this).attr("value"));
                    $("a.button-align", "#md-toolbar").removeClass("active");
                    $(this).addClass("active");
                }
                return false;
            });
            $("textarea", "#md-toolbar").keyup(function() {
                self.panel.setItemTitle($(this).val());
            });
            $("a.mdt-proportions", "#md-toolbar").click(function() {
                if(!($("#md-toolbar").attr("disabled")) || $("#md-toolbar").attr("disabled") == "false") {
                    if ($(this).hasClass("mdt-proportions-yes")) {
                        $(this).removeClass("mdt-proportions-yes");
                    } else {
                        var width = $("input.mdt-width", "#md-toolbar").val();
                        var height = $("input.mdt-height", "#md-toolbar").val();
                        var proportions = 1;
                        if (width > 0 && height > 0)
                            proportions = width / height;
                        $(this).data("proportions", proportions);
                        $(this).addClass("mdt-proportions-yes");
                    }
                }
            });

            $("#dlg-video").dialog({
                resizable: false,
                autoOpen: false,
                draggable: false,
                modal: true,
                width: 680,
                buttons: {
                    OK: function () {
                        self.updateVideo($("#videoid").val(), $("#videoname").val(), $("#videothumb").attr("src"));
                        $(this).dialog("close");
                    }
                },
                open: function() {
                    var videovalue = self.getVideoValue();
                    $("#videoid").val(videovalue.id);
                    $("#videoname").val(videovalue.name);
                    $("#videothumb").attr("src", videovalue.thumbsrc);
                },
                close: function() {
                    $(this).empty();
                }
            });
            $("a.mdt-background-color").ColorPicker({
                onBeforeShow: function () {
                    current_obj = this;
                    $(this).ColorPickerSetColor($("#background-color").val());
                },
                onChange: function (hsb, hex, rgb) {
                    if(hsb == "") {
                        $("#background-color").val("").trigger('change');
                        $(current_obj).css('backgroundColor', '');
                    } else {
                        $("#background-color").val(hex).trigger('change');
                        $(current_obj).css('backgroundColor', '#' + hex);
                    }
                },
                onSubmit: function(hsb, hex, rgb, el) {
                    $(el).ColorPickerHide();
                }
            });
            $("a.mdt-text-color").ColorPicker({
                onBeforeShow: function () {
                    current_obj = this;
                    $(this).ColorPickerSetColor($("input.mdt-color").val());
                },
                onChange: function (hsb, hex, rgb) {
                    if(hsb == "") {
                        $("input.mdt-color", "#md-toolbar").val("").trigger('change');
                        $(current_obj).css('backgroundColor', '');
                    } else {
                        $("input.mdt-color", "#md-toolbar").val(hex).trigger('change');
                        $(current_obj).css('backgroundColor', '#' + hex);
                    }
                },
                onSubmit: function(hsb, hex, rgb, el) {
                    $(el).ColorPickerHide();
                }
            });
            $(".panel-change-videothumb").live('click', function() {
              Drupal.media.popups.mediaBrowser(function (mediaFiles) {
                var icon = mediaFiles[0];
                $("#videothumb").attr("src", icon.url);
              });
            });
            $("#btn-search").live('click', function() {
                /**
                 * Added by Duynv
                 */
                var videoUrl = $("#txtvideoid").val();
				var url = Drupal.settings.basePath + '?q=admin/structure/md-slider/get-video-info';
				url = location.protocol + '//' + location.host + url
                $.getJSON(url,{url: videoUrl}, function(response) {
                    switch (response.type) {
                        case 'youtube':
                            if(response.data) {
                                var info = response.data.data;
                                $("#videoid").val(info.id);
                                $("#videoname").val(info.title);
                                $("#videothumb").attr("src",info.thumbnail.sqDefault);
                            }
                            break;

                        case 'vimeo':
                            if(response.data) {
                                var info = response.data;
                                $("#videoid").val(info.id);
                                $("#videoname").val(info.title);
                                $("#videothumb").attr("src", info.thumbnail_small);
                            }
                            break;

                        default :
                            alert('Could not find video info for this link. Try again!');
                            break;
                    }
                    if ($("#videothumb").size() <= 0) {
                      $("#videothumb").parent().append('<a class="panel-change-videothumb" href="#">[Change video thumb]</a>');
                    }
                });
                /**
                 * End added by Duynv
                 */
            });
            $("#change-video").click(function() {
                /**
                 * Added by Duynv
                 * Get setting video form
                 */
                var video_data = self.getVideoValue();
                var isChange = (video_data.id != '') ? 1 : 0;
				var url = Drupal.settings.basePath + '?q=admin/structure/md-slider/video-setting';
				url = location.protocol + '//' + location.host + url
                $.post(url, {change: isChange}, function(data) {
                    $("#dlg-video").append(data).dialog("open");
                });
                return false;
            });
            $("#change-image").click(function() {
                Drupal.media.popups.mediaBrowser(function (mediaFiles) {
                    var icon = mediaFiles[0];
                    $("textarea.mdt-imgalt", "#md-toolbar").val(icon.filename);
                    $("img.mdt-imgsrc", "#md-toolbar").attr("src", icon.url);
                    $("input.mdt-fileid", "#md-toolbar").val(icon.fid);
                    self.panel.setImageData(icon.fid, icon.filename, icon.url);
                });
            });
            /**
             * End added by Duynv
             */
            $("#md-toolbar select.mdt-font-family").change(function() {
                self.panel.changeFontFamily($(this).val());
                self.changeFontWeightOption($("option:selected" ,this).data("fontweight"));
            });
            $("#md-toolbar select.mdt-font-weight").change(function() {
                var value =  $(this).val();
                $(this).data("value", value);
                self.panel.setItemFontWeight(value);
            });

            $("#border-position a").click(function() {
                if($(this).hasClass("bp-all")) {
                  var siblings = $(this).siblings();
                  if(siblings.filter(".active").size() < 4) {
                    siblings.addClass("active");
                  } else {
                    siblings.removeClass("active");
                  }
                } else {
                  $(this).toggleClass("active");
                }
                self.changeBorderPosition();
            });

            $("#md-toolbar a.mdt-border-color").ColorPicker({
                onBeforeShow: function () {
                    current_obj = this;
                    $(this).ColorPickerSetColor($("#border-color").val());
                },
                onChange: function (hsb, hex, rgb) {
                    if(hsb == "") {
                        $("#border-color").val("").trigger('change');
                        $(current_obj).css('backgroundColor', '');
                    } else {
                        $("#border-color").val(hex).trigger('change');
                        $(current_obj).css('backgroundColor', '#' + hex);
                    }
                },
                onSubmit: function(hsb, hex, rgb, el) {
                    $(el).ColorPickerHide();
                }
            });
            $("#md-toolbar input.mdt-border-radius").change(function() {
               if($(this).val() != "" && !isNaN($(this).val())) {
                   if($(this).siblings("input.mdt-border-radius").filter('[value=]').size() == 3) {
                       var radius = parseInt($(this).val());
                       $(this).siblings("input.mdt-border-radius").each(function() {
                          $(this).val(radius);
                          self.panel.setItemCssPx($(this).attr("name"), radius);
                       });
                   }
               } else {
                   $(this).val(0);
               }
                self.panel.setItemCssPx($(this).attr("name"), $(this).val());
            });
            $("#md-toolbar input.mdt-padding").change(function() {
                if($(this).val() != "" && !isNaN($(this).val())) {
                    if($(this).siblings("input.mdt-padding").filter('[value=]').size() == 3) {
                        var padding = parseInt($(this).val());
                        $(this).siblings("input.mdt-padding").each(function() {
                            $(this).val(padding);
                            self.panel.setItemCssPx($(this).attr("name"), padding);
                        });
                    }
                } else {
                    $(this).val(0);
                }
                self.panel.setItemCssPx($(this).attr("name"), $(this).val());
            });

            // link text
            $("#md-toolbar a.mdt-addlink").click(function() {
                var itemValues = self.selectedItem.getItemValues();
                var link = $.extend({value:"",title:"",color:"",background:"",transparent:"",border:""}, itemValues.link);
                $("#mdt-linkexpand input.mdt-link-value").val(link.value);
                $("#mdt-linkexpand input.mdt-link-title").val(link.title);
                $("#mdt-linkexpand input.link-color").val(link.color);
                link.color != "" ? $("#mdt-linkexpand a.mdt-link-color").css('backgroundColor', '#' + link.color) : $("#mdt-linkexpand a.mdt-link-color").css('backgroundColor', '');
                $("#mdt-linkexpand input.link-background").val(link.background);
                link.background != "" ? $("#mdt-linkexpand a.mdt-link-background").css('backgroundColor', '#' + link.background) : $("#mdt-linkexpand a.mdt-link-background").css('backgroundColor', '');
                $("#mdt-linkexpand input.link-background-transparent").val(link.transparent);
                $("#mdt-linkexpand input.link-border").val(link.border)
                link.border != "" ? $("#mdt-linkexpand a.mdt-link-border").css('backgroundColor', '#' + link.border) : $("#mdt-linkexpand a.mdt-link-border").css('backgroundColor', '');
                $("#mdt-linkexpand").data("item", self.selectedItem).show();
                $(document).bind('click', hideLinkPopup);
            });
            $("#mdt-linkexpand a.mdt-link-close").click(function() {
                $("#mdt-linkexpand").data("item", null);
                $("#mdt-linkexpand").hide();
            });
            $("#mdt-linkexpand a.mdt-edit-color").ColorPicker({
                onBeforeShow: function () {
                    current_obj = this;
                    $(this).ColorPickerSetColor($(this).next().val());
                    $(document).unbind('click', hideLinkPopup);
                },
                onChange: function (hsb, hex, rgb) {
                    if(hsb == "") {
                        $(current_obj).next().val("");
                        $(current_obj).css('backgroundColor', '');
                    } else {
                        $(current_obj).next().val(hex);
                        $(current_obj).css('backgroundColor', '#' + hex);
                    }
                },
                onSubmit: function(hsb, hex, rgb, el) {
                    $(el).ColorPickerHide();
                },
                onHide:function() {
                    $(document).bind('click', hideLinkPopup);
                }
            });
            $("#mdt-linkexpand a.mdt-link-save").click(function() {
                self.saveLinkData();
                $("#mdt-linkexpand").hide();
				$(document).unbind('click', hideLinkPopup);
            });
            $("#mdt-linkexpand a.mdt-link-remove").click(function() {
                var item = $("#mdt-linkexpand").data("item");
                if(item != null) {
                    $(item).data("link", null);
                }
                $("#mdt-linkexpand").data("item", null);
                $("#mdt-linkexpand").hide();
            });
            self.disableToolbar();
        };
        this.saveLinkData = function() {
            var link = {
                value: $("#mdt-linkexpand input.mdt-link-value").val(),
                title: $("#mdt-linkexpand input.mdt-link-title").val(),
                color: $("#mdt-linkexpand input.link-color").val(),
                background: $("#mdt-linkexpand input.link-background").val(),
                transparent: $("#mdt-linkexpand input.link-background-transparent").val(),
                border: $("#mdt-linkexpand input.link-border").val()
            }
            var item = $("#mdt-linkexpand").data("item");
            if(link.value != "" && item != null) {
                $(item).data("link", link);
            }
        }
        this.changeBorderPosition = function() {
            var borderTop = $("#border-position a.bp-top").hasClass("active") ? 1 : 0,
                borderRight = $("#border-position a.bp-right").hasClass("active") ? 2 : 0,
                borderBottom = $("#border-position a.bp-bottom").hasClass("active") ? 4 : 0,
                borderLeft = $("#border-position a.bp-left").hasClass("active") ? 8 : 0;
            self.panel.changeBorderPosition(borderTop + borderRight + borderBottom + borderLeft);
        };
        this.weightArray  = {
            '100': 'Thin',
            '100italic': 'Thin Italic',
            '200': "Extra Light",
            '200italic': "Extra Light Italic",
            '300': 'Light',
            '300italic': 'Light Italic',
            '400': 'Normal',
            '400italic': 'Italic',
            '500': 'Medium',
            '500italic': 'Medium Italic',
            '600': 'Semi Bold',
            '600italic': 'Semi Bold Italic',
            '700': 'Bold',
            '700italic': 'Bold Italic',
            '800': 'Extra Bold',
            '800italic': 'Extra Bold Italic',
            '900': 'Heavy',
            '900italic': 'Heavy Italic'
        }
        this.changeFontWeightOption = function(fontweight) {
			var options = '<option value=""></option>';
			var oldoption = $("#md-toolbar select.mdt-font-weight").data("value");
            if(fontweight) {
                var fontweights = fontweight.split(",");
                var weightArray = self.weightArray;
                for(var i = 0; i < fontweights.length; i++) {
                    var weight = fontweights[i];
                    options += '<option value="'+weight+'">'+ weightArray[weight] +'</option>'
                }
            }  
			$("#md-toolbar select.mdt-font-weight").html(options).val(oldoption);
        }

        this.changeSelectItem = function(item) {
            this.selectedItem = item;
            this.triggerChangeSelectItem();
        }
        this.triggerChangeSelectItem = function() {
            self.saveLinkData();
            $("#mdt-linkexpand").hide();
            if(this.selectedItem == null) {
                this.disableToolbar();
            } else {
                this.changeToolbarValue();
                if($("#md-toolbar").attr("disabled")) {
                    this.enableToolbar();
                }
            }
        }
        this.disableToolbar = function() {
            $("input, select, textarea", "#md-toolbar").not("input.mdt-spacei").val("").attr("disabled", true);
            $("#md-toolbar div.mdt-item-type").hide();
            $("#md-toolbar").attr("disabled", true);
        }
        this.enableToolbar = function() {
            $("input, select, textarea", "#md-toolbar").removeAttr("disabled");
            $("#md-toolbar").attr("disabled", false);
        }
        this.changeToolbarValue = function() {
            if (this.selectedItem != null) {
                var itemValues = this.selectedItem.getItemValues();
                $("input.mdt-width", "#md-toolbar").val(itemValues.width);
                $("input.mdt-height", "#md-toolbar").val(itemValues.height);
                $("input.mdt-left", "#md-toolbar").val(itemValues.left);
                $("input.mdt-top", "#md-toolbar").val(itemValues.top);
                $("input.mdt-starttime", "#md-toolbar").val(itemValues.starttime);
                $("input.mdt-stoptime", "#md-toolbar").val(itemValues.stoptime);
                $("select.mdt-startani", "#md-toolbar").val(itemValues.startani);
                $("select.mdt-stopani", "#md-toolbar").val(itemValues.stopani);
                $("input.mdt-opacity", "#md-toolbar").val(itemValues.opacity);
                $("select.mdt-style", "#md-toolbar").val(itemValues.style);
                $("input.mdt-background", "#md-toolbar").val(itemValues.backgroundcolor);
                itemValues.backgroundcolor != null ? $("a.mdt-background-color", "#md-toolbar").css("backgroundColor", "#" + itemValues.backgroundcolor) : $("a.mdt-background-color", "#md-toolbar").css("backgroundColor", "");
                $("input.mdt-background-transparent", "#md-toolbar").val(itemValues.backgroundtransparent);
                $("#border-position a").removeClass("active");
                var border = itemValues.borderposition;
                if(border & 1) {
                    $("#border-position a.bp-top").addClass("active");
                }
                if(border & 2) {
                    $("#border-position a.bp-right").addClass("active");
                }
                if(border & 4) {
                    $("#border-position a.bp-bottom").addClass("active");
                }
                if(border & 8) {
                    $("#border-position a.bp-left").addClass("active");
                }

                $("input.mdt-border-width", "#md-toolbar").val(itemValues.borderwidth);
                $("select.mdt-border-style", "#md-toolbar").val(itemValues.borderstyle);
                itemValues.bordercolor ? $("a.mdt-border-color", "#md-toolbar").css("backgroundColor", "#" + itemValues.bordercolor) : $("a.mdt-border-color", "#md-toolbar").css("backgroundColor", "");
                $("input.border-color", "#md-toolbar").val(itemValues.bordercolor);

                $("input.mdt-br-topleft", "#md-toolbar").val(itemValues.bordertopleftradius);
                $("input.mdt-br-topright", "#md-toolbar").val(itemValues.bordertoprightradius);
                $("input.mdt-br-bottomright", "#md-toolbar").val(itemValues.borderbottomrightradius);
                $("input.mdt-br-bottomleft", "#md-toolbar").val(itemValues.borderbottomleftradius);

                $("input.mdt-p-top", "#md-toolbar").val(itemValues.paddingtop);
                $("input.mdt-p-right", "#md-toolbar").val(itemValues.paddingright);
                $("input.mdt-p-bottom", "#md-toolbar").val(itemValues.paddingbottom);
                $("input.mdt-p-left", "#md-toolbar").val(itemValues.paddingleft);
                var proportions = 1;
                if (itemValues.width > 0 && itemValues.height > 0)
                    proportions = itemValues.width / itemValues.height;
                $("a.mdt-proportions", "#md-toolbar").data("proportions", proportions);
                var divType = $("#md-toolbar div.mdt-item-type").hide();
                if(itemValues.type == "text") {
                    $("textarea.mdt-textvalue", "#md-toolbar").val(itemValues.title);
                    $(divType).filter(".mdt-type-text").show();
                    $("input.mdt-fontsize", "#md-toolbar").val(itemValues.fontsize);
                    $("select.mdt-font-family", "#md-toolbar").val(itemValues.fontfamily).trigger("change");
                    $("select.mdt-font-weight", "#md-toolbar").val(itemValues.fontweight);
                    $("a.mdt-font-bold", "#md-toolbar").toggleClass("active", (itemValues.fontweight == "bold"));
                    $("a.mdt-font-italic", "#md-toolbar").toggleClass("active", (itemValues.fontstyle == "italic"));
                    $("a.mdt-font-underline", "#md-toolbar").toggleClass("active", (itemValues.textdecoration == "underline"));
					$("a.mdt-font-allcaps", "#md-toolbar").toggleClass("active", (itemValues.texttransform == "uppercase"));
                    $("a.mdt-left-alignment", "#md-toolbar").toggleClass("active", (itemValues.textalign == "left"));
                    $("a.mdt-center-alignment", "#md-toolbar").toggleClass("active", (itemValues.textalign == "center"));
                    $("a.mdt-right-alignment", "#md-toolbar").toggleClass("active", (itemValues.textalign == "right"));
                    $("a.mdt-justified-alignment", "#md-toolbar").toggleClass("active", (itemValues.textalign == "justified"));
                    $("input.mdt-color", "#md-toolbar").val(itemValues.color);
                    itemValues.color ? $("a.mdt-text-color", "#md-toolbar").css("backgroundColor", "#" + itemValues.color) : $("a.mdt-text-color", "#md-toolbar").css("backgroundColor", "");
                } else if(itemValues.type == "image") {
                    $("textarea.mdt-imgalt", "#md-toolbar").val(itemValues.title);
                    $("img.mdt-imgsrc", "#md-toolbar").attr("src", itemValues.thumb);
                    $("input.mdt-fileid", "#md-toolbar").val(itemValues.fileid);
                    $(divType).filter(".mdt-type-image").show();
                } else if(itemValues.type == "video") {
                    $("textarea.mdt-videoname", "#md-toolbar").val(itemValues.title);
                    $("input.mdt-video-fileid", "#md-toolbar").val(itemValues.fileid);
                    $("img.mdt-videosrc", "#md-toolbar").attr("src", itemValues.thumb);
                    $(divType).filter(".mdt-type-video").show();
                    $("#md-toolbar input.mdt-color").attr("disabled", true);
                }
            }
        }
        this.changePositionValue = function(left, top) {
            $("input.mdt-left", "#md-toolbar").val(Math.round(left));
            $("input.mdt-top", "#md-toolbar").val(Math.round(top));
        }
        this.changeSizeValue = function(width, height) {
            $("input.mdt-width", "#md-toolbar").val(Math.round(width));
            $("input.mdt-height", "#md-toolbar").val(Math.round(height));
        }
        this.getItemSetting = function() {
            return {
                starttime: $("input.mdt-starttime", "#md-toolbar").val(),
                stoptime: $("input.mdt-stoptime", "#md-toolbar").val(),
                startani: $("select.mdt-startani", "#md-toolbar").val(),
                stopani: $("select.mdt-stopani", "#md-toolbar").val(),
                opacity: $("input.mdt-opacity", "#md-toolbar").val(),
                style: $("select.mdt-style", "#md-toolbar").val()
            };
        }
        this.changeTimelineValue = function() {
            if (this.selectedItem != null) {
                $("input.mdt-starttime", "#md-toolbar").val(Math.round(this.selectedItem.data("starttime")));
                $("input.mdt-stoptime", "#md-toolbar").val(Math.round(this.selectedItem.data("stoptime")));
            }
        }
        this.updateVideo = function(id, name, src) {
            $("textarea.mdt-videoname", "#md-toolbar").val(name);
            $("input.mdt-video-fileid", "#md-toolbar").val(id);
            $("img.mdt-videosrc", "#md-toolbar").attr("src", src);
            self.panel.setVideoData(id, name, src);
        }
        this.getVideoValue = function() {
            return {
                name: $("textarea.mdt-videoname", "#md-toolbar").val(),
                thumbsrc: $("img.mdt-videosrc", "#md-toolbar").attr("src"),
                id: $("input.mdt-video-fileid", "#md-toolbar").val()
            }
        }
        this.focusEdit = function() {
            if (this.selectedItem != null) {
                var type = this.selectedItem.data("type");
                if(type == "text") {
                    $("textarea.mdt-textvalue", "#md-toolbar").focus();
                } else if (type == "image") {
                    $("#change-image").trigger("click");
                } else if (type == "video") {
                    $("#change-video").trigger("click");
                }
            }
        }
        var hideLinkPopup = function(ev) {
            if (!isChildOf($("#mdt-linkexpand").get(0), ev.target, $("#mdt-linkexpand").get(0))) {
                self.saveLinkData();
                $("#mdt-linkexpand").data("item", null);
                $("#mdt-linkexpand").hide();
                $(document).unbind('click', hideLinkPopup);
            }
        },
        isChildOf = function(parentEl, el, container) {
            if (parentEl == el) {
                return true;
            }
            if (parentEl.contains) {
                return parentEl.contains(el);
            }
            if ( parentEl.compareDocumentPosition ) {
                return !!(parentEl.compareDocumentPosition(el) & 16);
            }
            var prEl = el.parentNode;
            while(prEl && prEl != container) {
                if (prEl == parentEl)
                    return true;
                prEl = prEl.parentNode;
            }
            return false;
        };

        this.init();
    };
    window.MdSliderToolbar = MdSliderToolbar;
})(jQuery);
;
/*------------------------------------------------------------------------
# MD Slider - March 18, 2013
# ------------------------------------------------------------------------
# Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
--------------------------------------------------------------------------*/

(function($) {
    var MdSliderTimeline = function(panel) {
        var self = this;
        this.panel = panel;
        this.selectedItem = null;
        this.textItemTemplate = '<div class="md-item clearfix">'
            + '<div class="mdi-view"><a href="#" class="btn-viewlayer"></a></div>'
            + '<div class="mdi-name">'
            +       '<span class="mdit-text"></span>'
            +       '<span class="title">&nbsp;</span>'
            +       '<a href="#" class="btn-deletelayer"></a>'
            +       '<a href="#" class="btn-clonelayer"></a>'
            + '</div>'
            + '<div class="mdtl-times">'
            +    '<div class="mdi-frame"></div>'
            +  '</div>'
            +'</div>';
        this.imageItemTemplate = '<div class="md-item clearfix">'
            + '<div class="mdi-view"><a href="#" class="btn-viewlayer"></a></div>'
            + '<div class="mdi-name">'
            +       '<span class="mdit-image"></span>'
            +       '<span class="title">&nbsp;</span>'
            +       '<a href="#" class="btn-deletelayer"></a>'
            +       '<a href="#" class="btn-clonelayer"></a>'
            + '</div>'
            + '<div class="mdtl-times">'
            +    '<div class="mdi-frame"></div>'
            +  '</div>'
            +'</div>';
        this.videoItemTemplate = '<div class="md-item clearfix">'
            + '<div class="mdi-view"><a href="#" class="btn-viewlayer"></a></div>'
            + '<div class="mdi-name">'
            +       '<span class="mdit-video"></span>'
            +       '<span class="title">&nbsp;</span>'
            +       '<a href="#" class="btn-deletelayer"></a>'
            +       '<a href="#" class="btn-clonelayer"></a>'
            + '</div>'
            + '<div class="mdtl-times">'
            +    '<div class="mdi-frame"></div>'
            +  '</div>'
            +'</div>';
        this.maxStart = 0;
        this.rulewidth = 7;
        this.init = function() {

            self.rulewidth = $(".mdtl-ruler").width() / 200;
            $("#slideshow-time").css("left", 100 * self.rulewidth);
            $("#timeline-items").width(100 * self.rulewidth + 257);
            $("a.btn-viewlayer").live("click", function() {
                var timeline = $(this).parent().parent();
                var box = timeline.data("box");
                if(box != null) {
                    if ($(this).hasClass("btn-blank")) {
                        box.show();
                        box.attr("ishidden", "false");
                        timeline.removeClass("box-hide");
                        $(this).removeClass("btn-blank");
                    } else {
                        box.hide();
                        box.attr("ishidden", "true");
                        box.removeClass("ui-selected");
                        timeline.addClass("box-hide");
                        self.panel.triggerChangeSelectItem();
                        $(this).addClass("btn-blank");
                    }
                }
                return false;
            });
            $("a.btn-deletelayer").live("click", function() {
                var timeline = $(this).parent().parent();
                var box = timeline.data("box");
                if(box != null) {
                    timeline.remove();
                    box.remove();
                    self.panel.triggerChangeSelectItem();
                }
                return false;
            });
            $("a.btn-clonelayer").live("click", function() {
                var timeline = $(this).parent().parent();
                var box = timeline.data("box");
                if(box != null) {
                    self.panel.cloneBoxItem(box);
                }
                return false;
            });

            $("#timeline-items").sortable({
                handle: ".mdi-name",
                update: function(event, ui) {
                    self.triggerChangeOrderItem();
                },
                placeholder: "md-item"
            });
            $("#slideshow-time").draggable({
                axis: "x",
                grid: [self.rulewidth, 20],
                containment: "parent",
                drag: function(even, ui) {
                    if (ui.position.left <= self.maxStart + self.rulewidth)
                        return false;
                    return self.updateTimelineWidth();
                }
            });

        };
        this.updateTimelineWidth = function() {
            var width =  $("#slideshow-time").position().left;
            self.panel.setTimelineWidth(Math.round(width / self.rulewidth));
            $("#timeline-items").width(257 + width);
            $("#timeline-items .md-item").each(function() {
                var frame = $(this).find(".mdi-frame");
                var box = $(this).data("box");
                if(box != null && frame.position().left + frame.width() > width) {
                    frame.width(width - frame.position().left);
                    box.data("stoptime", width / self.rulewidth * 100);
                    self.panel.changeTimelineValue();
                }
            });
            return true;
        }

        this.addTimelineItem = function(type, box) {
            var item;
            if (type == "text") {
                item = $(this.textItemTemplate).clone();
            } else if (type == "image") {
                item = $(this.imageItemTemplate).clone();
            }  else {
                item = $(this.videoItemTemplate).clone();
            }
            var title = box.data("title");
            item.find("span.title").html(title);
            var starttime = box.data("starttime") ? box.data("starttime") : 0;
            var stoptime = box.data("stoptime") ? box.data("stoptime") : Math.round(($("#timeline-items").width() - 257) / self.rulewidth * 100);
            if(stoptime >  starttime) {
                item.find("div.mdi-frame").css({left: starttime * self.rulewidth / 100, width: (stoptime - starttime) * self.rulewidth / 100});
                if(box.data("starttime") == null || box.data("stoptime") == null) {
                    box.data("starttime", starttime);
                    box.data("stoptime", stoptime);
                    self.panel.changeTimelineValue();
                }
            }
            item.data("box", box);
            if(box.attr("ishidden") == "true") {
                item.addClass("box-hide");
                $("a.btn-viewlayer", item).addClass("btn-blank");
            }

            $("#timeline-items").prepend(item);
            $(item).find("div.mdi-frame").draggable({
                containment: "parent",
                grid: [self.rulewidth, 20],
                stop: function(event, ui) {
                    var item = $(this).parent().parent();
                    var box = item.data("box");
                    if (box != null) {
                        var position = $(ui.helper).position();
                        box.data("starttime", position.left / self.rulewidth * 100);
                        box.data("stoptime", (position.left + $(ui.helper).width()) / self.rulewidth * 100);
                        if (box.hasClass("ui-selected")) {
                            self.panel.triggerChangeSettingItem();
                        }
                    }
                    self.changeMaxStart();
                }
            });

            $(item.find("div.mdi-frame")).resizable({
                handles: "e, w",
                containment: "parent",
                minWidth: 2 * self.rulewidth,
                grid: [self.rulewidth, 20],
                stop: function(event, ui) {
                    var item = $(this).parent().parent();
                    var box = item.data("box");
                    if (box != null) {
                        var position = $(ui.helper).position();
                        box.data("starttime", Math.round(position.left / self.rulewidth * 100));
                        box.data("stoptime", Math.round((position.left + $(ui.helper).width()) / self.rulewidth * 100));
                        if (box.hasClass("ui-selected")) {
                            self.panel.triggerChangeSettingItem();
                        }
                    }
                    self.changeMaxStart();
                }
            });
            $(item).click(function() {
                if(!$(this).hasClass("active") && !$(this).hasClass("box-hide")) {
                    var box = $(this).data("box");
                    if (box != null) {
                        self.panel.changeSelectItem(box);
                    }
                }
            });
            box.data("timeline", item);
        }

        this.changeMaxStart = function() {
            var maxLeft = 0;
            $("#timeline-items .mdtl-times").each(function() {
                var thisLeft = $(this).find("div.mdi-frame").position().left;
                if (thisLeft > maxLeft) {
                    maxLeft = thisLeft;
                }
            });
            self.maxStart = maxLeft;
        }

        this.changeSelectItem = function(item) {
            this.selectedItem = item;
            self.triggerChangeSelectItem();
        }

        this.triggerChangeSelectItem = function() {
            $("#timeline-items > div.md-item.active").removeClass("active");
            if (this.selectedItem != null) {
                var item = this.selectedItem.data("timeline");
                if (item != null) {
                    $(item).addClass("active");
                }
            }
        }
        this.triggerChangeOrderItem = function() {
            $("#timeline-items .md-item").each(function(index) {
                var box = $(this).data("box");
                if (box != null) {
                    box.css("z-index", 1000 - index);
                }
            });
        }
        this.changeSelectedItemTitle = function() {
            if (this.selectedItem != null) {

                var item = this.selectedItem.data("timeline");
                if (item != null) {
                    var title = this.selectedItem.data("title");
                    $(item).find("span.title").html(title);
                }
            }
        }
        this.setTimelineWidth = function(timelinewidth) {
            if(timelinewidth) {
                $("#slideshow-time").css("left", timelinewidth * self.rulewidth);
                self.updateTimelineWidth();
            }

        }
        this.changeActivePanel = function() {
            $("#timeline-items").html("");
            var  timelinewidth = self.panel.getTimelineWidth()
            if(timelinewidth != null) {
                self.setTimelineWidth(timelinewidth);
            }
            else
                self.panel.setTimelineWidth($("#slideshow-time").position().left / self.rulewidth)
            var items = self.panel.getAllItemBox();

            items.sort(function(a, b){
                var aZindex = parseInt($(a).css("z-index"));
                var bZindex = parseInt($(b).css("z-index"));
                return ((aZindex < bZindex) ? -1 : ((aZindex > bZindex) ? 1 : 0));
            });

            items.each(function() {
                self.addTimelineItem($(this).data("type"), $(this));
            });
        }

        this.init();
    };
    window.MdSliderTimeline = MdSliderTimeline;
})(jQuery);
;
/*------------------------------------------------------------------------
 # MD Slider - March 18, 2013
 # ------------------------------------------------------------------------
 # Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
 --------------------------------------------------------------------------*/

(function($) {
    var MdSliderPanel = function() {
        var self = this;
        this.tabs = null;
        this.activePanel = null;
        this.selectedItem = null;
        this.mdSliderToolbar = new MdSliderToolbar(self);
        this.mdSliderTimeline = new MdSliderTimeline(self);
        this.textBoxTemplate = '<div class="slider-item ui-widget-content item-text" data-top="0" data-left="0" data-width="100" data-height="50" data-borderstyle="solid" data-type="text" data-title="Text" style="width: 100px; height: 50px;"><div>Text</div><span class="sl-tl"></span><span class="sl-tr"></span><span class="sl-bl"></span><span class="sl-br"></span><span class="sl-top"></span><span class="sl-right"></span><span class="sl-bottom"></span><span class="sl-left"></span> </div>';
        this.imageBoxTemplate = '<div class="slider-item ui-widget-content item-image" data-top="0" data-left="0" data-width="100" data-height="50" data-borderstyle="solid" style="height: 80px;width: 80px;" data-type="image"><img width="100%" height="100%" src="http://files.megadrupal.com/other/image.jpg" /><span class="sl-tl"></span><span class="sl-tr"></span><span class="sl-bl"></span><span class="sl-br"></span><span class="sl-top"></span><span class="sl-right"></span><span class="sl-bottom"></span><span class="sl-left"></span></div>';
        this.videoBoxTemplate = '<div class="slider-item ui-widget-content item-video" data-top="0" data-left="0" data-width="100" data-height="50" data-borderstyle="solid" style="height: 80px;width: 80px;" data-type="video"><img width="100%" height="100%" src="http://files.megadrupal.com/other/video.jpg" /><span class="sl-tl"></span><span class="sl-tr"></span><span class="sl-bl"></span><span class="sl-br"></span><span class="sl-top"></span><span class="sl-right"></span><span class="sl-bottom"></span><span class="sl-left"></span></div>';
        this.tab_counter = $("#md-tabs ul.md-tabs-head li.tab-item").size();
        this.init = function() {
            self.initTab();
            self.initPanel();
            self.initSliderItem();
            $(document).keyup(function(event) {
                var keyCode = event.keyCode || event.which;
                var isInput = $(event.target).is("input, textarea, select");
                if(!isInput && keyCode == 46 && self.selectedItem != null){
                    var timeline = self.selectedItem.data("timeline");
                    if(timeline != null) {
                        timeline.remove();
                        self.selectedItem.remove();
                        self.triggerChangeSelectItem();
                    }
                }
            });
            $(window).resize(function() {
                self.resizeWindow();
            })
        };
        this.initTab = function() {
            self.tabs = $("#md-tabs").tabs({
                tabTemplate: '<li class="tab-item first clearfix"><a class="tab-link" href="#{href}"><span class="tab-text">#{label}</span></a> <span class="ui-icon ui-icon-close">Remove Tab</span></li>',
                add: function( event, ui ) {
                    $( ui.panel ).append($('#dlg-slide-setting').html());
                    $( ui.panel ).data('timelinewidth', $('input[name=default-timelinewidth]').val());
                    self.tabs.tabs('select', ui.index);
                },
                show: function( event, ui ) {
                    $(self.activePanel).find(".slider-item.ui-selected").removeClass("ui-selected");
                    self.activePanel = $(ui.panel);
                    self.mdSliderTimeline.changeActivePanel();
                    self.triggerChangeSelectItem();
                    self.resizeBackgroundImage();
                }
            });
            $(".md-tabs-head li").live({
                mouseenter: function() {
                    $(this).find(".ui-icon-close").show();
                },
                mouseleave: function() {
                    $(this).find(".ui-icon-close").hide();
                }
            });

            $(".md-tabs-head span.ui-icon-close").live("click", function() {
                var _close = $(this);
                var panel_id = _close.prev().attr('href');
                var settings = JSON.parse($('.settings input', $(panel_id)).val());
                if (!confirm('Are you sure want to delete this slide? After accepting this slide will be removed completely.')) {
                    return;
                }

                if (settings.slide_id == -1) {
                    var index = $("li", self.tabs).index($(this).parent());
                    self.tabs.tabs("remove", index);
                }
                else {
                    $.post(location.protocol + '//' + location.host + Drupal.settings.basePath + '?q=admin/structure/md-slider/slide/delete', {sid: settings.slide_id}, function(data_response) {
                        if (data_response == 'OK') {
                            var index = $("li", self.tabs).index(_close.parent());
                            self.tabs.tabs("remove", index);
                        }
                    });
                }
            });
            self.tabs.find(".ui-tabs-nav").sortable({
                axis: "x",
                stop: function() {
                    self.tabs.tabs("refresh");
                }
            });
            /**
             * Added by Duynv
             */
            $("#slide-setting-dlg").dialog({
                resizable: false,
                autoOpen: false,
                draggable: false,
                modal: true,
                width: 960,
                open: function() {
                    var $tab = $(this).data("tab");
                    if($tab) {
                        var settings = $("input.panelsettings", $tab).val();
                        (settings != "") && (settings = $.stringToObject(settings));
                        self.setSlideSettingValue(settings);
                    }
                },
                buttons: {
                    Save: function() {
                        var $tab = $(this).data("tab");
                        if($tab) {
                            var settings = self.getSlideSettingValue();
                            var old_settings = $.stringToObject($("input.panelsettings", $tab).val());
                            settings= $.extend(old_settings, settings);
                            $("input.panelsettings", $tab).val($.objectToString(settings));
                            // Add slide background image
                            var slid = $('input[name=slider_id]').val();
                            $.post(Drupal.settings.basePath + '?q=admin/structure/md-slider/get-background-image', {fid: settings.background_image, slider_id: slid}, function(response) {
                                $('.md-slide-image img', self.activePanel).attr('src', response);
                            });
                        }
                        $(this).dialog("close");
                    },
                    Cancel: function() {
                        $(this).dialog("close");
                    }
                }
            });
            $('.panel-settings-link').live('click', function() {
                $("#slide-setting-dlg").data("tab", $(this).parent().parent()).dialog("open");
				return false;
            });
            $('.random-transition').click(function() {
                $('#navbar-content-transitions input').removeAttr("checked");
                for (i = 0; i < 3; i++) {
                    randomTran = Math.floor(Math.random() * 26) + 1;
                    $('#navbar-content-transitions li:eq('+randomTran+') input').attr("checked","checked");
                }
                return false;
            });

            $('.slide-choose-image-link, .slide-choose-thumbnail-link').live('click', function() {
                var input_save = $(this).parent().next();
                var _self = $(this);
                Drupal.media.popups.mediaBrowser(function(files) {
                    var icon = files[0];
                    Drupal.settings.select_image = icon;
                    input_save.val(icon.fid);
                    _self.next().empty().append('<img width="100" height="100" alt="" src="'+icon.url+'">');
                });
            });
            var slider = $("#md-slider").mdSlider({
                transitions: "fade",
                height: 150,
                width: 290,
                fullwidth: false,
                showArrow: true,
                showLoading: false,
                slideShow: true,
                showBullet: true,
                showThumb: false,
                slideShowDelay: 3000,
                loop: true,
                strips: 5,
                transitionsSpeed: 1500
            });
            $('#navbar-content-transitions li').hoverIntent(function(){
                var tran = $("input", this).attr('value');
                $("#md-slider").data("transitions", tran);
                var position = $(this).position();
                $("#md-tooltip").css({left: position.left - 200 + $(this).width() / 2, top: position.top - 180}).show();
            }, function() {$("#md-tooltip").hide()});

            /**
             * End added by Duynv
             */
            $('.panel-clone').live('click', function() {
                self.cloneTab($(this).parent().parent());
                return false;
            });
        };
        this.resizeWindow = function() {
            self.resizeBackgroundImage();
        }
        this.resizeBackgroundImage = function() {
            if($(".md-slidewrap", self.activePanel).hasClass("md-fullwidth")) {
                var panelWidth = $(".md-slide-image", self.activePanel).width(),
                    panelHeight = $(".md-slide-image", self.activePanel).height(),
                    $background = $(".md-slide-image img", self.activePanel),
                    dimensions = getImgSize($background.attr("src")),
                    width = dimensions.width,
                    height = dimensions.height;
                //console.log(panelWidth + " - " + panelHeight);
                if(height > 0 && panelHeight > 0) {
                    if((width / height) > (panelWidth / panelHeight)) {
                        var left = panelWidth - (panelHeight / height) * width;
                        $background.css({width: "auto", height: "100%"});
                        if(left < 0) {
                            $background.css({left: (left/2) + "px", top: 0 });
                        } else {
                            $background.css({left: 0, top: 0 });
                        }
                    } else {
                        var top = panelHeight - (panelWidth / width) * height;
                        $background.css({width: "100%", height: "auto"});
                        if(top < 0) {
                            $background.css({top: (top/2) + "px", left: 0 });
                        } else {
                            $background.css({left: 0, top: 0 });
                        }
                    }
                }
            }
        }
        function getImgSize(imgSrc) {
            var newImg = new Image();
            newImg.src = imgSrc;
            var dimensions = {height: newImg.height, width: newImg.width};
            return dimensions;
        };
        this.initSliderItem = function() {
            $("#md-tabs div.slider-item").each(function() {
                var setting = $(this).getItemValues();
                $(this).setItemStyle(setting);
            });
        }
        this.initPanel = function() {
            $("#add_tab").click(function() {
                self.addTab();
                return false;
            });
            $("#md-tabs .slider-item").each(function(){
                $(this).data("slidepanel", self).triggerItemEvent();
            });
        }

        this.addTab = function() {
            self.tab_counter++;
            var tab_title = "Slide " + self.tab_counter;
            self.tabs.tabs( "add", "#tabs-" + self.tab_counter, tab_title );
        }
        this.cloneTab = function(tab) {
            self.tab_counter++;
            var tab_title = "Slide " + self.tab_counter;
            self.tabs.tabs( "add", "#tabs-" + self.tab_counter, tab_title );
            self.activePanel = $("#tabs-" + self.tab_counter);
            $("#tabs-" + self.tab_counter).find(".md-slide-image").html(tab.find(".md-slide-image").html());
            var setting = $.stringToObject($("input.panelsettings", tab).val());
            setting.slide_id = -1;
            $("#tabs-" + self.tab_counter + " input.panelsettings").val($.objectToString(setting));
            $("#tabs-" + self.tab_counter).data("timelinewidth", tab.data("timelinewidth"));
            self.mdSliderTimeline.setTimelineWidth(tab.data("timelinewidth"));
            $(".slider-item", tab).each(function() {
                self.cloneBoxItem($(this));
            });
        }
        this.cloneBoxItem = function(boxItem) {
            var itemValue = $(boxItem).getItemValues();
            if(itemValue && self.activePanel != null) {
                var box,
                    type = itemValue.type;
                if (type == "text") {
                    box =  $(self.textBoxTemplate).clone();
                } else if (type == "image") {
                    box =  $(self.imageBoxTemplate).clone();
                } else {
                    box =  $(self.videoBoxTemplate).clone();
                }
                box.data("slidepanel", self).appendTo($(".md-objects", self.activePanel));
                box.setItemValues(itemValue);
                box.setItemStyle(itemValue);
                box.setItemHtml(itemValue);
                box.triggerItemEvent();
                self.mdSliderTimeline.addTimelineItem(type, box);
                return true;
            }
        }

        this.addBoxItem = function(type) {
            if (this.activePanel != null) {
                var box;
                if (type == "text") {
                    box =  $(this.textBoxTemplate).clone();
                } else if (type == "image") {
                    box =  $(this.imageBoxTemplate).clone();
                } else {
                    box =  $(this.videoBoxTemplate).clone();
                }
                self.mdSliderTimeline.addTimelineItem(type, box);
                box.data("slidepanel", this).appendTo($(".md-objects", this.activePanel)).triggerItemEvent();
                self.changeSelectItem(box);
                self.mdSliderTimeline.triggerChangeOrderItem();
                self.mdSliderToolbar.focusEdit();
                return true;
            }
            return false;
        };

        this.triggerChangeSelectItem = function() {
            if (this.activePanel == null) return;
            var selected = $(this.activePanel).find(".slider-item.ui-selected");
            if (selected.size() == 1) {
                this.selectedItem = selected;
            } else {
                this.selectedItem = null;
            }
            this.mdSliderToolbar.changeSelectItem(this.selectedItem);
            this.mdSliderTimeline.changeSelectItem(this.selectedItem);
        }

        this.setItemAttribute = function(attrName, value) {
            if (this.selectedItem != null) {
                switch (attrName) {
                    case "width": return self.setBoxWidth(this.selectedItem, value); break;
                    case "height": return self.setBoxHeight(this.selectedItem, value); break;
                    case "left": return self.setPositionBoxLeft(this.selectedItem, value); break;
                    case "top": return self.setPositionBoxTop(this.selectedItem, value); break;
                }
            }
        }
        this.setItemSize = function(width, height) {
            self.setBoxWidth(this.selectedItem, width);
            self.setBoxHeight(this.selectedItem, height);
        }
        this.setItemBackground = function(name, value) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data($.removeMinusSign(name), value);
                var  bgcolor = $(this.selectedItem).data("backgroundcolor");
                if(bgcolor && bgcolor != "") {
                    var opacity = parseInt($(this.selectedItem).data("backgroundtransparent"));
                    var rgb = $.HexToRGB(bgcolor);
                    opacity = opacity ? opacity : 100;
                    var itemcolor = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + (opacity / 100) + ')';
                    this.selectedItem.css("background-color", itemcolor);
                } else {
                    this.selectedItem.css("backgroundColor", "transparent");
                }
            }
            return false;
        }
        this.setItemFontSize = function(name, value) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data($.removeMinusSign(name), value);
                this.selectedItem.css(name, value + "px");
            }
        }
        this.setItemColor = function(value) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data("color", value);
                if(value != "") {
                    this.selectedItem.css("color", "#" + value);
                } else {
                    this.selectedItem.css("color", "");
                }

            }
        }
        this.setItemBorderColor = function(name, value) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data($.removeMinusSign(name), value);
                this.selectedItem.css("border-color", "#" + value);
            }
        }
        this.setItemCssPx = function(name, value) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data($.removeMinusSign(name), value);
                this.selectedItem.css(name, value + "px");
            }
        }
        this.setItemCss = function(name, value) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data($.removeMinusSign(name), value);
                this.selectedItem.css(name, value);
            }
        }
        this.setItemStyle = function(name, value) {
            if (this.selectedItem != null) {
                _tmpSelectedItem = this.selectedItem;
                $(_tmpSelectedItem).data(name, value);
                //var styleClasses = $('.mdt-style','#md-toolbar').find('option');
                var styleClasses = $.map($('.mdt-style option','#md-toolbar'), function(e) { return e.value; });
                $.each(styleClasses, function(i, v){
                    _tmpSelectedItem.removeClass(v);
                })
                _tmpSelectedItem.addClass(value);
            }
        }
        this.setItemOpacity = function(name, value) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data(name, value);
                this.selectedItem.css(name, value/100);
            }
        }
        this.setItemTitle = function(value) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data("title", value);
                if($(this.selectedItem).data("type") == "text")
                    $(this.selectedItem).find("div").html(value.replace(/\n/g, "<br />"));
                this.mdSliderTimeline.changeSelectedItemTitle();
            }
        }
        this.setImageData = function(imageid, name, thumbsrc) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data("title", name);
                $(this.selectedItem).data("fileid", imageid);
                $(this.selectedItem).find("img").attr("src", thumbsrc).load(function() {
                    var newImg = new Image();
                    newImg.src = thumbsrc;
                    var width = newImg.width,
                        height = newImg.height,
                        panelWidth = self.activePanel.find(".md-objects").width(),
                        panelHeight = self.activePanel.find(".md-objects").height();
                    if(height > 0 && panelHeight > 0) {
                        if(width > panelWidth || height > panelHeight) {
                            if((width / height) > (panelWidth / panelHeight)) {
                                self.setItemSize(panelWidth, height * panelWidth / width);
                            } else {
                                self.setItemSize(width * panelHeight / height, panelHeight);
                            }
                        } else {
                            self.setItemSize(width, height);
                        }
                        self.mdSliderToolbar.changeSelectItem(self.selectedItem);
                    }
                });
                self.mdSliderTimeline.changeSelectedItemTitle();
            }
        }
        this.setItemFontWeight = function(value) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data("fontweight", value);
                this.selectedItem.css("font-weight", parseInt(value));
                if(isNaN(value)) {
                    this.selectedItem.css("font-style", "italic");
                } else {
                    this.selectedItem.css("font-style", "normal");
                }
            }
        }
        this.setVideoData = function(videoid, name, thumbsrc) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data("title", name);
                $(this.selectedItem).data("fileid", videoid);
                $(this.selectedItem).find("img").attr("src", thumbsrc).load(function() {
                    var newImg = new Image();
                    newImg.src = thumbsrc;
                    var width = newImg.width,
                        height = newImg.height,
                        panelWidth = self.activePanel.find(".md-objects").width(),
                        panelHeight = self.activePanel.find(".md-objects").height();
                    if(height > 0 && panelHeight > 0) {
                        if(width > panelWidth || height > panelHeight) {
                            if((width / height) > (panelWidth / panelHeight)) {
                                self.setItemSize(panelWidth, height * panelWidth / width);
                            } else {
                                self.setItemSize(width * panelHeight / height, panelHeight);
                            }
                        } else {
                            self.setItemSize(width, height);
                        }
                        self.mdSliderToolbar.changeSelectItem(self.selectedItem);
                    }
                });
                self.mdSliderTimeline.changeSelectedItemTitle();
            }
        }
        this.setItemLinkData = function(link) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data("link", link);
            }
        }
        this.changeBorderPosition = function(borderposition) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data("borderposition", borderposition);
                var borderstyle = $(this.selectedItem).data("borderstyle");
                self.changeBorder(borderposition, borderstyle);
            }
        }
        this.changeBorderStyle = function(borderstyle) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data("borderstyle", borderstyle);
                var borderposition = $(this.selectedItem).data("borderposition");
                self.changeBorder(borderposition, borderstyle);
            }
        }
        this.changeBorder = function(borderposition, borderstyle) {
            if (this.selectedItem != null) {
                var borderStr = "";
                if(borderposition & 1) {
                    borderStr = borderstyle;
                } else {
                    borderStr = "none";
                }
                if(borderposition & 2) {
                    borderStr += " " + borderstyle;
                } else {
                    borderStr += " none";
                }
                if(borderposition & 4) {
                    borderStr += " " + borderstyle;
                } else {
                    borderStr += " none";
                }
                if(borderposition & 8) {
                    borderStr += " " + borderstyle;
                } else {
                    borderStr += " none";
                }
                $(this.selectedItem).css("border-style", borderStr);
            }
        }
        this.changeFontFamily = function(fontfamily) {
            if (this.selectedItem != null) {
                $(this.selectedItem).data("fontfamily", fontfamily);
                $(this.selectedItem).css("font-family", fontfamily);
            }
        }
        this.alignLeftSelectedBox = function() {
            var selectedItems = $(self.activePanel).find(".slider-item.ui-selected");
            if (selectedItems.size() > 1) {
                var minLeft = 10000;
                selectedItems.each(function () {
                    minLeft = ($(this).position().left < minLeft) ? $(this).position().left : minLeft;
                });
                selectedItems.each(function () {
                    self.setPositionBoxLeft(this, minLeft);
                });
            }
        }

        this.alignRightSelectedBox = function() {
            var selectedItems = $(self.activePanel).find(".slider-item.ui-selected");
            if (selectedItems.size() > 1) {
                var maxRight = 0;
                selectedItems.each(function() {
                    var thisRight = $(this).position().left + $(this).outerWidth();
                    maxRight = (thisRight > maxRight) ? thisRight : maxRight;
                });
                selectedItems.each(function() {
                    self.setPositionBoxLeft(this, maxRight - $(this).outerWidth());
                });

            }
        }

        this.alignCenterSelectedBox = function() {
            var selectedItems = $(self.activePanel).find(".slider-item.ui-selected");
            if (selectedItems.size() > 1) {
                var center = selectedItems.first().position().left + selectedItems.first().outerWidth() / 2;
                selectedItems.each(function() {
                    self.setPositionBoxLeft(this, center - $(this).outerWidth() / 2);
                });
            }
        }

        this.alignTopSelectedBox = function() {
            var selectedItems = $(self.activePanel).find(".slider-item.ui-selected");
            if (selectedItems.size() > 1) {
                var minTop = 10000;
                selectedItems.each(function() {
                    minTop = ($(this).position().top < minTop) ? $(this).position().top : minTop;
                });
                selectedItems.each(function() {
                    self.setPositionBoxTop(this, minTop);
                });
            }
        }

        this.alignBottomSelectedBox = function() {
            var selectedItems = $(self.activePanel).find(".slider-item.ui-selected");
            if (selectedItems.size() > 1) {
                var maxBottom = 0;
                selectedItems.each(function() {
                    thisBottom = $(this).position().top + $(this).outerHeight();
                    maxBottom = (thisBottom > maxBottom) ? thisBottom : maxBottom;
                });
                selectedItems.each(function() {
                    self.setPositionBoxTop(this, maxBottom - $(this).outerHeight());
                });

            }
        }

        this.alignMiddleSelectedBox = function() {
            var selectedItems = $(self.activePanel).find(".slider-item.ui-selected");
            if (selectedItems.size() > 1) {
                var center = selectedItems.first().position().top + selectedItems.first().outerHeight() / 2;
                selectedItems.each(function() {
                    self.setPositionBoxTop(this, center - $(this).outerHeight() / 2);
                });
            }
        }
        this.spaceVertical = function(spacei) {
            var selectedItems = $(self.activePanel).find(".slider-item.ui-selected");
            if (selectedItems.size() > 1) {
                spacei = parseInt(spacei);

                // sap xep thu tu top items
                var n = selectedItems.size();
                for (var i = 0; i < n - 1; i++) {
                    for (var j = i+1; j < n; j++) {
                        if ($(selectedItems[i]).position().top > $(selectedItems[j]).position().top) {
                            var swap = selectedItems[i];
                            selectedItems[i] = selectedItems[j];
                            selectedItems[j] = swap;
                        }
                    }
                }

                if (spacei > 0) {
                    for (var i = 1; i < n; i++) {
                        self.setPositionBoxTop($(selectedItems[i]), $(selectedItems[i-1]).position().top + $(selectedItems[i-1]).outerHeight() + spacei);
                    }
                } else if(n > 2) {
                    var sumHeight = 0;
                    for (var i = 0; i < n - 1; i++) {
                        sumHeight += $(selectedItems[i]).outerHeight();
                    }
                    spacei = ($(selectedItems[n-1]).position().top - $(selectedItems[0]).position().top - sumHeight) / (n - 1);
                    for (var i = 1; i < n - 1; i++) {
                        self.setPositionBoxTop($(selectedItems[i]), $(selectedItems[i-1]).position().top + $(selectedItems[i-1]).outerHeight() + spacei);
                    }
                }

            }
        }
        this.spaceHorizontal = function(spacei) {
            var selectedItems = $(self.activePanel).find(".slider-item.ui-selected");
            if (selectedItems.size() > 1) {
                spacei = parseInt(spacei);

                // sap xep thu tu left items
                var n = selectedItems.size();
                for (var i = 0; i < n - 1; i++) {
                    for (var j = i+1; j < n; j++) {
                        if ($(selectedItems[i]).position().left > $(selectedItems[j]).position().left) {
                            var swap = selectedItems[i];
                            selectedItems[i] = selectedItems[j];
                            selectedItems[j] = swap;
                        }
                    }
                }

                if (spacei > 0) {
                    for (var i = 1; i < n; i++) {
                        self.setPositionBoxLeft($(selectedItems[i]), $(selectedItems[i-1]).position().left + $(selectedItems[i-1]).outerWidth() + spacei);
                    }
                } else if(n > 2) {
                    var sumWidth = 0;
                    for (var i = 0; i < n - 1; i++) {
                        sumWidth += $(selectedItems[i]).outerWidth();
                    }
                    spacei = ($(selectedItems[n-1]).position().left - $(selectedItems[0]).position().left - sumWidth) / (n - 1);
                    for (var i = 1; i < n - 1; i++) {
                        self.setPositionBoxLeft($(selectedItems[i]), $(selectedItems[i-1]).position().left + $(selectedItems[i-1]).outerWidth() + spacei);
                    }
                }

            }
        }
        this.setPositionBoxLeft = function(el, left) {
            left = (left > 0) ? left : 0;
            var maxLeft = $(el).parent().width() - $(el).outerWidth(true);
            if(left > maxLeft)
                left = maxLeft;
            $(el).css("left", left + "px");
            $(el).data("left", left);
            return left;
        }
        this.setPositionBoxTop = function(el, top) {
            top = (top > 0) ? top : 0;
            var maxTop = $(el).parent().height() - $(el).outerHeight();
            if(top > maxTop)
                top = maxTop;
            $(el).css("top", top + "px");
            $(el).data("top", top);
            return top;
        }
        this.setBoxWidth = function(el, width) {
            if(width > 0) {
                var maxWidth = $(el).parent().width() - $(el).position().left;
                if(width > maxWidth)
                    width = maxWidth;
                $(el).width(width);
                $(el).data("width", width);
                return width;
            }
            return $(el).width();
        }
        this.setBoxHeight = function(el, height) {
            if(height > 0) {
                var maxHeight = $(el).parent().height() - $(el).position().top;
                if(height > maxHeight)
                    height = maxHeight;
                $(el).height(height);
                $(el).data("height", height);
                return height;
            }
            return $(el).height();
        }
        this.triggerChangeSettingItem = function() {
            self.mdSliderToolbar.changeToolbarValue();
        }
        this.changeSelectItem = function(item) {
            $(self.activePanel).find(".slider-item.ui-selected").removeClass("ui-selected");
            $(item).addClass("ui-selected");
            this.triggerChangeSelectItem();
        }
        this.getAllItemBox = function() {
            return $("div.slider-item", self.activePanel);
        }
        this.changeTimelineValue = function() {
            self.mdSliderToolbar.changeTimelineValue();
        }
        this.setTimelineWidth = function(timelinewidth) {
            if(self.activePanel) {
                $(self.activePanel).data("timelinewidth", timelinewidth);
            }
        }
        this.getTimelineWidth = function() {
            if(self.activePanel) {
                return $(self.activePanel).data("timelinewidth");
            }
            return null;
        }
        this.getSliderData = function() {
            var data = [];
            var ishide = false;
            $("#md-tabs .ui-tabs-nav a.tab-link").each(function() {
                var panel = $($(this).attr("href"));
                if(panel.size()) {
                    ishide = false;
                    if(panel.hasClass("ui-tabs-hide")) {
                        panel.removeClass("ui-tabs-hide");
                        ishide = true;
                    }

                    var itemsetting = $.stringToObject($("input.panelsettings", panel).val());
                    itemsetting.timelinewidth = panel.data("timelinewidth");
                    var boxitems = [];
                    $("div.slider-item", panel).each(function() {
                        boxitems.push($(this).getItemValues());
                    });
                    data.push({itemsetting: itemsetting, boxitems: boxitems});
                    if(ishide) {
                        panel.addClass("ui-tabs-hide");
                    }
                }
            });
            return data;
        }
        this.getSlideSettingValue = function() {
            var setting = {
                background_image: $("#slide-backgroundimage").val(),
                custom_thumbnail: $("#slide-thumbnail").val()
            };
            var transitions = [];
            $('#navbar-content-transitions input:checked').each(function() {
                transitions.push($(this).val());
            });
            setting.transitions = transitions;
            return setting;
        };
        this.setSlideSettingValue = function(setting) {
            if(typeof setting != 'object') {
                setting = {};
            }
            $.extend({
                background_image: "-1",
                custom_thumbnail: "-1",
                transitions: []
            }, setting);
            $("#slide-backgroundimage").val(setting.background_image);
            $("#slide-thumbnail").val(setting.custom_thumbnail);

            $('#navbar-content-transitions input').attr("checked", false);
            if(setting && setting.transitions) {
                $.each(setting.transitions, function(index, trant) {
                    $('#navbar-content-transitions input[value='+trant+']').attr("checked", true);
                });
            }
            $('#slide-thumbnail-preview').empty();
            if (setting && setting.custom_thumbnail != -1) {
                var slid = $('input[name=slider_id]').val();
                $('#slide-thumbnail-preview').append('<img width="100" height="100" alt="" >');
                $.post(Drupal.settings.basePath + '?q=admin/structure/md-slider/get-background-image', {fid: setting.custom_thumbnail, slider_id: slid}, function(response) {
                    $('#slide-thumbnail-preview img').attr('src', response);
                });
            }
            $('#slide-background-preview').empty();
            if (setting && setting.background_image != -1) {
                var slid = $('input[name=slider_id]').val();
                $('#slide-background-preview').append('<img width="100" height="100" alt="" >');
                $.post(Drupal.settings.basePath + '?q=admin/structure/md-slider/get-background-image', {fid: setting.background_image, slider_id: slid}, function(response) {
                    $('#slide-background-preview img').attr('src', response);
                });
            }
        };

    };
    window.MdSliderPanel = MdSliderPanel;

})(jQuery);;
/*------------------------------------------------------------------------
# MD Slider - March 18, 2013
# ------------------------------------------------------------------------
# Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
--------------------------------------------------------------------------*/

(function($) {
    $(document).ready(function() {
        var mdSliderPanel = new MdSliderPanel();
        mdSliderPanel.init();
        $('#md-slider-edit-form').submit(function() {
            $("#edit-slider-data-save").val($.objectToString(mdSliderPanel.getSliderData()));
        });
    });
})(jQuery);
;
