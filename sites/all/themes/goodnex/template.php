<?php 
/**
 * Define $root global variable.
 */
global $theme_root, $parent_root, $theme_path;
$theme_root = base_path() . path_to_theme();
$parent_root = base_path() . drupal_get_path('theme', 'goodnex');

/**
 * Modify theme_js_alter()
 */
function goodnex_js_alter(&$js) {
  if (isset($js['misc/jquery.js'])) {
       $jsPath = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
       $js['misc/jquery.js']['version'] = '1.7.2';
    $js['misc/jquery.js']['data'] = $jsPath;
  }
}

/**
 * Modify theme_html_head_alter()
 */
function goodnex_html_head_alter(&$head_elements) {
	unset($head_elements['system_meta_generator']);
	foreach ($head_elements as $key => $element) {
		if (isset($element['#attributes']['rel']) && $element['#attributes']['rel'] == 'canonical') {
		  unset($head_elements[$key]);
		}
		if (isset($element['#attributes']['rel']) && $element['#attributes']['rel'] == 'shortlink') {
		  unset($head_elements[$key]);
		}
  }
}

/**
 * Modify theme_button()
 */
function goodnex_button($variables) {

  $element = $variables['element'];
  $element['#attributes']['type'] = 'submit';
  element_set_attributes($element, array('id', 'name', 'value'));

  $element['#attributes']['class'][] = 'button default form-' . $element['#button_type'];
  if (!empty($element['#attributes']['disabled'])) {
    $element['#attributes']['class'][] = 'form-button-disabled';
  }

  return '<input' . drupal_attributes($element['#attributes']) . ' />';
}

/**
 * Modify theme_menu_local_tasks()
 */
function goodnex_menu_local_tasks(&$variables) {
  $output = '';

  if (!empty($variables['primary'])) {
    $variables['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
    $variables['primary']['#prefix'] .= '<ul class="tabs-nav clearfix">';
    $variables['primary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['primary']);
  }
  if (!empty($variables['secondary'])) {
    $variables['secondary']['#prefix'] = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';
    $variables['secondary']['#prefix'] .= '<ul class="tabs-nav clearfix">';
    $variables['secondary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['secondary']);
  }

  return $output;
}

/**
 * Modify theme_preprocess_page()
 */
function goodnex_preprocess_page(&$vars, $hook) {
  if (isset($vars['node'])) {
    $suggest = "page__node__{$vars['node']->type}";
    $vars['theme_hook_suggestions'][] = $suggest;
  }
  
  $status = drupal_get_http_header("status");  
  if($status == "404 Not Found") {      
    $vars['theme_hook_suggestions'][] = 'page__404';
  }
  
  if (arg(0) == 'taxonomy' && arg(1) == 'term' ){
    $term = taxonomy_term_load(arg(2));
    $vars['theme_hook_suggestions'][] = 'page--taxonomy--vocabulary--' . $term->vid;
  }
}

/**
 * Impelements hook_form_alter()
 */
function goodnex_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    $form['search_block_form']['#title'] = t('Search'); // Change the text on the label element
    $form['search_block_form']['#title_display'] = 'invisible'; // Toggle label visibilty
    $form['search_block_form']['#size'] = 40;  // define size of the textfield
    $form['search_block_form']['#default_value'] = t('Search'); // Set a default value for the textfield
    $form['actions']['submit'] =  array(
      '#type' => 'submit',
    	'#prefix' => '<button type="submit" class="submit-search">',
    	'#suffix' => '</button>',
    	'#markup' => 'search',
    );

    // Add extra attributes to the text box
    $form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search';}";
    $form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Search') {this.value = '';}";
    // Prevent user from searching the default text
    $form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Search'){ alert('Please enter a search'); return false; }";

    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
  }
} 

/**
* Implements hook_form_contact_site_form_alter().
*/
function goodnex_form_contact_site_form_alter(&$form, &$form_state, $form_id) {
  global $user;
  
	$form['mail'] = array(
	  '#type' => 'textfield',
	  '#title' => t('Email'),
	  '#maxlength' => 255,
	  '#default_value' => $user->uid ? $user->mail : '',
	  '#required' => TRUE,
	);

}

/**
 * Theme node pagination function().
 */
function goodnex_node_pagination($node, $mode = 'n') {
  $query = new EntityFieldQuery();
	$query
    ->entityCondition('entity_type', 'node')
    ->entityCondition('bundle', $node->type);
  $result = $query->execute();
  $nids = array_keys($result['node']);
  
  while ($node->nid != current($nids)) {
    next($nids);
  }
  
  switch($mode) {
    case 'p':
      prev($nids);
    break;
		
    case 'n':
      next($nids);
    break;
		
    default:
    return NULL;
  }
  
  return current($nids);
}

/**
 * Modify theme_process_page()
 */
function goodnex_process_page(&$variables) {	
  // Assign site name and slogan toggle theme settings to variables.
  $variables['disable_site_name']   = theme_get_setting('toggle_name') ? FALSE : TRUE;
  $variables['disable_site_slogan'] = theme_get_setting('toggle_slogan') ? FALSE : TRUE;
   // Assign site name/slogan defaults if there is no value.
  if ($variables['disable_site_name']) {
    $variables['site_name'] = filter_xss_admin(variable_get('site_name', 'Drupal'));
  }
  if ($variables['disable_site_slogan']) {
    $variables['site_slogan'] = filter_xss_admin(variable_get('site_slogan', ''));
  }
}	

/**
 * Modify theme_preprocess_username()
 */
function goodnex_preprocess_username(&$vars) {
  global $theme_key;
  $theme_name = $theme_key;
  
  // Add rel=author for SEO and supporting search engines
  if (isset($vars['link_path'])) {
    $vars['link_attributes']['rel'][] = 'author';
  }
  else {
    $vars['attributes_array']['rel'][] = 'author';
  }
}

/**
 * Modify theme_menu_link()
 */
function goodnex_menu_link(array $variables) {
  //unset all the classes
  unset($variables['element']['#attributes']['class']);
  $element = $variables['element'];
  $sub_menu = '';
  
  if($variables['element']['#attributes']) {
    $sub_menu = '';
  }

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }
  
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  
  // if link class is active, make li class as active too
  if(strpos($output,"active")>0){
    $element['#attributes']['class'][] = "current-menu-item";
  }
  
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

function goodnex_menu_tree(&$variables) {
  return '<ul>' . $variables['tree'] . '</ul>';
}

/**
 * Modify theme_item_list()
 */
function goodnex_item_list($vars) {
  if (isset($vars['attributes']['class']) && in_array('pager', (array)$vars['attributes']['class'])) {
    unset($vars['attributes']['class']);
    foreach ($vars['items'] as $i => &$item) {
      if (in_array('pager-current', $item['class'])) {
        $item['class'] = array('page-numbers-current current');
        $item['data'] = $item['data'];
      }
      
      elseif (in_array('pager-item', $item['class'])) {
        $item['class'] = array('page-numbers');
        $item['data'] =  $item['data'];
      }
      
      elseif (in_array('pager-next', $item['class'])) {
        $item['class'] = array('next page-numbers');
        $item['data'] =  $item['data'];
      }
      
      elseif (in_array('pager-last', $item['class'])) {
        $item['class'] = array('page-numbers');
        $item['data'] =  $item['data'];
      }
      
      elseif (in_array('pager-first', $item['class'])) {
        $item['class'] = array('page-numbers first');
        $item['data'] =  $item['data'];
      }
      
      elseif (in_array('pager-previous', $item['class'])) {
        $item['class'] = array('prev page-numbers');
        $item['data'] =  $item['data'];
      }
      
      elseif (in_array('pager-ellipsis', $item['class'])) {
        $item['class'] = array('disabled');
        $item['data'] =  $item['data'];
      }
    }
    return '<div class="wp-pagenavi clearfix">' . theme_item_list($vars) . '</div>';
  }
  return theme_item_list($vars);
}

/**
 * Modify theme_pager_link()
 */
function goodnex_pager_link($variables) {
  $text = $variables['text'];
  $page_new = $variables['page_new'];
  $element = $variables['element'];
  $parameters = $variables['parameters'];
  $attributes = $variables['attributes'];

  $page = isset($_GET['page']) ? $_GET['page'] : '';
  if ($new_page = implode(',', pager_load_array($page_new[$element], $element, explode(',', $page)))) {
    $parameters['page'] = $new_page;
  }

  $query = array();
  if (count($parameters)) {
    $query = drupal_get_query_parameters($parameters, array());
  }
  if ($query_pager = pager_get_query_parameters()) {
    $query = array_merge($query, $query_pager);
  }

  // Set each pager link title
  if (!isset($attributes['title'])) {
    static $titles = NULL;
    if (!isset($titles)) {
      $titles = array(
        t('« first') => t('Go to first page'),
        t('‹ prev') => t('Go to previous page'),
        t('next ›') => t('Go to next page'),
        t('last »') => t('Go to last page'),
      );
    }
    if (isset($titles[$text])) {
      $attributes['title'] = $titles[$text];
    }
    elseif (is_numeric($text)) {
      $attributes['title'] = t('Go to page @number', array('@number' => $text));
    }
  }

  // @todo l() cannot be used here, since it adds an 'active' class based on the
  //   path only (which is always the current path for pager links). Apparently,
  //   none of the pager links is active at any time - but it should still be
  //   possible to use l() here.
  // @see http://drupal.org/node/1410574
  $attributes['href'] = url($_GET['q'], array('query' => $query));
  return '<a' . drupal_attributes($attributes) . '>' . check_plain($text) . '</a>';
}

/**
 * Modify theme_field()
 */
function goodnex_field($variables) {
 
  $output = '';
 
  // Render the label, if it's not hidden.
  if (!$variables['label_hidden']) {
    $output .= '<div class="field-label"' . $variables['title_attributes'] . '>' . $variables['label'] . ':&nbsp;</div>';  
  }
  
  if ($variables['element']['#field_name'] == 'field_tags') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
    
  elseif ($variables['element']['#field_name'] == 'field_image') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
  
  elseif ($variables['element']['#field_name'] == 'field_before_title') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
  
  elseif ($variables['element']['#field_name'] == 'field_url') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
  
  elseif ($variables['element']['#field_name'] == 'field_caption') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
  
  elseif ($variables['element']['#field_name'] == 'field_portfolio_category') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(' ', $rendered_tags);
  }
  
  elseif ($variables['element']['#field_name'] == 'field_detail_icon') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
  
  elseif ($variables['element']['#field_name'] == 'field_active') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
  
  elseif ($variables['element']['#field_name'] == 'field_detail_color') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
  
  elseif ($variables['element']['#field_name'] == 'field_detail_color_type') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }

  
  elseif ($variables['element']['#field_name'] == 'field_detail_url') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
  
  elseif ($variables['element']['#field_name'] == 'field_detail_caption') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
  
  elseif ($variables['element']['#field_name'] == 'field_detail_info') {
    // For tags, concatenate into a single, comma-delimitated string.
    foreach ($variables['items'] as $delta => $item) {
      $rendered_tags[] = drupal_render($item);
    }
    $output .= implode(', ', $rendered_tags);
  }
         
  else {
    $output .= '<div class="field-items"' . $variables['content_attributes'] . '>';
    // Default rendering taken from theme_field().
    foreach ($variables['items'] as $delta => $item) {
      $classes = 'field-item ' . ($delta % 2 ? 'odd' : 'even');
      $output .= '<div class="' . $classes . '"' . $variables['item_attributes'][$delta] . '>' . drupal_render($item) . '</div>';
    }
    $output .= '</div>';
    // Render the top-level DIV.
    $output = '<div class="' . $variables['classes'] . '"' . $variables['attributes'] . '>' . $output . '</div>';
  }
  
  // Render the top-level DIV.
  return $output;
}

/**
 * User CSS function. Separate from goodnex_preprocess_html so function can be called directly before </head> tag.
 */
function goodnex_user_css() {
  echo "<!-- User defined CSS -->";
  echo "<style type='text/css'>";
  echo theme_get_setting('user_css');
  echo "</style>";
  echo "<!-- End user defined CSS -->";	
}

/**
 * Add theme META tags and style sheets to the header.
 */
function goodnex_preprocess_html(&$vars){
  global $parent_root;

  $viewport = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' =>  'width=device-width, initial-scale=1, maximum-scale=1',
    ),
    '#weight' => 1,
  );
  
  $custom_color = array(
    '#type' => 'markup',
    '#markup' => "<style type='text/css'>.navigation > div > ul ul li:hover > a, .navigation > div > ul ul li.current-menu-item > a, .navigation > div > ul ul li.current-menu-parent > a, .navigation > div > ul ul li.current-menu-ancestor > a, .navigation > div > ul ul li.current_page_item > a, .navigation > div > ul ul li.current_page_parent > a, .navigation > div > ul ul li.current_page_ancestor > a, .simple-pricing-table.type-1 .featured .cost, .simple-pricing-table.type-2 .title, .widget_popular_posts a:hover h6, .portfolio-filter li a:hover, #sidebar .widget li a:hover, .portfolio-filter .active,  .entry-meta span:before, .entry-title h2 a:hover, #sidebar .jta-tweet-a, .entry-meta a:hover, .author-entry h5, #footer a:hover, .quote-author, .tooltip {color: #".theme_get_setting('custom_color')." !important;}</style> ",
    '#weight' => 2,
  );
  
  $custom_background_color = array(
    '#type' => 'markup',
    '#markup' => "<style type='text/css'>.navigation > div > ul > li:hover > a, .navigation > div > ul > li.current-menu-item > a, .navigation > div > ul > li.current-menu-parent > a, .navigation > div > ul > li.current-menu-ancestor > a, .navigation > div > ul > li.current_page_item > a, .navigation > div > ul > li.current_page_parent > a, .navigation > div > ul > li.current_page_ancestor > a, .scribble .projects-carousel li:hover > a:after, .simple-pricing-table.type-2 .featured .price, .scribble article:hover .project-meta:after, .simple-pricing-table .featured .button, .jta-tweet-list-controls span:hover, .simple-pricing-table.type-1 .title, .gallery-slider-nav:hover a:hover, .color-1.scribble .team-entry:hover:after, .scribble .tabs-nav .active:after, .post-slider-nav:hover a:hover, .flex-direction-nav a:hover, .portfolio-controls a:hover, .acc-trigger.active:before, .detail-box .transform, .ajax-nav li:hover > a, .jcarousel-prev:hover, .jcarousel-next:hover, .wp-pagenavi .current, .button.default:hover, .flexslider .caption, .ajax-nav .current a, ul.type-1 li:before, .quotes-nav a:hover, #back-top:hover, .dropcap.color, i.small-arrows, .curtain, .highlight, .button.default:hover	{background-color: #".theme_get_setting('custom_color')." !important; }</style> ",
    '#weight' => 3,
  );
  
  $custom_border_color = array(
    '#type' => 'markup',
    '#markup' => "<style type='text/css'>.portfolio-items article:hover .project-meta, .projects-carousel li:hover > a, .ajax-nav li:hover:before, .ajax-nav .current:before, .tabs-nav .active, .team-entry:hover{border-color: #".theme_get_setting('custom_color')." }</style> ",
    '#weight' => 4,
  );
  
  $moz_highlight = array(
    '#type' => 'markup',
    '#markup' => "<style type='text/css'>::-moz-selection {background-color: #".theme_get_setting('custom_color')." }</style> ",
    '#weight' => 5,
  );
  
  $other_highlight = array(
    '#type' => 'markup',
    '#markup' => "<style type='text/css'>::selection {background-color: #".theme_get_setting('custom_color')." }</style> ",
    '#weight' => 6,
  );
  
  $background_color = array(
    '#type' => 'markup',
    '#markup' => "<style type='text/css'>body {background-color: #".theme_get_setting('body_background_color')." !important; background-image: none !important;}</style> ",
  );
  
  if ( theme_get_setting('black_and_white') == '1' ) {
  
	  $black_and_white = array(
	    '#type' => 'markup',
	    '#markup' => "
	      <script type='text/javascript'>
	      var objBlackAndWhite  = {
					hoverEffect: true, // default true
					// set the path to BnWWorker.js for a superfast implementation
					webworkerPath: '',
					// for the images with a fluid width and height 
					responsive: true,
					invertHoverEffect: false,
					speed: {//this property could also be just speed: value for both fadeIn and fadeOut
						fadeIn: 400, // 400ms for fadeIn animations
						fadeOut: 800 // 800ms for fadeOut animations
					}
		    };
		  </script>  
	    ",
	  );
  
  }
  
  else {
	  
	  $black_and_white = array(
    '#type' => 'markup',
    '#markup' => "
      <script type='text/javascript'>
      var objBlackAndWhite  = {
				hoverEffect: false, // default true
				// set the path to BnWWorker.js for a superfast implementation
				webworkerPath: '',
				// for the images with a fluid width and height 
				responsive: true,
				invertHoverEffect: true,
				speed: {//this property could also be just speed: value for both fadeIn and fadeOut
					fadeIn: 400, // 400ms for fadeIn animations
					fadeOut: 800 // 800ms for fadeOut animations
				}
	    };
	  </script>  
    ",
  );
	  
  }
  
  drupal_add_html_head( $viewport, 'viewport');
  
  drupal_add_html_head( $black_and_white, 'black_and_white');
  
  if (theme_get_setting('color_scheme') == "custom") {
    drupal_add_html_head( $custom_color, 'custom_color' );
    drupal_add_html_head( $custom_border_color, 'custom_border_color' );
    drupal_add_html_head( $moz_highlight , 'moz_highlight ' );
    drupal_add_html_head( $other_highlight , 'other_highlight ' );
    drupal_add_html_head( $custom_background_color, 'custom_background_color' );
  }
  
  if (theme_get_setting('body_background') == "custom_background_color") {
    drupal_add_html_head( $background_color, 'background_color');
  }

}

?>