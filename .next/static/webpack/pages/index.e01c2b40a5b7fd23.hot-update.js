"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/wallet/modalpopup.js":
/*!****************************************!*\
  !*** ./component/wallet/modalpopup.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalPopup\": function() { return /* binding */ ModalPopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Modal */ \"./node_modules/@mui/material/Modal/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListSubheader */ \"./node_modules/@mui/material/ListSubheader/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar style = {\n    position: 'absolute',\n    top: '50%',\n    left: '50%',\n    transform: 'translate(-50%, -50%)',\n    width: 400,\n    bgcolor: 'background.paper',\n    border: '2px solid #000',\n    boxShadow: 24,\n    pt: 2,\n    px: 4,\n    pb: 3\n};\nvar ModalPopup = function(props) {\n    var _this1 = _this;\n    var handleClose = function() {\n        props.setClose(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            open: props.open,\n            onClose: handleClose,\n            \"aria-labelledby\": \"parent-modal-title\",\n            \"aria-describedby\": \"parent-modal-description\",\n            __source: {\n                fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                lineNumber: 34\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sx: _objectSpread({\n                }, style, {\n                    width: 400\n                }),\n                __source: {\n                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                    lineNumber: 40\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sx: {\n                        width: '100%',\n                        maxWidth: 360,\n                        bgcolor: 'background.paper',\n                        position: 'relative',\n                        overflow: 'auto',\n                        maxHeight: 300,\n                        '& ul': {\n                            padding: 0\n                        }\n                    },\n                    subheader: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                    }),\n                    __source: {\n                        fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                        lineNumber: 41\n                    },\n                    __self: _this,\n                    children: props.data && props.data.map(function(chainId, i) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                lineNumber: 54\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                                __source: {\n                                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                    lineNumber: 55\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        __source: {\n                                            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                            lineNumber: 56\n                                        },\n                                        __self: _this1,\n                                        children: \"I'm sticky \".concat(chainId.name)\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        __source: {\n                                            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                            lineNumber: 58\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            primary: \"Item \".concat(chainId.symbol),\n                                            __source: {\n                                                fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                                lineNumber: 59\n                                            },\n                                            __self: _this1\n                                        })\n                                    }, \"item-\".concat(chainId.chain)),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        __source: {\n                                            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                            lineNumber: 61\n                                        },\n                                        __self: _this1,\n                                        children: \"Select Chain\"\n                                    })\n                                ]\n                            })\n                        }, \"section-\".concat(chainId.chain));\n                    })\n                })\n            })\n        })\n    }));\n};\n_c = ModalPopup;\nvar _c;\n$RefreshReg$(_c, \"ModalPopup\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvd2FsbGV0L21vZGFscG9wdXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDSztBQUNJO0FBQ0U7QUFDSjtBQUNRO0FBQ1E7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd2RCxHQUFLLENBQUNRLEtBQUssR0FBRyxDQUFDO0lBQ2JDLFFBQVEsRUFBRSxDQUFVO0lBQ3BCQyxHQUFHLEVBQUUsQ0FBSztJQUNWQyxJQUFJLEVBQUUsQ0FBSztJQUNYQyxTQUFTLEVBQUUsQ0FBdUI7SUFDbENDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLE9BQU8sRUFBRSxDQUFrQjtJQUMzQkMsTUFBTSxFQUFFLENBQWdCO0lBQ3hCQyxTQUFTLEVBQUUsRUFBRTtJQUNiQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxFQUFFLEVBQUUsQ0FBQztBQUNQLENBQUM7QUFHTSxHQUFLLENBQUNDLFVBQVUsR0FBQyxRQUFRLENBQVBDLEtBQUssRUFBRyxDQUFDOztJQUVoQyxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUN0QixHQUQ0QixDQUFDO1FBQ3pCRCxLQUFLLENBQUNFLFFBQVEsQ0FBQyxLQUFLO0lBQ3RCLENBQUM7SUFFRCxNQUFNO3VGQUVEckIsMkRBQUs7WUFDSnNCLElBQUksRUFBRUgsS0FBSyxDQUFDRyxJQUFJO1lBQ2hCQyxPQUFPLEVBQUVILFdBQVc7WUFDcEJJLENBQWUsa0JBQUMsQ0FBb0I7WUFDcENDLENBQWdCLG1CQUFDLENBQTBCOzs7Ozs7MkZBRTFDMUIseURBQUc7Z0JBQUMyQixFQUFFO21CQUFPcEIsS0FBSztvQkFBRUssS0FBSyxFQUFFLEdBQUc7Ozs7Ozs7K0ZBQzlCVCwwREFBSTtvQkFDUHdCLEVBQUUsRUFBRSxDQUFDO3dCQUNIZixLQUFLLEVBQUUsQ0FBTTt3QkFDYmdCLFFBQVEsRUFBRSxHQUFHO3dCQUNiZixPQUFPLEVBQUUsQ0FBa0I7d0JBQzNCTCxRQUFRLEVBQUUsQ0FBVTt3QkFDcEJxQixRQUFRLEVBQUUsQ0FBTTt3QkFDaEJDLFNBQVMsRUFBRSxHQUFHO3dCQUNkLENBQU0sT0FBRSxDQUFDOzRCQUFDQyxPQUFPLEVBQUUsQ0FBQzt3QkFBQyxDQUFDO29CQUN4QixDQUFDO29CQUNEQyxTQUFTLHVFQUFHQyxDQUFFOzs7Ozs7OzhCQUViYixLQUFLLENBQUNjLElBQUksSUFBRWQsS0FBSyxDQUFDYyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBQ0MsQ0FBQztzQ0FDcEMsTUFBTSx3REFBTEosQ0FBRTs7Ozs7OzRHQUNBSyxDQUFFOzs7Ozs7O3lHQUNBaEMsbUVBQWE7Ozs7OztrREFBRyxDQUFXLGFBQWUsT0FBYjhCLE9BQU8sQ0FBQ0csSUFBSTs7eUdBRXZDbkMsOERBQVE7Ozs7Ozt1SEFDTkMsa0VBQVk7NENBQUNtQyxPQUFPLEVBQUcsQ0FBSyxPQUFpQixPQUFmSixPQUFPLENBQUNLLE1BQU07Ozs7Ozs7dUNBRC9CLENBQUssT0FBZ0IsT0FBZEwsT0FBTyxDQUFDTSxLQUFLO3lHQUdsQ3hDLDREQUFNOzs7Ozs7a0RBQUMsQ0FBWTs7OzsyQkFQakIsQ0FBUSxVQUFnQixPQUFka0MsT0FBTyxDQUFDTSxLQUFLOzs7Ozs7QUFrQnpDLENBQUM7S0E5Q1l2QixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC93YWxsZXQvbW9kYWxwb3B1cC5qcz9mNjRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTW9kYWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RTdWJoZWFkZXInO1xuXG5cbmNvbnN0IHN0eWxlID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnNTAlJyxcbiAgbGVmdDogJzUwJScsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gIHdpZHRoOiA0MDAsXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcbiAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxuICBib3hTaGFkb3c6IDI0LFxuICBwdDogMixcbiAgcHg6IDQsXG4gIHBiOiAzLFxufTtcblxuXG5leHBvcnQgY29uc3QgTW9kYWxQb3B1cD0ocHJvcHMpPT57XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgcHJvcHMuc2V0Q2xvc2UoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPE1vZGFsXG4gICAgICAgIG9wZW49e3Byb3BzLm9wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJwYXJlbnQtbW9kYWwtdGl0bGVcIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicGFyZW50LW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDQwMCB9fT5cbiAgICAgICAgPExpc3RcbiAgICAgIHN4PXt7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAzNjAsXG4gICAgICAgIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgIG1heEhlaWdodDogMzAwLFxuICAgICAgICAnJiB1bCc6IHsgcGFkZGluZzogMCB9LFxuICAgICAgfX1cbiAgICAgIHN1YmhlYWRlcj17PGxpIC8+fVxuICAgID5cbiAgICAgIHtwcm9wcy5kYXRhJiZwcm9wcy5kYXRhLm1hcCgoY2hhaW5JZCxpKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2BzZWN0aW9uLSR7Y2hhaW5JZC5jaGFpbn1gfT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8TGlzdFN1YmhlYWRlcj57YEknbSBzdGlja3kgJHtjaGFpbklkLm5hbWV9YH08L0xpc3RTdWJoZWFkZXI+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtgaXRlbS0ke2NoYWluSWQuY2hhaW59YH0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtgSXRlbSAke2NoYWluSWQuc3ltYm9sfWB9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDwgQnV0dG9uPlNlbGVjdCBDaGFpbjwvQnV0dG9uPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gICAgICAgIDwvQm94PlxuICBcbiAgICAgIDwvTW9kYWw+XG4gICAgICA8Lz5cbiBcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIk1vZGFsIiwiQnV0dG9uIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1UZXh0IiwiTGlzdFN1YmhlYWRlciIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwicHQiLCJweCIsInBiIiwiTW9kYWxQb3B1cCIsInByb3BzIiwiaGFuZGxlQ2xvc2UiLCJzZXRDbG9zZSIsIm9wZW4iLCJvbkNsb3NlIiwiYXJpYS1sYWJlbGxlZGJ5IiwiYXJpYS1kZXNjcmliZWRieSIsInN4IiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsIm1heEhlaWdodCIsInBhZGRpbmciLCJzdWJoZWFkZXIiLCJsaSIsImRhdGEiLCJtYXAiLCJjaGFpbklkIiwiaSIsInVsIiwibmFtZSIsInByaW1hcnkiLCJzeW1ib2wiLCJjaGFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/wallet/modalpopup.js\n");

/***/ })

});