/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client';
import React from 'react';
var Grid = function (_a) {
    var children = _a.children, container = _a.container, _b = _a.spacing, spacing = _b === void 0 ? 2 : _b, _c = _a.columns, columns = _c === void 0 ? 2 : _c, _d = _a.direction, direction = _d === void 0 ? 'col' : _d, span = _a.span, start = _a.start;
    var director = function () {
        if (typeof columns === 'number') {
            //tekli column belirleme
            var column = "grid-".concat(direction, "s-").concat(columns);
            var req = direction === 'row' ? ' grid-flow-col' : '';
            return column + req;
        }
        else if (typeof columns === 'object') {
            //array mapleyerek breakpointleri ekleme
            var prefix_1 = "grid-".concat(direction, "s");
            var variants = Object.keys(columns).map(function (key) {
                return "".concat(key, ":").concat(prefix_1, "-").concat(columns[key]);
            });
            var req = direction === 'row' ? ' grid-flow-col' : '';
            return prefix_1 + '-1 ' + variants.join(' ') + req;
        }
        else {
            return '';
        }
    };
    var spanner = function () {
        var _a;
        //itemlerde boyutlandırma
        if (span) {
            var spanVariants = (_a = {},
                _a[span] = "".concat(direction, "-span-").concat(span),
                _a);
            return spanVariants[span];
        }
        else {
            return '';
        }
    };
    var startPointer = function () {
        //itemlerde başlangıç noktası
        if (start) {
            var startP = "".concat(direction, "-start-").concat(start);
            return startP;
        }
        else {
            return '';
        }
    };
    return container ? (React.createElement("div", { className: "grid ".concat(director(), " w-full gap-").concat(spacing * 2) }, children)) : (React.createElement("div", { className: "".concat(spanner(), " ").concat(startPointer()) }, children));
};
export default Grid;
//# sourceMappingURL=Grid.js.map