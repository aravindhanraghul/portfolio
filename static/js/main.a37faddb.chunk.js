(this.webpackJsonpAravindhan=this.webpackJsonpAravindhan||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var a,i,r=t(1),o=t(21),c=t.n(o),s=t(6),l=t(4),d=t(2),m=t(3),b=t(0),j=m.b.div(a||(a=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function h(n){var e=n.heading,t=void 0===e?"Col Heading":e,a=n.links,i=void 0===a?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:a;return Object(b.jsxs)(j,{children:[Object(b.jsx)("h2",{className:"heading",children:t}),Object(b.jsx)("ul",{children:i.map((function(n,e){return Object(b.jsx)("li",{children:"Link"===n.type?Object(b.jsx)(s.b,{to:n.path,children:n.title}):Object(b.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var p,x=m.b.div(i||(i=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function u(n){var e=n.children;return Object(b.jsx)(x,{className:"para",children:Object(b.jsx)("p",{children:e})})}var g=m.b.div(p||(p=Object(d.a)(["\n  background-color: #616923;\n  border: 20px solid var(--gray-1);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(b.jsxs)(g,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"footer__col2",children:Object(b.jsx)(h,{heading:"Important Links",links:[{title:"Home",path:"/",type:"Link"},{type:"Link",title:"About",path:"/about"},{type:"Link",title:"Projects",path:"/projects"},{type:"Link",title:"Contact",path:"/contact"}]})}),Object(b.jsx)("div",{className:"footer__col3",children:Object(b.jsx)(h,{heading:"Contact Info",links:[{title:"+88012312",path:"tel:+88012312"},{title:"aravindhan@gmail.com",path:"mailto:aravindhan@gmail.com"},{title:"Chennai, TN, India",path:"http://google.com/maps"}]})}),Object(b.jsx)("div",{className:"footer__col4",children:Object(b.jsx)(h,{heading:"social Links",links:[{title:"Facebook",path:"http://facebook.com"},{title:"Twitter",path:"http://twitter.com"},{title:"Instagram",path:"http://instagram.com"}]})})]}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(u,{children:"CopyRight-Aravindhan 2021"})})})]})}var _,O,v=t(11),y=t(7),w=m.b.nav(_||(_=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: skyblue;\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'Fantasy';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: red;\n      outline: none;\n    }\n    .active {\n      color: black;\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: red;\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function k(){var n=Object(r.useState)(!1),e=Object(v.a)(n,2),t=e[0],a=e[1];return Object(b.jsxs)(w,{children:[Object(b.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:Object(b.jsx)(y.f,{})}),Object(b.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(b.jsx)("div",{className:"closeNavIcon",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:Object(b.jsx)(y.a,{})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/portfolio/",exact:!0,onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/portfolio/about",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/portfolio/projects",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/portfolio/contact",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Contact"})})]})]})}function N(){var n=Object(l.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var I,z=m.b.div(O||(O=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function S(n){var e=n.btnText,t=void 0===e?"test":e,a=n.btnLink,i=void 0===a?"test":a,r=n.outline,o=void 0!==r&&r;return Object(b.jsx)(z,{outline:o,className:"button-wrapper",children:Object(b.jsx)(s.b,{className:"button",to:i,children:t})})}var C=m.b.div(I||(I=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function L(n){var e=n.title,t=void 0===e?"Title":e,a=n.items,i=void 0===a?["HTML","CSS"]:a;return Object(b.jsxs)(C,{children:[Object(b.jsx)("h1",{className:"title",children:t}),Object(b.jsx)("div",{className:"items",children:i.map((function(n,e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(u,{children:n})},e)}))})]})}var B,F,T=t.p+"static/media/Front and Back Resume.25bb79f1.pdf",E=m.b.div(B||(B=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function D(){return Object(b.jsx)(E,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(b.jsx)(u,{children:"Have a project in mind"}),Object(b.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(b.jsx)(S,{btnText:"Contact Now",btnLink:"/contact"})]})})})}var H,A=m.b.div(F||(F=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function M(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(A,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"about__info__items",children:[Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(b.jsx)(L,{title:"School",items:["Jayam Vidhalaya Matric Hr Sec School, Harur"]}),Object(b.jsx)(L,{title:"College",items:["Bannari Amman Institute of Technology,Erode"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(b.jsx)(L,{title:"FrontEnd",items:["HTML","CSS","JavaScript","REACT Js"]}),Object(b.jsx)(L,{title:"BackEnd",items:["Node Js","Express Js"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Experiences"}),Object(b.jsx)(L,{title:"2020-2021",items:["Associate SOftware at OX Software","Chennai"]}),Object(b.jsx)(L,{title:"2021-Present",items:["Web Developer at LirctekTech Pvt Limited","Banglore"]})]})]}),Object(b.jsx)("div",{className:"top-section",children:Object(b.jsx)("div",{className:"left",children:Object(b.jsx)(S,{btnText:"Download CV",btnLink:"#",href:T})})})]}),Object(b.jsx)(D,{})]})})}var R,P=m.b.form(H||(H=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function J(){var n=Object(r.useState)(""),e=Object(v.a)(n,2),t=e[0],a=e[1],i=Object(r.useState)(""),o=Object(v.a)(i,2),c=o[0],s=o[1],l=Object(r.useState)(""),d=Object(v.a)(l,2),m=d[0],j=d[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(P,{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(b.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return a(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"email",children:["Your Email",Object(b.jsx)("input",{type:"email",id:"email",name:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"message",children:["Your message",Object(b.jsx)("textarea",{type:"text",id:"message",name:"message",value:m,onChange:function(n){return j(n.target.value)}})]})}),Object(b.jsx)("button",{type:"submit",children:"Send"})]})})}var K,U=m.b.div(R||(R=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function W(n){var e=n.icon,t=void 0===e?Object(b.jsx)(y.g,{}):e,a=n.text,i=void 0===a?"I need text ":a;return Object(b.jsxs)(U,{children:[Object(b.jsx)("div",{className:"icon",children:t}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(u,{children:i})})]})}var Y,X=m.b.div(K||(K=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'Fantasy';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Fantasy';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function V(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,a=n.heading,i=void 0===a?"need heading":a;return Object(b.jsxs)(X,{className:"section-title",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:i})]})}var q=m.b.div(Y||(Y=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function G(){return Object(b.jsx)(q,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{heading:"contact",subheading:"Contact Us By"}),Object(b.jsxs)("div",{className:"contactSection__wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(W,{icon:Object(b.jsx)(y.e,{}),text:"+99866901424"}),Object(b.jsx)(W,{icon:Object(b.jsx)(y.d,{}),text:"aravindhan@gmail.com"}),Object(b.jsx)(W,{text:"Dharmapuri, TN"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)(J,{})})]})]})})}var Q,Z=t.p+"static/media/map.7d98ba39.png",$=m.b.div(Q||(Q=Object(d.a)(["\n  background: url(",") no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])),Z);function nn(){return Object(b.jsx)($,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"map__card",children:[Object(b.jsx)("h3",{className:"map__card__heading",children:"Here is me"}),Object(b.jsx)(u,{children:"Harur, Dharmapuri, TamilNadu"}),Object(b.jsx)("a",{className:"map__card__link",href:"https://www.google.com/maps/place/Harur,+Tamil+Nadu+636903/@12.0474619,78.463969,14z/data=!3m1!4b1!4m5!3m4!1s0x3bac657ad3485185:0x3415d3760b215623!8m2!3d12.0469674!4d78.4832729",target:"_blank",rel:"noreferrer",children:"Open in google map"})]})})})}function en(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(G,{}),Object(b.jsx)(nn,{})]})}var tn,an,rn=t.p+"static/media/code.8b6df35b.jpeg",on=m.b.div(tn||(tn=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function cn(){return Object(b.jsx)(on,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"aboutSection__left",children:[Object(b.jsx)(V,{subheading:"Let me introduce myself",heading:"About Me"}),Object(b.jsx)(u,{children:"I am working as a web developer and UI/UX developer for 1+years."}),Object(b.jsxs)("div",{className:"aboutSection__buttons",children:[Object(b.jsx)(S,{btnText:"Works",btnLink:"/projects"}),Object(b.jsx)(S,{btnText:"Read More",btnLink:"/about",outline:!0})]})]}),Object(b.jsx)("div",{className:"aboutSection__right",children:Object(b.jsx)("img",{className:"aboutImg",src:rn,alt:"Img"})})]})})}var sn,ln=m.b.div(an||(an=Object(d.a)(["\n  text-align: center;\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Fantasy';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));function dn(n){var e=n.icon,t=void 0===e?Object(b.jsx)(y.c,{}):e,a=n.title,i=void 0===a?"Web Design":a,r=n.desc,o=void 0===r?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok":r;return Object(b.jsxs)(ln,{className:"servicesItem",children:[Object(b.jsx)("div",{className:"servicesItem__icon",children:t}),Object(b.jsx)("div",{className:"servicesItem__title",children:i}),Object(b.jsx)(u,{children:o})]})}var mn,bn=m.b.div(sn||(sn=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function jn(){return Object(b.jsx)(bn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{subheading:"What i will do for you",heading:"Services"}),Object(b.jsxs)("div",{className:"services__allItems",children:[Object(b.jsx)(dn,{icon:Object(b.jsx)(y.c,{}),title:"web design",desc:"I do ui/ux design for the website that helps website to get a unique look."}),Object(b.jsx)(dn,{icon:Object(b.jsx)(y.b,{}),title:"web dev",desc:"I also develop the websites. I create high performance website with blazing fast speed."})]})]})})}var hn=m.b.div(mn||(mn=Object(d.a)(["\n  .hero {\n    height: 40;\n    min-height: 500px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Fantasy';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 14.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 10.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function pn(){return Object(b.jsx)(hn,{children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"hero__heading",children:[Object(b.jsx)("span",{children:"Hello, This is"}),Object(b.jsx)("span",{className:"hero__name",children:"Aravindhan Selvaraj"})]}),Object(b.jsx)("div",{className:"hero__info",children:Object(b.jsx)(u,{children:"I am working as a web developer and UI/UX developer for 1+years."})})]})})})}function xn(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(pn,{}),Object(b.jsx)(cn,{}),Object(b.jsx)(jn,{}),Object(b.jsx)(D,{})]})}var un,gn,fn=t(42),_n=t.p+"static/media/ets.9f7a0a02.png",On=t.p+"static/media/oxerp.65ea6529.png",vn=[{id:Object(fn.a)(),name:"OX-ERP 2.O",desc:"Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance,",img:_n},{id:Object(fn.a)(),name:"E-Trucking Soft",desc:"E-Trucking Soft is revolutionary all-in-one Trucking Management System combines everything you need to automate your day-to-day trucking operations.",img:On}],yn=t.p+"static/media/projectImg.771236e1.png",wn=m.b.div(un||(un=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function kn(n){var e=n.img,t=void 0===e?yn:e,a=n.title,i=void 0===a?"Project Name":a,r=n.desc,o=void 0===r?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":r;return Object(b.jsxs)(wn,{children:[Object(b.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(b.jsx)("img",{src:t,alt:"project img"})}),Object(b.jsxs)("div",{className:"projectItem__info",children:[Object(b.jsx)(s.b,{to:"#",children:Object(b.jsx)("h3",{className:"projectItem__title",children:i})}),Object(b.jsx)("p",{className:"projectItem__desc",children:o})]})]})}var Nn,In=m.b.div(gn||(gn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function zn(){var n=Object(r.useState)(""),e=Object(v.a)(n,2),t=e[0],a=e[1],i=Object(r.useState)(vn),o=Object(v.a)(i,2),c=o[0],s=o[1];Object(r.useEffect)((function(){""!==t&&s((function(){return vn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(In,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{subheading:"Works done by me",heading:"Projects"}),Object(b.jsx)("div",{className:"projects__searchBar",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),a(n.target.value),!n.target.value.length>0&&s(vn)},placeholder:"Project Name"}),Object(b.jsx)(y.h,{className:"searchIcon"})]})}),Object(b.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(b.jsx)(kn,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})})}function Sn(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(k,{}),Object(b.jsx)(N,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/portfolio/about",children:Object(b.jsx)(M,{})}),Object(b.jsx)(l.a,{path:"/portfolio/contact",children:Object(b.jsx)(en,{})}),Object(b.jsx)(l.a,{path:"/portfolio/projects",children:Object(b.jsx)(zn,{})}),Object(b.jsx)(l.a,{path:"/portfolio/",children:Object(b.jsx)(xn,{})})]}),Object(b.jsx)(f,{})]})})}var Cn,Ln=Object(m.a)(Nn||(Nn=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: white;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Fantasy';\n    background-color: #3e454f;\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Bn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Fn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Tn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",En=Object(m.a)(Cn||(Cn=Object(d.a)(["\n  @font-face {\n    font-family: 'Fantasy';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Fantasy';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Fantasy';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'Fantasy';\n    color: black;\n  }\n  *{\n    font-family: 'Fantasy';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Fantasy'\n  }\n\n"])),Bn,Fn,Tn);c.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Ln,{}),Object(b.jsx)(En,{}),Object(b.jsx)(Sn,{})]}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a37faddb.chunk.js.map