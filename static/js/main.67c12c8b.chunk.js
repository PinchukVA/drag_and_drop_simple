(this.webpackJsonpdrag_and_drop=this.webpackJsonpdrag_and_drop||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(6),c=n.n(a),o=n(3),i=(n(21),n(22),n(23),n(5)),s=(n(24),function(e){return{type:"SET_DRAG_ITEM",payload:e}}),u=function(e){return{type:"SET_IS_DOWN",payload:e}},l=function(e){return{type:"SET_ITEMS_AT_CANVAS",payload:e}},f=function(e){return{type:"SET_START_MOVE",payload:e}},d=n(1);var v=function(){var e=Object(r.useRef)(),t=Object(o.b)(),n=Object(o.c)((function(e){return e.Reducer})),a=n.styleItemToAdd,c=n.itemToAddDX,v=n.startMoveCoordinate,b=n.itemsAtCanvas,j=n.cursorDown,y=n.itemToDrag,O=function(e,t){e.lineWidth=1,null!==y&&t.id===y.id&&(e.lineWidth=5),"circle"===t.style?function(e,t){e.beginPath(),e.arc(t.x,t.y,35,0,2*Math.PI,!1),e.closePath(),e.fillStyle="#28B463",e.strokeStyle="grey",e.fill(),e.stroke()}(e,t):function(e,t){e.beginPath(),e.rect(t.x,t.y,70,70),e.closePath(),e.fillStyle="#2E86C1",e.strokeStyle="grey",e.fill(),e.stroke()}(e,t)};return Object(r.useEffect)((function(){var t=e.current.getContext("2d");t.clearRect(0,0,e.current.clientWidth,e.current.clientHeight),t.beginPath(),function(e,t){console.log("drawItems"),e.beginPath(),t.forEach((function(t){O(e,t)}))}(t,b)}),[b,y]),Object(r.useEffect)((function(){window.localStorage.setItem("itemsAtCanvas",JSON.stringify(b))}),[b]),Object(d.jsxs)("div",{className:"canvas_wrapper",children:[Object(d.jsx)("h2",{children:"Canvas"}),Object(d.jsx)("canvas",{tabIndex:"0",className:"canvas_item",ref:e,onMouseMove:function(n){if(j&&j&&null!==y){var r=Object(i.a)(b),a=v,c=r.find((function(e){return e.id===y.id})),o=parseInt(n.nativeEvent.offsetX-e.current.clientLeft),s=parseInt(n.nativeEvent.offsetY-e.current.clientTop),u=o-parseInt(a.x),d=s-parseInt(a.y);a.x=o,a.y=s,c.x+=u,c.y+=d,t(f(a)),t(l(r))}},onMouseLeave:function(e){j&&null!==y&&(t({type:"DELETE_ITEM"}),t(u(!1)))},onMouseUp:function(e){t(u(!1))},onMouseDown:function(n){for(var r=n.nativeEvent,a=r.offsetX,c=r.offsetY,o=parseInt(a-e.current.clientLeft),d=parseInt(c-e.current.clientTop),v=Object(i.a)(b),j=function(e){var n=v[e],r=function(e,n,r){var a=!1;if("circle"===r.style){var c=r.x-e,o=r.y-n;c*c+o*o<1225&&(t(s(r)),a=!0)}else e>=r.x&&e<=r.x+70&&n>=r.y&&n<=r.y+70&&(t(s(r)),a=!0);return a}(o,d,n);if(r){var a=v.findIndex((function(e){return e.id===n.id}));return v.splice(a,1),v.push(n),t(f({x:o,y:d})),t(l(v)),t(u(!0)),"break"}},y=0;y<v.length;y++){if("break"===j(y))break}},onKeyUp:function(e){"Delete"===e.key&&null!==y&&t({type:"DELETE_ITEM"})},onDragOver:function(e){e.preventDefault()},onDrop:function(e){var n=a,r=c,o=e.nativeEvent,i=o.offsetX,s=o.offsetY,u=null,l=null;"square"===n?(u=i-r.x,l=s-r.y):(u=i+(35-r.x),l=s+(35-r.y));var f={x:u,y:l,style:n,id:(new Date).valueOf()};t({type:"ADD_NEW_ITEM",payload:f})},width:"700px",height:"500px"})]})};n(26);var b=function(){var e,t=Object(o.c)((function(e){return e.Reducer})).startItems,n=function(e){console.log("handleMouseDown-e",e)};return Object(d.jsxs)("div",{className:"items__wrapper",children:[Object(d.jsx)("h2",{children:"Figures"}),Object(d.jsx)("p",{children:"drag figure to canvas"}),Object(d.jsx)("div",{className:"items__container",children:(e=t,e.map((function(e){return Object(d.jsx)(j,{style:e.style,onMouseDown:n},e.id)})))})]})};n(27);var j=function(e){var t=e.style,n=e.onMouseDown,r=Object(o.b)();return Object(d.jsx)("div",{draggable:!0,onDragStart:function(e){var n=e.nativeEvent,a=n.offsetX,c=n.offsetY;r({type:"SET_DX_ITEM_TO_ADD",payload:{x:a,y:c}}),r(function(e){return{type:"SET_ADD_ITEM",payload:e}}(t))},onMouseDown:n,className:"circle"===t?"item__circle":"item__square"})};var y=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{}),Object(d.jsx)(v,{})]})},O=n(4),p=n(10),_=n(2),T={startItems:[{id:"1c",style:"circle"},{id:"2s",style:"square"}],itemsAtCanvas:JSON.parse(window.localStorage.getItem("itemsAtCanvas"))||[],styleItemToAdd:"",itemToDrag:null,startMoveCoordinate:{x:0,y:0},itemToAddDX:{x:0,y:0},cursorAtItem:!1,cursorDown:!1},E=Object(O.combineReducers)({Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;console.log("Reducer-initialState",T);var n=t.payload;switch(t.type){case"SET_ADD_ITEM":return Object(_.a)(Object(_.a)({},e),{},{styleItemToAdd:n});case"SET_DX_ITEM_TO_ADD":return Object(_.a)(Object(_.a)({},e),{},{itemToAddDX:n});case"SET_DRAG_ITEM":return Object(_.a)(Object(_.a)({},e),{},{itemToDrag:n});case"SET_IS_DOWN":return Object(_.a)(Object(_.a)({},e),{},{cursorDown:n});case"SET_ITEMS_AT_CANVAS":return Object(_.a)(Object(_.a)({},e),{},{itemsAtCanvas:n});case"SET_START_MOVE":return Object(_.a)(Object(_.a)({},e),{},{startMoveCoordinate:n});case"ADD_NEW_ITEM":return Object(_.a)(Object(_.a)({},e),{},{itemsAtCanvas:[].concat(Object(i.a)(e.itemsAtCanvas),[n])});case"DELETE_ITEM":return Object(_.a)(Object(_.a)({},e),{},{itemsAtCanvas:e.itemsAtCanvas.filter((function(t){return t.id!==e.itemToDrag.id})),itemToDrag:{}});default:return Object(_.a)({},e)}}}),D=E,m=Object(O.createStore)(D,Object(p.composeWithDevTools)(Object(O.applyMiddleware)()));c.a.render(Object(d.jsx)(o.a,{store:m,children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.67c12c8b.chunk.js.map