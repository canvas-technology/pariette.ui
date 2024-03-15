"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Container = function (_a) {
    var _b = _a.width, width = _b === void 0 ? '100%' : _b, _c = _a.gap, gap = _c === void 0 ? '10px' : _c;
    return (react_1.default.createElement("div", { style: {
            width: width,
            gap: gap
        } }, "x"));
};
exports.default = Container;
//# sourceMappingURL=Container.js.map