(window.webpackJsonp=window.webpackJsonp||[]).push([[21,5,17,23],{108:function(e,t,a){"use strict";var r=a(3),l=a(0),n=a.n(l),o=a(101),c=a(103),s=a(102),m=a(104),i=a(55),u=a.n(i);function d({to:e,href:t,label:a,prependBaseUrlToHref:l,...o}){const s=Object(m.a)(e),i=Object(m.a)(t,{forcePrependBaseUrl:!0});return n.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?i:t}:{to:s},o),a)}const f=({url:e,alt:t})=>n.a.createElement("img",{className:"footer__logo",alt:t,src:e});t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:r={}}=e||{},l=Object(m.a)(r.src);return e?n.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},n.a.createElement("div",{className:"container"},a&&a.length>0&&n.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>n.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?n.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(d,e))))):null)))),(r||t)&&n.a.createElement("div",{className:"footer__bottom text--center"},r&&r.src&&n.a.createElement("div",{className:"margin-bottom--sm"},r.href?n.a.createElement("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},n.a.createElement(f,{alt:r.alt,url:l})):n.a.createElement(f,{alt:r.alt,url:l})),t?n.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},89:function(e,t,a){"use strict";a.r(t);var r=a(3),l=a(0),n=a.n(l),o=a(101),c=a(107),s=a(103),m=a(22),i=a(104),u=a(90),d=a.n(u);const f=[{title:"Easy to Use",imageUrl:"img/undraw_docusaurus_mountain.svg",description:n.a.createElement(n.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:"Focus on What Matters",imageUrl:"img/undraw_docusaurus_tree.svg",description:n.a.createElement(n.a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",n.a.createElement("code",null,"docs")," directory.")},{title:"Powered by React",imageUrl:"img/undraw_docusaurus_react.svg",description:n.a.createElement(n.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function g({imageUrl:e,title:t,description:a}){const r=Object(i.a)(e);return n.a.createElement("div",{className:Object(o.a)("col col--4",d.a.feature)},r&&n.a.createElement("div",{className:"text--center"},n.a.createElement("img",{className:d.a.featureImage,src:r,alt:t})),n.a.createElement("h3",null,t),n.a.createElement("p",null,a))}t.default=function(){const e=Object(m.default)(),{siteConfig:t={}}=e;return n.a.createElement(c.a,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},n.a.createElement("header",{className:Object(o.a)("hero hero--primary",d.a.heroBanner)},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"hero__title"},t.title),n.a.createElement("p",{className:"hero__subtitle"},t.tagline),n.a.createElement("div",{className:d.a.buttons},n.a.createElement(s.a,{className:Object(o.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(i.a)("docs/")},"Get Started")))),n.a.createElement("main",null,f&&f.length>0&&n.a.createElement("section",{className:d.a.features},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},f.map(((e,t)=>n.a.createElement(g,Object(r.a)({key:t},e)))))))))}}}]);