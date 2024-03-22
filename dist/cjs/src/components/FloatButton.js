"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_icons_1 = require("@radix-ui/react-icons");
var react_1 = tslib_1.__importStar(require("react"));
var FloatButton = function (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? "bottom-10 left-10" : _b;
    var _c = (0, react_1.useState)(false), isHovered = _c[0], setIsHovered = _c[1];
    return (react_1.default.createElement("div", { className: "z-50 fixed ".concat(position, " cursor-pointer"), onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } },
        isHovered && react_1.default.createElement("div", { className: "flex flex-col items-center gap-2 mb-2" }, children),
        react_1.default.createElement("div", { className: "p-3 bg-blue-500 text-white rounded-full" },
            react_1.default.createElement(react_icons_1.GearIcon, { className: "h-6 w-6" }))));
};
exports.default = FloatButton;
//# sourceMappingURL=FloatButton.js.map