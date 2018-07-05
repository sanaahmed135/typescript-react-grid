"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Column = /** @class */ (function () {
    function Column(_key, _name, _editable, _width, _complete) {
        this.width = 50;
        this.key = _key;
        this.name = _name;
        this.editable = _editable;
        this.width = _width;
        this.complete = _complete;
    }
    return Column;
}());
exports.default = Column;
