"use strict";
exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 4421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_layout)
});

// EXTERNAL MODULE: external "/home/mike/Developing/sbrikkisbooks_official_website/node_modules/react/index.js"
var index_js_ = __webpack_require__(9336);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/components/layout/layout.module.scss
// Exports
var layout = "layout-module--layout--4I4G6";

;// CONCATENATED MODULE: ./src/components/navBar/navBar.module.scss
// Exports
var navBar = "navBar-module--navBar--TdHdv";
var logo = "navBar-module--logo--WgOHQ";
var navigationDesktop = "navBar-module--navigationDesktop--foGDZ";
var navigationMobile = "navBar-module--navigationMobile--DS1-I";
var hamburger = "navBar-module--hamburger---A7xu";
var navBarDesktop = "navBar-module--navBarDesktop--LUTvt";

;// CONCATENATED MODULE: ./src/assets/logo.svg
/* harmony default export */ const assets_logo = (__webpack_require__.p + "static/logo-72546d3427ebf8019513c64f3d2bff1f.svg");
;// CONCATENATED MODULE: ./src/atoms/logo/logo.module.scss
// Exports
var logo_module_logo = "logo-module--logo--EQ6xL";
var pop = "logo-module--pop--uvp39";

;// CONCATENATED MODULE: ./src/atoms/logo/logo.jsx
const Logo=props=>{return/*#__PURE__*/index_js_default().createElement("a",{href:"/"},/*#__PURE__*/index_js_default().createElement("img",{src:assets_logo,alt:"Sbrikki's Books Logo",className:logo_module_logo}));};/* harmony default export */ const logo_logo = (Logo);
;// CONCATENATED MODULE: ./src/atoms/navItem/navItem.module.scss
// Exports
var item = "navItem-module--item--HpDHa";
var hov = "navItem-module--hov--o6pox";

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(2031);
;// CONCATENATED MODULE: ./src/atoms/navItem/navItem.jsx
const NavItem=props=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,props.isHref?/*#__PURE__*/index_js_default().createElement("a",{href:props.path,className:item,onClick:props.onClick},props.text):/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:item,to:props.path,onClick:props.onClick},props.text));};/* harmony default export */ const navItem = (NavItem);
;// CONCATENATED MODULE: ./src/components/navigation/navigation.module.scss
// Exports
var navDesktop = "navigation-module--navDesktop--V4wOn";
var slideIn = "navigation-module--slideIn--CHVah";
var navMobile = "navigation-module--navMobile--7U-MJ";
var rotateMenu = "navigation-module--rotateMenu--A7sIT";

;// CONCATENATED MODULE: ./src/components/navigation/navigation.jsx
const Navigation=props=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:navDesktop},/*#__PURE__*/index_js_default().createElement(navItem,{text:"Home",path:"/"}),/*#__PURE__*/index_js_default().createElement(navItem,{text:"Spotify",path:"/spotify"}),/*#__PURE__*/index_js_default().createElement(navItem,{text:"Stats",path:"/stats"}),/*#__PURE__*/index_js_default().createElement(navItem,{text:"King",path:"/king"}),/*#__PURE__*/index_js_default().createElement(navItem,{text:"Contact us",path:"#contactUs",isHref:true})),/*#__PURE__*/index_js_default().createElement("div",{className:navMobile},/*#__PURE__*/index_js_default().createElement(navItem,{text:"Home",path:"/",onClick:props.onClick}),/*#__PURE__*/index_js_default().createElement(navItem,{text:"Spotify",path:"/spotify",onClick:props.onClick}),/*#__PURE__*/index_js_default().createElement(navItem,{text:"Stats",path:"/stats",onClick:props.onClick}),/*#__PURE__*/index_js_default().createElement(navItem,{text:"King",path:"/king",onClick:props.onClick}),/*#__PURE__*/index_js_default().createElement(navItem,{text:"Contact us",path:"#contactUs",onClick:props.onClick,isHref:true})));};/* harmony default export */ const navigation = (Navigation);
;// CONCATENATED MODULE: ./src/atoms/hamburger/hamburger.module.scss
// Exports
var line = "hamburger-module--line--jtWV5";
var hamLine3 = "hamburger-module--hamLine3--JPMju";
var crossLine3 = "hamburger-module--crossLine3--AYcoW";
var hamLine2 = "hamburger-module--hamLine2--zIAoH";
var crossLine2 = "hamburger-module--crossLine2--6T+aQ";
var hamLine1 = "hamburger-module--hamLine1--jCuN0";
var crossLine1 = "hamburger-module--crossLine1--kEFxb";
var hamburger_module_hamburger = "hamburger-module--hamburger--XhWSf";
var hamburger_module_pop = "hamburger-module--pop--ycd0f";
var animateCrossLine1 = "hamburger-module--animateCrossLine1--5k+kW";
var animateCrossLine2 = "hamburger-module--animateCrossLine2--h2y0S";
var animateCrossLine3 = "hamburger-module--animateCrossLine3--j5knc";
var animateHamLine1 = "hamburger-module--animateHamLine1--fmdaI";
var animateHamLine2 = "hamburger-module--animateHamLine2--WdrVq";
var animateHamLine3 = "hamburger-module--animateHamLine3--G4z0y";

;// CONCATENATED MODULE: ./src/atoms/hamburger/hamburger.jsx
function Hamburger(props){return/*#__PURE__*/index_js_default().createElement("div",{className:hamburger_module_hamburger,onClick:props.onClick,onKeyDown:props.onClick,role:"button",tabIndex:0},/*#__PURE__*/index_js_default().createElement("div",{className:props.navBarOpen?crossLine1:hamLine1}),/*#__PURE__*/index_js_default().createElement("div",{className:props.navBarOpen?crossLine2:hamLine2}),/*#__PURE__*/index_js_default().createElement("div",{className:props.navBarOpen?crossLine3:hamLine3}));}/* harmony default export */ const hamburger_hamburger = (Hamburger);
;// CONCATENATED MODULE: ./src/components/navBar/navBar.jsx
const NavBar=props=>{const{0:navBarOpen,1:setNavBarOpen}=(0,index_js_.useState)(false);(0,index_js_.useEffect)(()=>{let prevScrollpos=window.pageYOffset;window.onscroll=function(){let currentScrollPos=window.pageYOffset;if(document.getElementById("navBar")){if(currentScrollPos===0){document.getElementById("navBar").style.top="0";}else if(prevScrollpos>currentScrollPos){document.getElementById("navBar").style.top="0";}else if(!navBarOpen){document.getElementById("navBar").style.top="-80px";}}prevScrollpos=currentScrollPos;};});const closeNavBar=()=>{setNavBarOpen(false);document.body.style.overflowY="scroll";document.body.style.height="auto";document.getElementsByTagName("html")[0].style.overflowY="scroll";document.getElementsByTagName("html")[0].style.height="auto";};const openNavBar=()=>{setNavBarOpen(true);document.body.style.overflow="hidden";document.body.style.height="100%";document.getElementsByTagName("html")[0].style.overflow="hidden";document.getElementsByTagName("html")[0].style.height="100%";};return/*#__PURE__*/index_js_default().createElement("div",{className:navBar,id:"navBar"},/*#__PURE__*/index_js_default().createElement("div",{className:logo},/*#__PURE__*/index_js_default().createElement(logo_logo,null)),props.isBlocking?null:/*#__PURE__*/index_js_default().createElement("div",{className:navigationDesktop},/*#__PURE__*/index_js_default().createElement(navigation,null)),navBarOpen&&!props.isBlocking?/*#__PURE__*/index_js_default().createElement("div",{className:navigationMobile},/*#__PURE__*/index_js_default().createElement(navigation,{onClick:closeNavBar})):null,props.isBlocking?null:/*#__PURE__*/index_js_default().createElement("div",{className:hamburger},/*#__PURE__*/index_js_default().createElement(hamburger_hamburger,{onClick:navBarOpen?closeNavBar:openNavBar,navBarOpen:navBarOpen})));};/* harmony default export */ const navBar_navBar = (NavBar);
;// CONCATENATED MODULE: ./src/atoms/mailTo/mailTo.module.scss
// Exports
var mailto = "mailTo-module--mailto--rzFFj";
var mailtoDisabled = "mailTo-module--mailtoDisabled--77y+n";
var suggestion = "mailTo-module--suggestion--OMfQ2";

;// CONCATENATED MODULE: ./src/atoms/mailTo/mailTo.jsx
const MailTo=({email,subject='',body='',children,enabled})=>{let params=subject||body?'?':'';if(subject)params+=`subject=${encodeURIComponent(subject)}`;if(body)params+=`${subject?'&':''}body=${encodeURIComponent(body)}`;return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("a",{href:`mailto:${email}${params}`,className:enabled?mailto:mailtoDisabled},children),enabled?null:/*#__PURE__*/index_js_default().createElement("p",{className:suggestion},"Fill in the fields above first"));};/* harmony default export */ const mailTo = (MailTo);
;// CONCATENATED MODULE: ./src/components/contactUs/contactUs.module.scss
// Exports
var contactUs = "contactUs-module--contactUs--9475g";
var contactHero = "contactUs-module--contactHero--BLjmv";
var hamWrapper = "contactUs-module--hamWrapper---ph+j";
var nsInput = "contactUs-module--nsInput--TgDYx";

;// CONCATENATED MODULE: ./src/components/contactUs/contactUs.jsx
function ContactUs(props){const{0:name,1:setName}=(0,index_js_.useState)();const{0:surname,1:setSurname}=(0,index_js_.useState)();const changeName=()=>{setName(document.getElementById("nameIn").value);};const changeSurname=()=>{setSurname(document.getElementById("surnameIn").value);};const checkNameSurname=()=>{if(name===undefined||surname===undefined)return false;if(name===''||surname==='')return false;return true;};return/*#__PURE__*/index_js_default().createElement("div",{className:contactUs},/*#__PURE__*/index_js_default().createElement("div",{className:contactHero},/*#__PURE__*/index_js_default().createElement("div",{className:hamWrapper},/*#__PURE__*/index_js_default().createElement(hamburger_hamburger,{navBarOpen:props.formOpened,onClick:props.closeForm})),/*#__PURE__*/index_js_default().createElement("p",null,"Insert name and surname and contact us!"),/*#__PURE__*/index_js_default().createElement("input",{type:"text",id:"nameIn",onChange:changeName,className:nsInput,placeholder:"Name"}),/*#__PURE__*/index_js_default().createElement("input",{type:"text",id:"surnameIn",onChange:changeSurname,className:nsInput,placeholder:"Surname"}),console.log(name+" "+surname),/*#__PURE__*/index_js_default().createElement(mailTo,{email:"sbrikkisbooks@gmail.com",subject:"I want to join!",body:"Hi, I'm "+name+" "+surname+". I want to join to your Book Club!",enabled:checkNameSurname()?true:false},"Send us a mail!")));}/* harmony default export */ const contactUs_contactUs = (ContactUs);
;// CONCATENATED MODULE: ./src/components/footer/footer.module.scss
// Exports
var footer = "footer-module--footer--lU7l1";
var formButton = "footer-module--formButton--HXgpd";

;// CONCATENATED MODULE: ./src/components/footer/footer.jsx
function Footer(props){const{0:formOpened,1:setFormOpened}=(0,index_js_.useState)(false);const openForm=()=>{setFormOpened(true);props.setNotScrolling();};const closeForm=()=>{setFormOpened(false);props.setScrolling();};return/*#__PURE__*/index_js_default().createElement("div",{className:footer,id:"contactUs"},/*#__PURE__*/index_js_default().createElement("p",null,"Join us!"),/*#__PURE__*/index_js_default().createElement("button",{onClick:openForm,className:formButton},"CONTACT US!"),formOpened?/*#__PURE__*/index_js_default().createElement(contactUs_contactUs,{closeForm:closeForm,formOpened:formOpened}):null);}/* harmony default export */ const footer_footer = (Footer);
;// CONCATENATED MODULE: ./src/components/layout/layout.jsx
const Layout=({children,isBlocking})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(navBar_navBar,{isBlocking:isBlocking}),/*#__PURE__*/index_js_default().createElement("div",{className:layout},children),/*#__PURE__*/index_js_default().createElement(footer_footer,null));};/* harmony default export */ const layout_layout = (Layout);

/***/ }),

/***/ 7018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9336);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4593);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3631);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2031);
const Seo=({title,description,image,article})=>{const{pathname}=(0,_reach_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_4__.useStaticQuery)(query);const{defaultTitle,titleTemplate,defaultDescription,siteUrl,defaultImage,twitterUsername}=site.siteMetadata;const seo={title:title||defaultTitle,description:description||defaultDescription,image:`${siteUrl}${image||defaultImage}`,url:`${siteUrl}${pathname}`};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet,{title:seo.title,titleTemplate:titleTemplate},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"image",content:seo.image}),seo.url&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:url",content:seo.url}),(article?true:null)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:type",content:"article"}),seo.title&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:title",content:seo.title}),seo.description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:description",content:seo.description}),seo.image&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:image",content:seo.image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"twitter:card",content:"summary_large_image"}),twitterUsername&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"twitter:creator",content:twitterUsername}),seo.title&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"twitter:title",content:seo.title}),seo.description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"twitter:description",content:seo.description}),seo.image&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"twitter:image",content:seo.image}));};Seo.propTypes={title:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),description:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),image:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),article:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)};Seo.defaultProps={title:"Sbrikki's Books - A Book Club for everyone",description:"Sbrikki's Books is an apolitical book club for everyone. The main aim is the growth of every member from a cultural point of view. We also drink.",image:null,article:false};const query="2094259327";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 2726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _404)
});

// EXTERNAL MODULE: external "/home/mike/Developing/sbrikkisbooks_official_website/node_modules/react/index.js"
var index_js_ = __webpack_require__(9336);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/styles/404.module.scss
// Exports
var page404 = "_404-module--page404---oDh3";
var gigi = "_404-module--gigi--UIf97";
var slideDown = "_404-module--slideDown--oOJ7R";
var slideRight = "_404-module--slideRight---frTR";
var _404_module_text = "_404-module--text--UiUnb";

;// CONCATENATED MODULE: ./src/assets/gigi.webp
/* harmony default export */ const assets_gigi = (__webpack_require__.p + "static/gigi-6cdf0e9e23437b32faedfd4470e36fa2.webp");
// EXTERNAL MODULE: ./src/components/layout/layout.jsx + 18 modules
var layout = __webpack_require__(4421);
// EXTERNAL MODULE: ./src/components/seo/seo.jsx
var seo = __webpack_require__(7018);
;// CONCATENATED MODULE: ./src/pages/404.jsx
const array=["Le domeniche d'Agosto quanta neve che cadrà","Il mio petto da cuscino per la vita ti farà","Miele, sei bella da morire, mi hai fatto innamorare","Quanti amori nascono così!","Bésame, siente còmo suena el corazon","E quella notte nel fuoco il mio cuore con lei si bruciò","Mai non mollare mai"];const NotFoundPage=()=>{const{0:random,1:setRandom}=(0,index_js_.useState)(0);(0,index_js_.useEffect)(()=>{const min=0;const max=array.length;const rand=min+Math.random()*(max-min);setRandom(r=>parseInt(r+rand));},[]);return/*#__PURE__*/index_js_default().createElement(layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement(seo/* default */.Z,{title:"Not Found",description:"Sorry, I can't find your page"}),/*#__PURE__*/index_js_default().createElement("div",{className:page404},/*#__PURE__*/index_js_default().createElement("img",{src:assets_gigi,alt:"Gigi",className:gigi}),/*#__PURE__*/index_js_default().createElement("div",{className:_404_module_text},/*#__PURE__*/index_js_default().createElement("h2",null,"404"),/*#__PURE__*/index_js_default().createElement("h2",null,"Sorry mbare, I can't find the page you asked"),/*#__PURE__*/index_js_default().createElement("h3",null,"\"",array[random],"\""))));};/* harmony default export */ const _404 = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-jsx.js.map