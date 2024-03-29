"use client";
import { GearIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
var FloatButton = function (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? "bottom-10 left-10" : _b;
    var _c = useState(false), isHovered = _c[0], setIsHovered = _c[1];
    return (React.createElement("div", { className: "z-50 fixed ".concat(position, " cursor-pointer"), onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } },
        isHovered && React.createElement("div", { className: "flex flex-col items-center gap-2 mb-2" }, children),
        React.createElement("div", { className: "p-3 bg-blue-500 text-white rounded-full" },
            React.createElement(GearIcon, { className: "h-6 w-6" }))));
};
export default FloatButton;
//# sourceMappingURL=FloatButton.js.map