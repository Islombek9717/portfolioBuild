self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Islombek\\Desktop\\webcourse\\najot_talim\\react\\portfolio_website-STARTER\\portfolio_website-STARTER\\src\\components\\TimeLine\\TimeLine.js",
    _this = undefined,
    _s = $RefreshSig$();





var TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

var Timeline = function Timeline() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var scroll = function scroll(node, left) {
    return node.scrollTo({
      left: left,
      behavior: "smooth"
    });
  };

  var handleClick = function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "Gregarious,Computer science and engineering bachelor student seeking a position as software developer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
            "final": index === TOTAL_CAROUSEL_COUNT - 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
              index: index,
              id: "carousel__item-".concat(index),
              active: activeItem,
              onClick: function onClick(e) {
                return handleClick(e, index);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
                children: [item.year, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                  width: "208",
                  height: "6",
                  viewBox: "0 0 208 6",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                    fill: "url(#paint0_linear)",
                    "fill-opacity": "0.33"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                      id: "paint0_linear",
                      x1: "-4.30412e-10",
                      y1: "0.5",
                      x2: "208",
                      y2: "0.500295",
                      gradientUnits: "userSpaceOnUse",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        "stop-color": "white"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        offset: "0.79478",
                        "stop-color": "white",
                        "stop-opacity": "0"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: function onClick(e) {
            return handleClick(e, index);
          },
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, _this);
};

_s(Timeline, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c = Timeline;
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

var _c;

$RefreshReg$(_c, "Timeline");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFXQTtBQU1BO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLHFFQUE3Qjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2VDLCtDQUFRLENBQUMsQ0FBRCxDQUR2QjtBQUFBLE1BQ2RDLFVBRGM7QUFBQSxNQUNGQyxhQURFOztBQUVyQixNQUFNQyxXQUFXLEdBQUdDLDZDQUFNLEVBQTFCOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM3QixXQUFPRCxJQUFJLENBQUNFLFFBQUwsQ0FBYztBQUFFRCxVQUFJLEVBQUpBLElBQUY7QUFBUUUsY0FBUSxFQUFFO0FBQWxCLEtBQWQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFD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ZTAyOWM4ODFkYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgQ2Fyb3VzZWxCdXR0b24sXG4gIENhcm91c2VsQnV0dG9uRG90LFxuICBDYXJvdXNlbEJ1dHRvbnMsXG4gIENhcm91c2VsQ29udGFpbmVyLFxuICBDYXJvdXNlbEl0ZW0sXG4gIENhcm91c2VsSXRlbUltZyxcbiAgQ2Fyb3VzZWxJdGVtVGV4dCxcbiAgQ2Fyb3VzZWxJdGVtVGl0bGUsXG4gIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSxcbn0gZnJvbSBcIi4vVGltZUxpbmVTdHlsZXNcIjtcbmltcG9ydCB7XG4gIFNlY3Rpb24sXG4gIFNlY3Rpb25EaXZpZGVyLFxuICBTZWN0aW9uVGV4dCxcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7IFRpbWVMaW5lRGF0YSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcblxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XG4gICAgcmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKFxuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKVxuICAgICAgKTtcblxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChcbiAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXG4gICAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqXG4gICAgICAgICAgVGltZUxpbmVEYXRhLmxlbmd0aFxuICAgICAgKTtcblxuICAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcbiAgLy8gLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XG4gICAgICA8U2VjdGlvblRpdGxlPkFib3V0IE1lPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgIEdyZWdhcmlvdXMsQ29tcHV0ZXIgc2NpZW5jZSBhbmQgZW5naW5lZXJpbmcgYmFjaGVsb3Igc3R1ZGVudCBzZWVraW5nIGFcbiAgICAgICAgcG9zaXRpb24gYXMgc29mdHdhcmUgZGV2ZWxvcGVyXG4gICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxuICAgICAgICA8PlxuICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBmaW5hbD17aW5kZXggPT09IFRPVEFMX0NBUk9VU0VMX0NPVU5UIC0gMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnllYXJ9XG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjA4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDUuNUMzLjg4MDcxIDUuNSA1IDQuMzgwNzEgNSAzVjMuNUwyMDggMy41MDAwMlYyLjUwMDAyTDUgMi41VjNDNSAxLjYxOTI5IDMuODgwNzEgMC41IDIuNSAwLjVDMS4xMTkyOSAwLjUgMCAxLjYxOTI5IDAgM0MwIDQuMzgwNzEgMS4xMTkyOSA1LjUgMi41IDUuNVpcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCItNC4zMDQxMmUtMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIwLjUwMDI5NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwLjc5NDc4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtSW1nPlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XG4gICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvblxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgYWN0aXZlPXthY3RpdmVJdGVtfSAvPlxuICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=