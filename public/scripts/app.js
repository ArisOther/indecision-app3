"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// npx babel public/src/app.js --out-file=public/scripts/app.js --presets=@babel/env,@babel/react --watch
var IndecisionApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      //Deklarasi semua variabel yg akan di gunakan semua class=======
      var title = 'ini adalah judul';
      var subtitle = 'ini adlaah subtitle';
      var options = ['satu', 'dua', 'tiga']; //Deklarasi component2 yang ingin ditampilkan=========
      //setiap component mempunyai deklarasi props, mengambil dr variabel diatas
      //deklarasi props ini yg kemudian diambil sbg variabel dan diolah oleh  backend/class masing2 component

      return React.createElement("div", null, React.createElement(Header, {
        title: title,
        subtitle: subtitle
      }), React.createElement(Actions, null), React.createElement(Options, {
        options: options
      }), React.createElement(AddOptions, null));
    }
  }]);

  return IndecisionApp;
}(React.Component); //=============================================================================


var Header =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h1", null, this.props.title), React.createElement("p", null, this.props.subtitle));
    }
  }]);

  return Header;
}(React.Component);

var Actions =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Actions, _React$Component3);

  function Actions() {
    _classCallCheck(this, Actions);

    return _possibleConstructorReturn(this, _getPrototypeOf(Actions).apply(this, arguments));
  }

  _createClass(Actions, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", null, "ini adlah tombol"));
    }
  }]);

  return Actions;
}(React.Component);

var Options =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, _getPrototypeOf(Options).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.props.options.map(function (option) {
        return React.createElement(Option, {
          key: option,
          optionText: option
        });
      }));
    }
  }]);

  return Options;
}(React.Component);

var Option =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.props.optionText);
    }
  }]);

  return Option;
}(React.Component);

var AddOptions =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(AddOptions, _React$Component6);

  function AddOptions() {
    _classCallCheck(this, AddOptions);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddOptions).apply(this, arguments));
  }

  _createClass(AddOptions, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "ini adalah addoption");
    }
  }]);

  return AddOptions;
}(React.Component);

var jsx = React.createElement("div", null, React.createElement(Header, null), React.createElement(Actions, null), React.createElement(Options, null), React.createElement(AddOptions, null));
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
