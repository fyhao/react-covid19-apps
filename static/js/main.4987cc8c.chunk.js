(this["webpackJsonpreact-covid19-apps"]=this["webpackJsonpreact-covid19-apps"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(12),i=n.n(s),o=(n(34),n(13)),r=n(14),l=n(16),j=n(15),d=(n(35),n(11)),h=n(6),b=n(58),u=n(28),x=new(n.n(u).a),m=n(2),O=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){x.emit("infomsg",{msg:"test"})},children:"Test"}),Object(m.jsx)(b.a,{color:"danger",children:"Danger!"})]})}}]),n}(c.Component),p=n(51),f=n(52),g=n(53),v=n(54),k=n(55),y=n(56);var C=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsxs)(g.a,{children:[Object(m.jsx)(v.a,{tag:"h5",children:"World Cases Data"}),Object(m.jsx)(k.a,{tag:"h6",className:"mb-2 text-muted",children:"World Cases Description"}),Object(m.jsx)(y.a,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(m.jsx)(b.a,{children:"Button"})]})}),Object(m.jsx)(f.a,{children:Object(m.jsxs)(g.a,{children:[Object(m.jsx)(v.a,{tag:"h5",children:"Card title"}),Object(m.jsx)(k.a,{tag:"h6",className:"mb-2 text-muted",children:"Card subtitle"}),Object(m.jsx)(y.a,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(m.jsx)(b.a,{children:"Button"})]})}),Object(m.jsx)(f.a,{children:Object(m.jsxs)(g.a,{children:[Object(m.jsx)(v.a,{tag:"h5",children:"Card title"}),Object(m.jsx)(k.a,{tag:"h6",className:"mb-2 text-muted",children:"Card subtitle"}),Object(m.jsx)(y.a,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(m.jsx)(b.a,{children:"Button"})]})})]})})},N=n.p+"static/media/logo.6ce24c58.svg";var A=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("img",{src:N,className:"App-logo",alt:"logo"}),Object(m.jsx)("h1",{children:"External"})]})})},S=n(57),B=(n(39),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={infomessage:""},e}return Object(r.a)(n,[{key:"componentWillMount",value:function(){x.on("infomsg",this.onInfomsg,this)}},{key:"componentWillUnmount",value:function(){x.off("infomsg",this.onInfomsg)}},{key:"onInfomsg",value:function(e){this.setState({infomessage:e.msg})}},{key:"render",value:function(){return Object(m.jsx)(d.a,{basename:"/react-covid19-apps",children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"menu",children:[Object(m.jsx)(d.b,{to:"/",children:"Home"}),Object(m.jsx)(d.b,{to:"/about",children:"About"}),Object(m.jsx)(d.b,{to:"/external",children:"External"})]}),null!==this.state.infomessage&&""!==this.state.infomessage&&Object(m.jsx)(S.a,{color:"primary",children:this.state.infomessage}),Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{exact:!0,path:"/",children:Object(m.jsx)(C,{})}),Object(m.jsx)(h.a,{path:"/about",children:Object(m.jsx)(O,{})}),Object(m.jsx)(h.a,{path:"/external",children:Object(m.jsx)(A,{})})]})]})})}}]),n}(c.Component)),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),D()}},[[50,1,2]]]);
//# sourceMappingURL=main.4987cc8c.chunk.js.map