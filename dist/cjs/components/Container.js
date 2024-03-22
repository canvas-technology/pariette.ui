"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Grid_1 = tslib_1.__importDefault(require("./Grid"));
var Container = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(Grid_1.default, { container: true }, children);
};
exports.default = Container;
//# sourceMappingURL=Container.js.map