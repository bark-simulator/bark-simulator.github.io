(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var a=r("q1tI"),i=n(a),o=n(r("Gytx"));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function d(){u=e(c.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var s=a.prototype;return s.shouldComponentUpdate=function(e){return!o(e,this.props)},s.componentWillMount=function(){c.push(this),d()},s.componentDidUpdate=function(){d()},s.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),d()},s.render=function(){return i.createElement(n,this.props)},a}(a.Component);return s(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),s(f,"canUseDOM",l),f}}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("5NKs");t.__esModule=!0,t.default=void 0;var a,i=n(r("v06X")),o=n(r("XEEL")),s=n(r("uDP2")),l=n(r("j8BX")),u=n(r("q1tI")),c=n(r("17x9")),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),T=function(e){var t=d(e),r=p(t);return m[r]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,v=new WeakMap;function A(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),u.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function y(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function w(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function R(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+u+o+s+r+n+t+i+a+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=u.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=u.default.createElement(P,(0,l.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,a(n),s):s})),P=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:c,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));P.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=E&&T(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!g&&b&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||E&&(g||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:T(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=T(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,T=e.fixed,g=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,v=e.itemProp,y=e.loading,R=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,l.default)({opacity:O?1:0,transition:I?"opacity "+E+"ms":"none"},s),C="boolean"==typeof g?"lightgray":g,N={transitionDelay:E+"ms"},L=(0,l.default)((0,l.default)((0,l.default)({opacity:this.state.imgLoaded?0:1},I&&N),s),f),k={title:t,alt:this.state.isVisible?"":r,style:L,className:p,itemProp:v};if(m){var G=m,H=h(m);return u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},u.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&u.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&N)}),H.base64&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:k,imageVariants:G,generateSources:w}),H.tracedSVG&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:k,imageVariants:G,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,A(G),u.default.createElement(P,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:R})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,l.default)((0,l.default)({alt:r,title:t,loading:y},H),{},{imageVariants:G}))}}))}if(T){var j=T,B=h(T),D=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},i);return"inherit"===i.display&&delete D.display,u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},C&&u.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},I&&N)}),B.base64&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:B.base64,spreadProps:k,imageVariants:j,generateSources:w}),B.tracedSVG&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:B.tracedSVG,spreadProps:k,imageVariants:j,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,A(j),u.default.createElement(P,{alt:r,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:R})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,l.default)((0,l.default)({alt:r,title:t,loading:y},B),{},{imageVariants:j}))}}))}return null},t}(u.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});I.propTypes={resolutions:M,sizes:C,fixed:c.default.oneOfType([M,c.default.arrayOf(M)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=I;t.default=N},Bl7J:function(e,t,r){"use strict";var n=r("pARn"),a=r("q1tI"),i=r.n(a),o=(r("C3Uj"),r("9eSz")),s=r.n(o),l=r("DmMh"),u=r("Wbzz"),c=(r("tBDR"),function(e){var t=e.siteTitle,r=l.data;return i.a.createElement("header",{style:{background:"#ffffff"},class:"flex items-center justify-center"},i.a.createElement("div",{class:"flex items-center justify-between flex-wrap p-6 max-w-5xl",style:{minWidth:"100px",maxWidth:"1640px",width:"100%"}},i.a.createElement("a",{href:"/",class:"flex display-block items-center flex-shrink-0 text-gray mr-16"},i.a.createElement(s.a,{style:{width:"50px",height:"50px"},fluid:r.placeholderImage.childImageSharp.fluid}),i.a.createElement("span",{class:"font-semibold text-xl tracking-tight pl-2"},t)),i.a.createElement("div",{class:"block lg:hidden"},i.a.createElement("button",{class:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"},i.a.createElement("svg",{class:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),i.a.createElement("div",{class:"w-full block flex-grow lg:flex lg:items-center lg:w-auto"},i.a.createElement("div",{class:"text-base lg:flex-grow"},i.a.createElement(u.Link,{to:"/",activeClassName:"block mt-4 lg:inline-block lg:mt-0 text-blue-600 font-semibold text-lg mr-6",class:"transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:text-blue-500 mr-6"},"Simulation"),i.a.createElement(u.Link,{to:"/tutorials/",partiallyActive:!0,activeClassName:"block mt-4 lg:inline-block lg:mt-0 text-blue-600 font-semibold text-lg mr-6",class:"transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:text-blue-500 mr-6"},"Tutorials"),i.a.createElement(u.Link,{to:"/about/",activeClassName:"block mt-4 lg:inline-block lg:mt-0 text-blue-600 font-semibold text-lg mr-6",class:"transition duration-500 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray text-lg hover:text-blue-500 mr-6"},"About")),i.a.createElement("div",null,i.a.createElement("a",{href:"https://arxiv.org/abs/2003.02604",class:"transition duration-500 ease-in-out inline-block text-base px-4 py-2 leading-none border rounded text-blue border-blue hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 mr-2"},"@arXiv"),i.a.createElement("a",{href:"https://bark-simulator.readthedocs.io/en/latest/",class:"transition duration-500 ease-in-out inline-block text-base px-4 py-2 leading-none border rounded text-blue border-blue hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 mr-2"},"Documentation"),i.a.createElement("a",{href:"https://github.com/bark-simulator/bark",class:"transition duration-500 ease-in-out inline-block text-base px-4 py-2 leading-none border rounded text-blue border-blue hover:border-blue-500 hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"},"Github")))))});c.defaultProps={siteTitle:""};var d=c;var f=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),i.a.createElement("div",{className:"mt-12"},i.a.createElement("div",{className:"skewed-divider"}),i.a.createElement("footer",{class:"flex items-center justify-center text-gray-200",style:{padding:"100px 0% 0% 0%"}},i.a.createElement("div",{class:"flex items-center justify-between flex-wrap py-8 px-6 pt-8",style:{width:"100%",backgroundColor:"rgb(3, 70, 147)"}},i.a.createElement("div",{class:"w-1/2 text-sm"},"© ",(new Date).getFullYear()," fortiss GmbH"),i.a.createElement("div",{class:"w-1/2 text-right text-sm"},"Supported by: ",i.a.createElement("a",{class:"hover:text-blue-500",href:"https://www.fortiss.org/"},"fortiss"),", ",i.a.createElement("a",{class:"hover:text-blue-500",href:"https://aid-driving.eu/"},"AID")))))};t.a=function(e){var t=e.children,r=n.data;return i.a.createElement("body",{class:"text-gray-900 antialiased"},i.a.createElement(d,{siteTitle:r.site.siteMetadata.title}),i.a.createElement("div",{class:"flex flex-wrap items-center justify-center"},i.a.createElement("div",{class:"md:px-6 mt-4",style:{minWidth:"100px",maxWidth:"1640px",width:"100%"}},t)),i.a.createElement(f,null))}},C3Uj:function(e,t,r){},DmMh:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAA7DAAAOwwHHb6hkAAADv0lEQVQ4y1WUf0yVVRjHX0OXa/5hW/WfztxMt5Kmjum0Hw51lQtDUROuOFEbDpFQUabyo9oypTLUEXK54yIXp6LiDzS4SmNQQIai/LqM62KKJGvctUokvO/7Pt+ec97z3l7OdnZ+vM/zeb/Pc855NI0bgAmaakTkMon6oVpWaQsGhkfQM/APnM0EHhKQEvGzGQyIwNiu2OGjd/SHdO2do6brcD2daxqkZ7ppsqPOP9RtI157x0FtdQx2KwM9bJiGmO7zNJO25Fua+H4RZXzfRiNjBol9BoK7wSrDyue0FEQUUbbVVsWGwgn/hg2ak+KDtrQQWux3mLbRh95HMmwmWUZicEAz7JCn8vp3Sz8Zhil5dLa2DyvTLiN2+0VEJ1fi+RVFOHGpS5pxBAIgoSTTKccQD68IdakRdQrWeu8x1n96HZuz/dj+WQN2Hv4Z+4vvID7/Bs41Bi1jB9SR00wBvA5rU+ZtKPQUu75pxo6vm5Fd0o4D3k4crOjGkQtBLN51Fdq7RxEY+FN6j4UNO2xDRXhDAIfE3LDk0fkfg0gt/AVfVvUhl0GiHyzvwuenA4hJr4a2sAA7jjf8f30YyGpNtQwIoKSr5FHVzV7MS/axsg7k+SxYzqku5Pt6MHNTJbRlxzBjjRvrsi+jtqVfpQ9Wroj+EsCnTuAPzb9hRlwxlu+sjigUwFzuLyZ4MOWDIsx3lWPWmlLMWu2GK6eG6tse2AoHBbBThSw26eatB5jNjq+v8+DDrBrkVwak0j3udrwQdxKvJpRiXlI5opO8mJtYhjlrPTR/Q4URHJC6bgvgCQWUJ9XY/ohmflSC6EQvg91Ym+PHV1VBbCtsxUvxJXiT99/YUIYFG09heep5iku7gsxDjfYpewRwsYpfKvx7ZIy25Pnp7ZQziNnkY2gpth5pQlLBT3h5ZRHmrvfirc1nsIpBrj21dKziLj0eHpHnoOtmrP1SLlkq6ZkYO/uGyZVVR8nZdYjPuIL30i7i41w/PvnCj0PuX3HybCd5q3uorfsPec+Vb53mKArTWWFIfZAGZdU9SMi4Rtty6pG4uxa3OoYc9cA6VQfsCW+8ZsOi1BNcwvNR23B0TDeyCppodXoN8o63ihdB4m2Id2xYTzSs7mGYvy1TjKhxUE5kNKlTF637fohWpV01GtsGpSq+wHZdsC91Ly9iVOmKwDTnhk40ieeZrEJWgpaOEJ6MGuOKK38P8Anu5XGy8DGVrylYAuiAPmfnldVEsZwY/pbOvYGFNYkSxeMiHifZdqbyETDe1/4D9Wp3GgzQ7xwAAAAASUVORK5CYII=","aspectRatio":1.0344827586206897,"src":"/static/c01864131e8b8d13ea68f2cd7efb1a06/16c7d/bark_logo_head.png","srcSet":"/static/c01864131e8b8d13ea68f2cd7efb1a06/a74cd/bark_logo_head.png 30w,\\n/static/c01864131e8b8d13ea68f2cd7efb1a06/1b595/bark_logo_head.png 60w,\\n/static/c01864131e8b8d13ea68f2cd7efb1a06/16c7d/bark_logo_head.png 120w,\\n/static/c01864131e8b8d13ea68f2cd7efb1a06/e0491/bark_logo_head.png 180w,\\n/static/c01864131e8b8d13ea68f2cd7efb1a06/2b087/bark_logo_head.png 240w,\\n/static/c01864131e8b8d13ea68f2cd7efb1a06/e591b/bark_logo_head.png 874w","sizes":"(max-width: 120px) 100vw, 120px"}}}}}')},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"BARK","description":"Kick off the next generation of behavior model development for autonomous driving.","author":"@hart"}}}}')},EK0E:function(e,t,r){"use strict";var n,a=r("dyZX"),i=r("CkkT")(0),o=r("KroJ"),s=r("Z6vF"),l=r("czNK"),u=r("ZD67"),c=r("0/R4"),d=r("s5qY"),f=r("s5qY"),p=!a.ActiveXObject&&"ActiveXObject"in a,h=s.getWeak,m=Object.isExtensible,T=u.ufstore,g=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},E={get:function(e){if(c(e)){var t=h(e);return!0===t?T(d(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return u.def(d(this,"WeakMap"),e,t)}},b=e.exports=r("4LiD")("WeakMap",g,E,u,!0,!0);f&&p&&(l((n=u.getConstructor(g,"WeakMap")).prototype,E),s.NEED=!0,i(["delete","has","get","set"],(function(e){var t=b.prototype,r=t[e];o(t,e,(function(t,a){if(c(t)&&!m(t)){this._f||(this._f=new n);var i=this._f[e](t,a);return"set"==e?this:i}return r.call(this,t,a)}))})))},Gytx:function(e,t,r){r("2Spj"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(a=r?r.call(n,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},"HAE/":function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},INYr:function(e,t,r){"use strict";var n=r("XKFU"),a=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},OGtf:function(e,t,r){var n=r("XKFU"),a=r("eeVq"),i=r("vhPU"),o=/"/g,s=function(e,t,r,n){var a=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},Oyvg:function(e,t,r){var n=r("dyZX"),a=r("Xbzi"),i=r("hswa").f,o=r("kJMx").f,s=r("quPj"),l=r("C/va"),u=n.RegExp,c=u,d=u.prototype,f=/a/g,p=/a/g,h=new u(f)!==f;if(r("nh4g")&&(!h||r("eeVq")((function(){return p[r("K0xU")("match")]=!1,u(f)!=f||u(p)==p||"/a/i"!=u(f,"i")})))){u=function(e,t){var r=this instanceof u,n=s(e),i=void 0===t;return!r&&n&&e.constructor===u&&i?e:a(h?new c(n&&!i?e.source:e,t):c((n=e instanceof u)?e.source:e,n&&i?l.call(e):t),r?this:d,u)};for(var m=function(e){e in u||i(u,e,{configurable:!0,get:function(){return c[e]},set:function(t){c[e]=t}})},T=o(c),g=0;T.length>g;)m(T[g++]);d.constructor=u,u.prototype=d,r("KroJ")(n,"RegExp",u)}r("elZq")("RegExp")},TJpk:function(e,t,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=d(r("q1tI")),o=d(r("17x9")),s=d(r("8+s/")),l=d(r("bmMU")),u=r("v1p5"),c=r("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,T,g,E=(0,s.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),b=(m=E,g=T=function(e){function t(){return p(this,t),h(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case c.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,i=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(a.type){case c.TAG_NAMES.TITLE:return n({},i,((t={})[a.type]=s,t.titleAttributes=n({},o),t));case c.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},o)});case c.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},o)})}return n({},i,((r={})[a.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=f(a,["children"]),s=(0,u.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,i),e.type){case c.TAG_NAMES.LINK:case c.TAG_NAMES.META:case c.TAG_NAMES.NOSCRIPT:case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),T.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=m.peek,T.rewind=function(){var e=m.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},g);b.renderStatic=b.rewind,t.Helmet=b,t.default=b},ZD67:function(e,t,r){"use strict";var n=r("3Lyj"),a=r("Z6vF").getWeak,i=r("y3w9"),o=r("0/R4"),s=r("9gX7"),l=r("SlkY"),u=r("CkkT"),c=r("aagx"),d=r("s5qY"),f=u(5),p=u(6),h=0,m=function(e){return e._l||(e._l=new T)},T=function(){this.a=[]},g=function(e,t){return f(e.a,(function(e){return e[0]===t}))};T.prototype={get:function(e){var t=g(this,e);if(t)return t[1]},has:function(e){return!!g(this,e)},set:function(e,t){var r=g(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var u=e((function(e,n){s(e,u,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=n&&l(n,r,e[i],e)}));return n(u.prototype,{delete:function(e){if(!o(e))return!1;var r=a(e);return!0===r?m(d(this,t)).delete(e):r&&c(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=a(e);return!0===r?m(d(this,t)).has(e):r&&c(r,this._i)}}),u},def:function(e,t,r){var n=a(i(t),!0);return!0===n?m(e).set(t,r):n[e._i]=r,e},ufstore:m}},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,l,u,c=n(t),d=n(r);if(c&&d){if((l=t.length)!=r.length)return!1;for(s=l;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(c!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var h=t instanceof RegExp,m=r instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==r.toString();var T=a(t);if((l=T.length)!==a(r).length)return!1;for(s=l;0!=s--;)if(!i.call(r,T[s]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(s=l;0!=s--;)if(!("_owner"===(u=T[s])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},h7Nl:function(e,t,r){var n=Date.prototype,a=n.toString,i=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("KroJ")(n,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},"hFT/":function(e,t,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},mSDx:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":null}}')},pARn:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"BARK"}},"placeholderImage":null}}')},tBDR:function(e,t,r){"use strict";r("mSDx"),r("q1tI"),r("9eSz"),r("C3Uj")},v1p5:function(e,t,r){(function(e){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=l(r("q1tI")),o=l(r("MgzW")),s=r("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=T(e,s.TAG_NAMES.TITLE),r=T(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=T(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return T(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},h=function(e,t){return t.filter((function(e){return void 0!==e[s.TAG_NAMES.BASE]})).map((function(e){return e[s.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},m=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],u=l.toLowerCase();-1===t.indexOf(u)||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(l)||l!==s.TAG_PROPERTIES.INNER_HTML&&l!==s.TAG_PROPERTIES.CSS_TEXT&&l!==s.TAG_PROPERTIES.ITEM_PROP||(r=l)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][c]&&(n[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),l=0;l<i.length;l++){var u=i[l],c=(0,o.default)({},a[u],n[u]);a[u]=c}return e}),[]).reverse()},T=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},g=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){g(e)}),0)}),E=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},y=null,S=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;O(s.TAG_NAMES.BODY,n),O(s.TAG_NAMES.HTML,a),R(f,p);var h={baseTag:_(s.TAG_NAMES.BASE,r),linkTags:_(s.TAG_NAMES.LINK,i),metaTags:_(s.TAG_NAMES.META,o),noscriptTags:_(s.TAG_NAMES.NOSCRIPT,l),scriptTags:_(s.TAG_NAMES.SCRIPT,c),styleTags:_(s.TAG_NAMES.STYLE,d)},m={},T={};Object.keys(h).forEach((function(e){var t=h[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(T[e]=h[e].oldTags)})),t&&t(),u(e,m,T)},w=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),O(s.TAG_NAMES.TITLE,t)},O=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var u=o[l],c=t[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),-1===a.indexOf(u)&&a.push(u);var d=i.indexOf(u);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,o.join(","))}},_=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},x=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t}),t)},I=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[s.HELMET_ATTRIBUTE]=!0,a=P(r,n),[i.default.createElement(s.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=x(r),i=w(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+c(i,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+c(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return x(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+c(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){y&&v(y),e.defer?y=b((function(){S(e,(function(){y=null}))})):(S(e),y=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.scriptTags,c=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:I(s.TAG_NAMES.BASE,t,n),bodyAttributes:I(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:I(s.ATTRIBUTE_NAMES.HTML,a,n),link:I(s.TAG_NAMES.LINK,i,n),meta:I(s.TAG_NAMES.META,o,n),noscript:I(s.TAG_NAMES.NOSCRIPT,l,n),script:I(s.TAG_NAMES.SCRIPT,u,n),style:I(s.TAG_NAMES.STYLE,c,n),title:I(s.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:h([s.TAG_PROPERTIES.HREF],e),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,e),defer:T(e,s.HELMET_PROPS.DEFER),encode:T(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=A}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("EH9Q"),a=r("q1tI"),i=r.n(a),o=r("TJpk"),s=r.n(o);function l(e){var t=e.description,r=e.lang,a=e.meta,o=e.title,l=n.data.site,u=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:r},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{name:"google-site-verification",content:"z7S8cmB6foaOgPsJwyT5sZEgaBWQ7vP3OnfHqiR93CQ"},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(a)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-b36141592b3ff1c9dad1.js.map