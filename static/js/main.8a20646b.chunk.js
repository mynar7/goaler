(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){},169:function(e,t,n){},204:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(30),c=n.n(i),s=(n(88),n(48)),u=n.n(s),l=n(71),h=n(11),p=n(14),m=n(16),f=n(15),d=n(17),g=n(81),b=o.a.createContext(null),O=b,j=n(32),E=n.n(j),v=(n(99),n(101),{apiKey:"AIzaSyD-JApoTn3FGcYz4dBjO48jQ5nMOQHiRZc",authDomain:"goaler-8f0dc.firebaseapp.com",databaseURL:"https://goaler-8f0dc.firebaseio.com",projectId:"goaler-8f0dc",storageBucket:"goaler-8f0dc.appspot.com",messagingSenderId:"564932997783"}),y=function e(){var t=this;Object(h.a)(this,e),this.signIn=function(){var e=new j.auth.GoogleAuthProvider;return t.auth.signInWithRedirect(e).catch(function(e){return console.log(e)})},this.logout=function(){return t.auth.signOut()},this.redirect=function(){return t.auth.getRedirectResult()},this.initializeUser=function(e){t.goalsRef=t.db.collection("users/".concat(e,"/goals"))},E.a.initializeApp(v),this.auth=E.a.auth(),this.db=E.a.firestore();this.db.settings({timestampsInSnapshots:!0}),this.userRef=null},w=n(219),k=n(218),I=n(217),C=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.user&&this.props.history.push("/")}},{key:"render",value:function(){return o.a.createElement("h2",null,"Login works!")}}]),t}(r.Component),S=(n(106),n(72)),R=n.n(S),x=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"loading"},o.a.createElement(R.a,{color:"secondary",size:200}))}}]),t}(r.Component),z=n(216),A=n(74),M=n.n(A),D=n(75),N=n.n(D),B=n(77),T=n.n(B),G=n(38),J=n.n(G),P=n(76),U=n.n(P),W=(n(169),function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement(M.a,{position:"static"},o.a.createElement(N.a,{className:"row"},o.a.createElement(z.a,{to:"/"},o.a.createElement(J.a,{color:"inherit","aria-label":"Menu"},o.a.createElement(U.a,null),o.a.createElement(T.a,{variant:"h6",color:"inherit"},"Goaler"))),o.a.createElement("div",null,this.props.user?o.a.createElement(J.a,{color:"inherit",onClick:this.props.logout},"Sign Out"):o.a.createElement(J.a,{color:"inherit",onClick:this.props.login},"Sign In")))))}}]),t}(r.Component)),F=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("h3",null,"Dashboard")}}]),t}(o.a.Component),L=(n(204),function(e){var t=e.component,n=e.user,a=Object(g.a)(e,["component","user"]);return o.a.createElement(w.a,Object.assign({},a,{render:function(e){return n?o.a.createElement(t,Object.assign({},e,a,{user:n})):o.a.createElement(k.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),Q=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).componentDidMount=function(){n.props.firebase.auth.onAuthStateChanged(function(e){e?(n.setState({user:e,loading:!1}),n.props.firebase.initializeUser(e.uid)):n.setState({user:null,loading:!1})})},n.signIn=Object(l.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.firebase.signIn();case 2:t=e.sent,n.setState({user:t.user});case 4:case"end":return e.stop()}},e,this)})),n.signOut=function(){n.props.firebase.logout()},n.state={user:null,loading:!0,from:null},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(I.a,null,o.a.createElement(o.a.Fragment,null,this.state.loading?o.a.createElement(x,null):o.a.createElement("div",{className:"App"},o.a.createElement(W,{user:this.state.user,login:this.signIn,logout:this.signOut}),o.a.createElement(w.a,{path:"/login",render:function(t){return o.a.createElement(C,Object.assign({},t,{user:e.state.user}))}}),o.a.createElement(L,{user:this.state.user,exact:!0,path:"/",component:F}))))}}]),t}(r.Component),H=(a=Q,function(e){return o.a.createElement(b.Consumer,null,function(t){return o.a.createElement(a,Object.assign({},e,{firebase:t}))})}),K=n(31),V=n(80),Y=n.n(V),Z=n(78),$=n.n(Z),q=n(79),X=n.n(q),_=n(47),ee=n.n(_),te=Object(K.createMuiTheme)({palette:{type:"dark",primary:{main:$.a[900]},secondary:{main:X.a[400]},error:ee.a,contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0}});n(212),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O.Provider,{value:new y},o.a.createElement(K.MuiThemeProvider,{theme:te},o.a.createElement(Y.a,null),o.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,n){e.exports=n(215)},88:function(e,t,n){}},[[83,2,1]]]);
//# sourceMappingURL=main.8a20646b.chunk.js.map