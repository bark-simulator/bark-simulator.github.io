(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("bWfx"),r("ioFf"),r("V+eJ"),r("91GP");var a=r("q1tI"),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(l),i=function(){return(i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&(r[a[l]]=e[a[l]])}return r};function o(e){return function(t){return a.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return a.createElement(t.tag,i({key:r},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var r,l=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var n=e.attr,o=e.title,s=c(e,["attr","title"]);return a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:i({color:e.color||t.color},t.style,e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==n?a.createElement(n.Consumer,null,(function(e){return t(e)})):t(l)}},WeJT:function(e,t,r){"use strict";r("Wbzz");var a=r("q1tI"),l=r.n(a),n=(r("C3Uj"),r("9eSz")),i=r.n(n),c=r("IdFE"),o=function(e){var t=e.title,r=e.description,a=e.image,n=e.linkedinUrl,o=e.githubUrl;return l.a.createElement("div",{class:"flex flex-col p-6"},l.a.createElement("div",{class:"flex w-full justify-center mb-3"},l.a.createElement("div",{class:"object-center w-32 h-32 rounded-full bg-gray-400 overflow-hidden"},""!=a&&l.a.createElement(i.a,{objectFit:"cover",fluid:a}))),l.a.createElement("div",{class:"w-full text-center text-3xl text-gray-800"},t),l.a.createElement("div",{class:"w-full text-center text-gray-700 tracking-wide leading-relaxed"},r),l.a.createElement("div",{class:"flex-wrap text-center mt-2"},""!=n&&l.a.createElement("a",{href:n},l.a.createElement(c.b,{class:"transition duration-500 ease-in-out inline-block w-8 h-8 text-gray-500 hover:text-blue-900 "})),""!=o&&l.a.createElement("a",{href:o},l.a.createElement(c.a,{class:"transition duration-500 ease-in-out inline-block w-8 h-8 text-gray-500 hover:text-gray-900"}))))};o.defaultProps={title:"",description:"",image:"",linkedinUrl:"",githubUrl:""},t.a=o},ufQR:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return o}));r("f3/d");var a=r("q1tI"),l=r.n(a),n=(r("Wbzz"),r("9eSz"),r("Bl7J")),i=r("vrFN"),c=r("WeJT"),o="2066002074";t.default=function(e){var t=e.data;function r(e,t){for(var r=0;r<e.allFile.edges.length;r++)if(e.allFile.edges[r].node.name==t)return e.allFile.edges[r].node;return e.allFile.edges[0].node}return console.log(t.allMarkdownRemark),l.a.createElement(n.a,null,l.a.createElement(i.a,{title:"IROS 2020 - BARK Tutorial"}),l.a.createElement("div",{class:"flex flex-wrap sm:justify-center"},l.a.createElement("div",{class:"w-full"},l.a.createElement("h1",{class:"text-4xl text-center text-gray-800 mt-6"},t.markdownRemark.frontmatter.title),l.a.createElement("h1",{class:"text-xl mb-12 text-center text-gray-700 italic"},t.markdownRemark.frontmatter.subtitle),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}),l.a.createElement("h2",{class:"text-3xl text-gray-800 mt-10"},"Organizers"),l.a.createElement("div",{class:"flex flex-wrap sm:justify-center mb-12"},l.a.createElement("div",{class:"w-full md:w-1/3"},l.a.createElement(c.a,{title:"Prof. Alois Knoll",description:t.markdownRemark.frontmatter.knoll,image:r(t,"knoll").childImageSharp.fluid})),l.a.createElement("div",{class:"w-full md:w-1/3"},l.a.createElement(c.a,{title:"Julian Bernhard",description:t.markdownRemark.frontmatter.bernhard,image:r(t,"bernhard").childImageSharp.fluid})),l.a.createElement("div",{class:"w-full md:w-1/3"},l.a.createElement(c.a,{title:"Klemens Esterle",description:t.markdownRemark.frontmatter.esterle,image:r(t,"esterle").childImageSharp.fluid})),l.a.createElement("div",{class:"w-full md:w-1/3"},l.a.createElement(c.a,{title:"Patrick Hart",description:t.markdownRemark.frontmatter.hart,image:r(t,"hart").childImageSharp.fluid})),l.a.createElement("div",{class:"w-full md:w-1/3"},l.a.createElement(c.a,{title:"Tobias Kessler",description:t.markdownRemark.frontmatter.kessler,image:r(t,"kessler").childImageSharp.fluid}))))))}}}]);
//# sourceMappingURL=component---src-pages-iros-tutorial-js-640cf84ac3b49e290149.js.map