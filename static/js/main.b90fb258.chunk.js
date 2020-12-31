(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{23:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),a=t(9),c=t.n(a),i=(t(23),t(15)),l=t(10),s=t(11),u=t(17),d=t(16),f=t(2),b=t(3),h={mainColor:"#387ef5",colors:["#5d5768","#53c4ff","#ff3333","#0A33ff"]};function j(){var n=Object(f.a)(["\n    display:none;\n    &:checked + label{\n        border: 1px solid #fff;\n    }\n"]);return j=function(){return n},n}function p(){var n=Object(f.a)(["\n    display:inline-block;\n    width: 30px;\n    height: 30px;\n    margin-top: .5rem;\n    background-color: ",";\n    border-radius: 5px;\n"]);return p=function(){return n},n}var m=b.b.label(p(),(function(n){return n.color})),k=b.b.input(j()),x=function(n){var e=n.color,t=n.handleChangeColor,o=n.isChecked;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{defaultChecked:o,id:e,type:"radio",name:"color",onChange:function(){return t(e)}}),"     ",Object(r.jsx)(m,{htmlFor:e,color:e})]})},g=t(4);function O(){var n=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    aling-items: center;\n    width: 150px;\n    margin: 0 auto .5rem;\n"]);return O=function(){return n},n}function v(){var n=Object(f.a)(["\n    background-color: transparent;\n    border: 1px solid ",";\n    border-radius: 5px;\n    color: ",";\n    padding: .3rem .5rem;\n    cursor: pointer;\n    outline: none;\n\n    &:hover{\n        background-color: ",";\n        color:#222;\n    }\n"]);return v=function(){return n},n}function C(){var n=Object(f.a)(["\nborder: none;\nborder-bottom: 1px solid ",";\nbackground: none;\noutline: none;\ncolor: ",";\n"]);return C=function(){return n},n}var y=b.b.input(C(),h.mainColor,h.mainColor),S=b.b.button(v(),h.mainColor,h.mainColor,h.mainColor),T=b.b.div(O()),w=function(n){var e=n.handleChangeColor,t=n.handleSubmit,o=n.colorSelected;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)(y,{name:"title",type:"text"}),Object(r.jsx)(T,{children:h.colors.map((function(n){return Object(r.jsx)(x,{handleChangeColor:e,color:n,isChecked:o===n},Object(g.a)())}))}),Object(r.jsx)(S,{children:"Add Task"})]})};function D(){var n=Object(f.a)(["\n    color:#fff;\n    text-decoration: ","; //no funca\n"]);return D=function(){return n},n}function A(){var n=Object(f.a)(["\n    font-size:.8rem;\n    background-color:transparent;\n    border: 1px solid #fff;\n    color:#fff;\n    padding: .3rem .5rem;\n    border-radius: 10px;\n    cursor: pointer;\n    outline: none;\n\n    &:hover{\n        background-color: #fff;\n        color: #222;\n    }\n"]);return A=function(){return n},n}function F(){var n=Object(f.a)(["\n    display:grid;\n    grid-template-columns: 30px 1fr 50px;\n    justify-items:start;\n    align-items:center;\n    padding: 0 1rem;\n    background-color:",";\n    width:100%;\n    max-width:250px;\n    margin: 1rem auto;\n    border-radius: 5px;\n"]);return F=function(){return n},n}var J=b.b.div(F(),(function(n){return n.color})),N=b.b.button(A()),z=b.b.p(D(),(function(n){return n.done?"line-through":"none"})),B=function(n){var e=n.color,t=n.title,o=n.done,a=n.handleCompleteTask,c=n.handleDeleteTask;return Object(r.jsxs)(J,{color:e,children:[Object(r.jsx)("input",{type:"checkbox",onChange:a,defaultChecked:o}),Object(r.jsx)(z,{done:o,children:t}),Object(r.jsx)(N,{onClick:c,children:"Delete"})]})};function E(){var n=Object(f.a)(["\n    body{\n        font-family: sans-serif;\n        background-color:#222;\n        color:",";\n        text-align: center;\n        margin:0px; \n    }\n"]);return E=function(){return n},n}var I=Object(b.a)(E(),h.mainColor),q=function(n){Object(u.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))).state={colorSelected:h.colors[0],tasks:[{title:"aprender firebase",color:h.colors[0],done:!1}]},n.handleSubmit=function(e){e.preventDefault(),""!==e.target.title.value.trim()&&(n.createNewTask(e.target.title.value),e.target.title.value="")},n.createNewTask=function(e){var t={id:Object(g.a)(),title:e,color:n.state.colorSelected,done:!1},r=[].concat(Object(i.a)(n.state.tasks),[t]);n.setState({tasks:r})},n.getTask=function(e){return n.state.tasks.find((function(n){return n.id===e}))},n.handleCompleteTasks=function(e){var t=n.state.tasks,r=n.getTask(e),o=t.indexOf(r);t[o].done=!t[o].done,n.setState({tasks:t})},n.handleDeleteTask=function(e){var t=n.state.tasks;t=t.filter((function(n){return n.id!==e})),n.setState({tasks:t})},n.handleChangeColor=function(e){n.setState({colorSelected:e})},n}return Object(s.a)(t,[{key:"render",value:function(){var n=this,e=this.state,t=e.colorSelected,o=e.tasks;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(I,{}),Object(r.jsx)("h1",{children:"To do list"}),Object(r.jsx)(w,{handleChangeColor:this.handleChangeColor,handleSubmit:this.handleSubmit,colorSelected:t}),0===this.state.tasks.length&&Object(r.jsx)("h2",{children:"not tasks yet"}),Object(r.jsx)("div",{children:o.map((function(e){return Object(r.jsx)(B,{done:e.done,title:e.title,color:e.color,handleCompleteTasks:function(){return n.handleCompleteTasks(e.id)},handleDeleteTask:function(){return n.handleDeleteTask(e.id)}},Object(g.a)())}))})]})}}]),t}(o.Component);c.a.render(Object(r.jsx)(q,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.b90fb258.chunk.js.map