(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"listQuery",function(){return m});a(155),a(176),a(35);var n=a(0),r=a.n(n),l=a(150),o=(a(164),a(174),a(163)),i=a(161),c=a(166),s=a(156),m="778046197";t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=e.data.site.siteMetadata.labels,n=e.pageContext,m=n.currentPage,d=1===m,u=m===n.numPages,g=m-1==1?"/":(m-1).toString(),p=(m+1).toString();return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home",keywords:["gatsby","javascript","react","web development","blog","graphql"]}),r.a.createElement("div",{className:"index-main"},r.a.createElement("div",{className:"sidebar px-4 py-2"},r.a.createElement(c.a,null)),r.a.createElement("div",{className:"post-list-main"},t.map(function(e){var t=e.node.frontmatter.tags;return r.a.createElement("div",{key:e.node.id,className:"container mt-5"},r.a.createElement(l.a,{to:e.node.fields.slug,className:"text-dark"},r.a.createElement("h2",{className:"title"},e.node.frontmatter.title)),r.a.createElement("small",{className:"d-block text-info"},r.a.createElement("i",null,"Posted on ",e.node.frontmatter.date)),r.a.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),r.a.createElement(l.a,{to:e.node.fields.slug,className:"text-primary"},r.a.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),r.a.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach(function(e,n){a.forEach(function(a){e===a.tag&&t.push(r.a.createElement(s.a,{key:n,tag:a.tag,tech:a.tech,name:a.name,size:a.size,color:a.color}))})}),t}(t)))}),r.a.createElement("div",{className:"text-center mt-4"},!d&&r.a.createElement(l.a,{to:g,rel:"prev",style:{textDecoration:"none"}},r.a.createElement("span",{className:"text-dark"},"← Previous Page")),!u&&r.a.createElement(l.a,{to:p,rel:"next",style:{textDecoration:"none"}},r.a.createElement("span",{className:"text-dark ml-5"},"Next Page →"))))))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(33),c=a.n(i);a.d(t,"a",function(){return c.a});a(152);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},153:function(e,t,a){e.exports=a.p+"static/marcbetts-6576feb6cad91144c8421a08919fa241.jpg"},156:function(e,t,a){"use strict";a(155);var n=a(0),r=a.n(n),l=a(151),o=a(172),i=(a(171),a(150));t.a=function(e){var t=e.tag,a=e.tech,n=e.name,c=e.size,s=e.color,m=/^Fa/.test(n)?r.a.createElement(l[n]):r.a.createElement(o[n]);return r.a.createElement("div",{className:"d-inline-block p-1"},r.a.createElement(i.a,{to:"/tags/"+t+"/"},r.a.createElement("button",{className:"tech-tag text-white"},r.a.createElement("p",{className:"d-inline"},a," "),r.a.createElement("div",{className:"d-inline",style:{fontSize:c,color:s}},m))))}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"How Do I Test That?",tagline:"Semi useful test advice",author:"Marc Betts",contacts:{linkedin:"https://www.linkedin.com/in/marcallenbetts",github:"https://github.com/marcallenbetts",twitter:"https://twitter.com/marcbetts"}}}}}},160:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},161:function(e,t,a){"use strict";var n=a(162),r=a(0),l=a.n(r),o=a(4),i=a.n(o),c=a(167),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,i=n.data.site,c=t||i.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},162:function(e){e.exports={data:{site:{siteMetadata:{title:"How Do I Test That?",description:"A blog template for web developers that's ready to go out of the box. Feel free to modify it to your liking.",author:"Marc Betts"}}}}},163:function(e,t,a){"use strict";var n=a(159),r=a(0),l=a.n(r),o=a(4),i=a.n(o),c=a(150),s=(a(164),a(151)),m=(a(157),function(e){var t=e.contacts;return l.a.createElement("div",{className:"bottom-bar py-1"},l.a.createElement("a",{className:" text-primary",href:t.linkedin},l.a.createElement("span",{title:"Linked In"},l.a.createElement(s.FaLinkedin,{size:26,style:{color:"primary"}}))),l.a.createElement("a",{className:"text-light",href:t.github},l.a.createElement("span",{title:"GitHub"},l.a.createElement(s.FaGithubSquare,{size:26,style:{color:"light"}}))),l.a.createElement("a",{className:"text-info",href:t.twitter},l.a.createElement("span",{title:"Twitter"},l.a.createElement(s.FaTwitterSquare,{size:26,style:{color:"info"}}))))}),d=function(){return l.a.createElement("div",{className:"mobile-pages-main"},l.a.createElement("div",{className:"text-center"},l.a.createElement("p",{className:"d-inline p-4"},l.a.createElement(c.a,{to:"/"},l.a.createElement("span",{className:"text-dark"},"Blog Home"))),l.a.createElement("p",{className:"d-inline p-4"},l.a.createElement(c.a,{to:"/about"},l.a.createElement("span",{className:"text-dark"},"About"))),l.a.createElement("p",{className:"d-inline p-4"},l.a.createElement(c.a,{to:"/archive"},l.a.createElement("span",{className:"text-dark"},"Archive")))))},u=function(e){var t=e.contacts;return l.a.createElement("div",{className:"social-links float-right mr-4"},l.a.createElement("a",{className:"text-primary ml-4",href:t.linkedin},l.a.createElement("span",{title:"Linked In"},l.a.createElement(s.FaLinkedin,{size:40,style:{color:"primary"}}))),l.a.createElement("a",{className:"text-light ml-4",href:t.github},l.a.createElement("span",{title:"GitHub"},l.a.createElement(s.FaGithubSquare,{size:40,style:{color:"light"}}))),l.a.createElement("a",{className:"text-info ml-4",href:t.twitter},l.a.createElement("span",{title:"Twitter"},l.a.createElement(s.FaTwitterSquare,{size:40,style:{color:"info"}}))))},g=(a(158),a(153)),p=a.n(g),h=function(e){return l.a.createElement("div",{className:"mobile-bio-main"},l.a.createElement("img",{src:p.a,className:"ml-4 mt-2",style:{maxWidth:"75px",maxHeight:"75px",borderRadius:"50%",boxShadow:"1px 1px 3px"},alt:"author-pic"}),l.a.createElement("h4",{className:"mr-4 mt-4"},e.author))},E=function(e){var t=e.siteTitle,a=(e.tagline,e.author),n=e.contacts;return l.a.createElement("header",{className:"head-main",style:{background:"black"}},l.a.createElement("div",{className:"head-elements",style:{margin:"0",padding:".75rem"}},l.a.createElement("h1",{className:"head-logo ml-4",style:{margin:0}},l.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),l.a.createElement(u,{contacts:n})),l.a.createElement(m,{contacts:n}),l.a.createElement(d,null),l.a.createElement(h,{author:a}))};E.propTypes={siteTitle:i.a.string},E.defaultProps={siteTitle:""};var f=E,b=function(e){var t=e.children;return l.a.createElement(c.b,{query:"2827013470",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{siteTitle:e.site.siteMetadata.title,tagline:e.site.siteMetadata.tagline,author:e.site.siteMetadata.author,contacts:e.site.siteMetadata.contacts}),l.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",{className:"p-4"},t),l.a.createElement("footer",{className:"text-center"},l.a.createElement("hr",null),l.a.createElement("p",{className:"d-inline"},"© ",(new Date).getFullYear()," ",l.a.createElement("a",{className:"text-info",href:"https://github.com/marcallenbetts"},"Marc Betts"),", All Rights Reserved."),l.a.createElement("p",{className:"mt-5 text-muted d-inline"},l.a.createElement("i",null," ","Built with"," ",l.a.createElement("a",{className:"text-info",href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:n})};b.propTypes={children:i.a.node.isRequired};t.a=b},165:function(e){e.exports={data:{site:{siteMetadata:{title:"How Do I Test That?",tagline:"Semi useful test advice",author:"Marc Betts",contacts:{linkedin:"https://www.linkedin.com/in/marcallenbetts",github:"https://github.com/marcallenbetts",twitter:"https://twitter.com/marcbetts"},labels:[{tag:"react",tech:"React",name:"DiReact",size:20,color:"deepskyblue"},{tag:"git",tech:"Git",name:"DiGitMerge",size:20,color:"white"},{tag:"javascript",tech:"JavaScript",name:"DiJsBadge",size:20,color:"yellow"},{tag:"css",tech:"CSS",name:"DiCss3Full",size:20,color:"teal"},{tag:"python",tech:"Python",name:"DiPython",size:20,color:"deepskyblue"},{tag:"nodejs",tech:"Node.js",name:"DiNodejsSmall",size:20,color:"lightgreen"},{tag:"ruby",tech:"Ruby",name:"DiRuby",size:20,color:"crimson"},{tag:"java",tech:"Java",name:"FaJava",size:20,color:"wheat"},{tag:"angular",tech:"Angular",name:"DiAngularSimple",size:20,color:"red"},{tag:"html",tech:"HTML",name:"FaHtml5",size:20,color:"darkorange"},{tag:"php",tech:"php",name:"DiPhp",size:20,color:"violet"},{tag:"mongodb",tech:"MongoDB",name:"DiMongodb",size:20,color:"green"},{tag:"mongoose",tech:"Mongoose",name:"DiMongodb",size:20,color:"green"},{tag:"vscode",tech:"VS Code",name:"DiVisualstudio",size:20,color:"deepskyblue"},{tag:"android",tech:"Android",name:"DiAndroid",size:20,color:"green"},{tag:"cli",tech:"cli",name:"DiTerminal",size:20,color:"white"},{tag:"curl",tech:"curl",name:"DiTerminal",size:20,color:"white"},{tag:"mobile",tech:"Mobile",name:"FaMobileAlt",size:20,color:"white"},{tag:"proxy",tech:"proxy",name:"FaServer",size:20,color:"white"},{tag:"charlesproxy",tech:"Charles Proxy",name:"FaTools",size:20,color:"white"},{tag:"mitmproxy",tech:"mitmproxy",name:"FaTools",size:20,color:"white"},{tag:"postman",tech:"Postman",name:"DiTerminal",size:20,color:"white"},{tag:"newman",tech:"Newman",name:"FaTools",size:20,color:"white"},{tag:"express",tech:"Express",name:"FaJsSquare",size:20,color:"white"},{tag:"webserver",tech:"webserver",name:"FaServer",size:20,color:"white"},{tag:"nginx",tech:"NGINX",name:"FaServer",size:20,color:"white"},{tag:"apitesting",tech:"API Testing",name:"FaServer",size:20,color:"white"},{tag:"serveo",tech:"Serveo",name:"FaTools",size:20,color:"white"},{tag:"ngrok",tech:"ngrok",name:"FaTools",size:20,color:"white"},{tag:"localtunnel",tech:"Localtunnel",name:"FaTools",size:20,color:"white"},{tag:"network",tech:"Network",name:"FaEthernet",size:20,color:"white"},{tag:"lodash",tech:"Lodash",name:"FaJsSquare",size:20,color:"white"},{tag:"moment",tech:"Moment",name:"FaJsSquare",size:20,color:"white"}]}},allMarkdownRemark:{edges:[{node:{frontmatter:{tags:["mimiproxy","proxy","cli","curl"]}}},{node:{frontmatter:{tags:["mitmproxy","proxy","cli","charlesproxy"]}}},{node:{frontmatter:{tags:["postman","newman","lodash","moment"]}}},{node:{frontmatter:{tags:["serveo","localtunnel","ngrok","network"]}}},{node:{frontmatter:{tags:["android","cli","mobile"]}}},{node:{frontmatter:{tags:["proxy","charlesproxy","postman","newman","cli"]}}},{node:{frontmatter:{tags:["postman","express","apitesting","mongoose","mongodb"]}}},{node:{frontmatter:{tags:["nodejs","express"]}}},{node:{frontmatter:{tags:["nginx","proxy","charlesproxy","mitmproxy","webserver"]}}},{node:{frontmatter:{tags:["python","webserver"]}}},{node:{frontmatter:{tags:["ngrok","network"]}}}]}}}},166:function(e,t,a){"use strict";var n=a(165),r=a(0),l=a.n(r),o=a(150),i=(a(154),a(153)),c=a.n(i),s=function(e){var t=e.author,a=e.tagline;return l.a.createElement("div",{className:"bio-main w-75"},l.a.createElement("img",{src:c.a,style:{maxWidth:"100px"},className:"profile-img",alt:""}),l.a.createElement("h3",{className:"mt-2 author-bio"},t),l.a.createElement("small",{className:"text-muted"},a))},m=a(151),d=function(e){var t=e.contacts;return l.a.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},l.a.createElement("a",{className:"text-secondary p-2",href:t.linkedin},l.a.createElement("span",{title:"Linked In"},l.a.createElement(m.FaLinkedin,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:t.github},l.a.createElement("span",{title:"GitHub"},l.a.createElement(m.FaGithubSquare,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:t.twitter},l.a.createElement("span",{title:"Twitter"},l.a.createElement(m.FaTwitterSquare,{size:26,style:{color:"secondary"}}))))},u=(a(155),a(170),a(74),a(75),a(156)),g=function(e){var t=e.labels,a=e.posts,n=t.map(function(e){var t=0;return a.forEach(function(a){a.node.frontmatter.tags.includes(e.tag)&&(t+=1)}),[e.tag,t]}).filter(function(e){return e[1]>0}).sort(function(e,t){return t[1]-e[1]}).map(function(e){return e[0]});return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Tech Topics"),l.a.createElement("div",{className:"d-block"},function(e){var a=[];return e.forEach(function(e,n){t.forEach(function(t){e===t.tag&&a.push(l.a.createElement(u.a,{key:n,tag:t.tag,tech:t.tech,name:t.name,size:t.size,color:t.color}))})}),a}(n)))};t.a=function(){return l.a.createElement(o.b,{query:"1092687315",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sidebar-main border-right"},l.a.createElement(s,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),l.a.createElement(d,{contacts:e.site.siteMetadata.contacts}),l.a.createElement("div",{className:"page-links"},l.a.createElement(o.a,{to:"/"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Blog Home")),l.a.createElement(o.a,{to:"/about"},l.a.createElement("span",{className:"text-dark d-block py-1"},"About")),l.a.createElement(o.a,{to:"/archive"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Archive"))),l.a.createElement("div",{className:"tech-tags mt-4"},l.a.createElement(g,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))},data:n})}},176:function(e,t,a){"use strict";a(177);var n=a(5),r=a(76),l=a(18),o=/./.toString,i=function(e){a(14)(RegExp.prototype,"toString",e,!0)};a(19)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?i(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&i(function(){return o.call(this)})},177:function(e,t,a){a(18)&&"g"!=/./g.flags&&a(25).f(RegExp.prototype,"flags",{configurable:!0,get:a(76)})}}]);
//# sourceMappingURL=component---src-templates-post-list-js-01e3bda3352746366373.js.map