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
var react_data_grid_1 = __importDefault(require("react-data-grid"));
var react_1 = __importDefault(require("react"));
var Column_1 = __importDefault(require("../Models/Column"));
var Row_1 = __importDefault(require("../Models/Row"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.columns = new Array();
        _this.rows = new Array();
        _this.getRandomDate = function (start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
        };
        _this.rowGetter = function (i) {
            return _this.rows[i];
        };
        _this.handleGridRowsUpdated = function (fromRow, toRow, updated) {
            var rows = _this.rows.slice();
            for (var i = fromRow; i <= toRow; i++) {
                var rowToUpdate = rows[i];
                var updatedRow = immutability_helper_1.default(rowToUpdate, { $merge: updated });
                rows[i] = updatedRow;
            }
            _this.setState({ rows: rows });
        };
        _this.createColumns();
        _this.createRows();
        return _this;
    }
    App.prototype.createColumns = function () {
        this.columns.push(new Column_1.default("id", "ID", true, 120));
        this.columns.push(new Column_1.default("task", "Title"));
        this.columns.push(new Column_1.default("complete", "Complete"));
    };
    App.prototype.createRows = function () {
        for (var i = 1; i < 1000; i++) {
            // create an object of Row
            var complete = Math.min(100, Math.round(Math.random() * 110));
            var row = new Row_1.default(i, "Title " + i, complete);
            // adding that object to the array of Row
            this.rows.push(row);
        }
    };
    ;
    App.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(react_data_grid_1.default, { columns: this.columns, rowGetter: this.rowGetter, rowsCount: this.rows.length, minHeight: 500, minColumnWidth: 120 })));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
