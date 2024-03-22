"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = exports.$put = exports.$post = exports.$get = void 0;
var tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
var axios_1 = tslib_1.__importDefault(require("axios"));
var js_cookie_1 = tslib_1.__importDefault(require("js-cookie"));
var parietteConfig_1 = require("../../parietteConfig");
function $get(url) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var bearerToken, res, err_1, msg;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    bearerToken = js_cookie_1.default.get("Authorization") ? "Bearer " + js_cookie_1.default.get("Authorization") : "";
                    return [4 /*yield*/, (0, axios_1.default)({
                            baseURL: parietteConfig_1.glob.api_url,
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                CompanyToken: parietteConfig_1.glob.company_token,
                                Sitetoken: parietteConfig_1.glob.site_token,
                                Locale: "de",
                                Authorization: bearerToken,
                            },
                            method: "get",
                            url: url,
                            withCredentials: true,
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_1 = _a.sent();
                    if (err_1.response.status === 401 || err_1.response.status === 403) {
                        // return Router.push("/Auth/Login");
                    }
                    msg = err_1.response.data;
                    return [2 /*return*/, msg];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.$get = $get;
function $post(url, ctx, headers) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var bearerToken, res, err_2, msg;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    bearerToken = js_cookie_1.default.get("Authorization") ? "Bearer " + js_cookie_1.default.get("Authorization") : "";
                    return [4 /*yield*/, (0, axios_1.default)({
                            baseURL: parietteConfig_1.glob.api_url,
                            headers: tslib_1.__assign(tslib_1.__assign({}, headers), { Accept: "application/json", "Content-Type": Object.prototype.toString.call(ctx) === "[object FormData]" ? "multipart/form-data" : "application/json", CompanyToken: parietteConfig_1.glob.company_token, Sitetoken: parietteConfig_1.glob.site_token, Locale: "de", Authorization: bearerToken }),
                            method: "post",
                            url: url,
                            data: ctx,
                            withCredentials: true,
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_2 = _a.sent();
                    msg = err_2.response.data;
                    throw msg;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.$post = $post;
function $put(url, ctx, headers) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var bearerToken, res, err_3, msg;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    bearerToken = js_cookie_1.default.get("Authorization") ? "Bearer " + js_cookie_1.default.get("Authorization") : "";
                    return [4 /*yield*/, (0, axios_1.default)({
                            baseURL: parietteConfig_1.glob.api_url,
                            headers: tslib_1.__assign(tslib_1.__assign({}, headers), { Accept: "application/json", "Content-Type": "application/json", CompanyToken: parietteConfig_1.glob.company_token, Sitetoken: parietteConfig_1.glob.site_token, Locale: "de", Authorization: bearerToken }),
                            method: "put",
                            url: url,
                            data: ctx,
                            withCredentials: true,
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_3 = _a.sent();
                    msg = err_3.response.data;
                    throw msg;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.$put = $put;
function $delete(url) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var bearerToken, res, err_4, msg;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    bearerToken = js_cookie_1.default.get("Authorization") ? "Bearer " + js_cookie_1.default.get("Authorization") : "";
                    return [4 /*yield*/, (0, axios_1.default)({
                            baseURL: parietteConfig_1.glob.api_url,
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                CompanyToken: parietteConfig_1.glob.company_token,
                                Locale: "de",
                                Authorization: bearerToken,
                            },
                            method: "delete",
                            url: url,
                            withCredentials: true,
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
                case 2:
                    err_4 = _a.sent();
                    msg = err_4.response.data;
                    throw msg;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.$delete = $delete;
//# sourceMappingURL=pariette.js.map