"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = undefined;

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDraggable = require("react-draggable");

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var Modal = (exports.Modal = (function(_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(
      this,
      (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props)
    );

    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.state = {
      modalVisible: false
    };
    return _this;
  }

  _createClass(Modal, [
    {
      key: "toggleModal",
      value: function toggleModal() {
        this.setState({ modalVisible: !this.state.modalVisible });
      }
    },
    {
      key: "getInitialState",
      value: function getInitialState() {
        return {
          activeDrags: 0,
          deltaPosition: {
            x: 0,
            y: 0
          },
          controlledPosition: {
            x: -400,
            y: 200
          }
        };
      }
    },
    {
      key: "handleDrag",
      value: function handleDrag(e, ui) {
        var _state$deltaPosition = this.state.deltaPosition,
          x = _state$deltaPosition.x,
          y = _state$deltaPosition.y;

        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY
          }
        });
      }
    },
    {
      key: "onStart",
      value: function onStart() {
        this.setState({ activeDrags: ++this.state.activeDrags });
      }
    },
    {
      key: "onStop",
      value: function onStop() {
        this.setState({ activeDrags: --this.state.activeDrags });
      }
    },
    {
      key: "render",
      value: function render() {
        var dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            _reactDraggable2.default,
            null,
            _react2.default.createElement(
              "div",
              _extends(
                {
                  className: "box",
                  style: {
                    position: "absolute",
                    bottom: "100px",
                    right: "100px"
                  }
                },
                dragHandlers
              ),
              _react2.default.createElement(
                "div",
                {
                  className: "toggleModal",
                  style: { display: this.state.modalVisible ? "block" : "none" }
                },
                _react2.default.createElement(
                  "div",
                  { className: "toggleDiv" },
                  _react2.default.createElement(
                    "div",
                    { className: "modal-dialog", role: "document" },
                    _react2.default.createElement(
                      "div",
                      { className: "modal-content" },
                      _react2.default.createElement(
                        "div",
                        { className: "modal-header" },
                        _react2.default.createElement(
                          "h5",
                          { className: "modal-title", id: "exampleModalLabel" },
                          "Add Task"
                        ),
                        _react2.default.createElement(
                          "button",
                          {
                            onClick: this.toggleModal,
                            type: "button",
                            className: "close",
                            "data-dismiss": "modal",
                            "aria-label": "Close"
                          },
                          _react2.default.createElement(
                            "span",
                            { "aria-hidden": "true" },
                            "\xD7"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { class: "form-group" },
                        _react2.default.createElement(
                          "label",
                          {
                            class: "col-sm-2 control-label",
                            for: "inputDate"
                          },
                          "Date"
                        ),
                        _react2.default.createElement(
                          "div",
                          { class: "col-sm-10" },
                          _react2.default.createElement("input", {
                            type: "date",
                            class: "form-control",
                            id: "inputDate",
                            placeholder: "Date"
                          })
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { class: "form-group" },
                        _react2.default.createElement(
                          "label",
                          {
                            class: "col-sm-2 control-label",
                            for: "inputTask"
                          },
                          "Task"
                        ),
                        _react2.default.createElement(
                          "div",
                          { class: "col-sm-10" },
                          _react2.default.createElement("input", {
                            type: "task",
                            class: "form-control",
                            id: "inputTask",
                            placeholder: "Task"
                          })
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "modal-footer" },
                        _react2.default.createElement(
                          "button",
                          {
                            onClick: this.toggleModal,
                            type: "button",
                            className: "btn btn-secondary",
                            "data-dismiss": "modal"
                          },
                          "Close"
                        ),
                        _react2.default.createElement(
                          "button",
                          { type: "button", className: "btn btn-primary" },
                          "Save changes"
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "button",
            { onClick: this.toggleModal },
            "Click Here"
          )
        );
      }
    }
  ]);

  return Modal;
})(_react2.default.Component));
