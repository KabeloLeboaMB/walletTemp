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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalPopup\": function() { return /* binding */ ModalPopup; }\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Modal */ \"./node_modules/@mui/material/Modal/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListSubheader */ \"./node_modules/@mui/material/ListSubheader/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar style = {\n    position: 'absolute',\n    top: '50%',\n    left: '50%',\n    transform: 'translate(-50%, -50%)',\n    width: 400,\n    bgcolor: 'background.paper',\n    border: '2px solid #000',\n    boxShadow: 24,\n    pt: 2,\n    px: 4,\n    pb: 3\n};\nvar ModalPopup = function(props) {\n    var _this1 = _this;\n    var handleClose = function() {\n        props.setClose(false);\n    };\n    var switchChain = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            open: props.open,\n            onClose: handleClose,\n            \"aria-labelledby\": \"parent-modal-title\",\n            \"aria-describedby\": \"parent-modal-description\",\n            __source: {\n                fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                lineNumber: 38\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: _objectSpread({\n                }, style, {\n                    width: 400\n                }),\n                __source: {\n                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                    lineNumber: 44\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_List__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    sx: {\n                        width: '100%',\n                        maxWidth: 360,\n                        bgcolor: 'background.paper',\n                        position: 'relative',\n                        overflow: 'auto',\n                        maxHeight: 300,\n                        '& ul': {\n                            padding: 0\n                        }\n                    },\n                    subheader: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"li\", {\n                    }),\n                    __source: {\n                        fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                        lineNumber: 45\n                    },\n                    __self: _this,\n                    children: props.data && props.data.map(function(chainId, i) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                lineNumber: 58\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"ul\", {\n                                __source: {\n                                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                    lineNumber: 59\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        __source: {\n                                            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                            lineNumber: 60\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                __source: {\n                                                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                                    lineNumber: 61\n                                                },\n                                                __self: _this1,\n                                                children: \" \".concat(chainId.name)\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                primary: \"\".concat(chainId.network),\n                                                __source: {\n                                                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                                    lineNumber: 62\n                                                },\n                                                __self: _this1\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                primary: \"\".concat(chainId.chainId),\n                                                __source: {\n                                                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                                    lineNumber: 63\n                                                },\n                                                __self: _this1\n                                            })\n                                        ]\n                                    }, \"\".concat(chainId.name)),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        onClick: function() {\n                                            return switchChain(chainId.chainId);\n                                        },\n                                        __source: {\n                                            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/component/wallet/modalpopup.js\",\n                                            lineNumber: 65\n                                        },\n                                        __self: _this1,\n                                        children: \"Select Chain\"\n                                    })\n                                ]\n                            })\n                        }, \"section-\".concat(chainId.chain));\n                    })\n                })\n            })\n        })\n    }));\n};\n_c = ModalPopup;\nvar _c;\n$RefreshReg$(_c, \"ModalPopup\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvd2FsbGV0L21vZGFscG9wdXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDSztBQUNJO0FBQ0U7QUFDSjtBQUNRO0FBQ1E7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3ZELEdBQUssQ0FBQ1EsS0FBSyxHQUFHLENBQUM7SUFDYkMsUUFBUSxFQUFFLENBQVU7SUFDcEJDLEdBQUcsRUFBRSxDQUFLO0lBQ1ZDLElBQUksRUFBRSxDQUFLO0lBQ1hDLFNBQVMsRUFBRSxDQUF1QjtJQUNsQ0MsS0FBSyxFQUFFLEdBQUc7SUFDVkMsT0FBTyxFQUFFLENBQWtCO0lBQzNCQyxNQUFNLEVBQUUsQ0FBZ0I7SUFDeEJDLFNBQVMsRUFBRSxFQUFFO0lBQ2JDLEVBQUUsRUFBRSxDQUFDO0lBQ0xDLEVBQUUsRUFBRSxDQUFDO0lBQ0xDLEVBQUUsRUFBRSxDQUFDO0FBQ1AsQ0FBQztBQUdNLEdBQUssQ0FBQ0MsVUFBVSxHQUFDLFFBQVEsQ0FBUEMsS0FBSyxFQUFHLENBQUM7O0lBRWhDLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7UUFDekJELEtBQUssQ0FBQ0UsUUFBUSxDQUFDLEtBQUs7SUFDdEIsQ0FBQztJQUVELEdBQUssQ0FBQ0MsV0FBVyxxRkFBRSxRQUFRLFdBQUUsQ0FBQzs7Ozs7Ozs7SUFFOUIsQ0FBQztJQUVELE1BQU07dUZBRUR0QiwyREFBSztZQUNKdUIsSUFBSSxFQUFFSixLQUFLLENBQUNJLElBQUk7WUFDaEJDLE9BQU8sRUFBRUosV0FBVztZQUNwQkssQ0FBZSxrQkFBQyxDQUFvQjtZQUNwQ0MsQ0FBZ0IsbUJBQUMsQ0FBMEI7Ozs7OzsyRkFFMUMzQix5REFBRztnQkFBQzRCLEVBQUU7bUJBQU9yQixLQUFLO29CQUFFSyxLQUFLLEVBQUUsR0FBRzs7Ozs7OzsrRkFDOUJULDBEQUFJO29CQUNQeUIsRUFBRSxFQUFFLENBQUM7d0JBQ0hoQixLQUFLLEVBQUUsQ0FBTTt3QkFDYmlCLFFBQVEsRUFBRSxHQUFHO3dCQUNiaEIsT0FBTyxFQUFFLENBQWtCO3dCQUMzQkwsUUFBUSxFQUFFLENBQVU7d0JBQ3BCc0IsUUFBUSxFQUFFLENBQU07d0JBQ2hCQyxTQUFTLEVBQUUsR0FBRzt3QkFDZCxDQUFNLE9BQUUsQ0FBQzs0QkFBQ0MsT0FBTyxFQUFFLENBQUM7d0JBQUMsQ0FBQztvQkFDeEIsQ0FBQztvQkFDREMsU0FBUyx1RUFBR0MsQ0FBRTs7Ozs7Ozs4QkFFYmQsS0FBSyxDQUFDZSxJQUFJLElBQUVmLEtBQUssQ0FBQ2UsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUNDLENBQUM7c0NBQ3BDLE1BQU0sd0RBQUxKLENBQUU7Ozs7Ozs0R0FDQUssQ0FBRTs7Ozs7OzswR0FDRW5DLDhEQUFROzs7Ozs7O2lIQUNSRSxtRUFBYTs7Ozs7OzBEQUFHLENBQUMsR0FBZSxPQUFiK0IsT0FBTyxDQUFDRyxJQUFJOztpSEFDN0JuQyxrRUFBWTtnREFBQ29DLE9BQU8sRUFBRyxHQUFrQixPQUFoQkosT0FBTyxDQUFDSyxPQUFPOzs7Ozs7O2lIQUN4Q3JDLGtFQUFZO2dEQUFDb0MsT0FBTyxFQUFHLEdBQWtCLE9BQWhCSixPQUFPLENBQUNBLE9BQU87Ozs7Ozs7O3VDQUgzQixHQUFlLE9BQWJBLE9BQU8sQ0FBQ0csSUFBSTt5R0FLNUJ0Qyw0REFBTTt3Q0FBQ3lDLE9BQU8sRUFBRSxRQUFROzRDQUFIcEIsTUFBTSxDQUFOQSxXQUFXLENBQUNjLE9BQU8sQ0FBQ0EsT0FBTzs7Ozs7OztrREFBRyxDQUFZOzs7OzJCQVA3RCxDQUFRLFVBQWdCLE9BQWRBLE9BQU8sQ0FBQ08sS0FBSzs7Ozs7O0FBa0J6QyxDQUFDO0tBbERZekIsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvd2FsbGV0L21vZGFscG9wdXAuanM/ZjY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBNb2RhbCBmcm9tICdAbXVpL21hdGVyaWFsL01vZGFsJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0U3ViaGVhZGVyJztcblxuXG5jb25zdCBzdHlsZSA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogJzUwJScsXG4gIGxlZnQ6ICc1MCUnLFxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICB3aWR0aDogNDAwLFxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXG4gIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcbiAgYm94U2hhZG93OiAyNCxcbiAgcHQ6IDIsXG4gIHB4OiA0LFxuICBwYjogMyxcbn07XG5cblxuZXhwb3J0IGNvbnN0IE1vZGFsUG9wdXA9KHByb3BzKT0+e1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHByb3BzLnNldENsb3NlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hDaGFpbiA9YXN5bmMgKCk9PntcbiAgICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPE1vZGFsXG4gICAgICAgIG9wZW49e3Byb3BzLm9wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJwYXJlbnQtbW9kYWwtdGl0bGVcIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicGFyZW50LW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDQwMCB9fT5cbiAgICAgICAgPExpc3RcbiAgICAgIHN4PXt7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAzNjAsXG4gICAgICAgIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgIG1heEhlaWdodDogMzAwLFxuICAgICAgICAnJiB1bCc6IHsgcGFkZGluZzogMCB9LFxuICAgICAgfX1cbiAgICAgIHN1YmhlYWRlcj17PGxpIC8+fVxuICAgID5cbiAgICAgIHtwcm9wcy5kYXRhJiZwcm9wcy5kYXRhLm1hcCgoY2hhaW5JZCxpKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2BzZWN0aW9uLSR7Y2hhaW5JZC5jaGFpbn1gfT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2Ake2NoYWluSWQubmFtZX1gfT5cbiAgICAgICAgICAgICAgPExpc3RTdWJoZWFkZXI+e2AgJHtjaGFpbklkLm5hbWV9YH08L0xpc3RTdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtgJHtjaGFpbklkLm5ldHdvcmt9YH0gLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2Ake2NoYWluSWQuY2hhaW5JZH1gfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8IEJ1dHRvbiBvbkNsaWNrPXsoKSA9PnN3aXRjaENoYWluKGNoYWluSWQuY2hhaW5JZCl9PlNlbGVjdCBDaGFpbjwvQnV0dG9uPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gICAgICAgIDwvQm94PlxuICBcbiAgICAgIDwvTW9kYWw+XG4gICAgICA8Lz5cbiBcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIk1vZGFsIiwiQnV0dG9uIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1UZXh0IiwiTGlzdFN1YmhlYWRlciIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwicHQiLCJweCIsInBiIiwiTW9kYWxQb3B1cCIsInByb3BzIiwiaGFuZGxlQ2xvc2UiLCJzZXRDbG9zZSIsInN3aXRjaENoYWluIiwib3BlbiIsIm9uQ2xvc2UiLCJhcmlhLWxhYmVsbGVkYnkiLCJhcmlhLWRlc2NyaWJlZGJ5Iiwic3giLCJtYXhXaWR0aCIsIm92ZXJmbG93IiwibWF4SGVpZ2h0IiwicGFkZGluZyIsInN1YmhlYWRlciIsImxpIiwiZGF0YSIsIm1hcCIsImNoYWluSWQiLCJpIiwidWwiLCJuYW1lIiwicHJpbWFyeSIsIm5ldHdvcmsiLCJvbkNsaWNrIiwiY2hhaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/wallet/modalpopup.js\n");

/***/ })

});