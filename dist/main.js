(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Nmm":
/*!*************************************************************!*\
  !*** ./src/app/home/helpful-tips/helpful-tips.component.ts ***!
  \*************************************************************/
/*! exports provided: HelpfulTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpfulTipsComponent", function() { return HelpfulTipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_helpful_tips_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./helpful-tips.component.html */ "0Vd7");
/* harmony import */ var _helpful_tips_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpful-tips.component.scss */ "KHW7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "JZFu");







var HelpfulTipsComponent = /** @class */ (function () {
    function HelpfulTipsComponent(firestore, ToastrService) {
        this.firestore = firestore;
        this.ToastrService = ToastrService;
        this.storage = firebase__WEBPACK_IMPORTED_MODULE_6__["default"].storage();
        this.tip = {
            images: [],
            title: '',
            description: ''
        };
        this.tipInformation = {};
        this.tips = [];
        this.tipIds = [];
        this.srcs = [];
    }
    HelpfulTipsComponent.prototype.ngOnInit = function () {
        this.retrieve();
    };
    HelpfulTipsComponent.prototype.trigger = function () {
        document.getElementById('file-input').click();
    };
    HelpfulTipsComponent.prototype.readURL = function (files, event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.srcs = [];
            Object.keys(files).forEach(function (i) {
                _this.tip.images.push(files[i]);
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]);
                reader.onload = function (event) {
                    _this.srcs.push(event.target.result);
                };
            });
        }
    };
    HelpfulTipsComponent.prototype.retrieve = function () {
        var _this = this;
        this.tips = [];
        this.tipIds = [];
        this.firestore.collection('tips').get().subscribe(function (pests) {
            pests.forEach(function (pest) {
                _this.tips.push(pest.data());
                _this.tipIds.push(pest.id);
            });
        });
    };
    HelpfulTipsComponent.prototype.save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var index, file, photo_url;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.tip.images.length == 0) {
                            this.ToastrService.error("Pest Images could not be empty");
                            return [2 /*return*/];
                        }
                        if (this.tip.title == "" || this.tip.description == "") {
                            this.ToastrService.error("All Fields should  not be empty");
                            return [2 /*return*/];
                        }
                        this.ToastrService.info("Uploading Images");
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index <= this.tip.images.length - 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.storage.ref('tips/' + this.tip.images[index].name).put(this.tip.images[index])];
                    case 2:
                        file = _a.sent();
                        return [4 /*yield*/, file.ref.getDownloadURL()];
                    case 3:
                        photo_url = _a.sent();
                        this.tip.images.splice(index, 1, photo_url);
                        _a.label = 4;
                    case 4:
                        index++;
                        return [3 /*break*/, 1];
                    case 5:
                        this.tip['created_at'] = Date.now();
                        this.firestore.collection('tips').add(this.tip);
                        this.ToastrService.success(this.tip.title + " has been saved");
                        this.retrieve();
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpfulTipsComponent.prototype.update = function (tip, id) {
        tip['updated_at'] = Date.now();
        this.firestore.collection('tips').doc(id).update(tip);
        this.ToastrService.success(tip.title + " has been updated");
        this.retrieve();
    };
    HelpfulTipsComponent.prototype.clear = function () {
        this.srcs = [];
        this.tip = {
            images: [],
            title: '',
            description: ''
        };
        this.retrieve();
    };
    HelpfulTipsComponent.prototype.deleteData = function (id) {
        this.firestore.collection('tips').doc(id).delete();
        this.retrieve();
        this.ToastrService.info("Tip has been deleted");
    };
    HelpfulTipsComponent.prototype.view = function (tip) {
        this.tipInformation = tip;
    };
    HelpfulTipsComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    HelpfulTipsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-helpful-tips',
            template: _raw_loader_helpful_tips_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_helpful_tips_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], HelpfulTipsComponent);
    return HelpfulTipsComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jamel\Desktop\Clients\GardenScapes-Assistance\web\src\main.ts */"zUnb");


/***/ }),

/***/ "0Vd7":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/helpful-tips/helpful-tips.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n    <div class=\" row\">\n        <div *ngIf=\"tipInformation.title != undefined\" class=\" col-md-12\">\n            <div class=\" card card-user\">\n                <div class=\" card-body\">\n                    <p class=\" card-text\"></p>\n                    <div class=\" author\">\n                        <div class=\" block block-one\"></div>\n                        <div class=\" block block-two\"></div>\n                        <div class=\" block block-three\"></div>\n                        <div class=\" block block-four\"></div>\n                        <a href=\"javascript:void(0)\">\n                            <img *ngFor=\"let img of tipInformation.images\" class=\" avatar\" [src]=\"img\" alt=\"\" />\n                            <h5 class=\" title\">{{tipInformation.title}}</h5>\n                        </a>\n                        <div class=\" block block-one\"></div>\n                        <div class=\" block block-two\"></div>\n                        <div class=\" block block-three\"></div>\n                        <div class=\" block block-four\"></div>\n                        <p class=\" description\">{{tipInformation.description}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"far fa-lightbulb\"></i> Add Helpful Tips\n                </div>\n                <div class=\"card-body\">\n                    <button (click)=\"trigger()\" class=\"btn btn-success\">Add Image</button>\n                    <br>\n                    <img *ngFor=\"let src of srcs\" class=\"block-images m-2\" [src]=\"src\">\n                    <br>\n                    <br> <br>\n                    <br>\n                    <div class=\" form-group\">\n                        <label> Tip Name</label>\n                        <input [(ngModel)]=\"tip.title\" class=\" form-control\" placeholder=\"Tip Name\" type=\"text\" />\n                    </div>\n                    <br>\n\n                    <div class=\" form-group\">\n                        <label> Description </label>\n                        <textarea [(ngModel)]=\"tip.description\" autosize class=\" form-control\" placeholder=\"Description\" type=\"text\"></textarea>\n                    </div>\n                    <br>\n                    <input multiple type=\"file\" (change)=\"readURL( $event.target.files, $event )\" accept=\"image/*\" id=\"file-input\" style=\"display: none;\">\n                    <button (click)=\"clear()\" class=\"btn btn-secondary\">Clear</button>\n                    <button (click)=\"save()\" class=\"btn btn-primary\">Save</button>\n                </div>\n            </div>\n        </div>\n        <div class=\" col-md-8\">\n            <div class=\" card\">\n                <div class=\" card-header\" style=\"display: flex;\">\n                    <h4 class=\" card-title\">\n                        <i class=\"far fa-lightbulb\"></i> Helpful Tips\n                    </h4>\n                </div>\n                <div class=\" card-body\">\n                    <div class=\" table-responsive\">\n                        <table class=\" table tablesorter\" id=\"\">\n                            <thead class=\" text-primary\">\n                                <tr>\n                                    <th>Images</th>\n                                    <th>Tip Name</th>\n                                    <th>Description</th>\n                                    <th>Date Created</th>\n                                    <th>Operations</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let tip of tips;let i = index\">\n                                    <td>\n                                        <div style=\"margin-left: 20px;\">\n                                            <img style=\"margin-left: -20px;border: 1px solid white !important;\" *ngFor=\"let image of tip.images\" class=\"rounded-img\" [src]=\"image\">\n                                        </div>\n\n                                    </td>\n                                    <td><textarea [(ngModel)]=\"tip.title\" type=\"text\" class=\"form-control\"></textarea></td>\n                                    <td><textarea [(ngModel)]=\"tip.description\" type=\"text\" class=\"form-control\"></textarea></td>\n                                    <td><span class=\"badge badge-info\">{{tip.created_at | date: 'MMMM dd, yyyy - hh:mm a'}}</span></td>\n                                    <td>\n                                        <button (click)=\"view(tip)\" class=\"btn btn-info btn-sm mr-2\">\n                                            <i class=\"far fa-eye\"></i>\n                                        </button>\n                                        <button (click)=\"update(tip,tipIds[i])\" class=\"btn btn-primary btn-sm mr-2\">\n                                            <i class=\"far fa-edit\"></i>\n                                        </button>\n                                        <button (click)=\"deleteData(tipIds[i])\" class=\"btn btn-danger btn-sm mr-2\">\n                                            <i class=\"far fa-trash-alt\"></i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <!-- <nav aria-label=\"Page navigation example\">\n                            <ul class=\"pagination\">\n                                <li class=\"page-item\"><a class=\"page-link\">Previous</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">1</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">2</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">3</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">Next</a></li>\n                            </ul>\n                        </nav> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "1zIh":
/*!******************************************************!*\
  !*** ./src/app/Screens/sign-up/sign-up.component.ts ***!
  \******************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-up.component.html */ "4Gwh");
/* harmony import */ var _sign_up_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.component.scss */ "KTdG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.ctorParameters = function () { return []; };
    SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sign-up',
            template: _raw_loader_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sign_up_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "3N6j":
/*!**************************************************!*\
  !*** ./src/app/Screens/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "moaW");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "Kg9R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, ToastrService) {
        this.router = router;
        this.ToastrService = ToastrService;
        this.email = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_5__["default"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.email);
        console.log(this.password);
        firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth().signInWithEmailAndPassword(this.email, this.password)
            .then(function (userCredential) {
            var user = userCredential.user;
            if (user.displayName != null) {
                _this.ToastrService.error("Unable to Login as an administrator");
                return;
            }
            _this.router.navigate(['/home/dashboard']);
        })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            _this.ToastrService.error(errorCode);
            _this.ToastrService.error(errorMessage);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "3TnI":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "WSaj");
/* harmony import */ var _auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-layout.component.scss */ "FkQd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, modalService) {
        var _this = this;
        this.router = router;
        this.modalService = modalService;
        this.test = new Date();
        this.sidebarColor = "red";
        this.isCollapsed = true;
        this.mobile_menu_visible = 0;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
    }
    AuthLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AuthLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = document.getElementsByClassName('navbar')[0];
        window.addEventListener("resize", this.updateColor);
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
        this.menuItems = _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].filter(function (menuItem) { return menuItem; });
        // on this page, we need on the body tag the classes .rtl and .menu-on-right
        document.body.classList.add("rtl", "menu-on-right");
        // we also need the rtl bootstrap
        // so we add it dynamically to the head
        var head = document.head;
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.id = "rtl-id";
        link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css";
        head.appendChild(link);
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        // when we exit this page, we need to delete the classes .rtl and .menu-on-right
        // from the body tag
        document.body.classList.remove("rtl", "menu-on-right");
        // we also need to delete the rtl bootstrap, so it does not break the other pages
        // that do not make use of rtl
        document.getElementById("rtl-id").remove();
    };
    AuthLayoutComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                //asign a function
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    AuthLayoutComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AuthLayoutComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
    ]; };
    AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-auth-layout',
            template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "4Gwh":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Screens/sign-up/sign-up.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>sign-up works!</p>\n");

/***/ }),

/***/ "4fyV":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/angular-sweetalert-service/node_modules/@angular/core/@angular lazy namespace object ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "4fyV";

/***/ }),

/***/ "56va":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Screens/page-not-found/page-not-found.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\n");

/***/ }),

/***/ "5uAO":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/common-plant-pests/common-plant-pests.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n    <div class=\" row\">\n        <div *ngIf=\"pestInformation.title != undefined\" class=\" col-md-12\">\n            <div class=\" card card-user\">\n                <div class=\" card-body\">\n                    <p class=\" card-text\"></p>\n                    <div class=\" author\">\n                        <div class=\" block block-one\"></div>\n                        <div class=\" block block-two\"></div>\n                        <div class=\" block block-three\"></div>\n                        <div class=\" block block-four\"></div>\n                        <a href=\"javascript:void(0)\">\n                            <img class=\" avatar\" [src]=\"pestInformation.images[0]\" alt=\"\" />\n\n                            <h5 class=\" title\">{{pestInformation.title}}</h5>\n                        </a>\n                        <div class=\" block block-one\"></div>\n                        <div class=\" block block-two\"></div>\n                        <div class=\" block block-three\"></div>\n                        <div class=\" block block-four\"></div>\n                        <p class=\" description\">{{pestInformation.description}}</p>\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"fas fa-bug\"></i> Add Common Plant Pests\n                </div>\n                <div class=\"card-body\">\n                    <button (click)=\"trigger()\" class=\"btn btn-success\">Add Image</button>\n                    <br>\n                    <img *ngIf=\"pest.images.length != 0\" class=\"big-image\" [src]=\"src\">\n                    <br> <br>\n                    <br>\n                    <div class=\" form-group\">\n                        <label> Pest Name </label>\n                        <input [(ngModel)]=\"pest.title\" class=\" form-control\" placeholder=\"Pest Name\" type=\"text\" />\n                    </div>\n                    <br>\n\n                    <div class=\" form-group\">\n                        <label> Description </label>\n                        <textarea [(ngModel)]=\"pest.description\" autosize class=\" form-control\" placeholder=\"Description\" type=\"text\"></textarea>\n                    </div>\n                    <br>\n                    <input type=\"file\" (change)=\"readURL( $event)\" accept=\"image/*\" id=\"file-input\" style=\"display: none;\">\n                    <button (click)=\"clear()\" class=\"btn btn-secondary\">Clear</button>\n                    <button (click)=\"save()\" class=\"btn btn-primary\">Save</button>\n                </div>\n            </div>\n        </div>\n        <div class=\" col-md-8\">\n            <div class=\" card\">\n                <div class=\" card-header\" style=\"display: flex;\">\n                    <h4 class=\" card-title\"><i class=\"fas fa-bug\"></i> Common Plant Pests</h4>\n\n                </div>\n                <div class=\" card-body\">\n                    <div class=\" table-responsive\">\n                        <table class=\" table tablesorter\" id=\"\">\n                            <thead class=\" text-primary\">\n                                <tr>\n                                    <th>Image</th>\n                                    <th>Pest Name</th>\n                                    <th>Description</th>\n                                    <th>Date Created</th>\n                                    <th>Operations</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let pest of pests;let i = index\">\n                                    <td>\n                                        <img class=\"rounded-img\" [src]=\"pest.images[0]\" alt=\"\">\n                                    </td>\n                                    <td><textarea [(ngModel)]=\"pest.title\" type=\"text\" class=\"form-control\"></textarea></td>\n                                    <td><textarea [(ngModel)]=\"pest.description\" type=\"text\" class=\"form-control\"></textarea></td>\n                                    <td><span class=\"badge badge-info\">{{pest.created_at | date: 'MMMM dd, yyyy - hh:mm a'}}</span></td>\n                                    <td>\n                                        <button (click)=\"view(pest)\" class=\"btn btn-info btn-sm mr-2\">\n                                            <i class=\"far fa-eye\"></i>\n                                        </button>\n                                        <button (click)=\"update(pest,petsId[i])\" class=\"btn btn-primary btn-sm mr-2\">\n                                            <i class=\"far fa-edit\"></i>\n                                        </button>\n                                        <button (click)=\"deleteData(petsId[i])\" class=\"btn btn-danger btn-sm mr-2\">\n                                            <i class=\"far fa-trash-alt\"></i>\n                                        </button>\n\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <!-- <nav aria-label=\"Page navigation example\">\n                            <ul class=\"pagination\">\n                                <li class=\"page-item\"><a class=\"page-link\">Previous</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">1</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">2</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">3</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">Next</a></li>\n                            </ul>\n                        </nav> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "8TiE":
/*!*******************************************************!*\
  !*** ./src/app/home/products/products.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"sidebar\"><app-sidebar></app-sidebar></div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n</div>\n<div class=\" fixed-plugin\">\n  <div class=\" show-dropdown\" ngbDropdown>\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\n      <i class=\" fa fa-cog fa-2x\"> </i>\n    </a>\n    <ul ngbDropdownMenu>\n      <li class=\" header-title\">Sidebar Background</li>\n      <li class=\" adjustments-line\">\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\n          <div class=\" badge-colors text-center\">\n            <span\n              class=\" badge filter badge-danger\"\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\n            >\n            </span>\n            <span\n              class=\" badge filter badge-primary\"\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\n            >\n            </span>\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\n            </span>\n          </div>\n          <div class=\" clearfix\"></div>\n        </a>\n      </li>\n      <li class=\" adjustments-line text-center color-change\">\n        <span class=\" color-label\"> LIGHT MODE </span>\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\n        <span class=\" color-label\"> DARK MODE </span>\n      </li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCMvU528lD-FakiDNz9LDpKfCp9ZNkId-M",
        authDomain: "gardenscapes-assistance-v2.firebaseapp.com",
        projectId: "gardenscapes-assistance-v2",
        storageBucket: "gardenscapes-assistance-v2.appspot.com",
        messagingSenderId: "998391346956",
        appId: "1:998391346956:web:af2f21e1dfffe1b12c3b29"
    }
};


/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "DmeW":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/users/users.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n    <div *ngIf=\"userInfo.fullanme != undefined\" class=\" col-md-12\">\n        <div class=\" card card-user\">\n            <div class=\" card-body\">\n                <p class=\" card-text\"></p>\n                <div class=\" author\">\n                    <div class=\" block block-one\"></div>\n                    <div class=\" block block-two\"></div>\n                    <div class=\" block block-three\"></div>\n                    <div class=\" block block-four\"></div>\n                    <a href=\"javascript:void(0)\">\n                        <img alt=\"...\" class=\" avatar\" [src]=\"userInfo.profile_picture != null? userInfo.profile_picture :'assets/profile.png'\" />\n\n                        <h5 class=\" title\">{{userInfo.fullanme}}</h5>\n                    </a>\n                    <p class=\" description\">{{user.role || 'Not set'}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\" col-md-12\">\n        <div class=\" card\">\n            <div class=\" card-header\" style=\"display: flex;\">\n                <h4 class=\" card-title\">\n                    <i class=\"far fa-user\"></i> Users\n                </h4>\n            </div>\n            <div class=\" card-body\">\n                <div class=\" table-responsive\">\n                    <table class=\" table tablesorter\" id=\"\">\n                        <thead class=\" text-primary\">\n                            <tr>\n                                <th class=\"text-center\"><i class=\"far fa-user\"></i></th>\n                                <th class=\"text-center\">Fullname</th>\n                                <th class=\"text-center\">Role</th>\n                                <th class=\"text-center\">Products</th>\n                                <th class=\"text-center\">Plants</th>\n                                <th class=\"text-center\">Date Registered</th>\n                                <th class=\"text-center\">Status</th>\n                                <th class=\"text-center\">Operations</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let user of users\">\n                                <td class=\"text-center\">\n                                    <img class=\"rounded-img\" [src]=\"user.profile_picture != null? user.profile_picture :'assets/profile.png'\">\n                                </td>\n                                <td class=\"text-center\">{{user.fullanme}}</td>\n                                <td class=\"text-center\">{{user.role || 'Not set'}}</td>\n\n                                <td class=\"text-center\">0</td>\n                                <td class=\"text-center\">0</td>\n                                <td class=\"text-center\"><span class=\"badge badge-info \">January 15, 2021 - 5:00 AM</span></td>\n                                <td *ngIf=\"!user.blocked\" class=\"text-center\"><span class=\"badge badge-success \">{{user.blocked == true ? 'Blocked' : 'Active'}}</span></td>\n                                <td *ngIf=\"user.blocked\" class=\"text-center\"><span class=\"badge badge-danger \">{{user.blocked == true ? 'Blocked' : 'Active'}}</span></td>\n                                <td class=\"text-center\">\n                                    <button (click)=\"view(user) \" class=\"btn btn-info btn-sm mr-2 \">\n                                        <i class=\"far fa-eye \"></i>\n                                    </button>\n                                    <button (click)=\"setStatus(user) \" class=\"btn btn-gray btn-sm mr-2 \">\n                                        <i class=\"fas fa-ban \"></i>\n                                    </button>\n                                    <!-- <button (click)=\"deleteData() \" class=\"btn btn-danger btn-sm mr-2 \">\n                                        <i class=\"far fa-trash-alt \"></i>\n                                    </button> -->\n\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <!-- <nav aria-label=\"Page navigation example \">\n                        <ul class=\"pagination \">\n                            <li class=\"page-item \"><a class=\"page-link \">Previous</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">1</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">2</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">3</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">Next</a></li>\n                        </ul>\n                    </nav> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "F7+s":
/*!*************************************************!*\
  !*** ./src/app/home/users/users.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "FkQd":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "GVhs":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/disease-and-disorders/disease-and-disorders.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n    <div class=\" row\">\n        <div *ngIf=\"diseaseInformation.title != undefined\" class=\" col-md-12\">\n            <div class=\" card card-user\">\n                <div class=\" card-body\">\n                    <p class=\" card-text\"></p>\n                    <div class=\" author\">\n                        <div class=\" block block-one\"></div>\n                        <div class=\" block block-two\"></div>\n                        <div class=\" block block-three\"></div>\n                        <div class=\" block block-four\"></div>\n                        <a href=\"javascript:void(0)\">\n                            <img *ngFor=\"let img of diseaseInformation.images\" class=\" avatar\" [src]=\"img\" alt=\"\" />\n                            <h5 class=\" title\">{{diseaseInformation.title}}</h5>\n                        </a>\n                        <div class=\" block block-one\"></div>\n                        <div class=\" block block-two\"></div>\n                        <div class=\" block block-three\"></div>\n                        <div class=\" block block-four\"></div>\n                        <p class=\" description\">{{diseaseInformation.description}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"fas fa-exclamation-circle\"></i> Add Disease and Disorders\n                </div>\n                <div class=\"card-body\">\n                    <button (click)=\"trigger()\" class=\"btn btn-success\">Add Image</button>\n                    <br>\n                    <img *ngFor=\"let src of srcs\" class=\"block-images m-2\" [src]=\"src\">\n                    <br>\n                    <br> <br>\n                    <br>\n                    <div class=\" form-group\">\n                        <label> Disease or Disorder Name </label>\n                        <input [(ngModel)]=\"disease.title\" class=\" form-control\" placeholder=\"Disease or Disorder Name\" type=\"text\" />\n                    </div>\n                    <br>\n\n                    <div class=\" form-group\">\n                        <label> Description </label>\n                        <textarea [(ngModel)]=\"disease.description\" autosize class=\" form-control\" placeholder=\"Description\" type=\"text\"></textarea>\n                    </div>\n                    <br>\n                    <input multiple type=\"file\" (change)=\"readURL( $event.target.files, $event )\" accept=\"image/*\" id=\"file-input\" style=\"display: none;\">\n                    <button (click)=\"clear()\" class=\"btn btn-secondary\">Clear</button>\n                    <button (click)=\"save()\" class=\"btn btn-primary\">Save</button>\n                </div>\n            </div>\n        </div>\n        <div class=\" col-md-8\">\n            <div class=\" card\">\n                <div class=\" card-header\" style=\"display: flex;\">\n                    <h4 class=\" card-title\">\n                        <i class=\"fas fa-exclamation-circle\"></i> Add Disease and Disorders\n                    </h4>\n\n                </div>\n                <div class=\" card-body\">\n                    <div class=\" table-responsive\">\n                        <table class=\" table tablesorter\" id=\"\">\n                            <thead class=\" text-primary\">\n                                <tr>\n                                    <th>Images</th>\n                                    <th>Disease/Disorder</th>\n                                    <th>Description</th>\n                                    <th>Date Created</th>\n                                    <th>Operations</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let disease of diseases;let i = index\">\n                                    <td>\n                                        <div style=\"margin-left: 20px;\">\n                                            <img style=\"margin-left: -20px;border: 1px solid white !important;\" *ngFor=\"let image of disease.images\" class=\"rounded-img\" [src]=\"image\">\n                                        </div>\n\n                                    </td>\n                                    <td><textarea [(ngModel)]=\"disease.title\" type=\"text\" class=\"form-control\"></textarea></td>\n                                    <td><textarea [(ngModel)]=\"disease.description\" type=\"text\" class=\"form-control\"></textarea></td>\n                                    <td><span class=\"badge badge-info\">{{disease.created_at | date: 'MMMM dd, yyyy - hh:mm a'}}</span></td>\n                                    <td>\n                                        <button (click)=\"view(disease)\" class=\"btn btn-info btn-sm mr-2\">\n                                            <i class=\"far fa-eye\"></i>\n                                        </button>\n                                        <button (click)=\"update(disease,diseasseId[i])\" class=\"btn btn-primary btn-sm mr-2\">\n                                            <i class=\"far fa-edit\"></i>\n                                        </button>\n                                        <button (click)=\"deleteData(diseasseId[i])\" class=\"btn btn-danger btn-sm mr-2\">\n                                            <i class=\"far fa-trash-alt\"></i>\n                                        </button>\n\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <!-- <nav aria-label=\"Page navigation example\">\n                            <ul class=\"pagination\">\n                                <li class=\"page-item\"><a class=\"page-link\">Previous</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">1</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">2</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">3</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\">Next</a></li>\n                            </ul>\n                        </nav> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "K+0K":
/*!*******************************************************!*\
  !*** ./src/app/home/plantitas/plantitas.component.ts ***!
  \*******************************************************/
/*! exports provided: PlantitasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantitasComponent", function() { return PlantitasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plantitas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plantitas.component.html */ "LcRY");
/* harmony import */ var _plantitas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plantitas.component.scss */ "MvPo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");






var PlantitasComponent = /** @class */ (function () {
    function PlantitasComponent(firestore, ToastrService) {
        this.firestore = firestore;
        this.ToastrService = ToastrService;
        this.plantitas = [];
        this.plantita = {};
        this.showGuide = false;
        this.showVariety = false;
    }
    PlantitasComponent.prototype.ngOnInit = function () {
        this.retrieve();
    };
    PlantitasComponent.prototype.retrieve = function () {
        var _this = this;
        this.firestore.collection('plantitas').valueChanges().subscribe(function (data) {
            _this.plantitas = data;
        });
    };
    PlantitasComponent.prototype.view = function (plantita) {
        this.plantita = plantita;
    };
    PlantitasComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    PlantitasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-plantitas',
            template: _raw_loader_plantitas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_plantitas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], PlantitasComponent);
    return PlantitasComponent;
}());



/***/ }),

/***/ "KHW7":
/*!***************************************************************!*\
  !*** ./src/app/home/helpful-tips/helpful-tips.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwZnVsLXRpcHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n\n    <a class=\"simple-text logo-normal\">&nbsp; GARDENSCAPES ASSISTANCE </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{ menuItem.class }} nav-item\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\n                <p>{{ menuItem.title }}</p>\n            </a>\n        </li>\n    </ul>\n</div>");

/***/ }),

/***/ "KT9E":
/*!*****************************************************!*\
  !*** ./src/app/home/products/products.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./products.component.html */ "LBbs");
/* harmony import */ var _products_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component.scss */ "8TiE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(firestore, ToastrService) {
        this.firestore = firestore;
        this.ToastrService = ToastrService;
        this.products = [];
        this.product = {};
        this.showGuide = false;
        this.showVariety = false;
        this.ShowLayoutIdea = false;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.retrieve();
    };
    ProductsComponent.prototype.retrieve = function () {
        var _this = this;
        this.firestore.collection('product').valueChanges().subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductsComponent.prototype.view = function (product) {
        this.product = product;
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-products',
            template: _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_products_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "KTdG":
/*!********************************************************!*\
  !*** ./src/app/Screens/sign-up/sign-up.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Kg9R":
/*!****************************************************!*\
  !*** ./src/app/Screens/login/login.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-md-12 {\n  display: flex;\n  padding-right: 30px;\n  flex-direction: column;\n  margin: auto;\n  justify-content: center;\n  align-content: center;\n}\n.col-md-12 * {\n  text-align: center;\n  color: gray;\n  margin: 10px;\n}\n.col-md-12 .btn {\n  color: white;\n}\n.col-md-12 input,\n.col-md-12 label {\n  text-align: left;\n}\n.col-md-12 label {\n  transform: translateY(10px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFBSTs7RUFFSSxnQkFBQTtBQUVSO0FBQUk7RUFDSSwyQkFBQTtBQUVSIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC0xMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICoge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBpbnB1dCxcclxuICAgIGxhYmVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "LBbs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/products/products.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n    <div *ngIf=\"product.plantInfo != undefined\" class=\" col-md-12\">\n        <div class=\" card card-user\">\n            <div class=\" card-body\">\n                <p class=\" card-text\"></p>\n                <div class=\" author\">\n                    <div class=\" block block-one\"></div>\n                    <div class=\" block block-two\"></div>\n                    <div class=\" block block-three\"></div>\n                    <div class=\" block block-four\"></div>\n                    <a href=\"javascript:void(0)\">\n                        <img *ngFor=\"let image of product.images\" alt=\"...\" class=\" avatar\" [src]=\"image\" />\n                        <h5 class=\" title\">{{product.plantInfo.name}}</h5>\n                        <a target=\"_blank\" [href]=\"'https://www.google.com/maps/search/' + product.location.display_name\">{{product.location.display_name}}</a>\n                    </a>\n                    <br> <br> <br> <br>\n                    <p>Planting:\n                        <span style=\"color:yellowgreen\" *ngFor=\"let month of product.plantingCalendar\">{{month}},</span>\n                    </p>\n                    <p>Harvesting:\n                        <span style=\"color:yellowgreen\" *ngFor=\"let month of product.growingCalendar\">{{month}},</span>\n                    </p>\n                    <br> <br>\n                    <div class=\" block block-one\"></div>\n                    <div class=\" block block-two\"></div>\n                    <div class=\" block block-three\"></div>\n                    <div class=\" block block-four\"></div>\n                    <p class=\" description\">{{product.plantInfo.description}}</p>\n                    <br>\n                    <button (click)=\" showGuide =true;showVariety =false;ShowLayoutIdea =false\" class=\"btn btn-primary\">Guide</button>\n                    <button (click)=\" showVariety =true;showGuide =false;ShowLayoutIdea =false\" class=\"btn btn-dark\">Companions</button>\n                    <button (click)=\" ShowLayoutIdea =true;showGuide =false;showVariety =false\" class=\"btn btn-dark\">Layout Ideas</button>\n                    <div class=\"row\">\n                        <div *ngIf=\"showGuide\" class=\"col-md-12 d-flex\" style=\"align-items: center;justify-content: center;flex-direction: column;\">\n                            <br><br>\n                            <h3>Guide</h3>\n                            <h5 style=\"text-decoration: underline;\">Lan Preparation</h5>\n                            <p>{{product.guide.land_preparation}}</p>\n                            <h5 style=\"text-decoration: underline;\">Planting</h5>\n                            <p>{{product.guide.planting}}</p>\n\n                            <h5 style=\"text-decoration: underline;\">Caring</h5>\n                            <p>{{product.guide.caring}}</p>\n                            <br>\n                            <h5 style=\"text-decoration: underline;\">Harvesting</h5>\n                            <p>{{product.guide.harvesting}}</p>\n                            <h5 style=\"text-decoration: underline;\">Storing</h5>\n                            <p>{{product.guide.storing}}</p>\n                        </div>\n                        <div *ngIf=\"showVariety\" class=\"col-md-12 d-flex\" style=\"align-items: center;justify-content: center;flex-direction: column;\">\n                            <br><br>\n                            <h3>Varieties</h3>\n                            <div *ngFor=\"let variety of product.varieties\">\n                                <img alt=\"\" class=\"avatar\" [src]=\"variety.uri\" />\n                                <h5 style=\"text-align: center;\" class=\" title\">{{variety.name}}</h5>\n                            </div>\n                        </div>\n                        <div *ngIf=\"ShowLayoutIdea\" class=\"col-md-12 d-flex\" style=\"align-items: center;justify-content: center;flex-direction: column;\">\n                            <br><br>\n                            <h3>Layout Ideas</h3>\n                            <img *ngFor=\"let variety of product.layoutIdeas\" alt=\"\" class=\"avatar\" [src]=\"variety\" />\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\" col-md-12\">\n        <div class=\" card\">\n            <div class=\" card-header\" style=\"display: flex;\">\n                <h4 class=\" card-title\">\n                    <i class=\"icon-cart\"></i> Normal Products\n                </h4>\n            </div>\n            <div class=\" card-body\">\n                <div class=\" table-responsive\">\n                    <table class=\" table tablesorter\" id=\"\">\n                        <thead class=\" text-primary\">\n                            <tr>\n                                <th class=\"text-center\">Image</th>\n                                <th class=\"text-center\">Product Name</th>\n                                <th class=\"text-center\">Category</th>\n                                <th class=\"text-center\">Price</th>\n                                <th class=\"text-center\">Qtty</th>\n                                <th class=\"text-center\">Sun</th>\n                                <th class=\"text-center\">Water</th>\n                                <th class=\"text-center\">Operations</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let data of products\">\n                                <td class=\"text-center\">\n                                    <img class=\"rounded-img\" [src]=\"data.images[0]\">\n                                </td>\n                                <td class=\"text-center\">{{data.plantInfo.name}}</td>\n                                <td class=\"text-center\">{{data.plantInfo.categroy}}</td>\n                                <td class=\"text-center\">Plants</td>\n                                <td class=\"text-center text-success\">{{data.plantInfo.price | currency: ' ₱'}} </td>\n                                <td class=\"text-center\">{{data.plantInfo.quantities}}</td>\n                                <td class=\"text-center\">{{data.sunAndWater.sun}}</td>\n                                <td class=\"text-center\">{{data.sunAndWater.water}}</td>\n\n                                <td class=\"text-center\">\n                                    <button (click)=\"view(data) \" class=\"btn btn-info btn-sm mr-2 \">\n                                            <i class=\"far fa-eye \"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <!-- <nav aria-label=\"Page navigation example \">\n                        <ul class=\"pagination \">\n                            <li class=\"page-item \"><a class=\"page-link \">Previous</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">1</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">2</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">3</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">Next</a></li>\n                        </ul>\n                    </nav> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "LcRY":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/plantitas/plantitas.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n    <div *ngIf=\"plantita.plantInfo != undefined\" class=\" col-md-12\">\n        <div class=\" card card-user\">\n            <div class=\" card-body\">\n                <p class=\" card-text\"></p>\n                <div class=\" author\">\n                    <div class=\" block block-one\"></div>\n                    <div class=\" block block-two\"></div>\n                    <div class=\" block block-three\"></div>\n                    <div class=\" block block-four\"></div>\n                    <a href=\"javascript:void(0)\">\n                        <img *ngFor=\"let image of plantita.images\" alt=\"...\" class=\" avatar\" [src]=\"image\" />\n                        <h5 class=\" title\">{{plantita.plantInfo.name}}</h5>\n                        <a target=\"_blank\" [href]=\"'https://www.google.com/maps/search/' + plantita.location.display_name\">{{plantita.location.display_name}}</a>\n                    </a>\n                    <div class=\" block block-one\"></div>\n                    <div class=\" block block-two\"></div>\n                    <div class=\" block block-three\"></div>\n                    <div class=\" block block-four\"></div>\n                    <p class=\" description\">{{plantita.plantInfo.introduction}}</p>\n                    <br>\n                    <button (click)=\" showGuide =true;showVariety =false\" class=\"btn btn-primary\">Guide</button>\n                    <button (click)=\" showVariety =true;showGuide =false\" class=\"btn btn-dark\">Varieties</button>\n                    <br>\n                </div>\n\n                <div class=\"row\">\n                    <div *ngIf=\"showGuide\" class=\"col-md-12 d-flex\" style=\"align-items: center;justify-content: center;flex-direction: column;\">\n                        <br><br>\n                        <h3>Guide</h3>\n                        <h5 style=\"text-decoration: underline;\">Growing</h5>\n                        <p>{{plantita.plantInfo.growing}}</p>\n                        <br>\n                        <h5 style=\"text-decoration: underline;\">Caring</h5>\n                        <p>{{plantita.plantInfo.caring}}</p>\n                    </div>\n                    <div *ngIf=\"showVariety\" class=\"col-md-12 d-flex\" style=\"align-items: center;justify-content: center;flex-direction: column;\">\n                        <br><br>\n                        <h3>Varieties</h3>\n                        <div *ngFor=\"let variety of plantita.varieties\">\n                            <img alt=\"\" class=\"avatar\" [src]=\"variety.uri\" />\n                            <h5 style=\"text-align: center;\" class=\" title\">{{variety.name}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\" col-md-12\">\n        <div class=\" card\">\n            <div class=\" card-header\" style=\"display: flex;\">\n                <h4 class=\" card-title\">\n                    <i class=\"icon-basket-simple\"></i> Plantitas/Plantitos\n                </h4>\n            </div>\n            <div class=\" card-body\">\n                <div class=\" table-responsive\">\n                    <table class=\" table tablesorter\" id=\"\">\n                        <thead class=\" text-primary\">\n                            <tr>\n                                <th class=\"text-center\">Image</th>\n                                <th class=\"text-center\">Product Name</th>\n                                <th class=\"text-center\">Category</th>\n                                <th class=\"text-center\">Price</th>\n                                <th class=\"text-center\">Qtty</th>\n                                <th class=\"text-center\">Sun</th>\n                                <th class=\"text-center\">Water</th>\n                                <th class=\"text-center\">Operations</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let data of plantitas\">\n                                <td class=\"text-center\">\n                                    <img class=\"rounded-img\" [src]=\"data.images[0]\">\n                                </td>\n                                <td class=\"text-center\">{{data.plantInfo.name}}</td>\n                                <td class=\"text-center\">Plants</td>\n                                <td class=\"text-center text-success\">{{data.plantInfo.price | currency: ' ₱'}} </td>\n                                <td class=\"text-center\">{{data.plantInfo.quantities}}</td>\n                                <td class=\"text-center\">{{data.sunAndWater.sun}}</td>\n                                <td class=\"text-center\">{{data.sunAndWater.water}}</td>\n                                <td class=\"text-center\">\n                                    <button (click)=\"view(data) \" class=\"btn btn-info btn-sm mr-2 \">\n                                            <i class=\"far fa-eye \"></i>\n                                    </button>\n                                    <!-- <button (click)=\"edit() \" class=\"btn btn-gray btn-sm mr-2 \">\n                                            <i class=\"fas fa-ban \"></i>\n                                        </button> -->\n\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <!-- <nav aria-label=\"Page navigation example \">\n                        <ul class=\"pagination \">\n                            <li class=\"page-item \"><a class=\"page-link \">Previous</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">1</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">2</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">3</a></li>\n                            <li class=\"page-item \"><a class=\"page-link \">Next</a></li>\n                        </ul>\n                    </nav> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-footer",
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "MvPo":
/*!*********************************************************!*\
  !*** ./src/app/home/plantitas/plantitas.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFudGl0YXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        this.sidebarColor = "red";
    }
    AdminLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AdminLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    AdminLayoutComponent.ctorParameters = function () { return []; };
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-admin-layout",
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\n    <div class=\" container-fluid\">\n        <div class=\" navbar-wrapper\">\n            <div class=\" navbar-toggle d-inline\">\n                <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n          <span class=\" navbar-toggler-bar bar1\"> </span>\n          <span class=\" navbar-toggler-bar bar2\"> </span>\n          <span class=\" navbar-toggler-bar bar3\"> </span>\n        </button>\n            </div>\n            <a class=\" navbar-brand\" href=\"javascript:void(0)\"> {{ getTitle() }} </a>\n        </div>\n        <button aria-label=\"Toggle navigation\" class=\" navbar-toggler\" (click)=\"collapse()\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\" id=\"navigation\" type=\"button\">\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n    </button>\n        <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\n            <ul class=\" navbar-nav ml-auto\">\n                <!-- <li class=\" search-bar input-group\">\n          <button\n            class=\" btn btn-link\"\n            data-target=\"#searchModal\"\n            data-toggle=\"modal\"\n            (click)=\"open(content)\"\n            id=\"search-button\"\n          >\n            <i class=\" tim-icons icon-zoom-split\"> </i>\n            <span class=\" d-lg-none d-md-block\"> Search </span>\n          </button>\n        </li> -->\n                <!-- <li class=\" nav-item\" ngbDropdown>\n          <a\n            class=\" nav-link\"\n            data-toggle=\"dropdown\"\n            href=\"javascript:void(0)\"\n            ngbDropdownToggle\n          >\n            <div class=\" notification d-none d-lg-block d-xl-block\"></div>\n            <i class=\" tim-icons icon-sound-wave\"> </i>\n            <p class=\" d-lg-none\">Notifications</p>\n          </a>\n          <ul class=\" dropdown-menu-right dropdown-navbar\" ngbDropdownMenu>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Mike John responded to your email\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                You have 5 more tasks\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Your friend Michael is in town\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Another notification\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Another one\n              </a>\n            </li>\n          </ul>\n        </li> -->\n                <li class=\" nav-item\" ngbDropdown>\n                    <a class=\" nav-link\" data-toggle=\"dropdown\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                        <div class=\" photo\">\n                            <img alt=\"Profile Photo\" src=\"assets/img/anime3.png\" />\n                        </div>\n                        <b class=\" caret d-none d-lg-block d-xl-block\"> </b>\n                        <p class=\" d-lg-none\">Log out</p>\n                    </a>\n                    <ul class=\" dropdown-navbar\" ngbDropdownMenu>\n                        <!-- <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Profile\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Settings\n              </a>\n            </li> -->\n                        <li class=\" dropdown-divider\"></li>\n                        <li class=\" nav-link\">\n                            <a class=\" nav-item\" routerLink=\"\" ngbDropdownItem> \n                                 Log out\n                              </a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\" separator d-lg-none\"></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<ng-template #content let-modal>\n    <div class=\" modal-header\">\n        <input class=\" form-control\" id=\"inlineFormInputGroup\" placeholder=\"SEARCH\" type=\"text\" />\n\n        <button aria-label=\"Close\" class=\" close\" data-dismiss=\"modal\" type=\"button\" (click)=\"modal.dismiss('Cross click')\">\n      <i class=\" tim-icons icon-simple-remove\"> </i>\n    </button>\n    </div>\n\n</ng-template>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "black-dashboard-angular";
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WSaj":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"sidebar\">\n    <div class=\"logo\">\n      <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-sidebar-logo\" class=\"simple-text logo-mini\">\n        <div class=\"logo-img\">\n          <img src=\"./assets/img/angular2-logo-white.png\" />\n        </div>\n      </a>\n      <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-sidebar-logo\" class=\"simple-text logo-normal\">\n        الإبداعية تيم\n      </a>\n    </div>\n    <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n        <li\n          routerLinkActive=\"active\"\n          *ngFor=\"let menuItem of menuItems\"\n          class=\"{{ menuItem.class }} nav-item\"\n        >\n          <a [routerLink]=\"[menuItem.path]\">\n            <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\n            <p>{{ menuItem.rtlTitle }}</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n  <div class=\"main-panel\">\n    <nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\n      <div class=\" container-fluid\">\n        <div class=\" navbar-wrapper\">\n          <div class=\" navbar-toggle d-inline\">\n            <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n              <span class=\" navbar-toggler-bar bar1\"> </span>\n              <span class=\" navbar-toggler-bar bar2\"> </span>\n              <span class=\" navbar-toggler-bar bar3\"> </span>\n            </button>\n          </div>\n          <a class=\" navbar-brand\" href=\"javascript:void(0)\"> ار تي ال </a>\n        </div>\n        <button\n          aria-label=\"Toggle navigation\"\n          class=\" navbar-toggler\"\n          (click)=\"collapse()\"\n          [attr.aria-expanded]=\"!isCollapsed\"\n          aria-controls=\"collapseExample\"\n          id=\"navigation\"\n          type=\"button\"\n        >\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n        </button>\n        <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\n          <ul class=\" navbar-nav mr-auto\">\n            <li class=\" search-bar input-group\">\n              <button\n                class=\" btn btn-link\"\n                data-target=\"#searchModal\"\n                data-toggle=\"modal\"\n                (click)=\"open(content)\"\n                id=\"search-button\"\n              >\n                <i class=\" tim-icons icon-zoom-split\"> </i>\n                <span class=\" d-lg-none d-md-block\"> بحث </span>\n              </button>\n            </li>\n            <li class=\" nav-item\" ngbDropdown>\n              <a\n                class=\" nav-link\"\n                data-toggle=\"dropdown\"\n                ngbDropdownToggle\n              >\n                <div class=\" notification d-none d-lg-block d-xl-block\"></div>\n                <i class=\" tim-icons icon-sound-wave\"> </i>\n                <p class=\" d-lg-none\">إخطارات</p>\n              </a>\n              <ul class=\" dropdown-menu-right dropdown-navbar\" ngbDropdownMenu>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    ورد مايك جون على بريدك الإلكتروني\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    لديك 5 مهام أخرى\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    صديقك مايكل في المدينة\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    إشعار آخر\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    واحدة أخرى\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\" nav-item\" ngbDropdown>\n              <a\n                class=\" nav-link\"\n                data-toggle=\"dropdown\"\n                ngbDropdownToggle\n              >\n                <div class=\" photo\">\n                  <img alt=\"Profile Photo\" src=\"assets/img/anime3.png\" />\n                </div>\n                <b class=\" caret d-none d-lg-block d-xl-block\"> </b>\n                <p class=\" d-lg-none\">الخروج</p>\n              </a>\n              <ul class=\" dropdown-navbar\" ngbDropdownMenu>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    الملف الشخصي\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    الإعدادات\n                  </a>\n                </li>\n                <li class=\" dropdown-divider\"></li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    الخروج\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\" separator d-lg-none\"></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <router-outlet></router-outlet>\n    <footer class=\" footer\">\n      <div class=\" container-fluid\">\n        <ul class=\" nav\">\n          <li class=\" nav-item\">\n            <a class=\" nav-link\" href=\"https://www.creative-tim.com?ref=bda-auth-layout-footer\">\n              تيم الإبداعية\n            </a>\n          </li>\n          <li class=\" nav-item\">\n            <a class=\" nav-link\" href=\"https://www.creative-tim.com/about-us?ref=bda-auth-layout-footer\">\n              معلومات عنا\n            </a>\n          </li>\n          <li class=\" nav-item\">\n            <a class=\" nav-link\" href=\"http://blog.creative-tim.com?ref=bda-auth-layout-footer\"> مدونة </a>\n          </li>\n        </ul>\n        <div class=\" copyright\">\n          &copy; {{ test | date: \"yyyy\" }} مصنوع من\n          <i class=\" tim-icons icon-heart-2\"> </i> بواسطة\n          <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-footer\" target=\"_blank\"> تيم الإبداعية </a>\n          من أجل شبكة أفضل.\n        </div>\n      </div>\n    </footer>\n\n  </div>\n</div>\n<div class=\" fixed-plugin\">\n  <div class=\" show-dropdown\" ngbDropdown>\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\n      <i class=\" fa fa-cog fa-2x\"> </i>\n    </a>\n    <ul ngbDropdownMenu>\n      <li class=\" header-title\">خلفية الشريط الجانبي</li>\n      <li class=\" adjustments-line\">\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\n          <div class=\" badge-colors text-center\">\n            <span\n              class=\" badge filter badge-danger\"\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\n            >\n            </span>\n            <span\n              class=\" badge filter badge-primary\"\n              data-color=\"primary\"\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\n            >\n            </span>\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\n            </span>\n          </div>\n          <div class=\" clearfix\"></div>\n        </a>\n      </li>\n      <li class=\" adjustments-line text-center color-change\">\n        <span class=\" color-label\"> وضع الضوء </span>\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\n        <span class=\" color-label\"> وضع الظلام</span>\n      </li>\n      <li class=\" button-container\">\n        <a\n          class=\" btn btn-primary btn-block btn-round\"\n          href=\"https://www.creative-tim.com/product/black-dashboard-angular?ref=bda-auth-layout-fixed-plugin\"\n          target=\"_blank\"\n        >\n          التحميل الان\n        </a>\n        <a\n          class=\" btn btn-default btn-block btn-round\"\n          href=\"https://demos.creative-tim.com/black-dashboard-angular/#/documentation/tutorial?ref=bda-auth-layout-fixed-plugin\"\n          target=\"_blank\"\n        >\n          كابل بيانات\n        </a>\n      </li>\n      <li class=\" header-title\">شكرا لك على 95 سهم!</li>\n      <li class=\" button-container text-center\">\n        <button class=\" btn btn-round btn-info\" id=\"twitter\">\n          <i class=\" fab fa-twitter\"> </i> · 45\n        </button>\n        <button class=\" btn btn-round btn-info\" id=\"facebook\">\n          <i class=\" fab fa-facebook-f\"> </i> · 50\n        </button>\n        <br />\n\n        <br />\n\n        <a\n          aria-label=\"Star ntkme/github-buttons on GitHub\"\n          class=\" github-button\"\n          data-icon=\"octicon-star\"\n          data-show-count=\"true\"\n          data-size=\"large\"\n          href=\"https://github.com/creativetimofficial/black-dashboard-angular?ref=bda-auth-layout-fixed-plugin\"\n        >\n          نجمة\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n    <ng-template #content let-modal>\n      <div class=\" modal-header\">\n        <input\n          class=\" form-control\"\n          id=\"inlineFormInputGroup\"\n          placeholder=\"بحث\"\n          type=\"text\"\n        />\n\n        <button\n          aria-label=\"Close\"\n          class=\" close\"\n          data-dismiss=\"modal\"\n          type=\"button\"\n          (click)=\"modal.dismiss('Cross click')\"\n        >\n          <i class=\" tim-icons icon-simple-remove\"> </i>\n        </button>\n      </div>\n\n    </ng-template>\n");

/***/ }),

/***/ "Wqpf":
/*!*******************************************************************************!*\
  !*** ./src/app/home/disease-and-disorders/disease-and-disorders.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DiseaseAndDisordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseAndDisordersComponent", function() { return DiseaseAndDisordersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_disease_and_disorders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./disease-and-disorders.component.html */ "GVhs");
/* harmony import */ var _disease_and_disorders_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disease-and-disorders.component.scss */ "zHLe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "JZFu");







var DiseaseAndDisordersComponent = /** @class */ (function () {
    function DiseaseAndDisordersComponent(firestore, ToastrService) {
        this.firestore = firestore;
        this.ToastrService = ToastrService;
        this.storage = firebase__WEBPACK_IMPORTED_MODULE_6__["default"].storage();
        this.disease = {
            images: [],
            title: '',
            description: ''
        };
        this.diseaseInformation = {};
        this.diseases = [];
        this.diseasseId = [];
        this.srcs = [];
    }
    DiseaseAndDisordersComponent.prototype.ngOnInit = function () {
        this.retrieve();
    };
    DiseaseAndDisordersComponent.prototype.trigger = function () {
        document.getElementById('file-input').click();
    };
    DiseaseAndDisordersComponent.prototype.readURL = function (files, event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.srcs = [];
            Object.keys(files).forEach(function (i) {
                _this.disease.images.push(files[i]);
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]);
                reader.onload = function (event) {
                    _this.srcs.push(event.target.result);
                };
            });
        }
    };
    DiseaseAndDisordersComponent.prototype.retrieve = function () {
        var _this = this;
        this.diseases = [];
        this.diseasseId = [];
        this.firestore.collection('diseases').get().subscribe(function (pests) {
            pests.forEach(function (pest) {
                _this.diseases.push(pest.data());
                _this.diseasseId.push(pest.id);
            });
        });
    };
    DiseaseAndDisordersComponent.prototype.save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var index, file, photo_url;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.disease.images.length == 0) {
                            this.ToastrService.error("Pest Images could not be empty");
                            return [2 /*return*/];
                        }
                        if (this.disease.title == "" || this.disease.description == "") {
                            this.ToastrService.error("All Fields should  not be empty");
                            return [2 /*return*/];
                        }
                        this.ToastrService.info("Uploading Images");
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index <= this.disease.images.length - 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.storage.ref('disease/' + this.disease.images[index].name).put(this.disease.images[index])];
                    case 2:
                        file = _a.sent();
                        return [4 /*yield*/, file.ref.getDownloadURL()];
                    case 3:
                        photo_url = _a.sent();
                        this.disease.images.splice(index, 1, photo_url);
                        _a.label = 4;
                    case 4:
                        index++;
                        return [3 /*break*/, 1];
                    case 5:
                        this.disease['created_at'] = Date.now();
                        this.firestore.collection('diseases').add(this.disease);
                        this.ToastrService.success(this.disease.title + " has been saved");
                        this.retrieve();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiseaseAndDisordersComponent.prototype.update = function (disease, id) {
        disease['updated_at'] = Date.now();
        this.firestore.collection('diseases').doc(id).update(disease);
        this.ToastrService.success(disease.title + " has been updated");
        this.retrieve();
    };
    DiseaseAndDisordersComponent.prototype.clear = function () {
        this.srcs = [];
        this.disease = {
            images: [],
            title: '',
            description: ''
        };
        this.retrieve();
    };
    DiseaseAndDisordersComponent.prototype.deleteData = function (id) {
        this.firestore.collection('diseases').doc(id).delete();
        this.retrieve();
        this.ToastrService.info("Disease or Disorder has been deleted");
    };
    DiseaseAndDisordersComponent.prototype.view = function (disease) {
        this.diseaseInformation = disease;
    };
    DiseaseAndDisordersComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    DiseaseAndDisordersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-disease-and-disorders',
            template: _raw_loader_disease_and_disorders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_disease_and_disorders_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], DiseaseAndDisordersComponent);
    return DiseaseAndDisordersComponent;
}());



/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <footer class=\" footer\">\n  <div class=\" container-fluid\">\n    <ul class=\" nav\">\n      <li class=\" nav-item\">\n        <a class=\" nav-link\" href=\"https://www.creative-tim.com?ref=bda-footer\">\n          Creative Tim\n        </a>\n      </li>\n      <li class=\" nav-item\">\n        <a class=\" nav-link\" href=\"https://www.creative-tim.com/about-us?ref=bda-footer\">\n          About Us\n        </a>\n      </li>\n      <li class=\" nav-item\">\n        <a class=\" nav-link\" href=\"http://blog.creative-tim.com?ref=bda-footer\"> Blog </a>\n      </li>\n    </ul>\n    <div class=\" copyright\">\n      &copy; {{ test | date: \"yyyy\" }} made with\n      <i class=\" tim-icons icon-heart-2\"> </i> by\n      <a href=\"https://www.creative-tim.com?ref=bda-footer\" target=\"_blank\"> Creative Tim </a>\n      for a better web.\n    </div>\n  </div>\n</footer> -->");

/***/ }),

/***/ "XDVm":
/*!***************************************************************************!*\
  !*** ./src/app/home/common-plant-pests/common-plant-pests.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb24tcGxhbnQtcGVzdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-textarea-autosize */ "L/25");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var angular_sweetalert_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-sweetalert-service */ "ZFwl");
/* harmony import */ var _Screens_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Screens/login/login.component */ "3N6j");
/* harmony import */ var _Screens_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Screens/sign-up/sign-up.component */ "1zIh");
/* harmony import */ var _Screens_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Screens/page-not-found/page-not-found.component */ "hpJx");
/* harmony import */ var _home_common_plant_pests_common_plant_pests_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/common-plant-pests/common-plant-pests.component */ "dkxN");
/* harmony import */ var _home_disease_and_disorders_disease_and_disorders_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/disease-and-disorders/disease-and-disorders.component */ "Wqpf");
/* harmony import */ var _home_helpful_tips_helpful_tips_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/helpful-tips/helpful-tips.component */ "+Nmm");
/* harmony import */ var _home_users_users_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/users/users.component */ "nd/I");
/* harmony import */ var _home_plantitas_plantitas_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/plantitas/plantitas.component */ "K+0K");
/* harmony import */ var _home_products_products_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/products/products.component */ "KT9E");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_14__["TextareaAutosizeModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase)
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__["AuthLayoutComponent"], _Screens_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _Screens_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"], _Screens_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"], _home_common_plant_pests_common_plant_pests_component__WEBPACK_IMPORTED_MODULE_20__["CommonPlantPestsComponent"], _home_disease_and_disorders_disease_and_disorders_component__WEBPACK_IMPORTED_MODULE_21__["DiseaseAndDisordersComponent"], _home_helpful_tips_helpful_tips_component__WEBPACK_IMPORTED_MODULE_22__["HelpfulTipsComponent"], _home_users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"], _home_plantitas_plantitas_component__WEBPACK_IMPORTED_MODULE_24__["PlantitasComponent"], _home_products_products_component__WEBPACK_IMPORTED_MODULE_25__["ProductsComponent"]],
            providers: [
                angular_sweetalert_service__WEBPACK_IMPORTED_MODULE_16__["SweetAlertService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"default~layouts-admin-layout-admin-layout-module~layouts-auth-layout-auth-layout-module",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"PTPi",
		"default~layouts-admin-layout-admin-layout-module~layouts-auth-layout-auth-layout-module",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "dkxN":
/*!*************************************************************************!*\
  !*** ./src/app/home/common-plant-pests/common-plant-pests.component.ts ***!
  \*************************************************************************/
/*! exports provided: CommonPlantPestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonPlantPestsComponent", function() { return CommonPlantPestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_common_plant_pests_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./common-plant-pests.component.html */ "5uAO");
/* harmony import */ var _common_plant_pests_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-plant-pests.component.scss */ "XDVm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "JZFu");







var CommonPlantPestsComponent = /** @class */ (function () {
    function CommonPlantPestsComponent(firestore, ToastrService) {
        var _this = this;
        this.firestore = firestore;
        this.ToastrService = ToastrService;
        this.add = false;
        this.storage = firebase__WEBPACK_IMPORTED_MODULE_6__["default"].storage();
        this.pest = {
            images: [],
            title: '',
            description: ''
        };
        this.src = "../../../assets//placeholders//green.png";
        this.pestInformation = {};
        this.pests = [];
        this.petsId = [];
        this.reader = new FileReader();
        this.reader.onload = function (event) {
            _this.src = String(event.target.result);
        };
    }
    CommonPlantPestsComponent.prototype.ngOnInit = function () {
        this.retrieve();
    };
    CommonPlantPestsComponent.prototype.trigger = function () {
        document.getElementById('file-input').click();
    };
    CommonPlantPestsComponent.prototype.readURL = function (e) {
        this.pest.images = [];
        var target = e.target;
        if (target.files.length > 0) {
            this.reader.readAsDataURL(target.files[0]);
            this.pest.images.push(target.files[0]);
            this.src = target.files[0];
        }
    };
    CommonPlantPestsComponent.prototype.retrieve = function () {
        var _this = this;
        this.pests = [];
        this.petsId = [];
        this.firestore.collection('pests').get().subscribe(function (pests) {
            pests.forEach(function (pest) {
                _this.pests.push(pest.data());
                _this.petsId.push(pest.id);
            });
        });
    };
    CommonPlantPestsComponent.prototype.save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var file, photo_url;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.pest.images.length == 0) {
                            this.ToastrService.error("Pest Images could not be empty");
                            return [2 /*return*/];
                        }
                        if (this.pest.title == "" || this.pest.description == "") {
                            this.ToastrService.error("All Fields should  not be empty");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.storage.ref('pests/' + this.pest.images[0].name).put(this.pest.images[0])];
                    case 1:
                        file = _a.sent();
                        return [4 /*yield*/, file.ref.getDownloadURL()];
                    case 2:
                        photo_url = _a.sent();
                        this.pest['created_at'] = Date.now();
                        this.pest.images[0] = photo_url;
                        this.firestore.collection('pests').add(this.pest);
                        this.ToastrService.success(this.pest.title + " has been saved");
                        this.retrieve();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonPlantPestsComponent.prototype.update = function (pest, id) {
        pest['updated_at'] = Date.now();
        this.firestore.collection('pests').doc(id).update(pest);
        this.ToastrService.success(pest.title + " has been updated");
        this.retrieve();
    };
    CommonPlantPestsComponent.prototype.clear = function () {
        this.pest = {
            images: [],
            title: '',
            description: ''
        };
        this.retrieve();
    };
    CommonPlantPestsComponent.prototype.deleteData = function (id) {
        this.firestore.collection('pests').doc(id).delete();
        this.retrieve();
        this.ToastrService.info("Pest has been deleted");
    };
    CommonPlantPestsComponent.prototype.view = function (pest) {
        this.pestInformation = pest;
    };
    CommonPlantPestsComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    CommonPlantPestsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-common-plant-pests',
            template: _raw_loader_common_plant_pests_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_common_plant_pests_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], CommonPlantPestsComponent);
    return CommonPlantPestsComponent;
}());



/***/ }),

/***/ "hpJx":
/*!********************************************************************!*\
  !*** ./src/app/Screens/page-not-found/page-not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "56va");
/* harmony import */ var _page_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component.scss */ "qp4l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.ctorParameters = function () { return []; };
    PageNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-page-not-found',
            template: _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_page_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, modalService) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.modalService = modalService;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("resize", this.updateColor);
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                //asign a function
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    };
    NavbarComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NavbarComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener("resize", this.updateColor);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-navbar",
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "moaW":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Screens/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <br>\n            <br>\n            <br>\n            <p style=\"color:white\">Welcome to </p>\n            <br>\n            <h1 style=\"font-weight: 500;color:#02AF50;font-weight: 200;margin-bottom: 5px;\">GARDENSCAPES.</h1>\n            <h1 style=\"font-weight: 500;color:gray;font-weight: 200;margin-bottom: 5px;\">ASSISTANCE.</h1>\n            <br>\n\n\n            <label for=\"Email\">Email</label>\n            <input (keyup.enter)=\"login()\" [(ngModel)]=\"email\" type=\"text\" class=\"form-control\" id=\"Email\" required>\n            <label for=\"Password\">Password</label>\n            <input (keyup.enter)=\"login()\" [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" id=\"Password\" required>\n            <br>\n            <button (click)=\"login()\" class=\"btn btn-success\">Log In</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "nd/I":
/*!***********************************************!*\
  !*** ./src/app/home/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./users.component.html */ "DmeW");
/* harmony import */ var _users_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component.scss */ "F7+s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");





var UsersComponent = /** @class */ (function () {
    function UsersComponent(firestore) {
        this.firestore = firestore;
        this.users = [];
        this.userInfo = {};
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.users = [];
        this.firestore.collection('users').get().subscribe(function (users) {
            users.forEach(function (user) {
                _this.users.push(user.data());
            });
        });
    };
    UsersComponent.prototype.setStatus = function (user) {
        var _this = this;
        this.firestore.collection('users', function (ref) { return ref
            .where('email', '==', user.email); }).get().subscribe(function (users) {
            users.forEach(function (user) {
                var blocked = user.data()['blocked'] == true ? false : true;
                _this.firestore.collection('users').doc(user.id).update({
                    blocked: blocked
                });
            });
        });
        this.getUsers();
    };
    UsersComponent.prototype.deleteUser = function () {
    };
    UsersComponent.prototype.view = function (user) {
        this.userInfo = user;
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
    ]; };
    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-users',
            template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_users_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "qp4l":
/*!**********************************************************************!*\
  !*** ./src/app/Screens/page-not-found/page-not-found.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _Screens_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Screens/login/login.component */ "3N6j");
/* harmony import */ var _Screens_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Screens/sign-up/sign-up.component */ "1zIh");
/* harmony import */ var _home_common_plant_pests_common_plant_pests_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/common-plant-pests/common-plant-pests.component */ "dkxN");
/* harmony import */ var _home_disease_and_disorders_disease_and_disorders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/disease-and-disorders/disease-and-disorders.component */ "Wqpf");
/* harmony import */ var _home_helpful_tips_helpful_tips_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/helpful-tips/helpful-tips.component */ "+Nmm");
/* harmony import */ var _home_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/users/users.component */ "nd/I");
/* harmony import */ var _home_plantitas_plantitas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/plantitas/plantitas.component */ "K+0K");
/* harmony import */ var _home_products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/products/products.component */ "KT9E");















var routes = [
    {
        path: "",
        component: _Screens_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: "sign-up",
        component: _Screens_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"]
    },
    {
        path: "home",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: "dashboard",
                loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
            },
            {
                path: "common-plant-pests",
                component: _home_common_plant_pests_common_plant_pests_component__WEBPACK_IMPORTED_MODULE_9__["CommonPlantPestsComponent"]
            },
            {
                path: "plant-disease-and-disorders",
                component: _home_disease_and_disorders_disease_and_disorders_component__WEBPACK_IMPORTED_MODULE_10__["DiseaseAndDisordersComponent"]
            },
            {
                path: "helpful-tips",
                component: _home_helpful_tips_helpful_tips_component__WEBPACK_IMPORTED_MODULE_11__["HelpfulTipsComponent"]
            },
            {
                path: "users",
                component: _home_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"]
            },
            {
                path: "plantitas",
                component: _home_plantitas_plantitas_component__WEBPACK_IMPORTED_MODULE_13__["PlantitasComponent"]
            },
            {
                path: "products",
                component: _home_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"]
            },
        ]
    },
    {
        path: "",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: "",
                loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ROUTES = [
    // {
    //     path: "/dashboard",
    //     title: "Dashboard",
    //     rtlTitle: "",
    //     icon: "icon-chart-pie-36",
    //     class: ""
    //   },
    {
        path: "/home/plantitas",
        title: "Plantitas/Plantitos",
        rtlTitle: "",
        icon: "icon-basket-simple",
        class: ""
    },
    {
        path: "/home/products",
        title: "Normal Products",
        rtlTitle: "",
        icon: "icon-cart",
        class: ""
    },
    {
        path: "/home/users",
        title: "Users",
        rtlTitle: "",
        icon: "icon-single-02",
        class: ""
    },
    {
        path: "/home/common-plant-pests",
        title: "Common Plant Pests",
        rtlTitle: "",
        icon: "icon-alert-circle-exc",
        class: ""
    },
    {
        path: "/home/plant-disease-and-disorders",
        title: "Disease and Disorders",
        rtlTitle: "",
        icon: "icon-puzzle-10",
        class: ""
    },
    {
        path: "/home/helpful-tips",
        title: "Helpful Tips",
        rtlTitle: "",
        icon: "icon-bulb-63",
        class: ""
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-sidebar",
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zHLe":
/*!*********************************************************************************!*\
  !*** ./src/app/home/disease-and-disorders/disease-and-disorders.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNlYXNlLWFuZC1kaXNvcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
 =========================================================
 * Black Dashboard Angular - v1.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map