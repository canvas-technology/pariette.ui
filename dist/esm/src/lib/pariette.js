import { __assign, __awaiter, __generator } from "tslib";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Axios from "axios";
import Cookies from "js-cookie";
import { glob } from "../../parietteConfig";
export function $get(url) {
    return __awaiter(this, void 0, void 0, function () {
        var bearerToken, res, err_1, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    bearerToken = Cookies.get("Authorization") ? "Bearer " + Cookies.get("Authorization") : "";
                    return [4 /*yield*/, Axios({
                            baseURL: glob.api_url,
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                CompanyToken: glob.company_token,
                                Sitetoken: glob.site_token,
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
export function $post(url, ctx, headers) {
    return __awaiter(this, void 0, void 0, function () {
        var bearerToken, res, err_2, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    bearerToken = Cookies.get("Authorization") ? "Bearer " + Cookies.get("Authorization") : "";
                    return [4 /*yield*/, Axios({
                            baseURL: glob.api_url,
                            headers: __assign(__assign({}, headers), { Accept: "application/json", "Content-Type": Object.prototype.toString.call(ctx) === "[object FormData]" ? "multipart/form-data" : "application/json", CompanyToken: glob.company_token, Sitetoken: glob.site_token, Locale: "de", Authorization: bearerToken }),
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
export function $put(url, ctx, headers) {
    return __awaiter(this, void 0, void 0, function () {
        var bearerToken, res, err_3, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    bearerToken = Cookies.get("Authorization") ? "Bearer " + Cookies.get("Authorization") : "";
                    return [4 /*yield*/, Axios({
                            baseURL: glob.api_url,
                            headers: __assign(__assign({}, headers), { Accept: "application/json", "Content-Type": "application/json", CompanyToken: glob.company_token, Sitetoken: glob.site_token, Locale: "de", Authorization: bearerToken }),
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
export function $delete(url) {
    return __awaiter(this, void 0, void 0, function () {
        var bearerToken, res, err_4, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    bearerToken = Cookies.get("Authorization") ? "Bearer " + Cookies.get("Authorization") : "";
                    return [4 /*yield*/, Axios({
                            baseURL: glob.api_url,
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                CompanyToken: glob.company_token,
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
//# sourceMappingURL=pariette.js.map