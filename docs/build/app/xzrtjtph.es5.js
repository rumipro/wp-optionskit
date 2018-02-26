/*! Built with http://stenciljs.com */
App.loadBundle("xzrtjtph",["exports"],function(e){var t=window.App.h,n=function(){function e(){document.title="PWAs"}return e.prototype.render=function(){return t("div",null,t("h1",null,"Progressive Web Apps"),t("h4",null,"Building PWAs with Stencil"),t("p",null,"Want to build a PWA with Stencil? Follow these instructions to instantly have a production ready PWA."),t("ul",null,t("li",null,"Run ",t("code",null,"git clone https://github.com/ionic-team/stencil-app-starter.git my-pwa")," in your terminal."),t("li",null,"Run ",t("code",null,"npm install")),t("li",null,"Run ",t("code",null,"npm run build"))),"And with just those two commands you now have a PWA that scores 100 on lighthouse right out of the box.",t("img",{src:"/assets/img/pwa.png"}),t("h4",null,"Under the hood"),t("h5",null,"Service Worker"),t("p",null,"When your run ",t("code",null,"npm run build")," we automatically generate a Service Worker for you using ",t("a",{href:"https://workboxjs.org/"},"Workbox")," that handles pre-caching your assets."),t("stencil-route-link",{url:"/docs/service-workers"},"Read more about Service Workers here."),t("h5",null,"Web Manifest"),t("p",null,"By default we include a Web Manifest that has all the neccessary entries to get the Add to Homescreen prompt. You can see that web manifest ",t("a",{href:"https://github.com/ionic-team/stencil-app-starter/blob/master/src/manifest.json"},"here"),"."),t("h4",null,"PWAs built with Stencil"),t("ul",null,t("li",null,t("a",{href:"https://stenciljs.com/"},"This site! That's right, stenciljs.com is a PWA")),t("li",null,t("a",{href:"https://corehacker-10883.firebaseapp.com/"},"Ionic Hacker News as featured on ",t("a",{href:"https://hnpwa.com"},"HNPWA"))),t("li",null,t("a",{href:"https://stencilpaint-8ba3c.firebaseapp.com/"},"StencilPaint"))))},Object.defineProperty(e,"is",{get:function(){return"pwas-page"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"pwas-page img{max-width:100%;margin-top:1em;box-shadow:0 2px 4px rgba(0,0,0,.1);border-radius:4px}pwas-page a{text-decoration:none}"},enumerable:!0,configurable:!0}),e}();e.PwasPage=n,Object.defineProperty(e,"__esModule",{value:!0})});