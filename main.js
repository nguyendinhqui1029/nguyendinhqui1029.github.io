(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Modules/m_bando/m_bando.html":
/*!**********************************************!*\
  !*** ./src/app/Modules/m_bando/m_bando.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade in\" id=\"hienbando\" role=\"dialog\" >\r\n    <div class=\"modal-dialog\" style=\"width: 600px;\">\r\n        <div class=\"modal-content \" >\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" data-dismiss=\"modal\" type=\"button\">×</button>\r\n                <h1 class=\"modal-title\">Bản đồ</h1>\r\n            </div>\r\n            \r\n           <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" >\r\n                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" ></agm-marker>\r\n                   \r\n              </agm-map>\r\n          \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Modules/m_bando/m_bando.ts":
/*!********************************************!*\
  !*** ./src/app/Modules/m_bando/m_bando.ts ***!
  \********************************************/
/*! exports provided: M_BANDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M_BANDO", function() { return M_BANDO; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_diadiemthanhpholon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/diadiemthanhpholon */ "./src/app/model/diadiemthanhpholon.ts");
/* harmony import */ var src_app_model_chinhanh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/chinhanh */ "./src/app/model/chinhanh.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var M_BANDO = /** @class */ (function () {
    ////////
    function M_BANDO() {
        this.zoom = 9;
        this.setCurrentPosition();
    }
    M_BANDO.prototype.ngOnInit = function () {
        if (this.toado != undefined) {
            this.latitude = parseFloat(this.toado.kinhdo);
            this.longitude = parseFloat(this.toado.vido);
        }
        else if (this.toadochinhanh != undefined) {
            this.latitude = parseFloat(this.toadochinhanh.kinhdo_chinhanh);
            this.longitude = parseFloat(this.toadochinhanh.vido_chinhanh);
        }
    };
    M_BANDO.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_model_diadiemthanhpholon__WEBPACK_IMPORTED_MODULE_1__["Diadiemthanhpholon"])
    ], M_BANDO.prototype, "toado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_model_chinhanh__WEBPACK_IMPORTED_MODULE_2__["ChiNhanh"])
    ], M_BANDO.prototype, "toadochinhanh", void 0);
    M_BANDO = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm_bando',
            styles: ["\n    agm-map {\n      height: 400px;\n    }\n  "],
            template: __webpack_require__(/*! ./m_bando.html */ "./src/app/Modules/m_bando/m_bando.html")
        }),
        __metadata("design:paramtypes", [])
    ], M_BANDO);
    return M_BANDO;
}());



/***/ }),

/***/ "./src/app/Modules/m_chitietdatve/m_chitietdatve.html":
/*!************************************************************!*\
  !*** ./src/app/Modules/m_chitietdatve/m_chitietdatve.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade in\" id=\"DatveModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" style=\"width: 490px\">\r\n        <div class=\"modal-content \">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" data-dismiss=\"modal\" type=\"button\" id=\"dongchitietdatve\">×</button>\r\n                <h1 class=\"modal-title\">Thông Tin Đặt Vé</h1>\r\n            </div>\r\n            <div class=\"khungchitietmuave\">\r\n                <div class=\"col-sm-4 col-xs-12 col-ms-12\" style=\"width:518px; margin-right: 10px; margin-left: -15px\">\r\n                    <div class=\"panel\">\r\n                        <div *ngIf=\"tuyenduong==null;else nguoclai\" style=\"text-align: center;\">\r\n                            <img src=\"../../../assets/Content/img/loading.gif\" />\r\n                        </div>\r\n\r\n                        <ng-template #nguoclai>\r\n                            <p class=\"text-center text-primary text-uppercase\">{{tuyenduong.bendi}} -\r\n                                {{tuyenduong.benden}}\r\n                                ngày <span ng-bind-html=\"step1Info.departureDate|svcDate\">{{chitietdatve.ngaydi}}</span></p>\r\n                            <form id=\"form-steps\" name=\"form\" #form_dat_ve=\"ngForm\" role=\"form\">\r\n                                <fieldset>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">Chọn tuyến xe</label>\r\n                                                <div class=\"controls\">\r\n                                                    <i class=\"fa fa-bus text-primary\"></i>\r\n                                                    <p class=\"form-control\">\r\n                                                        <span class=\"f-left\">{{tuyenduong.bendi}} ⇒\r\n                                                            {{tuyenduong.benden}}</span>\r\n                                                        <span class=\"f-right\">\r\n                                                            <span>Giá vé: {{tuyenduong.giave|number}}<sup>₫</sup></span>&nbsp;\r\n                                                        </span>\r\n                                                    </p>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">Chọn giờ khởi hành</label>\r\n                                                <div class=\"controls\">\r\n                                                    <i class=\"fa fa-clock-o text-primary\"></i>\r\n                                                    <select class=\"form-control\" (change)=\"thaydoigio()\" [(ngModel)]=\"chitietdatve.giodi\"\r\n                                                        #giochay=\"ngModel\" id=\"giochay\" name=\"giochay\">\r\n                                                        <option *ngFor=\"let giochay of ds_giokhoihanh\" value=\"{{giochay}}\">{{giochay}}</option>\r\n                                                    </select>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <div class=\"form-group\" style=\"position: relative;\">\r\n\r\n                                                <label for=\"\" (click)=\"chonghe()\">Nhấn để chọn số ghế\r\n                                                    <i class=\"fa fa-angle-double-up\" id=\"muoiten\" style=\"font-size: 20px;\"></i>\r\n                                                    <span class=\"thong_bao_loi\">&nbsp;*</span>\r\n                                                    <span class=\"thong_bao_loi\" style=\"margin-left: 30px;\" id=\"thongbaochonghe\"></span>\r\n                                                </label>\r\n                                                <div class=\"controls\" id=\"danhsachghe\" style=\"display: none;\">\r\n                                                    <table style=\"width:100%; \">\r\n                                                        <thead style=\"text-align: center; border: slateblue;\">\r\n                                                            <td>\r\n                                                                <h3>Tầng Dưới</h3>\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                <h3>Tầng Trên</h3>\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                <h3>Tầng Dưới</h3>\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                <h3>Tầng Trên</h3>\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                <h3>Tầng Dưới</h3>\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                <h3>Tầng Trên</h3>\r\n                                                            </td>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                            <tr *ngIf=\"tongtien===0;else nguoclailoading\" style=\"text-align: center;\">\r\n                                                                <td colspan=\"6\">\r\n                                                                    <img src=\"../../../assets/Content/img/loading.gif\" />\r\n                                                                </td>\r\n\r\n                                                            </tr>\r\n\r\n                                                            <ng-template #nguoclailoading>\r\n                                                                <tr *ngFor=\"let ds_ghe of ds_khungghe\" style=\"margin: 3px; text-align: center;\">\r\n                                                                    <td *ngFor=\"let ghe of ds_ghe\" style=\"padding-bottom: 5px\">\r\n                                                                        <button *ngIf=\"ghe.trangthai==0 else nguoclai\"\r\n                                                                            (click)=\"gheduocclick($event)\" type=\"button\"\r\n                                                                            style=\"width: 90%; height: 25px; background-image: linear-gradient(to right,#009ACD,#00BFFF ,#009ACD);\">\r\n                                                                            <i class=\"fa fa-laptop\" style=\"font-size: 20px\">{{ghe.tenghe}}</i>\r\n                                                                            <input type=\"hidden\" value=\"{{ghe.trangthai}}\" />\r\n                                                                        </button>\r\n                                                                        <ng-template #nguoclai>\r\n                                                                            <button (click)=\"gheduocclick($event)\" type=\"button\"\r\n                                                                                style=\"width: 90%; height: 25px; background-image: linear-gradient(to right,rgb(231, 35, 35),rgb(238, 128, 128) ,rgb(231, 35, 35));\">\r\n                                                                                <i class=\"fa fa-laptop\" style=\"font-size: 20px\">{{ghe.tenghe}}</i>\r\n                                                                                <input type=\"hidden\" value=\"{{ghe.trangthai}}\" />\r\n                                                                            </button>\r\n                                                                        </ng-template>\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                            </ng-template>\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">Số điện thoại</label>\r\n                                                <div class=\"controls\">\r\n                                                    <i class=\"fa fa-ticket text-primary\"></i>\r\n                                                    \r\n                                                        <p class=\"form-control\"  >\r\n                                                            <input \r\n                                                                id=\"sodienthoai\" name=\"sodienthoai\" placeholder=\"Điền số di động\"\r\n                                                                type=\"text\" style=\"width: 100%; border-radius: 5px 5px\"\r\n                                                                #sodienthoai=\"ngModel\" value=\"chitietdatve.sodienthoai\"\r\n                                                                [(ngModel)]=\"chitietdatve.sodienthoai\" minlength=\"9\"\r\n                                                                maxlength=\"13\" required=\"required\" pattern=\"/^[+84]|[0-9]\" />\r\n                                                            \r\n                                                        </p>\r\n\r\n                                                </div>\r\n                                                <div class=\"thong_bao_loi\" *ngIf=\"sodienthoai.invalid && !sodienthoai.pristine\">\r\n                                                    <div *ngIf=\"sodienthoai.errors.required\">\r\n                                                        Vui lòng nhập số điện thoại.\r\n                                                    </div>\r\n                                                    <div *ngIf=\"sodienthoai.errors.pattern\">\r\n                                                        Số điện thoại sai định dạng.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-section\">\r\n                                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-ms-12\">\r\n                                            <h2>Tổng số tiền: {{tongtien|number}}<sup>đ</sup></h2>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-section\">\r\n                                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-ms-12 thong_bao_loi\" id=\"thongbaodatve\">\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-section\">\r\n                                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-ms-12\">\r\n                                            <button type=\"submit\" (click)=\"guimuave()\" class=\"btn btn-success btn-flat\"\r\n                                                [disabled]=\"form_dat_ve.form.invalid\">\r\n                                                <i class=\"fa fa-arrow-right icon-flat bg-success\"></i>Mua vé\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </fieldset>\r\n                                <p>\r\n                                    <strong>Miễn phí</strong>\r\n                                    <span>\r\n                                        <span class=\"water sprite\" title=\"Nước uống\"></span>\r\n                                        <span class=\"khan sprite\" title=\"Khăn lạnh\"></span>\r\n                                        <span class=\"wifi sprite\" title=\"Wifi\"></span>\r\n                                        <span class=\"tivi sprite\" title=\"Tivi\"></span>\r\n                                    </span>\r\n                                </p>\r\n                            </form>\r\n\r\n                        </ng-template>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/Modules/m_chitietdatve/m_chitietdatve.ts":
/*!**********************************************************!*\
  !*** ./src/app/Modules/m_chitietdatve/m_chitietdatve.ts ***!
  \**********************************************************/
/*! exports provided: CHITIETDATVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHITIETDATVE", function() { return CHITIETDATVE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_dangki__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/dangki */ "./src/app/model/dangki.ts");
/* harmony import */ var src_app_model_chitietdatve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/chitietdatve */ "./src/app/model/chitietdatve.ts");
/* harmony import */ var src_app_model_tuyenduong__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/tuyenduong */ "./src/app/model/tuyenduong.ts");
/* harmony import */ var _model_mock_dsghe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/mock_dsghe */ "./src/app/model/mock_dsghe.ts");
/* harmony import */ var src_app_service_chitietdatve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/chitietdatve.service */ "./src/app/service/chitietdatve.service.ts");
/* harmony import */ var _service_tuyenduong_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/tuyenduong.service */ "./src/app/service/tuyenduong.service.ts");
/* harmony import */ var src_app_model_chitiettuyenduong__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/chitiettuyenduong */ "./src/app/model/chitiettuyenduong.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {ds_tuyenduong} from'../../model/mock_tuyenduong';


//import { ds_chitietdatve } from "../../model/mock_chitietdatve";



var CHITIETDATVE = /** @class */ (function () {
    function CHITIETDATVE(chitietdatveservice, tuyenduongService) {
        this.chitietdatveservice = chitietdatveservice;
        this.tuyenduongService = tuyenduongService;
        this.objectDangKi = new src_app_model_dangki__WEBPACK_IMPORTED_MODULE_1__["OBJECTDANGKI"]('', '', '', '', '', '');
        this.chitietdatve = new src_app_model_chitietdatve__WEBPACK_IMPORTED_MODULE_2__["CHITIETDATVEXE"]("", "", "", "", "", "", "", "", "", "");
        //ds_tuyenduong,ds_chitietdatve,
        this.ds_tuyenduong = []; //ds_tuyenduong;
        this.tuyenduong = new src_app_model_tuyenduong__WEBPACK_IMPORTED_MODULE_3__["TuyenDuong"]("", "", "", "", "", "", "", "", "", "", "", "", "");
        this.ds_giokhoihanh = [];
        this.tongtien = 0;
        this.soluongghe = 0;
        this.ds_khungghe = [];
        this.ds_ghe = _model_mock_dsghe__WEBPACK_IMPORTED_MODULE_4__["ds_ghe"];
        this.ds_chitietdatve = []; //ds_chitietdatve;
        this.ghedangchon = "";
        this.flagchitiet = true;
        //bắt sự kiện xổ xuống khi chưa chọn ghế mà nhấn nút mua vé
        this.ds_ghedangchon = [];
        this.laydanhsachtuyenduong();
    }
    ;
    CHITIETDATVE.prototype.laydanhsachtuyenduong = function () {
        var _this = this;
        this.tuyenduongService.getListTuyenDuong()
            .subscribe(function (reponse) {
            if (reponse != null) {
                _this.ds_tuyenduong = reponse;
                _this.ds_tuyenduong.forEach(function (element) {
                    var mangtam = [];
                    if (element.chitiet.L != undefined) {
                        for (var i = 0; i < element.chitiet.L.length; i++) {
                            if (element.chitiet.L[i].M != undefined) {
                                var chitietM = new src_app_model_chitiettuyenduong__WEBPACK_IMPORTED_MODULE_7__["ChiTietTuyenDuong"](element.chitiet.L[i].M.diemdi.S, element.chitiet.L[i].M.diemden.S, element.chitiet.L[i].M.thoigiandi.S, element.chitiet.L[i].M.thoigianden.S, element.chitiet.L[i].M.hotlinedi.S, element.chitiet.L[i].M.hotlineden.S, element.chitiet.L[i].M.diachidi.S, element.chitiet.L[i].M.diachiden.S);
                                mangtam.push(chitietM);
                                //console.log(mangtam)
                            }
                        }
                    }
                    element.chitiet = mangtam;
                    element.benden = element.benden.S;
                    element.bendi = element.bendi.S;
                    element.giave = element.giave.S;
                    element.giochay = element.giochay.S;
                    element.loaixe = element.loaixe.S;
                    element.quangduong = element.quangduong.S;
                    element.id_tuyenduong = element.id_tuyenduong.N;
                    element.name_tuyenduong = element.name_tuyenduong.S;
                    element.thoigian = element.thoigian.S;
                    element.sochuyen = element.sochuyen.S;
                    element.OriginCode = element.OriginCode.S;
                    element.DestCode = element.DestCode.S;
                });
            }
            _this.laygiokhoihanhtheodiemdidiemden(_this.chitietdatve.diemdi, _this.chitietdatve.diemden);
            _this.tuyenduong = _this.laytuyenduongtheodiemdidiemden(_this.chitietdatve.diemdi, _this.chitietdatve.diemden, _this.chitietdatve.giodi);
            _this.laydanhsachchitietdatve();
            _this.chitietdatve.idchuyenxe = _this.tuyenduong.id_tuyenduong;
        });
    };
    //Lay danh sach tuyen duong
    //Lấy danh sách chi tiết đặt vé
    CHITIETDATVE.prototype.laydanhsachchitietdatve = function () {
        var _this = this;
        this.chitietdatveservice.getListChiTietDatVe().subscribe(function (reponse) {
            if (reponse != null) {
                _this.ds_chitietdatve = reponse;
                _this.ds_chitietdatve.forEach(function (element) {
                    var mangghetam = [];
                    if (element.soghe.L != undefined) {
                        element.soghe.L.forEach(function (ghe) {
                            mangghetam.push(ghe.S);
                        });
                    }
                    element.soghe = mangghetam;
                    element.diemden = element.diemden.S;
                    element.idchuyenxe = element.idchuyenxe.N;
                    element.diemdi = element.diemdi.S;
                    element.giodi = element.giodi.S;
                    element.ngaydi = element.ngaydi.S;
                    element.sodienthoai = element.sodienthoai.S;
                    element.soluong = element.soluong.S;
                    element.idchitietdatve = element.idchitietdatve.N;
                    element.trangthai = element.trangthai.N;
                });
            }
            _this.soluongghe = _this.chitietdatve.soluong;
            // this.tongtien= (this.chitietdatve.soluong*1) * (this.tuyenduong.giave*1);
            _this.capnhattrangthaighe(_this.tuyenduong.id_tuyenduong, _this.chitietdatve.ngaydi);
            if (typeof sessionStorage.getItem("sodienthoai") != "object") {
                _this.chitietdatve.sodienthoai = sessionStorage.getItem("sodienthoai");
                $("#sodienthoai").attr("readonly", true);
            }
            else {
                $("#sodienthoai").val("");
                $("#sodienthoai").attr("readonly", false);
            }
        });
    };
    //Lấy danh sách ghế theo mã tuyến và ngày
    CHITIETDATVE.prototype.capnhattrangthaighe = function (matuyen, ngay) {
        this.ds_khungghe = [];
        var dstam = [];
        var ds_chitietdatve = this.laydanhsachchitietdatvetheomatuyen(matuyen, ngay);
        var _loop_1 = function (i) {
            this_1.ds_ghe[i - 1].trangthai = 0;
            ds_chitietdatve.forEach(function (ctdv) {
                if (ctdv.soghe.indexOf(_model_mock_dsghe__WEBPACK_IMPORTED_MODULE_4__["ds_ghe"][i - 1].tenghe) >= 0) {
                    _model_mock_dsghe__WEBPACK_IMPORTED_MODULE_4__["ds_ghe"][i - 1].trangthai = 1;
                }
            });
            dstam.push(_model_mock_dsghe__WEBPACK_IMPORTED_MODULE_4__["ds_ghe"][i - 1]);
            if (i % 6 == 0) {
                this_1.ds_khungghe.push(dstam);
                dstam = [];
            }
        };
        var this_1 = this;
        for (var i = 1; i < _model_mock_dsghe__WEBPACK_IMPORTED_MODULE_4__["ds_ghe"].length + 1; i++) {
            _loop_1(i);
        }
        this.tongtien = (this.chitietdatve.soluong * 1) * (this.tuyenduong.giave * 1);
    };
    //Lấy danh sách chi tiết đặt vé theo mã tuyến và ngày 
    CHITIETDATVE.prototype.laydanhsachchitietdatvetheomatuyen = function (matuyen, ngay) {
        var ds_chituyetdatvetheomatuyen = [];
        this.ds_chitietdatve.forEach(function (ct) {
            if (ct.idchuyenxe == matuyen && ct.ngaydi === ngay) {
                ds_chituyetdatvetheomatuyen.push(ct);
            }
        });
        return ds_chituyetdatvetheomatuyen;
    };
    CHITIETDATVE.prototype.guimuave = function () {
        var _this = this;
        if (this.ds_ghedangchon.length == this.soluongghe) {
            $("#thongbaochonghe").text('');
            $("#danhsachghe").slideUp();
            $("#muoiten").removeClass("fas fa-angle-double-down");
            $("#muoiten").addClass("fas fa-angle-double-up");
            this.flagchitiet = true;
            this.chitietdatve.soghe = this.ds_ghedangchon;
            this.chitietdatve.idchuyenxe = this.tuyenduong.id_tuyenduong;
            this.chitietdatve.idchitietdatve = this.ds_chitietdatve.length;
            this.chitietdatveservice.addThongTinChiTietDatVe(this.chitietdatve).subscribe(function (data) {
                _this.ds_chitietdatve.push(_this.chitietdatve);
                _this.capnhattrangthaighe(_this.chitietdatve.idchuyenxe, _this.chitietdatve.ngaydi);
                $("#thongbaodatve").text("ĐẶT VÉ THÀNH CÔNG!");
                $("#sodienthoai").val("");
                _this.ds_ghedangchon = [];
                setTimeout(function () {
                    $(".close").click();
                    $("#soluong").click();
                    $("#thongbaodatve").text("");
                }, 2000);
            }, 
            // Errors will call this callback instead:
            function (err) {
                $("#thongbaodatve").text("Đặt vé không thành công.");
            });
        }
        else {
            $("#danhsachghe").slideDown();
            $("#muoiten").addClass("fas fa-angle-double-down");
            $("#muoiten").removeClass("fas fa-angle-double-up");
            $("#thongbaochonghe").text("Mời bạn chọn ghế");
            this.flagchitiet = false;
        }
    };
    //Bắt sự kiện click menu xổ xuống
    CHITIETDATVE.prototype.chonghe = function () {
        if (this.flagchitiet == true) {
            $("#danhsachghe").slideDown();
            $("#muoiten").addClass("fas fa-angle-double-down");
            $("#muoiten").removeClass("fas fa-angle-double-up");
            this.flagchitiet = false;
        }
        else {
            $("#danhsachghe").slideUp();
            $("#muoiten").removeClass("fas fa-angle-double-down");
            $("#muoiten").addClass("fas fa-angle-double-up");
            this.flagchitiet = true;
        }
    };
    //Lấy tuyến đường theo điểm đi điểm đến
    CHITIETDATVE.prototype.laytuyenduongtheodiemdidiemden = function (diemdi, diemden, gio) {
        var _this = this;
        var td = null;
        this.ds_tuyenduong.forEach(function (tuyenduong) {
            if (tuyenduong.OriginCode == diemdi && tuyenduong.DestCode == diemden && tuyenduong.giochay == gio) {
                _this.chitietdatve.giodi = _this.ds_giokhoihanh[0];
                return td = tuyenduong;
            }
        });
        this.chitietdatve.giodi = this.ds_giokhoihanh[0];
        return td;
    };
    //Lấy giờ khởi  hành theo điểm đi và điểm đến
    CHITIETDATVE.prototype.laygiokhoihanhtheodiemdidiemden = function (diemdi, diemden) {
        var _this = this;
        this.ds_tuyenduong.forEach(function (tuyenduong) {
            if (tuyenduong.OriginCode == diemdi && tuyenduong.DestCode == diemden) {
                _this.ds_giokhoihanh.push(tuyenduong.giochay);
            }
        });
        this.chitietdatve.giodi = this.ds_giokhoihanh[0];
    };
    //bắt sự kiện thay đổi giờ chạy
    CHITIETDATVE.prototype.thaydoigio = function () {
        this.tuyenduong = this.laytuyenduongtheodiemdidiemden(this.chitietdatve.diemdi, this.chitietdatve.diemden, this.chitietdatve.giodi);
        this.capnhattrangthaighe(this.tuyenduong.id_tuyenduong, this.chitietdatve.ngaydi);
        // console.log(this.ds_khungghe);
        // console.log(this.tuyenduong.id_tuyenduong); 
    };
    //bắt sự kiện click vào ghế
    CHITIETDATVE.prototype.gheduocclick = function (data) {
        if (data.target.nextSibling.value == 1) {
            $("#thongbaochonghe").text("Ghế đã được chọn vui lòng chọn ghế khác.");
            // this.ghedangchon=data.target.innerText;
            // $("#thongbao").show();
            // $(".btnghe").attr("disabled", "disabled");;
        }
        else {
            if (this.soluongghe > this.ds_ghedangchon.length) {
                var tenghe = data.target.innerText;
                if (this.ds_ghedangchon.indexOf(tenghe) >= 0) {
                    //mau xanh
                    if (data.path[1].nodeName == "BUTTON") {
                        data.path[1].style.backgroundImage = "linear-gradient(to right, rgb(0, 154, 205), rgb(0, 191, 255), rgb(0, 154, 205))";
                        this.ds_ghedangchon.splice(this.ds_ghedangchon.indexOf(tenghe), 1);
                    }
                }
                else {
                    //mau do
                    if (data.path[1].nodeName == "BUTTON") {
                        data.path[1].style.backgroundImage = "linear-gradient(to right,rgb(231, 35, 35),rgb(238, 128, 128) ,rgb(231, 35, 35))";
                        this.ds_ghedangchon.push(tenghe);
                        $("#thongbaochonghe").text("");
                    }
                }
            }
            else {
                var tenghe = data.target.innerText;
                if (this.ds_ghedangchon.indexOf(tenghe) >= 0) {
                    //mau xanh
                    if (data.path[1].nodeName == "BUTTON") {
                        $("#thongbaochonghe").text('');
                        data.path[1].style.backgroundImage = "linear-gradient(to right, rgb(0, 154, 205), rgb(0, 191, 255), rgb(0, 154, 205))";
                        this.ds_ghedangchon.splice(this.ds_ghedangchon.indexOf(tenghe), 1);
                    }
                }
                else {
                    $("#thongbaochonghe").text('Đã chọn đủ số lượng ghế');
                }
                // 
            }
        }
    };
    //kết thúc bắt sự kiện click vào ghế
    CHITIETDATVE.prototype.ngOnInit = function () {
        this.chitietdatve = this.chitietdatvexe;
    };
    CHITIETDATVE.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_model_chitietdatve__WEBPACK_IMPORTED_MODULE_2__["CHITIETDATVEXE"])
    ], CHITIETDATVE.prototype, "chitietdatvexe", void 0);
    CHITIETDATVE = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm_chitietdatve',
            template: __webpack_require__(/*! ./m_chitietdatve.html */ "./src/app/Modules/m_chitietdatve/m_chitietdatve.html")
        }),
        __metadata("design:paramtypes", [src_app_service_chitietdatve_service__WEBPACK_IMPORTED_MODULE_5__["ChiTietDatVeService"], _service_tuyenduong_service__WEBPACK_IMPORTED_MODULE_6__["TuyenDuongService"]])
    ], CHITIETDATVE);
    return CHITIETDATVE;
}());



/***/ }),

/***/ "./src/app/Modules/m_datve/m_datve.html":
/*!**********************************************!*\
  !*** ./src/app/Modules/m_datve/m_datve.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"tab-content\">\r\n    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"booking\">\r\n        <form class=\"form\" #datve=\"ngForm\" (change)=\"goi()\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Điểm khởi hành</label>\r\n                        <div class=\"controls\">\r\n                            <i class=\"fa fa-bus text-primary\"></i>\r\n                            \r\n                            <select  (change)=\"onChange($event.target.value)\" class=\"form-control \" id=\"diemdi\" name=\"diemdi\" >\r\n                                <option  *ngFor=\"let diadiem1 of ds_diadiemkhoihanh\"  [value]=\"diadiem1.v\">{{diadiem1.t}}</option>   \r\n                            </select>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Điểm đến</label>\r\n                        <div class=\"controls\">\r\n                            <i class=\"fa fa-bus text-primary\"></i>\r\n            \r\n                            <select class=\"form-control\" id=\"diemden\"  name=\"diemden\">\r\n                                <option *ngFor=\"let diadiem2 of ds_diadiemden\"  value=\"{{diadiem2.v}}\">{{diadiem2.t}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Ngày khởi hành</label>\r\n                        \r\n                        <div class=\"controls\">\r\n                            <i class=\"fa fa-clock-o text-primary\"></i>\r\n                            <input type=\"text\" placeholder=\"dd/mm/yyyy\" class=\"form-control dDate date-readonly\" id=\"ngay\" value=\"{{ngayhientai}}\"/>\r\n                            <small><em>Định dạng: dd-mm-yyyy</em></small>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Số lượng vé</label>\r\n                        <div class=\"controls\">\r\n                            <i class=\"fa fa-ticket text-primary\"></i>\r\n                            <input type=\"number\" id=\"soluong\" placeholder=\"1\" value=\"1\" class=\"form-control\" min=\"1\" max=\"10\" (click)=\"soluongclick()\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-5 col-md-5 col-sm-6 col-xs-6 col-ms-12\">\r\n                        <a href=\"#DatveModal\" data-toggle=\"modal\" id=\"modaldatve\"> \r\n                            <button type=\"button\"  (click)=\"laythongtindatve()\"\r\n                                class=\"btn btn-primary btn-block btn-flat btn-booking\">\r\n                        <i class=\"fa fa-ticket icon-flat bg-btn-actived \"></i>Mua vé</button>\r\n                        </a>\r\n                </div>\r\n               \r\n            </div>\r\n        </form>\r\n    </div>\r\n    \r\n\r\n</div>\r\n <!-- Form Đặt Vé -->\r\n <m_chitietdatve  [chitietdatvexe]=\"data\" *ngIf=\"flag==true\" ></m_chitietdatve>"

/***/ }),

/***/ "./src/app/Modules/m_datve/m_datve.ts":
/*!********************************************!*\
  !*** ./src/app/Modules/m_datve/m_datve.ts ***!
  \********************************************/
/*! exports provided: DATVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATVE", function() { return DATVE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_dangki__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/dangki */ "./src/app/model/dangki.ts");
/* harmony import */ var _model_chitietdatve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/chitietdatve */ "./src/app/model/chitietdatve.ts");
/* harmony import */ var src_app_service_tuyenduong_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/tuyenduong.service */ "./src/app/service/tuyenduong.service.ts");
/* harmony import */ var src_app_model_chitiettuyenduong__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/chitiettuyenduong */ "./src/app/model/chitiettuyenduong.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ds_diadiemkhoihanh } from "../../model/mock_diadiemkhoihanh";
//import {ds_tuyenduong} from'../../model/mock_tuyenduong';




var DATVE = /** @class */ (function () {
    function DATVE(tuyenduongService) {
        this.tuyenduongService = tuyenduongService;
        this.objectDangKi = new src_app_model_dangki__WEBPACK_IMPORTED_MODULE_1__["OBJECTDANGKI"]('', '', '', '', '', '');
        this.ds_khoihanh = []; //ds_tuyenduong;
        this.ds_diadiemkhoihanh = [];
        this.ds_diadiemden = [];
        this.thongtindatve = new _model_chitietdatve__WEBPACK_IMPORTED_MODULE_2__["CHITIETDATVEXE"]("", "", "", "", "", "", "", "", "", 0);
        this.ngayhientai = "";
        this.flag = false;
        this.laydanhsachtuyenduong();
    }
    ;
    DATVE.prototype.laydanhsachtuyenduong = function () {
        var _this = this;
        this.tuyenduongService.getListTuyenDuong()
            .subscribe(function (reponse) {
            if (reponse != null) {
                _this.ds_khoihanh = reponse;
                _this.ds_khoihanh.forEach(function (element) {
                    var mangtam = [];
                    if (element.chitiet.L != undefined) {
                        for (var i = 0; i < element.chitiet.L.length; i++) {
                            // console.log(element.chitiet.L[i]);
                            if (element.chitiet.L[i].M != undefined) {
                                var chitietM = new src_app_model_chitiettuyenduong__WEBPACK_IMPORTED_MODULE_4__["ChiTietTuyenDuong"](element.chitiet.L[i].M.diemdi.S, element.chitiet.L[i].M.diemden.S, element.chitiet.L[i].M.thoigiandi.S, element.chitiet.L[i].M.thoigianden.S, element.chitiet.L[i].M.hotlinedi.S, element.chitiet.L[i].M.hotlineden.S, element.chitiet.L[i].M.diachidi.S, element.chitiet.L[i].M.diachiden.S);
                                mangtam.push(chitietM);
                                //console.log(mangtam)
                            }
                        }
                    }
                    element.chitiet = mangtam;
                    element.benden = element.benden.S;
                    element.bendi = element.bendi.S;
                    element.giave = element.giave.S;
                    element.giochay = element.giochay.S;
                    element.loaixe = element.loaixe.S;
                    element.quangduong = element.quangduong.S;
                    element.id_tuyenduong = element.id_tuyenduong.N;
                    element.name_tuyenduong = element.name_tuyenduong.S;
                    element.thoigian = element.thoigian.S;
                    element.sochuyen = element.sochuyen.S;
                    element.OriginCode = element.OriginCode.S;
                    element.DestCode = element.DestCode.S;
                });
            }
            _this.ds_diadiemkhoihanh = _this.LayDanhSachKhoiHanh();
            _this.ds_diadiemden = _this.LayDanhSachDenTheoDiaDiemDi(_this.ds_diadiemkhoihanh[0].v);
            // console.log(this.ds_diadiemden);
            // console.log( this.ds_diadiemkhoihanh);
        });
    };
    DATVE.prototype.laythongtindatve = function () {
        $("#thongbao").hide();
        $(".btnghe").removeAttr("disabled");
        this.flag = true;
        this.data = new _model_chitietdatve__WEBPACK_IMPORTED_MODULE_2__["CHITIETDATVEXE"]("", $("#diemdi")[0].value, $("#diemden")[0].value, $("#ngay")[0].value, $("#soluong")[0].value, "", "", "", "", 1);
        // console.log(this.data);
    };
    DATVE.prototype.soluongclick = function () {
        this.flag = false;
        this.data = new _model_chitietdatve__WEBPACK_IMPORTED_MODULE_2__["CHITIETDATVEXE"]("", $("#diemdi")[0].value, $("#diemden")[0].value, $("#ngay")[0].value, $("#soluong")[0].value, "", "", "", "", 1);
    };
    DATVE.prototype.onChange = function (deviceValue) {
        this.flag = false;
        this.ds_diadiemden = this.LayDanhSachDenTheoDiaDiemDi(deviceValue);
    };
    DATVE.prototype.LayDanhSachKhoiHanh = function () {
        var ds = [];
        var dsCode = [];
        for (var i = 0; i < this.ds_khoihanh.length; i++) {
            if (dsCode.indexOf(this.ds_khoihanh[i].OriginCode) === -1) {
                ds.push({ v: this.ds_khoihanh[i].OriginCode, t: this.ds_khoihanh[i].bendi });
                dsCode.push(this.ds_khoihanh[i].OriginCode);
            }
        }
        ds.sort(function (a, b) {
            if (a.t < b.t)
                return -1;
            if (a.t > b.t)
                return 1;
            return 0;
        });
        return ds;
    };
    DATVE.prototype.LayDanhSachDenTheoDiaDiemDi = function (diadiemdi) {
        var ds = [];
        var dsDestCode = [];
        for (var i = 0; i < this.ds_khoihanh.length; i++) {
            if (this.ds_khoihanh[i].OriginCode === diadiemdi) {
                if (dsDestCode.indexOf(this.ds_khoihanh[i].DestCode) === -1) {
                    ds.push({ v: this.ds_khoihanh[i].DestCode, t: this.ds_khoihanh[i].benden });
                    dsDestCode.push(this.ds_khoihanh[i].DestCode);
                }
            }
        }
        ds.sort(function (a, b) {
            if (a.t < b.t)
                return -1;
            if (a.t > b.t)
                return 1;
            return 0;
        });
        return ds;
    };
    DATVE.prototype.goi = function () {
        this.flag = false;
        this.data = new _model_chitietdatve__WEBPACK_IMPORTED_MODULE_2__["CHITIETDATVEXE"]("", $("#diemdi")[0].value, $("#diemden")[0].value, $("#ngay")[0].value, $("#soluong")[0].value, "", "", "", "", 1);
    };
    DATVE.prototype.ngOnInit = function () {
        var date = new Date();
        var ngay = "";
        if (date.getDate() < 10) {
            ngay = "0" + date.getDate();
        }
        else {
            ngay = date.getDate() + "";
        }
        this.ngayhientai = (date.getMonth() + 1) + "/" + ngay + "/" + date.getFullYear();
        $(function () {
            $("#ngay").datepicker({
                showOtherMonths: true,
                selectOtherMonths: true,
                ///
                minDate: 0,
                maxDate: "+1M"
            });
        });
    };
    DATVE = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm_datve',
            template: __webpack_require__(/*! ./m_datve.html */ "./src/app/Modules/m_datve/m_datve.html")
        }),
        __metadata("design:paramtypes", [src_app_service_tuyenduong_service__WEBPACK_IMPORTED_MODULE_3__["TuyenDuongService"]])
    ], DATVE);
    return DATVE;
}());



/***/ }),

/***/ "./src/app/Modules/m_gioithieunews/m_gioithieunews.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Modules/m_gioithieunews/m_gioithieunews.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"body-news\" class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 col-ms-12\">\r\n            <div class=\"item-block\">\r\n                <div class=\"items-news text-center wow fadeInUp animated\" data-wow-offset=\"15\" data-wow-duration=\"1.2s\">\r\n                    <img src=\"assets/Content/img/customer.png\" />\r\n                    <h5>\r\n                        <!--<a href=\"#\">Hơn 20 triệu lượt khách</a>-->\r\n                        <a [routerLink]=\"'/gioithieu'\">Hơn 20 triệu lượt khách </a>\r\n\r\n                    </h5>\r\n                    <p>Phương Trang phục vụ hơn 20 triệu lượt khách/ bình quân 1 năm trên toàn quốc</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 col-ms-12\">\r\n            <div class=\"item-block\">\r\n                <div class=\"items-news text-center wow fadeInUp animated\" data-wow-offset=\"15\" data-wow-duration=\"1.2s\">\r\n                    <img src=\"assets/Content/img/home.png\" />\r\n                    <h5>\r\n                        <a [routerLink]=\"'/gioithieu'\">Hơn 200 Phòng vé, Trạm trung chuyển</a>\r\n\r\n                    </h5>\r\n                    <p>Phương Trang có hơn 200 Phòng vé, Trạm trung chuyển, Bến xe... trên toàn hệ thống FUTA</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 col-ms-12\">\r\n            <div class=\"item-block\">\r\n                <div class=\"items-news text-center wow fadeInUp animated\" data-wow-offset=\"15\" data-wow-duration=\"1.2s\">\r\n                    <img src=\"assets/Content/img/tech.png\" />\r\n                    <h5>\r\n                        <a [routerLink]=\"'/gioithieu'\">Hơn 1,000 chuyến mỗi ngày</a>\r\n\r\n                    </h5>\r\n                    <p>Phương Trang phục vụ hơn 1000 chuyến xe đường dài và liên tỉnh mỗi ngày.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/Modules/m_gioithieunews/m_gioithieunews.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Modules/m_gioithieunews/m_gioithieunews.component.ts ***!
  \**********************************************************************/
/*! exports provided: GIOITHIEUNEWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIOITHIEUNEWS", function() { return GIOITHIEUNEWS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GIOITHIEUNEWS = /** @class */ (function () {
    function GIOITHIEUNEWS() {
    }
    GIOITHIEUNEWS.prototype.ngOnInit = function () {
    };
    GIOITHIEUNEWS = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm_gioithieunews',
            template: __webpack_require__(/*! ./m_gioithieunews.component.html */ "./src/app/Modules/m_gioithieunews/m_gioithieunews.component.html"),
        })
    ], GIOITHIEUNEWS);
    return GIOITHIEUNEWS;
}());



/***/ }),

/***/ "./src/app/Modules/m_huyve/m_huyve.component.html":
/*!********************************************************!*\
  !*** ./src/app/Modules/m_huyve/m_huyve.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"thongbao\" role=\"dialog\" style=\"display:none; z-index: 100000;border-radius: 5px 5px 5px 5px;\r\nleft: 25%; top:120px; \r\nwidth:50%;height: 300px; background: rgb(237, 240, 240);\r\nposition: absolute;\r\n\">\r\n    <div style=\"border-radius: 4px 4px 4px 4px;padding: 5px;\r\nmargin: 3px; color:aliceblue;  background: rgb(96, 99, 100); position: relative;\">Xem\r\n        thông tin hoặc hủy vé\r\n        <i class=\"fa fa-times-circle\" style=\"right: 5px; top:5px; position: absolute; \" id=\"btndong\"></i></div>\r\n        <!--*ngIf=\"trangthaifrom==false; else nguoclai\"-->\r\n    <div  style=\"text-align: center;\">\r\n        <h3 class=\"thong_bao_loi\">Thông tin chi tiết vé</h3>\r\n        <table width=500 style=\"margin: auto;\">\r\n            <tr>\r\n                <td style=\"text-align: left\"><strong>Điểm đi:</strong></td>\r\n                <td style=\"text-align: left\"><i>{{noidunghienthithongtinchitiet.diemdi}}</i></td>\r\n            </tr>\r\n            <tr>\r\n                <td style=\"text-align: left\"><strong>Điểm đến:</strong></td>\r\n                <td style=\"text-align: left\"><i>{{noidunghienthithongtinchitiet.diemden}}</i></td>\r\n            </tr>\r\n            <tr>\r\n                <td style=\"text-align: left\"><strong>Giờ đi:</strong></td>\r\n                <td style=\"text-align: left\"><i>{{noidunghienthithongtinchitiet.giodi}}</i></td>\r\n            </tr>\r\n            <tr>\r\n                <td style=\"text-align: left\"><strong>Ngày đi:</strong></td>\r\n                <td style=\"text-align: left\"><i>{{noidunghienthithongtinchitiet.ngaydi}}</i></td>\r\n            </tr>\r\n            <tr>\r\n                <td style=\"text-align: left\"><strong>Số ghế:</strong></td>\r\n                <td style=\"text-align: left\"><i>{{noidunghienthithongtinchitiet.soghe}}</i></td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\">\r\n                    <input type=\"text\" id=\"soghehuy\" style=\"width: 50%; margin: auto;\" class=\"form-control\" value=\"\" placeholder=\"Nhập ghế cần hủy\" />\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"huyghe(ghedangchon,noidunghienthithongtinchitiet)\">\r\n                        Hủy ghế {{ghedangchon}}\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n   <!-- <ng-template #nguoclai>\r\n        <div class=\"row\" style=\"margin-bottom:15px;\">\r\n            <div class=\"col-ms-8\" style=\"margin-left: 65px; margin-top: 60px;\">\r\n                <input type=\"date\" id=\"ngaycanxem\" class=\"form-control\" value=\"\" placeholder=\"nhập số điện thoại\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"margin-bottom:15px;\">\r\n            <div class=\"col-ms-8\" style=\"margin-left: 65px; margin-top: 60px;\">\r\n                <input type=\"text\" id=\"sodienthoaixacnhan\" class=\"form-control\" value=\"\" placeholder=\"nhập số điện thoại\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-bottom:2px;\">\r\n            <div class=\"col-ms-12 text-center\">\r\n                <span class=\"thong_bao_loi\" id=\"thongbaoloidangnhap\"></span>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"nutxacnhan()\">\r\n                    Xác nhận\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </ng-template>-->\r\n</div>"

/***/ }),

/***/ "./src/app/Modules/m_huyve/m_huyve.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Modules/m_huyve/m_huyve.component.ts ***!
  \******************************************************/
/*! exports provided: M_HUYVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M_HUYVE", function() { return M_HUYVE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_mock_dsghe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/mock_dsghe */ "./src/app/model/mock_dsghe.ts");
/* harmony import */ var src_app_service_chitietdatve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/chitietdatve.service */ "./src/app/service/chitietdatve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ds_chitietdatve } from 'src/app/model/mock_chitietdatve';


var M_HUYVE = /** @class */ (function () {
    function M_HUYVE(chitietdatveservice) {
        this.chitietdatveservice = chitietdatveservice;
        this.trangthaifrom = true;
        this.ds_chitietdatve = []; //;ds_chitietdatve;
        this.ds_ghe = src_app_model_mock_dsghe__WEBPACK_IMPORTED_MODULE_1__["ds_ghe"];
        this.noidunghienthithongtinchitiet = null;
    }
    M_HUYVE.prototype.laydanhsachchitietdatve = function () {
        var _this = this;
        this.chitietdatveservice.getListChiTietDatVe().subscribe(function (reponse) {
            if (reponse != null) {
                _this.ds_chitietdatve = reponse;
                _this.ds_chitietdatve.forEach(function (element) {
                    var mangghetam = [];
                    if (element.soghe.L != undefined) {
                        element.soghe.L.forEach(function (ghe) {
                            mangghetam.push(ghe.S);
                        });
                    }
                    element.soghe = mangghetam;
                    element.diemden = element.diemden.S;
                    element.idchuyenxe = element.idchuyenxe.N;
                    element.diemdi = element.diemdi.S;
                    element.giodi = element.giodi.S;
                    element.ngaydi = element.ngaydi.S;
                    element.sodienthoai = element.sodienthoai.S;
                    element.soluong = element.soluong.S;
                    element.idchitietdatve = element.idchitietdatve.N;
                });
            }
        });
    };
    //Hủy đặt ghế
    M_HUYVE.prototype.huyghe = function (ghedangchon, chitietdatve) {
        var vt = chitietdatve.soghe.indexOf(ghedangchon);
        if (vt >= 0) {
            chitietdatve.soghe.splice(vt, 1);
            this.ds_ghe.forEach(function (ghe) {
                if (ghe.tenghe == ghedangchon) {
                    ghe.trangthai = 0;
                }
            });
            $("#thongbao").hide();
            $(".btnghe").removeAttr("disabled");
            //xu li luu thông tin xuong database
        }
    };
    M_HUYVE.prototype.ngOnInit = function () {
        /*thong bao*/
        $(document).ready(function () {
            $("#btndong").on("click", function () {
                $("#thongbao").hide();
                $(".btnghe").removeAttr("disabled");
            });
        });
        /*thong bao*/
    };
    M_HUYVE = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm_huyve',
            template: __webpack_require__(/*! ./m_huyve.component.html */ "./src/app/Modules/m_huyve/m_huyve.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_service_chitietdatve_service__WEBPACK_IMPORTED_MODULE_2__["ChiTietDatVeService"]])
    ], M_HUYVE);
    return M_HUYVE;
}());



/***/ }),

/***/ "./src/app/Modules/m_modalcontent/m_modalcontent.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Modules/m_modalcontent/m_modalcontent.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n\t\t\r\n                <div class=\"modal-dialog\">\r\n            \r\n                    <!-- Modal content-->\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                            <h4 class=\"modal-title\">Câu hỏi thường gặp trong chương trình khuyến mãi</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"cd-faq-items\" style=\"padding-left:0;\">\r\n                                <ul id=\"futabus\" class=\"cd-faq-group\">\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">01. Vì sao chỉ riêng tuyến Cần Thơ - Sài Gòn, Đà Lạt - Sài Gòn được thực hiện chiến dịch này?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p> Kỷ niệm 15 năm thành lập công ty, công ty tổ chức chương trình tri ân khách hàng cho 2 tuyến, ĐL là tuyến liên tỉnh đầu tiên khu vực Miền Trung-Tây Nguyên, Cần Thơ là tuyến đầu tiên khu vực Miền Tây.</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">02. Dường như công ty chỉ tổ chức khuyến mãi tại những tuyến có cạnh tranh, còn những tuyến không hoặc ít có cạnh tranh thì sẽ như thế nào?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Thực tế các tuyến đều có đối thủ cạnh tranh, Công ty Phương trang nhằm tri ân khách hàng cho 2 tuyến đã hoạt động lâu đời và có lượng khách hàng lớn nhất của toàn hệ thống. Tuy nhiên Phương Trang sẽ có các kế hoạch và chiến dịch tri ân khách hàng các tuyến còn lại trong thời gian sắp tới.</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">03. Những ưu đãi này có được áp dụng tại các chi nhánh nào nữa không?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Trước mắt chúng tôi chỉ áp dụng với Đà Lạt , Cần Thơ  các tuyến còn lại đang nằm trong kế hoạch sắp tới của công ty.</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">04. Tôi có thể mua vé ưu đãi này nếu tôi không phải là người sống tại Đà Lạt hoặc Cần Thơ?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Nếu Khách hàng có nhu cầu đi lại trên 2 tuyến Cần Thơ –Sài Gòn ( ngược lại ) , Đà lạt – Sài Gòn ( ngược lại ) thì Khách hàng đều được ưu đãi giảm giá. </p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">05. Khi mua vé online ở 2 tuyến khuyến mãi này, tôi có được giảm giá không?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Khách hàng có 3 hình thức mua vé và được nhận ưu đãi khuyến mãi: Mua trực tiếp tại các phòng vé, Mua online tại website <a target=\"_blank\" href=\"../index.html\">futabus.vn</a> và ứng dụng di động FUTA Bus, Đặt vé qua tổng đài <span class=\"text-danger\">1900 6067</span></p>\r\n                                            <p>Link download app</p>\r\n                                            <ul>\r\n                                                <li><a target=\"_blank\" href=\"https://itunes.apple.com/vn/app/futa-bus/id1049039667?mt=8\">IOS</a></li>\r\n                                                <li><a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.futabus.activity&amp;hl=vi\">Android</a></li>\r\n                                            </ul>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">06. Chương trình khuyến mãi kéo dài trong bao lâu?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Thời gian chương trình khuyến mãi mỗi đợt dự kiến là 45 ngày. </p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">07. Tôi có bị giới hạn số lượng vé khuyến mãi khi mua vé hay không?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Khách hàng không bị giới hạn số lượng khi mua vé trong chương trình khuyến mãi.</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">08. Liệu tôi có phải cung cấp thêm những gì để được hưởng giảm giá vé?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Khách hàng chỉ cần cung cấp đầy đủ thông tin cá nhân (số điện thoại, họ tên, Email nếu có) theo yêu cầu khi mua vé trực tiếp hoặc mua vé trực tuyến.</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">09. Trong thời gian khuyến mãi tôi dự định mua vé trước thời gian tôi đi khoảng 3 tháng có được giảm giá hay không?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Chương trình này có 45 ngày. Giá vé khuyến mãi sẽ được diễn ra trong dòng 45 ngày kể từ ngày <strong>1/7/2016 – 14/08/2016</strong></p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">10. Vé khuyến mãi có được hoàn đổi trả hay không?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Khách hàng được trả vé theo quy định của công ty</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">11. Liệu tôi có thể tặng vé khuyến mãi cho người khác không?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Khách hàng có thể tặng vé cho người khác, tuy nhiên khách hàng cần cung cấp lại thông tin người được cho tặng.</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">12. Vé khuyến mãi có được phục vụ như vé không khuyến mãi không?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Quý khách sẽ được phục vụ đầy đủ các dịch vụ đính kèm như: Trung chuyển, khăn, nước, wifi, dép đi lại, mền. Chúng tôi đảm bảo chất lượng dịch vụ là không thay đổi.</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">13. Số lượng vé khuyến mãi có bị giới hạn hay không?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Số lượng vé khuyến mãi sẽ được giới hạn theo thời gian chương trình.</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">14. Nếu có trường hợp người khác mua đi bán lại vé khuyến mãi theo mức giá thông thường thì sao?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Chúng tôi khuyến cáo khách hàng nên mua qua kênh bán vé chính thống của Phương Trang. Mọi trường hợp mua vé bên ngoài hệ thống, chúng tôi hoàn toàn không chịu trách nhiệm.</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                    <li>\r\n                                        <a class=\"cd-faq-trigger\" href=\"#0\">15. Khi mua vé ở các điểm đại lý, tôi có được hưởng khuyến mãi hay không?</a>\r\n                                        <div class=\"cd-faq-content\">\r\n                                            <p>Vẫn được áp dụng chính sách giảm giá.</p>\r\n                                        </div> <!-- cd-faq-content -->\r\n                                    </li>\r\n                                </ul> <!-- cd-faq-group -->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n                        </div>\r\n                    </div>\r\n            \r\n                </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n            <div id=\"MapModal\" class=\"modal fade\" role=\"dialog\">\r\n                <div class=\"modal-dialog\">\r\n                    <!-- Modal content-->\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                            <h4 class=\"modal-title\">Câu hỏi thường gặp trong chương trình khuyến mãi</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"span11\">\r\n                                <div id=\"mapMu\" style=\"height: 320px\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n                        </div>\r\n                    </div>\r\n            \r\n                </div>\r\n            </div>\r\n\r\n\r\n            <button type=\"button\" id=\"promotion_faq_button\" class=\"btn btn-default btn-circle hidden\" data-toggle=\"modal\" data-target=\"#myModal\" title=\"Câu hỏi thường gặp trong chương trình khuyến mãi\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            "

/***/ }),

/***/ "./src/app/Modules/m_modalcontent/m_modalcontent.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Modules/m_modalcontent/m_modalcontent.component.ts ***!
  \********************************************************************/
/*! exports provided: MODALCONTENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODALCONTENT", function() { return MODALCONTENT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MODALCONTENT = /** @class */ (function () {
    function MODALCONTENT() {
    }
    MODALCONTENT.prototype.ngOnInit = function () {
    };
    MODALCONTENT = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm_modalcontent',
            template: __webpack_require__(/*! ./m_modalcontent.component.html */ "./src/app/Modules/m_modalcontent/m_modalcontent.component.html"),
        })
    ], MODALCONTENT);
    return MODALCONTENT;
}());



/***/ }),

/***/ "./src/app/Modules/m_slider/m_slider.html":
/*!************************************************!*\
  !*** ./src/app/Modules/m_slider/m_slider.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12 col-ms-12 \" style=\"float:right; margin-right:100px; \">\r\n    <div class=\"slide123\">\r\n            <img src=\"assets/Content/img/trangchu.jpg\" style=\" height:300px\" />\r\n    </div>\r\n \r\n    <div class=\"slide123\">\r\n        <img src=\"assets/Content/img/xe2.jpg\" style=\"height:300px\"/>\r\n    </div>\r\n  \r\n    \r\n    <div class=\"slide123\">\r\n        <img src=\"assets/Content/img/xe3.jpg\" style=\" height:300px\"/>\r\n    </div>\r\n    <div class=\"slide123\">\r\n        <img src=\"assets/Content/img/xe4.jpg\" style=\"height:300px\"/>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Modules/m_slider/m_slider.ts":
/*!**********************************************!*\
  !*** ./src/app/Modules/m_slider/m_slider.ts ***!
  \**********************************************/
/*! exports provided: M_SLIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M_SLIDER", function() { return M_SLIDER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var M_SLIDER = /** @class */ (function () {
    function M_SLIDER() {
    }
    M_SLIDER.prototype.ngOnInit = function () {
        var s1 = 0;
        s2();
        function s2() {
            var i;
            var slides = document.getElementsByClassName('slide123');
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            s1 += 1;
            if (s1 > slides.length) {
                s1 = 1;
            }
            if (slides[s1 - 1] != null) {
                slides[s1 - 1].style.display = "block";
            }
            setTimeout(s2, 2000); // Change image every 2 seconds
        }
    };
    M_SLIDER = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm_slider',
            template: __webpack_require__(/*! ./m_slider.html */ "./src/app/Modules/m_slider/m_slider.html"),
        }),
        __metadata("design:paramtypes", [])
    ], M_SLIDER);
    return M_SLIDER;
}());



/***/ }),

/***/ "./src/app/Pages/p_chitietlichtrinh/p_chitietlichtrinh.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Pages/p_chitietlichtrinh/p_chitietlichtrinh.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n<section id=\"body-content\">\r\n    <div class=\"container\" id=\"login-page\">\r\n        <div id=\"top-login\" class=\"clearfix hidden-sm\">\r\n            <div id=\"login-top-bar-left\" class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"text-center col-lg-4 col-md-4 col-sm-4 col-xs-12 col-ms-12\">\r\n                        <div class=\"text-uppercase\"><span class=\"relative\"><span class=\"sprite safe\"></span>An toàn</span></div>\r\n                    </div>\r\n                    <div class=\"text-center col-lg-4 col-md-4 col-sm-4 col-xs-12 col-ms-12\">\r\n                        <div class=\"text-uppercase\"><span class=\"relative\"><span class=\"sprite bus\"></span>Luôn có tuyến</span></div>\r\n\r\n                    </div>\r\n                    <div class=\"text-center col-lg-4 col-md-4 col-sm-4 col-xs-12 col-ms-12\">\r\n                        <div class=\"text-uppercase\"><span class=\"relative\"><span class=\"sprite faq\"></span>Hỏi đáp</span></div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div id=\"login-top-bar-right\" class=\"text-center col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12\">\r\n                <p class=\"text-uppercase\">Luôn phục vụ quý khách tốt nhất có thể\r\n                    </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-ms-12\">\r\n                <div class=\"section-list\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table \" *ngFor=\"let chitiet of danhsachtuyen;let i=index;\" >\r\n                            <thead>\r\n                                <tr class=\"text-white bg-light-green\">\r\n                                    <th>STT</th>\r\n                                    <th>Giờ chạy</th>\r\n                                    <th data-toggle=\"true\">Bến đi</th>\r\n                                    <th data-toggle=\"true\">Bến đến</th>\r\n                                    <th data-hide=\"phone\">Quãng đường</th>\r\n                                    <th data-hide=\"phone\">Thời gian</th>\r\n                                    <th data-hide=\"phone\">Giá vé</th>\r\n                                    <th data-hide=\"phone\">Ngày đi</th>\r\n                                    <th></th>\r\n                                </tr>\r\n                            </thead>\r\n\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td >{{i+1}}</td>\r\n                                    <td><strong class=\"text-success\" >{{chitiet.giochay}}</strong></td>\r\n                                    <td >{{chitiet.bendi}} </td>\r\n                                    <td >{{chitiet.benden}}</td>\r\n                                    <td>{{chitiet.quangduong}}</td>\r\n                                    <td>{{chitiet.thoigian}}</td>\r\n                                    <td>\r\n                                        <p>\r\n                                            <strong class=\"text-primary\" >\r\n                                                {{chitiet.giave}}<sup>đ/vé</sup>\r\n                                            </strong>\r\n                                        </p>\r\n                                    </td>\r\n                                    <td >\r\n                                        {{ngayhientai}}\r\n                                    </td>\r\n                                    <td>\r\n                                        <a href=\"#DatveModal\" data-toggle=\"modal\"\r\n                                            class=\"btn br-btn-default btn-flat futa-book-ticket\" (click)=\"muavechitiet(chitiet)\">\r\n                                            <i class=\"fa fa-ticket icon-flat text-primary icon-bg-default\"></i>Mua vé\r\n                                        </a>         \r\n                                        <br><br>\r\n                                        <a href=\"javascript:void();\" class=\"viewmorerouteinfo-btn\" (click)=\"batsukienclick($event)\" id=\"ct{{i}}\">Xem\r\n                                            chi tiết &gt;&gt;</a>\r\n                                    </td>\r\n                                </tr>\r\n            \r\n                                <tr class=\"viewmorerouteinfo hidden ct{{i}}\" >\r\n                                    <td colspan=\"10\" >\r\n                                        <table border=\"0\" align=\"center\" >\r\n                                            <thead >\r\n                                                <tr >\r\n                                                    <th colspan=\"5\" >\r\n                                                        <h3>Thông tin chuyến đi xuất phát từ <span class=\"from\">{{chitiet.bendi}}</span>\r\n                                                            đến <span class=\"to\">{{chitiet.benden}}</span></h3>\r\n                                                    </th>\r\n                                                </tr>\r\n                                                <tr> \r\n                                                        <th>Thời gian đi</th>\r\n                                                        <th>Điểm đi</th>\r\n                                                        <th></th>\r\n                                                        <th>Thời gian đến</th>\r\n                                                        <th>Điểm dừng (đến)</th>\r\n                                                    \r\n                                                </tr>\r\n                                                \r\n                                            </thead >\r\n                                            <tbody *ngFor=\"let ct of chitiet.chitiet\">\r\n                                \r\n                                                <tr  >\r\n                                                    <td>{{ct.thoigiandi}}<br><br><span class=\"frompoint\">Điểm đi</span></td>\r\n                                                    <td>\r\n                                                        <h3>{{ct.diemdi}}</h3>\r\n                                                        <p>{{ct.diachidi}}</p>\r\n                                                        <!--<p class=\"hotline\">HotLine: {{ct.hotlinedi}}</p> <a href=\"/\">(Xem bản đồ)</a> </td>-->\r\n                                                    <td><img src=\"assets/Content/img/private/icmuiten-08.png\"></td>\r\n                                                    <td>{{ct.thoigianden}}<br><br></td>\r\n                                                    <td>\r\n                                                        <h3>{{ct.diemden}}</h3>\r\n                                                        <p>{{ct.diachiden}}</p>\r\n                                                       <!-- <p class=\"hotline\">HotLine:{{ct.hotlineden}}</p> <a href=\"/\">(Xem bản đồ)</a> </td>-->\r\n                                                </tr>\r\n                        \r\n                                            </tbody>\r\n                                        </table>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    \r\n</section>\r\n<!-- Form Đặt Vé (Cần truyền dữ liệu để chi tiết tuyến đường nhận được)-->\r\n<m_chitietdatve [chitietdatvexe]=\"thongtindatve\" *ngIf=\"thongtindatve\"></m_chitietdatve>\r\n"

/***/ }),

/***/ "./src/app/Pages/p_chitietlichtrinh/p_chitietlichtrinh.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/p_chitietlichtrinh/p_chitietlichtrinh.component.ts ***!
  \**************************************************************************/
/*! exports provided: CHITIETLICHTRINH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHITIETLICHTRINH", function() { return CHITIETLICHTRINH; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_mock_tuyenduong__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/mock_tuyenduong */ "./src/app/model/mock_tuyenduong.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_chitietdatve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/chitietdatve */ "./src/app/model/chitietdatve.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CHITIETLICHTRINH = /** @class */ (function () {
    function CHITIETLICHTRINH(route, activateRoute) {
        this.route = route;
        this.activateRoute = activateRoute;
        this.danhsachtuyen = _model_mock_tuyenduong__WEBPACK_IMPORTED_MODULE_1__["ds_tuyenduong"];
        this.danhsachtheotuyen = [];
        this.ngayhientai = "";
        this.diemdi = "";
        this.diemden = "";
    }
    CHITIETLICHTRINH.prototype.muavechitiet = function (chitiet) {
        this.thongtindatve = new src_app_model_chitietdatve__WEBPACK_IMPORTED_MODULE_3__["CHITIETDATVEXE"](chitiet.id_tuyenduong, chitiet.OriginCode, chitiet.DestCode, this.ngayhientai, 1, chitiet.giochay, "", "", "", 1);
        // console.log(this.thongtindatve);
    };
    CHITIETLICHTRINH.prototype.laychitietlichtrinhtheodiemdidiemden = function (diemdi, diemden) {
        var ds = [];
        for (var i = 0; i < this.danhsachtuyen.length; i++) {
            if (this.danhsachtuyen[i].OriginCode == diemdi && this.danhsachtuyen[i].DestCode == diemden) {
                ds.push(this.danhsachtuyen[i]);
            }
        }
        return ds;
    };
    CHITIETLICHTRINH.prototype.batsukienclick = function (event) {
        var ID = event.target.attributes.id.value;
        var cl = "." + ID;
        if (event.target.innerText != "Đóng >>") {
            for (var i = 0; i < this.danhsachtuyen.length; i++) {
                var ct = ".ct" + i;
                var id = "#ct" + i;
                if (!$(ct).hasClass("hidden")) {
                    $(id)[0].innerText = "Xem chi tiết >>";
                    $(ct).addClass('hidden');
                }
            }
        }
        if ($(cl).hasClass("hidden")) {
            event.target.innerText = "Đóng >>";
            $(cl).removeClass('hidden');
        }
        else {
            event.target.innerText = "Xem chi tiết >>";
            $(cl).addClass('hidden');
        }
    };
    CHITIETLICHTRINH.prototype.layDSchitiettheoTuyenDuong = function (name) {
        var dschitiet = [];
        for (var i = 0; i < this.danhsachtuyen.length; i++) {
            if (this.danhsachtuyen[i].name_tuyenduong === name) {
                dschitiet.push(this.danhsachtuyen[i]);
            }
        }
        return dschitiet;
    };
    CHITIETLICHTRINH.prototype.ngOnInit = function () {
        var _this = this;
        //lay diem di diem den tren url
        this.subscription = this.activateRoute.params.subscribe(function (params) {
            _this.diemdi = params["g"];
            _this.diemden = params["c"];
        });
        this.danhsachtuyen = this.laychitietlichtrinhtheodiemdidiemden(this.diemdi, this.diemden);
        //lây ngày hiện tại
        var date = new Date();
        var ngay = "";
        if (date.getDate() < 10) {
            ngay = "0" + date.getDate();
        }
        else {
            ngay = date.getDate() + "";
        }
        this.ngayhientai = (date.getMonth() + 1) + "/" + ngay + "/" + date.getFullYear();
    };
    CHITIETLICHTRINH.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CHITIETLICHTRINH = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_chitietlichtrinh',
            template: __webpack_require__(/*! ./p_chitietlichtrinh.component.html */ "./src/app/Pages/p_chitietlichtrinh/p_chitietlichtrinh.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CHITIETLICHTRINH);
    return CHITIETLICHTRINH;
}());



/***/ }),

/***/ "./src/app/Pages/p_dangky/p_dangky.component.html":
/*!********************************************************!*\
  !*** ./src/app/Pages/p_dangky/p_dangky.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n<div id=\"br-cover-content\">\r\n    <m_modalcontent></m_modalcontent>\r\n    <div>\r\n        <div id=\"sb-site\">\r\n            <div class=\"br-header\">\r\n            </div>\r\n            <div id=\"page\">\r\n                <!-- header -->\r\n                <section id=\"body-content\">\r\n                    <div class=\"container\" id=\"login-page\">\r\n                        <div id=\"top-login\" class=\"clearfix hidden-sm\">\r\n                            <div id=\"login-top-bar-left\" class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"text-center col-lg-4 col-md-4 col-sm-4 col-xs-12 col-ms-12\">\r\n                                        <div class=\"text-uppercase\"><span class=\"relative\"><span class=\"sprite safe\"></span>An\r\n                                                toàn</span></div>\r\n                                    </div>\r\n                                    <div class=\"text-center col-lg-4 col-md-4 col-sm-4 col-xs-12 col-ms-12\">\r\n                                        <div class=\"text-uppercase\"><span class=\"relative\"><span class=\"sprite bus\"></span>Luôn\r\n                                                có tuyến</span></div>\r\n                                    </div>\r\n                                    <div class=\"text-center col-lg-4 col-md-4 col-sm-4 col-xs-12 col-ms-12\">\r\n                                        <div class=\"text-uppercase\"><span class=\"relative\"><span class=\"sprite faq\"></span>Hỏi\r\n                                                đáp</span></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div id=\"login-top-bar-right\" class=\"text-center col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12\">\r\n                                <p class=\"text-uppercase\">Luôn phục vụ quý khách tốt nhất có thể\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"body-register\" class=\"row\" style=\"background: #FFF url(assets/Content/res/bg-aboutus.jpg) no-repeat top center\">\r\n                            <!--<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12\">\r\n                                <img src=\"assets/Content/res/banner-dangky.jpg\" />\r\n                            </div>-->\r\n                            \r\n                                <div  class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12\" style=\"margin:100px 300px 100px 300px; background-color: rgb(133, 142, 161);opacity:0.8;\">\r\n                                    <div id=\"register-form-wrapper\" class=\"border padding10 clearfix\" style=\"border:2px\">\r\n\r\n                                        <form   #form_dang_ky=\"ngForm\" role=\"form\">\r\n                                            <input name=\"__RequestVerificationToken\"\r\n                                                type=\"hidden\" value=\"CqmsYo50POKxTZwSE9sfldJS3f9YiQAFkHtj-O5ERhgg1gRgsrsi9bfveyQKdEKCdvEqLVnZAZNghwd555mJwfexhf81\" />\r\n                                            <h3 class=\"text-uppercase\">Đăng ký</h3>\r\n                                            <p class=\"text-muted\">\r\n                    \r\n                                            </p>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"hoten\">Họ tên <span class=\"text-primary\">*</span></label>\r\n                                                <input class=\"form-control\" #hoten=\"ngModel\" pattern=\"[^0-9~!#$%^&*(){}]+\" required=\"required\" \r\n                                                id=\"hoten\" name=\"hoten\" placeholder=\"Điền họ tên\" type=\"text\" [(ngModel)]=\"objectDangKi.hoten\"/>\r\n                                            \r\n                                                <div class=\"thong_bao_loi\" *ngIf=\"hoten.invalid && !hoten.pristine\"  >\r\n                                                        <div *ngIf=\"hoten.errors.required\" >\r\n                                                            Vui lòng nhập họ tên\r\n                                                        </div>\r\n                                                        <div *ngIf=\"hoten.errors.pattern\" >\r\n                                                            Họ tên không hợp lệ. Có ký tự đặc biệt\r\n                                                        </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">Email <span class=\"text-primary\">*</span></label>\r\n                                                <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Điền địa chỉ email\"\r\n                                                #email=\"ngModel\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+.[A-Za-z]{2,4}\" required=\"required\"   type=\"text\"  [(ngModel)]=\"objectDangKi.email\" />\r\n\r\n                                                    <div class=\"thong_bao_loi\" *ngIf=\"email.invalid && !email.pristine\"  >\r\n                                                            <div *ngIf=\"email.errors.required\" >\r\n                                                                Vui lòng nhập email.\r\n                                                            </div>\r\n                                                            <div *ngIf=\"email.errors.pattern\" >\r\n                                                            Email sai định dạng.\r\n                                                            </div>\r\n                                                    </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12\">\r\n                                                        <label for=\"\">Mật khẩu <span class=\"text-primary\">*</span></label>\r\n                                                        <input class=\"form-control\" id=\"matkhau\" name=\"matkhau\"  placeholder=\"Điền mật khẩu\" type=\"password\" [(ngModel)]=\"objectDangKi.matkhau\" required=\"required\" pattern=\"\" title=\"\" reverse=\"true\">\r\n                \r\n                                                    </div>\r\n                                                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12\">\r\n                                                            <label for=\"\">Nhắc lại mật khẩu <span class=\"text-primary\">*</span></label>\r\n                                        \r\n                                                            <input type=\"password\" #nhap_lai_mat_khau_input=\"ngModel\"  [(ngModel)]=\"nhap_lai_mat_khau\" name=\"nhap_lai_mat_khau\" validateEqual=\"matkhau\" class=\"form-control\" value=\"\" required=\"required\" title=\"\" >\r\n                                                            <div class=\"thong_bao_loi\" *ngIf=\"nhap_lai_mat_khau_input.invalid && !nhap_lai_mat_khau_input.pristine\"  >\r\n                                                                Mật khẩu không khớp\r\n                                                            </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <h3 class=\"text-uppercase\">Thông tin khác</h3>\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12\">\r\n                                                        <label for=\"\">Số di động <span class=\"text-primary\">*</span></label>\r\n                                                        <input class=\"form-control\" id=\"sodienthoai\" name=\"sodienthoai\" placeholder=\"Điền số di động\"\r\n                                                        #sodienthoai=\"ngModel\" type=\"text\" value=\"\" [(ngModel)]=\"objectDangKi.sodienthoai\" minlength=\"9\" maxlength=\"13\" required=\"required\" pattern=\"/^[+84]|[0-9]\"/>\r\n                                                            \r\n                                                            <div class=\"thong_bao_loi\" *ngIf=\"sodienthoai.invalid && !sodienthoai.pristine\"  >\r\n                                                                    <div *ngIf=\"sodienthoai.errors.required\" >\r\n                                                                        Vui lòng nhập số điện thoại.\r\n                                                                    </div>\r\n                                                                    <div *ngIf=\"sodienthoai.errors.pattern\" >\r\n                                                                    Số điện thoại sai định dạng.\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12\">\r\n                                                        <label for=\"\">Số CMND <span class=\"text-primary\">*</span></label>\r\n                                                        <input class=\"form-control\" id=\"chungminhnhandan\" name=\"chungminhnhandan\"  #chungminhnhandan=\"ngModel\"\r\n                                                            placeholder=\"Điền số chứng minh thư\" type=\"text\" value=\"\" [(ngModel)]=\"objectDangKi.chungminhnhandan\" minlength=\"9\" maxlength=\"12\" required=\"required\" pattern=\"[0-9]+\"/>\r\n\r\n                                                            <div class=\"thong_bao_loi\" *ngIf=\"chungminhnhandan.invalid && !chungminhnhandan.pristine\"  >\r\n                                                                    <div *ngIf=\"chungminhnhandan.errors.required\" >\r\n                                                                        Vui lòng nhập số chứng minh nhân dân.\r\n                                                                    </div>\r\n                                                                    <div *ngIf=\"chungminhnhandan.errors.pattern\" >\r\n                                                                    Số chứng minh nhân dân sai định dạng.\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                            <div class=\"form-group\"><h3 style=\"color: red;\">{{thongbao}}</h3></div>\r\n                                            <div class=\"form-group clearfix\">\r\n                \r\n                                                <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"form_dang_ky.form.invalid\" (click)=\"gui_form(form_dang_ky)\">HOÀN TẤT</button>\r\n                                            </div>\r\n                                            <p class=\"clearfix\">\r\n                                                <small class=\"pull-right\"><span class=\"text-primary\">*</span> Mục bắt buộc\r\n                                                </small>\r\n                                            </p>\r\n                                            <p class=\"text-center\">\r\n                                                Nếu bạn đã có tài khoản. CLick <a [routerLink]=\"'/dangnhap'\">đây</a> để\r\n                                                đăng\r\n                                                nhập\r\n                                            </p>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                        \r\n                        </div>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n            <Footer></Footer>"

/***/ }),

/***/ "./src/app/Pages/p_dangky/p_dangky.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Pages/p_dangky/p_dangky.component.ts ***!
  \******************************************************/
/*! exports provided: DANGKY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DANGKY", function() { return DANGKY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_dangki__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/dangki */ "./src/app/model/dangki.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DANGKY = /** @class */ (function () {
    function DANGKY(service_user) {
        this.service_user = service_user;
        this.objectDangKi = new _model_dangki__WEBPACK_IMPORTED_MODULE_1__["OBJECTDANGKI"]('', '', '', '', '', '');
        this.thongbao = "";
        this.nhap_lai_mat_khau = "";
    }
    ;
    DANGKY.prototype.ngOnInit = function () {
    };
    DANGKY.prototype.gui_form = function (form_dang_ky) {
        var _this = this;
        if (form_dang_ky.form.valid) {
            if (Number.parseInt(sessionStorage.getItem("role")) != 1) {
                this.objectDangKi.role = 2;
            }
            else if (Number.parseInt(sessionStorage.getItem("role")) == 1) {
                this.objectDangKi.role = 1;
            }
            this.service_user.addObjectDangKiWithObservable(this.objectDangKi)
                .subscribe(function (data) {
                _this.thongbao = "Đăng kí thành công.";
                sessionStorage.setItem("taikhoan", _this.objectDangKi.email);
            }, 
            // Errors will call this callback instead:
            function (err) {
                _this.thongbao = "Đăng kí không thành công.";
            });
        }
    };
    DANGKY = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_dangky',
            template: __webpack_require__(/*! ./p_dangky.component.html */ "./src/app/Pages/p_dangky/p_dangky.component.html"),
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_2__["USERService"]])
    ], DANGKY);
    return DANGKY;
}());



/***/ }),

/***/ "./src/app/Pages/p_dangnhap/p_dangnhap.component.html":
/*!************************************************************!*\
  !*** ./src/app/Pages/p_dangnhap/p_dangnhap.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n<div id=\"br-cover-content\">\r\n    <m_modalcontent></m_modalcontent>\r\n    <div>\r\n        <div id=\"sb-site\">\r\n            <div class=\"br-header\">\r\n            </div>\r\n            <div id=\"page\">\r\n                <section id=\"body-content\">\r\n                    <div class=\"container\" id=\"login-page\">\r\n                        <div id=\"body-login\" class=\"row\">\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12\">\r\n                                <div id=\"login-form-left\" class=\"border clearfix\">\r\n                                    <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-ms-12 col-lg-offset-2 col-md-offset-2\">\r\n                                        <h3 class=\"text-uppercase text-center\">Tôi đã đăng ký tài khoản</h3>\r\n                                        <form  class=\"form-horizontal\" #form_dang_nhap=\"ngForm\" role=\"form\">\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">Tên đăng nhập*</label>\r\n                                                <input class=\"form-control\" data-val=\"true\" id=\"taikhoan\" name=\"taikhoan\"\r\n                                                    placeholder=\"Điền email\" type=\"email\" value=\"\" [(ngModel)]=\"taikhoan\"\r\n                                                \r\n                \r\n                                                    #email=\"ngModel\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+.[A-Za-z]{2,4}\" required=\"required\"   type=\"text\"  [(ngModel)]=\"objectDangKi.email\"\r\n                                                    />\r\n                                                    <div class=\"thong_bao_loi\" *ngIf=\"email.invalid && !email.pristine\"  >\r\n                                                        <div *ngIf=\"email.errors.required\" >\r\n                                                            Vui lòng nhập email.\r\n                                                        </div>\r\n                                                        <div *ngIf=\"email.errors.pattern\" >\r\n                                                           Email sai định dạng.\r\n                                                        </div>\r\n                                                    </div>\r\n                                            </div>\r\n\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"\">Mật khẩu*</label>\r\n                                                <input class=\"form-control\" data-val=\"true\" name=\"matkhau\" id=\"matkhau\"\r\n                                                    placeholder=\"Điền mật khẩu\" [(ngModel)]=\"matkhau\" \r\n                                                    type=\"password\" \r\n                                                    required=\"required\" pattern=\"\" title=\"\" reverse=\"true\"\r\n                                                    />\r\n                                            </div>\r\n\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <h3 style=\"color: red\">{{thongbao}}</h3>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <button class=\"btn btn-primary pull-right\" type=\"submit\" [disabled]=\"form_dang_nhap.form.invalid\" (click)=\"onDangNhap(form_dang_nhap)\">\r\n                                                    Đăng Nhập\r\n                                                </button>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12\">\r\n                                <div id=\"login-form-right\" class=\"border clearfix\">\r\n                                    <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-ms-12 col-lg-offset-2 col-md-offset-2\">\r\n                                        <h3 class=\"text-uppercase text-center\">Bạn là khách hàng mới?</h3>\r\n                                        <p class=\"text-center\">\r\n                                            <a [routerLink]=\"'/dangky'\" class=\"btn btn-success\">Đăng ký</a>\r\n                                        </p>\r\n                                        <p class=\"text-muted text-center\">\r\n                                           Hãy đăng ký tài khoản mới để trở thành thành viên và có nhiều ưu đãi hàng ngày.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n            <Footer></Footer>"

/***/ }),

/***/ "./src/app/Pages/p_dangnhap/p_dangnhap.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Pages/p_dangnhap/p_dangnhap.component.ts ***!
  \**********************************************************/
/*! exports provided: DANGNHAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DANGNHAP", function() { return DANGNHAP; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_dangki__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/dangki */ "./src/app/model/dangki.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DANGNHAP = /** @class */ (function () {
    function DANGNHAP(user_service, route, router) {
        this.user_service = user_service;
        this.route = route;
        this.router = router;
        this.objectDangKi = new src_app_model_dangki__WEBPACK_IMPORTED_MODULE_3__["OBJECTDANGKI"]('', '', '', '', '', '');
        this.taikhoan = "";
        this.matkhau = "";
        this.thongbao = "";
        this.loichao = '';
        if (sessionStorage.getItem("taikhoan") != "") {
            this.taikhoan = sessionStorage.getItem("taikhoan");
        }
    }
    ;
    DANGNHAP.prototype.ngOnInit = function () {
    };
    DANGNHAP.prototype.onDangNhap = function (form_dang_nhap) {
        if (form_dang_nhap.form.valid) {
            this.DangNhap();
        }
    };
    DANGNHAP.prototype.DangNhap = function () {
        var _this = this;
        return this.user_service.LayThongTinDangNhap(this.taikhoan, this.matkhau)
            .subscribe(function (reponse) {
            if (reponse.Count == 0) {
                _this.thongbao = "Tài khoản hoặc mật khẩu không hợp lệ.";
            }
            else {
                if (typeof (Storage) !== 'undefined') {
                    //hỗ trợ
                    sessionStorage.setItem("hoten", reponse.Items[0].hoten.S);
                    sessionStorage.setItem("role", reponse.Items[0].role.N);
                    console.log(sessionStorage.getItem("role"));
                    sessionStorage.setItem("sodienthoai", reponse.Items[0].sodienthoai.S);
                    _this.router.navigate(['/home']);
                }
                else {
                    alert('Trình duyệt của bạn không hỗ trợ localStorage. Hãy nâng cấp trình duyệt để sử dụng!');
                }
            }
        });
    };
    DANGNHAP = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_dangnhap',
            template: __webpack_require__(/*! ./p_dangnhap.component.html */ "./src/app/Pages/p_dangnhap/p_dangnhap.component.html"),
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["USERService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DANGNHAP);
    return DANGNHAP;
}());



/***/ }),

/***/ "./src/app/Pages/p_dieu_khoan/p_dieukhoan.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Pages/p_dieu_khoan/p_dieukhoan.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n\r\n<div id=\"br-cover-content\">\r\n    <m_modalcontent></m_modalcontent>\r\n    <div>\r\n        <div id=\"sb-site\">\r\n            <div class=\"br-header\">\r\n            </div>\r\n            <section id=\"body-content\">\r\n                <div style=\"background: #FFF url(assets/Content/res/bg-aboutus.jpg) no-repeat top center\" class=\"single-content\">\r\n                    <div class=\"container inner-single-content bg-white\">\r\n                        <h1 class=\"text-center text-primary\">Xe Giường Nằm</h1>\r\n                        <p class=\"text-center quote\">\"Các điều khoản của chương trình Đặt vé Tết trực tuyến online\"</p>\r\n                        <div class=\"body-text\">\r\n                            <p><strong>Xin vui lòng đọc các điều khoản sau trước khi sử dụng dịch vụ thanh toán trực\r\n                                    tuyến.\r\n                                    Với việc truy cập vào phần này của website, bạn đã đồng ý với các điều khoản sử\r\n                                    dụng\r\n                                    của chúng tôi. Các điều khoản này có thể thay đổi theo thời gian và bạn sẽ phải\r\n                                    tuân\r\n                                    theo các điều khoản được hiển thị từ thời điểm bạn đọc được các điều khoản này.</strong></p>\r\n                            <p><strong>01.</strong> Chương trình thanh toán online được áp dụng cho các chuyến xe nhất\r\n                                định\r\n                                của <span class=\"text-success\">Xe </span> <span class=\"text-primary\"> Giường Nằm</span>.\r\n                                Thành\r\n                                viên của <span class=\"text-success\">Xe </span> <span class=\"text-primary\"> Giường\r\n                                    Nằm</span>\r\n                                cũng như khách vãng lai thực hiện được hình thức thanh toán này. Việc đăng ký tham gia\r\n                                Thành\r\n                                viên <span class=\"text-success\">Xe </span> <span class=\"text-primary\"> Giường Nằm</span>\r\n                                là\r\n                                hoàn toàn miễn phí.</p>\r\n                            <p><strong>02.</strong> Quý khách có thể thanh toán trực tuyến tối đa 4 vé cho một lần giao\r\n                                dịch.</p>\r\n                            <p><strong>03.</strong>\r\n                                <span class=\"text-success\">Xe </span>  <span class=\"text-primary\">\r\n                                    Giường Nằm</span> không chấp nhận hoàn tiền hoặc đổi vé trong dịp Lễ, Tết đã thanh toán\r\n                                thành\r\n                                công trên website <span class=\"text-success\">Xe </span> <span class=\"text-primary\">\r\n                                    Giường Nằm</span>,\r\n                                ngày thường qúy khách được quyền chuyển đổi hoặc hủy vé một lần duy nhất trước giờ xe\r\n                                chạy\r\n                                24 giờ, phí hủy vé 10%. Vì vậy, rất mong Quý khách kiểm tra cẩn thận các thông tin vé\r\n                                trước\r\n                                khi tiến hành xác nhận đặt vé và thanh toán. Đồng thời, trong trường hợp đã đặt vé và\r\n                                thanh\r\n                                toán trực tuyến, nếu bạn bỏ chuyến xe sẽ không được hoàn chi phí. - <span class=\"text-success\">Xe </span> \r\n                                <span class=\"text-primary\">Giường Nằm</span> chỉ thực hiện hoàn tiền trong trường hợp\r\n                                khi\r\n                                giao dịch, tài khoản của Quý khách đã bị trừ tiền nhưng hệ thống của chúng tôi không\r\n                                ghi\r\n                                nhận việc đặt vé của Quý khách, và Quý khách không nhận được xác nhận đặt vé thành\r\n                                công.\r\n                                Khi đó, Quý khách vui lòng liên hệ với chúng tôi qua tổng đài 1900 6067 để được hỗ trợ.\r\n                                -\r\n                                Sau khi đã xác nhận các thông tin của khách hàng cung cấp về giao dịch không thành\r\n                                công,\r\n                                tùy theo từng loại tài khoản ngân hàng khách hàng sử dụng mà việc hoàn tiền sẽ có thời\r\n                                gian\r\n                                khác nhau. Vì thế chúng tôi khuyên Quý khách hãy cân nhắc kỹ trước khi khi thanh toán\r\n                                vé\r\n                                trực tuyến.</p>\r\n                            <p><strong>04.</strong> Sau khi hoàn thành việc thanh toán vé trực tuyến, Quý khách sẽ nhận\r\n                                được\r\n                                thư xác nhận thông tin chi tiết vé đã đặt thông qua địa chỉ thư điện tử (email) mà bạn\r\n                                đã\r\n                                cung cấp. Đồng thời, chúng tôi cũng sẽ gửi tin nhắn (SMS) thông báo mã giao dịch tới số\r\n                                điện\r\n                                thoại Quý khách đăng ký. Chúng tôi không chịu trách nhiệm trong trường hợp Quý khách\r\n                                nhập\r\n                                sai địa chỉ email, số điện thoại và thông tin cá nhân khác dẫn đến không nhận được thư\r\n                                xác\r\n                                nhận. Vì vậy, vui lòng kiểm tra lại chính xác các thông tin trước khi thực hiện thanh\r\n                                toán.\r\n                                Lưu ý là email và SMS này chỉ có tính chất xác nhận thông tin vé sau khi Quý khách đã\r\n                                đặt\r\n                                vé thành công. Do đó, chúng tôi đề nghị Quý khách đọc kĩ các thông tin về chuyến đi,\r\n                                giờ\r\n                                khởi hành và chỗ ngồi... trước khi hoàn tất việc xác nhận tất cả các thông tin về vé.\r\n                                Email\r\n                                xác nhận thông tin đặt vé có thể đi vào hộp thư rác (spam mail) của Quý khách, vì vậy\r\n                                hãy\r\n                                kiểm tra chúng trước khi liên lạc với chúng tôi. - Sau 30 phút kể từ khi Quý khách\r\n                                thanh\r\n                                toán thành công mà vẫn chưa nhận được bất kỳ xác nhận nào (qua email hoặc SMS), vui\r\n                                lòng\r\n                                liên hệ chúng tôi qua tổng đài 1900 6067 để được hỗ trợ. Nếu Quý khách không liên hệ\r\n                                lại\r\n                                coi như <span class=\"text-success\">Xe </span> <span class=\"text-primary\"> Giường Nằm</span>\r\n                                đã hoàn thành nghĩa vụ với Quý khách.</p>\r\n                            <p><strong>05.</strong> Vui lòng mang thư xác nhận có chứa mã giao dịch để đổi vé lên xe\r\n                                tại\r\n                                văn phòng đã đăng ký, trước giờ xuất bến ít nhất 60 phút để thuận tiện cho việc lấy vé.\r\n                                Khi\r\n                                đến lấy vé tại quầy vé, nhân viên <span class=\"text-success\">Xe </span>  <span class=\"text-primary\">\r\n                                    Giường Nằm</span> cần đối chiếu thông tin xuất trình giấy tờ tùy thân để chứng minh hợp\r\n                                lệ\r\n                                cho việc lấy vé, Quý khách cần xuất trình một trong các giấy tờ tùy thân có ảnh như:\r\n                                CMND,\r\n                                hộ chiếu, bằng lái xe, thẻ học sinh sinh viên và giấy khai sinh (nếu Quý khách có mua\r\n                                vé\r\n                                cho trẻ em) còn hiệu lực để được lấy vé. - Trong trường hợp Quý khách đặt vé trước và\r\n                                chọn\r\n                                hình thức Thanh toán sau, vui lòng thực hiện thanh toán cho chúng tôi trong vòng 12 giờ\r\n                                (từ\r\n                                07:00 đến 19:00 hàng ngày trừ thứ Bảy và Chủ nhật) để vé xe của Quý khách được hợp lệ.\r\n                                Vé\r\n                                xe được đặt trước từ website <span class=\"text-success\">Xe </span>  <span class=\"text-primary\">\r\n                                    Giường Nằm</span> sẽ được giữ riêng cho Quý khách cho đến hết thời hạn xuất vé. Nếu Quý\r\n                                khách\r\n                                không đến lấy vé và thanh toán trong thời gian qui định, hệ thống sẽ tự động khóa lệnh\r\n                                đặt\r\n                                vé của Quý khách và Quý khách sẽ không thể lấy vé được.</p>\r\n                            <p><strong>06.</strong> Bằng việc thanh toán qua website này, Quý khách chấp nhận giờ khởi\r\n                                hành,\r\n                                vị trí ghế ngồi... mà Quý khách đã đặt. Quý khách đồng ý rằng, trong những trường hợp\r\n                                có\r\n                                sự thay đổi về chuyến đi hoặc bất khả kháng, chúng tôi có quyền hoàn trả lại bất kỳ vé\r\n                                nào\r\n                                từ việc mua bán qua website này hoặc thực hiện việc chuyển vé cho Quý khách qua chuyến\r\n                                khác\r\n                                theo yêu cầu của Quý khách trong trường hợp chúng tôi còn chỗ.</p>\r\n                            <p><strong>07.</strong> <span class=\"text-success\">Xe </span>  <span class=\"text-primary\">\r\n                                    Giường Nằm</span> (hoặc bên thứ ba - nhà cung cấp cổng thanh toán điện tử, hoặc/và các\r\n                                bên\r\n                                ký kết khác) sẽ sử dụng các công nghệ đặc biệt để nhận biết các hoạt động giả mạo trên\r\n                                trang\r\n                                mạng như: sử dụng thẻ tín dụng giả... Sự chấp nhận hợp tác của Quý khách cùng với nỗ\r\n                                lực\r\n                                của <span class=\"text-success\">Xe </span> <span class=\"text-primary\"> Giường Nằm</span>\r\n                                là\r\n                                rất cần thiết. Quý khách chấp chận rằng <span class=\"text-success\">Xe </span>  <span\r\n                                    class=\"text-primary\">\r\n                                    Giường Nằm</span> có thể chấm dứt quyền truy cập và sử dụng trang mạng của <span class=\"text-success\">Xe </span> \r\n                                <span class=\"text-primary\">Giường Nằm</span> nếu Quý khách hoặc người khác hành động\r\n                                nhân\r\n                                danh Quý khách vì lý do nào đó nằm trong diện nghi vấn có gian lận hoặc vi phạm các\r\n                                điều\r\n                                khoản này.</p>\r\n                            <p><strong>08.</strong> <span class=\"text-success\">Xe </span>  <span class=\"text-primary\">\r\n                                    Giường Nằm</span> sẽ hết sức cố gắng sử dụng mọi biện pháp và tuân theo mọi cách thức có\r\n                                thể\r\n                                để giữ an toàn cho tất cả các thông tin cá nhân của Quý khách, và chúng tôi cũng sẽ\r\n                                thường\r\n                                xuyên cập nhật những thông tin chính xác nhất. Website này có những công nghệ an ninh\r\n                                đảm\r\n                                bảo việc bảo vệ các thông tin bị thất lạc, lạm dụng hoặc thay đổi. Tất cả các giao dịch\r\n                                và\r\n                                thông tin về thẻ đươc sử dụng đều được đảm bảo an toàn cho các giao dịch kinh tế ngày\r\n                                nay.\r\n                                Mặc dù vậy, không phải tất cả các dữ liệu truyền qua Internet đều có thể đảm bảo 100%,\r\n                                vì\r\n                                thế chúng tôi không thể đưa ra một sự đảm bảo tuyệt đối rằng mọi thông tin Quý khách\r\n                                cung\r\n                                cấp đều được bảo vệ tât cả mọi lúc.</p>\r\n                            <p><strong>09.</strong> Thông tin cá nhân của Quý khách mà chúng tôi có được trong quá\r\n                                trình\r\n                                giao dịch chỉ dùng vào các mục đích sau: + Hỗ trợ và giải đáp các thắc mắc của Quý\r\n                                khách.\r\n                                + Cập nhật các thông tin mới nhất về các chương trình, dịch vụ... của <span class=\"text-success\">Xe </span> \r\n                                <span class=\"text-primary\">Giường Nằm</span> đến Quý khách. - Chúng tôi thu thập và sử\r\n                                dụng\r\n                                thông tin cá nhân của Quý khách phù hợp với mục đích đã nêu bên trên và hoàn toàn tuân\r\n                                thủ\r\n                                nội dung của “Chính sách bảo mật” này. Chúng tôi cam kết chỉ sử dụng cho mục đích và\r\n                                phạm\r\n                                vi đã nêu và không tiết lộ cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý bằng văn bản\r\n                                của\r\n                                Quý khách. - Xin lưu ý chúng tôi được quyền cung cấp thông tin cá nhân của Quý khách\r\n                                trong\r\n                                trường hợp khi có yêu cầu từ các cơ quan Nhà nước có thẩm quyền.</p>\r\n                            <p><strong>10.</strong> <span class=\"text-success\">Xe </span>  <span class=\"text-primary\">\r\n                                    Giường Nằm</span> có quyền tạm ngưng, hoãn hoặc thay đổi điều khoản của chương trình Đặt\r\n                                vé\r\n                                trực tuyến (Booking Online) tại bất kì thời điểm nào mà không cần báo trước. Trong\r\n                                trường\r\n                                hợp có tranh chấp xảy ra, quyết định của <span class=\"text-success\">Xe </span>  <span\r\n                                    class=\"text-primary\">\r\n                                    Giường Nằm</span> là quyết định cuối cùng.</p>\r\n                            <p><strong>11.</strong> Không được mang gia súc, gia cầm, động vật nuôi lên xe.</p>\r\n                            <p><strong>Khi sử dụng dịch vụ thanh toán trực tuyến từ website <span class=\"text-success\">Xe </span> \r\n                                    <span class=\"text-primary\">Giường Nằm</span> bạn đã hoàn toàn đồng ý với các điều\r\n                                    khoản\r\n                                    sử dụng của chúng tôi. Chúng tôi sẽ không chịu trách nhiệm khi Quý khách không thực\r\n                                    hiện\r\n                                    đúng với các quy định trong điều khoản này. </strong></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n           <!--module news -->\r\n           <!--<m_gioithieunews></m_gioithieunews>-->\r\n            </div>\r\n            <Footer></Footer>\r\n        <!--footer-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Pages/p_dieu_khoan/p_dieukhoan.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/p_dieu_khoan/p_dieukhoan.component.ts ***!
  \*************************************************************/
/*! exports provided: DIEUKHOAN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIEUKHOAN", function() { return DIEUKHOAN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DIEUKHOAN = /** @class */ (function () {
    function DIEUKHOAN() {
    }
    DIEUKHOAN.prototype.ngOnInit = function () {
    };
    DIEUKHOAN = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_dieukhoan',
            template: __webpack_require__(/*! ./p_dieukhoan.component.html */ "./src/app/Pages/p_dieu_khoan/p_dieukhoan.component.html"),
        })
    ], DIEUKHOAN);
    return DIEUKHOAN;
}());



/***/ }),

/***/ "./src/app/Pages/p_error/p_error_dangnhap/p_error_dangnhap.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/Pages/p_error/p_error_dangnhap/p_error_dangnhap.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; margin-top: 200px\" >\r\n    <h1 style=\"color: rgb(231, 9, 9);\">Bạn Đã Đăng Nhập Thành Công</h1>\r\n    <i class=\"fa fa-exclamation-triangle\" style=\"font-size: 100px; color: rgb(255, 230, 0);\"></i><br/>\r\n    <a [routerLink]=\"['/home']\" >Trang Chủ</a>\r\n</div>"

/***/ }),

/***/ "./src/app/Pages/p_error/p_error_dangnhap/p_error_dangnhap.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Pages/p_error/p_error_dangnhap/p_error_dangnhap.component.ts ***!
  \******************************************************************************/
/*! exports provided: LOIDANGNHAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOIDANGNHAP", function() { return LOIDANGNHAP; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LOIDANGNHAP = /** @class */ (function () {
    function LOIDANGNHAP() {
    }
    LOIDANGNHAP.prototype.ngOnInit = function () {
    };
    LOIDANGNHAP = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_error_dangnhap',
            template: __webpack_require__(/*! ./p_error_dangnhap.component.html */ "./src/app/Pages/p_error/p_error_dangnhap/p_error_dangnhap.component.html"),
        })
    ], LOIDANGNHAP);
    return LOIDANGNHAP;
}());



/***/ }),

/***/ "./src/app/Pages/p_error/p_error_phanquyen/p_error_phanquyen.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/p_error/p_error_phanquyen/p_error_phanquyen.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; margin-top: 200px\" >\r\n    <h1 style=\"color: rgb(231, 9, 9);\">Rất Tiếc!Bạn Không Có Quyền Truy Cập Nội Dung Mục Này.</h1>\r\n    <i class=\"fa fa-exclamation-triangle\" style=\"font-size: 100px; color: rgb(255, 230, 0);\"></i><br/>\r\n    <a [routerLink]=\"['/home']\" >Trang Chủ</a> - <a [routerLink]=\"['/dangnhap']\">Đăng Nhập</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/p_error/p_error_phanquyen/p_error_phanquyen.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Pages/p_error/p_error_phanquyen/p_error_phanquyen.component.ts ***!
  \********************************************************************************/
/*! exports provided: LOIPHANQUYEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOIPHANQUYEN", function() { return LOIPHANQUYEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LOIPHANQUYEN = /** @class */ (function () {
    function LOIPHANQUYEN() {
    }
    LOIPHANQUYEN.prototype.ngOnInit = function () {
    };
    LOIPHANQUYEN = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_error_phanquyen',
            template: __webpack_require__(/*! ./p_error_phanquyen.component.html */ "./src/app/Pages/p_error/p_error_phanquyen/p_error_phanquyen.component.html"),
        })
    ], LOIPHANQUYEN);
    return LOIPHANQUYEN;
}());



/***/ }),

/***/ "./src/app/Pages/p_gioithieu/p_gioithieu.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Pages/p_gioithieu/p_gioithieu.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n\r\n<div id=\"br-cover-content\">\r\n    <m_modalcontent></m_modalcontent>\r\n    <div>\r\n        <div id=\"sb-site\">\r\n            <div class=\"br-header\">\r\n            </div>\r\n            <section id=\"body-content\">\r\n                <div style=\"background: #FFF url(assets/Content/res/bg-aboutus.jpg) no-repeat top center\" class=\"single-content\">\r\n                    <div class=\"container inner-single-content bg-white\">\r\n                        <h1 class=\"text-center text-primary\">Xe Giường Nằm</h1>\r\n                        <p class=\"text-center quote\">\"Chất lượng là danh dự\"</p>\r\n                        <div class=\"body-text\">\r\n                            <h3>\r\n                                <i class=\"fa fa-share text-success\"></i> Giới thiệu\r\n                            </h3>\r\n                            <blockquote>\r\n                                <p>\r\n                                    <img class=\"pull-right\" width=\"400\" src=\"../../../assets/Content/res/xesuutam.jpg\" />Công\r\n                                    ty Xe Giường Nằm được thành lập vào ngày 15 tháng 11 năm 2002 với hoạt động kinh doanh\r\n                                    chính trong lĩnh vực mua bán xe ô tô, vận tải hành khách, bất động sản và kinh doanh\r\n                                    dịch vụ.\r\n                                </p>\r\n                                <p>\r\n                                    Ra đời từ một doanh nghiệp nhỏ với số lượng đầu xe chỉ từ 5 đến 10 xe khách các loại. Trải qua quá trình hoạt động, với đường\r\n                                    lối kinh doanh Uy tín - Chất lượng, với phương châm phục vụ \"Chất lượng là danh dự\",\r\n                                    sự lịch thiệp, hòa nhã, tận tình, chu đáo của đội ngũ nhân viên, Công ty Cổ phần Đầu\r\n                                    tư Xe Giường Nằm đã trở thành một địa chỉ tin cậy của đông đảo khách hàng trong cả nước,\r\n                                    được hành khách và lãnh đạo chính quyền các cấp hết lòng khen ngợi và đánh giá cao.\r\n                                </p>\r\n                                <p>\r\n                                    Trong lĩnh vực vận tải hành khách Công ty mở rộng hoạt động vận tải chất lượng cao phục vụ cho nhu cầu đi lại của người dân\r\n                                    từ khu vực miền Trung từ Huế, Đà Nẵng đến hầu hết các tỉnh thuộc khu vực Đồng bằng sông\r\n                                    Cửu Long. Với hình ảnh chiếc xe 45 chỗ màu cam hiện đại, tiện nghi cùng với màu áo xanh\r\n                                    lá cây đậm của đội ngũ lái xe Xe Giường Nằm đã tỏa đi hầu hết các nẻo đường cả nước từ\r\n                                    Huế trở vào cuối miền Đất Nước. Lượng xe của Xe Giường Nằm Corporation ngày càng phát\r\n                                    triển và được đầu tư đúng mức. Đến nay, công ty đã có trên 200 xe khách 45 chỗ thương\r\n                                    hiệu Huyndai dòng cao cấp nhất dành cho các tuyến cố định:\r\n                                </p>\r\n                                <p>TP.HCM <i class=\"fa fa-arrows-h\"></i> Đà Lạt, TP. HCM <i class=\"fa fa-arrows-h\"></i> Cần\r\n                                    Thơ, TP.HCM <i class=\"fa fa-arrows-h\"></i> Vĩnh Long, TP.HCM <i class=\"fa fa-arrows-h\"></i>\r\n                                    Cà Mau, TP.HCM <i class=\"fa fa-arrows-h\"></i> Rạch Giá, TP.HCM <i class=\"fa fa-arrows-h\"></i>\r\n                                    Long Xuyên, TP.HCM <i class=\"fa fa-arrows-h\"></i> Châu Đốc, TP.HCM <i class=\"fa fa-arrows-h\"></i>\r\n                                    Mũi Né, TP.HCM <i class=\"fa fa-arrows-h\"></i> Nha Trang, TP.HCM <i class=\"fa fa-arrows-h\"></i>\r\n                                    Qui Nhơn, TP.HCM <i class=\"fa fa-arrows-h\"></i> Đà Nẵng, Đà Lạt <i class=\"fa fa-arrows-h\"></i>\r\n                                    Nha Trang, Đà Lạt <i class=\"fa fa-arrows-h\"></i> Đà Nẵng, Đà Lạt <i class=\"fa fa-arrows-h\"></i>\r\n                                    Cần Thơ.</p>\r\n                                <p>Ngoài ra công ty còn tham gia vào hoạt động vận tải công cộng tại các thành phố lớn như:\r\n                                    xe buýt Nha Trang – Cam Ranh, xe buýt tại Đà Lạt. Người dân còn quen thuộc với hình ảnh\r\n                                    taxi Future với đội xe Invona 7 chỗ đời mới phục vụ tối đa nhu cầu đi lại của hành khách\r\n                                    tại TP. HCM. Các phương tiện vận chuyển hành khách của Xe Giường Nằm Corporation có mặt\r\n                                    hầu hết trên các tuyến cố định nối liền các trung tâm kinh tế lớn với ưu thế có tầm hoạt\r\n                                    động cao và an toàn nên Xe Giường Nằm Corporation được xem là đơn vị có chất lượng xe\r\n                                    và cung cấp dịch vụ vận tải hành khách đứng đầu cả nước.</p>\r\n                                <p>Kinh doanh bất động sản là lĩnh vực kinh doanh còn non trẻ của Công ty nhưng cũng đã đạt\r\n                                    được những thành quả nhất định với những sản phẩm chất lượng cao đang chuẩn bị được chào\r\n                                    bán để góp phần xây dựng một cộng đồng dân cư hiện đại. Người dân đã biết đến thương\r\n                                    hiệu bất động sản Xe Giường Nằm thông qua dự án Khu căn hộ Đà Nẵng Plaza, Khu căn hộ cao\r\n                                    cấp New Pearl, Dự án Khu Đô Thị Sinh Thái Biển Xe Giường Nằm Vịnh Đà Nẵng…</p>\r\n                            </blockquote>\r\n                        </div>\r\n                        <img src=\"../../../assets/Content/res/about-img.jpg\">\r\n                        <div class=\"body-text\">\r\n                            <h3>\r\n                                <i class=\"fa fa-eye text-success\"></i> Tầm nhìn\r\n                            </h3>\r\n                            <blockquote>\r\n                                <p>Trở thành Công ty hàng đầu Việt Nam trong lĩnh vực cung cấp những sản phẩm và dịch vụ\r\n                                    chất lượng tốt trong lĩnh vực bất động sản và vận tải hành khách với giá cả hợp lý cho\r\n                                    cộng đồng. Công ty luôn hoạt động với phương châm “luôn thành tín – cùng hợp tác, cùng\r\n                                    vinh danh, cùng sung túc”. Trong xu thế hội nhập hiện nay Công ty đang hướng đến việc\r\n                                    phát triển và mở rộng hoạt động đa ngành nhằm hòa nhập vào công cuộc phát triển chung\r\n                                    của đất nước.</p>\r\n                            </blockquote>\r\n                            <h3><i class=\"fa fa-shield text-success\"></i> Sứ mệnh</h3>\r\n                            <blockquote>\r\n                                <p>Đảm bảo lợi ích cao nhất cho khách hàng bằng chất lượng sản phẩm và dịch vụ hàng đầu.\r\n                                    Mọi hoạt động của Công ty đều đặt yếu tố CHẤT LƯỢNG lên hàng đầu với tôn chỉ “Chất lượng\r\n                                    là danh dự”. Công ty luôn tìm cách giảm thiểu chi phí quản lý, giá thành nhằm mang lại\r\n                                    chính sách giá ưu đãi và hợp lý nhất cho khách hàng. Mặc khác, chúng tôi không ngừng\r\n                                    tăng cường các dịch vụ hậu mãi để đảm bảo lợi ích cao nhất cho khách hàng.</p>\r\n                            </blockquote>\r\n                            <h3><i class=\"fa fa-gavel text-success\"></i> Triết lý</h3>\r\n                            <blockquote>\r\n                                <p>Hội nhập và phát triển, góp phần vào sự thịnh vượng của đất nước Nguồn nhân lực chính\r\n                                    là nhân tố then chốt, là tài sản lớn nhất của Công ty. Chúng tôi chú trọng tạo môi trường\r\n                                    làm việc hiện đại, năng động, thân thiện và trao cơ hội phát triển nghề nghiệp cho tất\r\n                                    cả mọi thành viên. Sự hài lòng của khách hàng là minh chứng cho chất lượng dịch vụ của\r\n                                    Công ty. Chúng tôi không ngừng hoàn thiện và phát triển năng lực kinh doanh, luôn tìm\r\n                                    hiểu nhu cầu của khách hàng để đem đến những sản phẩm, dịch vụ hoàn hảo nhất, đáp ứng\r\n                                    tối đa sự mong đợi của khách hàng.</p>\r\n                            </blockquote>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div>\r\n        <Footer></Footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Pages/p_gioithieu/p_gioithieu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Pages/p_gioithieu/p_gioithieu.component.ts ***!
  \************************************************************/
/*! exports provided: GIOITHIEU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIOITHIEU", function() { return GIOITHIEU; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GIOITHIEU = /** @class */ (function () {
    function GIOITHIEU() {
    }
    GIOITHIEU.prototype.ngOnInit = function () {
    };
    GIOITHIEU = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_gioithieu',
            template: __webpack_require__(/*! ./p_gioithieu.component.html */ "./src/app/Pages/p_gioithieu/p_gioithieu.component.html"),
        })
    ], GIOITHIEU);
    return GIOITHIEU;
}());



/***/ }),

/***/ "./src/app/Pages/p_huongdan/p_huongdan.component.html":
/*!************************************************************!*\
  !*** ./src/app/Pages/p_huongdan/p_huongdan.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n\r\n<div id=\"br-cover-content\">\r\n <m_modalcontent></m_modalcontent>\r\n    <div>\r\n        <div id=\"sb-site\">\r\n            <div class=\"br-header\">\r\n            </div>\r\n            <section id=\"body-content\">\r\n            \r\n                <div style=\"background: #FFF url(assets/Content/res/bg-aboutus.jpg) no-repeat top center\" class=\"single-content\">\r\n                    <div class=\"container inner-single-content bg-white\">\r\n                        <p class=\"text-center quote\">Hướng dẫn đặt vé</p>\r\n                        <div style=\"margin:auto; width: 500px\" >\r\n                        <p>Website Bán vé xe khách là một dich vụ đặt vé <span style=\"color:red;\">An toàn - Luôn có tuyến</span>.</p>\r\n                        <p>Cảm ơn quý khách đã sử dụng dịch vụ lữ hành của chúng tôi.\r\n                            Chúng tôi đã cải tiến mua vé trực tuyến nhằm giúp quý khách có \r\n                            trải nghiệm tốt nhất và tiết kiệm.\r\n                        </p>\r\n                        <h3>Các bước đặt vé trực tuyến từ trang web:</h3>\r\n                        <ol>\r\n                           <li>\r\n                               <h4>Bước 1: Chọn thông tin hành trình</h4>\r\n                               <p>Quý khách chọn Điểm khời hành, điểm đến trên form của Mua vé trực tuyến\r\n                               </p>\r\n                               <img src=\"assets/Content/img/buoc1.JPG\" />\r\n                        </li> \r\n                           <li><h4>Bước 2: Chọn các thông tin ngày đi, số ghế, giờ, số diện thoại</h4>\r\n                            <p>\r\n                                Sau khi chọn thông tin điểm đến và khời hành, nhấn mua vé và nhập thêm thông tin để\r\n                                có thể cho quý khách chọn số ghế theo ý muốn. \r\n                            </p>\r\n                            <img src=\"assets/Content/img/huongdan.JPG\" />\r\n                        </li> \r\n                           <li><h4>Bước 3: Thanh toán</h4>\r\n                            <p>\r\n                                Sau khi đã chọn các thông tin mà muốn đi thì nhấn đặt vé để vào bươc thanh toán\r\n                            </p>\r\n                        </li> \r\n                           \r\n                        </ol>\r\n                    </div>\r\n                       <!-- <div class=\"text-center\" id=\"intruction_page\">\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-01.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-01.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-02.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-02.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-03.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-03.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-04.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-04.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-05.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-05.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-06.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-06.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-07.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-07.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-08.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-08.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-09.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-09.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-10.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-10.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-11.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-11.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-12.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-12.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-13.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-13.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-14.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-14.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-15.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-15.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-16.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-16.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-17.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-17.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-18.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-18.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-19.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-19.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-20.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-20.jpg\" />\r\n                            </a>\r\n                            <a href=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-21.jpg\">\r\n                                <img src=\"assets/Content/img/futa_guidebook/HUONGDANDATVE-21.jpg\" />\r\n                            </a>\r\n                        </div>-->\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div>\r\n        <Footer></Footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Pages/p_huongdan/p_huongdan.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Pages/p_huongdan/p_huongdan.component.ts ***!
  \**********************************************************/
/*! exports provided: HUONGDAN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUONGDAN", function() { return HUONGDAN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HUONGDAN = /** @class */ (function () {
    function HUONGDAN() {
    }
    HUONGDAN.prototype.ngOnInit = function () {
    };
    HUONGDAN = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_huongdan',
            template: __webpack_require__(/*! ./p_huongdan.component.html */ "./src/app/Pages/p_huongdan/p_huongdan.component.html"),
        })
    ], HUONGDAN);
    return HUONGDAN;
}());



/***/ }),

/***/ "./src/app/Pages/p_khuyenmai/p_khuyenmai.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Pages/p_khuyenmai/p_khuyenmai.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n\r\n<div id=\"br-cover-content\">\r\n    <m_modalcontent></m_modalcontent>\r\n    <div>\r\n        <div id=\"sb-site\">\r\n            <div class=\"br-header\">\r\n            </div>\r\n            <section id=\"body-content\">\r\n        <!--        <div class=\"full-width-banner\">\r\n                    <a href=\"2/ve-xe-phuong-trang-the-le-chuong-trinh-khuyen-mai-giam-gia-ve-khu-hoi-tet-2018-len-den-35-240.html\"><img\r\n                            src=\"../uploads/useravatar/banner%20web%20landing%20page-02.png\" alt=\"\"></a>\r\n                    <div class=\"container\">\r\n                        <div class=\"posts-item clearfix\">\r\n                            <h3 class=\"text-uppercase\">Kỷ niệm 15 năm thành lập FUTA (2001-2016)</h3>\r\n                        </div>\r\n                    </div>\r\n                    <img src=\"assets/Content/img/promotion/%5bnew%5d-landing-page-header.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"container\">\r\n                    <div class=\"posts-item clearfix\">\r\n                        <h3 class=\"text-uppercase\">Đi xe Phương Trang - Phúc Lộc đầy tràn</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"full-width-banner\">\r\n                    <img src=\"assets/Content/img/banner/khuyenmaitrungxe.png\" alt=\"\">\r\n                </div>\r\n                -->\r\n            </section>\r\n        </div>\r\n        <Footer>\r\n        </Footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Pages/p_khuyenmai/p_khuyenmai.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Pages/p_khuyenmai/p_khuyenmai.component.ts ***!
  \************************************************************/
/*! exports provided: KHUYENMAI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KHUYENMAI", function() { return KHUYENMAI; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KHUYENMAI = /** @class */ (function () {
    function KHUYENMAI() {
    }
    KHUYENMAI.prototype.ngOnInit = function () {
    };
    KHUYENMAI = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_khuyenmai',
            template: __webpack_require__(/*! ./p_khuyenmai.component.html */ "./src/app/Pages/p_khuyenmai/p_khuyenmai.component.html"),
        })
    ], KHUYENMAI);
    return KHUYENMAI;
}());



/***/ }),

/***/ "./src/app/Pages/p_lichtrinh/chitiettuyenduong/chitiettuyenduong.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/Pages/p_lichtrinh/chitiettuyenduong/chitiettuyenduong.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"more-about-route hidden\" data-id=\"#Star-sai-gon\">\r\n    <div class=\"col-md-12 startpoint-block\">\r\n        <div class=\"startpoint-text\">\r\n            <p style=\"font-size: 25px;padding-left: 30px;background: url(../assets/Content/img/private/icon-bus.png) no-repeat top 4px left;\"><strong>KHỞI\r\n                    HÀNH TỪ:</strong> <span>Sài Gòn</span></p>\r\n            <p style=\"font-size: 22px;padding-left: 30px;background: url(../assets/Content/img/private/icon-phone-big.png) no-repeat top 4px left;\"><strong>HOTLINE:</strong>\r\n                <strong class=\"text-success\">1900 6067</strong></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"br-download-v2 col-md-3\">\r\n        <div class=\"describe-part\">\r\n            <img src=\"../assets/Content/img/private/webfutabusline-01.png\" width=\"100%\" style=\"margin-bottom:10px;\">\r\n            <p>\r\n                *** Quý hành khách có thể đặt vé qua tổng đài phục vụ <strong>24/24</strong> của chúng tôi (kể cả thứ 7 và\r\n                Chủ Nhật): <strong>1900 6067</strong> hoặc mua vé tiện lợi ngay trên chiếc điện thoại thông minh của quý\r\n                vị thông qua <strong>app FUTA Bus</strong> trên cả hai hệ điều hành phổ biến nhất hiện nay là IOS và Android\r\n            </p>\r\n        </div>\r\n        <div class=\"col-ms-12 hotline-part\">\r\n            <h3>Tổng đài đặt vé và<br /> chăm sóc khách hàng</h3>\r\n            <span>1900 6067<sub><img src=\"../assets/Content/img/private/img247-10.png\" /></sub></span>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n        <div class=\"starlocation-block\">\r\n            <div class=\"row\">\r\n                <div class=\"starstation-block col-md-4\">\r\n                    <h4>Các tuyến xuất phát từ</h4>\r\n                    <h3>Bến xe miền tây</h3>\r\n                    <p>395-397 Kinh Dương Vương ,P.An Lạc, Q.Bình Tân</p>\r\n                    <p>Hotline: <strong class=\"text-success\">0283 832 3747</strong></p>\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9158694762405!2d106.61706245563002!3d10.740967331617723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dd06c1f1d9b%3A0xc0becd5a59108894!2sMien+Tay+Bus+Station!5e0!3m2!1sen!2sus!4v1492584963428\"\r\n                        width=\"500\" height=\"170\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n                </div>\r\n            </div>\r\n            <div class=\"shufflestation-title\">Văn phòng trung chuyển</div>\r\n            <div class=\"row\">\r\n                <div class=\"shufflestation-block col-md-6\">\r\n                    <h4>Văn phòng 202, 231-233 Lê Hồng Phong</h4>\r\n                    <p>202, 231-233 Lê Hồng Phong, P4, Q5</p>\r\n                    <p class=\"hotline\">Hotline: 1900 6367</p>\r\n                    <p class=\"recommend\">Có mặt trước 60 phút giờ khởi hành</p>\r\n                </div>\r\n                <div class=\"shufflestation-block col-md-6\">\r\n                    <h4>Văn phòng Y Dược</h4>\r\n                    <p>15 Lô A, Đăng Thái Thân, P11, Q5</p>\r\n                    <p class=\"hotline\">Hotline: 0283 855 5175</p>\r\n                    <p class=\"recommend\">Có mặt trước 60 phút giờ khởi hành</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"shufflestation-block col-md-6\">\r\n                    <h4>Văn phòng Cao Văn Lầu</h4>\r\n                    <p>94 Cao Văn Lầu, Q6</p>\r\n                    <p class=\"hotline\">Hotline: 02839 601 105</p>\r\n                    <p class=\"recommend\">Có mặt trước 60 phút giờ khởi hành</p>\r\n                </div>\r\n                <div class=\"shufflestation-block col-md-6\">\r\n                    <h4>Văn phòng Đồng Đen</h4>\r\n                    <p>288 Đồng Đen, P10, Q.Tân Bình</p>\r\n                    <p class=\"hotline\">Hotline: 02838 601 557</p>\r\n                    <p class=\"recommend\">Có mặt trước 60 phút giờ khởi hành</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"starlocation-block\">\r\n            <div class=\"row\">\r\n                <div class=\"starstation-block col-md-4\">\r\n                    <h4>Các tuyến xuất phát từ</h4>\r\n                    <h3>Bến xe miền Đông</h3>\r\n                    <p>292 Đinh Bộ Lĩnh, P26, Q.Bình Thạnh</p>\r\n                    <p>Hotline: <strong class=\"text-success\">0283 511 9808</strong></p>\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.953459077758!2d106.70866481322498!3d10.814873692295444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175289741790d39%3A0x95362685e34cec2f!2sThe+East+Station!5e0!3m2!1sen!2sus!4v1492585166257\"\r\n                        width=\"500\" height=\"170\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/p_lichtrinh/chitiettuyenduong/chitiettuyenduong.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Pages/p_lichtrinh/chitiettuyenduong/chitiettuyenduong.component.ts ***!
  \************************************************************************************/
/*! exports provided: CHITIETTUYENDUONG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHITIETTUYENDUONG", function() { return CHITIETTUYENDUONG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CHITIETTUYENDUONG = /** @class */ (function () {
    function CHITIETTUYENDUONG() {
    }
    CHITIETTUYENDUONG.prototype.ngOnInit = function () { };
    CHITIETTUYENDUONG = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagechitiettuyenduong',
            template: __webpack_require__(/*! ./chitiettuyenduong.component.html */ "./src/app/Pages/p_lichtrinh/chitiettuyenduong/chitiettuyenduong.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CHITIETTUYENDUONG);
    return CHITIETTUYENDUONG;
}());



/***/ }),

/***/ "./src/app/Pages/p_lichtrinh/p_lichtrinh.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Pages/p_lichtrinh/p_lichtrinh.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n\r\n<div id=\"br-cover-content\">\r\n    <m_modalcontent></m_modalcontent>\r\n    <div>\r\n        <div id=\"sb-site\">\r\n            <div class=\"br-header\">\r\n            </div>\r\n            <section id=\"body-content\">\r\n                <div class=\"container\">\r\n                    <pagechitiettuyenduong></pagechitiettuyenduong>\r\n                </div>\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 col-ms-12\">\r\n                            <h3 class=\"text-primary text-uppercase\">Tuyến đường</h3>\r\n                            <pagetuyenduong></pagetuyenduong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div>\r\n        <Footer></Footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Pages/p_lichtrinh/p_lichtrinh.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Pages/p_lichtrinh/p_lichtrinh.component.ts ***!
  \************************************************************/
/*! exports provided: LICHTRINH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LICHTRINH", function() { return LICHTRINH; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LICHTRINH = /** @class */ (function () {
    function LICHTRINH() {
    }
    LICHTRINH.prototype.ngOnInit = function () {
    };
    LICHTRINH = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'plichtrinh',
            template: __webpack_require__(/*! ./p_lichtrinh.component.html */ "./src/app/Pages/p_lichtrinh/p_lichtrinh.component.html")
        })
    ], LICHTRINH);
    return LICHTRINH;
}());



/***/ }),

/***/ "./src/app/Pages/p_lichtrinh/tuyenduong/tuyenduong.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Pages/p_lichtrinh/tuyenduong/tuyenduong.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-list\" id=\"Star-ninh-hoa\" *ngFor=\"let td of danhsachtuyenduong\" >\r\n    <h3 class=\"text-uppercase text-success\">\r\n        <span class=\"sprite ico-drive\"></span> {{td.tentuyenduong}} <i class=\"fa fa-exchange\"></i>\r\n    </h3>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table \" >\r\n            <thead>\r\n                <tr class=\"text-white bg-light-green\">\r\n                    <th>STT</th>\r\n                    <th data-toggle=\"true\">Bến đi</th>\r\n                    <th data-hide=\"phone\">Bến đến</th>\r\n                    <th data-hide=\"phone\">Loại xe</th>\r\n                    <th data-hide=\"phone\">Quãng đường</th>\r\n                    <th data-hide=\"phone\">Thời gian</th>\r\n                    <th data-hide=\"phone\">Số chuyến</th>\r\n                    <th data-hide=\"phone\">Giá vé</th>\r\n                    <th data-hide=\"phone\">Giờ chạy</th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr class=\"route-row1240\"  *ngFor=\"let dstd of td.thongtin;let i=index;\">\r\n                    <td>{{i+1}}</td>\r\n                    <td >{{dstd.bendi}}</td>\r\n                    <td >{{dstd.benden}}</td>\r\n                    <td>{{dstd.loaixe}}</td>\r\n                    <td>{{dstd.quangduong}}</td>\r\n                    <td>\r\n                        {{dstd.thoigian}}\r\n                    </td>\r\n                    <td>{{dstd.sochuyen}}</td>\r\n                    <td>\r\n                        <p>\r\n                            <strong class=\"text-primary\">\r\n                                {{dstd.giave}}<sup>đ/vé</sup>\r\n                            </strong>\r\n                        </p>\r\n                    </td>\r\n                    <td>\r\n                        <a class=\"br-btn-flat br-watch-schedule\" [routerLink]=\"['/chitietlichtrinh',dstd.OriginCode,dstd.DestCode]\">\r\n                            <i class=\"fa fa-clock-o icon-flat text-success\"></i>\r\n                        </a>\r\n                    </td>\r\n                    <!-- Bỏ mua vé ở trang xem tuyến đường -->\r\n                    <td >\r\n                \r\n                        \r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/p_lichtrinh/tuyenduong/tuyenduong.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Pages/p_lichtrinh/tuyenduong/tuyenduong.component.ts ***!
  \**********************************************************************/
/*! exports provided: TUYENDUONG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUYENDUONG", function() { return TUYENDUONG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_mock_tuyenduong__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/mock_tuyenduong */ "./src/app/model/mock_tuyenduong.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TUYENDUONG = /** @class */ (function () {
    function TUYENDUONG() {
        this.tuyenduongs = _model_mock_tuyenduong__WEBPACK_IMPORTED_MODULE_1__["ds_tuyenduong"];
        this.danhsachtuyenduong = [];
        this.danhsachtuyenduong = this.layDSTuyenTheoTinh();
    }
    /*
    layDSTuyenTheoName_TuyenDuong(name:string)
    {
        let danhsachtinh:any[]=[];
        for(var i =0 ;i < this.tuyenduongs.length; i++)
        {
            if(this.tuyenduongs[i].name_tuyenduong === name)
            {
                danhsachtinh.push(this.tuyenduongs[i]);
               
            }
            
        }
        return danhsachtinh;
    }
    */
    TUYENDUONG.prototype.layDSTuyenTheoName_TuyenDuong = function (name) {
        var danhsachtinh = [];
        var dstam = [];
        for (var i = 0; i < this.tuyenduongs.length; i++) {
            if (this.tuyenduongs[i].name_tuyenduong === name) {
                danhsachtinh.push(this.tuyenduongs[i]);
                if (danhsachtinh.indexOf(this.tuyenduongs[i]) === 1) {
                    dstam.push(this.tuyenduongs[i]);
                }
            }
        }
        console.log(dstam);
        return dstam;
    };
    TUYENDUONG.prototype.layDSTuyenTheoTinh = function () {
        var danhsachtuyen = [];
        var dstam = [];
        for (var i = 0; i < this.tuyenduongs.length; i++) {
            if (dstam.indexOf(this.tuyenduongs[i].name_tuyenduong) === -1) {
                //danhsachtuyen.push({tentuyenduong:this.tuyenduongs[i].name_tuyenduong,thongtin:this.layDSTuyenTheoName_TuyenDuong(this.tuyenduongs[i].name_tuyenduong)});
                danhsachtuyen.push({ tentuyenduong: this.tuyenduongs[i].name_tuyenduong, thongtin: this.layDSTuyenTheoName_TuyenDuong(this.tuyenduongs[i].name_tuyenduong) });
                dstam.push(this.tuyenduongs[i].name_tuyenduong);
            }
        }
        return danhsachtuyen;
    };
    TUYENDUONG.prototype.ngOnInit = function () { };
    TUYENDUONG = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagetuyenduong',
            template: __webpack_require__(/*! ./tuyenduong.component.html */ "./src/app/Pages/p_lichtrinh/tuyenduong/tuyenduong.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TUYENDUONG);
    return TUYENDUONG;
}());



/***/ }),

/***/ "./src/app/Pages/p_lienhe/p_chinhanh/p_chinhanh.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Pages/p_lienhe/p_chinhanh/p_chinhanh.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"title-area\">\r\n        <h4 class=\"tittle\">Chi nhánh <span class=\"text-info\"  style=\"color:rgb(87, 168, 235);\">Bến xe</span></h4>\r\n        <span class=\"tittle-line\"></span>\r\n        <p>Phòng vé trải dài trên khắp các tuyến hoạt động phục vụ nhu cầu đi lại của quý khách</p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <h3 class=\"title-2\">\r\n            Miền Nam <sup style=\"background-color: rgb(87, 168, 235);\">{{tongsoMN}}</sup>\r\n        </h3>\r\n        <ul class=\"index-list\">\r\n            <li *ngFor='let cn of dsMN'>\r\n                <h6>\r\n                    {{cn.name_chinhanh}}\r\n                </h6>\r\n                <hr />\r\n                <p class=\"text-info\">\r\n                    <i class=\"fa fa-map-marker\"></i>{{cn.diachi_chinhanh}}\r\n                </p>\r\n                <p class=\"text-danger\"><i class=\"fa fa-phone\"></i>{{cn.sdt_chinhanh}} </p>\r\n                <a href=\"#hienbando\" data-toggle=\"modal\"  \r\n                (click)=\"xembando(cn)\"><i class=\"fa fa-street-view\" aria-hidden=\"true\"></i>&ensp;Xem bản đồ</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <h3 class=\"title-2\">\r\n            Miền Trung <sup style=\"background-color: rgb(87, 168, 235);\">{{tongsoMT}}</sup>\r\n        </h3>\r\n        <ul class=\"index-list\">\r\n            <li *ngFor='let cn of dsMT'>\r\n                <h6>\r\n                    {{cn.name_chinhanh}}\r\n                </h6>\r\n                <hr />\r\n                <p class=\"text-info\">\r\n                    <i class=\"fa fa-map-marker\"></i>{{cn.diachi_chinhanh}}\r\n                </p>\r\n                <p class=\"text-danger\"><i class=\"fa fa-phone\"></i>{{cn.sdt_chinhanh}} </p>\r\n                <a href=\"#hienbando\" data-toggle=\"modal\"  \r\n                (click)=\"xembando(cn)\"><i class=\"fa fa-street-view\" aria-hidden=\"true\"></i>&ensp;Xem bản đồ</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <h3 class=\"title-2\">\r\n            Miền Bắc <sup style=\"background-color: rgb(87, 168, 235);\">{{tongsoMB}}</sup>\r\n        </h3>\r\n        <ul class=\"index-list\">\r\n            <li *ngFor='let cn of dsMB'>\r\n                <h6>\r\n                    {{cn.name_chinhanh}}\r\n                </h6>\r\n                <hr />\r\n                <p class=\"text-info\">\r\n                    <i class=\"fa fa-map-marker\"></i>{{cn.diachi_chinhanh}}\r\n                </p>\r\n                <p class=\"text-danger\"><i class=\"fa fa-phone\"></i>{{cn.sdt_chinhanh}} </p>\r\n                <a href=\"#hienbando\" data-toggle=\"modal\"  (click)=\"xembando(cn)\">\r\n                    <i class=\"fa fa-street-view\" aria-hidden=\"true\"></i>&ensp;Xem bản đồ\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div *ngFor=\"let cn of chinhanhs\" >\r\n        <m_bando [toadochinhanh] = \"selectedItem\" *ngIf=\"selectedItem === cn\"  ></m_bando>    \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Pages/p_lienhe/p_chinhanh/p_chinhanh.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/p_lienhe/p_chinhanh/p_chinhanh.component.ts ***!
  \*******************************************************************/
/*! exports provided: CHINHANH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHINHANH", function() { return CHINHANH; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_chinhanh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/chinhanh.service */ "./src/app/service/chinhanh.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ds_chinhanh } from '../../../model/mock_chinhanh';

var CHINHANH = /** @class */ (function () {
    function CHINHANH(service_chi_nhanh) {
        this.service_chi_nhanh = service_chi_nhanh;
        //chinhanhs:any[]=ds_chinhanh;
        this.chinhanhs = [];
        this.dsMN = [];
        this.dsMT = [];
        this.dsMB = [];
        this.toado = {
            "id_chinhanh": 1,
            "name_chinhanh": "Châu Đốc",
            "diachi_chinhanh": "89 Phan Văn Vàng, TP.Châu Đốc, An Giang",
            "sdt_chinhanh": "01212121",
            "kinhdo_chinhanh": "10.6878929",
            "vido_chinhanh": "105.019906",
            "mien_chinhanh": "MN"
        };
        this.getListChiNhanh();
        //   this.dsMN=this.layDSTheoMien("MN");
        //   this.dsMT=this.layDSTheoMien("MT");
        //   this.dsMB=this.layDSTheoMien("MB");
        //   this.tongsoMB=this.dsMB.length;
        //   this.tongsoMN=this.dsMN.length;
        //   this.tongsoMT=this.dsMT.length;
    }
    CHINHANH.prototype.getListChiNhanh = function () {
        var _this = this;
        return this.service_chi_nhanh.getListChiNhanh()
            .subscribe(function (reponse) {
            _this.chinhanhs = reponse;
            console.log(_this.chinhanhs);
            if (_this.chinhanhs.length > 0) {
                _this.chinhanhs.forEach(function (element) {
                    element.id_chinhanh = element.id_chinhanh.S;
                    element.name_chinhanh = element.name_chinhanh.S;
                    element.diachi_chinhanh = element.diachi_chinhanh.S;
                    element.kinhdo_chinhanh = element.kinhdo_chinhanh.S;
                    element.vido_chinhanh = element.vido_chinhanh.S;
                    element.mien_chinhanh = element.mien_chinhanh.S;
                    element.sdt_chinhanh = element.sdt_chinhanh.S;
                });
                _this.dsMN = _this.layDSTheoMien("MN");
                _this.dsMT = _this.layDSTheoMien("MT");
                _this.dsMB = _this.layDSTheoMien("MB");
                _this.tongsoMB = _this.dsMB.length;
                _this.tongsoMN = _this.dsMN.length;
                _this.tongsoMT = _this.dsMT.length;
            }
        });
    };
    CHINHANH.prototype.layDSTheoMien = function (mien) {
        var dsMien = [];
        for (var i = 0; i < this.chinhanhs.length; i++) {
            if (this.chinhanhs[i].mien_chinhanh === mien) {
                dsMien.push(this.chinhanhs[i]);
            }
        }
        return dsMien;
    };
    CHINHANH.prototype.ngOnInit = function () { };
    CHINHANH.prototype.xembando = function (toado) {
        this.selectedItem = toado;
        console.log(this.selectedItem);
    };
    CHINHANH = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_chinhanh',
            template: __webpack_require__(/*! ./p_chinhanh.component.html */ "./src/app/Pages/p_lienhe/p_chinhanh/p_chinhanh.component.html")
        }),
        __metadata("design:paramtypes", [_service_chinhanh_service__WEBPACK_IMPORTED_MODULE_1__["ChiNhanhService"]])
    ], CHINHANH);
    return CHINHANH;
}());



/***/ }),

/***/ "./src/app/Pages/p_lienhe/p_formLH/p_formLH.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/p_lienhe/p_formLH/p_formLH.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a href=\"https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=new\" target=\"_blank\">aaaa</a> -->\r\n<form action=\"https://futabus.vn/vi-VN/ve-xe-phuong-trang-lien-he.html\" class=\"form-horizontal\" id=\"contact-form\" method=\"post\" #form_lien_he=\"ngForm\" role=\"form\">\r\n    <div class=\"form-group\">\r\n        <label for=\"\">Tên*</label>\r\n        <input class=\"form-control\" data-val=\"true\" data-val-required=\"Vui lòng nhập họ tên\" \r\n        id=\"hoten\" name=\"hoten\"  placeholder=\"Nguyễn Văn A\"\r\n        #hoten=\"ngModel\" pattern=\"[^0-9~!#$%^&*(){}]+\" required=\"required\" \r\n        type=\"text\" value=\"\" [(ngModel)]=\"lienhe.ten\"/>\r\n            <div class=\"thong_bao_loi\" *ngIf=\"hoten.invalid && !hoten.pristine\"  >\r\n                <div *ngIf=\"hoten.errors.required\" >\r\n                    Vui lòng nhập họ tên\r\n                </div>\r\n                <div *ngIf=\"hoten.errors.pattern\" >\r\n                    Họ tên không hợp lệ. Có ký tự đặc biệt\r\n                </div>\r\n            </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"\">Điện thoại*</label>\r\n        <input class=\"form-control\" data-val=\"true\" data-val-required=\"Vui lòng nhập số điện thoại\" id=\"sodienthoai\" name=\"sodienthoai\" placeholder=\"0903123456\"\r\n        #sodienthoai=\"ngModel\" type=\"text\" value=\"\" [(ngModel)]=\"lienhe.sodienthoai\" minlength=\"9\" maxlength=\"13\" required=\"required\" pattern=\"/^[+84]|[0-9]\" />\r\n            <div class=\"thong_bao_loi\" *ngIf=\"sodienthoai.invalid && !sodienthoai.pristine\"  >\r\n                <div *ngIf=\"sodienthoai.errors.required\" >\r\n                    Vui lòng nhập số điện thoại.\r\n                </div>\r\n                <div *ngIf=\"sodienthoai.errors.pattern\" >\r\n                Số điện thoại sai định dạng.\r\n                </div>\r\n            </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"\">Email*</label>\r\n        <input class=\"form-control\" data-val=\"true\" data-val-required=\"Vui lòng nhập đúng email\" id=\"email\" name=\"email\" placeholder=\"user@gmail.com\"\r\n        #email=\"ngModel\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+.[A-Za-z]{2,4}\" required=\"required\"   type=\"text\"  [(ngModel)]=\"lienhe.email\" />\r\n        <div class=\"thong_bao_loi\" *ngIf=\"email.invalid && !email.pristine\"  >\r\n                <div *ngIf=\"email.errors.required\" >\r\n                    Vui lòng nhập email.\r\n                </div>\r\n                <div *ngIf=\"email.errors.pattern\" >\r\n                   Email sai định dạng.\r\n                </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"\">Tiêu đề*</label>\r\n        <input class=\"form-control\" data-val=\"true\" data-val-required=\"Vui lòng nhập tiêu đề\" id=\"Title\" name=\"Title\" placeholder=\"Tiêu đề\"\r\n            type=\"text\" value=\"\" [(ngModel)]=\"lienhe.tieude\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"\">Nội dung*</label>\r\n        <textarea class=\"form-control\" cols=\"20\" data-val=\"true\" data-val-length=\"Vui lòng nhập nội dung trên 100 kí tự\" data-val-length-max=\"1000\"\r\n            data-val-length-min=\"100\" data-val-required=\"Vui lòng nhập nội dung\" id=\"Content\" name=\"Content\" placeholder=\"Nội dung liên hệ\"\r\n            rows=\"3\" [(ngModel)]=\"lienhe.noidung\">\r\n</textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12\">\r\n                <div class=\"g-recaptcha\" data-sitekey=\"6Ld3fiQTAAAAAB12b6UMXD6zE7hGkrTMElUpoIIX\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"row\">\r\n            <h3 style=\"color:red\">{{thongbao}}</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12\">\r\n                <button type=\"button\" class=\"btn btn-block btn-primary btn-flat\" [disabled]=\"form_lien_he.form.invalid\" (click)=\"gui()\"><i class=\"fa fa-check icon-flat bg-btn-actived\"></i>Gửi</button>\r\n                <p></p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12\">\r\n                <button type=\"reset\" class=\"btn btn-success btn-block btn-flat\" [disabled]=\"form_lien_he.form.invalid\"><i class=\"fa fa-times icon-flat icon-bg-success\"></i>Xóa</button>\r\n                <p></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/Pages/p_lienhe/p_formLH/p_formLH.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/p_lienhe/p_formLH/p_formLH.component.ts ***!
  \***************************************************************/
/*! exports provided: FORMLH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMLH", function() { return FORMLH; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_dangki__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/dangki */ "./src/app/model/dangki.ts");
/* harmony import */ var _model_lienhe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/lienhe */ "./src/app/model/lienhe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AWS = __webpack_require__(/*! aws-sdk/dist/aws-sdk-react-native */ "./node_modules/aws-sdk/dist/aws-sdk-react-native.js");
//import { from } from 'rxjs';
var FORMLH = /** @class */ (function () {
    function FORMLH() {
        this.lienhe = new _model_lienhe__WEBPACK_IMPORTED_MODULE_2__["M_LienHe"]('', '', '', '', '');
        this.thongbao = "";
        this.objectDangKi = new src_app_model_dangki__WEBPACK_IMPORTED_MODULE_1__["OBJECTDANGKI"]('', '', '', '', '', '');
    }
    ;
    FORMLH.prototype.ngOnInit = function () { };
    FORMLH.prototype.gui = function () {
        var _this = this;
        var html = "<html><body>" +
            "<h1>Từ:" + this.lienhe.ten + "(" + this.lienhe.email + ")</h1>";
        html += "<h3 style='color:red'>Tiêu đề:<br/>" + this.lienhe.tieude + "</h3>";
        html += "<p style='color:red'>Nội dung:<br/>" + this.lienhe.noidung + "</p>";
        var date = new Date();
        var thoigian = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + "," + date.getHours() + ":" + date.getMinutes();
        html += "<p>Thời gian:" + thoigian + "</p></body></html>";
        AWS.config.update({
            accessKeyId: "AKIAI3E6MVVSZLHB7QTA",
            secretAccessKey: "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",
            region: "us-west-2"
        });
        var ses = new AWS.SES({ apiVersion: "2010-12-01" });
        var params = {
            Destination: {
                ToAddresses: ["caphesualv1@gmail.com"] // Email address/addresses that you want to send your email
            },
            Message: {
                Body: {
                    Html: {
                        // HTML Format of the email
                        Charset: "UTF-8",
                        Data: html
                    },
                    Text: {
                        Charset: "UTF-8",
                        Data: this.lienhe.ten + " " + this.lienhe.email + " " + this.lienhe.tieude + " " + this.lienhe.noidung
                    }
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: this.lienhe.tieude
                }
            },
            Source: "nguyendinhqui1029@gmail.com" // mail gửi
        };
        var sendEmail = ses.sendEmail(params).promise();
        sendEmail
            .then(function (data) {
            _this.thongbao = "Gửi thành công.";
        })
            .catch(function (error) {
            _this.thongbao = "Gửi không thành công.";
        });
    };
    FORMLH = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_formLH',
            template: __webpack_require__(/*! ./p_formLH.component.html */ "./src/app/Pages/p_lienhe/p_formLH/p_formLH.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FORMLH);
    return FORMLH;
}());



/***/ }),

/***/ "./src/app/Pages/p_lienhe/p_lienhe.component.html":
/*!********************************************************!*\
  !*** ./src/app/Pages/p_lienhe/p_lienhe.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n\r\n<div id=\"br-cover-content\">\r\n    <m_modalcontent></m_modalcontent>\r\n    <div>\r\n        <div id=\"sb-site\">\r\n            <div class=\"br-header\">\r\n            </div>\r\n            <section id=\"body-content\">\r\n                <div class=\"container\" id=\"contact-page\">\r\n                    <div id=\"top-contact\" class=\"clearfix\">\r\n                        <div class=\"bg-gray \">\r\n                            <h3 class=\"text-primary\">Liên hệ: </h3>\r\n                            <p class=\"text-left\">Cám ơn bạn đã ghé thăm website của chúng tôi. Nếu bạn muốn nhận được\r\n                                thông\r\n                                tin từ chúng tôi dễ dàng, hãy điền vào form dưới đây. </p>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"body-contact\" class=\"row\">\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 col-ms-12\">\r\n                            <div class=\"col-lg-12\">\r\n                                <!--form lien he-->\r\n                                <p_formLH></p_formLH>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 col-ms-12\">\r\n                            <!--<div id=\"maps\">\r\n                                <div class=\"span11\">\r\n                                    <div id=\"map\" style=\"height: 320px\"></div>\r\n                                \r\n                                </div>\r\n                            </div>\r\n                        -->\r\n                            <div id=\"timCN\">\r\n                                <form>\r\n                                    <label>Tìm</label>\r\n                                    <input type=\"text\" name=\"timCN\" (change)=\"layChiNhanhService($event)\" />\r\n\r\n                                </form>\r\n                                <!--dsanh sach-->\r\n                                <div>\r\n                                    <ul class=\"index-list\" style=\"display: inline; \">\r\n                                        <div *ngIf=\"ds_timChiNhanh.length>0; else nguoclai;\">\r\n                                            <div *ngFor='let cn of ds_timChiNhanh;' style=\"float: left; padding: 5px; margin: 5px;\">\r\n                                                <li>\r\n                                                    <h6>\r\n                                                        {{cn.name_chinhanh}}\r\n                                                    </h6>\r\n                                                    <hr />\r\n                                                    <p class=\"text-info\">\r\n                                                        <i class=\"fa fa-map-marker\"></i>{{cn.diachi_chinhanh}}\r\n                                                    </p>\r\n                                                    <p class=\"text-danger\"><i class=\"fa fa-phone\"></i>{{cn.sdt_chinhanh}}\r\n                                                    </p>\r\n                                                    <a href=\"#hienbando\" data-toggle=\"modal\" (click)=\"xembando(cn)\"><i\r\n                                                            class=\"fa fa-street-view\" aria-hidden=\"true\"></i>&ensp;Xem\r\n                                                        bản đồ</a>\r\n                                                </li>\r\n                                            </div>\r\n                                        </div>\r\n                                        <ng-template #nguoclai>\r\n                                                <p id=\"thongbaochinhanh\"></p>\r\n                                        </ng-template>\r\n                                    </ul>\r\n                                </div>\r\n                                <div style=\"clear:both;\"></div>\r\n                                <!--dsanh sach-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--chi nhanh-->\r\n                    <p_chinhanh></p_chinhanh>\r\n                </div>\r\n            </section>\r\n        </div>\r\n        <Footer></Footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Pages/p_lienhe/p_lienhe.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Pages/p_lienhe/p_lienhe.component.ts ***!
  \******************************************************/
/*! exports provided: LIENHE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIENHE", function() { return LIENHE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_chinhanh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/chinhanh.service */ "./src/app/service/chinhanh.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LIENHE = /** @class */ (function () {
    function LIENHE(chiNhanhService) {
        this.chiNhanhService = chiNhanhService;
        this.ds_timChiNhanh = [];
    }
    LIENHE.prototype.ngOnInit = function () { };
    LIENHE.prototype.layChiNhanhService = function (chuoi) {
        var _this = this;
        this.ds_timChiNhanh = [];
        if (chuoi.target.value != "") {
            this.chiNhanhService.getTimChiNhanhLienHe(chuoi.target.value).subscribe(function (reponse) {
                //console.log(this.ds_timChiNhanh);
                if (reponse.length > 0) {
                    reponse.forEach(function (element) {
                        _this.ds_timChiNhanh.push(element.fields);
                    });
                }
                else {
                    $('#thongbaochinhanh').text('Không có chi nhánh bạn muốn tìm.');
                }
            });
        }
    };
    LIENHE = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'plienhe',
            template: __webpack_require__(/*! ./p_lienhe.component.html */ "./src/app/Pages/p_lienhe/p_lienhe.component.html")
        }),
        __metadata("design:paramtypes", [src_app_service_chinhanh_service__WEBPACK_IMPORTED_MODULE_1__["ChiNhanhService"]])
    ], LIENHE);
    return LIENHE;
}());



/***/ }),

/***/ "./src/app/Pages/p_thongtindatve/p_thongtindatve_KH/p_thongtindatve_KH.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/Pages/p_thongtindatve/p_thongtindatve_KH/p_thongtindatve_KH.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n\r\n<div class=\"bangthongtindatve\">\r\n    <h1 style=\"box-shadow: 20pt\">Thông Tin Các Vé Đã Đặt</h1>\r\n    <div id=\"khungtim\">\r\n        <input type=\"date\" id=\"thongtintim\" name=\"thongtintim\" style=\"width: 300px; height: 26px;\" placeholder=\"Nhập số điện thoại...\" />\r\n        <button type=\"button\" id=\"btntim\" (click)=\"thongtintim()\"><i class=\"fa fa-search\"></i></button>\r\n    </div>\r\n    <table id=\"bangthongtin\" class=\"table table-striped table-dark\" style=\"width: 80%; margin: auto;background: rgb(129, 182, 218); text-align: center\">\r\n        <tr>\r\n            <th>STT</th>\r\n            <th>Điểm đi</th>\r\n            <th>Điểm đến</th>\r\n            <th>Ngày đi</th>\r\n            <th>Số lượng vé</th>\r\n            <th>Số ghế</th>\r\n            <th>Giờ đi</th>\r\n            <th>Số điện thoại</th>\r\n            <th>Trạng thái</th>\r\n            <th>Tác vụ</th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let item of danhsach_datvetheosdt;let i=index\">\r\n\r\n            <td>{{i+1}}</td>\r\n            <td>{{item.diemdi}}</td>\r\n            <td>{{item.diemden}}</td>\r\n            <td>{{item.ngaydi}}</td>\r\n            <td>{{item.soluong}}</td>\r\n            <td>\r\n                <span *ngFor=\"let sg of item.soghe\">\r\n                    <input *ngIf=\"item.soghe.length > 1\" class=\"{{item.idchitietdatve}}\" value=\"{{sg}}\" id=\"{{sg}}\"\r\n                        type=\"checkbox\" />\r\n                    <label for=\"{{sg}}\"> {{sg}} </label>\r\n                </span>\r\n\r\n            </td>\r\n            <td>{{item.giodi}}</td>\r\n            <td>{{item.sodienthoai}}</td>\r\n            <td>{{item.trangthai == 1 ? \"Đang Đặt\":\"\"}}</td>\r\n            <td>\r\n                <button *ngIf=\"item.trangthai == 1 \" type=\"button\" id=\"btnhuy\" (click)=\"thongtinhuy(item)\"><i class=\"fa fa-trash\"></i>Hủy</button>\r\n            </td>\r\n\r\n        </tr>\r\n        <tr>\r\n            <td colspan=\"10\">\r\n                <h3 style=\"color: red; text-align: center\" id=\"thongbao\"></h3>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n<Footer></Footer>"

/***/ }),

/***/ "./src/app/Pages/p_thongtindatve/p_thongtindatve_KH/p_thongtindatve_KH.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/Pages/p_thongtindatve/p_thongtindatve_KH/p_thongtindatve_KH.component.ts ***!
  \******************************************************************************************/
/*! exports provided: THONGTINDATVEKHACHHANG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THONGTINDATVEKHACHHANG", function() { return THONGTINDATVEKHACHHANG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_chitietdatve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/chitietdatve.service */ "./src/app/service/chitietdatve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var THONGTINDATVEKHACHHANG = /** @class */ (function () {
    function THONGTINDATVEKHACHHANG(servivce_chitietdatve) {
        this.servivce_chitietdatve = servivce_chitietdatve;
        this.ds_chitietdatve = [];
        this.soghe = [];
        this.danhsach_datvetheosdt = [];
        this.getListChiTietDatVeXE();
    }
    THONGTINDATVEKHACHHANG.prototype.ngOnInit = function () {
    };
    THONGTINDATVEKHACHHANG.prototype.getListChiTietDatVeXE = function () {
        var _this = this;
        return this.servivce_chitietdatve.getListChiTietDatVe()
            .subscribe(function (reponse) {
            _this.ds_chitietdatve = reponse;
            if (_this.ds_chitietdatve.length > 0) {
                _this.ds_chitietdatve.forEach(function (element) {
                    element.idchitietdatve = element.idchitietdatve.N;
                    element.idchuyenxe = element.idchuyenxe.N;
                    element.diemdi = element.diemdi.S;
                    element.diemden = element.diemden.S;
                    element.ngaydi = element.ngaydi.S;
                    element.soluong = element.soluong.S;
                    element.giodi = element.giodi.S;
                    if (element.soghe.L != undefined) {
                        element.soghe.L.forEach(function (ghe) {
                            _this.soghe.push(ghe.S);
                        });
                    }
                    element.soghe = _this.soghe;
                    _this.soghe = [];
                    element.sodienthoai = element.sodienthoai.S;
                    element.trangthai = element.trangthai.N;
                    // if (element.trangthai == 1) {
                    //     element.trangthai = "Đang Đặt";
                    // }
                    // else if (element.trangthai == 2) {
                    //     element.trangthai = "Đã nhận vé";
                    // }
                });
            }
            var ngayhientai = new Date();
            var String_ngayhientai = (ngayhientai.getMonth() + 1) + "/" + ngayhientai.getDate() + "/" + ngayhientai.getFullYear();
            _this.ds_chitietdatve.forEach(function (element) {
                var String_ngaydi = Date.parse(element.ngaydi);
                console.log(String_ngaydi + "----- NGày hiện tại:" + Date.parse(String_ngayhientai));
                if (element.sodienthoai == sessionStorage.getItem("sodienthoai") && element.trangthai == 1 && String_ngaydi >= Date.parse(String_ngayhientai)) {
                    _this.danhsach_datvetheosdt.push(element);
                }
            });
        });
    };
    THONGTINDATVEKHACHHANG.prototype.thongtinhuy = function (id) {
        if (id.soghe.length > 1) {
            for (var i = 0; i < $("." + id.idchitietdatve).length; i++) {
                if ($("." + id.idchitietdatve)[i].checked == true) {
                    //alert("Hủy ghế thành công!"+ $("."+id.idchitietdatve)[i].value);
                    id.soghe.splice(id.soghe.indexOf($("." + id.idchitietdatve)[i].value), 1);
                    id.soluong -= 1;
                }
            }
            console.log(this.danhsach_datvetheosdt);
            this.servivce_chitietdatve.addThongTinChiTietDatVe(id).subscribe(function (data) {
                alert("Hủy ghế thành công!");
            }, 
            // Errors will call this callback instead:
            function (err) {
                alert("Hủy ghế không thành công!");
            });
        }
        else if (id.soghe.length == 1) {
            this.danhsach_datvetheosdt.splice(this.danhsach_datvetheosdt.indexOf(id), 1);
            id.trangthai = 3;
            this.servivce_chitietdatve.addThongTinChiTietDatVe(id).subscribe(function (data) {
                alert("Hủy ghế thành công!");
            }, 
            // Errors will call this callback instead:
            function (err) {
                alert("Hủy ghế không thành công!");
            });
        }
        console.log(id);
    };
    THONGTINDATVEKHACHHANG.prototype.thongtintim = function () {
        var _this = this;
        $('#thongbao').text("");
        var ngaydatve;
        var mangngaydatve = [];
        ngaydatve = $('#thongtintim').val();
        mangngaydatve = ngaydatve.split("-");
        ngaydatve = mangngaydatve[1] + "/" + mangngaydatve[2] + "/" + mangngaydatve[0];
        console.log(mangngaydatve);
        this.danhsach_datvetheosdt = [];
        this.ds_chitietdatve.forEach(function (element) {
            if (element.ngaydi === ngaydatve) {
                _this.danhsach_datvetheosdt.push(element);
            }
        });
        if (this.danhsach_datvetheosdt.length == 0) {
            $('#thongbao').text("Không tìm thấy thông tin vé!");
        }
    };
    THONGTINDATVEKHACHHANG = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_thongtindatve_KH',
            template: __webpack_require__(/*! ./p_thongtindatve_KH.component.html */ "./src/app/Pages/p_thongtindatve/p_thongtindatve_KH/p_thongtindatve_KH.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_service_chitietdatve_service__WEBPACK_IMPORTED_MODULE_1__["ChiTietDatVeService"]])
    ], THONGTINDATVEKHACHHANG);
    return THONGTINDATVEKHACHHANG;
}());



/***/ }),

/***/ "./src/app/Pages/p_thongtindatve/p_thongtindatve_admin/p_thongtindatve.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/Pages/p_thongtindatve/p_thongtindatve_admin/p_thongtindatve.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n<div class=\"bangthongtindatve\">\r\n    <h1 style=\"box-shadow: 20pt\">Thông Tin Các Vé Đã Đặt</h1>\r\n    <div id=\"khungtim\">\r\n        <input type=\"text\" id=\"thongtintim\" name=\"thongtintim\" (change)=\"layLaiDanhSach()\" style=\"width: 300px;\" placeholder=\"Nhập số điện thoại...\"/>\r\n        <button type=\"button\" id=\"btntim\"  (click)=\"thongtintim()\" ><i class=\"fa fa-search\"></i></button> \r\n    </div>\r\n    <table id=\"bangthongtin\" class=\"table table-striped table-dark\"  style=\"width: 80%;background: rgb(129, 182, 218); margin: auto; text-align: center;\">\r\n        <tr >\r\n            <th>STT</th>\r\n            <th>Mã chuyến xe</th>\r\n            <th>Điểm đi</th>\r\n            <th>Điểm đến</th>\r\n            <th>Ngày đi</th>\r\n            <th>Số lượng vé</th>\r\n            <th>Số ghế</th>\r\n            <th>Giờ đi</th>\r\n            <th>Số điện thoại</th>\r\n            <th>Trạng thái</th>\r\n        </tr>\r\n        <tr *ngFor=\"let item of danhsach_datvetheosdt;let i=index\" >\r\n                \r\n                <td>{{i+1}}</td>\r\n                <td>{{item.idchuyenxe}}</td>\r\n                <td>{{item.diemdi}}</td>\r\n                <td>{{item.diemden}}</td>\r\n                <td>{{item.ngaydi}}</td>\r\n                <td>{{item.soluong}}</td>\r\n                <td>{{item.soghe}}</td>\r\n                <td>{{item.giodi}}</td>\r\n                <td>{{item.sodienthoai}}</td>\r\n            <td *ngIf=\"item.trangthai == 'Đã nhận vé'; else nguoclaibtn\" >\r\n                    <button type=\"button\" id=\"btnnhanve\" disabled (click)=\"xacNhanDatVe(item)\" ><i class=\"fa fa-check\"></i>{{item.trangthai}}</button>\r\n            </td>\r\n            <ng-template #nguoclaibtn>\r\n                <td >\r\n                    <button type=\"button\" id=\"btnnhanve\" (click)=\"xacNhanDatVe(item)\" ><i class=\"fa fa-check\"></i>{{item.trangthai}}</button>\r\n                </td>\r\n            </ng-template>\r\n        </tr>\r\n       \r\n        <tr>\r\n                <td colspan=\"10\">\r\n                        <h3 style=\"color: red; text-align: center\" id=\"thongbao\"></h3>\r\n                </td>\r\n            </tr>\r\n    </table>\r\n</div>\r\n<Footer></Footer>"

/***/ }),

/***/ "./src/app/Pages/p_thongtindatve/p_thongtindatve_admin/p_thongtindatve.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/Pages/p_thongtindatve/p_thongtindatve_admin/p_thongtindatve.component.ts ***!
  \******************************************************************************************/
/*! exports provided: THONGTINDATVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THONGTINDATVE", function() { return THONGTINDATVE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_chitietdatve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/chitietdatve.service */ "./src/app/service/chitietdatve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var THONGTINDATVE = /** @class */ (function () {
    function THONGTINDATVE(servivce_chitietdatve) {
        this.servivce_chitietdatve = servivce_chitietdatve;
        this.ds_chitietdatve = [];
        this.soghe = [];
        this.danhsach_datvetheosdt = [];
        this.getListChiTietDatVeXE();
    }
    THONGTINDATVE.prototype.ngOnInit = function () {
    };
    THONGTINDATVE.prototype.getListChiTietDatVeXE = function () {
        var _this = this;
        return this.servivce_chitietdatve.getListChiTietDatVe()
            .subscribe(function (reponse) {
            _this.ds_chitietdatve = reponse;
            console.log(_this.ds_chitietdatve);
            if (_this.ds_chitietdatve.length > 0) {
                _this.ds_chitietdatve.forEach(function (element) {
                    element.idchitietdatve = element.idchitietdatve.N;
                    element.idchuyenxe = element.idchuyenxe.N;
                    element.diemdi = element.diemdi.S;
                    element.diemden = element.diemden.S;
                    element.ngaydi = element.ngaydi.S;
                    element.soluong = element.soluong.S;
                    element.giodi = element.giodi.S;
                    if (element.soghe.L != undefined) {
                        element.soghe.L.forEach(function (ghe) {
                            _this.soghe.push(ghe.S);
                        });
                    }
                    element.soghe = _this.soghe;
                    _this.soghe = [];
                    element.sodienthoai = element.sodienthoai.S;
                    element.trangthai = element.trangthai.N;
                    if (element.trangthai == 1) {
                        element.trangthai = "Đang Đặt";
                    }
                    else if (element.trangthai == 2) {
                        element.trangthai = "Đã nhận vé";
                    }
                });
            }
            _this.ds_chitietdatve.forEach(function (element) {
                if (element.trangthai != "Đã nhận vé") {
                    _this.danhsach_datvetheosdt.push(element);
                }
            });
        });
    };
    THONGTINDATVE.prototype.xacNhanDatVe = function (tt) {
        var _this = this;
        this.danhsach_datvetheosdt.forEach(function (element) {
            if (element.sodienthoai == tt.sodienthoai) {
                _this.danhsach_datvetheosdt.splice(_this.danhsach_datvetheosdt.indexOf(tt), 1);
            }
        });
        tt.trangthai = "Đã nhận vé";
        this.servivce_chitietdatve.addThongTinChiTietDatVe(tt).subscribe(function (data) {
            alert("Cập nhật thành công.");
        }, 
        // Errors will call this callback instead:
        function (err) {
            alert("Cập nhật không thành công.");
        });
    };
    THONGTINDATVE.prototype.thongtintim = function () {
        var _this = this;
        $('#thongbao').text("");
        var sdttim;
        sdttim = $('#thongtintim').val();
        this.danhsach_datvetheosdt = [];
        if (sdttim != "") {
            this.ds_chitietdatve.forEach(function (element) {
                if (element.sodienthoai === sdttim) {
                    _this.danhsach_datvetheosdt.push(element);
                }
            });
            if (this.danhsach_datvetheosdt.length == 0) {
                $('#thongbao').text("Không tìm thấy thông tin vé!");
            }
        }
        else {
            this.getListChiTietDatVeXE();
            this.ds_chitietdatve.forEach(function (element) {
                if (element.trangthai != "Đã nhận vé") {
                    _this.danhsach_datvetheosdt.push(element);
                }
            });
        }
    };
    THONGTINDATVE.prototype.layLaiDanhSach = function () {
        var _this = this;
        var sdttim;
        $('#thongbao').text("");
        sdttim = $('#thongtintim').val();
        if (sdttim == "") {
            // this.danhsach_datvetheosdt= this.danhsach_datvetheosdt;
            this.getListChiTietDatVeXE();
            this.ds_chitietdatve.forEach(function (element) {
                if (element.trangthai != "Đã nhận vé") {
                    _this.danhsach_datvetheosdt.push(element);
                }
            });
        }
    };
    THONGTINDATVE = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_thongtindatve',
            template: __webpack_require__(/*! ./p_thongtindatve.component.html */ "./src/app/Pages/p_thongtindatve/p_thongtindatve_admin/p_thongtindatve.component.html")
        }),
        __metadata("design:paramtypes", [src_app_service_chitietdatve_service__WEBPACK_IMPORTED_MODULE_1__["ChiTietDatVeService"]])
    ], THONGTINDATVE);
    return THONGTINDATVE;
}());



/***/ }),

/***/ "./src/app/Pages/p_trangchu/p_khoihanhtp/p_khoihanhtp.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Pages/p_trangchu/p_khoihanhtp/p_khoihanhtp.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\" id=\"star-city\">\r\n    <h3 class=\"heading\"><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i> Khởi hành từ các thành phố lớn</h3>\r\n    \r\n        <div  class=\"row\" *ngFor=\"let diadiem of ds_cacphantu\">\r\n                <div class=\"col-md-4 startpoint-block\" *ngFor=\"let item of diadiem\">\r\n                    <img src=\"{{item.hinh_diadiem}}\" />\r\n                    <div class=\"startpoint-text\" >\r\n                        <p>Khởi hành từ: <span>{{item.ten_diadiem}}</span>\r\n                            <a href=\"#hienbando\" data-toggle=\"modal\"  \r\n                            (click)=\"xembando(item)\"> (Xem bản đồ)</a></p>\r\n                        <p>Hotline: <span>{{item.sodienthoai_diadiem}}</span></p>\r\n                        <p>Điểm đến: {{item.diemden_diadiem}}</p>\r\n                        <div class=\"clearfix\"></div>\r\n                    </div>                    \r\n                </div>\r\n               \r\n \r\n        </div>\r\n        <div *ngFor=\"let diadiem of ds_diadiemthanhpholon\" >\r\n                    <m_bando [toado] = \"selectedItem\" *ngIf=\"selectedItem === diadiem\"  ></m_bando>    \r\n        </div>\r\n        \r\n        \r\n</section>"

/***/ }),

/***/ "./src/app/Pages/p_trangchu/p_khoihanhtp/p_khoihanhtp.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/p_trangchu/p_khoihanhtp/p_khoihanhtp.component.ts ***!
  \*************************************************************************/
/*! exports provided: KHOIHANHTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KHOIHANHTP", function() { return KHOIHANHTP; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_thanhpholon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/thanhpholon.service */ "./src/app/service/thanhpholon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KHOIHANHTP = /** @class */ (function () {
    function KHOIHANHTP(servivce_diadiemthanhpholon) {
        this.servivce_diadiemthanhpholon = servivce_diadiemthanhpholon;
        //ds_diadiemthanhpholon : Diadiemthanhpholon[] =  ds_diadiemthanhpholon;
        this.ds_diadiemthanhpholon = [];
        this.sodong = Math.round(this.ds_diadiemthanhpholon.length / 3) + 1;
        this.ds_phantu = [];
        this.ds_cacphantu = [];
        this.toado = {
            "id_diadiem": "1", "ten_diadiem": "Sài Gòn", "sodienthoai_diadiem": "19006067",
            "kinhdo": "10.7553411", "vido": "106.4150244",
            "diemden_diadiem": "Châu Đốc, Cần Thơ, Cà Mau, Đà Lạt, Mũi Né, Qui Nhơn, Nha Trang,...",
            "hinh_diadiem": "webfutabusline-01.png"
        };
        this.toados = this.ds_diadiemthanhpholon;
        this.getListThanhPhoLon();
    }
    KHOIHANHTP.prototype.ngOnInit = function () {
    };
    KHOIHANHTP.prototype.getListThanhPhoLon = function () {
        var _this = this;
        return this.servivce_diadiemthanhpholon.laydanhsachthanhpholon()
            .subscribe(function (reponse) {
            _this.ds_diadiemthanhpholon = reponse;
            console.log(_this.ds_diadiemthanhpholon);
            if (_this.ds_diadiemthanhpholon.length > 0) {
                _this.ds_diadiemthanhpholon.forEach(function (element) {
                    element.diemden_diadiem = element.diemden_diadiem.S;
                    element.hinh_diadiem = element.hinh_diadiem.S;
                    element.id_diadiem = element.id_diadiem.S;
                    element.kinhdo = element.kinhdo.S;
                    element.vido = element.vido.S;
                    element.sodienthoai_diadiem = element.sodienthoai_diadiem.S;
                    element.ten_diadiem = element.ten_diadiem.S;
                });
            }
            /// Chia dòng trên trang chủ
            for (var i = 1; i < _this.ds_diadiemthanhpholon.length + 1; i++) {
                _this.ds_phantu.push(_this.ds_diadiemthanhpholon[i - 1]);
                if (i % 3 == 0) {
                    _this.ds_cacphantu.push(_this.ds_phantu);
                    _this.ds_phantu = [];
                }
            }
        });
    };
    KHOIHANHTP.prototype.xembando = function (toado) {
        this.selectedItem = toado;
    };
    KHOIHANHTP = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p_khoihanhtp',
            template: __webpack_require__(/*! ./p_khoihanhtp.component.html */ "./src/app/Pages/p_trangchu/p_khoihanhtp/p_khoihanhtp.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_service_thanhpholon_service__WEBPACK_IMPORTED_MODULE_1__["ThanhPhoLonService"]])
    ], KHOIHANHTP);
    return KHOIHANHTP;
}());



/***/ }),

/***/ "./src/app/Pages/p_trangchu/trangchu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Pages/p_trangchu/trangchu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\r\n\r\n<div id=\"br-cover-content\">\r\n    <m_modalcontent></m_modalcontent>\r\n    <div >\r\n        <div id=\"sb-site\" >\r\n            <div class=\"br-header\">\r\n            </div>\r\n            <section id=\"body-top\"> \r\n                <div class=\"container\">\r\n                    <div class=\"row\"  >\r\n                        <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12 col-ms-12\" style=\"float:left\">\r\n                            <div>\r\n                                <!-- Nav tabs -->\r\n                                <ul class=\"v-tabs clearfix\" role=\"tablist\">\r\n                                    <li role=\"presentation\" class=\"active\"><a href=\"#booking\" aria-controls=\"home\" role=\"tab\"\r\n                                            data-toggle=\"tab\">Mua vé trực tuyến</a></li>\r\n                                    <li><a [routerLink]=\"'/huongdan'\" class=\"text-default\">Hướng dẫn đặt vé</a></li>\r\n                                </ul>\r\n                                <!-- Tab panes -->\r\n                                <div style=\"float:left\">\r\n                                <m_datve></m_datve>\r\n                            </div>\r\n                            \r\n                            </div>\r\n                            \r\n                        </div>\r\n                       \r\n                        <m_slider></m_slider>\r\n                        <!--////Slider image-->\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n            </section>\r\n            <div style=\"clear:both\"></div>\r\n            \r\n            <!--Khoi hanh tu cac thanh pho-->\r\n            <p_khoihanhtp></p_khoihanhtp>\r\n            <!--Thong tin can biet-->\r\n            <section class=\"container\" id=\"more-info\">\r\n                <h3 class=\"heading\"><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i> Thông tin cần biết</h3>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 thongtin-block\">\r\n                        <img src=\"assets/Content/img/private/imgqdchung-17.png\" />\r\n                        <div class=\"thongtin-text\">\r\n                            <h3>Những quy định chung</h3>\r\n                            <p>\r\n                                Công ty xe khách Phương Trang khuyến khích quý khách đặt chỗ trước nhằm đảm bảo luôn có vị trí ghế cho quý vị, tuy nhiên\r\n                                quý vị vẫn có thể đến tại bến để đi mà không cần gọi đặt chỗ. Quý hành khách có thể mua vé\r\n                                bằng các hình thức linh hoạt nhưng vẫn đảm bảo...\r\n                            </p>\r\n                            <a href=\"#\" onclick=\"Updating(); return false;\">Chi tiết</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 thongtin-block\">\r\n                        <img src=\"assets/Content/img/private/imgvchanghoa-18.png\" />\r\n                        <div class=\"thongtin-text\">\r\n                            <h3>Vận chuyển hàng hóa</h3>\r\n                            <p>\r\n                                Mỗi hành khách chỉ được mang theo 1 vali với kích thước trung bình và 1 túi hành lý với kích cỡ xách tay. Hành lý được chấp\r\n                                thuận bao gồm vali, túi vải, thùng với những khóa an toàn, mọi sự mất mát bên trong hành\r\n                                lý khi có khóa an toàn chúng tôi không chịu trách nhiệm...\r\n                            </p>\r\n                            <a href=\"#\" onclick=\"Updating(); return false;\">Chi tiết</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 thongtin-block\">\r\n                        <img src=\"assets/Content/img/private/imgtongtinhanhly-19.png\" />\r\n                        <div class=\"thongtin-text\">\r\n                            <h3>Thông tin hành lý</h3>\r\n                            <p>\r\n                                Để đảm bảo sự an toàn cho các hàng hóa vận chuyển và an toàn cho sự di chuyển của tất cả quý hành khách trên chuyến xe, quý\r\n                                hành khách có nhu cầu với dịch vụ vận chuyển hàng hóa vui lòng đọc kĩ các quy định liên quan\r\n                                đến hàng hóa cần vận chuyển bên dưới đây...\r\n                            </p>\r\n                            <a href=\"#\" onclick=\"Updating(); return false;\">Chi tiết</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <div id=\"fb-root\"></div>\r\n        </div>\r\n        \r\n        <Footer></Footer>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Pages/p_trangchu/trangchu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Pages/p_trangchu/trangchu.component.ts ***!
  \********************************************************/
/*! exports provided: TRANGCHU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANGCHU", function() { return TRANGCHU; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TRANGCHU = /** @class */ (function () {
    function TRANGCHU() {
    }
    TRANGCHU.prototype.ngOnInit = function () {
    };
    TRANGCHU = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trang_chu',
            styles: ["\n    agm-map {\n      height: 300px;\n    }\n  "],
            template: __webpack_require__(/*! ./trangchu.component.html */ "./src/app/Pages/p_trangchu/trangchu.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TRANGCHU);
    return TRANGCHU;
}());



/***/ }),

/***/ "./src/app/Widget/W_footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Widget/W_footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- add slidebar menu -->\r\n\r\n<footer>\r\n    <div id=\"footer-body\">\r\n        <div class=\"f-body-wrap container\">\r\n\r\n            <nav id=\"nav-f\">\r\n                <ul>\r\n                   <!-- <li><a href=\"vi-VN/ve-xe-phuong-trang-ve-chung-toi.html\">Về chúng tôi</a></li>-->\r\n                    <li><a [routerLink] = \"'/dieukhoan'\">Điều khoản sử dụng</a></li>\r\n                    <!--<li><a [routerLink] = \"'/khuyenmai'\">Khuyến mãi</a></li>-->\r\n                    <li><a [routerLink] = \"'/huongdan'\">Hướng dẫn</a></li>\r\n                    <li><a [routerLink] = \"'/gioithieu'\">Giới thiệu</a></li>\r\n                    <!--<li><a href=\"vi-VN/ve-xe-phuong-trang-tin-tuc.html\">Tin tức</a></li>-->\r\n                    <!--<li><a href=\"vi-VN/ve-xe-phuong-trang-tuyen-dung.html\">Tuyển dụng</a></li>-->\r\n                    <!--<li><a href=\"vi-VN/cau-hoi-thuong-gap.html\">Hỏi &amp; Đáp</a></li>-->\r\n                </ul>\r\n            </nav>\r\n\r\n           <!--<div id=\"f-info\" class=\"row\">\r\n                <div class=\"col-md-5 col-md-offset-2\">\r\n                    <div id=\"download_btn\">\r\n                        <ul>\r\n                            <li>Tải app FUTA Bus tại</li>\r\n                            <li>\r\n                                <a href=\"https://itunes.apple.com/us/app/futa/id1049039667\" target=\"_blank\">\r\n                                    <img src=\"assets/Content/img/app-store.png\">\r\n                                </a>\r\n                                <a href=\"https://play.google.com/store/apps/details?id=com.futabus.activity\" target=\"_blank\">\r\n                                    <img src=\"assets/Content/img/an-droid.png\">\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div id=\"social\">\r\n                        <ul style=\"text-align:left\">\r\n                            <li>Kết nối với chúng tôi</li>\r\n                            <li>\r\n                                <a target=\"_blank\" href=\"https://www.facebook.com/xephuongtrang\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                    <i class=\"fa fa-google-plus-square\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                    <i class=\"fa fa-twitter-square\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-5 text-left\">\r\n\t\t    <a target=\"_blank\" href=\"http://www.online.gov.vn/CustomWebsiteDisplay.aspx?DocId=14037\">\r\n\t\t\t<img src=\"assets/Content/img/private/dathongbao-bocongthuong.png\" class=\"logo-bocongthuong\">\r\n\t\t    </a>                   \r\n                </div>\r\n\r\n            </div>\r\n-->\r\n            <div class=\"f-copy\">\r\n                <p>&copy; 2018 | Trang web đặt vé trực tuyến của Bán vé xe khách.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  \r\n</footer>"

/***/ }),

/***/ "./src/app/Widget/W_footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Widget/W_footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FOOTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER", function() { return FOOTER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FOOTER = /** @class */ (function () {
    function FOOTER() {
    }
    FOOTER.prototype.ngOnInit = function () {
    };
    FOOTER = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/Widget/W_footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FOOTER);
    return FOOTER;
}());



/***/ }),

/***/ "./src/app/Widget/W_menu/menu.component.html":
/*!***************************************************!*\
  !*** ./src/app/Widget/W_menu/menu.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu_top></menu_top>\r\n\r\n<menu_bottom></menu_bottom>"

/***/ }),

/***/ "./src/app/Widget/W_menu/menu.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Widget/W_menu/menu.component.ts ***!
  \*************************************************/
/*! exports provided: MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MENU = /** @class */ (function () {
    function MENU() {
    }
    MENU.prototype.ngOnInit = function () {
    };
    MENU = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/Widget/W_menu/menu.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MENU);
    return MENU;
}());



/***/ }),

/***/ "./src/app/Widget/W_menu/menu_bottom/menubottom.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Widget/W_menu/menu_bottom/menubottom.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <div class=\"container\">\r\n        <!--<div id=\"logo\" class=\"pull-left\">\r\n            <a href=\"index.html\" class=\"\">\r\n                <img id=\"logo-main\" src=\"assets/Content/img/logo-futa.png\" alt=\"\">\r\n            </a>\r\n        </div>-->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed sb-toggle-left\" data-toggle=\"collapse\" data-target=\"\" aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n\r\n        </div>\r\n        <!--<ul class=\"pull-right hidden-xs\">\r\n            <li><a href=\"vi-VN/ve-xe-phuong-trang-lich-trinh.html\">Lịch trình</a></li>\r\n            <li><a href=\"vi-VN/cac-chuong-trinh-khuyen-mai.html\">Khuyến mãi</a></li>\r\n            <li><a href=\"vi-VN/ve-xe-phuong-trang-tin-tuc.html\">Tin tức</a></li>\r\n            <li><a href=\"vi-VN/ve-xe-phuong-trang-lien-he.html\">Liên hệ</a></li>\r\n\r\n<li><a href=\"https://id.futabus.vn/\">Đăng nhập</a></li>\r\n<li><a href=\"https://id.futabus.vn/User/Register\">Đăng ký</a></li>\r\n\r\n        </ul>-->\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/Widget/W_menu/menu_bottom/menubottom.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Widget/W_menu/menu_bottom/menubottom.component.ts ***!
  \*******************************************************************/
/*! exports provided: MENUBOTTOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUBOTTOM", function() { return MENUBOTTOM; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MENUBOTTOM = /** @class */ (function () {
    function MENUBOTTOM() {
    }
    MENUBOTTOM.prototype.ngOnInit = function () {
    };
    MENUBOTTOM = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu_bottom',
            template: __webpack_require__(/*! ./menubottom.component.html */ "./src/app/Widget/W_menu/menu_bottom/menubottom.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MENUBOTTOM);
    return MENUBOTTOM;
}());



/***/ }),

/***/ "./src/app/Widget/W_menu/menu_top/menutop.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Widget/W_menu/menu_top/menutop.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n #loichao ul{\r\n    display: none;\r\n    position: absolute;\r\n    z-index: 19999;\r\n    left: -100px;\r\n    background:  rgb(44, 132, 204) ;\r\n    top: 40px;\r\n    width: 100%;\r\n }\r\n #loichao ul li{\r\n    width: 100%;\r\n }\r\n #loichao{\r\n    position: relative;\r\n }\r\n #loichao:hover ul{\r\n    display: block;\r\n }\r\n .anthe{\r\n     display: none;\r\n }\r\n</style>\r\n<div id=\"top-nav\" class=\"hidden-xs\">\r\n    <div class=\"container\">\r\n        <ul class=\"clearfix\">\r\n            <div *ngFor=\"let menu of ds_menu\">\r\n                    <li  *ngIf=\"loichao!='' && menu.id_menu!=4 && menu.id_menu!=5\" >\r\n                            <a [routerLink] = \"menu.url_menu\"  id=\"{{menu.id_menu}}\"><i class=\"{{menu.icon_menu}}\" aria-hidden=\"true\" style=\"font-size: 20px\"></i>&ensp;{{menu.name_menu}}</a>\r\n                    </li>\r\n                    <li  *ngIf=\"loichao==''\" >\r\n                            <a [routerLink] = \"menu.url_menu\"  id=\"{{menu.id_menu}}\"><i class=\"{{menu.icon_menu}}\" aria-hidden=\"true\" style=\"font-size: 20px\"></i>&ensp;{{menu.name_menu}}</a>\r\n                    </li>\r\n            </div>\r\n           \r\n            <li *ngIf=\"loichao!=''\" id=\"loichao\" style=\"color: aliceblue;text-transform: uppercase;\">\r\n                    {{loichao}}\r\n\r\n                <ul >\r\n                    <div *ngIf=\"role==1; else nguoclai\">\r\n                        <li style=\"color: aliceblue; text-transform: uppercase;\">\r\n                            <a [routerLink] = \"['/thongtindatve_admin']\">Thông tin đặt vé</a>\r\n                        </li>\r\n                        <li style=\"color: aliceblue; text-transform: uppercase;\">\r\n                            <a [routerLink]=\"['/dangky']\">Đăng kí</a>\r\n                        </li>\r\n                    </div> \r\n                    <ng-template #nguoclai>\r\n                            <li style=\"color: aliceblue; text-transform: uppercase;\">\r\n                                <a [routerLink] = \"['/thongtindatve_customer']\">Thông tin đặt vé</a>\r\n                            </li>\r\n                    </ng-template>\r\n                   <li style=\"color: aliceblue; text-transform: uppercase;\" (click)=\"dangXuat()\">Đăng xuất</li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        \r\n    </div>\r\n</div>\r\n<div class=\"sb-slidebar sb-left\">\r\n\r\n    <ul>\r\n            <li *ngFor=\"let menu of ds_menu\" >\r\n            <a [routerLink] = \"menu.url_menu\" id=\"{{menu.id_menu}}\">\r\n               {{menu.name_menu}}</a>\r\n            </li>\r\n    </ul>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Widget/W_menu/menu_top/menutop.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Widget/W_menu/menu_top/menutop.component.ts ***!
  \*************************************************************/
/*! exports provided: MENUTOP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUTOP", function() { return MENUTOP; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_mock_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/mock_menu */ "./src/app/model/mock_menu.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MENUTOP = /** @class */ (function () {
    function MENUTOP(route, router) {
        this.route = route;
        this.router = router;
        this.loichao = '';
        this.ds_menu = _model_mock_menu__WEBPACK_IMPORTED_MODULE_1__["ds_menu"];
        this.hienform = true;
        if (sessionStorage.getItem("hoten") != null) {
            this.loichao = "Chào," + sessionStorage.getItem("hoten");
            this.role = Number.parseInt(sessionStorage.getItem("role"));
        }
    }
    MENUTOP.prototype.ngOnInit = function () {
    };
    MENUTOP.prototype.dangXuat = function () {
        sessionStorage.removeItem("hoten");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("sodienthoai");
        console.log(sessionStorage.getItem("role"));
        this.loichao = '';
        $("#soluong").click();
        this.router.navigate(['/home']);
    };
    MENUTOP = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu_top',
            template: __webpack_require__(/*! ./menutop.component.html */ "./src/app/Widget/W_menu/menu_top/menutop.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MENUTOP);
    return MENUTOP;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'doancongnghemoi';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Widget_W_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widget/W_menu/menu.component */ "./src/app/Widget/W_menu/menu.component.ts");
/* harmony import */ var _Pages_p_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/p_trangchu/trangchu.component */ "./src/app/Pages/p_trangchu/trangchu.component.ts");
/* harmony import */ var _Widget_W_menu_menu_top_menutop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Widget/W_menu/menu_top/menutop.component */ "./src/app/Widget/W_menu/menu_top/menutop.component.ts");
/* harmony import */ var _Widget_W_menu_menu_bottom_menubottom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Widget/W_menu/menu_bottom/menubottom.component */ "./src/app/Widget/W_menu/menu_bottom/menubottom.component.ts");
/* harmony import */ var _Widget_W_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Widget/W_footer/footer.component */ "./src/app/Widget/W_footer/footer.component.ts");
/* harmony import */ var _Modules_m_modalcontent_m_modalcontent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/m_modalcontent/m_modalcontent.component */ "./src/app/Modules/m_modalcontent/m_modalcontent.component.ts");
/* harmony import */ var _Pages_p_dieu_khoan_p_dieukhoan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/p_dieu_khoan/p_dieukhoan.component */ "./src/app/Pages/p_dieu_khoan/p_dieukhoan.component.ts");
/* harmony import */ var _Pages_p_khuyenmai_p_khuyenmai_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pages/p_khuyenmai/p_khuyenmai.component */ "./src/app/Pages/p_khuyenmai/p_khuyenmai.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _Pages_p_huongdan_p_huongdan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Pages/p_huongdan/p_huongdan.component */ "./src/app/Pages/p_huongdan/p_huongdan.component.ts");
/* harmony import */ var _Pages_p_lienhe_p_lienhe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Pages/p_lienhe/p_lienhe.component */ "./src/app/Pages/p_lienhe/p_lienhe.component.ts");
/* harmony import */ var _Pages_p_lichtrinh_p_lichtrinh_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Pages/p_lichtrinh/p_lichtrinh.component */ "./src/app/Pages/p_lichtrinh/p_lichtrinh.component.ts");
/* harmony import */ var _Pages_p_lichtrinh_tuyenduong_tuyenduong_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Pages/p_lichtrinh/tuyenduong/tuyenduong.component */ "./src/app/Pages/p_lichtrinh/tuyenduong/tuyenduong.component.ts");
/* harmony import */ var _Pages_p_lichtrinh_chitiettuyenduong_chitiettuyenduong_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Pages/p_lichtrinh/chitiettuyenduong/chitiettuyenduong.component */ "./src/app/Pages/p_lichtrinh/chitiettuyenduong/chitiettuyenduong.component.ts");
/* harmony import */ var _Pages_p_trangchu_p_khoihanhtp_p_khoihanhtp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Pages/p_trangchu/p_khoihanhtp/p_khoihanhtp.component */ "./src/app/Pages/p_trangchu/p_khoihanhtp/p_khoihanhtp.component.ts");
/* harmony import */ var _Pages_p_lienhe_p_formLH_p_formLH_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Pages/p_lienhe/p_formLH/p_formLH.component */ "./src/app/Pages/p_lienhe/p_formLH/p_formLH.component.ts");
/* harmony import */ var _Pages_p_lienhe_p_chinhanh_p_chinhanh_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Pages/p_lienhe/p_chinhanh/p_chinhanh.component */ "./src/app/Pages/p_lienhe/p_chinhanh/p_chinhanh.component.ts");
/* harmony import */ var _Pages_p_dangnhap_p_dangnhap_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Pages/p_dangnhap/p_dangnhap.component */ "./src/app/Pages/p_dangnhap/p_dangnhap.component.ts");
/* harmony import */ var _Pages_p_dangky_p_dangky_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Pages/p_dangky/p_dangky.component */ "./src/app/Pages/p_dangky/p_dangky.component.ts");
/* harmony import */ var _Modules_m_datve_m_datve__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Modules/m_datve/m_datve */ "./src/app/Modules/m_datve/m_datve.ts");
/* harmony import */ var _Pages_p_gioithieu_p_gioithieu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Pages/p_gioithieu/p_gioithieu.component */ "./src/app/Pages/p_gioithieu/p_gioithieu.component.ts");
/* harmony import */ var _Modules_m_gioithieunews_m_gioithieunews_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Modules/m_gioithieunews/m_gioithieunews.component */ "./src/app/Modules/m_gioithieunews/m_gioithieunews.component.ts");
/* harmony import */ var _Pages_p_chitietlichtrinh_p_chitietlichtrinh_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Pages/p_chitietlichtrinh/p_chitietlichtrinh.component */ "./src/app/Pages/p_chitietlichtrinh/p_chitietlichtrinh.component.ts");
/* harmony import */ var _service_chinhanh_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/chinhanh.service */ "./src/app/service/chinhanh.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _validators_retype_pass__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./validators/retype_pass */ "./src/app/validators/retype_pass.ts");
/* harmony import */ var _Modules_m_chitietdatve_m_chitietdatve__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Modules/m_chitietdatve/m_chitietdatve */ "./src/app/Modules/m_chitietdatve/m_chitietdatve.ts");
/* harmony import */ var _Modules_m_slider_m_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Modules/m_slider/m_slider */ "./src/app/Modules/m_slider/m_slider.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _Modules_m_bando_m_bando__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Modules/m_bando/m_bando */ "./src/app/Modules/m_bando/m_bando.ts");
/* harmony import */ var _Modules_m_huyve_m_huyve_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Modules/m_huyve/m_huyve.component */ "./src/app/Modules/m_huyve/m_huyve.component.ts");
/* harmony import */ var _Pages_p_thongtindatve_p_thongtindatve_admin_p_thongtindatve_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Pages/p_thongtindatve/p_thongtindatve_admin/p_thongtindatve.component */ "./src/app/Pages/p_thongtindatve/p_thongtindatve_admin/p_thongtindatve.component.ts");
/* harmony import */ var _Pages_p_thongtindatve_p_thongtindatve_KH_p_thongtindatve_KH_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Pages/p_thongtindatve/p_thongtindatve_KH/p_thongtindatve_KH.component */ "./src/app/Pages/p_thongtindatve/p_thongtindatve_KH/p_thongtindatve_KH.component.ts");
/* harmony import */ var _service_tuyenduong_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./service/tuyenduong.service */ "./src/app/service/tuyenduong.service.ts");
/* harmony import */ var _service_chitietdatve_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./service/chitietdatve.service */ "./src/app/service/chitietdatve.service.ts");
/* harmony import */ var _service_thanhpholon_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./service/thanhpholon.service */ "./src/app/service/thanhpholon.service.ts");
/* harmony import */ var _Pages_p_error_p_error_phanquyen_p_error_phanquyen_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Pages/p_error/p_error_phanquyen/p_error_phanquyen.component */ "./src/app/Pages/p_error/p_error_phanquyen/p_error_phanquyen.component.ts");
/* harmony import */ var _Pages_p_error_p_error_dangnhap_p_error_dangnhap_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Pages/p_error/p_error_dangnhap/p_error_dangnhap.component */ "./src/app/Pages/p_error/p_error_dangnhap/p_error_dangnhap.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































//google API Maps










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _Pages_p_dangnhap_p_dangnhap_component__WEBPACK_IMPORTED_MODULE_21__["DANGNHAP"], _Pages_p_dangky_p_dangky_component__WEBPACK_IMPORTED_MODULE_22__["DANGKY"],
                _Modules_m_modalcontent_m_modalcontent_component__WEBPACK_IMPORTED_MODULE_8__["MODALCONTENT"],
                _Pages_p_dieu_khoan_p_dieukhoan_component__WEBPACK_IMPORTED_MODULE_9__["DIEUKHOAN"],
                _Pages_p_khuyenmai_p_khuyenmai_component__WEBPACK_IMPORTED_MODULE_10__["KHUYENMAI"],
                _Pages_p_lienhe_p_lienhe_component__WEBPACK_IMPORTED_MODULE_14__["LIENHE"], _Pages_p_lienhe_p_formLH_p_formLH_component__WEBPACK_IMPORTED_MODULE_19__["FORMLH"], _Pages_p_lienhe_p_chinhanh_p_chinhanh_component__WEBPACK_IMPORTED_MODULE_20__["CHINHANH"],
                _Pages_p_lichtrinh_p_lichtrinh_component__WEBPACK_IMPORTED_MODULE_15__["LICHTRINH"], _Pages_p_lichtrinh_tuyenduong_tuyenduong_component__WEBPACK_IMPORTED_MODULE_16__["TUYENDUONG"], _Pages_p_lichtrinh_chitiettuyenduong_chitiettuyenduong_component__WEBPACK_IMPORTED_MODULE_17__["CHITIETTUYENDUONG"], _Pages_p_chitietlichtrinh_p_chitietlichtrinh_component__WEBPACK_IMPORTED_MODULE_26__["CHITIETLICHTRINH"],
                _Pages_p_huongdan_p_huongdan_component__WEBPACK_IMPORTED_MODULE_13__["HUONGDAN"],
                _Widget_W_menu_menu_top_menutop_component__WEBPACK_IMPORTED_MODULE_5__["MENUTOP"], _Widget_W_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MENU"], _Widget_W_menu_menu_bottom_menubottom_component__WEBPACK_IMPORTED_MODULE_6__["MENUBOTTOM"], _Widget_W_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FOOTER"],
                _Pages_p_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_4__["TRANGCHU"], _Pages_p_trangchu_p_khoihanhtp_p_khoihanhtp_component__WEBPACK_IMPORTED_MODULE_18__["KHOIHANHTP"],
                _Modules_m_datve_m_datve__WEBPACK_IMPORTED_MODULE_23__["DATVE"], _Pages_p_gioithieu_p_gioithieu_component__WEBPACK_IMPORTED_MODULE_24__["GIOITHIEU"], _Modules_m_gioithieunews_m_gioithieunews_component__WEBPACK_IMPORTED_MODULE_25__["GIOITHIEUNEWS"], _validators_retype_pass__WEBPACK_IMPORTED_MODULE_31__["EqualValidator"],
                _Modules_m_chitietdatve_m_chitietdatve__WEBPACK_IMPORTED_MODULE_32__["CHITIETDATVE"], _Modules_m_bando_m_bando__WEBPACK_IMPORTED_MODULE_35__["M_BANDO"], _Pages_p_thongtindatve_p_thongtindatve_admin_p_thongtindatve_component__WEBPACK_IMPORTED_MODULE_37__["THONGTINDATVE"], _Pages_p_thongtindatve_p_thongtindatve_KH_p_thongtindatve_KH_component__WEBPACK_IMPORTED_MODULE_38__["THONGTINDATVEKHACHHANG"],
                _Modules_m_slider_m_slider__WEBPACK_IMPORTED_MODULE_33__["M_SLIDER"], _Modules_m_huyve_m_huyve_component__WEBPACK_IMPORTED_MODULE_36__["M_HUYVE"], _Pages_p_error_p_error_phanquyen_p_error_phanquyen_component__WEBPACK_IMPORTED_MODULE_42__["LOIPHANQUYEN"], _Pages_p_error_p_error_dangnhap_p_error_dangnhap_component__WEBPACK_IMPORTED_MODULE_43__["LOIDANGNHAP"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"], _angular_http__WEBPACK_IMPORTED_MODULE_28__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_34__["AgmCoreModule"].forRoot({
                    //apiKey: "AIzaSyDNAWxkm-ZX2WzwospTVDmeXXhRw08qWSk",
                    apiKey: "AIzaSyDNAWxkm-ZX2WzwospTVDmeXXhRw08qWSk",
                    libraries: ["places"]
                })
            ],
            providers: [_service_chinhanh_service__WEBPACK_IMPORTED_MODULE_27__["ChiNhanhService"], _service_user_service__WEBPACK_IMPORTED_MODULE_30__["USERService"], _service_tuyenduong_service__WEBPACK_IMPORTED_MODULE_39__["TuyenDuongService"], _service_chitietdatve_service__WEBPACK_IMPORTED_MODULE_40__["ChiTietDatVeService"], _service_thanhpholon_service__WEBPACK_IMPORTED_MODULE_41__["ThanhPhoLonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Pages_p_dieu_khoan_p_dieukhoan_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/p_dieu_khoan/p_dieukhoan.component */ "./src/app/Pages/p_dieu_khoan/p_dieukhoan.component.ts");
/* harmony import */ var _Pages_p_khuyenmai_p_khuyenmai_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/p_khuyenmai/p_khuyenmai.component */ "./src/app/Pages/p_khuyenmai/p_khuyenmai.component.ts");
/* harmony import */ var _Pages_p_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/p_trangchu/trangchu.component */ "./src/app/Pages/p_trangchu/trangchu.component.ts");
/* harmony import */ var _Pages_p_huongdan_p_huongdan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/p_huongdan/p_huongdan.component */ "./src/app/Pages/p_huongdan/p_huongdan.component.ts");
/* harmony import */ var _Pages_p_lienhe_p_lienhe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/p_lienhe/p_lienhe.component */ "./src/app/Pages/p_lienhe/p_lienhe.component.ts");
/* harmony import */ var _Pages_p_lichtrinh_p_lichtrinh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/p_lichtrinh/p_lichtrinh.component */ "./src/app/Pages/p_lichtrinh/p_lichtrinh.component.ts");
/* harmony import */ var _Pages_p_dangnhap_p_dangnhap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pages/p_dangnhap/p_dangnhap.component */ "./src/app/Pages/p_dangnhap/p_dangnhap.component.ts");
/* harmony import */ var _Pages_p_dangky_p_dangky_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pages/p_dangky/p_dangky.component */ "./src/app/Pages/p_dangky/p_dangky.component.ts");
/* harmony import */ var _Pages_p_gioithieu_p_gioithieu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/p_gioithieu/p_gioithieu.component */ "./src/app/Pages/p_gioithieu/p_gioithieu.component.ts");
/* harmony import */ var _Pages_p_chitietlichtrinh_p_chitietlichtrinh_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pages/p_chitietlichtrinh/p_chitietlichtrinh.component */ "./src/app/Pages/p_chitietlichtrinh/p_chitietlichtrinh.component.ts");
/* harmony import */ var _Pages_p_thongtindatve_p_thongtindatve_admin_p_thongtindatve_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Pages/p_thongtindatve/p_thongtindatve_admin/p_thongtindatve.component */ "./src/app/Pages/p_thongtindatve/p_thongtindatve_admin/p_thongtindatve.component.ts");
/* harmony import */ var _Pages_p_thongtindatve_p_thongtindatve_KH_p_thongtindatve_KH_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Pages/p_thongtindatve/p_thongtindatve_KH/p_thongtindatve_KH.component */ "./src/app/Pages/p_thongtindatve/p_thongtindatve_KH/p_thongtindatve_KH.component.ts");













var routes = [
    { path: '', component: _Pages_p_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_3__["TRANGCHU"] },
    { path: 'home', component: _Pages_p_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_3__["TRANGCHU"] },
    { path: 'khuyenmai', component: _Pages_p_khuyenmai_p_khuyenmai_component__WEBPACK_IMPORTED_MODULE_2__["KHUYENMAI"] },
    { path: 'dieukhoan', component: _Pages_p_dieu_khoan_p_dieukhoan_component__WEBPACK_IMPORTED_MODULE_1__["DIEUKHOAN"] },
    { path: 'huongdan', component: _Pages_p_huongdan_p_huongdan_component__WEBPACK_IMPORTED_MODULE_4__["HUONGDAN"] },
    { path: 'lienhe', component: _Pages_p_lienhe_p_lienhe_component__WEBPACK_IMPORTED_MODULE_5__["LIENHE"] },
    { path: 'lichtrinh', component: _Pages_p_lichtrinh_p_lichtrinh_component__WEBPACK_IMPORTED_MODULE_6__["LICHTRINH"] },
    { path: 'dangnhap', component: _Pages_p_dangnhap_p_dangnhap_component__WEBPACK_IMPORTED_MODULE_7__["DANGNHAP"] },
    { path: 'dangky', component: _Pages_p_dangky_p_dangky_component__WEBPACK_IMPORTED_MODULE_8__["DANGKY"] },
    { path: 'gioithieu', component: _Pages_p_gioithieu_p_gioithieu_component__WEBPACK_IMPORTED_MODULE_9__["GIOITHIEU"] },
    { path: 'chitietlichtrinh/:g/:c', component: _Pages_p_chitietlichtrinh_p_chitietlichtrinh_component__WEBPACK_IMPORTED_MODULE_10__["CHITIETLICHTRINH"] },
    { path: 'thongtindatve_admin', component: _Pages_p_thongtindatve_p_thongtindatve_admin_p_thongtindatve_component__WEBPACK_IMPORTED_MODULE_11__["THONGTINDATVE"] },
    { path: 'thongtindatve_customer', component: _Pages_p_thongtindatve_p_thongtindatve_KH_p_thongtindatve_KH_component__WEBPACK_IMPORTED_MODULE_12__["THONGTINDATVEKHACHHANG"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
;


/***/ }),

/***/ "./src/app/model/chinhanh.ts":
/*!***********************************!*\
  !*** ./src/app/model/chinhanh.ts ***!
  \***********************************/
/*! exports provided: ChiNhanh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiNhanh", function() { return ChiNhanh; });
var ChiNhanh = /** @class */ (function () {
    function ChiNhanh(id_chinhanh, name_chinhanh, diachi_chinhanh, sdt_chinhanh, kinhdo_chinhanh, vido_chinhanh, mien_chinhanh) {
        this.id_chinhanh = id_chinhanh;
        this.name_chinhanh = name_chinhanh;
        this.diachi_chinhanh = diachi_chinhanh;
        this.sdt_chinhanh = sdt_chinhanh;
        this.kinhdo_chinhanh = kinhdo_chinhanh;
        this.vido_chinhanh = vido_chinhanh;
        this.mien_chinhanh = mien_chinhanh;
    }
    return ChiNhanh;
}());



/***/ }),

/***/ "./src/app/model/chitietdatve.ts":
/*!***************************************!*\
  !*** ./src/app/model/chitietdatve.ts ***!
  \***************************************/
/*! exports provided: CHITIETDATVEXE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHITIETDATVEXE", function() { return CHITIETDATVEXE; });
var CHITIETDATVEXE = /** @class */ (function () {
    function CHITIETDATVEXE(idchuyenxe, diemdi, diemden, ngaydi, soluong, giodi, soghe, sodienthoai, idchitietdatve, trangthai) {
        this.idchuyenxe = idchuyenxe;
        this.diemdi = diemdi;
        this.diemden = diemden;
        this.ngaydi = ngaydi;
        this.soluong = soluong;
        this.soghe = soghe;
        this.giodi = giodi;
        this.sodienthoai = sodienthoai;
        this.idchitietdatve = idchitietdatve;
        this.trangthai = trangthai;
    }
    return CHITIETDATVEXE;
}());



/***/ }),

/***/ "./src/app/model/chitiettuyenduong.ts":
/*!********************************************!*\
  !*** ./src/app/model/chitiettuyenduong.ts ***!
  \********************************************/
/*! exports provided: ChiTietTuyenDuong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietTuyenDuong", function() { return ChiTietTuyenDuong; });
var ChiTietTuyenDuong = /** @class */ (function () {
    function ChiTietTuyenDuong(diemdi, diemden, thoigiandi, thoigianden, hotlinedi, hotlineden, diachidi, diachiden) {
        this.diemdi = diemdi;
        this.diemden = diemden;
        this.thoigiandi = thoigiandi;
        this.thoigianden = thoigianden;
        this.hotlinedi = hotlinedi;
        this.hotlineden = hotlineden;
        this.diachidi = diachidi;
        this.diachiden = diachiden;
    }
    return ChiTietTuyenDuong;
}());



/***/ }),

/***/ "./src/app/model/dangki.ts":
/*!*********************************!*\
  !*** ./src/app/model/dangki.ts ***!
  \*********************************/
/*! exports provided: OBJECTDANGKI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECTDANGKI", function() { return OBJECTDANGKI; });
var OBJECTDANGKI = /** @class */ (function () {
    function OBJECTDANGKI(hoten, email, matkhau, sodienthoai, chungminhnhandan, role) {
        this.email = email;
        this.matkhau = matkhau;
        this.hoten = hoten;
        this.sodienthoai = sodienthoai;
        this.chungminhnhandan = chungminhnhandan;
        this.role = role;
    }
    return OBJECTDANGKI;
}());



/***/ }),

/***/ "./src/app/model/diadiemthanhpholon.ts":
/*!*********************************************!*\
  !*** ./src/app/model/diadiemthanhpholon.ts ***!
  \*********************************************/
/*! exports provided: Diadiemthanhpholon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diadiemthanhpholon", function() { return Diadiemthanhpholon; });
var Diadiemthanhpholon = /** @class */ (function () {
    function Diadiemthanhpholon(id_diadiem, ten_diadiem, sodienthoai_diadiem, kinhdo, vido, diemden_diadiem, hinh_diadiem) {
        this.id_diadiem = id_diadiem;
        this.ten_diadiem = ten_diadiem;
        this.sodienthoai_diadiem = sodienthoai_diadiem;
        this.kinhdo = kinhdo;
        this.vido = vido;
        this.diemden_diadiem = diemden_diadiem;
        this.hinh_diadiem = hinh_diadiem;
    }
    return Diadiemthanhpholon;
}());



/***/ }),

/***/ "./src/app/model/lienhe.ts":
/*!*********************************!*\
  !*** ./src/app/model/lienhe.ts ***!
  \*********************************/
/*! exports provided: M_LienHe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M_LienHe", function() { return M_LienHe; });
var M_LienHe = /** @class */ (function () {
    function M_LienHe(ten, sodienthoai, email, tieude, noidung) {
        this.ten = ten;
        this.sodienthoai = sodienthoai;
        this.email = email;
        this.tieude = tieude;
        this.noidung = noidung;
    }
    return M_LienHe;
}());



/***/ }),

/***/ "./src/app/model/mock_dsghe.ts":
/*!*************************************!*\
  !*** ./src/app/model/mock_dsghe.ts ***!
  \*************************************/
/*! exports provided: ds_ghe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ds_ghe", function() { return ds_ghe; });
var ds_ghe = [
    { "tenghe": "A01", "trangthai": 0 }, { "tenghe": "A02", "trangthai": 0 }, { "tenghe": "B01", "trangthai": 0 },
    { "tenghe": "B02", "trangthai": 0 }, { "tenghe": "C01", "trangthai": 0 }, { "tenghe": "C02", "trangthai": 0 },
    { "tenghe": "A03", "trangthai": 0 }, { "tenghe": "A04", "trangthai": 0 }, { "tenghe": "B03", "trangthai": 0 },
    { "tenghe": "B04", "trangthai": 0 }, { "tenghe": "C03", "trangthai": 0 }, { "tenghe": "C04", "trangthai": 0 },
    { "tenghe": "A05", "trangthai": 0 }, { "tenghe": "A06", "trangthai": 0 }, { "tenghe": "B05", "trangthai": 0 },
    { "tenghe": "B06", "trangthai": 0 }, { "tenghe": "C05", "trangthai": 0 }, { "tenghe": "C06", "trangthai": 0 },
    { "tenghe": "A07", "trangthai": 0 }, { "tenghe": "A08", "trangthai": 0 }, { "tenghe": "B07", "trangthai": 0 },
    { "tenghe": "B08", "trangthai": 0 }, { "tenghe": "C07", "trangthai": 0 }, { "tenghe": "C08", "trangthai": 0 },
    { "tenghe": "A09", "trangthai": 0 }, { "tenghe": "A10", "trangthai": 0 }, { "tenghe": "B09", "trangthai": 0 },
    { "tenghe": "B10", "trangthai": 0 }, { "tenghe": "C09", "trangthai": 0 }, { "tenghe": "C10", "trangthai": 0 },
    { "tenghe": "A11", "trangthai": 0 }, { "tenghe": "A12", "trangthai": 0 }, { "tenghe": "B11", "trangthai": 0 },
    { "tenghe": "B12", "trangthai": 0 }, { "tenghe": "C11", "trangthai": 0 }, { "tenghe": "C12", "trangthai": 0 },
    { "tenghe": "A13", "trangthai": 0 }, { "tenghe": "A14", "trangthai": 0 }, { "tenghe": "B13", "trangthai": 0 },
    { "tenghe": "B14", "trangthai": 0 }, { "tenghe": "C13", "trangthai": 0 }, { "tenghe": "C14", "trangthai": 0 },
    { "tenghe": "A15", "trangthai": 0 }, { "tenghe": "A16", "trangthai": 0 }, { "tenghe": "B15", "trangthai": 0 },
    { "tenghe": "B16", "trangthai": 0 }, { "tenghe": "C15", "trangthai": 0 }, { "tenghe": "C16", "trangthai": 0 },
    { "tenghe": "A17", "trangthai": 0 }, { "tenghe": "A18", "trangthai": 0 }, { "tenghe": "B17", "trangthai": 0 },
    { "tenghe": "B18", "trangthai": 0 }, { "tenghe": "C17", "trangthai": 0 }, { "tenghe": "C18", "trangthai": 0 },
    { "tenghe": "A19", "trangthai": 0 }, { "tenghe": "A20", "trangthai": 0 }, { "tenghe": "B19", "trangthai": 0 },
    { "tenghe": "B20", "trangthai": 0 }, { "tenghe": "C19", "trangthai": 0 }, { "tenghe": "C20", "trangthai": 0 }
];


/***/ }),

/***/ "./src/app/model/mock_menu.ts":
/*!************************************!*\
  !*** ./src/app/model/mock_menu.ts ***!
  \************************************/
/*! exports provided: ds_menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ds_menu", function() { return ds_menu; });
var ds_menu = [
    { id_menu: 1, name_menu: "TRANG CHỦ", icon_menu: "fa fa-home", url_menu: "/home", list_menu_child: [] },
    { id_menu: 2, name_menu: "LIÊN HỆ", icon_menu: "fa fa-phone-square", url_menu: "/lienhe", list_menu_child: [] },
    { id_menu: 3, name_menu: "LỊCH TRÌNH", icon_menu: "fa fa-list", url_menu: "/lichtrinh", list_menu_child: [] },
    { id_menu: 4, name_menu: "ĐĂNG NHẬP", icon_menu: "fa fa-user", url_menu: "/dangnhap", list_menu_child: [] },
    { id_menu: 5, name_menu: "ĐĂNG KÝ", icon_menu: "fa fa-user-plus", url_menu: "/dangky", list_menu_child: [] },
];


/***/ }),

/***/ "./src/app/model/mock_tuyenduong.ts":
/*!******************************************!*\
  !*** ./src/app/model/mock_tuyenduong.ts ***!
  \******************************************/
/*! exports provided: ds_tuyenduong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ds_tuyenduong", function() { return ds_tuyenduong; });
/* harmony import */ var _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chitiettuyenduong */ "./src/app/model/chitiettuyenduong.ts");

var ds_tuyenduong = [
    {
        "id_tuyenduong": 1, "name_tuyenduong": "Bạc Liêu", "bendi": "Bạc Liêu",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "5:00(Giường)",
        "OriginCode": "BACLIEU", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Sóc Trăng", "Bạc Liêu", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00", "08:00", "015644458", "024979411", "Trần Phú, P.7, TP.Bạc Liêu", "H.Cái Bè, Tiền Giang")
        ]
    },
    {
        "id_tuyenduong": 2, "name_tuyenduong": "Bạc Liêu", "bendi": "Bạc Liêu",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "9:00(Giường)",
        "OriginCode": "BACLIEU", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Sóc Trăng", "Bạc Liêu", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00", "08:00", "015644458", "024979411", "Trần Phú, P.7, TP.Bạc Liêu", "H.Cái Bè, Tiền Giang")
        ]
    },
    {
        "id_tuyenduong": 3, "name_tuyenduong": "Bạc Liêu", "bendi": "Bạc Liêu",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "12:00(Giường)",
        "OriginCode": "BACLIEU", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Sóc Trăng", "Bạc Liêu", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00", "08:00", "015644458", "024979411", "Trần Phú, P.7, TP.Bạc Liêu", "H.Cái Bè, Tiền Giang")
        ]
    },
    {
        "id_tuyenduong": 4, "name_tuyenduong": "Bạc Liêu", "bendi": "Bạc Liêu",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "15:00(Giường)",
        "OriginCode": "BACLIEU", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Sóc Trăng", "Bạc Liêu", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00", "08:00", "015644458", "024979411", "Trần Phú, P.7, TP.Bạc Liêu", "H.Cái Bè, Tiền Giang")
        ]
    },
    {
        "id_tuyenduong": 5, "name_tuyenduong": "Bạc Liêu", "bendi": "Bạc Liêu",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "18:00(Giường)",
        "OriginCode": "BACLIEU", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Sóc Trăng", "Bạc Liêu", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00", "08:00", "015644458", "024979411", "Trần Phú, P.7, TP.Bạc Liêu", "H.Cái Bè, Tiền Giang")
        ]
    },
    {
        "id_tuyenduong": 6, "name_tuyenduong": "Bạc Liêu", "bendi": "Bạc Liêu",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "21:00(Giường)",
        "OriginCode": "BACLIEU", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Sóc Trăng", "Bạc Liêu", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00", "08:00", "015644458", "024979411", "Trần Phú, P.7, TP.Bạc Liêu", "H.Cái Bè, Tiền Giang")
        ]
    },
    {
        "id_tuyenduong": 7, "name_tuyenduong": "Sóc Trăng", "bendi": "Sóc Trăng",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "4:00(Giường)",
        "OriginCode": "SOCTRANG", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu")
        ]
    },
    {
        "id_tuyenduong": 8, "name_tuyenduong": "Sóc Trăng", "bendi": "Sóc Trăng",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "7:00(Giường)",
        "OriginCode": "SOCTRANG", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu")
        ]
    },
    {
        "id_tuyenduong": 9, "name_tuyenduong": "Sóc Trăng", "bendi": "Sóc Trăng",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "11:00(Giường)",
        "OriginCode": "SOCTRANG", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu")
        ]
    },
    {
        "id_tuyenduong": 10, "name_tuyenduong": "Sóc Trăng", "bendi": "Sóc Trăng",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "14:00(Giường)",
        "OriginCode": "SOCTRANG", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu")
        ]
    },
    {
        "id_tuyenduong": 11, "name_tuyenduong": "Sóc Trăng", "bendi": "Sóc Trăng",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "17:00(Giường)",
        "OriginCode": "SOCTRANG", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu")
        ]
    },
    {
        "id_tuyenduong": 12, "name_tuyenduong": "Sóc Trăng", "bendi": "Sóc Trăng",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "272 km", "thoigian": "06:00",
        "sochuyen": "6 chuyến/ngày", "giave": "160000", "giochay": "20:00(Giường)",
        "OriginCode": "SOCTRANG", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bạc Liêu", "Trạm dừng chân Satra", "08:00", "08:00", "015644458", "024979411", "38 Lê Duẩn, P.3, TP.Sóc Trăng", "Trần Phú, P.7, TP.Bạc Liêu")
        ]
    },
    {
        "id_tuyenduong": 13, "name_tuyenduong": "Bảo Lộc", "bendi": "Bảo Lộc",
        "benden": "Đà Nẵng", "loaixe": "Giường", "quangduong": "756 km", "thoigian": "15:30",
        "sochuyen": "1 chuyến/ngày", "giave": "315000", "giochay": "9:30(Giường)",
        "OriginCode": "BAOLOC", "DestCode": "DANANG",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bảo Lộc", "Di Linh", "12:30", "13:30", "023364481", "022212214", "280 Trần Phú,P.2,TP.Bảo Lộc", "735 Hùng Vương,TT.Di Linh,Lâm Đồng"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Di Linh", "Đức Trọng", "13:30", "14:10", "022212214", "012312366", "735 Hùng Vương,TT.Di Linh,Lâm Đồng", "Liên Nghĩa, Đức Trọng, Lâm Đồng"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Đức Trọng", "Cam Ranh", "14:10", "17:30", "012312366", "012312311", "Liên Nghĩa, Đức Trọng, Lâm Đồng", "Lê Duẩn, TP.Cam Ranh, T.Khánh Hòa"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Cam Ranh", "Qui Nhơn", "17:30", "22:30", "012312311", "02.1221.111", "Lê Duẩn, TP.Cam Ranh, T.Khánh Hòa", "187 Tây Sơn, TP.Qui Nhơn"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Qui Nhơn", "Quãng Ngãi", "22:30", "02:30", "02.1221.111", "02.3311.111", "187 Tây Sơn, TP.Qui Nhơn", "26 Lê Thánh Tôn, Nghĩa Chánh, Quãng Ngãi"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Quãng Ngãi", "Đà Nẵng", "02:30", "06:30", "02.3311.111", "02.3377.111", "26 Lê Thánh Tôn, Nghĩa Chánh, Quãng Ngãi", "202 Tôn Đức Thắng, Liên Chiểu, TP.Đà Nẵng")
        ]
    },
    {
        "id_tuyenduong": 14, "name_tuyenduong": "Bảo Lộc", "bendi": "Bảo Lộc",
        "benden": "Huế", "loaixe": "Giường", "quangduong": "828 km", "thoigian": "19:00",
        "sochuyen": "1 chuyến/ngày", "giave": "380000", "giochay": "10:30(Giường)",
        "OriginCode": "BAOLOC", "DestCode": "HUE",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bảo Lộc", "Di Linh", "12:30", "13:30", "023364481", "022212214", "280 Trần Phú,P.2,TP.Bảo Lộc", "735 Hùng Vương,TT.Di Linh,Lâm Đồng"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Di Linh", "Đức Trọng", "13:30", "14:10", "022212214", "012312366", "735 Hùng Vương,TT.Di Linh,Lâm Đồng", "Liên Nghĩa, Đức Trọng, Lâm Đồng"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Đức Trọng", "Cam Ranh", "14:10", "17:30", "012312366", "012312311", "Liên Nghĩa, Đức Trọng, Lâm Đồng", "Lê Duẩn, TP.Cam Ranh, T.Khánh Hòa"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Cam Ranh", "Qui Nhơn", "17:30", "22:30", "012312311", "02.1221.111", "Lê Duẩn, TP.Cam Ranh, T.Khánh Hòa", "187 Tây Sơn, TP.Qui Nhơn"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Qui Nhơn", "Quãng Ngãi", "22:30", "02:30", "02.1221.111", "02.3311.111", "187 Tây Sơn, TP.Qui Nhơn", "26 Lê Thánh Tôn, Nghĩa Chánh, Quãng Ngãi"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Quãng Ngãi", "Đà Nẵng", "02:30", "06:30", "02.3311.111", "02.3377.111", "26 Lê Thánh Tôn, Nghĩa Chánh, Quãng Ngãi", "202 Tôn Đức Thắng, Liên Chiểu, TP.Đà Nẵng"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Đà Nẵng", "Huế", "06:30", "07:00", "02.3377.111", "02.2255.111", "202 Tôn Đức Thắng, Liên Chiểu, TP.Đà Nẵng", "97 An Dương Vương,TP.Huế,T.Thừa Thiên Huế")
        ]
    },
    {
        "id_tuyenduong": 15, "name_tuyenduong": "Bến Tre", "bendi": "Bến Tre",
        "benden": "Sài Gòn", "loaixe": "Ghế", "quangduong": "75 km", "thoigian": "02:00",
        "sochuyen": "4 chuyến/ngày", "giave": "70000", "giochay": "7:00(Ghế)",
        "OriginCode": "BENTRE", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến Tre", "Mỹ Tho", "04:00", "04:00", "023364481", "022212214", "Sơn Đông, TP.Bến Tre", "209 Ấp Bắc, P.5, TP.Bến Tre"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Mỹ Tho", "Bến xe Miền Tây", "04:00", "05:15", "022212214", "02.41141.11", "209 Ấp Bắc, P.5, TP.Bến Tre", "309 Kinh Dương Vương,Q.Bình Tân,TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 16, "name_tuyenduong": "Bến Tre", "bendi": "Bến Tre",
        "benden": "Sài Gòn", "loaixe": "Ghế", "quangduong": "75 km", "thoigian": "02:00",
        "sochuyen": "4 chuyến/ngày", "giave": "70000", "giochay": "10:00(Ghế)",
        "OriginCode": "BENTRE", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến Tre", "Mỹ Tho", "04:00", "04:00", "023364481", "022212214", "Sơn Đông, TP.Bến Tre", "209 Ấp Bắc, P.5, TP.Bến Tre"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Mỹ Tho", "Bến xe Miền Tây", "04:00", "05:15", "022212214", "02.41141.11", "209 Ấp Bắc, P.5, TP.Bến Tre", "309 Kinh Dương Vương,Q.Bình Tân,TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 17, "name_tuyenduong": "Bến Tre", "bendi": "Bến Tre",
        "benden": "Sài Gòn", "loaixe": "Ghế", "quangduong": "75 km", "thoigian": "02:00",
        "sochuyen": "4 chuyến/ngày", "giave": "70000", "giochay": "13:00(Ghế)",
        "OriginCode": "BENTRE", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến Tre", "Mỹ Tho", "04:00", "04:00", "023364481", "022212214", "Sơn Đông, TP.Bến Tre", "209 Ấp Bắc, P.5, TP.Bến Tre"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Mỹ Tho", "Bến xe Miền Tây", "04:00", "05:15", "022212214", "02.41141.11", "209 Ấp Bắc, P.5, TP.Bến Tre", "309 Kinh Dương Vương,Q.Bình Tân,TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 18, "name_tuyenduong": "Bến Tre", "bendi": "Bến Tre",
        "benden": "Sài Gòn", "loaixe": "Ghế", "quangduong": "75 km", "thoigian": "02:00",
        "sochuyen": "4 chuyến/ngày", "giave": "70000", "giochay": "18:00(Ghế)",
        "OriginCode": "BENTRE", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến Tre", "Mỹ Tho", "04:00", "04:00", "023364481", "022212214", "Sơn Đông, TP.Bến Tre", "209 Ấp Bắc, P.5, TP.Bến Tre"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Mỹ Tho", "Bến xe Miền Tây", "04:00", "05:15", "022212214", "02.41141.11", "209 Ấp Bắc, P.5, TP.Bến Tre", "309 Kinh Dương Vương,Q.Bình Tân,TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 19, "name_tuyenduong": "Bến Tre", "bendi": "Bến Tre",
        "benden": "Sài Gòn", "loaixe": "Ghế", "quangduong": "75 km", "thoigian": "02:00",
        "sochuyen": "4 chuyến/ngày", "giave": "70000", "giochay": "22:00(Ghế)",
        "OriginCode": "BENTRE", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến Tre", "Mỹ Tho", "04:00", "04:00", "023364481", "022212214", "Sơn Đông, TP.Bến Tre", "209 Ấp Bắc, P.5, TP.Bến Tre"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Mỹ Tho", "Bến xe Miền Tây", "04:00", "05:15", "022212214", "02.41141.11", "209 Ấp Bắc, P.5, TP.Bến Tre", "309 Kinh Dương Vương,Q.Bình Tân,TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 20, "name_tuyenduong": "Buôn Mê Thuột", "bendi": "Buôn Mê Thuột",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "435 km", "thoigian": "09:00",
        "sochuyen": "5 chuyến/ngày", "giave": "240000", "giochay": "5:00(Giường)",
        "OriginCode": "BUONMETHUOT", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Miền Đông", "Dak Lak", "12:15", "12:15", "02.111.441", "022212214", "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Dak Lak", "Dak Nong", "12:15", "15:15", "022212214", "02.41141.11", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", "Nghĩa Thành, Gia Nghĩa, Dak Nong")
        ]
    },
    {
        "id_tuyenduong": 21, "name_tuyenduong": "Buôn Mê Thuột", "bendi": "Buôn Mê Thuột",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "435 km", "thoigian": "09:00",
        "sochuyen": "5 chuyến/ngày", "giave": "240000", "giochay": "8:00(Giường)",
        "OriginCode": "BUONMETHUOT", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Miền Đông", "Dak Lak", "12:15", "12:15", "02.111.441", "022212214", "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Dak Lak", "Dak Nong", "12:15", "15:15", "022212214", "02.41141.11", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", "Nghĩa Thành, Gia Nghĩa, Dak Nong")
        ]
    },
    {
        "id_tuyenduong": 22, "name_tuyenduong": "Buôn Mê Thuột", "bendi": "Buôn Mê Thuột",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "435 km", "thoigian": "09:00",
        "sochuyen": "5 chuyến/ngày", "giave": "240000", "giochay": "11:00(Giường)",
        "OriginCode": "BUONMETHUOT", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Miền Đông", "Dak Lak", "12:15", "12:15", "02.111.441", "022212214", "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Dak Lak", "Dak Nong", "12:15", "15:15", "022212214", "02.41141.11", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", "Nghĩa Thành, Gia Nghĩa, Dak Nong")
        ]
    },
    {
        "id_tuyenduong": 23, "name_tuyenduong": "Buôn Mê Thuột", "bendi": "Buôn Mê Thuột",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "435 km", "thoigian": "09:00",
        "sochuyen": "5 chuyến/ngày", "giave": "240000", "giochay": "14:00(Giường)",
        "OriginCode": "BUONMETHUOT", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Miền Đông", "Dak Lak", "12:15", "12:15", "02.111.441", "022212214", "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Dak Lak", "Dak Nong", "12:15", "15:15", "022212214", "02.41141.11", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", "Nghĩa Thành, Gia Nghĩa, Dak Nong")
        ]
    },
    {
        "id_tuyenduong": 24, "name_tuyenduong": "Buôn Mê Thuột", "bendi": "Buôn Mê Thuột",
        "benden": "Sài Gòn", "loaixe": "Giường", "quangduong": "435 km", "thoigian": "09:00",
        "sochuyen": "5 chuyến/ngày", "giave": "240000", "giochay": "18:00(Giường)",
        "OriginCode": "BUONMETHUOT", "DestCode": "TPHCM",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Miền Đông", "Dak Lak", "12:15", "12:15", "02.111.441", "022212214", "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Dak Lak", "Dak Nong", "12:15", "15:15", "022212214", "02.41141.11", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", "Nghĩa Thành, Gia Nghĩa, Dak Nong")
        ]
    },
    {
        "id_tuyenduong": 25, "name_tuyenduong": "Buôn Mê Thuột", "bendi": "Buôn Mê Thuột",
        "benden": "Nha Trang", "loaixe": "Giường", "quangduong": "300 km", "thoigian": "04:00",
        "sochuyen": "1 chuyến/ngày", "giave": "140000", "giochay": "9:30(Giường)",
        "OriginCode": "BUONMETHUOT", "DestCode": "NHATRANG",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Miền Đông", "Dak Lak", "12:15", "12:15", "02.111.441", "022212214", "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Dak Lak", "Dak Nong", "12:15", "15:15", "022212214", "02.41141.11", "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", "Nghĩa Thành, Gia Nghĩa, Dak Nong")
        ]
    },
    {
        "id_tuyenduong": 26, "name_tuyenduong": "Sài Gòn", "bendi": "Sài Gòn",
        "benden": "Đà Lạt", "loaixe": "Giường", "quangduong": "320 km", "thoigian": "08:00",
        "sochuyen": "7 chuyến/ngày", "giave": "220000", "giochay": "5:00(Giường)",
        "OriginCode": "TPHCM", "DestCode": "DALAT",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00", "10:00", "02.111.441", "0.233122.12", "P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Nha Trang"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Nha Trang", "Bến xe An Sương", "10:00", "10:00", "0.233122.12", "02.41141.11", "127 Lê Duẩn,TP.Nha Trang", "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 27, "name_tuyenduong": "Sài Gòn", "bendi": "Sài Gòn",
        "benden": "Đà Lạt", "loaixe": "Giường", "quangduong": "320 km", "thoigian": "08:00",
        "sochuyen": "7 chuyến/ngày", "giave": "220000", "giochay": "8:00(Giường)",
        "OriginCode": "TPHCM", "DestCode": "DALAT",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00", "10:00", "02.111.441", "0.233122.12", "P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Nha Trang"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Nha Trang", "Bến xe An Sương", "10:00", "10:00", "0.233122.12", "02.41141.11", "127 Lê Duẩn,TP.Nha Trang", "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 28, "name_tuyenduong": "Sài Gòn", "bendi": "Sài Gòn",
        "benden": "Đà Lạt", "loaixe": "Giường", "quangduong": "320 km", "thoigian": "08:00",
        "sochuyen": "7 chuyến/ngày", "giave": "220000", "giochay": "11:00(Giường)",
        "OriginCode": "TPHCM", "DestCode": "DALAT",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00", "10:00", "02.111.441", "0.233122.12", "P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Nha Trang"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Nha Trang", "Bến xe An Sương", "10:00", "10:00", "0.233122.12", "02.41141.11", "127 Lê Duẩn,TP.Nha Trang", "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 29, "name_tuyenduong": "Sài Gòn", "bendi": "Sài Gòn",
        "benden": "Đà Lạt", "loaixe": "Giường", "quangduong": "320 km", "thoigian": "08:00",
        "sochuyen": "7 chuyến/ngày", "giave": "220000", "giochay": "14:00(Giường)",
        "OriginCode": "TPHCM", "DestCode": "DALAT",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00", "10:00", "02.111.441", "0.233122.12", "P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Nha Trang"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Nha Trang", "Bến xe An Sương", "10:00", "10:00", "0.233122.12", "02.41141.11", "127 Lê Duẩn,TP.Nha Trang", "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 30, "name_tuyenduong": "Sài Gòn", "bendi": "Sài Gòn",
        "benden": "Đà Lạt", "loaixe": "Giường", "quangduong": "320 km", "thoigian": "08:00",
        "sochuyen": "7 chuyến/ngày", "giave": "220000", "giochay": "16:00(Giường)",
        "OriginCode": "TPHCM", "DestCode": "DALAT",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00", "10:00", "02.111.441", "0.233122.12", "P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Nha Trang"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Nha Trang", "Bến xe An Sương", "10:00", "10:00", "0.233122.12", "02.41141.11", "127 Lê Duẩn,TP.Nha Trang", "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 31, "name_tuyenduong": "Sài Gòn", "bendi": "Sài Gòn",
        "benden": "Đà Lạt", "loaixe": "Giường", "quangduong": "320 km", "thoigian": "08:00",
        "sochuyen": "7 chuyến/ngày", "giave": "220000", "giochay": "20:00(Giường)",
        "OriginCode": "TPHCM", "DestCode": "DALAT",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00", "10:00", "02.111.441", "0.233122.12", "P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Nha Trang"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Nha Trang", "Bến xe An Sương", "10:00", "10:00", "0.233122.12", "02.41141.11", "127 Lê Duẩn,TP.Nha Trang", "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh")
        ]
    },
    {
        "id_tuyenduong": 32, "name_tuyenduong": "Sài Gòn", "bendi": "Sài Gòn",
        "benden": "Đà Lạt", "loaixe": "Giường", "quangduong": "320 km", "thoigian": "08:00",
        "sochuyen": "7 chuyến/ngày", "giave": "220000", "giochay": "23:00(Giường)",
        "OriginCode": "TPHCM", "DestCode": "DALAT",
        chitiet: [new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00", "10:00", "02.111.441", "0.233122.12", "P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", "127 Lê Duẩn,TP.Nha Trang"),
            new _chitiettuyenduong__WEBPACK_IMPORTED_MODULE_0__["ChiTietTuyenDuong"]("Bến xe Nha Trang", "Bến xe An Sương", "10:00", "10:00", "0.233122.12", "02.41141.11", "127 Lê Duẩn,TP.Nha Trang", "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh")
        ]
    }
];


/***/ }),

/***/ "./src/app/model/tuyenduong.ts":
/*!*************************************!*\
  !*** ./src/app/model/tuyenduong.ts ***!
  \*************************************/
/*! exports provided: TuyenDuong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuyenDuong", function() { return TuyenDuong; });
var TuyenDuong = /** @class */ (function () {
    function TuyenDuong(id_tuyenduong, name_tuyenduong, bendi, benden, loaixe, quangduong, thoigian, sochuyen, giave, giochay, chitiet, OriginCode, DestCode) {
        this.chitiet = [];
        this.id_tuyenduong = id_tuyenduong;
        this.name_tuyenduong = name_tuyenduong;
        this.bendi = bendi;
        this.benden = benden;
        this.loaixe = loaixe;
        this.quangduong = quangduong;
        this.thoigian = thoigian;
        this.sochuyen = sochuyen;
        this.giave = giave;
        this.giochay = giochay;
        this.chitiet = chitiet;
        this.OriginCode = OriginCode;
        this.DestCode = DestCode;
    }
    return TuyenDuong;
}());



/***/ }),

/***/ "./src/app/service/chinhanh.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/chinhanh.service.ts ***!
  \*********************************************/
/*! exports provided: ChiNhanhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiNhanhService", function() { return ChiNhanhService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChiNhanhService = /** @class */ (function () {
    function ChiNhanhService(http) {
        this.http = http;
        this.url = "https://2joawegjk5.execute-api.us-west-2.amazonaws.com/chinhanh/chinhanh";
        //url1:string="https://imn5nvcqz5.execute-api.us-west-2.amazonaws.com/search2/search2/";
        this.url2 = "https://pmugj5i1ni.execute-api.us-west-2.amazonaws.com/tim/chinhanh/";
    }
    ChiNhanhService.prototype.getListChiNhanh = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json().Items; });
    };
    ChiNhanhService.prototype.getTimChiNhanhLienHe = function (chuoi) {
        return this.http.get(this.url2 + chuoi)
            .map(function (response) { return response.json().hits.hit; });
    };
    ChiNhanhService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ChiNhanhService);
    return ChiNhanhService;
}());



/***/ }),

/***/ "./src/app/service/chitietdatve.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/chitietdatve.service.ts ***!
  \*************************************************/
/*! exports provided: ChiTietDatVeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietDatVeService", function() { return ChiTietDatVeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChiTietDatVeService = /** @class */ (function () {
    function ChiTietDatVeService(http) {
        this.http = http;
        this.url = "https://2a8qywtfd3.execute-api.us-west-2.amazonaws.com/chay1/chay1";
    }
    ChiTietDatVeService.prototype.getListChiTietDatVe = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json().Items; });
    };
    ChiTietDatVeService.prototype.addThongTinChiTietDatVe = function (chitietdatve) {
        // if(chitietdatve.trangthai=="Đã nhận vé"){
        //     chitietdatve.trangthai=2;
        // } else if(chitietdatve.trangthai=="Đang Đặt")
        // {
        //     chitietdatve.trangthai=1;
        // }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, chitietdatve, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ChiTietDatVeService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ChiTietDatVeService.prototype.handleErrorObservable = function (error) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    ChiTietDatVeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ChiTietDatVeService);
    return ChiTietDatVeService;
}());



/***/ }),

/***/ "./src/app/service/thanhpholon.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/thanhpholon.service.ts ***!
  \************************************************/
/*! exports provided: ThanhPhoLonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanhPhoLonService", function() { return ThanhPhoLonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThanhPhoLonService = /** @class */ (function () {
    function ThanhPhoLonService(http) {
        this.http = http;
        this.url = "https://6begeyo7k2.execute-api.us-west-2.amazonaws.com/diadiem/diadiemtp";
    }
    ThanhPhoLonService.prototype.laydanhsachthanhpholon = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json().Items; });
    };
    ThanhPhoLonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ThanhPhoLonService);
    return ThanhPhoLonService;
}());



/***/ }),

/***/ "./src/app/service/tuyenduong.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/tuyenduong.service.ts ***!
  \***********************************************/
/*! exports provided: TuyenDuongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuyenDuongService", function() { return TuyenDuongService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TuyenDuongService = /** @class */ (function () {
    function TuyenDuongService(http) {
        this.http = http;
        this.url = "https://06jj0jk0vk.execute-api.us-west-2.amazonaws.com/tuyenduong/tuyenduong";
    }
    TuyenDuongService.prototype.getListTuyenDuong = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.url, options)
            .map(function (response) { return response.json().Items; });
    };
    TuyenDuongService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TuyenDuongService);
    return TuyenDuongService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: USERService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERService", function() { return USERService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var USERService = /** @class */ (function () {
    function USERService(http) {
        this.http = http;
        //url:string="http://localhost:7000/user";
        this.url = "https://3hql5e2asj.execute-api.us-west-2.amazonaws.com/dev/chay7"; //url:string="https://cq9wojicy3.execute-api.us-west-2.amazonaws.com/dev/dangky";
    }
    USERService.prototype.addObjectDangKiWithObservable = function (objectdangki) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, objectdangki, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    USERService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    USERService.prototype.handleErrorObservable = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    USERService.prototype.LayThongTinDangNhap = function (taikhoan, matkhau) {
        var chuoi = "/" + taikhoan + "/" + matkhau;
        return this.http.get(this.url + chuoi)
            .map(function (response) { return response.json(); });
    };
    USERService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], USERService);
    return USERService;
}());



/***/ }),

/***/ "./src/app/validators/retype_pass.ts":
/*!*******************************************!*\
  !*** ./src/app/validators/retype_pass.ts ***!
  \*******************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TEO EO\Desktop\bt\doancongnghemoi\doancongnghemoi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map