(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(163),l=a(161);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"Page Not Found"),r.a.createElement("p",null,r.a.createElement("i",null,"Just lightin' out for the territories, huh? Brother, I been there.")))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(152);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},153:function(e,t,a){e.exports=a.p+"static/marcbetts-6576feb6cad91144c8421a08919fa241.jpg"},159:function(e){e.exports={data:{site:{siteMetadata:{title:"How Do I Test That?",tagline:"Semi useful test advice",author:"Marc Betts",contacts:{linkedin:"https://www.linkedin.com/in/marcallenbetts",github:"https://github.com/marcallenbetts",twitter:"https://twitter.com/marcbetts"}}}}}},160:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},161:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),l=a(4),c=a.n(l),s=a(167),o=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,c=n.data.site,s=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=m},162:function(e){e.exports={data:{site:{siteMetadata:{title:"How Do I Test That?",description:"A blog template for web developers that's ready to go out of the box. Feel free to modify it to your liking.",author:"Marc Betts"}}}}},163:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),l=a(4),c=a.n(l),s=a(150),o=(a(164),a(151)),m=(a(157),function(e){var t=e.contacts;return i.a.createElement("div",{className:"bottom-bar py-1"},i.a.createElement("a",{className:" text-primary",href:t.linkedin},i.a.createElement("span",{title:"Linked In"},i.a.createElement(o.FaLinkedin,{size:26,style:{color:"primary"}}))),i.a.createElement("a",{className:"text-light",href:t.github},i.a.createElement("span",{title:"GitHub"},i.a.createElement(o.FaGithubSquare,{size:26,style:{color:"light"}}))),i.a.createElement("a",{className:"text-info",href:t.twitter},i.a.createElement("span",{title:"Twitter"},i.a.createElement(o.FaTwitterSquare,{size:26,style:{color:"info"}}))))}),u=function(){return i.a.createElement("div",{className:"mobile-pages-main"},i.a.createElement("div",{className:"text-center"},i.a.createElement("p",{className:"d-inline p-4"},i.a.createElement(s.a,{to:"/"},i.a.createElement("span",{className:"text-dark"},"Blog Home"))),i.a.createElement("p",{className:"d-inline p-4"},i.a.createElement(s.a,{to:"/about"},i.a.createElement("span",{className:"text-dark"},"About"))),i.a.createElement("p",{className:"d-inline p-4"},i.a.createElement(s.a,{to:"/archive"},i.a.createElement("span",{className:"text-dark"},"Archive")))))},d=function(e){var t=e.contacts;return i.a.createElement("div",{className:"social-links float-right mr-4"},i.a.createElement("a",{className:"text-primary ml-4",href:t.linkedin},i.a.createElement("span",{title:"Linked In"},i.a.createElement(o.FaLinkedin,{size:40,style:{color:"primary"}}))),i.a.createElement("a",{className:"text-light ml-4",href:t.github},i.a.createElement("span",{title:"GitHub"},i.a.createElement(o.FaGithubSquare,{size:40,style:{color:"light"}}))),i.a.createElement("a",{className:"text-info ml-4",href:t.twitter},i.a.createElement("span",{title:"Twitter"},i.a.createElement(o.FaTwitterSquare,{size:40,style:{color:"info"}}))))},p=(a(158),a(153)),h=a.n(p),E=function(e){return i.a.createElement("div",{className:"mobile-bio-main"},i.a.createElement("img",{src:h.a,className:"ml-4 mt-2",style:{maxWidth:"75px",maxHeight:"75px",borderRadius:"50%",boxShadow:"1px 1px 3px"},alt:"author-pic"}),i.a.createElement("h4",{className:"mr-4 mt-4"},e.author))},f=function(e){var t=e.siteTitle,a=(e.tagline,e.author),n=e.contacts;return i.a.createElement("header",{className:"head-main",style:{background:"black"}},i.a.createElement("div",{className:"head-elements",style:{margin:"0",padding:".75rem"}},i.a.createElement("h1",{className:"head-logo ml-4",style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement(d,{contacts:n})),i.a.createElement(m,{contacts:n}),i.a.createElement(u,null),i.a.createElement(E,{author:a}))};f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var g=f,b=function(e){var t=e.children;return i.a.createElement(s.b,{query:"2827013470",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{siteTitle:e.site.siteMetadata.title,tagline:e.site.siteMetadata.tagline,author:e.site.siteMetadata.author,contacts:e.site.siteMetadata.contacts}),i.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",{className:"p-4"},t),i.a.createElement("footer",{className:"text-center"},i.a.createElement("hr",null),i.a.createElement("p",{className:"d-inline"},"© ",(new Date).getFullYear()," ",i.a.createElement("a",{className:"text-info",href:"https://github.com/marcallenbetts"},"Marc Betts"),", All Rights Reserved."),i.a.createElement("p",{className:"mt-5 text-muted d-inline"},i.a.createElement("i",null," ","Built with"," ",i.a.createElement("a",{className:"text-info",href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:n})};b.propTypes={children:c.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-404-js-0e8a5c52fcbef3f6715e.js.map