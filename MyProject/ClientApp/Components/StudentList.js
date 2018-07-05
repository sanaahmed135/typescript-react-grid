"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Student_1 = __importDefault(require("./Student"));
var StudentList = /** @class */ (function (_super) {
    __extends(StudentList, _super);
    function StudentList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.StudentList = Array();
        return _this;
    }
    StudentList.prototype.render = function () {
        this.StudentList = new Array();
        this.StudentList.push(new Student_1.default("Sami", "Saad"));
        this.StudentList.push(new Student_1.default("Sana", "Saad"));
        this.StudentList.push(new Student_1.default("1", "2"));
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("ul", null, this.StudentList.map(function (obj, index) {
                return react_1.default.createElement("li", null, obj.name);
            }))));
    };
    return StudentList;
}(react_1.default.Component));
exports.default = StudentList;
