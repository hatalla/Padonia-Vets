/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-svg-touch-shiv-addtest-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(l.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m={svg:"http://www.w3.org/2000/svg"},n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",l.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},n.svg=function(){return!!b.createElementNS&&!!b.createElementNS(m.svg,"svg").createSVGRect};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),h=j=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=l,e.testStyles=t,e}(this,this.document);;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright � 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('h.i[\'1a\']=h.i[\'z\'];h.O(h.i,{y:\'D\',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,74,'||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce'.split('|'),0,{}));
/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.9999.8 (26-OCT-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
(function(c,d){var b="2.9999.8";if(c.support===d){c.support={opacity:!(c.browser.msie)}}function g(t){if(c.fn.cycle.debug){f(t)}}function f(){if(window.console&&console.log){console.log("[cycle] "+Array.prototype.join.call(arguments," "))}}c.expr[":"].paused=function(s){return s.cyclePause};c.fn.cycle=function(t,s){var u={s:this.selector,c:this.context};if(this.length===0&&t!="stop"){if(!c.isReady&&u.s){f("DOM not ready, queuing slideshow");c(function(){c(u.s,u.c).cycle(t,s)});return this}f("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var y=l(this,t,s);if(y===false){return}y.updateActivePagerLink=y.updateActivePagerLink||c.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout)}this.cycleTimeout=this.cyclePause=0;this.cycleStop=0;var z=c(this);var A=y.slideExpr?c(y.slideExpr,this):z.children();var w=A.get();if(w.length<2){f("terminating; too few slides: "+w.length);return}var v=q(z,A,w,y,u);if(v===false){return}var x=v.continuous?10:m(w[v.currSlide],w[v.nextSlide],v,!v.backwards);if(x){x+=(v.delay||0);if(x<10){x=10}g("first timeout: "+x);this.cycleTimeout=setTimeout(function(){n(w,v,0,!y.backwards)},x)}})};function k(s,v,u){var w=c(s).data("cycle.opts");if(!w){return}var t=!!s.cyclePause;if(t&&w.paused){w.paused(s,w,v,u)}else{if(!t&&w.resumed){w.resumed(s,w,v,u)}}}function l(s,v,t){if(s.cycleStop===d){s.cycleStop=0}if(v===d||v===null){v={}}if(v.constructor==String){switch(v){case"destroy":case"stop":var x=c(s).data("cycle.opts");if(!x){return false}s.cycleStop++;if(s.cycleTimeout){clearTimeout(s.cycleTimeout)}s.cycleTimeout=0;if(x.elements){c(x.elements).stop()}c(s).removeData("cycle.opts");if(v=="destroy"){r(s,x)}return false;case"toggle":s.cyclePause=(s.cyclePause===1)?0:1;w(s.cyclePause,t,s);k(s);return false;case"pause":s.cyclePause=1;k(s);return false;case"resume":s.cyclePause=0;w(false,t,s);k(s);return false;case"prev":case"next":x=c(s).data("cycle.opts");if(!x){f('options not found, "prev/next" ignored');return false}c.fn.cycle[v](x);return false;default:v={fx:v}}return v}else{if(v.constructor==Number){var u=v;v=c(s).data("cycle.opts");if(!v){f("options not found, can not advance slide");return false}if(u<0||u>=v.elements.length){f("invalid slide index: "+u);return false}v.nextSlide=u;if(s.cycleTimeout){clearTimeout(s.cycleTimeout);s.cycleTimeout=0}if(typeof t=="string"){v.oneTimeFx=t}n(v.elements,v,1,u>=v.currSlide);return false}}return v;function w(z,A,y){if(!z&&A===true){var B=c(y).data("cycle.opts");if(!B){f("options not found, can not resume");return false}if(y.cycleTimeout){clearTimeout(y.cycleTimeout);y.cycleTimeout=0}n(B.elements,B,1,!B.backwards)}}}function e(s,t){if(!c.support.opacity&&t.cleartype&&s.style.filter){try{s.style.removeAttribute("filter")}catch(u){}}}function r(s,t){if(t.next){c(t.next).unbind(t.prevNextEvent)}if(t.prev){c(t.prev).unbind(t.prevNextEvent)}if(t.pager||t.pagerAnchorBuilder){c.each(t.pagerAnchors||[],function(){this.unbind().remove()})}t.pagerAnchors=null;c(s).unbind("mouseenter.cycle mouseleave.cycle");if(t.destroy){t.destroy(t)}}function q(C,Q,z,y,J){var s;var H=c.extend({},c.fn.cycle.defaults,y||{},c.metadata?C.metadata():c.meta?C.data():{});var F=c.isFunction(C.data)?C.data(H.metaAttr):null;if(F){H=c.extend(H,F)}if(H.autostop){H.countdown=H.autostopCount||z.length}var u=C[0];C.data("cycle.opts",H);H.$cont=C;H.stopCount=u.cycleStop;H.elements=z;H.before=H.before?[H.before]:[];H.after=H.after?[H.after]:[];if(!c.support.opacity&&H.cleartype){H.after.push(function(){e(this,H)})}if(H.continuous){H.after.push(function(){n(z,H,0,!H.backwards)})}i(H);if(!c.support.opacity&&H.cleartype&&!H.cleartypeNoBg){a(Q)}if(C.css("position")=="static"){C.css("position","relative")}if(H.width){C.width(H.width)}if(H.height&&H.height!="auto"){C.height(H.height)}if(H.startingSlide!==d){H.startingSlide=parseInt(H.startingSlide,10);if(H.startingSlide>=z.length||H.startSlide<0){H.startingSlide=0}else{s=true}}else{if(H.backwards){H.startingSlide=z.length-1}else{H.startingSlide=0}}if(H.random){H.randomMap=[];for(var O=0;O<z.length;O++){H.randomMap.push(O)}H.randomMap.sort(function(S,w){return Math.random()-0.5});if(s){for(var M=0;M<z.length;M++){if(H.startingSlide==H.randomMap[M]){H.randomIndex=M}}}else{H.randomIndex=1;H.startingSlide=H.randomMap[1]}}else{if(H.startingSlide>=z.length){H.startingSlide=0}}H.currSlide=H.startingSlide||0;var B=H.startingSlide;Q.css({position:"absolute",top:0,left:0}).hide().each(function(w){var S;if(H.backwards){S=B?w<=B?z.length+(w-B):B-w:z.length-w}else{S=B?w>=B?z.length-(w-B):B-w:z.length-w}c(this).css("z-index",S)});c(z[B]).css("opacity",1).show();e(z[B],H);if(H.fit){if(!H.aspect){if(H.width){Q.width(H.width)}if(H.height&&H.height!="auto"){Q.height(H.height)}}else{Q.each(function(){var S=c(this);var w=(H.aspect===true)?S.width()/S.height():H.aspect;if(H.width&&S.width()!=H.width){S.width(H.width);S.height(H.width/w)}if(H.height&&S.height()<H.height){S.height(H.height);S.width(H.height*w)}})}}if(H.center&&((!H.fit)||H.aspect)){Q.each(function(){var w=c(this);w.css({"margin-left":H.width?((H.width-w.width())/2)+"px":0,"margin-top":H.height?((H.height-w.height())/2)+"px":0})})}if(H.center&&!H.fit&&!H.slideResize){Q.each(function(){var w=c(this);w.css({"margin-left":H.width?((H.width-w.width())/2)+"px":0,"margin-top":H.height?((H.height-w.height())/2)+"px":0})})}var I=(H.containerResize||H.containerResizeHeight)&&!C.innerHeight();if(I){var A=0,G=0;for(var L=0;L<z.length;L++){var t=c(z[L]),R=t[0],E=t.outerWidth(),P=t.outerHeight();if(!E){E=R.offsetWidth||R.width||t.attr("width")}if(!P){P=R.offsetHeight||R.height||t.attr("height")}A=E>A?E:A;G=P>G?P:G}if(H.containerResize&&A>0&&G>0){C.css({width:A+"px",height:G+"px"})}if(H.containerResizeHeight&&G>0){C.css({height:G+"px"})}}var x=false;if(H.pause){C.bind("mouseenter.cycle",function(){x=true;this.cyclePause++;k(u,true)}).bind("mouseleave.cycle",function(){if(x){this.cyclePause--}k(u,true)})}if(o(H)===false){return false}var v=false;y.requeueAttempts=y.requeueAttempts||0;Q.each(function(){var U=c(this);this.cycleH=(H.fit&&H.height)?H.height:(U.height()||this.offsetHeight||this.height||U.attr("height")||0);this.cycleW=(H.fit&&H.width)?H.width:(U.width()||this.offsetWidth||this.width||U.attr("width")||0);if(U.is("img")){var S=(c.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var V=(c.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var T=(c.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var w=(this.cycleH===0&&this.cycleW===0&&!this.complete);if(S||V||T||w){if(J.s&&H.requeueOnImageNotLoaded&&++y.requeueAttempts<100){f(y.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){c(J.s,J.c).cycle(y)},H.requeueTimeout);v=true;return false}else{f("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}}return true});if(v){return false}H.cssBefore=H.cssBefore||{};H.cssAfter=H.cssAfter||{};H.cssFirst=H.cssFirst||{};H.animIn=H.animIn||{};H.animOut=H.animOut||{};Q.not(":eq("+B+")").css(H.cssBefore);c(Q[B]).css(H.cssFirst);if(H.timeout){H.timeout=parseInt(H.timeout,10);if(H.speed.constructor==String){H.speed=c.fx.speeds[H.speed]||parseInt(H.speed,10)}if(!H.sync){H.speed=H.speed/2}var K=H.fx=="none"?0:H.fx=="shuffle"?500:250;while((H.timeout-H.speed)<K){H.timeout+=H.speed}}if(H.easing){H.easeIn=H.easeOut=H.easing}if(!H.speedIn){H.speedIn=H.speed}if(!H.speedOut){H.speedOut=H.speed}H.slideCount=z.length;H.currSlide=H.lastSlide=B;if(H.random){if(++H.randomIndex==z.length){H.randomIndex=0}H.nextSlide=H.randomMap[H.randomIndex]}else{if(H.backwards){H.nextSlide=H.startingSlide===0?(z.length-1):H.startingSlide-1}else{H.nextSlide=H.startingSlide>=(z.length-1)?0:H.startingSlide+1}}if(!H.multiFx){var N=c.fn.cycle.transitions[H.fx];if(c.isFunction(N)){N(C,Q,H)}else{if(H.fx!="custom"&&!H.multiFx){f("unknown transition: "+H.fx,"; slideshow terminating");return false}}}var D=Q[B];if(!H.skipInitializationCallbacks){if(H.before.length){H.before[0].apply(D,[D,D,H,true])}if(H.after.length){H.after[0].apply(D,[D,D,H,true])}}if(H.next){c(H.next).bind(H.prevNextEvent,function(){return h(H,1)})}if(H.prev){c(H.prev).bind(H.prevNextEvent,function(){return h(H,0)})}if(H.pager||H.pagerAnchorBuilder){p(z,H)}j(H,z);return H}function i(s){s.original={before:[],after:[]};s.original.cssBefore=c.extend({},s.cssBefore);s.original.cssAfter=c.extend({},s.cssAfter);s.original.animIn=c.extend({},s.animIn);s.original.animOut=c.extend({},s.animOut);c.each(s.before,function(){s.original.before.push(this)});c.each(s.after,function(){s.original.after.push(this)})}function o(y){var w,u,t=c.fn.cycle.transitions;if(y.fx.indexOf(",")>0){y.multiFx=true;y.fxs=y.fx.replace(/\s*/g,"").split(",");for(w=0;w<y.fxs.length;w++){var x=y.fxs[w];u=t[x];if(!u||!t.hasOwnProperty(x)||!c.isFunction(u)){f("discarding unknown transition: ",x);y.fxs.splice(w,1);w--}}if(!y.fxs.length){f("No valid transitions named; slideshow terminating.");return false}}else{if(y.fx=="all"){y.multiFx=true;y.fxs=[];for(var z in t){if(t.hasOwnProperty(z)){u=t[z];if(t.hasOwnProperty(z)&&c.isFunction(u)){y.fxs.push(z)}}}}}if(y.multiFx&&y.randomizeEffects){var v=Math.floor(Math.random()*20)+30;for(w=0;w<v;w++){var s=Math.floor(Math.random()*y.fxs.length);y.fxs.push(y.fxs.splice(s,1)[0])}g("randomized fx sequence: ",y.fxs)}return true}function j(t,s){t.addSlide=function(v,w){var u=c(v),x=u[0];if(!t.autostopCount){t.countdown++}s[w?"unshift":"push"](x);if(t.els){t.els[w?"unshift":"push"](x)}t.slideCount=s.length;if(t.random){t.randomMap.push(t.slideCount-1);t.randomMap.sort(function(z,y){return Math.random()-0.5})}u.css("position","absolute");u[w?"prependTo":"appendTo"](t.$cont);if(w){t.currSlide++;t.nextSlide++}if(!c.support.opacity&&t.cleartype&&!t.cleartypeNoBg){a(u)}if(t.fit&&t.width){u.width(t.width)}if(t.fit&&t.height&&t.height!="auto"){u.height(t.height)}x.cycleH=(t.fit&&t.height)?t.height:u.height();x.cycleW=(t.fit&&t.width)?t.width:u.width();u.css(t.cssBefore);if(t.pager||t.pagerAnchorBuilder){c.fn.cycle.createPagerAnchor(s.length-1,x,c(t.pager),s,t)}if(c.isFunction(t.onAddSlide)){t.onAddSlide(u)}else{u.hide()}}}c.fn.cycle.resetState=function(t,s){s=s||t.fx;t.before=[];t.after=[];t.cssBefore=c.extend({},t.original.cssBefore);t.cssAfter=c.extend({},t.original.cssAfter);t.animIn=c.extend({},t.original.animIn);t.animOut=c.extend({},t.original.animOut);t.fxFn=null;c.each(t.original.before,function(){t.before.push(this)});c.each(t.original.after,function(){t.after.push(this)});var u=c.fn.cycle.transitions[s];if(c.isFunction(u)){u(t.$cont,c(t.elements),t)}};function n(y,s,x,A){var v=s.$cont[0],D=y[s.currSlide],B=y[s.nextSlide];if(x&&s.busy&&s.manualTrump){g("manualTrump in go(), stopping active transition");c(y).stop(true,true);s.busy=0;clearTimeout(v.cycleTimeout)}if(s.busy){g("transition active, ignoring new tx request");return}if(v.cycleStop!=s.stopCount||v.cycleTimeout===0&&!x){return}if(!x&&!v.cyclePause&&!s.bounce&&((s.autostop&&(--s.countdown<=0))||(s.nowrap&&!s.random&&s.nextSlide<s.currSlide))){if(s.end){s.end(s)}return}var z=false;if((x||!v.cyclePause)&&(s.nextSlide!=s.currSlide)){z=true;var w=s.fx;D.cycleH=D.cycleH||c(D).height();D.cycleW=D.cycleW||c(D).width();B.cycleH=B.cycleH||c(B).height();B.cycleW=B.cycleW||c(B).width();if(s.multiFx){if(A&&(s.lastFx===d||++s.lastFx>=s.fxs.length)){s.lastFx=0}else{if(!A&&(s.lastFx===d||--s.lastFx<0)){s.lastFx=s.fxs.length-1}}w=s.fxs[s.lastFx]}if(s.oneTimeFx){w=s.oneTimeFx;s.oneTimeFx=null}c.fn.cycle.resetState(s,w);if(s.before.length){c.each(s.before,function(E,F){if(v.cycleStop!=s.stopCount){return}F.apply(B,[D,B,s,A])})}var t=function(){s.busy=0;c.each(s.after,function(E,F){if(v.cycleStop!=s.stopCount){return}F.apply(B,[D,B,s,A])});if(!v.cycleStop){C()}};g("tx firing("+w+"); currSlide: "+s.currSlide+"; nextSlide: "+s.nextSlide);s.busy=1;if(s.fxFn){s.fxFn(D,B,s,t,A,x&&s.fastOnEvent)}else{if(c.isFunction(c.fn.cycle[s.fx])){c.fn.cycle[s.fx](D,B,s,t,A,x&&s.fastOnEvent)}else{c.fn.cycle.custom(D,B,s,t,A,x&&s.fastOnEvent)}}}else{C()}if(z||s.nextSlide==s.currSlide){var u;s.lastSlide=s.currSlide;if(s.random){s.currSlide=s.nextSlide;if(++s.randomIndex==y.length){s.randomIndex=0;s.randomMap.sort(function(F,E){return Math.random()-0.5})}s.nextSlide=s.randomMap[s.randomIndex];if(s.nextSlide==s.currSlide){s.nextSlide=(s.currSlide==s.slideCount-1)?0:s.currSlide+1}}else{if(s.backwards){u=(s.nextSlide-1)<0;if(u&&s.bounce){s.backwards=!s.backwards;s.nextSlide=1;s.currSlide=0}else{s.nextSlide=u?(y.length-1):s.nextSlide-1;s.currSlide=u?0:s.nextSlide+1}}else{u=(s.nextSlide+1)==y.length;if(u&&s.bounce){s.backwards=!s.backwards;s.nextSlide=y.length-2;s.currSlide=y.length-1}else{s.nextSlide=u?0:s.nextSlide+1;s.currSlide=u?y.length-1:s.nextSlide-1}}}}if(z&&s.pager){s.updateActivePagerLink(s.pager,s.currSlide,s.activePagerClass)}function C(){var E=0,F=s.timeout;if(s.timeout&&!s.continuous){E=m(y[s.currSlide],y[s.nextSlide],s,A);if(s.fx=="shuffle"){E-=s.speedOut}}else{if(s.continuous&&v.cyclePause){E=10}}if(E>0){v.cycleTimeout=setTimeout(function(){n(y,s,0,!s.backwards)},E)}}}c.fn.cycle.updateActivePagerLink=function(s,u,t){c(s).each(function(){c(this).children().removeClass(t).eq(u).addClass(t)})};function m(x,v,w,u){if(w.timeoutFn){var s=w.timeoutFn.call(x,x,v,w,u);while(w.fx!="none"&&(s-w.speed)<250){s+=w.speed}g("calculated timeout: "+s+"; speed: "+w.speed);if(s!==false){return s}}return w.timeout}c.fn.cycle.next=function(s){h(s,1)};c.fn.cycle.prev=function(s){h(s,0)};function h(v,u){var y=u?1:-1;var t=v.elements;var x=v.$cont[0],w=x.cycleTimeout;if(w){clearTimeout(w);x.cycleTimeout=0}if(v.random&&y<0){v.randomIndex--;if(--v.randomIndex==-2){v.randomIndex=t.length-2}else{if(v.randomIndex==-1){v.randomIndex=t.length-1}}v.nextSlide=v.randomMap[v.randomIndex]}else{if(v.random){v.nextSlide=v.randomMap[v.randomIndex]}else{v.nextSlide=v.currSlide+y;if(v.nextSlide<0){if(v.nowrap){return false}v.nextSlide=t.length-1}else{if(v.nextSlide>=t.length){if(v.nowrap){return false}v.nextSlide=0}}}}var s=v.onPrevNextEvent||v.prevNextClick;if(c.isFunction(s)){s(y>0,v.nextSlide,t[v.nextSlide])}n(t,v,1,u);return false}function p(t,u){var s=c(u.pager);c.each(t,function(v,w){c.fn.cycle.createPagerAnchor(v,w,s,t,u)});u.updateActivePagerLink(u.pager,u.startingSlide,u.activePagerClass)}c.fn.cycle.createPagerAnchor=function(x,u,z,w,t){var A;if(c.isFunction(t.pagerAnchorBuilder)){A=t.pagerAnchorBuilder(x,u);g("pagerAnchorBuilder("+x+", el) returned: "+A)}else{A='<a href="#">'+(x+1)+"</a>"}if(!A){return}var v=c(A);if(v.parents("body").length===0){var y=[];if(z.length>1){z.each(function(){var D=v.clone(true);c(this).append(D);y.push(D[0])});v=c(y)}else{v.appendTo(z)}}t.pagerAnchors=t.pagerAnchors||[];t.pagerAnchors.push(v);var B=function(G){G.preventDefault();t.nextSlide=x;var F=t.$cont[0],E=F.cycleTimeout;if(E){clearTimeout(E);F.cycleTimeout=0}var D=t.onPagerEvent||t.pagerClick;if(c.isFunction(D)){D(t.nextSlide,w[t.nextSlide])}n(w,t,1,t.currSlide<x)};if(/mouseenter|mouseover/i.test(t.pagerEvent)){v.hover(B,function(){})}else{v.bind(t.pagerEvent,B)}if(!/^click/.test(t.pagerEvent)&&!t.allowPagerClickBubble){v.bind("click.cycle",function(){return false})}var C=t.$cont[0];var s=false;if(t.pauseOnPagerHover){v.hover(function(){s=true;C.cyclePause++;k(C,true,true)},function(){if(s){C.cyclePause--}k(C,true,true)})}};c.fn.cycle.hopsFromLast=function(v,u){var t,s=v.lastSlide,w=v.currSlide;if(u){t=w>s?w-s:v.slideCount-s}else{t=w<s?s-w:s+v.slideCount-w}return t};function a(u){g("applying clearType background-color hack");function t(v){v=parseInt(v,10).toString(16);return v.length<2?"0"+v:v}function s(y){for(;y&&y.nodeName.toLowerCase()!="html";y=y.parentNode){var w=c.css(y,"background-color");if(w&&w.indexOf("rgb")>=0){var x=w.match(/\d+/g);return"#"+t(x[0])+t(x[1])+t(x[2])}if(w&&w!="transparent"){return w}}return"#ffffff"}u.each(function(){c(this).css("background-color",s(this))})}c.fn.cycle.commonReset=function(y,v,x,t,u,s){c(x.elements).not(y).hide();if(typeof x.cssBefore.opacity=="undefined"){x.cssBefore.opacity=1}x.cssBefore.display="block";if(x.slideResize&&t!==false&&v.cycleW>0){x.cssBefore.width=v.cycleW}if(x.slideResize&&u!==false&&v.cycleH>0){x.cssBefore.height=v.cycleH}x.cssAfter=x.cssAfter||{};x.cssAfter.display="none";c(y).css("zIndex",x.slideCount+(s===true?1:0));c(v).css("zIndex",x.slideCount+(s===true?0:1))};c.fn.cycle.custom=function(E,y,s,v,x,t){var D=c(E),z=c(y);var u=s.speedIn,C=s.speedOut,w=s.easeIn,B=s.easeOut;z.css(s.cssBefore);if(t){if(typeof t=="number"){u=C=t}else{u=C=1}w=B=null}var A=function(){z.animate(s.animIn,u,w,function(){v()})};D.animate(s.animOut,C,B,function(){D.css(s.cssAfter);if(!s.sync){A()}});if(s.sync){A()}};c.fn.cycle.transitions={fade:function(t,u,s){u.not(":eq("+s.currSlide+")").css("opacity",0);s.before.push(function(x,v,w){c.fn.cycle.commonReset(x,v,w);w.cssBefore.opacity=0});s.animIn={opacity:1};s.animOut={opacity:0};s.cssBefore={top:0,left:0}}};c.fn.cycle.ver=function(){return b};c.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:false,animIn:null,animOut:null,aspect:false,autostop:0,autostopCount:0,backwards:false,before:null,center:null,cleartype:!c.support.opacity,cleartypeNoBg:false,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:true,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:false,slideExpr:null,slideResize:1,speed:1000,speedIn:null,speedOut:null,startingSlide:d,sync:1,timeout:4000,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery);
/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function(a){a.fn.cycle.transitions.none=function(c,d,b){b.fxFn=function(g,e,f,h){a(e).show();a(g).hide();h()}};a.fn.cycle.transitions.fadeout=function(c,d,b){d.not(":eq("+b.currSlide+")").css({display:"block",opacity:1});b.before.push(function(k,i,j,f,g,e){a(k).css("zIndex",j.slideCount+(e!==true?1:0));a(i).css("zIndex",j.slideCount+(e!==true?0:1))});b.animIn.opacity=1;b.animOut.opacity=0;b.cssBefore.opacity=1;b.cssBefore.display="block";b.cssAfter.zIndex=0};a.fn.cycle.transitions.scrollUp=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.height();c.cssBefore.top=b;c.cssBefore.left=0;c.cssFirst.top=0;c.animIn.top=0;c.animOut.top=-b};a.fn.cycle.transitions.scrollDown=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.height();c.cssFirst.top=0;c.cssBefore.top=-b;c.cssBefore.left=0;c.animIn.top=0;c.animOut.top=b};a.fn.cycle.transitions.scrollLeft=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.width();c.cssFirst.left=0;c.cssBefore.left=b;c.cssBefore.top=0;c.animIn.left=0;c.animOut.left=0-b};a.fn.cycle.transitions.scrollRight=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.width();c.cssFirst.left=0;c.cssBefore.left=-b;c.cssBefore.top=0;c.animIn.left=0;c.animOut.left=b};a.fn.cycle.transitions.scrollHorz=function(c,d,b){c.css("overflow","hidden").width();b.before.push(function(h,f,g,e){if(g.rev){e=!e}a.fn.cycle.commonReset(h,f,g);g.cssBefore.left=e?(f.cycleW-1):(1-f.cycleW);g.animOut.left=e?-h.cycleW:h.cycleW});b.cssFirst.left=0;b.cssBefore.top=0;b.animIn.left=0;b.animOut.top=0};a.fn.cycle.transitions.scrollVert=function(c,d,b){c.css("overflow","hidden");b.before.push(function(h,f,g,e){if(g.rev){e=!e}a.fn.cycle.commonReset(h,f,g);g.cssBefore.top=e?(1-f.cycleH):(f.cycleH-1);g.animOut.top=e?h.cycleH:-h.cycleH});b.cssFirst.top=0;b.cssBefore.left=0;b.animIn.top=0;b.animOut.left=0};a.fn.cycle.transitions.slideX=function(c,d,b){b.before.push(function(g,e,f){a(f.elements).not(g).hide();a.fn.cycle.commonReset(g,e,f,false,true);f.animIn.width=e.cycleW});b.cssBefore.left=0;b.cssBefore.top=0;b.cssBefore.width=0;b.animIn.width="show";b.animOut.width=0};a.fn.cycle.transitions.slideY=function(c,d,b){b.before.push(function(g,e,f){a(f.elements).not(g).hide();a.fn.cycle.commonReset(g,e,f,true,false);f.animIn.height=e.cycleH});b.cssBefore.left=0;b.cssBefore.top=0;b.cssBefore.height=0;b.animIn.height="show";b.animOut.height=0};a.fn.cycle.transitions.shuffle=function(e,f,d){var c,b=e.css("overflow","visible").width();f.css({left:0,top:0});d.before.push(function(i,g,h){a.fn.cycle.commonReset(i,g,h,true,true,true)});if(!d.speedAdjusted){d.speed=d.speed/2;d.speedAdjusted=true}d.random=0;d.shuffle=d.shuffle||{left:-b,top:15};d.els=[];for(c=0;c<f.length;c++){d.els.push(f[c])}for(c=0;c<d.currSlide;c++){d.els.push(d.els.shift())}d.fxFn=function(m,j,l,g,i){if(l.rev){i=!i}var h=i?a(m):a(j);a(j).css(l.cssBefore);var k=l.slideCount;h.animate(l.shuffle,l.speedIn,l.easeIn,function(){var o=a.fn.cycle.hopsFromLast(l,i);for(var p=0;p<o;p++){if(i){l.els.push(l.els.shift())}else{l.els.unshift(l.els.pop())}}if(i){for(var q=0,n=l.els.length;q<n;q++){a(l.els[q]).css("z-index",n-q+k)}}else{var r=a(m).css("z-index");h.css("z-index",parseInt(r,10)+1+k)}h.animate({left:0,top:0},l.speedOut,l.easeOut,function(){a(i?this:m).hide();if(g){g()}})})};a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0})};a.fn.cycle.transitions.turnUp=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false);f.cssBefore.top=e.cycleH;f.animIn.height=e.cycleH;f.animOut.width=e.cycleW});b.cssFirst.top=0;b.cssBefore.left=0;b.cssBefore.height=0;b.animIn.top=0;b.animOut.height=0};a.fn.cycle.transitions.turnDown=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false);f.animIn.height=e.cycleH;f.animOut.top=g.cycleH});b.cssFirst.top=0;b.cssBefore.left=0;b.cssBefore.top=0;b.cssBefore.height=0;b.animOut.height=0};a.fn.cycle.transitions.turnLeft=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true);f.cssBefore.left=e.cycleW;f.animIn.width=e.cycleW});b.cssBefore.top=0;b.cssBefore.width=0;b.animIn.left=0;b.animOut.width=0};a.fn.cycle.transitions.turnRight=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true);f.animIn.width=e.cycleW;f.animOut.left=g.cycleW});a.extend(b.cssBefore,{top:0,left:0,width:0});b.animIn.left=0;b.animOut.width=0};a.fn.cycle.transitions.zoom=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,false,true);f.cssBefore.top=e.cycleH/2;f.cssBefore.left=e.cycleW/2;a.extend(f.animIn,{top:0,left:0,width:e.cycleW,height:e.cycleH});a.extend(f.animOut,{width:0,height:0,top:g.cycleH/2,left:g.cycleW/2})});b.cssFirst.top=0;b.cssFirst.left=0;b.cssBefore.width=0;b.cssBefore.height=0};a.fn.cycle.transitions.fadeZoom=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,false);f.cssBefore.left=e.cycleW/2;f.cssBefore.top=e.cycleH/2;a.extend(f.animIn,{top:0,left:0,width:e.cycleW,height:e.cycleH})});b.cssBefore.width=0;b.cssBefore.height=0;b.animOut.opacity=0};a.fn.cycle.transitions.blindX=function(d,e,c){var b=d.css("overflow","hidden").width();c.before.push(function(h,f,g){a.fn.cycle.commonReset(h,f,g);g.animIn.width=f.cycleW;g.animOut.left=h.cycleW});c.cssBefore.left=b;c.cssBefore.top=0;c.animIn.left=0;c.animOut.left=b};a.fn.cycle.transitions.blindY=function(d,e,c){var b=d.css("overflow","hidden").height();c.before.push(function(h,f,g){a.fn.cycle.commonReset(h,f,g);g.animIn.height=f.cycleH;g.animOut.top=h.cycleH});c.cssBefore.top=b;c.cssBefore.left=0;c.animIn.top=0;c.animOut.top=b};a.fn.cycle.transitions.blindZ=function(e,f,d){var c=e.css("overflow","hidden").height();var b=e.width();d.before.push(function(i,g,h){a.fn.cycle.commonReset(i,g,h);h.animIn.height=g.cycleH;h.animOut.top=i.cycleH});d.cssBefore.top=c;d.cssBefore.left=b;d.animIn.top=0;d.animIn.left=0;d.animOut.top=c;d.animOut.left=b};a.fn.cycle.transitions.growX=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true);f.cssBefore.left=this.cycleW/2;f.animIn.left=0;f.animIn.width=this.cycleW;f.animOut.left=0});b.cssBefore.top=0;b.cssBefore.width=0};a.fn.cycle.transitions.growY=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false);f.cssBefore.top=this.cycleH/2;f.animIn.top=0;f.animIn.height=this.cycleH;f.animOut.top=0});b.cssBefore.height=0;b.cssBefore.left=0};a.fn.cycle.transitions.curtainX=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true,true);f.cssBefore.left=e.cycleW/2;f.animIn.left=0;f.animIn.width=this.cycleW;f.animOut.left=g.cycleW/2;f.animOut.width=0});b.cssBefore.top=0;b.cssBefore.width=0};a.fn.cycle.transitions.curtainY=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false,true);f.cssBefore.top=e.cycleH/2;f.animIn.top=0;f.animIn.height=e.cycleH;f.animOut.top=g.cycleH/2;f.animOut.height=0});b.cssBefore.height=0;b.cssBefore.left=0};a.fn.cycle.transitions.cover=function(f,g,e){var i=e.direction||"left";var b=f.css("overflow","hidden").width();var c=f.height();e.before.push(function(j,d,h){a.fn.cycle.commonReset(j,d,h);h.cssAfter.display="";if(i=="right"){h.cssBefore.left=-b}else{if(i=="up"){h.cssBefore.top=c}else{if(i=="down"){h.cssBefore.top=-c}else{h.cssBefore.left=b}}}});e.animIn.left=0;e.animIn.top=0;e.cssBefore.top=0;e.cssBefore.left=0};a.fn.cycle.transitions.uncover=function(f,g,e){var i=e.direction||"left";var b=f.css("overflow","hidden").width();var c=f.height();e.before.push(function(j,d,h){a.fn.cycle.commonReset(j,d,h,true,true,true);if(i=="right"){h.animOut.left=b}else{if(i=="up"){h.animOut.top=-c}else{if(i=="down"){h.animOut.top=c}else{h.animOut.left=-b}}}});e.animIn.left=0;e.animIn.top=0;e.cssBefore.top=0;e.cssBefore.left=0};a.fn.cycle.transitions.toss=function(e,f,d){var b=e.css("overflow","visible").width();var c=e.height();d.before.push(function(i,g,h){a.fn.cycle.commonReset(i,g,h,true,true,true);if(!h.animOut.left&&!h.animOut.top){a.extend(h.animOut,{left:b*2,top:-c/2,opacity:0})}else{h.animOut.opacity=0}});d.cssBefore.left=0;d.cssBefore.top=0;d.animIn.left=0};a.fn.cycle.transitions.wipe=function(q,m,e){var p=q.css("overflow","hidden").width();var j=q.height();e.cssBefore=e.cssBefore||{};var g;if(e.clip){if(/l2r/.test(e.clip)){g="rect(0px 0px "+j+"px 0px)"}else{if(/r2l/.test(e.clip)){g="rect(0px "+p+"px "+j+"px "+p+"px)"}else{if(/t2b/.test(e.clip)){g="rect(0px "+p+"px 0px 0px)"}else{if(/b2t/.test(e.clip)){g="rect("+j+"px "+p+"px "+j+"px 0px)"}else{if(/zoom/.test(e.clip)){var o=parseInt(j/2,10);var f=parseInt(p/2,10);g="rect("+o+"px "+f+"px "+o+"px "+f+"px)"}}}}}}e.cssBefore.clip=e.cssBefore.clip||g||"rect(0px 0px 0px 0px)";var k=e.cssBefore.clip.match(/(\d+)/g);var s=parseInt(k[0],10),c=parseInt(k[1],10),n=parseInt(k[2],10),i=parseInt(k[3],10);e.before.push(function(v,h,t){if(v==h){return}var d=a(v),b=a(h);a.fn.cycle.commonReset(v,h,t,true,true,false);t.cssAfter.display="block";var r=1,l=parseInt((t.speedIn/13),10)-1;(function u(){var x=s?s-parseInt(r*(s/l),10):0;var y=i?i-parseInt(r*(i/l),10):0;var z=n<j?n+parseInt(r*((j-n)/l||1),10):j;var w=c<p?c+parseInt(r*((p-c)/l||1),10):p;b.css({clip:"rect("+x+"px "+w+"px "+z+"px "+y+"px)"});(r++<=l)?setTimeout(u,13):d.css("display","none")})()});a.extend(e.cssBefore,{display:"block",opacity:1,top:0,left:0});e.animIn={left:0};e.animOut={left:0}}})(jQuery);;
/**
 *
 * Version: 0.2.6
 * Author:  Gianluca Guarini
 * Contact: gianluca.guarini@gmail.com
 * Website: http://www.gianlucaguarini.com/
 * Twitter: @gianlucaguarini
 *
 * Copyright (c) 2013 Gianluca Guarini
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **/
;
(function($) {
	$.fn.extend({
		BlackAndWhite: function(options) {
			'use strict';
			var $container = this,
				defaults = {
				hoverEffect: true,
				webworkerPath: false,
				responsive: true,
				invertHoverEffect: false,
				speed: 500,
				onImageReady: null
			};
			options = $.extend(defaults, options);

			/**
			 *
			 * Public vars
			 *
			 */
			var hoverEffect = options.hoverEffect,
					webworkerPath = options.webworkerPath,
					invertHoverEffect = options.invertHoverEffect,
					responsive = options.responsive,
					fadeSpeedIn = $.isPlainObject(options.speed) ? options.speed.fadeIn : options.speed,
					fadeSpeedOut = $.isPlainObject(options.speed) ? options.speed.fadeOut : options.speed;
					
			var isIE7 = (document.all && !window.opera && window.XMLHttpRequest) ? true : false;
			
			/*
			 *
			 * features detection
			 *
			 */
			
			var browserPrefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
			
			var cssPrefixString = {};
			var cssPrefix = function(property) {
				if (cssPrefixString[property] || cssPrefixString[property] === '')
					return cssPrefixString[property] + property;
				var e = document.createElement('div');
				var prefixes = ['', 'Moz', 'Webkit', 'O', 'ms', 'Khtml']; // Various supports...
				for (var i in prefixes) {
					if (typeof e.style[prefixes[i] + property] !== 'undefined') {
						cssPrefixString[property] = prefixes[i];
						return prefixes[i] + property;
					}
				}
				return property.toLowerCase();
			};
			

			// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css-filters.js
			var cssfilters = function() {
				var el = document.createElement('div');
				el.style.cssText = browserPrefixes.join('filter' + ':blur(2px); ');
				return !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
			}();
			/**
			 *
			 * Private vars
			 *
			 */
			var supportsCanvas = !!document.createElement('canvas').getContext,
					$window = $(window),
					/* Check if Web Workers are supported */
					supportWebworker = (function() {
						return (typeof (Worker) !== "undefined") ? true : false;
					}()),
					cssFilter = cssPrefix('Filter'),
					imagesArray = [],
					BnWWorker = supportWebworker && webworkerPath ? new Worker(webworkerPath + "BnWWorker.js") : false;
			/**
			 *
			 * Private methods
			 *
			 */
			var _onMouseLeave = function(e) {
				$(e.currentTarget).find('.BWfade').stop(true, true)[!invertHoverEffect ? 'fadeIn' : 'fadeOut'](fadeSpeedIn);
			};

			var _onMouseEnter = function(e) {
				$(e.currentTarget).find('.BWfade').stop(true, true)[invertHoverEffect ? 'fadeIn' : 'fadeOut'](fadeSpeedIn);
			};
			
			var _onImageReady = function(img) {
				if (typeof options.onImageReady === 'function')
					options.onImageReady(img);
			};
			// Loop all the images converting them by the webworker (this process is unobstrusive and it does not block the page loading)
			var _webWorkerLoop = function() {
				if (!imagesArray.length)
					return;

				BnWWorker.postMessage(imagesArray[0].imageData);

				BnWWorker.onmessage = function(event) {
					imagesArray[0].ctx.putImageData(event.data, 0, 0);
					_onImageReady(imagesArray[0].img);
					imagesArray.splice(0, 1);
					_webWorkerLoop();
				};
			};
			//convert any image into B&W using HTML5 canvas
			var _manipulateImage = function(img, canvas, width, height) {
				var ctx = canvas.getContext('2d'),
						currImg = img,
						i = 0,
						grey;

				ctx.drawImage(img, 0, 0, width, height);

				var imageData = ctx.getImageData(0, 0, width, height),
						px = imageData.data,
						length = px.length;

				// web worker superfast implementation
				if (BnWWorker) {

					imagesArray.push({
						imageData: imageData,
						ctx: ctx,
						img: img
					});

				} else {

					// no webworker slow implementation
					for (; i < length; i += 4) {
						grey = px[i] * 0.3 + px[i + 1] * 0.59 + px[i + 2] * 0.11;
						px[i] = px[i + 1] = px[i + 2] = grey;
					}

					ctx.putImageData(imageData, 0, 0);

					_onImageReady(img);
				}
			};

			var _injectTags = function($img, $imageWrapper) {

				var pic = $img[0],
					src = pic.src,
					width = $($img).width(),
					height = $($img).height();

				if (supportsCanvas && !cssfilters) {
					
					var css = {
						'position': 'absolute',
						'z-index' : 2,
						top: 0,
						left: 0,
						display: invertHoverEffect ? 'none' : 'block',
						width: width,
						height: height
					};

					var realWidth = pic.width,
						realHeight = pic.height;

					//adding the canvas
					$('<canvas class="BWfade" width="' + realWidth + '" height="' + realHeight + '"></canvas>').prependTo($imageWrapper);
					//getting the canvas
					var $canvas = $imageWrapper.find('canvas');
					
					//setting the canvas position on the Pics
					$canvas.css(css);

					_manipulateImage(pic, $canvas[0], realWidth, realHeight);
					
				} else {
					
					var cs = {
						'position': 'absolute',
						'z-index' : 2,
						top: 0,
						left: 0,
						display: invertHoverEffect ? 'none' : 'block'
					};
					
					cs[cssPrefix('Filter')] = 'grayscale(100%)';
					
					if (Modernizr.touch) {
						cs[cssPrefix('Filter')] = 'grayscale(0)';
					}

					//adding the canvas
					$('<img src=' + src + ' width="' + width + '" height="' + height + '" class="BWFilter BWfade" /> ').prependTo($imageWrapper);
					$('.BWFilter').css($.extend(cs, {
						'filter': 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)'
					}));

					_onImageReady(pic);
					
				}
				
				if (hoverEffect) {
					var	obj = {
						'.flexslider' : '.flex-direction-nav',
						'.image-post-slider' : '.post-slider-nav',
						'.image-gallery-slider' : '.gallery-slider-nav'
					};	
					
					if (invertHoverEffect) {
						$.each(obj, function (cont, nav) {
							$(cont).on('mouseenter', nav, function () {
								$(cont).find('.BWfade').fadeIn(200);
								$(nav).on('mouseleave', function () {
									$(cont).find('.BWfade').show(0);
								});
							}).on('mouseleave', nav, function () {
								$(cont).find('.BWfade').hide(200);
							});
						});		
					} else {
						$.each(obj, function (cont, nav) {
							$(cont).on('mouseenter', nav, function () {
								$(cont).find('.BWfade').hide();
								$(nav).on('mouseleave', function () {
									$(cont).find('.BWfade').show(0);
								});
							});
						});		
					}
				}

				window.setTimeout(function () {
					$img.addClass('fadein');
				}, 10);
				
			};

			var _injectTagsFlickr = function($img, $imageWrapper) {
				
				if (!cssfilters) {

					var pic = $img[0],
						src = pic.src,
						width = $($img).width(),
						height = $($img).height(),
						mozCss = {
							'position': 'absolute',
							'z-index' : 2,
							top: 0,
							left: 0,
							display: invertHoverEffect ? 'none' : 'block',
							width: width,
							height: height
						};
						
						mozCss['filter'] = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\' filterRes=\'400\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")';	

						//adding the canvas
						$('<img src=' + src + ' width="' + width + '" height="' + height + '" class="BWFilter BWfade" /> ').prependTo($imageWrapper);
						$('.BWFilter').css(mozCss);

						_onImageReady(pic);
						
						window.setTimeout(function () {
							$img.addClass('fadein');
						}, 10);		
						
				}
				
			};
			this.init = function(options) {
				// convert all the images
				
				if (!cssfilters) {

					$container.filter('.badge').each(function(index, tmpImageWrapper) {
						var $imageWrapper = $(tmpImageWrapper),
								$pic = $imageWrapper.find('img');
							_injectTagsFlickr($pic, $imageWrapper);
					});

					if (hoverEffect) {

						$('.flickr-badge')
							.on('mouseenter', 'a', _onMouseEnter)
							.on('mouseleave', 'a', _onMouseLeave);

					}	
					
				}
				
				$container.each(function(index, tmpImageWrapper) {
					var $imageWrapper = $(tmpImageWrapper),
							$pic = $imageWrapper.find('img');
							
					if (!$pic.width()) {
						$pic.on("load", function() {
							_injectTags($pic, $imageWrapper);
						});
					}
					else {
						_injectTags($pic, $imageWrapper);
					}
					
				});
				
				// start the webworker
				if (BnWWorker) {
					// web worker implementation
					_webWorkerLoop();
				}
				// binding the hover effect
				if (hoverEffect) {
				
					 $container
						.on('mouseenter', _onMouseEnter)
						.on('mouseleave', _onMouseLeave);
					 
				}

				// make it responsive
				if (responsive) {
					$window.on('resize orientationchange', $container.resizeImages);
				}
				
			};

			this.resizeImages = function() {

				$container.each(function(index, currImageWrapper) {
					var pic = $(currImageWrapper).find('img:not(.BWFilter)');
					var currWidth, currHeight;
					if (isIE7) {
						currWidth = $(pic).prop('width');
						currHeight = $(pic).prop('height');
					} else {
						currWidth = $(pic).width();
						currHeight = $(pic).height();
					}
					
					$(this).find('.BWFilter, canvas').css({
						width: currWidth,
						height: currHeight
					});

				});
			};
			
			return this.init(options);
			
		}

	});
	
}(jQuery));;
/*!
* MediaElement.js
* HTML5 <video> and <audio> shim and player
* http://mediaelementjs.com/
*
* Creates a JavaScript object that mimics HTML5 MediaElement API
* for browsers that don't understand HTML5 or can't play the provided codec
* Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
*
* Copyright 2010-2013, John Dyer (http://j.hn)
* License: MIT
*
*/var mejs=mejs||{};mejs.version="2.12.0";mejs.meIndex=0;
mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg","video/youtube","video/x-youtube"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo",
"video/x-vimeo"]}]};
mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>';return b.firstChild.href},getScriptPath:function(a){for(var b=0,c,d="",e="",f,g,h=document.getElementsByTagName("script"),l=h.length,j=a.length;b<l;b++){f=h[b].src;c=f.lastIndexOf("/");if(c>-1){g=f.substring(c+
1);f=f.substring(0,c+1)}else{g=f;f=""}for(c=0;c<j;c++){e=a[c];e=g.indexOf(e);if(e>-1){d=f;break}}if(d!=="")break}return d},secondsToTimeCode:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d=="undefined")d=25;var e=Math.floor(a/3600)%24,f=Math.floor(a/60)%60,g=Math.floor(a%60);a=Math.floor((a%1*d).toFixed(3));return(b||e>0?(e<10?"0"+e:e)+":":"")+(f<10?"0"+f:f)+":"+(g<10?"0"+g:g)+(c?":"+(a<10?"0"+a:a):"")},timeCodeToSeconds:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d==
"undefined")d=25;a=a.split(":");b=parseInt(a[0],10);var e=parseInt(a[1],10),f=parseInt(a[2],10),g=0,h=0;if(c)g=parseInt(a[3])/d;return h=b*3600+e*60+f+g},convertSMPTEtoSeconds:function(a){if(typeof a!="string")return false;a=a.replace(",",".");var b=0,c=a.indexOf(".")!=-1?a.split(".")[1].length:0,d=1;a=a.split(":").reverse();for(var e=0;e<a.length;e++){d=1;if(e>0)d=Math.pow(60,e);b+=Number(a[e])*d}return Number(b.toFixed(c))},removeSwf:function(a){var b=document.getElementById(a);if(b&&/object|embed/i.test(b.nodeName))if(mejs.MediaFeatures.isIE){b.style.display=
"none";(function(){b.readyState==4?mejs.Utility.removeObjectInIE(a):setTimeout(arguments.callee,10)})()}else b.parentNode.removeChild(b)},removeObjectInIE:function(a){if(a=document.getElementById(a)){for(var b in a)if(typeof a[b]=="function")a[b]=null;a.parentNode.removeChild(a)}}};
mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];b[1]=b[1]||0;b[2]=b[2]||0;return c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?true:false},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e=[0,0,0],f;if(typeof this.nav.plugins!="undefined"&&typeof this.nav.plugins[a]=="object"){if((c=this.nav.plugins[a].description)&&
!(typeof this.nav.mimeTypes!="undefined"&&this.nav.mimeTypes[b]&&!this.nav.mimeTypes[b].enabledPlugin)){e=c.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".");for(a=0;a<e.length;a++)e[a]=parseInt(e[a].match(/\d+/),10)}}else if(typeof window.ActiveXObject!="undefined")try{if(f=new ActiveXObject(c))e=d(f)}catch(g){}return e}};
mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[];if(a=a.GetVariable("$version")){a=a.split(" ")[1].split(",");b=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]}return b});
mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(d,e,f,g){for(;d.isVersionSupported(e[0]+"."+e[1]+"."+e[2]+"."+e[3]);)e[f]+=g;e[f]-=g};c(a,b,0,1);c(a,b,1,1);c(a,b,2,1E4);c(a,b,2,1E3);c(a,b,2,100);c(a,b,2,10);c(a,b,2,1);c(a,b,3,1);return b});
mejs.MediaFeatures={init:function(){var a=this,b=document,c=mejs.PluginDetector.nav,d=mejs.PluginDetector.ua.toLowerCase(),e,f=["source","track","audio","video"];a.isiPad=d.match(/ipad/i)!==null;a.isiPhone=d.match(/iphone/i)!==null;a.isiOS=a.isiPhone||a.isiPad;a.isAndroid=d.match(/android/i)!==null;a.isBustedAndroid=d.match(/android 2\.[12]/)!==null;a.isBustedNativeHTTPS=location.protocol==="https:"&&(d.match(/android [12]\./)!==null||d.match(/macintosh.* version.* safari/)!==null);a.isIE=c.appName.toLowerCase().indexOf("microsoft")!=
-1;a.isChrome=d.match(/chrome/gi)!==null;a.isFirefox=d.match(/firefox/gi)!==null;a.isWebkit=d.match(/webkit/gi)!==null;a.isGecko=d.match(/gecko/gi)!==null&&!a.isWebkit;a.isOpera=d.match(/opera/gi)!==null;a.hasTouch="ontouchstart"in window;a.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;for(c=0;c<f.length;c++)e=document.createElement(f[c]);a.supportsMediaTag=typeof e.canPlayType!=="undefined"||a.isBustedAndroid;try{e.canPlayType("video/mp4")}catch(g){a.supportsMediaTag=
false}a.hasSemiNativeFullScreen=typeof e.webkitEnterFullscreen!=="undefined";a.hasWebkitNativeFullScreen=typeof e.webkitRequestFullScreen!=="undefined";a.hasMozNativeFullScreen=typeof e.mozRequestFullScreen!=="undefined";a.hasTrueNativeFullScreen=a.hasWebkitNativeFullScreen||a.hasMozNativeFullScreen;a.nativeFullScreenEnabled=a.hasTrueNativeFullScreen;if(a.hasMozNativeFullScreen)a.nativeFullScreenEnabled=e.mozFullScreenEnabled;if(this.isChrome)a.hasSemiNativeFullScreen=false;if(a.hasTrueNativeFullScreen){a.fullScreenEventName=
a.hasWebkitNativeFullScreen?"webkitfullscreenchange":"mozfullscreenchange";a.isFullScreen=function(){if(e.mozRequestFullScreen)return b.mozFullScreen;else if(e.webkitRequestFullScreen)return b.webkitIsFullScreen};a.requestFullScreen=function(h){if(a.hasWebkitNativeFullScreen)h.webkitRequestFullScreen();else a.hasMozNativeFullScreen&&h.mozRequestFullScreen()};a.cancelFullScreen=function(){if(a.hasWebkitNativeFullScreen)document.webkitCancelFullScreen();else a.hasMozNativeFullScreen&&document.mozCancelFullScreen()}}if(a.hasSemiNativeFullScreen&&
d.match(/mac os x 10_5/i)){a.hasNativeFullScreen=false;a.hasSemiNativeFullScreen=false}}};mejs.MediaFeatures.init();
mejs.HtmlMediaElement={pluginType:"native",isFullScreen:false,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){for(var b=this.getElementsByTagName("source");b.length>0;)this.removeChild(b[0]);if(typeof a=="string")this.src=a;else{var c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.src=c.src;break}}}},setVideoSize:function(a,b){this.width=a;this.height=b}};
mejs.PluginMediaElement=function(a,b,c){this.id=a;this.pluginType=b;this.src=c;this.events={};this.attributes={}};
mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:false,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:true,ended:false,seeking:false,duration:0,error:null,tagName:"",muted:false,volume:1,currentTime:0,play:function(){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.playVideo():this.pluginApi.playMedia();this.paused=false}},load:function(){if(this.pluginApi!=null){this.pluginType!="youtube"&&this.pluginApi.loadMedia();this.paused=
false}},pause:function(){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.pauseVideo():this.pluginApi.pauseMedia();this.paused=true}},stop:function(){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.stopVideo():this.pluginApi.stopMedia();this.paused=true}},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++){d=e[b];if(mejs.PluginDetector.hasPluginVersion(this.pluginType,d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return"probably"}return""},
positionFullscreenButton:function(a,b,c){this.pluginApi!=null&&this.pluginApi.positionFullscreenButton&&this.pluginApi.positionFullscreenButton(Math.floor(a),Math.floor(b),c)},hideFullscreenButton:function(){this.pluginApi!=null&&this.pluginApi.hideFullscreenButton&&this.pluginApi.hideFullscreenButton()},setSrc:function(a){if(typeof a=="string"){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));this.src=mejs.Utility.absolutizeUrl(a)}else{var b,c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
this.src=mejs.Utility.absolutizeUrl(a);break}}}},setCurrentTime:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.seekTo(a):this.pluginApi.setCurrentTime(a);this.currentTime=a}},setVolume:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.setVolume(a*100):this.pluginApi.setVolume(a);this.volume=a}},setMuted:function(a){if(this.pluginApi!=null){if(this.pluginType=="youtube"){a?this.pluginApi.mute():this.pluginApi.unMute();this.muted=a;this.dispatchEvent("volumechange")}else this.pluginApi.setMuted(a);
this.muted=a}},setVideoSize:function(a,b){if(this.pluginElement.style){this.pluginElement.style.width=a+"px";this.pluginElement.style.height=b+"px"}this.pluginApi!=null&&this.pluginApi.setVideoSize&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.pluginApi.setFullscreen(a)},enterFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.setFullscreen(true)},exitFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&
this.setFullscreen(false)},addEventListener:function(a,b){this.events[a]=this.events[a]||[];this.events[a].push(b)},removeEventListener:function(a,b){if(!a){this.events={};return true}var c=this.events[a];if(!c)return true;if(!b){this.events[a]=[];return true}for(i=0;i<c.length;i++)if(c[i]===b){this.events[a].splice(i,1);return true}return false},dispatchEvent:function(a){var b,c,d=this.events[a];if(d){c=Array.prototype.slice.call(arguments,1);for(b=0;b<d.length;b++)d[b].apply(null,c)}},hasAttribute:function(a){return a in
this.attributes},removeAttribute:function(a){delete this.attributes[a]},getAttribute:function(a){if(this.hasAttribute(a))return this.attributes[a];return""},setAttribute:function(a,b){this.attributes[a]=b},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id);mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)}};
mejs.MediaPluginBridge={pluginMediaElements:{},htmlMediaElements:{},registerPluginElement:function(a,b,c){this.pluginMediaElements[a]=b;this.htmlMediaElements[a]=c},unregisterPluginElement:function(a){delete this.pluginMediaElements[a];delete this.htmlMediaElements[a]},initPlugin:function(a){var b=this.pluginMediaElements[a],c=this.htmlMediaElements[a];if(b){switch(b.pluginType){case "flash":b.pluginElement=b.pluginApi=document.getElementById(a);break;case "silverlight":b.pluginElement=document.getElementById(b.id);
b.pluginApi=b.pluginElement.Content.MediaElementJS}b.pluginApi!=null&&b.success&&b.success(b,c)}},fireEvent:function(a,b,c){var d,e;a=this.pluginMediaElements[a];b={type:b,target:a};for(d in c){a[d]=c[d];b[d]=c[d]}e=c.bufferedTime||0;b.target.buffered=b.buffered={start:function(){return 0},end:function(){return e},length:1};a.dispatchEvent(b.type,b)}};
mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:false,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",enablePluginSmoothing:false,enablePseudoStreaming:false,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,defaultVideoHeight:270,
pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:0.8,success:function(){},error:function(){}};mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)};
mejs.HtmlMediaElementShim={create:function(a,b){var c=mejs.MediaElementDefaults,d=typeof a=="string"?document.getElementById(a):a,e=d.tagName.toLowerCase(),f=e==="audio"||e==="video",g=f?d.getAttribute("src"):d.getAttribute("href");e=d.getAttribute("poster");var h=d.getAttribute("autoplay"),l=d.getAttribute("preload"),j=d.getAttribute("controls"),k;for(k in b)c[k]=b[k];g=typeof g=="undefined"||g===null||g==""?null:g;e=typeof e=="undefined"||e===null?"":e;l=typeof l=="undefined"||l===null||l==="false"?
"none":l;h=!(typeof h=="undefined"||h===null||h==="false");j=!(typeof j=="undefined"||j===null||j==="false");k=this.determinePlayback(d,c,mejs.MediaFeatures.supportsMediaTag,f,g);k.url=k.url!==null?mejs.Utility.absolutizeUrl(k.url):"";if(k.method=="native"){if(mejs.MediaFeatures.isBustedAndroid){d.src=k.url;d.addEventListener("click",function(){d.play()},false)}return this.updateNative(k,c,h,l)}else if(k.method!=="")return this.createPlugin(k,c,e,h,l,j);else{this.createErrorMessage(k,c,e);return this}},
determinePlayback:function(a,b,c,d,e){var f=[],g,h,l,j={method:"",url:"",htmlMediaElement:a,isVideo:a.tagName.toLowerCase()!="audio"},k;if(typeof b.type!="undefined"&&b.type!=="")if(typeof b.type=="string")f.push({type:b.type,url:e});else for(g=0;g<b.type.length;g++)f.push({type:b.type[g],url:e});else if(e!==null){l=this.formatType(e,a.getAttribute("type"));f.push({type:l,url:e})}else for(g=0;g<a.childNodes.length;g++){h=a.childNodes[g];if(h.nodeType==1&&h.tagName.toLowerCase()=="source"){e=h.getAttribute("src");
l=this.formatType(e,h.getAttribute("type"));h=h.getAttribute("media");if(!h||!window.matchMedia||window.matchMedia&&window.matchMedia(h).matches)f.push({type:l,url:e})}}if(!d&&f.length>0&&f[0].url!==null&&this.getTypeFromFile(f[0].url).indexOf("audio")>-1)j.isVideo=false;if(mejs.MediaFeatures.isBustedAndroid)a.canPlayType=function(m){return m.match(/video\/(mp4|m4v)/gi)!==null?"maybe":""};if(c&&(b.mode==="auto"||b.mode==="auto_plugin"||b.mode==="native")&&!mejs.MediaFeatures.isBustedNativeHTTPS){if(!d){g=
document.createElement(j.isVideo?"video":"audio");a.parentNode.insertBefore(g,a);a.style.display="none";j.htmlMediaElement=a=g}for(g=0;g<f.length;g++)if(a.canPlayType(f[g].type).replace(/no/,"")!==""||a.canPlayType(f[g].type.replace(/mp3/,"mpeg")).replace(/no/,"")!==""){j.method="native";j.url=f[g].url;break}if(j.method==="native"){if(j.url!==null)a.src=j.url;if(b.mode!=="auto_plugin")return j}}if(b.mode==="auto"||b.mode==="auto_plugin"||b.mode==="shim")for(g=0;g<f.length;g++){l=f[g].type;for(a=0;a<
b.plugins.length;a++){e=b.plugins[a];h=mejs.plugins[e];for(c=0;c<h.length;c++){k=h[c];if(k.version==null||mejs.PluginDetector.hasPluginVersion(e,k.version))for(d=0;d<k.types.length;d++)if(l==k.types[d]){j.method=e;j.url=f[g].url;return j}}}}if(b.mode==="auto_plugin"&&j.method==="native")return j;if(j.method===""&&f.length>0)j.url=f[0].url;return j},formatType:function(a,b){return a&&!b?this.getTypeFromFile(a):b&&~b.indexOf(";")?b.substr(0,b.indexOf(";")):b},getTypeFromFile:function(a){a=a.split("?")[0];
a=a.substring(a.lastIndexOf(".")+1).toLowerCase();return(/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a)?"video":"audio")+"/"+this.getTypeFromExtension(a)},getTypeFromExtension:function(a){switch(a){case "mp4":case "m4v":return"mp4";case "webm":case "webma":case "webmv":return"webm";case "ogg":case "oga":case "ogv":return"ogg";default:return a}},createErrorMessage:function(a,b,c){var d=a.htmlMediaElement,e=document.createElement("div");e.className="me-cannotplay";try{e.style.width=d.width+
"px";e.style.height=d.height+"px"}catch(f){}e.innerHTML=b.customError?b.customError:c!==""?'<a href="'+a.url+'"><img src="'+c+'" width="100%" height="100%" /></a>':'<a href="'+a.url+'"><span>'+mejs.i18n.t("Download File")+"</span></a>";d.parentNode.insertBefore(e,d);d.style.display="none";b.error(d)},createPlugin:function(a,b,c,d,e,f){c=a.htmlMediaElement;var g=1,h=1,l="me_"+a.method+"_"+mejs.meIndex++,j=new mejs.PluginMediaElement(l,a.method,a.url),k=document.createElement("div"),m;j.tagName=c.tagName;
for(m=0;m<c.attributes.length;m++){var n=c.attributes[m];n.specified==true&&j.setAttribute(n.name,n.value)}for(m=c.parentNode;m!==null&&m.tagName.toLowerCase()!="body";){if(m.parentNode.tagName.toLowerCase()=="p"){m.parentNode.parentNode.insertBefore(m,m.parentNode);break}m=m.parentNode}if(a.isVideo){g=b.pluginWidth>0?b.pluginWidth:b.videoWidth>0?b.videoWidth:c.getAttribute("width")!==null?c.getAttribute("width"):b.defaultVideoWidth;h=b.pluginHeight>0?b.pluginHeight:b.videoHeight>0?b.videoHeight:
c.getAttribute("height")!==null?c.getAttribute("height"):b.defaultVideoHeight;g=mejs.Utility.encodeUrl(g);h=mejs.Utility.encodeUrl(h)}else if(b.enablePluginDebug){g=320;h=240}j.success=b.success;mejs.MediaPluginBridge.registerPluginElement(l,j,c);k.className="me-plugin";k.id=l+"_container";a.isVideo?c.parentNode.insertBefore(k,c):document.body.insertBefore(k,document.body.childNodes[0]);d=["id="+l,"isvideo="+(a.isVideo?"true":"false"),"autoplay="+(d?"true":"false"),"preload="+e,"width="+g,"startvolume="+
b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+h,"pseudostreamstart="+b.pseudoStreamingStartQueryParam];if(a.url!==null)a.method=="flash"?d.push("file="+mejs.Utility.encodeUrl(a.url)):d.push("file="+a.url);b.enablePluginDebug&&d.push("debug=true");b.enablePluginSmoothing&&d.push("smoothing=true");b.enablePseudoStreaming&&d.push("pseudostreaming=true");f&&d.push("controls=true");if(b.pluginVars)d=d.concat(b.pluginVars);switch(a.method){case "silverlight":k.innerHTML=
'<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+l+'" name="'+l+'" width="'+g+'" height="'+h+'" class="mejs-shim"><param name="initParams" value="'+d.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+b.pluginPath+b.silverlightName+'" /></object>';break;case "flash":if(mejs.MediaFeatures.isIE){a=
document.createElement("div");k.appendChild(a);a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+l+'" width="'+g+'" height="'+h+'" class="mejs-shim"><param name="movie" value="'+b.pluginPath+b.flashName+"?x="+new Date+'" /><param name="flashvars" value="'+d.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'}else k.innerHTML=
'<embed id="'+l+'" name="'+l+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+d.join("&")+'" width="'+g+'" height="'+h+'" class="mejs-shim"></embed>';break;case "youtube":b=a.url.substr(a.url.lastIndexOf("=")+1);youtubeSettings={container:k,containerId:k.id,pluginMediaElement:j,pluginId:l,
videoId:b,height:h,width:g};mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])?mejs.YouTubeApi.createFlash(youtubeSettings):mejs.YouTubeApi.enqueueIframe(youtubeSettings);break;case "vimeo":j.vimeoid=a.url.substr(a.url.lastIndexOf("/")+1);k.innerHTML='<iframe src="http://player.vimeo.com/video/'+j.vimeoid+'?portrait=0&byline=0&title=0" width="'+g+'" height="'+h+'" frameborder="0" class="mejs-shim"></iframe>'}c.style.display="none";return j},updateNative:function(a,b){var c=a.htmlMediaElement,
d;for(d in mejs.HtmlMediaElement)c[d]=mejs.HtmlMediaElement[d];b.success(c,c);return c}};
mejs.YouTubeApi={isIframeStarted:false,isIframeLoaded:false,loadIframeApi:function(){if(!this.isIframeStarted){var a=document.createElement("script");a.src="//www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);this.isIframeStarted=true}},iframeQueue:[],enqueueIframe:function(a){if(this.isLoaded)this.createIframe(a);else{this.loadIframeApi();this.iframeQueue.push(a)}},createIframe:function(a){var b=a.pluginMediaElement,c=new YT.Player(a.containerId,
{height:a.height,width:a.width,videoId:a.videoId,playerVars:{controls:0},events:{onReady:function(){a.pluginMediaElement.pluginApi=c;mejs.MediaPluginBridge.initPlugin(a.pluginId);setInterval(function(){mejs.YouTubeApi.createEvent(c,b,"timeupdate")},250)},onStateChange:function(d){mejs.YouTubeApi.handleStateChange(d.data,c,b)}}})},createEvent:function(a,b,c){c={type:c,target:b};if(a&&a.getDuration){b.currentTime=c.currentTime=a.getCurrentTime();b.duration=c.duration=a.getDuration();c.paused=b.paused;
c.ended=b.ended;c.muted=a.isMuted();c.volume=a.getVolume()/100;c.bytesTotal=a.getVideoBytesTotal();c.bufferedBytes=a.getVideoBytesLoaded();var d=c.bufferedBytes/c.bytesTotal*c.duration;c.target.buffered=c.buffered={start:function(){return 0},end:function(){return d},length:1}}b.dispatchEvent(c.type,c)},iFrameReady:function(){for(this.isIframeLoaded=this.isLoaded=true;this.iframeQueue.length>0;)this.createIframe(this.iframeQueue.pop())},flashPlayers:{},createFlash:function(a){this.flashPlayers[a.pluginId]=
a;var b,c="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+a.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";if(mejs.MediaFeatures.isIE){b=document.createElement("div");a.container.appendChild(b);b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+a.pluginId+'" width="'+a.width+'" height="'+a.height+'" class="mejs-shim"><param name="movie" value="'+
c+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'}else a.container.innerHTML='<object type="application/x-shockwave-flash" id="'+a.pluginId+'" data="'+c+'" width="'+a.width+'" height="'+a.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'},flashReady:function(a){var b=this.flashPlayers[a],c=
document.getElementById(a),d=b.pluginMediaElement;d.pluginApi=d.pluginElement=c;mejs.MediaPluginBridge.initPlugin(a);c.cueVideoById(b.videoId);a=b.containerId+"_callback";window[a]=function(e){mejs.YouTubeApi.handleStateChange(e,c,d)};c.addEventListener("onStateChange",a);setInterval(function(){mejs.YouTubeApi.createEvent(c,d,"timeupdate")},250)},handleStateChange:function(a,b,c){switch(a){case -1:c.paused=true;c.ended=true;mejs.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=false;
c.ended=true;mejs.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=false;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"play");mejs.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=true;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"pause");break;case 3:mejs.YouTubeApi.createEvent(b,c,"progress")}}};function onYouTubePlayerAPIReady(){mejs.YouTubeApi.iFrameReady()}function onYouTubePlayerReady(a){mejs.YouTubeApi.flashReady(a)}window.mejs=mejs;window.MediaElement=mejs.MediaElement;
(function(a,b){var c={locale:{strings:{}},methods:{}};c.locale.getLanguage=function(){return c.locale||{language:navigator.language}};c.locale.INIT_LANGUAGE=c.locale.getLanguage();c.methods.checkPlain=function(d){var e,f,g={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};d=String(d);for(e in g)if(g.hasOwnProperty(e)){f=RegExp(e,"g");d=d.replace(f,g[e])}return d};c.methods.formatString=function(d,e){for(var f in e){switch(f.charAt(0)){case "@":e[f]=c.methods.checkPlain(e[f]);break;case "!":break;default:e[f]=
'<em class="placeholder">'+c.methods.checkPlain(e[f])+"</em>"}d=d.replace(f,e[f])}return d};c.methods.t=function(d,e,f){if(c.locale.strings&&c.locale.strings[f.context]&&c.locale.strings[f.context][d])d=c.locale.strings[f.context][d];if(e)d=c.methods.formatString(d,e);return d};c.t=function(d,e,f){if(typeof d==="string"&&d.length>0){var g=c.locale.getLanguage();f=f||{context:g.language};return c.methods.t(d,e,f)}else throw{name:"InvalidArgumentException",message:"First argument is either not a string or empty."};
};b.i18n=c})(document,mejs);(function(a){if(mejs.i18n.locale.language&&mejs.i18n.locale.strings)a[mejs.i18n.locale.language]=mejs.i18n.locale.strings})(mejs.i18n.locale.strings);(function(a){a.de={Fullscreen:"Vollbild","Go Fullscreen":"Vollbild an","Turn off Fullscreen":"Vollbild aus",Close:"Schlie\u00dfen"}})(mejs.i18n.locale.strings);(function(a){a.zh={Fullscreen:"\u5168\u87a2\u5e55","Go Fullscreen":"\u5168\u5c4f\u6a21\u5f0f","Turn off Fullscreen":"\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",Close:"\u95dc\u9589"}})(mejs.i18n.locale.strings);

/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */if(typeof jQuery!="undefined")mejs.$=jQuery;else if(typeof ender!="undefined")mejs.$=ender;
(function(f){mejs.MepDefaults={poster:"",defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(a){return a.duration*0.05},defaultSeekForwardInterval:function(a){return a.duration*0.05},audioWidth:-1,audioHeight:-1,startVolume:0.8,loop:false,autoRewind:true,enableAutosize:true,alwaysShowHours:false,showTimecodeFrameCount:false,framesPerSecond:25,autosizeProgress:true,alwaysShowControls:false,hideVideoControlsOnLoad:false,
clickToPlayPause:true,iPadUseNativeControls:false,iPhoneUseNativeControls:false,AndroidUseNativeControls:false,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:true,enableKeyboard:true,pauseOtherPlayers:true,keyActions:[{keys:[32,179],action:function(a,b){b.paused||b.ended?b.play():b.pause()}},{keys:[38],action:function(a,b){b.setVolume(Math.min(b.volume+0.1,1))}},{keys:[40],action:function(a,b){b.setVolume(Math.max(b.volume-0.1,0))}},{keys:[37,227],action:function(a,
b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(c)}}},{keys:[39,228],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(c)}}},{keys:[70],action:function(a){if(typeof a.enterFullScreen!="undefined")a.isFullScreen?
a.exitFullScreen():a.enterFullScreen()}}]};mejs.mepIndex=0;mejs.players={};mejs.MediaElementPlayer=function(a,b){if(!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(a,b);this.$media=this.$node=f(a);this.node=this.media=this.$media[0];if(typeof this.node.player!="undefined")return this.node.player;else this.node.player=this;if(typeof b=="undefined")b=this.$node.data("mejsoptions");this.options=f.extend({},mejs.MepDefaults,b);this.id="mep_"+mejs.mepIndex++;mejs.players[this.id]=
this;this.init();return this};mejs.MediaElementPlayer.prototype={hasFocus:false,controlsAreVisible:true,init:function(){var a=this,b=mejs.MediaFeatures,c=f.extend(true,{},a.options,{success:function(d,g){a.meReady(d,g)},error:function(d){a.handleError(d)}}),e=a.media.tagName.toLowerCase();a.isDynamic=e!=="audio"&&e!=="video";a.isVideo=a.isDynamic?a.options.isVideo:e!=="audio"&&a.options.isVideo;if(b.isiPad&&a.options.iPadUseNativeControls||b.isiPhone&&a.options.iPhoneUseNativeControls){a.$media.attr("controls",
"controls");if(b.isiPad&&a.media.getAttribute("autoplay")!==null){a.media.load();a.media.play()}}else if(!(b.isAndroid&&a.options.AndroidUseNativeControls)){a.$media.removeAttr("controls");a.container=f('<div id="'+a.id+'" class="mejs-container '+(mejs.MediaFeatures.svg?"svg":"no-svg")+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);
a.container.addClass((b.isAndroid?"mejs-android ":"")+(b.isiOS?"mejs-ios ":"")+(b.isiPad?"mejs-ipad ":"")+(b.isiPhone?"mejs-iphone ":"")+(a.isVideo?"mejs-video ":"mejs-audio "));if(b.isiOS){b=a.$media.clone();a.container.find(".mejs-mediaelement").append(b);a.$node=a.$media=b;a.node=a.media=b[0]}else a.container.find(".mejs-mediaelement").append(a.$media);a.controls=a.container.find(".mejs-controls");a.layers=a.container.find(".mejs-layers");b=a.isVideo?"video":"audio";e=b.substring(0,
1).toUpperCase()+b.substring(1);a.width=a.options[b+"Width"]>0||a.options[b+"Width"].toString().indexOf("%")>-1?a.options[b+"Width"]:a.media.style.width!==""&&a.media.style.width!==null?a.media.style.width:a.media.getAttribute("width")!==null?a.$media.attr("width"):a.options["default"+e+"Width"];a.height=a.options[b+"Height"]>0||a.options[b+"Height"].toString().indexOf("%")>-1?a.options[b+"Height"]:a.media.style.height!==""&&a.media.style.height!==null?a.media.style.height:a.$media[0].getAttribute("height")!==
null?a.$media.attr("height"):a.options["default"+e+"Height"];a.setPlayerSize(a.width,a.height);c.pluginWidth=a.width;c.pluginHeight=a.height}mejs.MediaElement(a.$media[0],c);typeof a.container!="undefined"&&a.container.trigger("controlsshown")},showControls:function(a){var b=this;a=typeof a=="undefined"||a;if(!b.controlsAreVisible){if(a){b.controls.css("visibility","visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true;b.container.trigger("controlsshown")});b.container.find(".mejs-control").css("visibility",
"visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true})}else{b.controls.css("visibility","visible").css("display","block");b.container.find(".mejs-control").css("visibility","visible").css("display","block");b.controlsAreVisible=true;b.container.trigger("controlsshown")}b.setControlsSize()}},hideControls:function(a){var b=this;a=typeof a=="undefined"||a;if(b.controlsAreVisible)if(a){b.controls.stop(true,true).fadeOut(200,function(){f(this).css("visibility","hidden").css("display",
"block");b.controlsAreVisible=false;b.container.trigger("controlshidden")});b.container.find(".mejs-control").stop(true,true).fadeOut(200,function(){f(this).css("visibility","hidden").css("display","block")})}else{b.controls.css("visibility","hidden").css("display","block");b.container.find(".mejs-control").css("visibility","hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")}},controlsTimer:null,startControlsTimer:function(a){var b=this;a=typeof a!="undefined"?
a:1500;b.killControlsTimer("start");b.controlsTimer=setTimeout(function(){b.hideControls();b.killControlsTimer("hide")},a)},killControlsTimer:function(){if(this.controlsTimer!==null){clearTimeout(this.controlsTimer);delete this.controlsTimer;this.controlsTimer=null}},controlsEnabled:true,disableControls:function(){this.killControlsTimer();this.hideControls(false);this.controlsEnabled=false},enableControls:function(){this.showControls(false);this.controlsEnabled=true},meReady:function(a,b){var c=this,
e=mejs.MediaFeatures,d=b.getAttribute("autoplay");d=!(typeof d=="undefined"||d===null||d==="false");var g;if(!c.created){c.created=true;c.media=a;c.domNode=b;if(!(e.isAndroid&&c.options.AndroidUseNativeControls)&&!(e.isiPad&&c.options.iPadUseNativeControls)&&!(e.isiPhone&&c.options.iPhoneUseNativeControls)){c.buildposter(c,c.controls,c.layers,c.media);c.buildkeyboard(c,c.controls,c.layers,c.media);c.buildoverlays(c,c.controls,c.layers,c.media);c.findTracks();for(g in c.options.features){e=c.options.features[g];
if(c["build"+e])try{c["build"+e](c,c.controls,c.layers,c.media)}catch(k){}}c.container.trigger("controlsready");c.setPlayerSize(c.width,c.height);c.setControlsSize();if(c.isVideo){if(mejs.MediaFeatures.hasTouch)c.$media.bind("touchstart",function(){if(c.controlsAreVisible)c.hideControls(false);else c.controlsEnabled&&c.showControls(false)});else{mejs.MediaElementPlayer.prototype.clickToPlayPauseCallback=function(){console.log("media clicked",c.media,c.media.paused);if(c.options.clickToPlayPause)c.media.paused?
c.media.play():c.media.pause()};c.media.addEventListener("click",c.clickToPlayPauseCallback);c.container.bind("mouseenter mouseover",function(){if(c.controlsEnabled)if(!c.options.alwaysShowControls){c.killControlsTimer("enter");c.showControls();c.startControlsTimer(2500)}}).bind("mousemove",function(){if(c.controlsEnabled){c.controlsAreVisible||c.showControls();c.options.alwaysShowControls||c.startControlsTimer(2500)}}).bind("mouseleave",function(){c.controlsEnabled&&!c.media.paused&&!c.options.alwaysShowControls&&
c.startControlsTimer(1E3)})}c.options.hideVideoControlsOnLoad&&c.hideControls(false);d&&!c.options.alwaysShowControls&&c.hideControls();c.options.enableAutosize&&c.media.addEventListener("loadedmetadata",function(j){if(c.options.videoHeight<=0&&c.domNode.getAttribute("height")===null&&!isNaN(j.target.videoHeight)){c.setPlayerSize(j.target.videoWidth,j.target.videoHeight);c.setControlsSize();c.media.setVideoSize(j.target.videoWidth,j.target.videoHeight)}},false)}a.addEventListener("play",function(){for(var j in mejs.players){var m=
mejs.players[j];m.id!=c.id&&c.options.pauseOtherPlayers&&!m.paused&&!m.ended&&m.pause();m.hasFocus=false}c.hasFocus=true},false);c.media.addEventListener("ended",function(){if(c.options.autoRewind)try{c.media.setCurrentTime(0)}catch(j){}c.media.pause();c.setProgressRail&&c.setProgressRail();c.setCurrentRail&&c.setCurrentRail();if(c.options.loop)c.media.play();else!c.options.alwaysShowControls&&c.controlsEnabled&&c.showControls()},false);c.media.addEventListener("loadedmetadata",function(){c.updateDuration&&
c.updateDuration();c.updateCurrent&&c.updateCurrent();if(!c.isFullScreen){c.setPlayerSize(c.width,c.height);c.setControlsSize()}},false);setTimeout(function(){c.setPlayerSize(c.width,c.height);c.setControlsSize()},50);c.globalBind("resize",function(){c.isFullScreen||mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen||c.setPlayerSize(c.width,c.height);c.setControlsSize()});c.media.pluginType=="youtube"&&c.container.find(".mejs-overlay-play").hide()}if(d&&a.pluginType=="native"){a.load();
a.play()}if(c.options.success)typeof c.options.success=="string"?window[c.options.success](c.media,c.domNode,c):c.options.success(c.media,c.domNode,c)}},handleError:function(a){this.controls.hide();this.options.error&&this.options.error(a)},setPlayerSize:function(a,b){if(typeof a!="undefined")this.width=a;if(typeof b!="undefined")this.height=b;if(this.height.toString().indexOf("%")>0||this.$node.css("max-width")==="100%"||this.$node[0].currentStyle&&this.$node[0].currentStyle.maxWidth==="100%"){var c=
this.isVideo?this.media.videoWidth&&this.media.videoWidth>0?this.media.videoWidth:this.options.defaultVideoWidth:this.options.defaultAudioWidth,e=this.isVideo?this.media.videoHeight&&this.media.videoHeight>0?this.media.videoHeight:this.options.defaultVideoHeight:this.options.defaultAudioHeight,d=this.container.parent().closest(":visible").width();c=this.isVideo||!this.options.autosizeProgress?parseInt(d*e/c,10):e;if(this.container.parent()[0].tagName.toLowerCase()==="body"){d=f(window).width();c=
f(window).height()}if(c!=0&&d!=0){this.container.width(d).height(c);this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");this.isVideo&&this.media.setVideoSize&&this.media.setVideoSize(d,c);this.layers.children(".mejs-layer").width("100%").height("100%")}}else{this.container.width(this.width).height(this.height);this.layers.children(".mejs-layer").width(this.width).height(this.height)}d=this.layers.find(".mejs-overlay-play");c=d.find(".mejs-overlay-button");d.height(this.container.height()-
this.controls.height());c.css("margin-top","-"+(c.height()/2-this.controls.height()/2).toString()+"px")},setControlsSize:function(){var a=0,b=0,c=this.controls.find(".mejs-time-rail"),e=this.controls.find(".mejs-time-total");this.controls.find(".mejs-time-current");this.controls.find(".mejs-time-loaded");var d=c.siblings();if(this.options&&!this.options.autosizeProgress)b=parseInt(c.css("width"));if(b===0||!b){d.each(function(){var g=f(this);if(g.css("position")!="absolute"&&g.is(":visible"))a+=f(this).outerWidth(true)});
b=this.controls.width()-a-(c.outerWidth(true)-c.width())}c.width(b);e.width(b-(e.outerWidth(true)-e.width()));this.setProgressRail&&this.setProgressRail();this.setCurrentRail&&this.setCurrentRail()},buildposter:function(a,b,c,e){var d=f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);b=a.$media.attr("poster");if(a.options.poster!=="")b=a.options.poster;b!==""&&b!=null?this.setPoster(b):d.hide();e.addEventListener("play",function(){d.hide()},false)},setPoster:function(a){var b=this.container.find(".mejs-poster"),
c=b.find("img");if(c.length==0)c=f('<img width="100%" height="100%" />').appendTo(b);c.attr("src",a);b.css({"background-image":"url("+a+")"})},buildoverlays:function(a,b,c,e){var d=this;if(a.isVideo){var g=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),k=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),j=f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).click(function(){if(d.options.clickToPlayPause)e.paused?
e.play():e.pause()});e.addEventListener("play",function(){j.hide();g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);e.addEventListener("playing",function(){j.hide();g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);e.addEventListener("seeking",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("seeked",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);e.addEventListener("pause",function(){mejs.MediaFeatures.isiPhone||j.show()},
false);e.addEventListener("waiting",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("loadeddata",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("canplay",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);e.addEventListener("error",function(){g.hide();b.find(".mejs-time-buffering").hide();k.show();k.find("mejs-overlay-error").html("Error loading this resource")},false)}},buildkeyboard:function(a,b,c,e){this.globalBind("keydown",
function(d){if(a.hasFocus&&a.options.enableKeyboard)for(var g=0,k=a.options.keyActions.length;g<k;g++)for(var j=a.options.keyActions[g],m=0,q=j.keys.length;m<q;m++)if(d.keyCode==j.keys[m]){d.preventDefault();j.action(a,e,d.keyCode);return false}return true});this.globalBind("click",function(d){if(f(d.target).closest(".mejs-container").length==0)a.hasFocus=false})},findTracks:function(){var a=this,b=a.$media.find("track");a.tracks=[];b.each(function(c,e){e=f(e);a.tracks.push({srclang:e.attr("srclang")?
e.attr("srclang").toLowerCase():"",src:e.attr("src"),kind:e.attr("kind"),label:e.attr("label")||"",entries:[],isLoaded:false})})},changeSkin:function(a){this.container[0].className="mejs-container "+a;this.setPlayerSize(this.width,this.height);this.setControlsSize()},play:function(){this.media.play()},pause:function(){this.media.pause()},load:function(){this.media.load()},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},
setVolume:function(a){this.media.setVolume(a)},getVolume:function(){return this.media.volume},setSrc:function(a){this.media.setSrc(a)},remove:function(){var a,b;for(a in this.options.features){b=this.options.features[a];if(this["clean"+b])try{this["clean"+b](this)}catch(c){}}this.media.pluginType==="native"?this.$media.prop("controls",true):this.media.remove();this.isDynamic||this.$node.insertBefore(this.container);delete mejs.players[this.id];this.container.remove();this.globalUnbind();delete this.node.player}};
(function(){function a(c,e){var d={d:[],w:[]};f.each((c||"").split(" "),function(g,k){var j=k+"."+e;if(j.indexOf(".")===0){d.d.push(j);d.w.push(j)}else d[b.test(k)?"w":"d"].push(j)});d.d=d.d.join(" ");d.w=d.w.join(" ");return d}var b=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;mejs.MediaElementPlayer.prototype.globalBind=function(c,e,d){c=a(c,this.id);c.d&&f(document).bind(c.d,e,d);c.w&&f(window).bind(c.w,e,d)};mejs.MediaElementPlayer.prototype.globalUnbind=
function(c,e){c=a(c,this.id);c.d&&f(document).unbind(c.d,e);c.w&&f(window).unbind(c.w,e)}})();if(typeof jQuery!="undefined")jQuery.fn.mediaelementplayer=function(a){a===false?this.each(function(){var b=jQuery(this).data("mediaelementplayer");b&&b.remove();jQuery(this).removeData("mediaelementplayer")}):this.each(function(){jQuery(this).data("mediaelementplayer",new mejs.MediaElementPlayer(this,a))});return this};f(document).ready(function(){f(".mejs-player").mediaelementplayer()});window.MediaElementPlayer=
mejs.MediaElementPlayer})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{playpauseText:mejs.i18n.t("Play/Pause")});f.extend(MediaElementPlayer.prototype,{buildplaypause:function(a,b,c,e){var d=f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+this.id+'" title="'+this.options.playpauseText+'" aria-label="'+this.options.playpauseText+'"></button></div>').appendTo(b).click(function(g){g.preventDefault();e.paused?e.play():e.pause();return false});e.addEventListener("play",function(){d.removeClass("mejs-play").addClass("mejs-pause")},
false);e.addEventListener("playing",function(){d.removeClass("mejs-play").addClass("mejs-pause")},false);e.addEventListener("pause",function(){d.removeClass("mejs-pause").addClass("mejs-play")},false);e.addEventListener("paused",function(){d.removeClass("mejs-pause").addClass("mejs-play")},false)}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{stopText:"Stop"});f.extend(MediaElementPlayer.prototype,{buildstop:function(a,b,c,e){f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+this.id+'" title="'+this.options.stopText+'" aria-label="'+this.options.stopText+'"></button></div>').appendTo(b).click(function(){e.paused||e.pause();if(e.currentTime>0){e.setCurrentTime(0);e.pause();b.find(".mejs-time-current").width("0px");b.find(".mejs-time-handle").css("left",
"0px");b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));c.find(".mejs-poster").show()}})}})})(mejs.$);
(function(f){f.extend(MediaElementPlayer.prototype,{buildprogress:function(a,b,c,e){f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);b.find(".mejs-time-buffering").hide();var d=
this,g=b.find(".mejs-time-total");c=b.find(".mejs-time-loaded");var k=b.find(".mejs-time-current"),j=b.find(".mejs-time-handle"),m=b.find(".mejs-time-float"),q=b.find(".mejs-time-float-current"),p=function(h){h=h.pageX;var l=g.offset(),r=g.outerWidth(true),n=0,o=n=0;if(e.duration){if(h<l.left)h=l.left;else if(h>r+l.left)h=r+l.left;o=h-l.left;n=o/r;n=n<=0.02?0:n*e.duration;t&&n!==e.currentTime&&e.setCurrentTime(n);if(!mejs.MediaFeatures.hasTouch){m.css("left",o);q.html(mejs.Utility.secondsToTimeCode(n));
m.show()}}},t=false;g.bind("mousedown",function(h){if(h.which===1){t=true;p(h);d.globalBind("mousemove.dur",function(l){p(l)});d.globalBind("mouseup.dur",function(){t=false;m.hide();d.globalUnbind(".dur")});return false}}).bind("mouseenter",function(){d.globalBind("mousemove.dur",function(h){p(h)});mejs.MediaFeatures.hasTouch||m.show()}).bind("mouseleave",function(){if(!t){d.globalUnbind(".dur");m.hide()}});e.addEventListener("progress",function(h){a.setProgressRail(h);a.setCurrentRail(h)},false);
e.addEventListener("timeupdate",function(h){a.setProgressRail(h);a.setCurrentRail(h)},false);d.loaded=c;d.total=g;d.current=k;d.handle=j},setProgressRail:function(a){var b=a!=undefined?a.target:this.media,c=null;if(b&&b.buffered&&b.buffered.length>0&&b.buffered.end&&b.duration)c=b.buffered.end(0)/b.duration;else if(b&&b.bytesTotal!=undefined&&b.bytesTotal>0&&b.bufferedBytes!=undefined)c=b.bufferedBytes/b.bytesTotal;else if(a&&a.lengthComputable&&a.total!=0)c=a.loaded/a.total;if(c!==null){c=Math.min(1,
Math.max(0,c));this.loaded&&this.total&&this.loaded.width(this.total.width()*c)}},setCurrentRail:function(){if(this.media.currentTime!=undefined&&this.media.duration)if(this.total&&this.handle){var a=Math.round(this.total.width()*this.media.currentTime/this.media.duration),b=a-Math.round(this.handle.outerWidth(true)/2);this.current.width(a);this.handle.css("left",b)}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:" <span> / </span> "});f.extend(MediaElementPlayer.prototype,{buildcurrent:function(a,b,c,e){f('<div class="mejs-time"><span class="mejs-currenttime">'+(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00")+"</span></div>").appendTo(b);this.currenttime=this.controls.find(".mejs-currenttime");e.addEventListener("timeupdate",function(){a.updateCurrent()},false)},buildduration:function(a,
b,c,e){if(b.children().last().find(".mejs-currenttime").length>0)f(this.options.timeAndDurationSeparator+'<span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span>").appendTo(b.find(".mejs-time"));else{b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span></div>").appendTo(b)}this.durationD=this.controls.find(".mejs-duration");e.addEventListener("timeupdate",function(){a.updateDuration()},
false)},updateCurrent:function(){if(this.currenttime)this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))},updateDuration:function(){this.container.toggleClass("mejs-long-video",this.media.duration>3600);if(this.durationD&&(this.options.duration>0||this.media.duration))this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration>0?this.options.duration:
this.media.duration,this.options.alwaysShowHours,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{muteText:mejs.i18n.t("Mute Toggle"),hideVolumeOnTouchDevices:true,audioVolume:"horizontal",videoVolume:"vertical"});f.extend(MediaElementPlayer.prototype,{buildvolume:function(a,b,c,e){if(!(mejs.MediaFeatures.hasTouch&&this.options.hideVolumeOnTouchDevices)){var d=this,g=d.isVideo?d.options.videoVolume:d.options.audioVolume,k=g=="horizontal"?f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+d.id+'" title="'+d.options.muteText+
'" aria-label="'+d.options.muteText+'"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b):f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+d.id+'" title="'+d.options.muteText+'" aria-label="'+d.options.muteText+'"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
j=d.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),m=d.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),q=d.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),p=d.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),t=function(n,o){if(!j.is(":visible")&&typeof o=="undefined"){j.show();t(n,true);j.hide()}else{n=Math.max(0,n);n=Math.min(n,1);n==0?k.removeClass("mejs-mute").addClass("mejs-unmute"):k.removeClass("mejs-unmute").addClass("mejs-mute");
if(g=="vertical"){var s=m.height(),u=m.position(),v=s-s*n;p.css("top",Math.round(u.top+v-p.height()/2));q.height(s-v);q.css("top",u.top+v)}else{s=m.width();u=m.position();s=s*n;p.css("left",Math.round(u.left+s-p.width()/2));q.width(Math.round(s))}}},h=function(n){var o=null,s=m.offset();if(g=="vertical"){o=m.height();parseInt(m.css("top").replace(/px/,""),10);o=(o-(n.pageY-s.top))/o;if(s.top==0||s.left==0)return}else{o=m.width();o=(n.pageX-s.left)/o}o=Math.max(0,o);o=Math.min(o,1);t(o);o==0?e.setMuted(true):
e.setMuted(false);e.setVolume(o)},l=false,r=false;k.hover(function(){j.show();r=true},function(){r=false;!l&&g=="vertical"&&j.hide()});j.bind("mouseover",function(){r=true}).bind("mousedown",function(n){h(n);d.globalBind("mousemove.vol",function(o){h(o)});d.globalBind("mouseup.vol",function(){l=false;d.globalUnbind(".vol");!r&&g=="vertical"&&j.hide()});l=true;return false});k.find("button").click(function(){e.setMuted(!e.muted)});e.addEventListener("volumechange",function(){if(!l)if(e.muted){t(0);
k.removeClass("mejs-mute").addClass("mejs-unmute")}else{t(e.volume);k.removeClass("mejs-unmute").addClass("mejs-mute")}},false);if(d.container.is(":visible")){t(a.options.startVolume);a.options.startVolume===0&&e.setMuted(true);e.pluginType==="native"&&e.setVolume(a.options.startVolume)}}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{usePluginFullScreen:true,newWindowCallback:function(){return""},fullscreenText:mejs.i18n.t("Fullscreen")});f.extend(MediaElementPlayer.prototype,{isFullScreen:false,isNativeFullScreen:false,docStyleOverflow:null,isInIframe:false,buildfullscreen:function(a,b,c,e){if(a.isVideo){a.isInIframe=window.location!=window.parent.location;if(mejs.MediaFeatures.hasTrueNativeFullScreen){c=function(){if(mejs.MediaFeatures.isFullScreen()){a.isNativeFullScreen=true;a.setControlsSize()}else{a.isNativeFullScreen=
false;a.exitFullScreen()}};mejs.MediaFeatures.hasMozNativeFullScreen?a.globalBind(mejs.MediaFeatures.fullScreenEventName,c):a.container.bind(mejs.MediaFeatures.fullScreenEventName,c)}var d=this,g=f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+d.id+'" title="'+d.options.fullscreenText+'" aria-label="'+d.options.fullscreenText+'"></button></div>').appendTo(b);if(d.media.pluginType==="native"||!d.options.usePluginFullScreen&&!mejs.MediaFeatures.isFirefox)g.click(function(){mejs.MediaFeatures.hasTrueNativeFullScreen&&
mejs.MediaFeatures.isFullScreen()||a.isFullScreen?a.exitFullScreen():a.enterFullScreen()});else{var k=null;if(function(){var h=document.createElement("x"),l=document.documentElement,r=window.getComputedStyle;if(!("pointerEvents"in h.style))return false;h.style.pointerEvents="auto";h.style.pointerEvents="x";l.appendChild(h);r=r&&r(h,"").pointerEvents==="auto";l.removeChild(h);return!!r}()&&!mejs.MediaFeatures.isOpera){var j=false,m=function(){if(j){for(var h in q)q[h].hide();g.css("pointer-events",
"");d.controls.css("pointer-events","");d.media.removeEventListener("click",d.clickToPlayPauseCallback);j=false}},q={};b=["top","left","right","bottom"];var p,t=function(){var h=g.offset().left-d.container.offset().left,l=g.offset().top-d.container.offset().top,r=g.outerWidth(true),n=g.outerHeight(true),o=d.container.width(),s=d.container.height();for(p in q)q[p].css({position:"absolute",top:0,left:0});q.top.width(o).height(l);q.left.width(h).height(n).css({top:l});q.right.width(o-h-r).height(n).css({top:l,
left:h+r});q.bottom.width(o).height(s-n-l).css({top:l+n})};d.globalBind("resize",function(){t()});p=0;for(c=b.length;p<c;p++)q[b[p]]=f('<div class="mejs-fullscreen-hover" />').appendTo(d.container).mouseover(m).hide();g.on("mouseover",function(){if(!d.isFullScreen){var h=g.offset(),l=a.container.offset();e.positionFullscreenButton(h.left-l.left,h.top-l.top,false);g.css("pointer-events","none");d.controls.css("pointer-events","none");d.media.addEventListener("click",d.clickToPlayPauseCallback);for(p in q)q[p].show();
t();j=true}});e.addEventListener("fullscreenchange",function(){d.isFullScreen=!d.isFullScreen;d.isFullScreen?d.media.removeEventListener("click",d.clickToPlayPauseCallback):d.media.addEventListener("click",d.clickToPlayPauseCallback);m()});d.globalBind("mousemove",function(h){if(j){var l=g.offset();if(h.pageY<l.top||h.pageY>l.top+g.outerHeight(true)||h.pageX<l.left||h.pageX>l.left+g.outerWidth(true)){g.css("pointer-events","");d.controls.css("pointer-events","");j=false}}})}else g.on("mouseover",
function(){if(k!==null){clearTimeout(k);delete k}var h=g.offset(),l=a.container.offset();e.positionFullscreenButton(h.left-l.left,h.top-l.top,true)}).on("mouseout",function(){if(k!==null){clearTimeout(k);delete k}k=setTimeout(function(){e.hideFullscreenButton()},1500)})}a.fullscreenBtn=g;d.globalBind("keydown",function(h){if((mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||d.isFullScreen)&&h.keyCode==27)a.exitFullScreen()})}},cleanfullscreen:function(a){a.exitFullScreen()},
containerSizeTimeout:null,enterFullScreen:function(){var a=this;if(!(a.media.pluginType!=="native"&&(mejs.MediaFeatures.isFirefox||a.options.usePluginFullScreen))){docStyleOverflow=document.documentElement.style.overflow;document.documentElement.style.overflow="hidden";normalHeight=a.container.height();normalWidth=a.container.width();if(a.media.pluginType==="native")if(mejs.MediaFeatures.hasTrueNativeFullScreen){mejs.MediaFeatures.requestFullScreen(a.container[0]);a.isInIframe&&setTimeout(function c(){if(a.isNativeFullScreen)f(window).width()!==
screen.width?a.exitFullScreen():setTimeout(c,500)},500)}else if(mejs.MediaFeatures.hasSemiNativeFullScreen){a.media.webkitEnterFullscreen();return}if(a.isInIframe){var b=a.options.newWindowCallback(this);if(b!=="")if(mejs.MediaFeatures.hasTrueNativeFullScreen)setTimeout(function(){if(!a.isNativeFullScreen){a.pause();window.open(b,a.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no")}},250);else{a.pause();window.open(b,a.id,
"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no");return}}a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");a.containerSizeTimeout=setTimeout(function(){a.container.css({width:"100%",height:"100%"});a.setControlsSize()},500);if(a.media.pluginType==="native")a.$media.width("100%").height("100%");else{a.container.find(".mejs-shim").width("100%").height("100%");a.media.setVideoSize(f(window).width(),
f(window).height())}a.layers.children("div").width("100%").height("100%");a.fullscreenBtn&&a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");a.setControlsSize();a.isFullScreen=true}},exitFullScreen:function(){clearTimeout(this.containerSizeTimeout);if(this.media.pluginType!=="native"&&mejs.MediaFeatures.isFirefox)this.media.setFullscreen(false);else{if(mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||this.isFullScreen))mejs.MediaFeatures.cancelFullScreen();
document.documentElement.style.overflow=docStyleOverflow;this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);if(this.media.pluginType==="native")this.$media.width(normalWidth).height(normalHeight);else{this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);this.media.setVideoSize(normalWidth,normalHeight)}this.layers.children("div").width(normalWidth).height(normalHeight);this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
this.setControlsSize();this.isFullScreen=false}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{startLanguage:"",tracksText:mejs.i18n.t("Captions/Subtitles"),hideCaptionsButtonWhenEmpty:true,toggleCaptionsButtonWhenOnlyOne:false,slidesSelector:""});f.extend(MediaElementPlayer.prototype,{hasChapters:false,buildtracks:function(a,b,c,e){if(a.tracks.length!=0){a.chapters=f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();a.captions=f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();a.captionsText=
a.captions.find(".mejs-captions-text");a.captionsButton=f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+this.id+'" title="'+this.options.tracksText+'" aria-label="'+this.options.tracksText+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+a.id+'_captions" id="'+a.id+'_captions_none" value="none" checked="checked" /><label for="'+a.id+'_captions_none">'+mejs.i18n.t("None")+"</label></li></ul></div></div>").appendTo(b);for(b=
c=0;b<a.tracks.length;b++)a.tracks[b].kind=="subtitles"&&c++;this.options.toggleCaptionsButtonWhenOnlyOne&&c==1?a.captionsButton.on("click",function(){a.setTrack(a.selectedTrack==null?a.tracks[0].srclang:"none")}):a.captionsButton.hover(function(){f(this).find(".mejs-captions-selector").css("visibility","visible")},function(){f(this).find(".mejs-captions-selector").css("visibility","hidden")}).on("click","input[type=radio]",function(){lang=this.value;a.setTrack(lang)});a.options.alwaysShowControls?
a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover"):a.container.bind("controlsshown",function(){a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",function(){e.paused||a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")});a.trackToLoad=-1;a.selectedTrack=null;a.isLoadingTrack=false;for(b=0;b<a.tracks.length;b++)a.tracks[b].kind=="subtitles"&&a.addTrackButton(a.tracks[b].srclang,
a.tracks[b].label);a.loadNextTrack();e.addEventListener("timeupdate",function(){a.displayCaptions()},false);if(a.options.slidesSelector!=""){a.slidesContainer=f(a.options.slidesSelector);e.addEventListener("timeupdate",function(){a.displaySlides()},false)}e.addEventListener("loadedmetadata",function(){a.displayChapters()},false);a.container.hover(function(){if(a.hasChapters){a.chapters.css("visibility","visible");a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())}},function(){a.hasChapters&&
!e.paused&&a.chapters.fadeOut(200,function(){f(this).css("visibility","hidden");f(this).css("display","block")})});a.node.getAttribute("autoplay")!==null&&a.chapters.css("visibility","hidden")}},setTrack:function(a){var b;if(a=="none"){this.selectedTrack=null;this.captionsButton.removeClass("mejs-captions-enabled")}else for(b=0;b<this.tracks.length;b++)if(this.tracks[b].srclang==a){this.selectedTrack==null&&this.captionsButton.addClass("mejs-captions-enabled");this.selectedTrack=this.tracks[b];this.captions.attr("lang",
this.selectedTrack.srclang);this.displayCaptions();break}},loadNextTrack:function(){this.trackToLoad++;if(this.trackToLoad<this.tracks.length){this.isLoadingTrack=true;this.loadTrack(this.trackToLoad)}else{this.isLoadingTrack=false;this.checkForTracks()}},loadTrack:function(a){var b=this,c=b.tracks[a];f.ajax({url:c.src,dataType:"text",success:function(e){c.entries=typeof e=="string"&&/<tt\s+xml/ig.exec(e)?mejs.TrackFormatParser.dfxp.parse(e):mejs.TrackFormatParser.webvvt.parse(e);c.isLoaded=true;
b.enableTrackButton(c.srclang,c.label);b.loadNextTrack();c.kind=="chapters"&&b.media.addEventListener("play",function(){b.media.duration>0&&b.displayChapters(c)},false);c.kind=="slides"&&b.setupSlides(c)},error:function(){b.loadNextTrack()}})},enableTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("input[value="+a+"]").prop("disabled",false).siblings("label").html(b);this.options.startLanguage==a&&f("#"+this.id+"_captions_"+a).click();this.adjustLanguageBox()},
addTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("ul").append(f('<li><input type="radio" name="'+this.id+'_captions" id="'+this.id+"_captions_"+a+'" value="'+a+'" disabled="disabled" /><label for="'+this.id+"_captions_"+a+'">'+b+" (loading)</label></li>"));this.adjustLanguageBox();this.container.find(".mejs-captions-translations option[value="+a+"]").remove()},adjustLanguageBox:function(){this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true)+
this.captionsButton.find(".mejs-captions-translations").outerHeight(true))},checkForTracks:function(){var a=false;if(this.options.hideCaptionsButtonWhenEmpty){for(i=0;i<this.tracks.length;i++)if(this.tracks[i].kind=="subtitles"){a=true;break}if(!a){this.captionsButton.hide();this.setControlsSize()}}},displayCaptions:function(){if(typeof this.tracks!="undefined"){var a,b=this.selectedTrack;if(b!=null&&b.isLoaded)for(a=0;a<b.entries.times.length;a++)if(this.media.currentTime>=b.entries.times[a].start&&
this.media.currentTime<=b.entries.times[a].stop){this.captionsText.html(b.entries.text[a]);this.captions.show().height(0);return}this.captions.hide()}},setupSlides:function(a){this.slides=a;this.slides.entries.imgs=[this.slides.entries.text.length];this.showSlide(0)},showSlide:function(a){if(!(typeof this.tracks=="undefined"||typeof this.slidesContainer=="undefined")){var b=this,c=b.slides.entries.text[a],e=b.slides.entries.imgs[a];if(typeof e=="undefined"||typeof e.fadeIn=="undefined")b.slides.entries.imgs[a]=
e=f('<img src="'+c+'">').on("load",function(){e.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()});else if(!e.is(":visible")&&!e.is(":animated")){console.log("showing existing slide");e.fadeIn().siblings(":visible").fadeOut()}}},displaySlides:function(){if(typeof this.slides!="undefined"){var a=this.slides,b;for(b=0;b<a.entries.times.length;b++)if(this.media.currentTime>=a.entries.times[b].start&&this.media.currentTime<=a.entries.times[b].stop){this.showSlide(b);break}}},
displayChapters:function(){var a;for(a=0;a<this.tracks.length;a++)if(this.tracks[a].kind=="chapters"&&this.tracks[a].isLoaded){this.drawChapters(this.tracks[a]);this.hasChapters=true;break}},drawChapters:function(a){var b=this,c,e,d=e=0;b.chapters.empty();for(c=0;c<a.entries.times.length;c++){e=a.entries.times[c].stop-a.entries.times[c].start;e=Math.floor(e/b.media.duration*100);if(e+d>100||c==a.entries.times.length-1&&e+d<100)e=100-d;b.chapters.append(f('<div class="mejs-chapter" rel="'+a.entries.times[c].start+
'" style="left: '+d.toString()+"%;width: "+e.toString()+'%;"><div class="mejs-chapter-block'+(c==a.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+a.entries.text[c]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(a.entries.times[c].start)+"&ndash;"+mejs.Utility.secondsToTimeCode(a.entries.times[c].stop)+"</span></div></div>"));d+=e}b.chapters.find("div.mejs-chapter").click(function(){b.media.setCurrentTime(parseFloat(f(this).attr("rel")));b.media.paused&&
b.media.play()});b.chapters.show()}});mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",tl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",ko:"Korean",
lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}};mejs.TrackFormatParser={webvvt:{pattern_identifier:/^([a-zA-z]+-)?[0-9]+$/,pattern_timecode:/^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
parse:function(a){var b=0;a=mejs.TrackFormatParser.split2(a,/\r?\n/);for(var c={text:[],times:[]},e,d;b<a.length;b++)if(this.pattern_identifier.exec(a[b])){b++;if((e=this.pattern_timecode.exec(a[b]))&&b<a.length){b++;d=a[b];for(b++;a[b]!==""&&b<a.length;){d=d+"\n"+a[b];b++}d=f.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");c.text.push(d);c.times.push({start:mejs.Utility.convertSMPTEtoSeconds(e[1])==0?0.2:mejs.Utility.convertSMPTEtoSeconds(e[1]),
stop:mejs.Utility.convertSMPTEtoSeconds(e[3]),settings:e[5]})}}return c}},dfxp:{parse:function(a){a=f(a).filter("tt");var b=0;b=a.children("div").eq(0);var c=b.find("p");b=a.find("#"+b.attr("style"));var e,d;a={text:[],times:[]};if(b.length){d=b.removeAttr("id").get(0).attributes;if(d.length){e={};for(b=0;b<d.length;b++)e[d[b].name.split(":")[1]]=d[b].value}}for(b=0;b<c.length;b++){var g;d={start:null,stop:null,style:null};if(c.eq(b).attr("begin"))d.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
if(!d.start&&c.eq(b-1).attr("end"))d.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b-1).attr("end"));if(c.eq(b).attr("end"))d.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));if(!d.stop&&c.eq(b+1).attr("begin"))d.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b+1).attr("begin"));if(e){g="";for(var k in e)g+=k+":"+e[k]+";"}if(g)d.style=g;if(d.start==0)d.start=0.2;a.times.push(d);d=f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
"<a href='$1' target='_blank'>$1</a>");a.text.push(d);if(a.times.start==0)a.times.start=2}return a}},split2:function(a,b){return a.split(b)}};if("x\n\ny".split(/\n/gi).length!=3)mejs.TrackFormatParser.split2=function(a,b){var c=[],e="",d;for(d=0;d<a.length;d++){e+=a.substring(d,d+1);if(b.test(e)){c.push(e.replace(b,""));e=""}}c.push(e);return c}})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(a){if(typeof a.enterFullScreen=="undefined")return null;return a.isFullScreen?mejs.i18n.t("Turn off Fullscreen"):mejs.i18n.t("Go Fullscreen")},click:function(a){a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}},{render:function(a){return a.media.muted?mejs.i18n.t("Unmute"):mejs.i18n.t("Mute")},click:function(a){a.media.muted?a.setMuted(false):a.setMuted(true)}},{isSeparator:true},{render:function(){return mejs.i18n.t("Download Video")},
click:function(a){window.location.href=a.media.currentSrc}}]});f.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(a){a.contextMenu=f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();a.container.bind("contextmenu",function(b){if(a.isContextMenuEnabled){b.preventDefault();a.renderContextMenu(b.clientX-1,b.clientY-1);return false}});a.container.bind("click",function(){a.contextMenu.hide()});a.contextMenu.bind("mouseleave",function(){a.startContextMenuTimer()})},cleancontextmenu:function(a){a.contextMenu.remove()},
isContextMenuEnabled:true,enableContextMenu:function(){this.isContextMenuEnabled=true},disableContextMenu:function(){this.isContextMenuEnabled=false},contextMenuTimeout:null,startContextMenuTimer:function(){var a=this;a.killContextMenuTimer();a.contextMenuTimer=setTimeout(function(){a.hideContextMenu();a.killContextMenuTimer()},750)},killContextMenuTimer:function(){var a=this.contextMenuTimer;if(a!=null){clearTimeout(a);delete a}},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(a,
b){for(var c=this,e="",d=c.options.contextMenuItems,g=0,k=d.length;g<k;g++)if(d[g].isSeparator)e+='<div class="mejs-contextmenu-separator"></div>';else{var j=d[g].render(c);if(j!=null)e+='<div class="mejs-contextmenu-item" data-itemindex="'+g+'" id="element-'+Math.random()*1E6+'">'+j+"</div>"}c.contextMenu.empty().append(f(e)).css({top:b,left:a}).show();c.contextMenu.find(".mejs-contextmenu-item").each(function(){var m=f(this),q=parseInt(m.data("itemindex"),10),p=c.options.contextMenuItems[q];typeof p.show!=
"undefined"&&p.show(m,c);m.click(function(){typeof p.click!="undefined"&&p.click(c);c.contextMenu.hide()})});setTimeout(function(){c.killControlsTimer("rev3")},100)}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{postrollCloseText:mejs.i18n.t("Close")});f.extend(MediaElementPlayer.prototype,{buildpostroll:function(a,b,c){var e=this.container.find('link[rel="postroll"]').attr("href");if(typeof e!=="undefined"){a.postroll=f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+this.options.postrollCloseText+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();this.media.addEventListener("ended",
function(){f.ajax({dataType:"html",url:e,success:function(d){c.find(".mejs-postroll-layer-content").html(d)}});a.postroll.show()},false)}}})})(mejs.$);

;
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function(g){var q={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click", buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},m=!1;g(window).bind("load.jcarousel",function(){m=!0});g.jcarousel=function(a,c){this.options=g.extend({},q,c||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!c||c.rtl===void 0)this.options.rtl=(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical? this.options.rtl?"right":"left":"top";for(var b="",d=a.className.split(" "),f=0;f<d.length;f++)if(d[f].indexOf("jcarousel-skin")!=-1){g(a).removeClass(d[f]);b=d[f];break}a.nodeName.toUpperCase()=="UL"||a.nodeName.toUpperCase()=="OL"?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0)this.clip= this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();b!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+b+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext= g(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}); !this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,b=this.list.children("li"),e=this;if(b.size()>0){var h=0,i=this.options.offset;b.each(function(){e.format(this,i++);h+=e.dimension(this,j)});this.list.css(this.wh,h+100+"px");if(!c||c.size===void 0)this.options.size=b.size()}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display", "block");this.funcNext=function(){e.next()};this.funcPrev=function(){e.prev()};this.funcResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer);e.resizeTimer=setTimeout(function(){e.reload()},100)};this.options.initCallback!==null&&this.options.initCallback(this,"init");!m&&g.browser.safari?(this.buttons(!1,!1),g(window).bind("load.jcarousel",function(){e.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.8"};f.fn.extend=f.extend=g.extend;f.fn.extend({setup:function(){this.prevLast= this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this)}},reset:function(){this.list.empty();this.list.css(this.lt, "0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup()},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var a=this,c=Math.ceil(this.clipping()/this.options.visible),b=0,d=0;this.list.children("li").each(function(f){b+=a.dimension(this, c);f+1<a.first&&(d=b)});this.list.css(this.wh,b+"px");this.list.css(this.lt,-d+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){if(a!==void 0)this.options.size=a,this.locked||this.buttons();return this.options.size},has:function(a,c){if(c===void 0||!c)c=a;if(this.options.size!==null&&c>this.options.size)c=this.options.size;for(var b=a;b<=c;b++){var d=this.get(b);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0}, get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,c){var b=this.get(a),d=0,p=g(c);if(b.length===0)for(var j,e=f.intval(a),b=this.create(a);;){if(j=this.get(--e),e<=0||j.length){e<=0?this.list.prepend(b):j.after(b);break}}else d=this.dimension(b);p.get(0).nodeName.toUpperCase()=="LI"?(b.replaceWith(p),b=p):b.empty().append(c);this.format(b.removeClass(this.className("jcarousel-item-placeholder")),a);p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible): null;d=this.dimension(b,p)-d;a>0&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-d+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+d+"px");return b},remove:function(a){var c=this.get(a);if(c.length&&!(a>=this.first&&a<=this.last)){var b=this.dimension(c);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+b+"px");c.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-b+"px")}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1): this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var c=f.intval(this.list.css(this.lt)), c=!a?c-this.tail:c+this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(c)}},scroll:function(a,c){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(a),c))},pos:function(a,c){var b=f.intval(this.list.css(this.lt));if(this.locked||this.animating)return b;this.options.wrap!="circular"&&(a=a<1?1:this.options.size&&a>this.options.size?this.options.size:a);for(var d=this.first>a,g=this.options.wrap!="circular"&&this.first<=1?1:this.first,j=d?this.get(g): this.get(this.last),e=d?g:g-1,h=null,i=0,k=!1,l=0;d?--e>=a:++e<a;){h=this.get(e);k=!h.length;if(h.length===0&&(h=this.create(e).addClass(this.className("jcarousel-item-placeholder")),j[d?"before":"after"](h),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size)))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)));j=h;l=this.dimension(h);k&&(i+=l);if(this.first!==null&&(this.options.wrap=="circular"||e>=1&&(this.options.size===null||e<= this.options.size)))b=d?b+l:b-l}for(var g=this.clipping(),m=[],o=0,n=0,j=this.get(a-1),e=a;++o;){h=this.get(e);k=!h.length;if(h.length===0){h=this.create(e).addClass(this.className("jcarousel-item-placeholder"));if(j.length===0)this.list.prepend(h);else j[d?"before":"after"](h);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)))}j=h;l=this.dimension(h);if(l===0)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting..."); this.options.wrap!="circular"&&this.options.size!==null&&e>this.options.size?m.push(h):k&&(i+=l);n+=l;if(n>=g)break;e++}for(h=0;h<m.length;h++)m[h].remove();i>0&&(this.list.css(this.wh,this.dimension(this.list)+i+"px"),d&&(b-=i,this.list.css(this.lt,f.intval(this.list.css(this.lt))-i+"px")));i=a+o-1;if(this.options.wrap!="circular"&&this.options.size&&i>this.options.size)i=this.options.size;if(e>i){o=0;e=i;for(n=0;++o;){h=this.get(e--);if(!h.length)break;n+=this.dimension(h);if(n>=g)break}}e=i-o+ 1;this.options.wrap!="circular"&&e<1&&(e=1);if(this.inTail&&d)b+=this.tail,this.inTail=!1;this.tail=null;if(this.options.wrap!="circular"&&i==this.options.size&&i-o+1>=1&&(d=f.intval(this.get(i).css(!this.options.vertical?"marginRight":"marginBottom")),n-d>g))this.tail=n-g-d;if(c&&a===this.options.size&&this.tail)b-=this.tail,this.inTail=!0;for(;a-- >e;)b+=this.dimension(this.get(a));this.prevFirst=this.first;this.prevLast=this.last;this.first=e;this.last=i;return b},animate:function(a,c){if(!this.locked&& !this.animating){this.animating=!0;var b=this,d=function(){b.animating=!1;a===0&&b.list.css(b.lt,0);!b.autoStopped&&(b.options.wrap=="circular"||b.options.wrap=="both"||b.options.wrap=="last"||b.options.size===null||b.last<b.options.size||b.last==b.options.size&&b.tail!==null&&!b.inTail)&&b.startAuto();b.buttons();b.notify("onAfterAnimation");if(b.options.wrap=="circular"&&b.options.size!==null)for(var c=b.prevFirst;c<=b.prevLast;c++)c!==null&&!(c>=b.first&&c<=b.last)&&(c<1||c>b.options.size)&&b.remove(c)}; this.notify("onBeforeAnimation");if(!this.options.animation||c===!1)this.list.css(this.lt,a+"px"),d();else{var f=!this.options.vertical?this.options.rtl?{right:a}:{left:a}:{top:a},d={duration:this.options.animation,easing:this.options.easing,complete:d};if(g.isFunction(this.options.animationStepCallback))d.step=this.options.animationStepCallback;this.list.animate(f,d)}}},startAuto:function(a){if(a!==void 0)this.options.auto=a;if(this.options.auto===0)return this.stopAuto();if(this.timer===null){this.autoStopped= !1;var c=this;this.timer=window.setTimeout(function(){c.next()},this.options.auto*1E3)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){if(this.timer!==null)window.clearTimeout(this.timer),this.timer=null},buttons:function(a,c){if(a==null&&(a=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&& this.last>=this.options.size))a=this.tail!==null&&!this.inTail;if(c==null&&(c=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1))c=this.tail!==null&&this.inTail;var b=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext), this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){b.options.buttonNextCallback(b,this,a)}).data("jcarouselstate",a)):this.options.buttonNextCallback!==null&&this.buttonNextState!=a&&this.options.buttonNextCallback(b,null,a);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev), c&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[c?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",c?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=c&&this.buttonPrev.each(function(){b.options.buttonPrevCallback(b,this,c)}).data("jcarouselstate",c)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=c&&this.options.buttonPrevCallback(b,null,c);this.buttonNextState= a;this.buttonPrevState=c},notify:function(a){var c=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,c);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,c,this.first),this.callback("itemFirstOutCallback",a,c,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,c,this.last),this.callback("itemLastOutCallback",a,c,this.prevLast));this.callback("itemVisibleInCallback",a,c,this.first,this.last,this.prevFirst, this.prevLast);this.callback("itemVisibleOutCallback",a,c,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,c,b,d,f,j,e){if(!(this.options[a]==null||typeof this.options[a]!="object"&&c!="onAfterAnimation")){var h=typeof this.options[a]=="object"?this.options[a][c]:this.options[a];if(g.isFunction(h)){var i=this;if(d===void 0)h(i,b,c);else if(f===void 0)this.get(d).each(function(){h(i,this,d,b,c)});else for(var a=function(a){i.get(a).each(function(){h(i,this,a,b,c)})},k=d;k<=f;k++)k!== null&&!(k>=j&&k<=e)&&a(k)}}},create:function(a){return this.format("<li></li>",a)},format:function(a,c){for(var a=g(a),b=a.get(0).className.split(" "),d=0;d<b.length;d++)b[d].indexOf("jcarousel-")!=-1&&a.removeClass(b[d]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c);return a},className:function(a){return a+" "+a+(!this.options.vertical?"-horizontal":"-vertical")}, dimension:function(a,c){var b=g(a);if(c==null)return!this.options.vertical?b.outerWidth(!0)||f.intval(this.options.itemFallbackDimension):b.outerHeight(!0)||f.intval(this.options.itemFallbackDimension);else{var d=!this.options.vertical?c-f.intval(b.css("marginLeft"))-f.intval(b.css("marginRight")):c-f.intval(b.css("marginTop"))-f.intval(b.css("marginBottom"));g(b).css(this.wh,d+"px");return this.dimension(b)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))- f.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth"))},index:function(a,c){if(c==null)c=this.options.size;return Math.round(((a-1)/c-Math.floor((a-1)/c))*c)+1}});f.extend({defaults:function(a){return g.extend(q,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){m=!0}});g.fn.jcarousel=function(a){if(typeof a=="string"){var c=g(this).data("jcarousel"),b=Array.prototype.slice.call(arguments, 1);return c[a].apply(c,b)}else return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(jQuery);
;
/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jquery-flickr-plugin
*
* Available tags for templates:
* title, link, date_taken, description, published, author, author_id, tags, image*
*/
(function($){$.fn.jflickrfeed=function(settings,callback){settings=$.extend(true,{flickrbase:'http://api.flickr.com/services/feeds/',feedapi:'photos_public.gne',limit:20,qstrings:{lang:'en-us',format:'json',jsoncallback:'?'},cleanDescription:true,useTemplate:true,itemTemplate:'',itemCallback:function(){}},settings);var url=settings.flickrbase+settings.feedapi+'?';var first=true;for(var key in settings.qstrings){if(!first)
url+='&';url+=key+'='+settings.qstrings[key];first=false;}
return $(this).each(function(){var $container=$(this);var container=this;$.getJSON(url,function(data){$.each(data.items,function(i,item){if(i<settings.limit){if(settings.cleanDescription){var regex=/<p>(.*?)<\/p>/g;var input=item.description;if(regex.test(input)){item.description=input.match(regex)[2]
if(item.description!=undefined)
item.description=item.description.replace('<p>','').replace('</p>','');}}
item['image_s']=item.media.m.replace('_m','_s');item['image_t']=item.media.m.replace('_m','_t');item['image_m']=item.media.m.replace('_m','_m');item['image']=item.media.m.replace('_m','');item['image_b']=item.media.m.replace('_m','_b');delete item.media;if(settings.useTemplate){var template=settings.itemTemplate;for(var key in item){var rgx=new RegExp('{{'+key+'}}','g');template=template.replace(rgx,item[key]);}
$container.append(template)}
settings.itemCallback.call(container,item);}});if($.isFunction(callback)){callback.call(container,data);}});});}})(jQuery);;
(function(a){a.fn.swipe=function(c){if(!this){return false}var k={fingers:1,threshold:75,timeThreshold:500,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var m="left";var l="right";var d="up";var s="down";var j="none";var v="horizontal";var q="vertical";var o="auto";var f="start";var i="move";var h="end";var n="cancel";var t="ontouchstart" in window,b=t?"touchstart":"mousedown",p=t?"touchmove":"mousemove",g=t?"touchend":"mouseup",r="touchcancel";var e="start";var u;if(c.allowPageScroll==undefined&&(c.swipe!=undefined||c.swipeStatus!=undefined)){c.allowPageScroll=j}if(c){a.extend(k,c)}return this.each(function(){var E=this;var I=a(this);var F=null;var J=0;var y={x:0,y:0};var B={x:0,y:0};var L={x:0,y:0};function A(P){var O=t?P.touches[0]:P;e=f;if(t){J=P.touches.length}distance=0;direction=null;if(J==k.fingers||!t){y.x=B.x=O.pageX;y.y=B.y=O.pageY;if(k.swipeStatus){z(P,e)}var N=new Date();u=N.getTime()}else{D(P)}E.addEventListener(p,K,false);E.addEventListener(g,M,false)}function K(Q){if(e==h||e==n){return}var P=t?Q.touches[0]:Q;B.x=P.pageX;B.y=P.pageY;direction=w();if(t){J=Q.touches.length}e=i;H(Q,direction);if(J==k.fingers||!t){distance=C();if(k.swipeStatus){z(Q,e,direction,distance)}if(!k.triggerOnTouchEnd){var O=new Date();var R=O.getTime();var N=R-u;if(distance>=k.threshold&&N<=k.timeThreshold){e=h;z(Q,e);D(Q)}}}else{e=n;z(Q,e);D(Q)}}function M(P){P.preventDefault();distance=C();direction=w();if(k.triggerOnTouchEnd){e=h;if((J==k.fingers||!t)&&B.x!=0){var O=new Date();var Q=O.getTime();var N=Q-u;if(distance>=k.threshold&&N<=k.timeThreshold){z(P,e);D(P)}else{e=n;z(P,e);D(P)}}else{e=n;z(P,e);D(P)}}else{if(e==i){e=n;z(P,e);D(P)}}E.removeEventListener(p,K,false);E.removeEventListener(g,M,false)}function D(N){J=0;y.x=0;y.y=0;B.x=0;B.y=0;L.x=0;L.y=0}function z(O,N){if(k.swipeStatus){k.swipeStatus.call(I,O,N,direction||null,distance||0)}if(N==n){if(k.click&&(J==1||!t)&&(isNaN(distance)||distance==0)){k.click.call(I,O,O.target)}}if(N==h){if(k.swipe){k.swipe.call(I,O,direction,distance)}switch(direction){case m:if(k.swipeLeft){k.swipeLeft.call(I,O,direction,distance)}break;case l:if(k.swipeRight){k.swipeRight.call(I,O,direction,distance)}break;case d:if(k.swipeUp){k.swipeUp.call(I,O,direction,distance)}break;case s:if(k.swipeDown){k.swipeDown.call(I,O,direction,distance)}break}}}function H(N,O){if(k.allowPageScroll==j){N.preventDefault()}else{var P=k.allowPageScroll==o;switch(O){case m:if((k.swipeLeft&&P)||(!P&&k.allowPageScroll!=v)){N.preventDefault()}break;case l:if((k.swipeRight&&P)||(!P&&k.allowPageScroll!=v)){N.preventDefault()}break;case d:if((k.swipeUp&&P)||(!P&&k.allowPageScroll!=q)){N.preventDefault()}break;case s:if((k.swipeDown&&P)||(!P&&k.allowPageScroll!=q)){N.preventDefault()}break}}}function C(){return Math.round(Math.sqrt(Math.pow(B.x-y.x,2)+Math.pow(B.y-y.y,2)))}function x(){var Q=y.x-B.x;var P=B.y-y.y;var N=Math.atan2(P,Q);var O=Math.round(N*180/Math.PI);if(O<0){O=360-Math.abs(O)}return O}function w(){var N=x();if((N<=45)&&(N>=0)){return m}else{if((N<=360)&&(N>=315)){return m}else{if((N>=135)&&(N<=225)){return l}else{if((N>45)&&(N<135)){return s}else{return d}}}}}try{this.addEventListener(b,A,false);this.addEventListener(r,D)}catch(G){}})}})(jQuery);;
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);;
/*global jQuery */
/*! 
* FitMaps 1.0
*
* Date: 2012
*/

(function( $ ){
    
	$.fn.fitMaps = function( options ) {
		var settings = {
			customSelector: null,
			h: '100%',
			w: '100%'
		}
		
		if ( options ) { 
			$.extend( settings, options );
		}
		
		var div = document.createElement('div'),
		ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
		
		div.className = 'fit-maps-style';
		div.innerHTML = '&shy;<style>         \
			.fluid-width-map-wrapper {        \
				position: relative;           \
				width: ' + settings.w + ';    \
				height: ' + settings.h + ';   \
				padding: 0;                   \
    			margin: 0px auto;           \
			}                                 \
			\
			.fluid-width-map-wrapper iframe {  \
				width: 100%;                  \
				height: 100%;                  \
				top: 0;                       \
				left: 0;                      \
			}                                 \
			</style>';
		
		ref.parentNode.insertBefore(div,ref);

		return this.each(function(){
			var selectors = [
				"iframe[src*='maps.google']"
			];
		
			if (settings.customSelector) {
				selectors.push(settings.customSelector);
			}
			
			var $allMaps = $(this).find(selectors.join(','));
			
			$allMaps.each(function(){
				var $this = $(this);
				if ($this.parent('.fluid-width-map-wrapper').length) return;
				
				if(!$this.attr('id')){
					var mapID = 'fitmap' + Math.floor(Math.random()*999999);
					$this.attr('id', mapID);
				}
				
				$this.wrap('<div class="fluid-width-map-wrapper"></div>');
				$this.removeAttr('height').removeAttr('width');
			});
		});
		
	}
})( jQuery );;
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);;
/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */
(function(d){d.flexslider=function(j,l){var a=d(j),c=d.extend({},d.flexslider.defaults,l),e=c.namespace,q="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,u=q?"touchend":"click",m="vertical"===c.direction,n=c.reverse,h=0<c.itemWidth,s="fade"===c.animation,t=""!==c.asNavFor,f={};d.data(j,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=m?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!s)if(g=c.useCSS)a:{g=document.createElement("div");var p=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in p)if(void 0!==g.style[p[e]]){a.pfx=p[e].replace("Perspective","").toLowerCase();
a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();t&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
(1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());q&&c.touch&&f.touch();(!s||s&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();b=d(this);var g=b.index();
!d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var p=0;p<a.pagingCount;p++)g="thumbnails"===c.controlNav?
'<img src="'+a.slides.eq(p).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNavScaffold.delegate("a",
"click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(u,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
q&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
(a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(u,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});q&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){k=m?d-b.touches[0].pageY:d-b.touches[0].pageX;q=m?Math.abs(k)<Math.abs(b.touches[0].pageX-e):Math.abs(k)<Math.abs(b.touches[0].pageY-e);if(!q||500<Number(new Date)-l)b.preventDefault(),!s&&a.transitions&&(c.animationLoop||(k/=0===a.currentSlide&&0>k||a.currentSlide===a.last&&0<k?Math.abs(k)/r+2:1),a.setProps(f+k,"setTouch"))}function g(){j.removeEventListener("touchmove",
b,!1);if(a.animatingTo===a.currentSlide&&!q&&null!==k){var h=n?-k:k,m=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(m)&&(550>Number(new Date)-l&&50<Math.abs(h)||Math.abs(h)>r/2)?a.flexAnimate(m,c.pauseOnAction):s||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}j.removeEventListener("touchend",g,!1);f=k=e=d=null}var d,e,f,r,k,l,q=!1;j.addEventListener("touchstart",function(k){a.animating?k.preventDefault():1===k.touches.length&&(a.pause(),r=m?a.h:a.w,l=Number(new Date),f=h&&n&&a.animatingTo===
a.last?0:h&&n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:n?(a.last-a.currentSlide+a.cloneOffset)*r:(a.currentSlide+a.cloneOffset)*r,d=m?k.touches[0].pageY:k.touches[0].pageX,e=m?k.touches[0].pageX:k.touches[0].pageY,j.addEventListener("touchmove",b,!1),j.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),s?f.smoothHeight():h?(a.slides.width(a.computedW),
a.update(a.pagingCount),a.setProps()):m?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!m||s){var c=s?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
!g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,p,j,l){t&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,l)||p)&&a.is(":visible")){if(t&&j)if(p=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,p.flexAnimate(b,!0,!1,!0,l),a.direction=a.currentItem<b?"next":"prev",p.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
"active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!l&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(s)q?(a.slides.eq(a.currentSlide).css({opacity:0,
zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var r=m?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?n?(a.count+a.cloneOffset)*r:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?n?0:(a.count+1)*r:n?(a.count-1-b+a.cloneOffset)*r:(b+a.cloneOffset)*r;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
function(){a.wrapup(r)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(r)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!s&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=t?a.pagingCount-1:a.last;return g?!0:t&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:t&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
!t?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:n&&a.animatingTo===a.last?0:n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
a.last?a.limit:f;switch(g){case "setTotal":return n?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return n?b:a.count*b;case "jumpStart":return n?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=m?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(s)a.slides.css({width:"100%",
"float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(q?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,p;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
0,n&&(p=d.makeArray(a.slides).reverse(),a.slides=d(p),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=n?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;m&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;m&&n?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():m&&n?a.slides.eq(a.last).remove():
a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(j){void 0===j&&(j={});if("object"===typeof j)return this.each(function(){var a=d(this),c=a.find(j.selector?j.selector:".slides > li");1===c.length?(c.fadeIn(400),
j.start&&j.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,j)});var l=d(this).data("flexslider");switch(j){case "play":l.play();break;case "pause":l.pause();break;case "next":l.flexAnimate(l.getTarget("next"),!0);break;case "prev":case "previous":l.flexAnimate(l.getTarget("prev"),!0);break;default:"number"===typeof j&&l.flexAnimate(j,!0)}}})(jQuery);;
/* ---------------------------------------------------------------------- */
/*	Theme Settings														  */
/* ---------------------------------------------------------------------- */

	/* ---------------------------------------------------- */
	/*	Menu												*/
	/* ---------------------------------------------------- */

	var objNavMenu = {
		fixed: true // Boolean:  (true/false)
	};

	/* ---------------------------------------------------- */
	/*	Google Map											*/
	/* ---------------------------------------------------- */

	var objGoogleMap = {
		address: 'New York, USA', // City, County
		markers: [
			{'address' : 'Grand St, New York'} // Street
		],
		zoom: 13 // 0 - 21
	};

	/* ---------------------------------------------------- */
	/*	Layer Slider										*/
	/* ---------------------------------------------------- */

	var objLayerSlider = {
		width : '100%',						
		height : '400px',
		responsive : true,					// Boolean:  (true/false)
		responsiveUnder : 940,
		sublayerContainer : 940,
		autoStart : true,					// Boolean:  If true, slideshow will automatically start after loading the page. (true/false)
		pauseOnHover : true,				// Boolean: If ture, SlideShow will pause when you move the mouse pointer over the LayerSlider container. (true/false)
		firstLayer : 1,						// Integer:  LayerSlider will begin with this layer. (Positive Integer)
		animateFirstLayer : true,			// Boolean:  (true/false)
		randomSlideshow : false,			// Boolean:  (true/false)
		twoWaySlideshow : true,				// Boolean: If true, slideshow will go backwards if you click the prev button. (true/false)
		loops : 0,
		forceLoopNum : true,				// Boolean:  (true/false)
		autoPlayVideos : false,				// Boolean:  (true/false)
		autoPauseSlideshow : 'auto',
		keybNav : true,						 // Boolean: Keyboard navigation. You can navigate with the left and right arrow keys. (true/false)
		touchNav : true,					 // Boolean:  (true/false)
		skin : 'goodnex',					 // String: You can change the skin of the Slider. (name_of_the_skin) 
		skinsPath : 'js/layerslider/skins/', // String: You can change the default path of the skins folder. Note, that you must use the slash at the end of the path. (path_of_the_skins_folder/)
		showBarTimer : false,				 // Boolean:  (true/false)
		showCircleTimer : false,			 // Boolean:  (true/false)
		globalBGColor : '#f6f6f6',			 // CSS Color Methods. Background color of LayerSlider. You can use all CSS methods, like hexa colors, rgb(r,g,b) method, color names, etc. Note, that background sublayers are covering the background. 
		navPrevNext : true,					 // Boolean: If false, Prev and Next buttons will be invisible. (true/false)
		navStartStop : false,				 // Boolean: If false, Start and Stop buttons will be invisible. (true/false)
		navButtons : false,					 // Boolean: If false, slide buttons will be invisible. (true/false)
		hoverPrevNext : true,				 // Boolean:  (true/false)
		hoverBottomNav : false,				 // Boolean:  (true/false)
		thumbnailNavigation : 'disabled',
		tnWidth : 100,
		tnHeight : 60,
		tnContainerWidth : '60%',
		tnActiveOpacity : 35,
		tnInactiveOpacity : 100
	};

	/* ---------------------------------------------------- */
	/*	Flex Slider											*/
	/* ---------------------------------------------------- */

	var objFlexSlider = {
		animation: "slide",			// String: Select your animation type, "fade" or "slide"
		easing: "swing",			// Refer to the link below  http://easings.net/
		direction: "horizontal",    // String: Select the sliding direction, "horizontal" or "vertical"
		controlNav: false,			// Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		directionNav: true,			// Boolean: Create navigation for previous/next navigation? (true/false)
		slideshowSpeed: 6000,		// Integer: Set the speed of the slideshow cycling, in milliseconds
		animationSpeed: 600,        // Integer: Set the speed of animations, in milliseconds
		randomize: false            // Boolean: Randomize slide order
	};

	/* ---------------------------------------------------- */
	/*	Carousel											*/
	/* ---------------------------------------------------- */

	var jCarousel = {
		animation: 600,
		easing: 'easeOutCubic' // Refer to the link below  http://easings.net/
	};

	/* ---------------------------------------------------- */
	/*	Image Post Slider									*/
	/* ---------------------------------------------------- */

	var objPostSlider = {
		easing: 'easeInOutExpo', // Refer to the link below  http://easings.net/
		speed: 600,
		timeout: 5000
	};

	/* ---------------------------------------------------- */
	/*	Image Gallery Slider								*/
	/* ---------------------------------------------------- */

	var objGallerySlider = {
		easing: 'easeInOutExpo', // Refer to the link below  http://easings.net/
		speed: 600,
		timeout: 5000
	};

	/* ---------------------------------------------------- */
	/*	Testimonials										*/
	/* ---------------------------------------------------- */

	var objTestimonials  = {
		easing: 'easeInOutExpo', // Refer to the link below  http://easings.net/
		speed: 600,
		timeout: 5000
	};

	/* ---------------------------------------------------- */
	/*	Black And White										*/
	/* ---------------------------------------------------- */


	/* ---------------------------------------------------- */
	/*	Black And White for Touch Devices					*/
	/* ---------------------------------------------------- */

	var objBlackAndWhiteTouch  = {
		hoverEffect: false, // default true
		responsive: true,
		invertHoverEffect: true,
		speed: {//this property could also be just speed: value for both fadeIn and fadeOut
			fadeIn: 400, // 400ms for fadeIn animations
			fadeOut: 800 // 800ms for fadeOut animations
		}
	};
	
/* ---------------------------------------------------------------------- */
/*	end Theme Settings													  */
/* ---------------------------------------------------------------------- */			
		;
/*global jQuery, window, Modernizr, navigator, lang_home, objFlexSlider, objLayerSlider, objFlickr, jCarousel, objPostSlider, objGallerySlider, objTestimonials, objBlackAndWhite, google, objGoogleMap*/

(function ($, win, Modernizr, nav, doc) {

	"use strict";

	$(function () {
	
	  /* ---------------------------------------------------- */
		/*	Temp Chrome Fix										*/
		/* ---------------------------------------------------- */
	    
      /* Disabled by Hani

	   /***$(window).load(function() {  
	  
		  $('body')
		  
		  .queue( 
		  	function(next){ 
		    	$(this).css('padding-right', '0px'); 
		  	}
		  );
	  
	  });
	  
	  /* end Temp Chrome Fix */

		/* ---------------------------------------------------- */
		/*	Main Navigation										*/
		/* ---------------------------------------------------- */

		(function () {

			var	arrowimages = {
				down: 'downarrowclass',
				right: 'rightarrowclass'
			}, $mainNav = $('#navigation'), $mainList  = $mainNav.find('ul').eq(0), optionsList = '<option value="" selected>Navigate...</option>', $submenu = $mainList.find("ul").parent();

			$submenu.each(function (i) {
				var $curobj = $(this);
					this.istopheader = ($curobj.parents("ul").length === 1 ? true : false);
				$curobj.children("a").append('<span class="' + (this.istopheader ? arrowimages.down : arrowimages.right) + '"></span>');
			});

			$mainList.on('mouseenter', 'li', function () {
				var $this    = $(this),
					$subMenu = $this.children('ul');
				if ($subMenu.length) {
					$this.addClass('hover');
				}
				$subMenu.hide().stop(true, true).fadeIn(200);
			}).on('mouseleave', 'li', function () {
				$(this).removeClass('hover').children('ul').stop(true, true).fadeOut(50);
			});

			// Responsive
			$mainList.find('li').each(function () {
				var $this   = $(this), $anchor = $this.children('a'), depth   = $this.parents('ul').length - 1, indent  = '';
				if (depth) {
					while (depth > 0) {
						indent += '-';
						depth = depth - 1;
					}
				}
				optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';

			});

			$mainNav.after('<select class="responsive-nav">' + optionsList + '</select>');

			$('.responsive-nav').on('change', function () {
				win.location = $(this).val();
			});
			
			

		}());

		/* end Main Navigation */

		/* ---------------------------------------------------- */
		/*	Media Element										*/
		/* ---------------------------------------------------- */

		(function () {

			var $player = $('audio, video');

			if ($player.length) {

				$player.mediaelementplayer({
					audioWidth: '100%',
					audioHeight: '30px',
					videoWidth: '100%',
					videoHeight: '100%'
				});

			}
		}());

		/* ---------------------------------------------------------------------- */
		/*	Detect Touch Device													  */
		/* ---------------------------------------------------------------------- */

		(function () {

			if (Modernizr.touch) {
				$('body').addClass('touch-device');
			}

			if ($.browser.safari === true) {
				$('body').addClass('safari');
			}

		}());

		/* end Detect Touch Device */

		/*--------------------------------------------------------------------*/
		/* Flex Slider														  */
		/*--------------------------------------------------------------------*/

		(function () {

			var $flex = $('.flexslider');

			if ($flex.length) {
				$(win).load(function () {
					$flex.flexslider(objFlexSlider);
				});
			}

		}());

		/* end Flex Slider */


		
		/* ---------------------------------------------------- */
		/*	Tabs												*/
		/* ---------------------------------------------------- */

		(function () {

			var $contentTabs = $('.content-tabs');

			if ($contentTabs.length) {

				$contentTabs.each(function (i, val) {

					var $tabsNav = $('.tabs-nav', val), tabsNavLis = $tabsNav.children('li'), $tabsContainer = $('.tabs-container', val);

					$tabsNav.each(function () {
						$(this).next().children('.tab-content').first().stop(true, true).show();
						$(this).children('li').first().addClass('active').stop(true, true).show();
					});

					$(val).on('click', '.tabs-nav a', function (e) {

						var $this = $(this).parent('li'), $index = $this.index();
						$this.siblings().removeClass('active').end().addClass('active');
						$this.parent().next().children('.tab-content').stop(true, true).hide().eq($index).stop(true, true).fadeIn(250, function () {

							var self = $(this);

							self.parent('.tabs-container').animate({
								height : self.outerHeight(true)
							}, 200);

						});
						e.preventDefault();
					});

					function adjustTabs() {
						$tabsContainer.each(function () {
							var $this = $(this);
							$this.height($this.children('.tab-content:visible').outerHeight());
						});
					}

					// Init
					adjustTabs();

					// Window resize
					$(win).on('resize', function () {

						var timer = win.setTimeout(function () {
							win.clearTimeout(timer);
							adjustTabs();
						}, 30);
					});

				});
			}

		}());

		/* end Tabs */

		/*----------------------------------------------------*/
		/*	Accordion and Toggle							  */
		/*----------------------------------------------------*/

		(function () {

			if ($('.acc-box').length) {

				var $box = $('.acc-box');

				$box.each(function () {

					var $trigger = $('.acc-trigger', this);

					$trigger.first().addClass('active').next().show();

					$trigger.on('click', function (e) {

						var $this = $(this);

						if ($this.attr('data-mode') === 'toggle') {
							$this.toggleClass('active').next().stop(true, true).slideToggle(300);
						} else if ($this.next().is(':hidden')) {
							$trigger.removeClass('active').next().slideUp(300);
							$this.toggleClass('active').next().slideDown(300);
						}
						e.preventDefault();
					});

				});

			}

		}());

		/* end Accordion and Toggle */

		/*----------------------------------------------------*/
		/*	Alert Boxes										  */
		/*----------------------------------------------------*/

		(function () {

			var $notifications = $('.error, .success, .info, .notice');

			if ($notifications.length) {
				$notifications.notifications({
					speed: 300
				});
			}

		}());

		/* ---------------------------------------------------- */
		/* Back to Top											*/
		/* ---------------------------------------------------- */

		(function () {

			var extend = {
				button: '#back-top',
				text: 'Back to Top',
				min: 200,
				fadeIn: 400,
				fadeOut: 400,
				speed: 800
			}, oldiOS = false, oldAndroid = false;

			// Detect if older iOS device, which doesn't support fixed position
			if (/(iPhone|iPod|iPad)\sOS\s[0-4][_\d]+/i.test(nav.userAgent)) {
				oldiOS = true;
			}

			// Detect if older Android device, which doesn't support fixed position
			if (/Android\s+([0-2][\.\d]+)/i.test(nav.userAgent)) {
				oldAndroid = true;
			}

			$('body').append('<a href="#" id="' + extend.button.substring(1) + '" title="' + extend.text + '">' + extend.text + '</a>');

			$(win).scroll(function () {
				var pos = $(win).scrollTop();

				if (oldiOS || oldAndroid) {
					$(extend.button).css({
						'position': 'absolute',
						'top': pos + $(win).height()
					});
				}

				if (pos > extend.min) {
					$(extend.button).fadeIn(extend.fadeIn);
				} else {
					$(extend.button).fadeOut(extend.fadeOut);
				}

			});

			$(extend.button).on('click', function (e) {
				$('html, body').animate({
					scrollTop: 0
				}, extend.speed);
				e.preventDefault();
			});

		}());

		/* end Back to Top */

		/* ---------------------------------------------------- */
		/*	Projects Carousel									*/
		/* ---------------------------------------------------- */

		(function () {

			var $carousel = $('.projects-carousel'), scrollCount;

			function getWindowWidth() {

				var windowWidth = $(win).width();

				if (windowWidth < 960) {
					scrollCount = 1;
				} else {
					scrollCount = 4;
				}
			}

			function resetPosition(elem, resizeEvent) {
				if (elem.data('resize')) {
					elem.css('left', '0');
				}
			}

			function initCarousel($carousels) {

				$carousels.each(function () {

					var $this = $(this), windowWidth = $(win).width();

					$this.jcarousel({
						animation: jCarousel.animation,
						easing: jCarousel.easing,
						scroll: $this.data('scroll-count') ? (windowWidth < 960 ? 1 : parseInt($this.data('scroll-count'))) : scrollCount,
						itemVisibleInCallback : function() {
							onBeforeAnimation : resetPosition($this);
							onAfterAnimation  : resetPosition($this);
						},
						auto: ($this.data('auto') ? parseInt($this.data('auto')) : 0),
						wrap: ($this.data('auto') ? 'both' : null),
						itemFallbackDimension: 220
					});
				});

			}

			function adjustCarousel() {

				$carousel.each(function () {

					var $this = $(this), $lis = $this.children('li'), newWidth = $lis.length * $lis.first().outerWidth(true), timer;

					getWindowWidth();

					if ($this.width() !== newWidth) {

						$this.css('width', newWidth).data('resize', 'true');
						initCarousel($this);
						$this.jcarousel('scroll', 1);

						timer = win.setTimeout(function () {
							win.clearTimeout(timer);
							$this.data('resize', null);
						}, 600);

					}

				});

			}

			function swipeFunc(e, dir) {

				var $carousel = $(e.currentTarget);

				if (dir === 'left') {
					$carousel.parent('.jcarousel-clip').siblings('.jcarousel-next').trigger('click');
				}

				if (dir === 'right') {
					$carousel.parent('.jcarousel-clip').siblings('.jcarousel-prev').trigger('click');
				}

			}

			if ($carousel.length) {

				getWindowWidth();
				initCarousel($carousel);

				// Detect Swipe
				if (Modernizr.touch) {

					$carousel.swipe({
						swipeLeft: swipeFunc,
						swipeRight: swipeFunc,
						allowPageScroll: 'auto'
					});

				}

				// Resize Window
				$(win).on('resize', function () {

					var timer = win.setTimeout(function () {
						win.clearTimeout(timer);
						adjustCarousel();
					}, 30);

				});
			}

		}());

		/* end Projects Carousel */

		/*----------------------------------------------------*/
		/*	Search Form										  */
		/*----------------------------------------------------*/

		(function () {

			var $search = $('.search-wrapper'), $text = $('input[type="text"]', $search), $submit = $('.submit-search', $search);

			function closeSearch(el, text) {
				$submit.removeClass("active");
				el.stop(true, false).animate({
					width: 0,
					paddingRight: '35px'
				}, 250, function () {
					text.val("").click(function () {
						return false;
					});
					el.removeClass("active").find("input[type='text']").blur();
				});
			}

			function searchAnimate(wrapper, text) {
				wrapper.stop(true, false).animate({
					width: '185px',
					paddingRight: '41px'
				}, 250, function () {
					wrapper.addClass("active").find("input[type='text']").focus();
					text.click(function () {
						return false;
					});
				});
				return false;
			}

			$submit.on('click', function (e) {
				var target = $(e.target);

				if ($(target).hasClass('active')) {
					return true;
				} else {
					target.addClass("active");
					searchAnimate($search, $text);
				}
				return false;
			});


			$('body').on('click', function (e) {
				var current = $(e.target);
				if ($search.hasClass('active')) {
					if (current !== $submit) {
						closeSearch($search, $text);
					}

				}
			});

		}());

		/* end Search Form */

		/* ---------------------------------------------------------------------- */
		/*	Custom Functions													  */
		/* ---------------------------------------------------------------------- */

		// Fixed scrollHorz effect
		$.fn.cycle.transitions.fixedScrollHorz = function ($cont, $slides, opts) {

			$('.post-slider-nav a').on('click', function (e) {
				$cont.data('dir', '');
				if (e.target.className.indexOf('prev') > -1) {
					$cont.data('dir', 'prev');
				}
			});

			$cont.css('overflow', 'hidden');
			opts.before.push($.fn.cycle.commonReset);
			var w = $cont.width();
			opts.animIn.left = 0;
			opts.animOut.left = 0-w;
			opts.cssFirst.left = 0;
			opts.cssBefore.left = w;
			opts.cssBefore.top = 0;

			if ($cont.data('dir') === 'prev') {
				opts.cssBefore.left = -w;
				opts.animOut.left = w;
			}

		};

		/* ---------------------------------------------------- */
		/*	Image Post Slider									*/
		/* ---------------------------------------------------- */

		(function () {

			function swipeFunc(e, dir) {

				var $postslider = $(e.currentTarget);

				// Enable swipes if more than one slide
				if ($postslider.data('slideCount') > 1) {

					$postslider.data('dir', '');

					if (dir === 'left') {
						$postslider.cycle('next');
					}

					if (dir === 'right') {
						$postslider.data('dir', 'prev');
						$postslider.cycle('prev');
					}
				}
			}

			var $postslider = $('.image-post-slider > ul');

			if ($postslider.length) {

				$postslider.each(function (i) {

					var $this = $(this);

					$this.css('height', $this.children('li:first').height()).after('<div class="post-slider-nav"><a class="prevBtn post-nav-prev-' + i + '">Prev</a><a class="nextBtn post-nav-next-' + i + '">Next</a></div>').cycle({
						before: function (curr, next, opts) {
							var $this = $(this);
							$this.parent().stop().animate({
								height: $this.height()
							}, opts.speed);
						},
						containerResize: false,
						easing: objPostSlider.easing,
						fx: 'fixedScrollHorz',
						fit: true,
						next: '.post-nav-next-' + i,
						pause: true,
						prev: '.post-nav-prev-' + i,
						slideResize: true,
						speed: objPostSlider.speed,
						timeout: objPostSlider.timeout,
						width: '100%'
					}).data('slideCount', $postslider.children('li').length);
				});

				// Pause on Nav Hover
				$('.post-slider-nav a').on('mouseenter', function () {
					$(this).parent().prev().cycle('pause');
				}).on('mouseleave', function () {
					$(this).parent().prev().cycle('resume');
				});

				// Hide navigation if only a single slide
				if ($postslider.data('slideCount') <= 1) {
					$postslider.next('.post-slider-nav').hide();
				}

				// Resize
				$(win).on('resize', function () {
					$postslider.css('height', $postslider.find('li:visible').height());
				});

				// Include Swipe
				if (Modernizr.touch) {

					$postslider.swipe({
						swipeLeft: swipeFunc,
						swipeRight: swipeFunc,
						allowPageScroll: 'auto'
					});

				}
			}

		}());

		/* ---------------------------------------------------- */
		/*	Image Gallery Slider								*/
		/* ---------------------------------------------------- */

		(function () {

			function swipeFunc(e, dir) {

				var $projects = $(e.currentTarget);

				// Enable swipes if more than one slide
				if ($projects.data('slideCount') > 1) {

					$projects.data('dir', '');

					if (dir === 'left') {
						$projects.cycle('next');
					}

					if (dir === 'right') {
						$projects.data('dir', 'prev');
						$projects.cycle('prev');
					}

				}

			}

			var $projects = $('.image-gallery-slider > ul');

			if ($projects.length) {

				$(win).load(function () {

					$projects.each(function (i) {

						var $this = $(this);

						$this.css('height', $this.children('li:first').height()).after('<div class="gallery-slider-nav"><a class="prevBtn gallery-nav-prev-' + i + '">Prev</a> <a class="nextBtn gallery-nav-next-' + i + '">Next</a> </div>').cycle({
							before: function (curr, next, opts) {
								var $this = $(this);
								$this.parent().stop().animate({
									height: $this.height()
								}, opts.speed);
							},
							containerResize: false,
							easing: objGallerySlider.easing,
							fit: true,
							next: '.gallery-nav-next-' + i,
							pause: true,
							prev: '.gallery-nav-prev-' + i,
							slideResize: true,
							speed: objGallerySlider.speed,
							timeout: objGallerySlider.timeout,
							width: '100%'
						}).data('slideCount', $projects.children('li').length);
					});

					// Pause on Nav Hover
					$('.gallery-nav a').on('mouseenter', function () {
						$(this).parent().prev().cycle('pause');
					}).on('mouseleave', function () {
						$(this).parent().prev().cycle('resume');
					});

					// Hide navigation if only a single slide
					if ($projects.data('slideCount') <= 1) {
						$projects.next('.projects-nav').hide();
					}

				});

				// Resize
				$(win).on('resize', function () {
					$projects.css('height', $projects.find('li:visible').height());
				});

				// Include Swipe
				if (Modernizr.touch) {

					$projects.swipe({
						swipeLeft: swipeFunc,
						swipeRight: swipeFunc,
						allowPageScroll: 'auto'
					});

				}
			}

		}());

		/* ---------------------------------------------------- */
		/*	Testimonials										*/
		/* ---------------------------------------------------- */

		(function () {

			function swipeFunc(e, dir) {

				var $quotes = $(e.currentTarget);

				// Enable swipes if more than one slide
				if ($quotes.data('slideCount') > 1) {

					$quotes.data('dir', '');

					if (dir === 'left') {
						$quotes.cycle('next');
					}

					if (dir === 'right') {
						$quotes.data('dir', 'prev');
						$quotes.cycle('prev');
					}

				}

			}

			var $quotes = $('.testimonials');

			if ($quotes.length) {

				$quotes.each(function (i) {

					var $this = $(this);

					$this.css('height', $this.children('li:first').height()).cycle({
						before: function (curr, next, opts) {
							var $this = $(this);
							$this.parent().stop().animate({
								height: $this.height()
							}, opts.speed);
						},
						containerResize: false,
						easing: objTestimonials.easing,
						fit: true,
						next: '',
						pause: true,
						prev: '',
						slideResize: true,
						speed: objTestimonials.speed,
						timeout: objTestimonials.timeout,
						width: '100%'
					}).data('slideCount', $this.children('li').length);

				});

				// Resize
				$(win).on('resize', function () {
					$quotes.css('height', $quotes.find('li:visible').height());
				});

				// Include Swipe
				if (Modernizr.touch) {

					$quotes.swipe({
						swipeLeft: swipeFunc,
						swipeRight: swipeFunc,
						allowPageScroll: 'auto'
					});

				}
			}

		}());

		/* ---------------------------------------------------- */
		/*	Fancybox											*/
		/* ---------------------------------------------------- */

		(function () {

			if ($('.single-image.link-icon').length || $('.single-image.plus-icon').length || $('.single-image.video-icon').length) {

				// Link Icon
				$('.single-image.link-icon, .single-image.plus-icon').fancybox({
					'titleShow': true,
					'transitionIn': 'fade',
					'transitionOut': 'fade',
					'easingIn': 'easeOutBack',
					'easingOut': 'easeInBack',
					helpers: {
						title: {
							type: 'over'
						}
					}
				}).each(function () {
					$(this).append('<span class="curtain"></span>');
				});

				// Video Icon
				$('.single-image.video-icon').fancybox({
					type: 'iframe',
					openEffect: 'fade',
					closeEffect: 'fade',
					nextEffect: 'fade',
					prevEffect: 'fade',
					helpers: {
						title: {
							type: 'over'
						}
					},
					width: '70%',
					height: '70%',
					maxWidth: 800,
					maxHeight: 600,
					fitToView: false,
					autoSize: false
				}).each(function () {
					$(this).append('<span class="curtain"></span>');
				});

			}

		}());

		/* end Fancybox --> End */

		/* ---------------------------------------------------- */
		/*	Blackandwhite										*/
		/* ---------------------------------------------------- */

		(function () {

			if ($('.bwWrapper').length) {

				var $bw = $('.bwWrapper:not(.badge)');

				if (Modernizr.touch) {

					$(win).load(function () {
						$bw.BlackAndWhite(objBlackAndWhiteTouch);
					});	

				} else {

					$(win).load(function () {
						$bw.BlackAndWhite(objBlackAndWhite);
					});			
				}	

			}
				
		}());

		/* end BlackAndWhite --> End */

		/* ---------------------------------------------------- */
		/*	Portfolio											*/
		/* ---------------------------------------------------- */

		(function () {

			var $cont = $('#portfolio-items'), $itemsFilter, mouseOver;

			if ($cont.length) {

				$itemsFilter = $('#portfolio-filter');

				// Copy categories to item classes
				$cont.children('article').each(function (i) {
					var $this = $(this);
					$this.addClass($this.attr('data-categories'));
				});

				// Run Isotope when all images are fully loaded
				$(win).on('load', function () {

					$cont.isotope({
						itemSelector: 'article',
						layoutMode: 'fitRows'
					});

				});

				// Filter projects
				$itemsFilter.on('click', 'a', function (e) {
					
					var $this = $(this), currentOption = $this.attr('data-categories');

					$itemsFilter.find('a').removeClass('active');
					$this.addClass('active');
					
					if (currentOption) {
						if (currentOption !== '*') {
							currentOption = currentOption.replace(currentOption, '.' + currentOption);
						}
						$cont.isotope({
							filter: currentOption
						}, function() {
							if (currentOption == '*') {
								$('.single-image', $cont).attr('rel', 'gallery');
							} else { 
								$(currentOption, $cont).find('.single-image').attr('rel', currentOption.substring(1));
							}
						});
					}
					e.preventDefault();
				});
				
				$itemsFilter.find('a').first().addClass('active');
			}

		}());

		/* end Portfolio  */

		/* ---------------------------------------------------- */
		/*	FitVids												*/
		/* ---------------------------------------------------- */

		(function () {

			function adjustVideos() {

				var $videos = $('.video-container');

				$videos.each(function () {

					var $this = $(this), playerWidth  = $this.parent().actual('width'), playerHeight = playerWidth / $this.data('aspectRatio');

					$this.css({
						'height' : playerHeight,
						'width'  : playerWidth
					});
				});
			}

			$('.container').each(function () {

				var selectors = [
					"iframe[src^='http://player.vimeo.com']",
					"iframe[src^='http://www.youtube.com']",
					"object",
					"embed"
				], $allVideos = $(this).find(selectors.join(','));

				$allVideos.each(function () {

					var $this = $(this),
						videoHeight = $this.attr('height') || $this.actual('width'),
						videoWidth  = $this.attr('width') || $this.actual('width');

					if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.video-container').length) {
						return;
					}

					$this.css({
						'height' : '100%',
						'width'  : '100%'
					}).removeAttr('height').removeAttr('width').wrap('<div class="video-container"></div>').parent('.video-container').css({
						'height' : videoHeight,
						'width'  : videoWidth
					}).data('aspectRatio', videoWidth / videoHeight);
					adjustVideos();
				});

			});

			$(win).on('resize', function () {
				var timer = win.setTimeout(function () {
					win.clearTimeout(timer);
					adjustVideos();
				}, 30);
			});

		}());

		/* end FitVids */

		/* ---------------------------------------------------- */
		/*	Preloader											*/
		/* ---------------------------------------------------- */

		(function () {

			$.preloader = function (el, options) {
				var elem = $(el), methods = {},
					elements = elem.find('.preloader'),
					o = $.extend({}, $.preloader.defaults, options);

				methods = {
					init: function () {
						this.loader();
						this.eventListener();
					},
					eventListener: function () {
						$(win).load(function () {
							elements.each(function (i, val) {
								$(val).removeClass('loader');
							});
						});						
					},
					loader: function () {
						elements.each(function (i, val) {
							win.setTimeout(function () {
								$(val).addClass('loader');
							}, i * o.speed);
						});
					}
				};
				methods.init();

			};
			
			$.preloader.defaults = {speed : 250};

			$.fn.preloader = function (options) {
				if (typeof options === 'object') {
					return this.each(function () {
						new $.preloader(this, options);
					});
				};
			};

			$('.container').preloader({
				speed: 300
			});

		}());

		/* end Preloader */

		/* ---------------------------------------------------- */
		/*	Detail Blocks										*/
		/* ---------------------------------------------------- */

		(function () {

			if ($('.detail-box').length && $('.transform').length) {

				var box = $('.detail-box'), 
					methods = {},
					empty = function (mixed_var) {
						return (mixed_var === "" || mixed_var === 0 || mixed_var === "0" || mixed_var === null  || mixed_var === false  ||  mixed_var.length === 0);
					}
					
				methods = {
					colorState: function (elem, color) {
						$(elem).addClass('stateColor').children('.transform').css(
							'cssText', 'background-color: '+color+' !important'
						);					
					},
					colorHover : function (el, color) {
						
						var elem = $(el).children('.transform'),
							colorState = methods.getState(elem),
							colorHover = methods.getHover(elem);
							
						if (!empty(colorHover) && empty(colorState)) {
							
						} else if (!empty(colorState)) {
							$(el).css(
								'cssText', 'background-color: '+color+' !important'
							);							
						}

					},
					eventOnHover : function () {
						
						box.on('mouseenter', function () {
							var el = $(this);
							methods.removeState(el);
						}).on('mouseleave', function () {
							var el = $(this),
								elem = el.children('.transform'),
								colorState = methods.getState(elem),
								colorHover = methods.getHover(elem);
	
							if (!empty(colorState) && empty(colorHover)) {
								methods.colorState(el, colorState);
							} else if (!empty(colorHover) && !empty(colorState)) {
								elem.css(methods.objHover);	
							} else if (empty(colorState) && empty(colorHover)) {
								el.removeClass('defaultState');
								elem.css(methods.objState);
							} else if (!empty(colorHover) && empty(colorState)) {
								el.removeClass('stateColor');
							}
							
						});
						
					},
					objState : {
						'height' : 0,
						'opacity': 0							
					},
					objHover : {
						'height' : '100%',
						'opacity': 1	
					},
					getState : function (el) {
						return el.data('color-state');
					},
					getHover : function (el) {
						return el.data('color-hover');
					},
					removeState : function (elem) {
						
						if (!empty(elem)) {
							
							var el = elem.children('.transform'),
								attrState = methods.getState(el),
								attrHover = methods.getHover(el);
								
							if (!empty(attrState) && empty(attrHover)) {
							
								if (elem.hasClass('stateColor')) {
									elem.removeClass('stateColor');
								}
								
							} else if (!empty(attrState) && !empty(attrHover)) {
								el.css(methods.objState);
							} else if (!empty(attrHover) && empty(attrState)) {
								methods.colorState(elem, attrHover);
							} else if (empty(attrState) && empty(attrHover)) {
								elem.addClass('defaultState');
								el.css(methods.objHover);
							}
							
						}
						
					},
					init : function () {
						this.eventOnHover();
					}
				}
				
				methods.init();			
				
				box.each(function (idx, val) {

					var el = $(val).children('.transform'),
						attrState = methods.getState(el),
						attrHover = methods.getHover(el);

						if (!empty(attrState)) {
							methods.colorState(val, attrState);
						}

						if (!empty(attrHover)) {
							methods.colorHover(val, attrHover);
						}
						
				});
				
			}

		}());

		/* end Detail Detail Blocks	 */

		/* ---------------------------------------------------- */
		/*	Detail Detect touch									*/
		/* ---------------------------------------------------- */

		(function () {

			if (Modernizr.touch) {

				var detailBox = $('.detail-box');

				detailBox.on('click', function (e) {
					var target = $(e.target);
					target.addClass('touched');
				});
			}

		}());

		/* end Detail Detect touch */

		/* ---------------------------------------------------- */
		/*	Google Maps											*/
		/* ---------------------------------------------------- */

		(function () {

			if ($('.google_map').length) {
				var $gmap = $('.google_map'), mapType;

				/* Maptype:
				 google.maps.MapTypeId.ROADMAP 
				 google.maps.MapTypeId.SATELLITE
				google.maps.MapTypeId.HYBRID
				 google.maps.MapTypeId.TERRAIN */

				if (win.google) {
					mapType = google.maps.MapTypeId.TERRAIN;
				}

				objGoogleMap.maptype = mapType;
				$gmap.gMap(objGoogleMap);
			}

		}());

		/* end Google Maps */

		/* ---------------------------------------------------- */
		/*	Ajax Navigation										*/
		/* ---------------------------------------------------- */

		(function () {

			$.ajaxnav = function(el) {
				
				var element = $(el), 
					methods = {};

				methods = {
					elements: {
						'.ajax-nav': 'navList',
						'.ajax-content': 'content',
						'.ajax-navigation-item': 'list'
					},
					proxy: function(func) { return $.proxy(func, this); },
					init: function() {
						this.refreshElements();
						this.eventsListener();
					},
					$: function(selector) {
						return $(selector, element);
					},
					refreshElements: function() {
						for (var key in this.elements) {
							this[this.elements[key]] = this.$(key);
						}
					},
					eventsListener: function() {
						var that = this;
						this.navList.children('li').first().addClass('current');
						this.proxy(that.clickEvents(that), that);
					},
					clickEvents: function(that) {
						this.navList.on('click', 'a', function(e) {
							var $this = $(this).parent('li'), $index = $this.index();
								$this.siblings('li').removeClass('current').end().addClass('current');
								that.content.find(methods.list).hide().end().eq($index).stop(true, true).show(700);
								e.preventDefault();
						});
					}
				};
				methods.init();
			};

			$.fn.ajaxnav = function() {
				return this.each(function() {
					new $.ajaxnav(this);
				});
			};

			$(function() {
				$('.container').ajaxnav();
			});

		}());

		/* end Ajax Navigation */

	});

	/* ---------------------------------------------------- */
	/*	Notifications										*/
	/* ---------------------------------------------------- */

	$.fn.notifications = function (options) {

		var defaults = {speed: 200}, o = $.extend({}, defaults, options);

		return this.each(function () {

			var closeBtn = $('<a class="alert-close" href="#"></a>'),
				closeButton = $(this).append(closeBtn).find('> .alert-close');

			function fadeItSlideIt(object) {
				object.fadeTo(o.speed, 0, function () {
					object.slideUp(o.speed);
				});
			}

			closeButton.click(function () {
				fadeItSlideIt($(this).parent());
				return false;
			});
		});
	};

	/* end jQuery Notifications */
	
	/* ---------------------------------------------------- */
	/*	Actual Plugin										*/
	/* ---------------------------------------------------- */

	// jQuery Actual Plugin - Version: 1.0.13 (http://dreamerslab.com/)
		;(function(a){a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';}var f={absolute:false,clone:false,includeMargin:false};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().andSelf().filter(":hidden");d+="visibility: hidden !important; display: block !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);g.push(m.attr("style"));m.attr("style",d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");}else{o.attr("style",n);}});};}h();var k=/(outer)/g.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});})(jQuery);

	/* end jQuery Actual Plugin */

}(jQuery, window, Modernizr, navigator, document));
;
jQuery(document).ready(function ($) {
      
  $("#google_map").fitMaps( {w: '100%', h:'370px'} );   

});;
