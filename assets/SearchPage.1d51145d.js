import{r as react,c as commonjsGlobal,g as getDefaultExportFromCjs,R as React,a as jsxs,j as jsx,F as Fragment}from"./index.f6710b98.js";import{B as Button,M as MovieItem,L as LoadingSkeleton,a as MovieItemLoadingSkeleton}from"./MovieItem.7462d4e1.js";import{t as tmdbApi,l as listType,u as useSWR,f as fetcher}from"./index.esm.d683727b.js";var reactPaginate={exports:{}};(function(module,exports){(function(t,e){module.exports=e(react.exports)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE__98__){return(()=>{var __webpack_modules__={759:(t,e,a)=>{a.d(e,{Z:()=>g});var r,o=a(98),_=a.n(o),i=a(697),n=a.n(i);function c(){return c=Object.assign||function(s){for(var l=1;l<arguments.length;l++){var p=arguments[l];for(var d in p)Object.prototype.hasOwnProperty.call(p,d)&&(s[d]=p[d])}return s},c.apply(this,arguments)}t=a.hmd(t),(r=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0)&&r(t),typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature;var m=function(s){var l=s.breakLabel,p=s.breakClassName,d=s.breakLinkClassName,u=s.breakHandler,b=s.getEventListener,y=p||"break";return _().createElement("li",{className:y},_().createElement("a",c({className:d,role:"button",tabIndex:"0",onKeyPress:u},b(u)),l))};m.propTypes={breakLabel:n().oneOfType([n().string,n().node]),breakClassName:n().string,breakLinkClassName:n().string,breakHandler:n().func.isRequired,getEventListener:n().func.isRequired};var E=m;const g=E;var f,P;(f=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0)&&(f.register(m,"BreakView","/home/yoan/work/oss/react-paginate/react_components/BreakView.js"),f.register(E,"default","/home/yoan/work/oss/react-paginate/react_components/BreakView.js")),(P=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0)&&P(t)},770:(t,e,a)=>{a.d(e,{Z:()=>g});var r,o=a(98),_=a.n(o),i=a(697),n=a.n(i);function c(){return c=Object.assign||function(s){for(var l=1;l<arguments.length;l++){var p=arguments[l];for(var d in p)Object.prototype.hasOwnProperty.call(p,d)&&(s[d]=p[d])}return s},c.apply(this,arguments)}t=a.hmd(t),(r=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0)&&r(t),typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature;var m=function(s){var l=s.pageClassName,p=s.pageLinkClassName,d=s.page,u=s.selected,b=s.activeClassName,y=s.activeLinkClassName,v=s.getEventListener,h=s.pageSelectedHandler,C=s.href,L=s.extraAriaContext,O=s.pageLabelBuilder,D=s.rel,x=s.ariaLabel||"Page "+d+(L?" "+L:""),M=null;return u&&(M="page",x=s.ariaLabel||"Page "+d+" is your current page",l=l!==void 0?l+" "+b:b,p!==void 0?y!==void 0&&(p=p+" "+y):p=y),_().createElement("li",{className:l},_().createElement("a",c({rel:D,role:C?void 0:"button",className:p,href:C,tabIndex:u?"-1":"0","aria-label":x,"aria-current":M,onKeyPress:h},v(h)),O(d)))};m.propTypes={pageSelectedHandler:n().func.isRequired,selected:n().bool.isRequired,pageClassName:n().string,pageLinkClassName:n().string,activeClassName:n().string,activeLinkClassName:n().string,extraAriaContext:n().string,href:n().string,ariaLabel:n().string,page:n().number.isRequired,getEventListener:n().func.isRequired,pageLabelBuilder:n().func.isRequired,rel:n().string};var E=m;const g=E;var f,P;(f=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0)&&(f.register(m,"PageView","/home/yoan/work/oss/react-paginate/react_components/PageView.js"),f.register(E,"default","/home/yoan/work/oss/react-paginate/react_components/PageView.js")),(P=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0)&&P(t)},214:(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PaginationBoxView});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(98),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(697),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_PageView__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(770),_BreakView__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(759),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(923),enterModule;function _typeof(t){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(t)}function _extends(){return _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},_extends.apply(this,arguments)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}function _inherits(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf||function(a,r){return a.__proto__=r,a},_setPrototypeOf(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var a,r=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(t,e){if(e&&(_typeof(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(t)}function _defineProperty(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}module=__webpack_require__.hmd(module),enterModule=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module),typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature;var PaginationBoxView=function(_Component){_inherits(PaginationBoxView,_Component);var _super=_createSuper(PaginationBoxView);function PaginationBoxView(t){var e,a;return _classCallCheck(this,PaginationBoxView),_defineProperty(_assertThisInitialized(e=_super.call(this,t)),"handlePreviousPage",function(r){var o=e.state.selected;e.handleClick(r,null,o>0?o-1:void 0,{isPrevious:!0})}),_defineProperty(_assertThisInitialized(e),"handleNextPage",function(r){var o=e.state.selected,_=e.props.pageCount;e.handleClick(r,null,o<_-1?o+1:void 0,{isNext:!0})}),_defineProperty(_assertThisInitialized(e),"handlePageSelected",function(r,o){if(e.state.selected===r)return e.callActiveCallback(r),void e.handleClick(o,null,void 0,{isActive:!0});e.handleClick(o,null,r)}),_defineProperty(_assertThisInitialized(e),"handlePageChange",function(r){e.state.selected!==r&&(e.setState({selected:r}),e.callCallback(r))}),_defineProperty(_assertThisInitialized(e),"getEventListener",function(r){return _defineProperty({},e.props.eventListener,r)}),_defineProperty(_assertThisInitialized(e),"handleClick",function(r,o,_){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=i.isPrevious,c=n!==void 0&&n,m=i.isNext,E=m!==void 0&&m,g=i.isBreak,f=g!==void 0&&g,P=i.isActive,s=P!==void 0&&P;r.preventDefault?r.preventDefault():r.returnValue=!1;var l=e.state.selected,p=e.props.onClick,d=_;if(p){var u=p({index:o,selected:l,nextSelectedPage:_,event:r,isPrevious:c,isNext:E,isBreak:f,isActive:s});if(u===!1)return;Number.isInteger(u)&&(d=u)}d!==void 0&&e.handlePageChange(d)}),_defineProperty(_assertThisInitialized(e),"handleBreakClick",function(r,o){var _=e.state.selected;e.handleClick(o,r,_<r?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),_defineProperty(_assertThisInitialized(e),"callCallback",function(r){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:r})}),_defineProperty(_assertThisInitialized(e),"callActiveCallback",function(r){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:r})}),_defineProperty(_assertThisInitialized(e),"getElementPageRel",function(r){var o=e.state.selected,_=e.props,i=_.nextPageRel,n=_.prevPageRel,c=_.selectedPageRel;return o-1===r?n:o===r?c:o+1===r?i:void 0}),_defineProperty(_assertThisInitialized(e),"pagination",function(){var r=[],o=e.props,_=o.pageRangeDisplayed,i=o.pageCount,n=o.marginPagesDisplayed,c=o.breakLabel,m=o.breakClassName,E=o.breakLinkClassName,g=e.state.selected;if(i<=_)for(var f=0;f<i;f++)r.push(e.getPageElement(f));else{var P=_/2,s=_-P;g>i-_/2?P=_-(s=i-g):g<_/2&&(s=_-(P=g));var l,p,d=function(y){return e.getPageElement(y)},u=[];for(l=0;l<i;l++){var b=l+1;b<=n||b>i-n||l>=g-P&&l<=g+(g===0&&_>1?s-1:s)?u.push({type:"page",index:l,display:d(l)}):c&&u.length>0&&u[u.length-1].display!==p&&(_>0||n>0)&&(p=react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BreakView__WEBPACK_IMPORTED_MODULE_3__.Z,{key:l,breakLabel:c,breakClassName:m,breakLinkClassName:E,breakHandler:e.handleBreakClick.bind(null,l),getEventListener:e.getEventListener}),u.push({type:"break",index:l,display:p}))}u.forEach(function(y,v){var h=y;y.type==="break"&&u[v-1]&&u[v-1].type==="page"&&u[v+1]&&u[v+1].type==="page"&&u[v+1].index-u[v-1].index<=2&&(h={type:"page",index:y.index,display:d(y.index)}),r.push(h.display)})}return r}),t.initialPage!==void 0&&t.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(t.initialPage,") and forcePage (").concat(t.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),a=t.initialPage?t.initialPage:t.forcePage?t.forcePage:0,e.state={selected:a},e}return _createClass(PaginationBoxView,[{key:"componentDidMount",value:function(){var t=this.props,e=t.initialPage,a=t.disableInitialCallback,r=t.extraAriaContext,o=t.pageCount,_=t.forcePage;e===void 0||a||this.callCallback(e),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(o)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(o,"). Did you forget a Math.ceil()?")),e!==void 0&&e>o-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(o-1,").")),_!==void 0&&_>o-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(_," > ").concat(o-1,")."))}},{key:"componentDidUpdate",value:function(t){this.props.forcePage!==void 0&&this.props.forcePage!==t.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(t.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var t=this.state.selected,e=this.props,a=e.pageCount,r=t+e.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var t=this.state.selected-this.props.pageRangeDisplayed;return t<0?0:t}},{key:"getElementHref",value:function(t){var e=this.props,a=e.hrefBuilder,r=e.pageCount,o=e.hrefAllControls;if(a)return o||t>=0&&t<r?a(t+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(t){var e=t===this.state.selected;if(this.props.ariaLabelBuilder&&t>=0&&t<this.props.pageCount){var a=this.props.ariaLabelBuilder(t+1,e);return this.props.extraAriaContext&&!e&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(t){var e=this.state.selected,a=this.props,r=a.pageClassName,o=a.pageLinkClassName,_=a.activeClassName,i=a.activeLinkClassName,n=a.extraAriaContext,c=a.pageLabelBuilder;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView__WEBPACK_IMPORTED_MODULE_2__.Z,{key:t,pageSelectedHandler:this.handlePageSelected.bind(null,t),selected:e===t,rel:this.getElementPageRel(t),pageClassName:r,pageLinkClassName:o,activeClassName:_,activeLinkClassName:i,extraAriaContext:n,href:this.getElementHref(t),ariaLabel:this.ariaLabelBuilder(t),page:t+1,pageLabelBuilder:c,getEventListener:this.getEventListener})}},{key:"render",value:function(){var t=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&t!==void 0)return t&&t(this.props);var e=this.props,a=e.disabledClassName,r=e.disabledLinkClassName,o=e.pageCount,_=e.className,i=e.containerClassName,n=e.previousLabel,c=e.previousClassName,m=e.previousLinkClassName,E=e.previousAriaLabel,g=e.prevRel,f=e.nextLabel,P=e.nextClassName,s=e.nextLinkClassName,l=e.nextAriaLabel,p=e.nextRel,d=this.state.selected,u=d===0,b=d===o-1,y="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(c)).concat(u?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(a)):""),v="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(P)).concat(b?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(a)):""),h="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(m)).concat(u?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(r)):""),C="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(s)).concat(b?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(r)):""),L=u?"true":"false",O=b?"true":"false";return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{className:_||i},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:y},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",_extends({className:h,href:this.getElementHref(d-1),tabIndex:u?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":L,"aria-label":E,rel:g},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:v},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",_extends({className:C,href:this.getElementHref(d+1),tabIndex:b?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":O,"aria-label":l,rel:p},this.getEventListener(this.handleNextPage)),f)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PaginationBoxView}(react__WEBPACK_IMPORTED_MODULE_0__.Component),reactHotLoader,leaveModule;_defineProperty(PaginationBoxView,"propTypes",{pageCount:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired,pageRangeDisplayed:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,marginPagesDisplayed:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,previousLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,previousAriaLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prevPageRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prevRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,nextAriaLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextPageRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,breakLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().node]),hrefBuilder:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,hrefAllControls:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,onPageChange:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onPageActive:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,initialPage:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,forcePage:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,disableInitialCallback:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,pageClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,pageLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,pageLabelBuilder:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,activeLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,previousClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,previousLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabledClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabledLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,breakClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,breakLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,extraAriaContext:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,ariaLabelBuilder:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,eventListener:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,renderOnZeroPageCount:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,selectedPageRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string}),_defineProperty(PaginationBoxView,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(t){return t},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1}),reactHotLoader=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(PaginationBoxView,"PaginationBoxView","/home/yoan/work/oss/react-paginate/react_components/PaginationBoxView.js"),leaveModule=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},351:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var r,o=a(214);t=a.hmd(t),(r=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0)&&r(t),typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature;var _=o.Z;const i=_;var n,c;(n=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0)&&n.register(_,"default","/home/yoan/work/oss/react-paginate/react_components/index.js"),(c=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0)&&c(t)},923:(t,e,a)=>{var r,o,_;function i(n){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n??c}a.d(e,{m:()=>i}),t=a.hmd(t),(r=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0)&&r(t),typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature,(o=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0)&&o.register(i,"classNameIfDefined","/home/yoan/work/oss/react-paginate/react_components/utils.js"),(_=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0)&&_(t)},703:(t,e,a)=>{var r=a(414);function o(){}function _(){}_.resetWarningCache=o,t.exports=function(){function i(m,E,g,f,P,s){if(s!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return i}i.isRequired=i;var c={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:n,element:i,elementType:i,instanceOf:n,node:i,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:_,resetWarningCache:o};return c.PropTypes=c,c}},697:(t,e,a)=>{t.exports=a(703)()},414:t=>{t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:t=>{t.exports=__WEBPACK_EXTERNAL_MODULE__98__}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(e!==void 0)return e.exports;var a=__webpack_module_cache__[t]={id:t,loaded:!1,exports:{}};return __webpack_modules__[t](a,a.exports,__webpack_require__),a.loaded=!0,a.exports}__webpack_require__.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(t,e)=>{for(var a in e)__webpack_require__.o(e,a)&&!__webpack_require__.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},__webpack_require__.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),__webpack_require__.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__(351);return __webpack_exports__})()})})(reactPaginate);const ReactPaginate=getDefaultExportFromCjs(reactPaginate.exports);let getRandomValues;const rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const byteToHex=[];for(let t=0;t<256;++t)byteToHex.push((t+256).toString(16).slice(1));function unsafeStringify(t,e=0){return(byteToHex[t[e+0]]+byteToHex[t[e+1]]+byteToHex[t[e+2]]+byteToHex[t[e+3]]+"-"+byteToHex[t[e+4]]+byteToHex[t[e+5]]+"-"+byteToHex[t[e+6]]+byteToHex[t[e+7]]+"-"+byteToHex[t[e+8]]+byteToHex[t[e+9]]+"-"+byteToHex[t[e+10]]+byteToHex[t[e+11]]+byteToHex[t[e+12]]+byteToHex[t[e+13]]+byteToHex[t[e+14]]+byteToHex[t[e+15]]).toLowerCase()}const randomUUID=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),native={randomUUID};function v4(t,e,a){if(native.randomUUID&&!e&&!t)return native.randomUUID();t=t||{};const r=t.random||(t.rng||rng)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){a=a||0;for(let o=0;o<16;++o)e[a+o]=r[o];return e}return unsafeStringify(r)}const itemsPerPage=20,SearchPage=()=>{const[t,e]=React.useState(1),[a,r]=React.useState(tmdbApi.getMovieList(listType.TRENDING,t)),[o,_]=React.useState(""),{data:i,error:n}=useSWR(a,fetcher),c=()=>{r(o?tmdbApi.getSearch(o,t):tmdbApi.getMovieList(listType.TRENDING,t))};React.useEffect(()=>{c()},[t]);const m=!i&&!n,E=i?.results||[],[g,f]=React.useState(0),[P,s]=React.useState(0);React.useEffect(()=>{!i||!i.total_results||f(Math.ceil(i.total_results/itemsPerPage))},[i,P]);const l=p=>{const d=p.selected*itemsPerPage%i.total_results;s(d),e(p.selected+1)};return jsxs(react.exports.Fragment,{children:[jsxs("div",{className:"mb-4 flex page-container h-[35px]",children:[jsx("input",{type:"text",className:"w-full bg-slate-800 p-2 rounded-l-lg text-white outline-none",placeholder:"Search here...",onChange:p=>_(p.target.value)}),jsx(Button,{className:"w-14",onClick:c,children:jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-search bg-primary text-white w-full h-full \r p-1 rounded-r-lg",width:"30",height:"30",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),jsx("circle",{cx:"10",cy:"10",r:"7"}),jsx("line",{x1:"21",y1:"21",x2:"15",y2:"15"})]})})]}),jsx("section",{className:"page-container mb-10",children:m?jsx(Fragment,{children:new Array(itemsPerPage).fill(0).map(()=>jsx(SearchPageSkeleton,{},v4()))}):jsxs(Fragment,{children:[jsx("h2",{className:"capitalize text-white font-bold text-2xl mb-3",children:E.length>0?"Search results:":"There is no film matches..."}),jsx("div",{className:"grid grid-cols-4 gap-10",children:E.length>0&&E.map(p=>jsx(MovieItem,{data:p},p.id))}),jsx("div",{className:"page-container mt-10 text-white mb-5",children:jsx(ReactPaginate,{breakLabel:"...",nextLabel:"next >",onPageChange:l,pageRangeDisplayed:5,pageCount:g,previousLabel:"< previous",renderOnZeroPageCount:null,className:"pagination flex items-center justify-center gap-x-5"})})]})})]})},SearchPageSkeleton=()=>jsxs(react.exports.Fragment,{children:[jsx(LoadingSkeleton,{className:"w-[15%] h-[20px] mb-3"}),jsxs("div",{className:"grid grid-cols-4 gap-10",children:[jsx(MovieItemLoadingSkeleton,{}),jsx(MovieItemLoadingSkeleton,{}),jsx(MovieItemLoadingSkeleton,{}),jsx(MovieItemLoadingSkeleton,{})]}),jsx("div",{className:"page-container mt-10 text-white mb-5 flex justify-center",children:jsx(LoadingSkeleton,{className:"w-[40%] h-[15px] rounded-lg"})})]});export{SearchPage as default};
