"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: false,
            data: {
                name: "default"
            }
        };
        _this.handleFetch = _this.handleFetch.bind(_this);
        return _this;
    }
    MyComponent.prototype.handleFetch = function () {
    };
    MyComponent.prototype.render = function () {
        var _a = this.state, isLoading = _a.isLoading, data = _a.data;
        if (isLoading)
            return <div>loading....</div>;
        if (!isLoading)
            return <div>{data.name}</div>;
    };
    return MyComponent;
}(React.Component));
ReactDOM.render(<MyComponent />, document.getElementById('root'));
