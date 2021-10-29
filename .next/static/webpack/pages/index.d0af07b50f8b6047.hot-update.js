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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _component_wallet_connectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/wallet/connectors */ \"./component/wallet/connectors.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _component_wallet_modalpopup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/wallet/modalpopup */ \"./component/wallet/modalpopup.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_5__.useWeb3React)(), account = ref.account, activate = ref.activate, active = ref.active, chainId = ref.chainId, connector = ref.connector, deactivate = ref.deactivate, error = ref.error, provider = ref.provider, setError = ref.setError;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"none\"), display = ref1[0], setDisplay = ref1[1];\n    var fetcher = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        return fetch.apply(void 0, _toConsumableArray(args)).then(function(res) {\n            return res.json();\n        });\n    };\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('https://chainid.network/chains.json', fetcher), data = ref2.data, fatchError = ref2.fatchError;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), open = ref3[0], setOpen = ref3[1];\n    var Connect = function() {\n        try {\n            activate(_component_wallet_connectors__WEBPACK_IMPORTED_MODULE_4__.injected);\n            window.ethereum.request({\n                method: 'wallet_switchEthereumChain',\n                params: [\n                    {\n                        chainId: web3__WEBPACK_IMPORTED_MODULE_6___default().utils.numberToHex(1)\n                    }\n                ]\n            });\n            setOpen(true);\n        } catch (e) {\n            console.error('Connect', e);\n        } finally{\n            setDisplay(\"block\");\n        }\n    };\n    var Disconnect = function() {\n        try {\n            deactivate();\n        } catch (e) {\n            console.error('Connect', e);\n        } finally{\n            setDisplay(\"none\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n        __source: {\n            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n            lineNumber: 64\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                    lineNumber: 65\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                            lineNumber: 66\n                        },\n                        __self: this,\n                        children: \"Create Next App\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\",\n                        __source: {\n                            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                            lineNumber: 67\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                            lineNumber: 68\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                __source: {\n                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                    lineNumber: 70\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),\n                        __source: {\n                            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                            lineNumber: 71\n                        },\n                        __self: this,\n                        children: \"Welcome to WalletConnect\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().grid),\n                        __source: {\n                            fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                            lineNumber: 73\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                onClick: function() {\n                                    return Connect();\n                                },\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),\n                                __source: {\n                                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                                    lineNumber: 74\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    __source: {\n                                        fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                                        lineNumber: 75\n                                    },\n                                    __self: this,\n                                    children: \"Connect\"\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                onClick: function() {\n                                    return Disconnect();\n                                },\n                                style: {\n                                    display: \"\".concat(display)\n                                },\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),\n                                __source: {\n                                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                                    lineNumber: 78\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    __source: {\n                                        fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                                        lineNumber: 79\n                                    },\n                                    __self: this,\n                                    children: \"Disconnect\"\n                                })\n                            }),\n                            active ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                                    lineNumber: 82\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                                    __source: {\n                                        fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                                        lineNumber: 83\n                                    },\n                                    __self: this,\n                                    children: [\n                                        \"You are connected\",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                            __source: {\n                                                fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                                                lineNumber: 83\n                                            },\n                                            __self: this\n                                        }),\n                                        account\n                                    ]\n                                })\n                            }) : null\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_wallet_modalpopup__WEBPACK_IMPORTED_MODULE_8__.ModalPopup, {\n                open: open,\n                setClose: setOpen,\n                data: data,\n                __source: {\n                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                    lineNumber: 89\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().footer),\n                __source: {\n                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                    lineNumber: 91\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    __source: {\n                        fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                        lineNumber: 92\n                    },\n                    __self: this,\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo),\n                            __source: {\n                                fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                                lineNumber: 98\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16,\n                                __source: {\n                                    fileName: \"/Users/kabeloleboa/Documents/GitHub/walletTemp/pages/index.js\",\n                                    lineNumber: 99\n                                },\n                                __self: this\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Home, \"cpoz1M7vBbib//ANXYGwv2dnse0=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_5__.useWeb3React,\n        swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBUTtvQkFDZmQsR0FBRyxFQUFDLENBQXFCOzs7Ozs7O3dCQUMxQixDQUNXO3dCQUFDLENBQUc7NkZBQ2JlLENBQUk7NEJBQUN0QixTQUFTLEVBQUV4QyxxRUFBVzs7Ozs7OzJHQUN6QkQsbURBQUs7Z0NBQUNpRSxHQUFHLEVBQUMsQ0FBYTtnQ0FBQ0MsR0FBRyxFQUFDLENBQWE7Z0NBQUNDLEtBQUssRUFBRSxFQUFFO2dDQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7OztBQU01RSxDQUFDO0dBM0Z1QjdELElBQUk7O1FBV3RCSiwwREFBWTtRQUdhRSwyQ0FBTTs7O0tBZGJFLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQge2luamVjdGVkfSBmcm9tICcuLi9jb21wb25lbnQvd2FsbGV0L2Nvbm5lY3RvcnMnXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHdlYjMgZnJvbSAnd2ViMydcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgTW9kYWxQb3B1cCB9IGZyb20gJy4uL2NvbXBvbmVudC93YWxsZXQvbW9kYWxwb3B1cCdcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qge1xuICAgIGFjY291bnQsXG4gICAgYWN0aXZhdGUsXG4gICAgYWN0aXZlLFxuICAgIGNoYWluSWQsXG4gICAgY29ubmVjdG9yLFxuICAgIGRlYWN0aXZhdGUsXG4gICAgZXJyb3IsXG4gICAgcHJvdmlkZXIsXG4gICAgc2V0RXJyb3JcbiAgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICBjb25zdCBbZGlzcGxheSxzZXREaXNwbGF5XT11c2VTdGF0ZShcIm5vbmVcIik7XG4gIGNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgY29uc3QgeyBkYXRhLCBmYXRjaEVycm9yIH0gPSB1c2VTV1IoJ2h0dHBzOi8vY2hhaW5pZC5uZXR3b3JrL2NoYWlucy5qc29uJywgZmV0Y2hlcik7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuY29uc3QgQ29ubmVjdCA9KCk9PntcblxuICB0cnl7XG4gIGFjdGl2YXRlKGluamVjdGVkKTtcbiAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcbiAgICBwYXJhbXM6IFt7IGNoYWluSWQ6d2ViMy51dGlscy5udW1iZXJUb0hleCgxKX1dXG4gIH0pO1xuICBzZXRPcGVuKHRydWUpXG4gIH1jYXRjaChlKXtcbiAgICBjb25zb2xlLmVycm9yKCdDb25uZWN0JyxlKVxuICB9ZmluYWxseXtcbiAgICBzZXREaXNwbGF5KFwiYmxvY2tcIilcbiAgfVxuICBcblxufVxuXG5jb25zdCBEaXNjb25uZWN0ID0oKT0+e1xuICB0cnl7XG4gIGRlYWN0aXZhdGUoKTtcbiAgfWNhdGNoKGUpe1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Nvbm5lY3QnLGUpXG4gIH1maW5hbGx5e1xuICAgIHNldERpc3BsYXkoXCJub25lXCIpXG4gIH1cbiAgXG4gXG5cbiAgXG59XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gV2FsbGV0Q29ubmVjdDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBDb25uZWN0KCl9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGRpdj5Db25uZWN0PC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IERpc2Nvbm5lY3QoKX0gc3R5bGU9e3tkaXNwbGF5OmAke2Rpc3BsYXl9YH19IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGRpdj5EaXNjb25uZWN0PC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+WW91IGFyZSBjb25uZWN0ZWQ8YnIvPnthY2NvdW50fTwvaDE+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPE1vZGFsUG9wdXAgb3Blbj17b3Blbn0gc2V0Q2xvc2U9e3NldE9wZW59IGRhdGE9e2RhdGF9IC8+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJpbmplY3RlZCIsInVzZVdlYjNSZWFjdCIsIndlYjMiLCJ1c2VTV1IiLCJNb2RhbFBvcHVwIiwiSG9tZSIsImFjY291bnQiLCJhY3RpdmF0ZSIsImFjdGl2ZSIsImNoYWluSWQiLCJjb25uZWN0b3IiLCJkZWFjdGl2YXRlIiwiZXJyb3IiLCJwcm92aWRlciIsInNldEVycm9yIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZmF0Y2hFcnJvciIsIm9wZW4iLCJzZXRPcGVuIiwiQ29ubmVjdCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtcyIsInV0aWxzIiwibnVtYmVyVG9IZXgiLCJlIiwiY29uc29sZSIsIkRpc2Nvbm5lY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImdyaWQiLCJidXR0b24iLCJvbkNsaWNrIiwiY2FyZCIsInN0eWxlIiwiaDEiLCJkZXNjcmlwdGlvbiIsImJyIiwic2V0Q2xvc2UiLCJmb290ZXIiLCJhIiwidGFyZ2V0Iiwic3BhbiIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});