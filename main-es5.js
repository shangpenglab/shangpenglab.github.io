function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _join_us_join_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./join-us/join-us.component */
    "./src/app/join-us/join-us.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var _publications_publications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./publications/publications.component */
    "./src/app/publications/publications.component.ts");
    /* harmony import */


    var _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./teaching/teaching.component */
    "./src/app/teaching/teaching.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'news',
      component: _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"]
    }, {
      path: 'team',
      component: _team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"]
    }, {
      path: 'publications',
      component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_6__["PublicationsComponent"]
    }, {
      path: 'teaching',
      component: _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_7__["TeachingComponent"]
    }, {
      path: 'join-us',
      component: _join_us_join_us_component__WEBPACK_IMPORTED_MODULE_3__["JoinUsComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AppComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.title, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        selected: a0
      };
    };

    function AppComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_18_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var i_r5 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.selectedNav(i_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.selected == i_r5))("routerLink", item_r4.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
      }
    }

    function AppComponent_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.startYear, " - ");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(titleService, metaService) {
        _classCallCheck(this, AppComponent);

        this.titleService = titleService;
        this.metaService = metaService;
        this.title = 'shangpenglab';
        this.navItems = [{
          title: 'Home',
          link: ''
        }, {
          title: 'News',
          link: 'news'
        }, {
          title: 'Team',
          link: 'team'
        }, {
          title: 'Publications',
          link: 'publications'
        }, {
          title: 'Teaching',
          link: 'teaching'
        }, {
          title: 'Join Us !',
          link: 'join-us'
        }];
        this.startYear = 2022;
        this.currentYear = 0;
        this.selected = 0;
        this.navbarMenu = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentYear = new Date().getFullYear();
          this.getCurrentRoute(); // SEO

          this.metaService.addTags([{
            name: 'keyword',
            content: 'shangpeng lab, shangpeng sun, Bioresource Engineering, mcgill university, sensing technologies, AI-driven computational methodology, smart agriculture, high-quality food,  High-throughput plant, 3D point cloud, Spatio-temporal variation pattern, crop shoots and roots, Multi-source imaging data fusion, Agricultural robotics and automation, deep learning, computer vision, 3D modeling, ag-robots, digital agriculture, electric circuits and machines, instrumentation and control, simulation and modelling'
          }, {
            name: 'description',
            content: 'develop and adopt innovative sensing technologies and AI-driven computational methodology for solving challenges in next-generation smart agriculture, improving the production of high-quality food in the face of the rapidly growing human population and global environmental change'
          }]);
        } // 路由跳转完成后，获取当前的路由

      }, {
        key: "getCurrentRoute",
        value: function getCurrentRoute() {
          var _this = this;

          var currentRoute = window.sessionStorage.getItem('currentRoute');
          this.navItems.forEach(function (element, index) {
            if (currentRoute == element['link']) {
              _this.selected = index;
            }
          });
        }
      }, {
        key: "selectedNav",
        value: function selectedNav(index) {
          this.selected = index; // 把当前的route保存在浏览器的sessionStorage里

          window.sessionStorage.setItem('currentRoute', String(this.navItems[index].link));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 31,
      vars: 4,
      consts: [["data-bs-backdrop", "static", "tabindex", "-1", "id", "staticBackdrop", "aria-labelledby", "staticBackdropLabel", 1, "offcanvas", "offcanvas-lg", "offcanvas-top", "bg-white"], [1, "offcanvas-header", "py-1", "px-4", "bg-light"], ["id", "staticBackdropLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn", "btn-outline-dark", "border-0", "px-0"], [1, "bi", "bi-x-lg", "lead"], [1, "offcanvas-body", "container-fluid"], [1, "row", "align-items-center"], ["class", "col-6 mt-3", 4, "ngFor", "ngForOf"], [1, "navbar", "navbar-expand-lg", "bg-light", "fixed-top", "shadow"], [1, "container"], ["href", "#", 1, "navbar-brand", "fw-bold", "fs-5"], ["src", "../assets/img/mcgill_logo_title.png", "alt", "McGill ShangpengSun Lab", 1, "logo", "me-1"], ["id", "navbar-toggle-btn", "type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#staticBackdrop", "aria-controls", "staticBackdrop", 1, "btn", "btn-danger", "px-2", "py-0"], [1, "bi", "bi-list", "lead"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["id", "footer", 1, "footer", "bg-dark", "text-secondary", "pt-4", "pb-3"], [1, "row"], [1, "col", "text-center"], [1, "text-center", "mb-2"], ["src", "../assets/img/mcgill_logo_title_white.png", "alt", "McGill ShangpengSun Lab", 1, "logo"], [4, "ngIf"], [1, "col-6", "mt-3"], ["data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn", "btn-sm", "btn-outline-primary", "btn-link", 3, "routerLink"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", "ps-5", "text-dark", 3, "ngClass", "routerLink", "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_8_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Shangpeng Sun ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_li_18_Template, 3, 5, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \xA9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_span_27_Template, 2, 1, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Shangpeng Sun. All rights reserved ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startYear != ctx.currentYear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentYear);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["@font-face {\n  font-family: \"AliPuHui\";\n  src: \"https://dataplatforms.oss-cn-chengdu.aliyuncs.com/font/AlibabaSans-Regular.otf\" format(\"otf\");\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"AliPuHui\", Arial !important;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n.offcanvas[_ngcontent-%COMP%] {\n  height: 32vh;\n}\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  width: auto;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  transition: color 0.2s;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.footer[_ngcontent-%COMP%]   .canada-flag[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 1.7rem;\n  width: auto;\n}\n.selected[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n@media screen and (min-width: 1024px) {\n  .navbar[_ngcontent-%COMP%]   #navbar-toggle-btn[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx1QkFBQTtFQUNBLG1HQUFBO0FDakJKO0FEb0JBO0VBQ0kseUNBQUE7QUNsQko7QURxQkE7RUFDSSxnQ0FBQTtBQ2xCSjtBQ1JBO0VBQ0ksWUFBQTtBRFdKO0FDUEk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBRFVSO0FDUEk7RUFFSSxzQkFBQTtBRFFSO0FDTFk7RUFDSSx5QkFBQTtBRE9oQjtBQ0NJOztFQUVJLGNBQUE7RUFDQSxXQUFBO0FERVI7QUNFQTtFQUNJLHlCQUFBO0FEQ0o7QUNHQTtFQUVRO0lBQ0ksa0JBQUE7RUREVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1jZ2lsbFJlZDogI0ZFMTgwMDtcclxuJHJvY2JsdWU6ICMwMDAyOTU7XHJcbiRib290c3RyYXBPcmFuZ2U6ICNmZDdlMTQ7XHJcbiRib290c3RyYXBZZWxsb3c6ICNmZmMxMDc7XHJcbiRib290c3RyYXBCbHVlOiAjMGQ2ZWZkO1xyXG4kYm9vdHN0cmFwUmVkOiAjZGMzNTQ1O1xyXG4kYm9vdHN0cmFwR3JlZW46ICMxOTg3NTQ7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJGJvb3RzdHJhcEluZm86ICMwZGNhZjA7XHJcbiRib290c3RyYXBQcmltYXJ5OiAjMGQ2ZWZkO1xyXG4kYm9vdHN0cmFwU2Vjb25kYXJ5OiAjNmM3NTdkO1xyXG4kYm9vdHN0cmFwRGFuZ2VyOiAkYm9vdHN0cmFwUmVkO1xyXG4kYm9vdHN0cmFwU3VjY2VzczogJGJvb3RzdHJhcEdyZWVuO1xyXG4kYm9vdHN0cmFwTGlnaHQ6ICNmOGY5ZmE7XHJcbiRib290c3RyYXBXYXJuaW5nOiAkYm9vdHN0cmFwWWVsbG93O1xyXG4kYm9vdHN0cmFwRGFyazogIzIxMjUyOTtcclxuXHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWxpUHVIdWknO1xyXG4gICAgc3JjOiAnaHR0cHM6Ly9kYXRhcGxhdGZvcm1zLm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9mb250L0FsaWJhYmFTYW5zLVJlZ3VsYXIub3RmJyBmb3JtYXQoJ290ZicpO1xyXG59XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkFsaVB1SHVpXCIsIEFyaWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxpUHVIdWlcIjtcbiAgc3JjOiBcImh0dHBzOi8vZGF0YXBsYXRmb3Jtcy5vc3MtY24tY2hlbmdkdS5hbGl5dW5jcy5jb20vZm9udC9BbGliYWJhU2Fucy1SZWd1bGFyLm90ZlwiIGZvcm1hdChcIm90ZlwiKTtcbn1cbioge1xuICBmb250LWZhbWlseTogXCJBbGlQdUh1aVwiLCBBcmlhbCAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5vZmZjYW52YXMge1xuICBoZWlnaHQ6IDMydmg7XG59XG5cbi5uYXZiYXIgLmxvZ28ge1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IGF1dG87XG59XG4ubmF2YmFyIC5uYXYtaXRlbSB7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG4ubmF2YmFyIC5uYXYtaXRlbTpob3ZlciAubmF2LWxpbmsge1xuICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyIC5jYW5hZGEtZmxhZyxcbi5mb290ZXIgLmxvZ28ge1xuICBoZWlnaHQ6IDEuN3JlbTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAubmF2YmFyICNuYXZiYXItdG9nZ2xlLWJ0biB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59IiwiQGltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuLm9mZmNhbnZhcyB7XHJcbiAgICBoZWlnaHQ6IDMydmg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtaXRlbSB7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRib290c3RyYXBEYW5nZXIgICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG5cclxuICAgIC5jYW5hZGEtZmxhZyxcclxuICAgIC5sb2dvIHtcclxuICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiAkYm9vdHN0cmFwRGFuZ2VyICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyDlsY/luZXlsLrlr7jlpKfkuo7nrYnkuo4xMDI0cHjml7bvvIzlr7zoiKrmnaHnmoTkuIvmi4noj5zljZXop6bmjqfmjInpkq7pmpDol49cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgICNuYXZiYXItdG9nZ2xlLWJ0biB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _publications_publications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./publications/publications.component */
    "./src/app/publications/publications.component.ts");
    /* harmony import */


    var _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./teaching/teaching.component */
    "./src/app/teaching/teaching.component.ts");
    /* harmony import */


    var _join_us_join_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./join-us/join-us.component */
    "./src/app/join-us/join-us.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"], _publications_publications_component__WEBPACK_IMPORTED_MODULE_7__["PublicationsComponent"], _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_8__["TeachingComponent"], _join_us_join_us_component__WEBPACK_IMPORTED_MODULE_9__["JoinUsComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"], _publications_publications_component__WEBPACK_IMPORTED_MODULE_7__["PublicationsComponent"], _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_8__["TeachingComponent"], _join_us_join_us_component__WEBPACK_IMPORTED_MODULE_9__["JoinUsComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! bootstrap */
    "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_i_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
      }
    }

    function HomeComponent_i_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 60);
      }
    }

    function HomeComponent_video_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 61);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.currentResearch.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_img_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 62);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.currentResearch.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_i_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_i_34_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.copyEmail("shangpeng.sun@mcgill.ca");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_i_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 64);
      }
    }

    function HomeComponent_tr_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11);
      }
    }

    function HomeComponent_div_69_video_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_69_video_1_Template_video_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.zoomIn(item_r12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r13 = ctx_r19.index;
        var item_r12 = ctx_r19.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "item-" + i_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r12.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_div_69_img_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_69_img_2_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.zoomIn(item_r12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r13 = ctx_r23.index;
        var item_r12 = ctx_r23.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "item-" + i_r13)("src", item_r12.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "me-2": a0
      };
    };

    function HomeComponent_div_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_69_video_1_Template, 2, 2, "video", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_69_img_2_Template, 1, 2, "img", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;
        var i_r13 = ctx.index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, i_r13 != ctx_r7.researchs.length - 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.type == "video");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.type == "img");
      }
    }

    function HomeComponent_div_100_div_7_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_100_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_100_div_7_span_3_Template, 2, 0, "span", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var opportunity_r27 = ctx.$implicit;
        var i_r28 = ctx.index;

        var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", opportunity_r27.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opportunity_r27.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r28 != item_r24.opportunities.length - 1);
      }
    }

    function HomeComponent_div_100_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_100_div_7_Template, 4, 3, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.level);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r24.opportunities);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.isCopyEmail = false;
        this.address = ['21,111 Lakeshore Road', 'Ste-Anne-de-Bellevue', 'QC, H9X 3V9, Canada'];
        this.researchInterests = ['High-throughput plant phenotyping using computer vision and deep learning, etc.', '3D point cloud reconstruction, registration, and segmentation', 'Spatio-temporal variation pattern modeling/predication for crop shoots and roots', 'Multi-source imaging data fusion, such as LiDAR RGB/thermal imagery, and multispectral/hyperspectral imagery.', 'Agricultural robotics and automation'];
        this.currentResearch = {
          title: '',
          url: '',
          type: ''
        };
        this.baseUrl = '';
        this.researchs = [{
          width: 1920,
          height: 1080,
          title: 'CT scanned root system segmentation from growth medium using deep learning',
          type: 'video',
          url: 'https://shangpenglab.s3.us-east-2.amazonaws.com/case4_360_demo_black_18s.mp4'
        }, {
          width: 2160,
          height: 3840,
          title: 'Automated plant monitoring and phenotyping platform',
          type: 'video',
          url: 'https://shangpenglab.s3.us-east-2.amazonaws.com/PXL_20260818_220103470.mp4'
        }, {
          width: 3689,
          height: 1179,
          title: 'Plant shoot segmentation and leaf counting using deep learning',
          type: 'img',
          url: 'https://shangpenglab.s3.us-east-2.amazonaws.com/3D_segmentation.png'
        }, {
          width: 2048,
          height: 1536,
          title: 'Quadruped robotic dog for assisted pollination',
          type: 'video',
          url: 'https://shangpenglab.s3.us-east-2.amazonaws.com/robot_navigation.mp4'
        }, {
          width: 1920,
          height: 1080,
          title: 'Soybean root system segmentation',
          type: 'img',
          url: 'https://shangpenglab.s3.us-east-2.amazonaws.com/soybean_segmentation_skeleton.gif'
        }, {
          width: 1920,
          height: 1080,
          title: 'Occlusion-resilient strawberry fruit counting',
          type: 'video',
          url: 'https://shangpenglab.s3.us-east-2.amazonaws.com/strawberry_demo.mp4'
        }, {
          width: 1280,
          height: 720,
          title: 'CT scan soybean root systems',
          type: 'video',
          url: 'https://shangpenglab.s3.us-east-2.amazonaws.com/CT-scan-soybean.mp4'
        }, {
          width: 1920,
          height: 1080,
          title: '3D canopy reconstruction using LiDAR and GPS',
          type: 'video',
          url: 'https://shangpenglab.oss-us-east-1.aliyuncs.com/research/3d-canopy-reconstruction.mp4'
        }, {
          width: 2560,
          height: 1296,
          title: '3D cotton boll detection',
          type: 'video',
          url: 'https://shangpenglab.oss-us-east-1.aliyuncs.com/research/3d-fruit-detection.mp4'
        }, {
          width: 2542,
          height: 1328,
          title: '3D plant skeleton and node detection',
          type: 'video',
          // type: 'img',
          // url: 'https://shangpenglab.oss-us-east-1.aliyuncs.com/research/3d-plant-skeleton-and-node-detection.gif'
          url: 'https://shangpenglab.oss-us-east-1.aliyuncs.com/research/3d-plant-skeleton-and-node-detection.mp4'
        }, {
          width: 2560,
          height: 1440,
          title: 'Root point cloud using structure from motion',
          type: 'video',
          url: 'https://shangpenglab.oss-us-east-1.aliyuncs.com/research/root.mp4'
        }, {
          width: 1574,
          height: 1080,
          title: 'Infield plant point clouds using a 3D laser scanner',
          type: 'video',
          // type: 'img',
          // url: 'https://shangpenglab.oss-us-east-1.aliyuncs.com/research/pts-in-fields.gif'
          url: 'https://shangpenglab.oss-us-east-1.aliyuncs.com/research/pts-in-fields.mp4'
        }, {
          width: 1024,
          height: 669,
          title: 'Point cloud segmentation and registration',
          type: 'img',
          url: 'https://shangpenglab.oss-us-east-1.aliyuncs.com/research/pt-segmentation.png'
        }];
        this.scholarships = [{
          level: 'PhD',
          opportunities: [{
            title: 'McGill MEDA',
            url: 'https://www.mcgill.ca/engineering/students/graduate-students/funding/meda'
          }, {
            title: 'CSC',
            url: 'https://www.mcgill.ca/gps/funding/international/csc-chinese-students'
          }, {
            title: 'Quebec-China Scholarship',
            url: 'http://www.csc.edu.cn/article/904'
          }, {
            title: 'PBEEE Level 1 Graduate',
            url: 'https://www.mcgill.ca/gps/funding/fac-staff/awards/pbeee'
          }, {
            title: 'Quebec DFW',
            url: 'http://www.csc.edu.cn/chuguo/s/1250'
          }]
        }, {
          level: 'Postdoc',
          opportunities: [{
            title: 'Miatcs Elevate',
            url: 'http://www.mitacs.ca/en/programs/elevate'
          }, {
            title: 'NSERC Banting (best in Canada)',
            url: 'http://banting.fellowships-bourses.gc.ca/en/home-accueil.html'
          }, {
            title: 'NSERC Postdoctoral Fellowship',
            url: 'http://www.nserc-crsng.gc.ca/Students-Etudiants/PD-NP/PDF-BP_eng.asp'
          }, {
            title: 'PBEEE Level 2 Postdoc',
            url: 'https://www.mcgill.ca/gps/funding/international/pbeee'
          }, {
            title: 'CSC',
            url: 'http://www.csc.edu.cn/chuguo/s/1046'
          }]
        }, {
          level: 'Undergraduate',
          opportunities: [{
            title: 'Mitacs Globalink/international',
            url: 'https://www.mitacs.ca/en/programs/globalink/globalink-research-internship'
          }, {
            title: 'NSERC USRA',
            url: 'https://www.mcgill.ca/science/research/ours/nserc'
          }, {
            title: 'McGill SURE',
            url: 'https://www.mcgill.ca/engineering/students/undergraduate/research'
          }]
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
          var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"](tooltipTriggerEl);
          });
          $('html, body').animate({
            scrollTop: 0
          }, 0);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // 计算每一个video或者image的高度，并单独设置
          var h = $('.item-0').height();
          this.researchs.forEach(function (obj, index) {
            $('.item-' + index).css('width', obj.width * h / obj.height);
          });
        } // 打开模态框

      }, {
        key: "zoomIn",
        value: function zoomIn(obj) {
          this.currentResearch = obj;
        } // 关闭模态框

      }, {
        key: "closeResearchModal",
        value: function closeResearchModal() {
          this.currentResearch = {
            title: '',
            url: '',
            type: ''
          };
        }
      }, {
        key: "copyEmail",
        value: function copyEmail(content) {
          var _this2 = this;

          this.isCopyEmail = true;
          setTimeout(function () {
            _this2.isCopyEmail = false;
          }, 1000);
          document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', content);
            e.preventDefault();
            document.removeEventListener('copy', null);
          });
          document.execCommand('copy');
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 101,
      vars: 10,
      consts: [["id", "home", 1, "home", "bg-light", "pb-5"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", "data-bs-backdrop", "static", "data-bs-keyboard", "false", 1, "modal", "fade", "research-modal"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "align-bottom"], ["class", "fs-6 bi bi-card-image ms-2 text-info", 4, "ngIf"], ["class", "fs-6 bi bi-film ms-2 text-primary", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["id", "research-video", "class", "rounded w-100", "controls", "", "type", "video/mp4", 3, "src", 4, "ngIf"], ["id", "research-img", "class", "rounded w-100", 3, "src", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "container"], [1, "row", "justify-content-around"], [1, "col-12", "col-sm-5", "col-lg-3"], ["src", "../../assets/img/shangpeng_sun.jpg", 1, "img-fluid", "rounded", "img-thumbnail", "shadow-sm", "shangpeng-img"], [1, "table", "table-sm", "mt-3", "mb-1", "info-table"], [1, "px-0", "icon-box"], ["src", "../../assets/img/google-logo.png", 2, "height", "1.2rem"], [1, "px-0"], ["href", "https://scholar.google.com/citations?user=HzOdf-IAAAAJ&hl=en", "target", "_blank"], [1, "bi", "bi-envelope-fill"], ["href", "mailto:shangpeng.sun@mcgill.ca"], ["class", "bi bi-files copy-email-icon", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Click to copy", 3, "click", 4, "ngIf"], ["class", "bi bi-check2-square", 4, "ngIf"], [1, "icon-box", "px-0"], [1, "bi", "bi-geo-alt-fill", "me-3"], [1, "px-0", "text-secondary"], [1, "mb-2"], [1, "col-12", "col-sm", "col-lg-8", "text-secondary", "self-introduction"], [1, "fs-4", "fw-bold", "text-dark"], [1, ""], ["href", "https://www.mcgill.ca/", "target", "_blank"], ["href", "https://www.uga.edu/", "target", "_blank"], [1, "px-0", "fw-semibold", "mt-4", "text-dark"], [1, "table", "p-0"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-12", "text-secondary"], [1, "row", "px-0", "mt-4", "justify-content-center"], [1, "col-12", "rounded", "research-box", "px-0", "pb-2"], ["class", "item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-3"], [1, "bi", "bi-arrow-bar-left"], [1, "bi", "bi-mouse2-fill", "mx-1"], [1, "bi", "bi-arrow-bar-right"], [1, "ms-3"], [1, "mt-4", "mb-0", "text-dark", "fs-4", "fw-semibold", "sub-title"], [1, "mt-4", "mb-3", "text-dark", "fw-bold"], [1, "mt-1"], ["href", "https://www.mcgill.ca/gps/funding/international-student-postdoctoral-funding-opportunities/international/csc-chinese-students", "target", "_blank"], ["href", "https://future.mcgill.ca/manage/", "target", "_blank"], ["href", "https://www.mcgill.ca/gradapplicants/programs/bioresource-engineering", "target", "_blank"], [1, "my-3"], [1, "container", "mb-4"], [1, "col", "px-0"], ["class", "opportunities mb-4", 4, "ngFor", "ngForOf"], [1, "fs-6", "bi", "bi-card-image", "ms-2", "text-info"], [1, "fs-6", "bi", "bi-film", "ms-2", "text-primary"], ["id", "research-video", "controls", "", "type", "video/mp4", 1, "rounded", "w-100", 3, "src"], ["id", "research-img", 1, "rounded", "w-100", 3, "src"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Click to copy", 1, "bi", "bi-files", "copy-email-icon", 3, "click"], [1, "bi", "bi-check2-square"], [1, "px-0", "border-0"], [1, "bi", "bi-caret-right-fill", "text-secondary", "me-1"], [1, "item", 3, "ngClass"], ["class", "rounded", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "autoplay", "", "loop", "", "muted", "", 3, "ngClass", "click", 4, "ngIf"], ["class", "rounded", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 3, "ngClass", "src", "click", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "autoplay", "", "loop", "", "muted", "", 1, "rounded", 3, "ngClass", "click"], ["type", "video/mp4", 3, "src"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "rounded", 3, "ngClass", "src", "click"], [1, "opportunities", "mb-4"], [1, "level", "text-secondary", "me-4"], [1, "text-dark", "fw-bold"], [1, "opporunity-box"], ["class", "opporunity", 4, "ngFor", "ngForOf"], [1, "opporunity"], ["target", "_blank", 1, "opporunity", 3, "href"], ["class", "mx-2 text-secondary", 4, "ngIf"], [1, "mx-2", "text-secondary"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_i_7_Template, 1, 0, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_i_8_Template, 1, 0, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_video_11_Template, 1, 1, "video", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_img_12_Template, 1, 1, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_14_listener() {
            return ctx.closeResearchModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Google Scholar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " shangpeng.sun@mcgill.ca ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_i_34_Template, 1, 0, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeComponent_i_35_Template, 1, 0, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "MS1-100, Macdonald-Stewart Building, Macdonald Campus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "21,111 Lakeshore Road Ste-Anne-de-Bellevue QC, H9X 3V9, Canada ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Shangpeng Sun, Ph.D.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Assistant Professor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Department of Bioresource Engineering, McGill University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " I am an Assistant Professor in the Department of Bioresource Engineering at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "McGill University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ". I received my PhD degree from College of Engineering at the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "University of Georgia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ", Athens, USA. My main research interests are to develop and adopt innovative sensing technologies and AI-driven computational methodology for solving challenges in next-generation smart agriculture, improving the production of high-quality food in the face of the rapidly growing human population and global environmental change. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Specifically, my research interests include");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, HomeComponent_tr_63_Template, 5, 1, "tr", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, HomeComponent_div_69_Template, 3, 5, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Scroll horizontally to see more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Recruiting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "For Prospective Students / Postdocs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " I am actively looking for strong and motivated students in the areas of deep learning, computer vision, 3D modeling, ag-robots, and digital agriculture. Also, we welcome ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "CSC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " supported visiting students and professors. If you are interested in my research, please send me an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " with the subject of \u201CProspective PhD/Master student [Your name]\u201D, or apply through the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "McGill Slate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " system and mention me in your application. Due to the large volume of emails, I apologize for not replying to individual inquiries I have received. Please visit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " for detailed information for your applications. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Scholarship opportunities :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, HomeComponent_div_100_Template, 8, 2, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentResearch.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentResearch.type == "img");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentResearch.type == "video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentResearch.type == "video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentResearch.type == "img");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCopyEmail == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCopyEmail == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.researchInterests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.researchs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scholarships);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"AliPuHui\";\n  src: \"https://dataplatforms.oss-cn-chengdu.aliyuncs.com/font/AlibabaSans-Regular.otf\" format(\"otf\");\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"AliPuHui\", Arial !important;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n.home[_ngcontent-%COMP%] {\n  padding: 7.5rem 0rem 6rem;\n}\n.home[_ngcontent-%COMP%]   .info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n}\n.home[_ngcontent-%COMP%]   .info-table[_ngcontent-%COMP%]   .copy-email-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.home[_ngcontent-%COMP%]   .research-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.home[_ngcontent-%COMP%]   .research-box[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 15rem;\n  \n  flex: auto;\n}\n.home[_ngcontent-%COMP%]   .research-box[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   .research-box[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.home[_ngcontent-%COMP%]   .research-box[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .home[_ngcontent-%COMP%]   .research-box[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.home[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  border-left: solid 0.5rem #FE1800;\n  padding: 0.2rem 0rem;\n  padding-left: 0.8rem;\n  margin-bottom: 0.7rem !important;\n}\n.home[_ngcontent-%COMP%]   .opportunities[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.home[_ngcontent-%COMP%]   .opportunities[_ngcontent-%COMP%]   .opporunity-box[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.home[_ngcontent-%COMP%]   .opportunities[_ngcontent-%COMP%]   .opporunity-box[_ngcontent-%COMP%]   .opporunity[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.home[_ngcontent-%COMP%]   .opportunities[_ngcontent-%COMP%]   .opporunity-box[_ngcontent-%COMP%]   .opporunity[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: solid 1px #0D6EFD;\n}\n@media screen and (max-width: 1024px) {\n  .opportunities[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n    width: 95%;\n    display: block;\n  }\n  .opportunities[_ngcontent-%COMP%]   .opporunity-box[_ngcontent-%COMP%] {\n    display: block;\n    width: 95%;\n  }\n  .opportunities[_ngcontent-%COMP%]   .opporunity-box[_ngcontent-%COMP%]   .opporunity[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3poeGgvRG9jdW1lbnRzL0RvY3VtZW50cy9EZXZlbG9wbWVudHMvU2hhbmdwZW5nTGFiL1Byb2plY3Qvc2hhbmdwZW5nbGFiL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNrQmhCO0VBQ0ksdUJBQUE7RUFDQSxtR0FBQTtBRGhCSjtBQ21CQTtFQUNJLHlDQUFBO0FEakJKO0FDb0JBO0VBQ0ksZ0NBQUE7QURqQko7QUVUQTtFQUNJLHlCQUFBO0FGWUo7QUVKUTtFQUNJLFlBQUE7QUZNWjtBRUZZO0VBQ0ksZUFBQTtBRkloQjtBRUlJO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUZIUjtBRU9RO0VBQ0ksb0JBQUE7RUFDQSxhQWZNO0VBZ0JOOzs7R0FBQTtFQUtBLFVBQUE7QUZOWjtBRVFZOztFQUVJLHlCQUFBO0FGTmhCO0FFUWdCOztFQUNJLGVBQUE7QUZMcEI7QUVXSTtFQUNJLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FGVFI7QUVhUTtFQUNJLHFCQUFBO0FGWFo7QUVjUTtFQUNJLHFCQUFBO0FGWlo7QUVjWTtFQUNJLHFCQUFBO0FGWmhCO0FFZW9CO0VBQ0ksZ0NBQUE7QUZieEI7QUV1QkE7RUFFUTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VGckJWO0VFd0JNO0lBQ0ksY0FBQTtJQUNBLFVBQUE7RUZ0QlY7RUV3QlU7SUFDSSxxQkFBQTtFRnRCZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsaVB1SHVpXCI7XG4gIHNyYzogXCJodHRwczovL2RhdGFwbGF0Zm9ybXMub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2ZvbnQvQWxpYmFiYVNhbnMtUmVndWxhci5vdGZcIiBmb3JtYXQoXCJvdGZcIik7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxpUHVIdWlcIiwgQXJpYWwgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaG9tZSB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwcmVtIDZyZW07XG59XG4uaG9tZSAuaW5mby10YWJsZSB0ZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ob21lIC5pbmZvLXRhYmxlIC5jb3B5LWVtYWlsLWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZSAucmVzZWFyY2gtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuLmhvbWUgLnJlc2VhcmNoLWJveCAuaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBoZWlnaHQ6IDE1cmVtO1xuICAvKipcbiAgICog5Zyo54Gr54uQ6YeM5b+F6aG75piO56Gu6K6+572u5a695bqm77yM5ZCm5YiZ5Lya5Y2g5ruhIDEwMCVcbiAgICog5q+P5LiA5Liq6KeG6aKR5oiW6ICF5Zu+54mH55qE6auY5bqm5ZyoIEphdmFTY3JpcHTph4zov5vooYzorqHnrpfvvIzlubborr7nva5jc3PlsZ7mgKdcbiAgKi9cbiAgZmxleDogYXV0bztcbn1cbi5ob21lIC5yZXNlYXJjaC1ib3ggLml0ZW0gaW1nLFxuLmhvbWUgLnJlc2VhcmNoLWJveCAuaXRlbSB2aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uaG9tZSAucmVzZWFyY2gtYm94IC5pdGVtIGltZzpob3Zlcixcbi5ob21lIC5yZXNlYXJjaC1ib3ggLml0ZW0gdmlkZW86aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZSAuc3ViLXRpdGxlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXJlbSAjRkUxODAwO1xuICBwYWRkaW5nOiAwLjJyZW0gMHJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbSAhaW1wb3J0YW50O1xufVxuLmhvbWUgLm9wcG9ydHVuaXRpZXMgLmxldmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhvbWUgLm9wcG9ydHVuaXRpZXMgLm9wcG9ydW5pdHktYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhvbWUgLm9wcG9ydHVuaXRpZXMgLm9wcG9ydW5pdHktYm94IC5vcHBvcnVuaXR5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhvbWUgLm9wcG9ydHVuaXRpZXMgLm9wcG9ydW5pdHktYm94IC5vcHBvcnVuaXR5IGE6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzBENkVGRDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5vcHBvcnR1bml0aWVzIC5sZXZlbCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAub3Bwb3J0dW5pdGllcyAub3Bwb3J1bml0eS1ib3gge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbiAgLm9wcG9ydHVuaXRpZXMgLm9wcG9ydW5pdHktYm94IC5vcHBvcnVuaXR5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn0iLCIkbWNnaWxsUmVkOiAjRkUxODAwO1xyXG4kcm9jYmx1ZTogIzAwMDI5NTtcclxuJGJvb3RzdHJhcE9yYW5nZTogI2ZkN2UxNDtcclxuJGJvb3RzdHJhcFllbGxvdzogI2ZmYzEwNztcclxuJGJvb3RzdHJhcEJsdWU6ICMwZDZlZmQ7XHJcbiRib290c3RyYXBSZWQ6ICNkYzM1NDU7XHJcbiRib290c3RyYXBHcmVlbjogIzE5ODc1NDtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kYm9vdHN0cmFwSW5mbzogIzBkY2FmMDtcclxuJGJvb3RzdHJhcFByaW1hcnk6ICMwZDZlZmQ7XHJcbiRib290c3RyYXBTZWNvbmRhcnk6ICM2Yzc1N2Q7XHJcbiRib290c3RyYXBEYW5nZXI6ICRib290c3RyYXBSZWQ7XHJcbiRib290c3RyYXBTdWNjZXNzOiAkYm9vdHN0cmFwR3JlZW47XHJcbiRib290c3RyYXBMaWdodDogI2Y4ZjlmYTtcclxuJGJvb3RzdHJhcFdhcm5pbmc6ICRib290c3RyYXBZZWxsb3c7XHJcbiRib290c3RyYXBEYXJrOiAjMjEyNTI5O1xyXG5cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbGlQdUh1aSc7XHJcbiAgICBzcmM6ICdodHRwczovL2RhdGFwbGF0Zm9ybXMub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2ZvbnQvQWxpYmFiYVNhbnMtUmVndWxhci5vdGYnIGZvcm1hdCgnb3RmJyk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQWxpUHVIdWlcIiwgQXJpYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufSIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbi5ob21lIHtcclxuICAgIHBhZGRpbmc6IDcuNXJlbSAwcmVtIDZyZW07XHJcblxyXG4gICAgLnNoYW5ncGVuZy1pbWcge1xyXG4gICAgICAgIC8vIGhlaWdodDogMTVyZW07XHJcbiAgICAgICAgLy8gd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tdGFibGUge1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvcHktZW1haWwtaWNvbiB7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICR2aWRlb0hlaWdodDogMTVyZW07XHJcblxyXG4gICAgLy8g5YyF6KO55omA5pyJdmlkZW/miJZpbWfnmoTniLZkaXZcclxuICAgIC5yZXNlYXJjaC1ib3gge1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuXHJcblxyXG4gICAgICAgIC8vIHZpZGVvIOaIluiAhSBpbWFnZSDmoIfnrb5cclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR2aWRlb0hlaWdodDtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWcqOeBq+eLkOmHjOW/hemhu+aYjuehruiuvue9ruWuveW6pu+8jOWQpuWImeS8muWNoOa7oSAxMDAlXHJcbiAgICAgICAgICAgICAqIOavj+S4gOS4quinhumikeaIluiAheWbvueJh+eahOmrmOW6puWcqCBKYXZhU2NyaXB06YeM6L+b6KGM6K6h566X77yM5bm26K6+572uY3Nz5bGe5oCnXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBpbWcsXHJcbiAgICAgICAgICAgIHZpZGVvIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdWItdGl0bGUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAuNXJlbSAkbWNnaWxsUmVkO1xyXG4gICAgICAgIHBhZGRpbmc6IC4ycmVtIDByZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuOHJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5vcHBvcnR1bml0aWVzIHtcclxuICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3Bwb3J1bml0eS1ib3gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAub3Bwb3J1bml0eSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMEQ2RUZEO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHNjcmVlbiB3aWR0aCA8PSAxMDI0cHhcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcclxuICAgIC5vcHBvcnR1bml0aWVzIHtcclxuICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vcHBvcnVuaXR5LWJveCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG5cclxuICAgICAgICAgICAgLm9wcG9ydW5pdHkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/join-us/join-us.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/join-us/join-us.component.ts ***!
    \**********************************************/

  /*! exports provided: JoinUsComponent */

  /***/
  function srcAppJoinUsJoinUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinUsComponent", function () {
      return JoinUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JoinUsComponent = /*#__PURE__*/function () {
      function JoinUsComponent() {
        _classCallCheck(this, JoinUsComponent);
      }

      _createClass(JoinUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JoinUsComponent;
    }();

    JoinUsComponent.ɵfac = function JoinUsComponent_Factory(t) {
      return new (t || JoinUsComponent)();
    };

    JoinUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JoinUsComponent,
      selectors: [["app-join-us"]],
      decls: 12,
      vars: 0,
      consts: [["id", "join-us", 1, "join-us", "bg-light"], [1, "container"], [1, "row", "mt-3"], [1, "col-12"], [1, "fw-bold", "title", "ps-3", "display-5"], [1, "row", "mt-4", "align-items-center", "justify-content-between"], [1, "col-12", "mb-4", "col-md-6"], ["src", "assets/img/P2360081.JPG", 1, "img-fluid", "shadow"], [1, "col-12", "mb-4", "col-md-5"], [1, "fs-3"]],
      template: function JoinUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Join Us !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " We are actively recruiting self-motivated Master's and PhD students, postdoctoral researchers, and research interns with a strong background in plant phenotyping, agricultural robotics, machine learning, and AI in agriculture. If interested, please send an email with the subject line: 'Prospective [Position] \u2013 [Your Name]'. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@font-face {\n  font-family: \"AliPuHui\";\n  src: \"https://dataplatforms.oss-cn-chengdu.aliyuncs.com/font/AlibabaSans-Regular.otf\" format(\"otf\");\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"AliPuHui\", Arial !important;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n.join-us[_ngcontent-%COMP%] {\n  padding: 6rem 0rem;\n  display: block;\n}\n.join-us[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  border-left: solid 0.5rem #FE1800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2pvaW4tdXMvam9pbi11cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvYXBwL2pvaW4tdXMvam9pbi11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx1QkFBQTtFQUNBLG1HQUFBO0FDakJKO0FEb0JBO0VBQ0kseUNBQUE7QUNsQko7QURxQkE7RUFDSSxnQ0FBQTtBQ2xCSjtBQ1JBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FEV0o7QUNUSTtFQUNJLGlDQUFBO0FEV1IiLCJmaWxlIjoic3JjL2FwcC9qb2luLXVzL2pvaW4tdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWNnaWxsUmVkOiAjRkUxODAwO1xyXG4kcm9jYmx1ZTogIzAwMDI5NTtcclxuJGJvb3RzdHJhcE9yYW5nZTogI2ZkN2UxNDtcclxuJGJvb3RzdHJhcFllbGxvdzogI2ZmYzEwNztcclxuJGJvb3RzdHJhcEJsdWU6ICMwZDZlZmQ7XHJcbiRib290c3RyYXBSZWQ6ICNkYzM1NDU7XHJcbiRib290c3RyYXBHcmVlbjogIzE5ODc1NDtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kYm9vdHN0cmFwSW5mbzogIzBkY2FmMDtcclxuJGJvb3RzdHJhcFByaW1hcnk6ICMwZDZlZmQ7XHJcbiRib290c3RyYXBTZWNvbmRhcnk6ICM2Yzc1N2Q7XHJcbiRib290c3RyYXBEYW5nZXI6ICRib290c3RyYXBSZWQ7XHJcbiRib290c3RyYXBTdWNjZXNzOiAkYm9vdHN0cmFwR3JlZW47XHJcbiRib290c3RyYXBMaWdodDogI2Y4ZjlmYTtcclxuJGJvb3RzdHJhcFdhcm5pbmc6ICRib290c3RyYXBZZWxsb3c7XHJcbiRib290c3RyYXBEYXJrOiAjMjEyNTI5O1xyXG5cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbGlQdUh1aSc7XHJcbiAgICBzcmM6ICdodHRwczovL2RhdGFwbGF0Zm9ybXMub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2ZvbnQvQWxpYmFiYVNhbnMtUmVndWxhci5vdGYnIGZvcm1hdCgnb3RmJyk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQWxpUHVIdWlcIiwgQXJpYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbGlQdUh1aVwiO1xuICBzcmM6IFwiaHR0cHM6Ly9kYXRhcGxhdGZvcm1zLm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9mb250L0FsaWJhYmFTYW5zLVJlZ3VsYXIub3RmXCIgZm9ybWF0KFwib3RmXCIpO1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsaVB1SHVpXCIsIEFyaWFsICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmpvaW4tdXMge1xuICBwYWRkaW5nOiA2cmVtIDByZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmpvaW4tdXMgLnRpdGxlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXJlbSAjRkUxODAwO1xufSIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbi5qb2luLXVzIHtcclxuICAgIHBhZGRpbmc6IDZyZW0gMHJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIC41cmVtICRtY2dpbGxSZWQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjM5MXB4KSB7XHJcbi8vICAgICAuam9pbi11cyB7XHJcbi8vICAgICAgICAgcGFkZGluZzogNnJlbSAwcmVtO1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgIGhlaWdodDogODh2aDtcclxuLy8gICAgICAgICBtYXgtaGVpZ2h0OiA4OHZoO1xyXG4vLyAgICAgfVxyXG4vLyB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-join-us',
          templateUrl: './join-us.component.html',
          styleUrls: ['./join-us.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news/news.component.ts":
  /*!****************************************!*\
    !*** ./src/app/news/news.component.ts ***!
    \****************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewsComponent_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var news_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", news_r4, " ");
      }
    }

    function NewsComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewsComponent_div_7_div_3_Template, 3, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.list);
      }
    }

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent() {
        _classCallCheck(this, NewsComponent);

        this.newsList = [{
          date: '2025-9',
          list: ["Xuehai Zhou\u2019s paper, \u201C3D skeletonization and phenotyping for soybean root system architecture using a bio-inspired algorithm,\u201D has been published in Computers and Electronics in Agriculture."]
        }, {
          date: '2025-9',
          list: ["Alice Liang\u2019s project, titled \u201CBuilding a Diverse Plant Dataset for Modelling Plant\u2013Environment Interactions through Visual Simulations,\u201D won 1st place in the Undergraduate Student Research Awards (USRA)."]
        }, {
          date: '2025-7',
          list: ["Mohamed\u2019s paper, \u201CPredictive Modeling, Pattern Recognition, and Spatiotemporal Representations of Plant Growth in Simulated and Controlled Environments: A Comprehensive Review,\u201D has been published in Plant Phenomics."]
        }, {
          date: '2025-7',
          list: ["Yu Tian was honoured with two awards at ASABE - American Society of Agricultural and Biological Engineers 2025 for the paper \"Soybean-PCMAE: Perturbation Consistent Masked Autoencoders for Few-shot Segmentation of 3D Soybean Point Clouds\": \n        \n \uD83C\uDFC6 Information Technology, Sensors, and Control Systems (ITSC) Technical Community Paper Award and \n        \n \uD83C\uDFC6 Outstanding Student Paper Award from the Association of Overseas Chinese Agricultural, Biological, and Food Engineers (AOC)."]
        }, {
          date: '2025-4',
          list: ["Xuehai Zhou has been awarded the FRQNT Doctoral Research Scholarship, totaling $91,667 over four years. Congratulation!"]
        }, {
          date: '2024-11',
          list: ["Dr. Sun received McCAIS Interdisciplinary Research Development Award 2024. Congratulations!"]
        }, {
          date: '2024-10',
          list: ["Zhouzhou's Paper \"Characterising vibration patterns of winter jujube trees to optimise automated fruit harvesting\" has been published on Biosystems Engineering."]
        }, {
          date: '2024-9',
          list: ['We are excited to welcome two new PhD students to our lab this Fall semester, 2024: Liuyi He and Weitong Wang. Welcome aboard!']
        }, {
          date: '2024-9',
          list: ['Starting this Fall semester, 2024, we are pleased to welcome two new Master\'s students to our lab: Nazia Hossain and Sabid Hasan. Welcome!']
        }, {
          date: '2024-7',
          list: ['Welcome, Yu Tian, to our team! Your expertise in point cloud analysis and deep learning for plant phenotyping will greatly enhance our research. We look forward to your innovative contributions and fresh perspectives!']
        }, {
          date: '2024-6',
          list: ['Congratulations! Xuehai\'s paper "Advancing tracking-by-detection with MultiMap: Towards occlusion-resilient online multiclass strawberry counting" has been accepted by Expert Systems with Applications. Well done!']
        }, {
          date: '2024-4',
          list: ['Zhouzhou\'s paper titled "A novel jujube tree trunk and branch salient object detection method for catch-and-shake robotic visual perception" has been accepted by Expert Systems with Application. Congratulations!']
        }, {
          date: '2023-12',
          list: ['Welcome, Zhouzhou, to our team; your passion for computer vision, deep learning, and agricultural robotics promises to bring fresh perspectives to our fruit harvesting projects!']
        }, {
          date: '2023-11',
          list: ['Welcome, Yixue, to our lab, where your expertise in computer vision and UAV remote sensing for plant phenotyping will surely inspire us all!']
        }, {
          date: '2023-7',
          list: ['Liyi\'s paper titled "Eff-3DPSeg: 3D organ-level plant shoot segmentation using annotation-efficient deep learning" has been accepted by Plant Phenomics. Congratulations!']
        }, {
          date: '2023-6',
          list: ['Welcome Dr. Rui Kang to our lab! We look forward to his new frontiers in hyperspectral imaging and agricultural robotics.']
        }, {
          date: '2023-5',
          list: ['Xuehai’s paper “A dynamic object counting method for strawberry fruits using vision transformer networks and kalman filter tracking” was chosen for an ITSC Technical Community Meeting Paper Award in ASABE 2023. Congratulations!', 'Yu’s paper "PEAMATL: A strategy for developing near-infrared spectral prediction models under domain shift using self-supervised transfer learning" has been published by IEEE Transactions on Instrumentation and Measurement. Congratulations!']
        }, {
          date: '2023-1',
          list: ['Welcome Xuehai Zhou and Kunwei Sun to our lab! We look forward to their contributions and success in their research endeavors.']
        }, {
          date: '2022-12',
          list: ['Mohamed Debbagh joins our lab as a PhD student (co-supervise with Prof. Mark Lefsrud). Welcome new member!', 'Yu’s paper "Rapid determination of the roasting degree of cocoa beans by extreme learning machine (ELM)-based imaging analysis" is accepted by the Journal of Agriculture and Food Research. Congratulations!', 'Yu’s paper "An improved DEtection TRansformer deep learning network for multi-size peach detection using an RGB-D camera in orchards" is accepted by the journal of Intelligent Data Analysis. Congratulations!']
        }, {
          date: '2022-08',
          list: ['Xintong received Clifford C.F. Wong Fellowship for the 2022-2023 academic year (estimated value $20,000).  Congratulations!', 'Liyi received the Oral Presentation Award within Information Technology, Sensors, and Control (ITSC) Systems technical community for his paper entitled, “An annotation-efficient 3D deep learning network for plant shoot segmentation using point clouds” in ASABE 2022.  Congratulations!', 'Yu’s paper "Predictions of multiple food quality parameters using near-infrared spectroscopy with a novel multi-task genetic programming approach" is accepted by the journal of Food Control. Congratulations!']
        }];
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsComponent;
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)();
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 8,
      vars: 1,
      consts: [["id", "news", 1, "news", "bg-light"], [1, "container"], [1, "row", "mt-3"], [1, "col-12"], [1, "fw-bold", "title", "ps-3", "display-5"], [1, "row", "mt-5"], ["class", "col-12 mb-4", 4, "ngFor", "ngForOf"], [1, "col-12", "mb-4"], [1, "text-secondary", "news-date", "pb-2", "mb-3"], ["class", "card border-0 mb-3 shadow-sm lead", 4, "ngFor", "ngForOf"], [1, "card", "border-0", "mb-3", "shadow-sm", "lead"], [1, "card-body"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewsComponent_div_7_Template, 4, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newsList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["@font-face {\n  font-family: \"AliPuHui\";\n  src: \"https://dataplatforms.oss-cn-chengdu.aliyuncs.com/font/AlibabaSans-Regular.otf\" format(\"otf\");\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"AliPuHui\", Arial !important;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n.news[_ngcontent-%COMP%] {\n  padding: 6rem 0rem;\n}\n.news[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  border-left: solid 0.5rem #FE1800;\n}\n.news[_ngcontent-%COMP%]   .news-date[_ngcontent-%COMP%] {\n  border-bottom: solid 0.2rem #FE1800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx1QkFBQTtFQUNBLG1HQUFBO0FDakJKO0FEb0JBO0VBQ0kseUNBQUE7QUNsQko7QURxQkE7RUFDSSxnQ0FBQTtBQ2xCSjtBQ1JBO0VBQ0ksa0JBQUE7QURXSjtBQ1RJO0VBQ0ksaUNBQUE7QURXUjtBQ1JJO0VBQ0ksbUNBQUE7QURVUiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtY2dpbGxSZWQ6ICNGRTE4MDA7XHJcbiRyb2NibHVlOiAjMDAwMjk1O1xyXG4kYm9vdHN0cmFwT3JhbmdlOiAjZmQ3ZTE0O1xyXG4kYm9vdHN0cmFwWWVsbG93OiAjZmZjMTA3O1xyXG4kYm9vdHN0cmFwQmx1ZTogIzBkNmVmZDtcclxuJGJvb3RzdHJhcFJlZDogI2RjMzU0NTtcclxuJGJvb3RzdHJhcEdyZWVuOiAjMTk4NzU0O1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRib290c3RyYXBJbmZvOiAjMGRjYWYwO1xyXG4kYm9vdHN0cmFwUHJpbWFyeTogIzBkNmVmZDtcclxuJGJvb3RzdHJhcFNlY29uZGFyeTogIzZjNzU3ZDtcclxuJGJvb3RzdHJhcERhbmdlcjogJGJvb3RzdHJhcFJlZDtcclxuJGJvb3RzdHJhcFN1Y2Nlc3M6ICRib290c3RyYXBHcmVlbjtcclxuJGJvb3RzdHJhcExpZ2h0OiAjZjhmOWZhO1xyXG4kYm9vdHN0cmFwV2FybmluZzogJGJvb3RzdHJhcFllbGxvdztcclxuJGJvb3RzdHJhcERhcms6ICMyMTI1Mjk7XHJcblxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FsaVB1SHVpJztcclxuICAgIHNyYzogJ2h0dHBzOi8vZGF0YXBsYXRmb3Jtcy5vc3MtY24tY2hlbmdkdS5hbGl5dW5jcy5jb20vZm9udC9BbGliYWJhU2Fucy1SZWd1bGFyLm90ZicgZm9ybWF0KCdvdGYnKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogXCJBbGlQdUh1aVwiLCBBcmlhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsaVB1SHVpXCI7XG4gIHNyYzogXCJodHRwczovL2RhdGFwbGF0Zm9ybXMub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2ZvbnQvQWxpYmFiYVNhbnMtUmVndWxhci5vdGZcIiBmb3JtYXQoXCJvdGZcIik7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxpUHVIdWlcIiwgQXJpYWwgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmV3cyB7XG4gIHBhZGRpbmc6IDZyZW0gMHJlbTtcbn1cbi5uZXdzIC50aXRsZSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAwLjVyZW0gI0ZFMTgwMDtcbn1cbi5uZXdzIC5uZXdzLWRhdGUge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJyZW0gI0ZFMTgwMDtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4ubmV3cyB7XHJcbiAgICBwYWRkaW5nOiA2cmVtIDByZW07XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgLjVyZW0gJG1jZ2lsbFJlZDtcclxuICAgIH1cclxuXHJcbiAgICAubmV3cy1kYXRlIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAuMnJlbSAkbWNnaWxsUmVkO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/publications/publications.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/publications/publications.component.ts ***!
    \********************************************************/

  /*! exports provided: PublicationsComponent */

  /***/
  function srcAppPublicationsPublicationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function () {
      return PublicationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PublicationsComponent_tr_29_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
      }
    }

    function PublicationsComponent_tr_29_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r3.detailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
      }
    }

    function PublicationsComponent_tr_29_i_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
      }
    }

    function PublicationsComponent_tr_29_a_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Article");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r3.viewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PublicationsComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PublicationsComponent_tr_29_span_5_Template, 2, 1, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PublicationsComponent_tr_29_a_6_Template, 2, 2, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PublicationsComponent_tr_29_i_13_Template, 1, 0, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PublicationsComponent_tr_29_a_20_Template, 2, 1, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.journalPapers.length - i_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.detailUrl == "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.detailUrl != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.authors, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.journal != "" && item_r3.conference != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.journal, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.book);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.date, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.viewUrl != "");
      }
    }

    function PublicationsComponent_tr_42_i_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
      }
    }

    function PublicationsComponent_tr_42_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.award, " ");
      }
    }

    function PublicationsComponent_tr_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PublicationsComponent_tr_42_i_11_Template, 1, 0, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View Article");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PublicationsComponent_tr_42_div_21_Template, 3, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;
        var i_r13 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.conferencePapers.length - i_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r12.detailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.authors, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.journal != "" && item_r12.conference != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.conference);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.date, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r12.viewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.award);
      }
    }

    function PublicationsComponent_tr_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r17 = ctx.$implicit;
        var i_r18 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r18 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17);
      }
    }

    var PublicationsComponent = /*#__PURE__*/function () {
      function PublicationsComponent() {
        _classCallCheck(this, PublicationsComponent);

        this.papers = {
          submitted: ['Yang, Y*; Sun, S, Tan, J. (2022). Rapid Determination of the Roasting Degree of Cocoa Beans by Extreme Learning Machine (ELM)-based Imaging Analysis. Journal of food engineering. Submitted', 'Saeed, F; Sun, S; Snider, J; Liu, T; Li, C. (2022).Point - and voxel - based 3D deep learning for plant part segmentation and architectural trait extraction.IEEE Transactions on Geoscience and Remote Sensing.Submitted.', 'Yang, Y *; Wang, X; Liu, Z; Huang, M; Sun, S; Zhu Q. (2022).An improved DEtection TRansformer deep learning network for multi - size peach detection using an RGB - D camera in orchards.neural computing and applications.Submitted.', 'Ahmad, Z; Fearns, P; Lu, B; Fountas, S; Zare, M; Schirrmann, M; Jimenez - Berni, J; Siłuch, M; Sun, S; Nussbaum, M. (2022).Precision irrigation methods for high water use efficiency: Advances, Challenges and Forecast.Computers and Electronics in Agriculture.Submitted', 'Yang, Y *; Sun, S; Pan, L; Huang, M; Zhu, Q. (2022).Predictions of multiple food quality parameters using near - infrared spectroscopy with a novel multi - task genetic programming approach.Food Control.Submitted.'],
          publicated: [{
            title: '3D skeletonization and phenotyping for soybean root system architecture using a bio-inspired algorithm',
            viewUrl: '',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S0168169925009962',
            authors: 'Xuehai Zhou, Tianzi Yang, Rui Xu, Alexander Bucksch, Pierre Dutilleul, Davoud Torkamaneh, Shangpeng Sun',
            publisher: '',
            date: '2025',
            journal: 'Computers and Electronics in Agriculture',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Predictive Modeling, Pattern Recognition, and Spatiotemporal Representations of Plant Growth in Simulated and Controlled Environments: A Comprehensive Review',
            viewUrl: '',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S2643651525000950',
            authors: 'Mohamed Debbagh, Shangpeng Sun, Mark Lefsrud',
            publisher: '',
            date: '2025',
            journal: 'Plant Phenomics',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Augmented reality for food quality assessment: Bridging the physical and digital worlds',
            viewUrl: '',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S0260877423004910?casa_token=ZkKifHWJrQkAAAAA:vm-02U6_PoytzOu5kdwqBdH-Ecu_fHKqgMtPaH_vTAEgBXfUcxmIQwP8_k_MCdDOXxxNTwLD6A',
            authors: 'Jacob Tizhe Liberty, Shangpeng Sun, Christopher Kucha, Akinbode A. Adedeji, Gbabo Agidi, Michael O. Ngadi',
            publisher: '',
            date: '2024',
            journal: 'Journal of Food Engineering',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: '3D-GhostNet: A novel spatial-spectral algorithm to improve foodborne bacteria classification coupled with hyperspectral microscopic imaging technology',
            viewUrl: '',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S0925400524004350',
            authors: 'Rui Kang, Shangpeng Sun, Qin Ouyang, Jiaxing Huang, Bosoon Park',
            publisher: '',
            date: '2024',
            journal: 'Sensors and Actuators B: Chemical',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'A Novel Jujube Tree Trunk and Branch Salient Object Detection Method for Catch-and-Shake Robotic Visual Perception',
            viewUrl: '',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S0957417424008881',
            authors: 'Zhouzhou Zheng, Jianxin Dong, Yixue Liu, Yichen Qiao, Shangpeng Sun, Yuxiang Huang',
            publisher: '',
            date: '2024',
            journal: 'Expert Systems with Applications',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Towards Real Scenery: A Light-weight Tomato Growth Inspection Algorithm for Leaf Disease Detection and Fruit Counting',
            viewUrl: '',
            detailUrl: 'https://spj.science.org/doi/full/10.34133/plantphenomics.0174',
            authors: 'Rui Kang, Jiaxin Huang, Xuehai Zhou, Ni Ren, Shangpeng Sun',
            publisher: '',
            date: '2024',
            journal: 'Plant Phenomics',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Advancing tracking-by-detection with MultiMap: Towards occlusion-resilient online multiclass strawberry counting',
            viewUrl: '',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S0957417424014544',
            authors: 'Xuehai Zhou, Yuyang Zhang, Xintong Jiang, Kashif Riaz, Phil Rosenbaum, Mark Lefsrud, Shangpeng Sun',
            publisher: '',
            date: '2024',
            journal: 'Expert Systems with Applications',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Exploring Vibration Characteristics of Winter Jujube Trees for Jujube Fruit Harvesting (under review)',
            viewUrl: '',
            detailUrl: '',
            authors: 'Zhouzhou Zheng, Jianxin Dong, Yixue Liu, Yichen Qiao, Shangpeng Sun, Yuxiang Huang',
            publisher: '',
            date: '2024',
            journal: 'Biosystem Engineering',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Graph-Transformer with Spatial-Spectral Features Fusion for Hyperspectral Image Classification (under review)',
            viewUrl: '',
            detailUrl: '',
            authors: 'Zhouzhou Zheng, Yixue Liu, Xintong Jiang, Mohamed Debbagh, Xuehai Zhou, Shangpeng Sun, Yuxiang Huang',
            publisher: '',
            date: '2024',
            journal: 'IEEE Transactions on Geoscience and Remote Sensing',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Spinach Yield Mapping Using Multispectral UAV Imagery',
            viewUrl: '',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S2772375523002162',
            authors: 'X Jiang, S Sun, V Adamchuk, G Weisman, P Ramsay, AR Rincon',
            publisher: '',
            date: '2023',
            journal: 'Smart Agricultural Technology',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'A dynamic object counting method for strawberry fruits using vision transformer networks and kalman filter tracking',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tyNAkb4AAAAJ&citation_for_view=tyNAkb4AAAAJ:u-x6o8ySG0sC',
            detailUrl: 'https://elibrary.asabe.org/abstract.asp?aid=54240',
            authors: 'Xuehai Zhou, Yuyang Zhang, Shangpeng Sun, Phil Rosenbaum',
            date: '2023',
            conference: '2023 ASABE Annual International Meeting',
            award: 'ITSC paper award',
            volume: '0',
            issue: '0',
            pages: '1',
            publisher: 'American Society of Agricultural and Biological Engineers',
            citedBy: 0
          }, {
            title: 'Eff-3DPSeg: 3D organ-level plant shoot segmentation using annotation-efficient point clouds',
            viewUrl: '',
            detailUrl: 'https://spj.science.org/doi/10.34133/plantphenomics.0080',
            authors: 'L Luo, X Jiang, Y Yang, ERA Samy, M Lefsrud, V Hoyos-Villegas, S Sun',
            publisher: '',
            date: '2023',
            journal: 'Plant phenomics',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'PEAMATL: A strategy for developing near-infrared spectral prediction models under domain shift using self-supervised transfer learning',
            viewUrl: '',
            detailUrl: 'https://ieeexplore.ieee.org/abstract/document/10121191?casa_token=_7PgpmY9uqgAAAAA:btWZBeHz_LMQ_gkmvZGswlbcrH4CMhcOT6F_vQFc4bI32csR3tZlp3O_BKl246UONTby4IlsNQ',
            authors: 'Yu Yang, Shangpeng Sun, Min Huang, and Qibing Zhu',
            publisher: '',
            date: '2023',
            journal: 'IEEE Transactions on Instrumentation and Measurement',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Rapid determination of the roasting degree of cocoa beans by extreme learning machine (ELM)-based imaging analysis',
            viewUrl: '',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S2666154322001703',
            authors: 'Yu Yang, Ahmed G. Darwish, Islam El-Sharkawy, Qibing Zhu, Shangpeng Sun, and Juzhong Tan',
            publisher: '',
            date: '2022',
            journal: 'Journal of Agriculture and Food Research',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Cotton plant part 3D segmentation and architectural trait extraction using point voxel convolutional neural networks',
            viewUrl: '',
            detailUrl: 'https://plantmethods.biomedcentral.com/articles/10.1186/s13007-023-00996-1',
            authors: 'Farah Saeed, Shangpeng Sun, Javier Rodriguez‑Sanchez, John Snider, Tianming Liu and Changying Li',
            publisher: '',
            date: '2023',
            journal: 'Plant Methods',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'An improved DEtection TRansformer deep learning network for multi-size peach detection using an RGB-D camera in orchards (accepted)',
            viewUrl: '',
            detailUrl: '',
            authors: 'Yang, Y *; Wang, X; Liu, Z; Huang, M; Sun, S; Zhu Q',
            publisher: '',
            date: '2022',
            journal: 'Intelligent Data Analysis',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Precision irrigation methods for high water use efficiency: Advances, Challenges and Forecast (under review)',
            viewUrl: '',
            detailUrl: '',
            authors: 'Ahmad, Z; Fearns, P; Lu, B; Fountas, S; Zare, M; Schirrmann, M; Jimenez - Berni, J; Siłuch, M; Sun, S; Nussbaum, M',
            publisher: '',
            date: '2022',
            journal: 'Computers and Electronics in Agriculture',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            title: 'Predictions of multiple food quality parameters using near-infrared spectroscopy with a novel multi-task genetic programming approach',
            viewUrl: '',
            detailUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0956713522005825?via%3Dihub',
            authors: 'Yu Yang, Shangpeng Sun, Leiqing Pan, Min Huang, Qibing Zhu',
            publisher: '',
            date: '2022',
            journal: 'Food Control',
            volume: '',
            issue: '',
            pages: '',
            citedBy: 0
          }, {
            // 标题
            title: 'In-field high throughput phenotyping and cotton plant growth analysis using LiDAR',
            // 概览URL
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:2osOgNQ5qMEC',
            // 全文URL
            detailUrl: 'https://www.frontiersin.org/articles/10.3389/fpls.2018.00016/full',
            // 作者列表
            authors: 'Shangpeng Sun, Changying Li, Andrew H Paterson, Yu Jiang, Rui Xu, Jon S Robertson, John L Snider, Peng W Chee',
            // 由那个机构发行发布
            publisher: 'Frontiers Media SA',
            // 发布的日期
            date: '2018-1-22',
            // 杂志或期刊名称
            journal: 'Frontiers in Plant Science',
            // 卷，册
            volume: '9',
            // 发行
            issue: '0',
            // 页数
            pages: '16',
            // 被引用次数
            citedBy: 92
          }, {
            title: 'In-field high-throughput phenotyping of cotton plant height using LiDAR',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:UeHWp8X0CEIC',
            detailUrl: 'https://www.mdpi.com/192162',
            authors: 'Shangpeng Sun, Changying Li, Andrew H Paterson',
            publisher: 'Mdpi',
            date: '2017-4-18',
            journal: 'Remote Sensing',
            volume: '9',
            issue: '4',
            pages: '377',
            citedBy: 77
          }, {
            title: 'Aerial images and convolutional neural network for cotton bloom detection',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:IjCSPb-OGe4C',
            detailUrl: 'https://www.frontiersin.org/articles/10.3389/fpls.2017.02235/full',
            authors: 'Rui Xu, Changying Li, Andrew H Paterson, Yu Jiang, Shangpeng Sun, Jon S Robertson',
            publisher: 'Frontiers Media SA',
            date: '2018-2-16',
            journal: 'Frontiers in plant science',
            volume: '8',
            issue: '0',
            pages: '2235',
            citedBy: 65
          }, {
            title: 'GPhenoVision: A ground mobile system with multi-modal imaging for field-based high throughput phenotyping of cotton',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:9yKSN-GCB0IC',
            detailUrl: 'https://www.nature.com/articles/s41598-018-19142-2',
            authors: 'Yu Jiang, Changying Li, Jon S Robertson, Shangpeng Sun, Rui Xu, Andrew H Paterson',
            publisher: 'Nature Publishing Group',
            date: '2018-1-19',
            journal: 'Scientific reports',
            volume: '8',
            issue: '1',
            pages: '1-15',
            citedBy: 52
          }, {
            title: 'Three-dimensional photogrammetric mapping of cotton bolls in situ based on point cloud segmentation and clustering',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:LkGwnXOMwfcC',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S0924271619302990',
            authors: 'Shangpeng Sun, Changying Li, Peng W Chee, Andrew H Paterson, Yu Jiang, Rui Xu, Jon S Robertson, Jeevan Adhikari, Tariq Shehzad',
            date: '2020-2-1',
            journal: 'ISPRS Journal of Photogrammetry and Remote Sensing',
            volume: '160',
            issue: '0',
            pages: '195-207',
            publisher: 'Elsevier',
            citedBy: 46
          }, {
            title: 'Simulation of an autonomous mobile robot for LiDAR-based in-field phenotyping and navigation',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:Se3iqnhoufwC',
            detailUrl: 'https://www.mdpi.com/748950',
            authors: 'Jawad Iqbal, Rui Xu, Shangpeng Sun, Changying Li',
            date: '2020-6-21',
            journal: 'Robotics',
            volume: '9',
            issue: '2',
            pages: '46',
            publisher: 'MDPI',
            citedBy: 35
          }, {
            title: 'Quantitative analysis of cotton canopy size in field conditions using a consumer-grade RGB-D camera',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:Y0pCki6q_DkC',
            detailUrl: 'https://www.frontiersin.org/articles/10.3389/fpls.2017.02233/full',
            authors: 'Yu Jiang, Changying Li, Andrew H Paterson, Shangpeng Sun, Rui Xu, Jon Robertson',
            date: '2018-1-30',
            journal: 'Frontiers in plant science',
            volume: '8',
            issue: '0',
            pages: '2233',
            publisher: 'Frontiers Media SA',
            citedBy: 27
          }, {
            title: 'Image processing algorithms for infield single cotton boll counting and yield prediction',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:_FxGoFyzp5QC',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S0168169919306209',
            authors: 'Shangpeng Sun, Changying Li, Andrew H Paterson, Peng W Chee, Jon S Robertson',
            date: '2019-11-1',
            journal: 'Computers and electronics in agriculture',
            volume: '166',
            issue: '0',
            pages: '104976',
            publisher: 'Elsevier',
            citedBy: 23
          }, {
            title: 'DeepFlower: a deep learning-based approach to characterize flowering patterns of cotton plants in the field',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:hqOjcs7Dif8C',
            detailUrl: 'https://plantmethods.biomedcentral.com/articles/10.1186/s13007-020-00698-y',
            authors: 'Yu Jiang, Changying Li, Rui Xu, Shangpeng Sun, Jon S Robertson, Andrew H Paterson',
            date: '2020-12',
            journal: 'Plant methods',
            volume: '16',
            issue: '1',
            pages: '1-17',
            publisher: 'BioMed Central',
            citedBy: 15
          }, {
            title: 'Fault diagnosis in railway track circuits using support vector machines',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:qjMakFHDy7sC',
            detailUrl: 'https://ieeexplore.ieee.org/abstract/document/6786133/',
            authors: 'Shangpeng Sun, Huibing Zhao',
            date: '2013-12-4',
            conference: '2013 12th International Conference on Machine Learning and Applications',
            volume: '2',
            issue: '0',
            pages: '345-350',
            publisher: 'IEEE',
            citedBy: 11
          }, {
            title: 'High resolution 3D terrestrial LiDAR for cotton plant main stalk and node detection',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:0EnyYjriUFMC',
            detailUrl: 'https://www.sciencedirect.com/science/article/pii/S0168169921002933',
            authors: 'Shangpeng Sun, Changying Li, Peng W Chee, Andrew H Paterson, Cheng Meng, Jingyi Zhang, Ping Ma, Jon S Robertson, Jeevan Adhikari',
            date: '2021-8-1',
            journal: 'Computers and Electronics in Agriculture',
            volume: '187',
            issue: '0',
            pages: '106276',
            publisher: 'Elsevier',
            citedBy: 7
          }, {
            title: 'The method of fault detection of compensation capacitor in jointless track circuit based on phase space reconstruction',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:YsMSGLbcyi4C',
            detailUrl: 'https://scholar.google.com/scholar?cluster=18436397631151798978&hl=en&oi=scholarr',
            authors: 'Shangpeng Sun, Huibing Zhao',
            date: '2012-10',
            journal: 'Journal of the China railway society',
            volume: '34',
            issue: '10',
            pages: '79-84',
            publisher: 'China Railway Society, 10 Fuxing Rd. Beijing 100844 China',
            citedBy: 6
          }, {
            title: '3D computer vision and machine learning based technique for high throughput cotton boll mapping under field conditions',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:WF5omc3nYNoC',
            detailUrl: 'https://elibrary.asabe.org/abstract.asp?aid=49285',
            authors: 'Shangpeng Sun, Changying Li, Andrew Paterson, Yu Jiang, Jon Robertson',
            date: '2018',
            conference: '2018 ASABE Annual International Meeting',
            award: 'ITSC paper award',
            volume: '0',
            issue: '0',
            pages: '1',
            publisher: 'American Society of Agricultural and Biological Engineers',
            citedBy: 5
          }, {
            title: 'A fault diagnosis approach for railway track circuits trimming capacitors using EMD and teager energy operator',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:W7OEmFMy1HYC',
            detailUrl: 'https://books.google.com/books?hl=en&lr=&id=f7eE3ZaTdMcC&oi=fnd&pg=PA167&dq=info:21ScSr-Vz80J:scholar.google.com&ots=a8xARi0jbn&sig=btI4vwNygfltkfXQMufOhHSHuOQ',
            authors: 'SP Sun, HB Zhao, G Zhou',
            date: '2013',
            journal: 'Computers in Railways XIII: Computer System Design and Operation in the Railway and Other Transit Systems',
            volume: '127',
            issue: '0',
            pages: '167',
            publisher: 'WIT Press',
            citedBy: 4
          }, {
            title: 'Height estimation for blueberry bushes using LiDAR based on a field robotic platform',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:d1gkVwhDpl0C',
            detailUrl: 'https://elibrary.asabe.org/abstract.asp?aid=47027',
            authors: 'Shangpeng Sun, Changying Li',
            date: '2016',
            conference: '2016 ASABE Annual International Meeting',
            volume: '0',
            issue: '0',
            pages: '1',
            publisher: 'American Society of Agricultural and Biological Engineers',
            citedBy: 3
          }, {
            title: 'Research on Method for Calculation of Shunt Resistances of Track Circuit Using Electrical Contact Theory',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:u-x6o8ySG0sC',
            detailUrl: 'https://scholar.google.com/scholar?cluster=2465962426338945926&hl=en&oi=scholarr',
            authors: 'Shangpeng Sun, Huibing Zhao, Dewang Chen',
            date: '2014',
            journal: 'Journal of the China Railway Society',
            volume: '36',
            issue: '3',
            pages: '32-35',
            publisher: '',
            citedBy: 3
          }, {
            title: 'In-field high throughput phenotyping and phenotype data analysis for cotton plant growth using LiDAR',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:zYLM7Y9cAGgC',
            detailUrl: 'https://elibrary.asabe.org/abstract.asp?aid=48053',
            authors: 'Shangpeng Sun, Changying Li',
            date: '2017',
            conference: '2017 ASABE Annual International Meeting',
            volume: '0',
            issue: '0',
            pages: '1',
            publisher: 'American Society of Agricultural and Biological Engineers',
            citedBy: 2
          }, {
            title: 'Three-dimensional cotton plant shoot architecture segmentation and phenotypic trait characterization using terrestrial LiDAR point cloud data',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:UebtZRa9Y70C',
            detailUrl: 'https://elibrary.asabe.org/abstract.asp?aid=51564',
            authors: 'Shangpeng Sun, Changying Li, Andrew Paterson, Peng Chee',
            date: '2020',
            conference: '2020 ASABE Annual International Virtual Meeting',
            award: 'The first-place award at AOC paper competition',
            volume: '0',
            issue: '0',
            pages: '1',
            publisher: 'American Society of Agricultural and Biological Engineers',
            citedBy: 1
          }, {
            title: 'Automated plant node detection using terrestrial LiDAR data under field conditions',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:ufrVoPGSRksC',
            detailUrl: 'https://elibrary.asabe.org/abstract.asp?aid=50404',
            authors: 'Shangpeng Sun, Changying Li, Andrew Paterson, Jeevan Adhikari, Jon Robertson, Cheng Meng',
            date: '2019',
            conference: '2019 ASABE Annual International Meeting',
            volume: '0',
            issue: '0',
            pages: '1',
            publisher: 'American Society of Agricultural and Biological Engineers',
            citedBy: 1
          }, {
            title: 'Eff-PlantNet: an annotation-efficient 3D deep learning network for plant shoot segmentation using point clouds',
            viewUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HzOdf-IAAAAJ&citation_for_view=HzOdf-IAAAAJ:5nxA0vEk-isC',
            detailUrl: 'https://elibrary.asabe.org/abstract.asp?aid=53445',
            authors: 'Liyi Luo, Shangpeng Sun',
            date: '2022',
            conference: '2022 ASABE Annual International Meeting',
            award: 'ITSC oral presentation award',
            volume: '0',
            issue: '0',
            pages: '1',
            publisher: 'American Society of Agricultural and Biological Engineers',
            citedBy: 0
          }]
        };
        this.journalPapers = [];
        this.conferencePapers = [];
      }

      _createClass(PublicationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.papers.publicated.forEach(function (element) {
            var str = '';

            if (element.volume == '' && element.issue == '' && element.pages == '') {
              str = '';
            } else if (element.issue != '0' && element.issue != '') {
              str = element.volume + ' (' + element.issue + '), ' + element.pages;
            } else {
              str = element.volume + ', ' + element.pages;
            }

            element['book'] = str;

            if (element.journal != null) {
              _this3.journalPapers.push(element);
            }

            if (element.conference != null) {
              _this3.conferencePapers.push(element);
            }
          });
          this.journalPapers.sort(function (a, b) {
            var aTimestamp = new Date(a['date']).getTime();
            var bTimestamp = new Date(b['date']).getTime();
            return bTimestamp - aTimestamp;
          });
          this.conferencePapers.sort(function (a, b) {
            var aTimestamp = new Date(a['date']).getTime();
            var bTimestamp = new Date(b['date']).getTime();
            return bTimestamp - aTimestamp;
          }); // Go to top

          $('html, body').animate({
            scrollTop: 0
          }, 0);
        }
      }]);

      return PublicationsComponent;
    }();

    PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) {
      return new (t || PublicationsComponent)();
    };

    PublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublicationsComponent,
      selectors: [["app-publications"]],
      decls: 49,
      vars: 5,
      consts: [["id", "publications", 1, "publications", "bg-light", "mt-5", "py-5"], [1, "container"], [1, "row", "mt-3"], [1, "col-12"], [1, "fw-bold", "title", "ps-3", "display-5"], [1, "row"], [1, "col-4"], ["href", "https://scholar.google.com/citations?user=HzOdf-IAAAAJ&hl=en", "target", "_blank"], [1, "container", "papers"], ["id", "pills-tabContent", 1, "tab-content", "mt-4"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", "tabindex", "0", 1, "tab-pane", "fade", "show", "active"], [1, "mb-2", "fs-4"], [1, "fs-5", "ms-2", "text-secondary"], [1, "table", "align-middle", "table-striped", "table-bordered"], [1, "bg-secondary", "text-light"], [1, "small"], [1, "text-center"], [1, "text-center", "fw-bold"], [4, "ngFor", "ngForOf"], [1, "mt-5", "mb-2", "fs-4"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", "tabindex", "0", 1, "tab-pane", "fade"], [1, "table", "align-middle", "table-striped"], [1, "text-secondary", "fst-italic", "text-end"], [1, "p-3"], [1, "mb-1"], [4, "ngIf"], ["target", "_blank", 4, "ngIf"], [1, "small", "text-secondary"], [1, "bi", "bi-people-fill", "me-1"], [1, "me-2"], ["class", "bi bi-bookmark-fill me-1", 4, "ngIf"], [1, "mx-3"], [1, "bi", "bi-calendar2-check-fill", "me-1"], ["class", "small", "target", "_blank", 4, "ngIf"], ["target", "_blank"], [1, "bi", "bi-bookmark-fill", "me-1"], ["target", "_blank", 1, "small"], ["class", "small text-secondary", 4, "ngIf"], [1, "bi", "bi-award-fill"], [1, "px-3", "text-danger"], [1, "py-3"]],
      template: function PublicationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Publications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Please find our latest work on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Google Scholar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " page. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Journal papers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Article Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PublicationsComponent_tr_29_Template, 21, 9, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Selected conference papers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "thead", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Article Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PublicationsComponent_tr_42_Template, 22, 10, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PublicationsComponent_tr_46_Template, 5, 2, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "( *denotes the students supervised )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("( ", ctx.journalPapers.length, " )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.journalPapers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("( ", ctx.conferencePapers.length, " )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conferencePapers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.papers.submitted);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["@font-face {\n  font-family: \"AliPuHui\";\n  src: \"https://dataplatforms.oss-cn-chengdu.aliyuncs.com/font/AlibabaSans-Regular.otf\" format(\"otf\");\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"AliPuHui\", Arial !important;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n.publications[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  border-left: solid 0.5rem #FE1800;\n}\n.publications[_ngcontent-%COMP%]   .papers[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%] {\n  border-bottom: solid #FE1800 1px;\n}\n.publications[_ngcontent-%COMP%]   .papers[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0rem;\n  border-bottom-right-radius: 0rem;\n  font-size: 1.1rem;\n  color: #6c757d;\n}\n.publications[_ngcontent-%COMP%]   .papers[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #f8f9fa;\n  background-color: #FE1800;\n}\n.publications[_ngcontent-%COMP%]   .type-title[_ngcontent-%COMP%] {\n  border-left: solid 0.5rem #FE1800;\n  padding-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvemh4aC9Eb2N1bWVudHMvRG9jdW1lbnRzL0RldmVsb3BtZW50cy9TaGFuZ3BlbmdMYWIvUHJvamVjdC9zaGFuZ3BlbmdsYWIvc3JjL2FwcC9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNJLHVCQUFBO0VBQ0EsbUdBQUE7QUNqQko7QURvQkE7RUFDSSx5Q0FBQTtBQ2xCSjtBRHFCQTtFQUNJLGdDQUFBO0FDbEJKO0FDUEk7RUFDSSxpQ0FBQTtBRFVSO0FDTlE7RUFDSSxnQ0FBQTtBRFFaO0FDTlk7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRkxLO0FDYXJCO0FDTFk7RUFDSSxjRk5DO0VFT0QseUJGcEJKO0FDMkJaO0FDRkk7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0FESVIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1jZ2lsbFJlZDogI0ZFMTgwMDtcclxuJHJvY2JsdWU6ICMwMDAyOTU7XHJcbiRib290c3RyYXBPcmFuZ2U6ICNmZDdlMTQ7XHJcbiRib290c3RyYXBZZWxsb3c6ICNmZmMxMDc7XHJcbiRib290c3RyYXBCbHVlOiAjMGQ2ZWZkO1xyXG4kYm9vdHN0cmFwUmVkOiAjZGMzNTQ1O1xyXG4kYm9vdHN0cmFwR3JlZW46ICMxOTg3NTQ7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJGJvb3RzdHJhcEluZm86ICMwZGNhZjA7XHJcbiRib290c3RyYXBQcmltYXJ5OiAjMGQ2ZWZkO1xyXG4kYm9vdHN0cmFwU2Vjb25kYXJ5OiAjNmM3NTdkO1xyXG4kYm9vdHN0cmFwRGFuZ2VyOiAkYm9vdHN0cmFwUmVkO1xyXG4kYm9vdHN0cmFwU3VjY2VzczogJGJvb3RzdHJhcEdyZWVuO1xyXG4kYm9vdHN0cmFwTGlnaHQ6ICNmOGY5ZmE7XHJcbiRib290c3RyYXBXYXJuaW5nOiAkYm9vdHN0cmFwWWVsbG93O1xyXG4kYm9vdHN0cmFwRGFyazogIzIxMjUyOTtcclxuXHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWxpUHVIdWknO1xyXG4gICAgc3JjOiAnaHR0cHM6Ly9kYXRhcGxhdGZvcm1zLm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9mb250L0FsaWJhYmFTYW5zLVJlZ3VsYXIub3RmJyBmb3JtYXQoJ290ZicpO1xyXG59XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkFsaVB1SHVpXCIsIEFyaWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxpUHVIdWlcIjtcbiAgc3JjOiBcImh0dHBzOi8vZGF0YXBsYXRmb3Jtcy5vc3MtY24tY2hlbmdkdS5hbGl5dW5jcy5jb20vZm9udC9BbGliYWJhU2Fucy1SZWd1bGFyLm90ZlwiIGZvcm1hdChcIm90ZlwiKTtcbn1cbioge1xuICBmb250LWZhbWlseTogXCJBbGlQdUh1aVwiLCBBcmlhbCAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wdWJsaWNhdGlvbnMgLnRpdGxlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXJlbSAjRkUxODAwO1xufVxuLnB1YmxpY2F0aW9ucyAucGFwZXJzIC50eXBlcyB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkICNGRTE4MDAgMXB4O1xufVxuLnB1YmxpY2F0aW9ucyAucGFwZXJzIC50eXBlcyAubmF2LWxpbmsge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuLnB1YmxpY2F0aW9ucyAucGFwZXJzIC50eXBlcyAuYWN0aXZlIHtcbiAgY29sb3I6ICNmOGY5ZmE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTE4MDA7XG59XG4ucHVibGljYXRpb25zIC50eXBlLXRpdGxlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXJlbSAjRkUxODAwO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuLnB1YmxpY2F0aW9ucyB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAuNXJlbSAkbWNnaWxsUmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXBlcnMge1xyXG4gICAgICAgIC50eXBlcyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkICRtY2dpbGxSZWQgMXB4O1xyXG5cclxuICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDByZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRib290c3RyYXBTZWNvbmRhcnk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRib290c3RyYXBMaWdodDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtY2dpbGxSZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnR5cGUtdGl0bGV7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIC41cmVtICRtY2dpbGxSZWQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-publications',
          templateUrl: './publications.component.html',
          styleUrls: ['./publications.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/teaching/teaching.component.ts":
  /*!************************************************!*\
    !*** ./src/app/teaching/teaching.component.ts ***!
    \************************************************/

  /*! exports provided: TeachingComponent */

  /***/
  function srcAppTeachingTeachingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeachingComponent", function () {
      return TeachingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TeachingComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.content);
      }
    }

    var TeachingComponent = /*#__PURE__*/function () {
      function TeachingComponent() {
        _classCallCheck(this, TeachingComponent);

        this.list = [{
          title: 'BREE 312',
          content: 'Electric Circuits and Machines (3 credits)'
        }, {
          title: 'BREE 504',
          content: 'Instrumentation and Control (3 credits), Co-teach with Dr. Adamchuk'
        }, {
          title: 'BREE 501',
          content: 'Simulation and Modelling (3 credits), Co-teach with Dr. Clark'
        }];
      }

      _createClass(TeachingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('html, body').animate({
            scrollTop: 0
          }, 0);
        }
      }]);

      return TeachingComponent;
    }();

    TeachingComponent.ɵfac = function TeachingComponent_Factory(t) {
      return new (t || TeachingComponent)();
    };

    TeachingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeachingComponent,
      selectors: [["app-teaching"]],
      decls: 10,
      vars: 1,
      consts: [["id", "teaching", 1, "teaching", "bg-light", "mt-5", "pt-5"], [1, "container"], [1, "row", "mt-3"], [1, "col-12"], [1, "fw-bold", "title", "ps-3", "display-5"], [1, "container", "mt-5"], [1, "row"], ["class", "teching-class bg-light lead mb-4", 4, "ngFor", "ngForOf"], [1, "teching-class", "bg-light", "lead", "mb-4"], [1, "me-4", "fw-bold", "classname", "text-secondary"], [1, "content"]],
      template: function TeachingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Teaching");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeachingComponent_div_9_Template, 5, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["@font-face {\n  font-family: \"AliPuHui\";\n  src: \"https://dataplatforms.oss-cn-chengdu.aliyuncs.com/font/AlibabaSans-Regular.otf\" format(\"otf\");\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"AliPuHui\", Arial !important;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n.teaching[_ngcontent-%COMP%] {\n  display: block;\n  height: 82vh;\n  max-height: 84vh;\n}\n.teaching[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  border-left: solid 0.5rem #FE1800;\n}\n.teaching[_ngcontent-%COMP%]   .teching-class[_ngcontent-%COMP%]   .classname[_ngcontent-%COMP%], .teaching[_ngcontent-%COMP%]   .teching-class[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n@media screen and (max-width: 768px) {\n  .teching-class[_ngcontent-%COMP%]   .classname[_ngcontent-%COMP%], .teching-class[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 94%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3RlYWNoaW5nL3RlYWNoaW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3poeGgvRG9jdW1lbnRzL0RvY3VtZW50cy9EZXZlbG9wbWVudHMvU2hhbmdwZW5nTGFiL1Byb2plY3Qvc2hhbmdwZW5nbGFiL3NyYy9hcHAvdGVhY2hpbmcvdGVhY2hpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0ksdUJBQUE7RUFDQSxtR0FBQTtBQ2pCSjtBRG9CQTtFQUNJLHlDQUFBO0FDbEJKO0FEcUJBO0VBQ0ksZ0NBQUE7QUNsQko7QUNSQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURXSjtBQ1RJO0VBQ0ksaUNBQUE7QURXUjtBQ05ROztFQUVJLGdDQUFBO0FEUVo7QUNGQTtFQUdROztJQUVJLFVBQUE7RURHVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hpbmcvdGVhY2hpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWNnaWxsUmVkOiAjRkUxODAwO1xyXG4kcm9jYmx1ZTogIzAwMDI5NTtcclxuJGJvb3RzdHJhcE9yYW5nZTogI2ZkN2UxNDtcclxuJGJvb3RzdHJhcFllbGxvdzogI2ZmYzEwNztcclxuJGJvb3RzdHJhcEJsdWU6ICMwZDZlZmQ7XHJcbiRib290c3RyYXBSZWQ6ICNkYzM1NDU7XHJcbiRib290c3RyYXBHcmVlbjogIzE5ODc1NDtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kYm9vdHN0cmFwSW5mbzogIzBkY2FmMDtcclxuJGJvb3RzdHJhcFByaW1hcnk6ICMwZDZlZmQ7XHJcbiRib290c3RyYXBTZWNvbmRhcnk6ICM2Yzc1N2Q7XHJcbiRib290c3RyYXBEYW5nZXI6ICRib290c3RyYXBSZWQ7XHJcbiRib290c3RyYXBTdWNjZXNzOiAkYm9vdHN0cmFwR3JlZW47XHJcbiRib290c3RyYXBMaWdodDogI2Y4ZjlmYTtcclxuJGJvb3RzdHJhcFdhcm5pbmc6ICRib290c3RyYXBZZWxsb3c7XHJcbiRib290c3RyYXBEYXJrOiAjMjEyNTI5O1xyXG5cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbGlQdUh1aSc7XHJcbiAgICBzcmM6ICdodHRwczovL2RhdGFwbGF0Zm9ybXMub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2ZvbnQvQWxpYmFiYVNhbnMtUmVndWxhci5vdGYnIGZvcm1hdCgnb3RmJyk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQWxpUHVIdWlcIiwgQXJpYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbGlQdUh1aVwiO1xuICBzcmM6IFwiaHR0cHM6Ly9kYXRhcGxhdGZvcm1zLm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9mb250L0FsaWJhYmFTYW5zLVJlZ3VsYXIub3RmXCIgZm9ybWF0KFwib3RmXCIpO1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsaVB1SHVpXCIsIEFyaWFsICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRlYWNoaW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogODJ2aDtcbiAgbWF4LWhlaWdodDogODR2aDtcbn1cbi50ZWFjaGluZyAudGl0bGUge1xuICBib3JkZXItbGVmdDogc29saWQgMC41cmVtICNGRTE4MDA7XG59XG4udGVhY2hpbmcgLnRlY2hpbmctY2xhc3MgLmNsYXNzbmFtZSxcbi50ZWFjaGluZyAudGVjaGluZy1jbGFzcyAuY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGVjaGluZy1jbGFzcyAuY2xhc3NuYW1lLFxuLnRlY2hpbmctY2xhc3MgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA5NCU7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4udGVhY2hpbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDgydmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA4NHZoO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIC41cmVtICRtY2dpbGxSZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlY2hpbmctY2xhc3Mge1xyXG5cclxuICAgICAgICAuY2xhc3NuYW1lLFxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyDlsY/luZXlrr3luqblsI/kuo4gNzY4cHhcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC50ZWNoaW5nLWNsYXNzIHtcclxuXHJcbiAgICAgICAgLmNsYXNzbmFtZSxcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeachingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-teaching',
          templateUrl: './teaching.component.html',
          styleUrls: ['./teaching.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/team/team.component.ts":
  /*!****************************************!*\
    !*** ./src/app/team/team.component.ts ***!
    \****************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TeamComponent_div_7_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TeamComponent_div_7_div_10_ng_container_1_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var desc_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", desc_r8, "");
      }
    }

    function TeamComponent_div_7_div_10_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TeamComponent_div_7_div_10_ng_container_1_p_6_Template, 2, 1, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var student_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/img/people/" + student_r4.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("alt", student_r4.fullname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", student_r4.fullname, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", student_r4.descs);
      }
    }

    function TeamComponent_div_7_div_10_ng_container_2_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var desc_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](desc_r11);
      }
    }

    function TeamComponent_div_7_div_10_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamComponent_div_7_div_10_ng_container_2_p_5_Template, 2, 1, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var student_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r4.fullname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", student_r4.descs);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "alumni-row": a0
      };
    };

    function TeamComponent_div_7_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamComponent_div_7_div_10_ng_container_1_Template, 7, 4, "ng-container", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamComponent_div_7_div_10_ng_container_2_Template, 6, 2, "ng-container", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, items_r1.type === "alumnus"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r1.type !== "alumnus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r1.type === "alumnus");
      }
    }

    function TeamComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TeamComponent_div_7_span_7_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeamComponent_div_7_div_10_Template, 3, 5, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r1.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r1.sub_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r1.students.length > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r1.students);
      }
    }

    var TeamComponent = /*#__PURE__*/function () {
      // undergraduates = [
      //   "Alice Liang"
      // ]
      // alumnus = [
      //   "Weiqun Wang (Visiting graduate student, University of Bologna, Italy)",
      //   "Rui (Ray) Xu (Undergraduate student)",
      //   "Li Lu (Undergraduate student)",
      //   'Rui Kang (Visiting professor)',
      //   'Zhouzhou Zheng (Visiting PhD student)',
      //   'Liyi Luo (PhD student)',
      //   'Yu Yang (Visiting PhD student)',
      //   'Yixue Liu (Visiting PhD student)',
      //   'Félix Bédard (Undergraduate student)',
      //   'Mandy Sun (Undergraduate student)'
      // ]
      function TeamComponent() {
        _classCallCheck(this, TeamComponent);

        this.peoples = [{
          type: 'postdoc',
          title: 'Postdoc',
          sub_title: 'scholars',
          students: [{
            fullname: 'Jianxing Xiao',
            photo: 'jianxing_xiao.jpg',
            descs: ['Jianxing Xiao holds a Ph.D. in Agricultural Electrification and Automation from China Agricultural University, with a research focus on agricultural robotics, computer vision, and autonomous navigation. His work integrates multi-sensor fusion, machine vision, and intelligent control to develop robust robotic systems for complex agricultural environments. He has published research on agricultural machinery navigation, obstacle detection and avoidance, and animal recognition. He is currently working on VLA-based embodied intelligence navigation systems for agricultural machinery. ']
          }]
        }, {
          type: 'phd',
          title: 'PhD',
          sub_title: 'student',
          students: [{
            fullname: 'Xintong Jiang',
            photo: 'Xintong Jiang.jpg',
            descs: ['Xintong Jiang earned her Master\'s in Bioresource Engineering and Bachelor\'s in Computer Science from McGill. Xintong is passionate about leveraging advanced machine vision algorithms and statistical models to address challenges in indoor and field settings. She is enthusiastic about exploring cutting-edge techniques and is always eager to take on new challenges.']
          }, {
            fullname: 'Mohamed Debbagh',
            photo: 'mohamed_debbagh.jpg',
            descs: ['Mohamed Debbagh\'s research background is in sensor fusion and precision agriculture and is a technical co-founders of the company Circulus Agtech.  His current research focus is on the application of computer vision and Machine Learning techniques for plant health assessment to improve crop throughput in controlled environment agriculture, as well as GHG monitoring in agriculture.']
          }, {
            fullname: 'Xuehai Zhou',
            photo: 'xuehai_zhou.jpg',
            descs: ['Xuehai Zhou has distinguished himself in the field of digital agriculture, holding a Master\'s degree in Bioresource Engineering from McGill University, Canada, and a Bachelor\'s degree in Computer Science from the University of Oregon, USA. Before pursuing his studies at McGill, Zhou contributed to the Baidu Big Data Lab in Beijing, China. His expertise in statistical analysis, computer vision, and deep learning technologies has been significant in advancing plant phenotyping.']
          }, {
            fullname: 'Yu Tian',
            photo: 'yu_tian.jpg',
            descs: ['Yu Tian received her Bachelor\'s and Master\'s degrees in Software Engineering from Northwest University, China. Her research focuses on point cloud analysis and its applications in plant phenotyping. In particular, she investigates label-efficient deep learning techniques for extracting phenotypic traits from 3D plant scans.']
          }, {
            fullname: 'Liuyi He',
            photo: 'liuyi_he.jpg',
            descs: ['Liuyi He pursued a Bachelor\'s degree in Geomatics Engineering from Shandong University of Science and Technology, China, and a Master\'s degree in Spatial Engineering from the University of Twente. She is eager to combine remote sensing techniques and deep learning to explore new challenges in smart agriculture development.']
          }, {
            fullname: 'Weitong Wang',
            photo: 'weitong.jpg',
            descs: ['Weitong Wang earned his Master’s degree in Mechanical Engineering from the Hong Kong University of Science and Technology and his Bachelor’s degree in Mechanical Design, Manufacturing, and Automation from Sichuan University. His research focuses on optimizing tomato growth patterns and improving fruit productivity through high-throughput plant phenotyping and image analysis.']
          }, {
            fullname: 'Arindam Sikdar',
            photo: 'arindam.jpeg',
            descs: ['Arindam is a botanist-turned-AI innovator. After an integrated BSc–MSc in Botany (Visva-Bharati, India) and an MSc in Biology (Memorial University) on lingonberry epigenomics, he founded Lingonverse to apply AI to lingonberry breeding worldwide. Now a PhD researcher, he builds deep-learning phenomics for early wheat disease detection from spikelets and yield prediction, equipping Quebec breeders with faster diagnostics to strengthen resilience and accelerate Canadian breeding programs.']
          }, {
            fullname: 'Wang Mo',
            photo: 'WangMo.JPG',
            descs: ['I earned my Bachelor’s degree in Mathematics and Statistics from the University of Toronto and my Master’s degree in Mathematics from the University of British Columbia (UBC), where my research focused on sensitivity analysis and climate-driven uncertainty quantification in agricultural greenhouse gas emissions modeling. Building on this foundation in mathematical modeling and statistical analysis, I am now a Ph.D. student focusing on deep learning and computer vision, with the goal of combining rigorous quantitative methods and AI-driven approaches to address real-world challenges in smart agriculture.']
          }]
        }, // {
        //   type: 'visiting scholar',
        //   title: 'Visiting',
        //   sub_title: 'scholar',
        //   students: [
        //     // {
        //     //   fullname: 'He Li',
        //     //   photo: 'he_li.png',
        //     //   descs: ['He Li received her Bachelor\'s and Ph.D. degrees in Software Engineering and Computer Science and Technology from Yanshan University, China. After completing her doctorate, she joined the School of Information Science and Engineering at Yanshan University, where she is currently an Associate Professor. Her research interests include intelligent information processing, computer vision, and pattern recognition.']
        //     // },
        //     // {
        //     //   fullname: 'Weidong Yuan',
        //     //   photo: 'weidong.jpg',
        //     //   descs: ['Weidong Yuan earned his bachelor\'s degree from Nanjing Forestry University and is currently a fourth-year doctoral student at the same university. His research focuses on spectral and hyperspectral imaging data analysis techniques, as well as the design of agricultural and forestry machinery and equipment.']
        //     // },
        //   ]
        // },
        // {
        //   type: 'master',
        //   title: 'Master',
        //   sub_title: 'student',
        //   students: [
        //     {
        //       fullname: 'Nazia Hossain',
        //       photo: 'Nazia.jpg',
        //       descs: ['Nazia Hossain completed her B.Sc. in Electrical and Electronic Engineering at the Islamic University of Technology (IUT). Currently, she is pursuing a master\'s in Bioresource Engineering at McGill University. Her research focuses on advancing precision agriculture through Artificial Intelligence. She has witnessed firsthand the transformative impact of AI and is captivated by its potential to revolutionize industries and societies alike. This potential fuels her passion to contribute to AI, aiming to create a technologically advanced ecosystem that is ethically and morally beneficial for everyone.']
        //     },
        //     {
        //       fullname: 'Mason Jackson',
        //       photo: 'mason_jackson.jpg',
        //       descs: ['Mason holds a B.Sc. in Molecular Genetics from the University of Alberta and has gained extensive research experience across various institutions in Alberta, including the Government of Alberta Ministry of Agriculture, Natural Resources Canada, and Lakeland College. With a strong passion for agronomy, plant breeding, and pulse crops, Mason aims to enhance his expertise by integrating innovative techniques in crop breeding and drone imagery. His current project focuses on leveraging drone technology to improve the evaluation of breeding lines in the pulse breeding program at McGill University. ']
        //     },
        //   ]
        // },
        {
          type: 'undergraduates',
          title: 'Undergraduate',
          sub_title: 'student',
          students: [{
            fullname: 'Asahi Suzuki',
            photo: 'asahi_suzuki.jpg',
            descs: ['Asahi Suzuki is a U2 Bioresource Engineering student at McGill University. His interest focuses on the intersection of food production, automation, and robotics. His work experience includes research in large scale agriculture and internship at a robotics company developing autonomous harvesting systems for greenhouse production.']
          }]
        }, {
          type: 'alumnus',
          title: 'Alumnus',
          sub_title: '',
          students: [{
            fullname: 'Nazia Hossain',
            descs: ['Graduated with Master\'s degree in Bioresource Engineering, 2026.']
          }, {
            fullname: 'Mason Jackson',
            descs: ['Graduated with Master\'s degree in Bioresource Engineering, 2026.']
          }, {
            fullname: 'He Li',
            descs: ['Visiting scholar, 2025-2026, an associate professor at School of Information Science and Engineering at Yanshan University.']
          }, {
            fullname: 'Weidong Yuan',
            descs: ['Visiting PhD student from Nanjing Forestry University, China, 2025.']
          }, {
            fullname: 'Mana Eskandari',
            descs: ['Postdoctoral fellow, 2026.']
          }, {
            fullname: 'Alice Liang',
            descs: ['Undergraduate student at McGill University, 2026.']
          }, {
            fullname: 'Jiajun Zhu',
            descs: ['Undergraduate student at McGill University, 2026.']
          }, {
            fullname: 'Libin Wu',
            descs: ['Visiting PhD student from Fujian Agriculture and Forestry University, China, 2025.']
          }, {
            fullname: 'Rui Kang',
            descs: ['Visiting scholar, 2023–2024. Now an associate professor at Nanjing Agricultural University.']
          }, {
            fullname: 'Weiqun Wang',
            descs: ['Visiting graduate student from the University of Bologna, Italy, 2024.']
          }, {
            fullname: 'Zhouzhou Zheng',
            descs: ['Visiting Ph.D. student, 2023–2024.']
          }, {
            fullname: 'Yixue Liu',
            descs: ['Visiting Ph.D. student, 2023–2024.']
          }, {
            fullname: 'Liyi Luo',
            descs: ['Ph.D. student, 2022–2023. Now a research assistant at the Beijing Institute of Technology, Tsinghua University.']
          }, {
            fullname: 'Yu Yang',
            descs: ['Visiting Ph.D. student, 2022–2023. Currently pursuing the Ph.D. degree at the School of Internet of Things Engineering, Jiangnan University.']
          }, {
            fullname: 'Li Lu',
            descs: ['Undergraduate student at McGill University, 2023.']
          }, {
            fullname: 'Félix Bédard',
            descs: ['Undergraduate student at McGill University, 2022.']
          }, {
            fullname: 'Mandy Sun',
            descs: ['Undergraduate student at McGill University, 2022.']
          }]
        }];
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('html, body').animate({
            scrollTop: 0
          }, 0);
        }
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)();
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 8,
      vars: 1,
      consts: [["id", "team", 1, "team", "bg-light", "mt-5", "py-5"], [1, "container"], [1, "row", "mt-3"], [1, "col-12"], [1, "fw-bold", "title", "ps-3", "display-5"], [1, "container", "mt-5"], ["class", "row mb-5 team", 4, "ngFor", "ngForOf"], [1, "row", "mb-5", "team"], [1, "fs-2", "border-bottom", "border-danger", "border-3", "fw-bold", "mb-3", "px-0", "py-1", "team-title"], [1, "bi", "bi-award-fill", "me-1"], [1, "fs-4", "fw-normal", "ms-2", "text-secondary"], ["class", "fs-4 fw-normal text-secondary", 4, "ngIf"], [1, "container", "px-0"], ["class", "row justify-content-center align-items-center student mb-3", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "fs-4", "fw-normal", "text-secondary"], [1, "row", "justify-content-center", "align-items-center", "student", "mb-3", 3, "ngClass"], [4, "ngIf"], [1, "col-12", "col-sm-3", "col-md-3", "col-lg-2"], [1, "rounded", "photo", "img-fluid", 3, "src"], [1, "col-12", "col-sm", "col-md", "col-lg", "mt-4"], [1, "text-secondary", "fs-4", "fullname"], ["class", "text-secondary mt-3 desc", 4, "ngFor", "ngForOf"], [1, "text-secondary", "mt-3", "desc"], [1, "col-12", "col-sm-4", "col-md-4", "col-lg-3"], [1, "col-12", "col-sm", "col-md", "col-lg"], ["class", "text-secondary desc", 4, "ngFor", "ngForOf"], [1, "text-secondary", "desc"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TeamComponent_div_7_Template, 11, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.peoples);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["@font-face {\n  font-family: \"AliPuHui\";\n  src: \"https://dataplatforms.oss-cn-chengdu.aliyuncs.com/font/AlibabaSans-Regular.otf\" format(\"otf\");\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"AliPuHui\", Arial !important;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n.team[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  border-left: solid 0.5rem #FE1800;\n}\n.team[_ngcontent-%COMP%]   .student[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.team[_ngcontent-%COMP%]   .student[_ngcontent-%COMP%]:hover   .fullname[_ngcontent-%COMP%], .team[_ngcontent-%COMP%]   .student[_ngcontent-%COMP%]:hover   .desc[_ngcontent-%COMP%] {\n  color: black !important;\n}\n.team[_ngcontent-%COMP%]   .student.alumni-row[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-bottom: 1px solid #eee;\n}\n.team[_ngcontent-%COMP%]   .student.alumni-row[_ngcontent-%COMP%]   .fullname[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0;\n}\n.team[_ngcontent-%COMP%]   .student.alumni-row[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n@media (max-width: 576px) {\n  .team[_ngcontent-%COMP%]   .student.alumni-row[_ngcontent-%COMP%]   .fullname[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n.team[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team-title[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  color: #FE1800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy96aHhoL0RvY3VtZW50cy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnRzL1NoYW5ncGVuZ0xhYi9Qcm9qZWN0L3NoYW5ncGVuZ2xhYi9zcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx1QkFBQTtFQUNBLG1HQUFBO0FDakJKO0FEb0JBO0VBQ0kseUNBQUE7QUNsQko7QURxQkE7RUFDSSxnQ0FBQTtBQ2xCSjtBQ1BJO0VBQ0ksaUNBQUE7QURVUjtBQ05RO0VBQ0ksaUJBQUE7QURRWjtBQ0hZOztFQUVJLHVCQUFBO0FES2hCO0FDQVE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QURFWjtBQ0FZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBREVoQjtBQ0NZO0VBQ0ksZ0JBQUE7QURDaEI7QUNFWTtFQUNJO0lBQ0ksbUJBQUE7RURBbEI7QUFDRjtBQ09ZO0VBQ0ksY0Y3Q0o7QUN3Q1oiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWNnaWxsUmVkOiAjRkUxODAwO1xyXG4kcm9jYmx1ZTogIzAwMDI5NTtcclxuJGJvb3RzdHJhcE9yYW5nZTogI2ZkN2UxNDtcclxuJGJvb3RzdHJhcFllbGxvdzogI2ZmYzEwNztcclxuJGJvb3RzdHJhcEJsdWU6ICMwZDZlZmQ7XHJcbiRib290c3RyYXBSZWQ6ICNkYzM1NDU7XHJcbiRib290c3RyYXBHcmVlbjogIzE5ODc1NDtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kYm9vdHN0cmFwSW5mbzogIzBkY2FmMDtcclxuJGJvb3RzdHJhcFByaW1hcnk6ICMwZDZlZmQ7XHJcbiRib290c3RyYXBTZWNvbmRhcnk6ICM2Yzc1N2Q7XHJcbiRib290c3RyYXBEYW5nZXI6ICRib290c3RyYXBSZWQ7XHJcbiRib290c3RyYXBTdWNjZXNzOiAkYm9vdHN0cmFwR3JlZW47XHJcbiRib290c3RyYXBMaWdodDogI2Y4ZjlmYTtcclxuJGJvb3RzdHJhcFdhcm5pbmc6ICRib290c3RyYXBZZWxsb3c7XHJcbiRib290c3RyYXBEYXJrOiAjMjEyNTI5O1xyXG5cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbGlQdUh1aSc7XHJcbiAgICBzcmM6ICdodHRwczovL2RhdGFwbGF0Zm9ybXMub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2ZvbnQvQWxpYmFiYVNhbnMtUmVndWxhci5vdGYnIGZvcm1hdCgnb3RmJyk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQWxpUHVIdWlcIiwgQXJpYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbGlQdUh1aVwiO1xuICBzcmM6IFwiaHR0cHM6Ly9kYXRhcGxhdGZvcm1zLm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9mb250L0FsaWJhYmFTYW5zLVJlZ3VsYXIub3RmXCIgZm9ybWF0KFwib3RmXCIpO1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsaVB1SHVpXCIsIEFyaWFsICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRlYW0gLnRpdGxlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXJlbSAjRkUxODAwO1xufVxuLnRlYW0gLnN0dWRlbnQgLmRlc2Mge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi50ZWFtIC5zdHVkZW50OmhvdmVyIC5mdWxsbmFtZSxcbi50ZWFtIC5zdHVkZW50OmhvdmVyIC5kZXNjIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4udGVhbSAuc3R1ZGVudC5hbHVtbmktcm93IHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cbi50ZWFtIC5zdHVkZW50LmFsdW1uaS1yb3cgLmZ1bGxuYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi50ZWFtIC5zdHVkZW50LmFsdW1uaS1yb3cgLmRlc2Mge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50ZWFtIC5zdHVkZW50LmFsdW1uaS1yb3cgLmZ1bGxuYW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG4udGVhbSAudGVhbSAudGVhbS10aXRsZSAuYmkge1xuICBjb2xvcjogI0ZFMTgwMDtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4udGVhbSB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAuNXJlbSAkbWNnaWxsUmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdHVkZW50IHtcclxuICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcblxyXG4gICAgICAgICAgICAuZnVsbG5hbWUsXHJcbiAgICAgICAgICAgIC5kZXNjIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmFsdW1uaS1yb3cge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmZ1bGxuYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAgIC5mdWxsbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGVhbSB7XHJcbiAgICAgICAgLnRlYW0tdGl0bGUge1xyXG4gICAgICAgICAgICAuYmkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRtY2dpbGxSZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyAuY2FyZCB7XHJcblxyXG4gICAgLy8gICAgIC5waG90byB7XHJcbiAgICAvLyAgICAgICAgIHdpZHRoOiAxMC4zcmVtO1xyXG4gICAgLy8gICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAuY2FyZC10ZXh0IHtcclxuICAgIC8vICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcclxuICAgIC8vICAgICB9XHJcblxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html',
          styleUrls: ['./team.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/zhxh/Documents/Documents/Developments/ShangpengLab/Project/shangpenglab/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map