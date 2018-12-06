(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);

// import { Link } from 'gatsby'


var IndexPage = function IndexPage(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "AWS Reinvent 2018"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("col", {
    width: "300"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("col", {
    width: "300"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("col", {
    width: "500"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("col", {
    width: "300"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("col", {
    width: "300"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("col", {
    width: "300"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("col", {
    width: "300"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Session Id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Abstract"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Session Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Slideshare"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Youtube"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, data.allSessionsJson.edges.map(function (_ref2, index) {
    var node = _ref2.node;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, node.abbreviation), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, node.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, node.abstract), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, node.session_type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: node.media.slideshare
    }, "SlideShare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: node.media.youtube
    }, "Youtube")));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
var query = "2570010493";

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_4__["a"]; });






var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(133));
} else {}

/***/ }),

/***/ 132:
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"AWS Reinvent 2018"}}}};

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);






var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_4__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object.assign({
    location: location,
    pageResources: pageResources
  }, pageResources.json));
};

ProdPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./public/static/d/755544856.json
var _755544856 = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(136);
var Helmet_default = /*#__PURE__*/__webpack_require__.n(Helmet);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(130);

// CONCATENATED MODULE: ./src/components/header.js




var header_Header = function Header(_ref) {
  var siteTitle = _ref.siteTitle;
  return react_default.a.createElement("div", {
    style: {
      background: '	#ff7f24',
      marginBottom: '1.45rem'
    }
  }, react_default.a.createElement("div", {
    style: {
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem'
    }
  }, react_default.a.createElement("h1", {
    style: {
      margin: 0
    }
  }, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: "/",
    style: {
      color: 'white',
      textDecoration: 'none'
    }
  }, siteTitle))));
};

header_Header.propTypes = {
  siteTitle: prop_types_default.a.string
};
header_Header.defaultProps = {
  siteTitle: ''
};
/* harmony default export */ var header = (header_Header);
// EXTERNAL MODULE: ./src/components/layout.css
var layout = __webpack_require__(134);

// CONCATENATED MODULE: ./src/components/layout.js








var layout_Layout = function Layout(_ref) {
  var children = _ref.children;
  return react_default.a.createElement(gatsby_browser_entry["StaticQuery"], {
    query: "755544856",
    render: function render(data) {
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Helmet_default.a, {
        title: data.site.siteMetadata.title,
        meta: [{
          name: 'description',
          content: 'Sample'
        }, {
          name: 'keywords',
          content: 'sample, something'
        }]
      }, react_default.a.createElement("html", {
        lang: "en"
      })), react_default.a.createElement(header, {
        siteTitle: data.site.siteMetadata.title
      }), react_default.a.createElement("div", {
        style: {
          margin: '0 0',
          maxWidth: 4000,
          padding: '0px 1rem .25rem',
          paddingTop: 0
        }
      }, children));
    },
    data: _755544856
  });
};

layout_Layout.propTypes = {
  children: prop_types_default.a.node.isRequired
};
/* harmony default export */ var components_layout = __webpack_exports__["a"] = (layout_Layout);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-f968ba5a4c21f678c753.js.map