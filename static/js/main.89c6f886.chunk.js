(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a.p+"static/media/darts.9832dd2d.jpeg"},164:function(e,t,a){e.exports=a(384)},169:function(e,t,a){},187:function(e,t,a){},264:function(e,t,a){},267:function(e,t,a){},278:function(e,t,a){},287:function(e,t,a){},358:function(e,t,a){},360:function(e,t,a){},362:function(e,t,a){},369:function(e,t,a){},371:function(e,t,a){},374:function(e,t,a){},376:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),l=a.n(o),c=(a(169),a(89)),i=a.n(c),s=a(131),u=a(11),m=a(12),p=a(15),d=a(13),h=a(14),g=a(69),f=r.a.createContext(null),E=function(e){return function(t){return r.a.createElement(f.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},b=f,v=a(50),O=a.n(v),j=(a(180),a(182),{apiKey:"AIzaSyD-JApoTn3FGcYz4dBjO48jQ5nMOQHiRZc",authDomain:"goaler-8f0dc.firebaseapp.com",databaseURL:"https://goaler-8f0dc.firebaseio.com",projectId:"goaler-8f0dc",storageBucket:"goaler-8f0dc.appspot.com",messagingSenderId:"564932997783"}),y=function e(){var t=this;Object(u.a)(this,e),this.signIn=function(){var e=new v.auth.GoogleAuthProvider;return t.auth.signInWithRedirect(e).catch(function(e){return console.log(e)})},this.logout=function(){return t.auth.signOut()},this.redirect=function(){return t.auth.getRedirectResult()},this.initializeUser=function(e){t.goalsRef=t.db.collection("users/".concat(e,"/goals")),t.settingsRef=t.db.collection("users/".concat(e,"/settings"))},O.a.initializeApp(j),this.auth=O.a.auth(),this.db=O.a.firestore();this.db.settings({timestampsInSnapshots:!0})},C=a(386),w=a(388),k=a(387),S=a(159),D=a.n(S),M=a(45),T=a.n(M),N=a(134),x=a.n(N),A=a(27),I=a.n(A),H=a(31),P=a.n(H),R=a(132),F=a.n(R),L=(a(187),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.user&&this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{className:"login-titleCard"},r.a.createElement(x.a,{component:"img",alt:"Inspirational Goal Image",image:F.a}),r.a.createElement("div",{className:"login-titleCard_container"},r.a.createElement(I.a,{variant:"h2",className:"login-titleCard_title",gutterBottom:!0},"Welcome to ",r.a.createElement("strong",null,"GOALER")),r.a.createElement(I.a,{variant:"h5",align:"right",className:"login-titleCard_subtitle",gutterBottom:!0},"Track your goals."),r.a.createElement(I.a,{variant:"h5",align:"right",className:"login-titleCard_subtitle",gutterBottom:!0},"Get more things done."),r.a.createElement(I.a,{variant:"h5",align:"right",className:"login-titleCard_actionCall",gutterBottom:!0},r.a.createElement(P.a,{variant:"contained",color:"secondary"},"Sign in"),"\xa0with Google"))))}}]),t}(n.Component)),G=(a(264),a(135)),U=a.n(G),B=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.status?r.a.createElement("div",{className:"loading"},r.a.createElement(U.a,{color:"secondary",size:200})):this.props.children)}}]),t}(n.Component),W=a(385),V=a(136),z=a.n(V),Y=a(137),J=a.n(Y),q=a(38),K=a.n(q),Q=a(88),$=a.n(Q),X=a(138),_=a.n(X),Z=(a(267),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(z.a,{position:"static",className:"header"},r.a.createElement(J.a,{className:"row"},r.a.createElement(W.a,{to:"/"},r.a.createElement(P.a,{color:"inherit","aria-label":"Logo"},r.a.createElement($.a,null),r.a.createElement(I.a,{variant:"h6",color:"inherit"},"Goaler"))),r.a.createElement("div",null,this.props.user?r.a.createElement(K.a,{color:"inherit",onClick:this.props.toggleDrawer},r.a.createElement(_.a,null)):r.a.createElement(P.a,{color:"inherit",onClick:this.props.login},"Sign In")))))}}]),t}(n.Component)),ee=a(142),te=a.n(ee),ae=a(48),ne=a.n(ae),re=a(34),oe=a.n(re),le=a(36),ce=a.n(le),ie=a(143),se=a.n(ie),ue=a(141),me=a.n(ue),pe=a(140),de=a.n(pe),he=a(139),ge=a.n(he),fe=a(29),Ee=a.n(fe),be=a(389),ve=(a(278),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).navigate=function(e){a.props.history.push(e),a.props.toggleDrawer()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(ne.a,{className:"mainmenu"},r.a.createElement(oe.a,{button:!0,onClick:function(){return e.navigate("/about")}},r.a.createElement(ce.a,null,r.a.createElement(ge.a,null)),r.a.createElement(Ee.a,{primary:"About"})),r.a.createElement(oe.a,{button:!0,onClick:function(){return e.navigate("/")}},r.a.createElement(ce.a,null,r.a.createElement(de.a,null)),r.a.createElement(Ee.a,{primary:"Goals"})),r.a.createElement(oe.a,{button:!0,onClick:function(){return e.navigate("/settings")}},r.a.createElement(ce.a,null,r.a.createElement(me.a,null)),r.a.createElement(Ee.a,{primary:"Settings"})),r.a.createElement(te.a,null),r.a.createElement(oe.a,{button:!0,onClick:this.props.logout},r.a.createElement(ce.a,null,r.a.createElement(se.a,null)),r.a.createElement(Ee.a,{primary:"Sign Out"})))}}]),t}(n.Component)),Oe=Object(be.a)(ve),je=a(90),ye=a(157),Ce=a.n(ye),we=a(158),ke=a.n(we),Se=a(91),De=a(93),Me=a(67),Te=a(32),Ne=a.n(Te),xe=a(146),Ae=a.n(xe),Ie=a(149),He=a.n(Ie),Pe=a(49),Re=a.n(Pe),Fe=a(145),Le=a.n(Fe),Ge=a(148),Ue=a.n(Ge),Be=a(147),We=a.n(Be),Ve=a(71),ze=a.n(Ve),Ye=a(28),Je=(a(287),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(Me.a)({},e,t.target.value))}},a.validate=function(){var e=!1,t="",n=!1,r="",o=!1,l="";a.state.name||(e=!0,t="Please set a goal"),a.state.date||(n=!0,r="Please set a date"),a.state.time||(o=!0,l="Please set a time");var c=new Date,i="".concat(a.state.date," ").concat(a.state.time).split(/[- :]/).map(function(e){return Number(e)});i[1]--;var s=Object(Se.a)(Date,Object(De.a)(i));return s.getTime()<c.getTime()&&(s.toDateString()!==c.toDateString()?(n=!0,r="Date must be in future"):(o=!0,l="Time must be in future")),a.setState({nameErr:e,nameHelper:t,dateErr:n,dateHelper:r,timeErr:o,timeHelper:l}),!!(o||n||e)},a.handleSubmit=function(){if(!a.validate()){var e="".concat(a.state.date," ").concat(a.state.time).split(/[- :]/).map(function(e){return Number(e)});e[1]--;var t=Object(Se.a)(Date,Object(De.a)(e)),n=(new Date).getTime();a.props.initialState?a.props.firebase.goalsRef.doc(a.props.initialState.id).update({goal:a.state.name,date:t.getTime(),completed:!1,updatedAt:n}).then(function(){a.props.toggleModal()}):a.props.firebase.goalsRef.add({goal:a.state.name,date:t.getTime(),completed:!1,createdAt:n,updatedAt:n}).then(function(){a.props.toggleModal()})}},a.now=new Date;var n,r=new Date(a.now.getTime()+6e4),o=function(e){return e<10?"0"+e:e};if(a.today="".concat(a.now.getFullYear(),"-").concat(o(a.now.getMonth()+1),"-").concat(o(a.now.getDate())),a.maxDate="".concat(a.now.getFullYear()+10,"-").concat(o(a.now.getMonth()+1),"-").concat(o(a.now.getDate())),a.currentTime="".concat(o(r.getHours()),":").concat(o(r.getMinutes())),a.props.initialState){var l=a.props.initialState.date,c=a.today,i=a.currentTime;if(l>a.now.getTime()){var s=new Date(l);c="".concat(s.getFullYear(),"-").concat(o(s.getMonth()+1),"-").concat(o(s.getDate())),i="".concat(o(s.getHours()),":").concat(o(s.getMinutes()))}n={name:a.props.initialState.goal,nameErr:!1,nameHelper:"",date:c,dateErr:!1,dateHelper:"",time:i,timeErr:!1,timeHelper:""}}else n={name:"",nameErr:!1,nameHelper:"",date:a.today,dateErr:!1,dateHelper:"",time:a.currentTime,timeErr:!1,timeHelper:""};return a.state=n,a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.name===this.state.name&&t.date===this.state.date&&t.time===this.state.time||this.validate()}},{key:"render",value:function(){return r.a.createElement(T.a,{className:"goalform"},r.a.createElement(Le.a,{avatar:r.a.createElement(Ae.a,{style:{backgroundColor:this.props.theme.palette.secondary.main,color:this.props.theme.palette.text.primary}},r.a.createElement(We.a,null)),title:"Add a goal",action:r.a.createElement(K.a,{onClick:this.props.toggleModal,tabIndex:-1},r.a.createElement(Ue.a,null))}),r.a.createElement(Re.a,null,r.a.createElement(Ne.a,{container:!0,spacing:0},r.a.createElement(Ne.a,{item:!0,xs:12},r.a.createElement(ze.a,{label:"Goal",placeholder:"Make it a good one!",error:this.state.nameErr,value:this.state.name,onChange:this.handleChange("name"),fullWidth:!0,margin:"normal",helperText:this.state.nameHelper})),r.a.createElement(Ne.a,{item:!0,xs:12,md:6},r.a.createElement(ze.a,{label:"Due Date",error:this.state.dateErr,type:"date",value:this.state.date,onChange:this.handleChange("date"),margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},helperText:this.state.dateHelper,InputProps:{inputProps:{min:this.today,max:this.maxDate}}})),r.a.createElement(Ne.a,{item:!0,xs:12,md:6},r.a.createElement(ze.a,{label:"Due Time",error:this.state.timeErr,type:"time",value:this.state.time,onChange:this.handleChange("time"),margin:"normal",fullWidth:!0,helperText:this.state.timeHelper,InputLabelProps:{shrink:!0}})))),r.a.createElement(He.a,{className:"row right"},r.a.createElement(P.a,{onClick:this.handleSubmit},this.props.initialState?"Update":"Add"," Goal"),r.a.createElement(P.a,{onClick:this.props.toggleModal},"Cancel")))}}]),t}(n.Component)),qe=Object(Ye.withTheme)()(E(Je)),Ke=a(150),Qe=a.n(Ke),$e=a(154),Xe=a.n($e),_e=a(92),Ze=a.n(_e),et=a(152),tt=a.n(et),at=a(151),nt=a.n(at),rt=a(153),ot=a.n(rt),lt=a(155),ct=a.n(lt),it=a(156),st=a.n(it),ut=(a(358),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).checkTime=function(){return a.props.date-(new Date).getTime()},a.updateTime=function(){if(!a.unMounting){var e,t=a.checkTime();e=!(t<0),t=Math.abs(t);var n=Math.floor(t/1e3)%60,r=Math.floor(t/1e3/60)%60,o=Math.floor(t/1e3/3600)%24,l=Math.floor(t/1e3/3600/24);l=l<10?"0"+l:l.toString(),o=o<10?"0"+o:o.toString(),r=r<10?"0"+r:r.toString(),n=n<10?"0"+n:n.toString(),a.setState({time:{days:l,hours:o,minutes:r,seconds:n},counting:e}),requestAnimationFrame(a.updateTime)}},a.unMounting=!1;var n=a.checkTime();return a.state={time:{},counting:n>0,classes:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.date!==this.props.date&&this.updateTime()}},{key:"componentDidMount",value:function(){this.props.date&&this.updateTime()}},{key:"componentWillUnmount",value:function(){this.unMounting=!0}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.counting?r.a.createElement("span",{className:this.state.classes},"Due in:"," ".concat(this.state.time.days,":")+"".concat(this.state.time.hours,":")+"".concat(this.state.time.minutes,":")+"".concat(this.state.time.seconds)):r.a.createElement("span",{className:"timer-strike"},"Past Due:"," ".concat(this.state.time.days,":")+"".concat(this.state.time.hours,":")+"".concat(this.state.time.minutes,":")+"".concat(this.state.time.seconds)))}}]),t}(r.a.Component)),mt=(a(360),function(e){var t=e.date,a=(new Date).getTime()-t,n=new Date(t);return r.a.createElement("span",{className:a>0?"timedue":""},"Due: ",n.toLocaleString())}),pt=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).updateTime=function(){var e=new Date(a.props.updated),t=new Date(a.props.created),n=new Date(a.props.completed);a.props.completed?a.setState({timeStatus:"completed",completed:"Completed: "+n.toLocaleString()}):a.props.updated===a.props.created?a.setState({timeStatus:"created",created:"Created: "+t.toLocaleString()}):a.setState({timeStatus:"updated",updated:"Updated: "+e.toLocaleString(),created:"Created: "+t.toLocaleString()})},a.renderSpans=function(){switch(a.state.timeStatus){case"completed":return r.a.createElement("span",null,a.state.completed);case"created":return r.a.createElement("span",null,a.state.created);case"updated":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,a.state.updated));default:return}},a.state={created:"",updated:"",completed:"",timeStatus:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){e!==this.props&&this.updateTime()}},{key:"componentDidMount",value:function(){this.updateTime()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderSpans())}}]),t}(n.Component),dt=function(e){function t(e){var a;Object(u.a)(this,t),a=Object(p.a)(this,Object(d.a)(t).call(this,e));var n=e.completed-e.updated,r=Math.round(n/1e3)%60,o=Math.floor(n/1e3/60)%60,l=Math.floor(n/1e3/3600)%24,c=Math.floor(n/1e3/3600/24);return a.days=c<10?"0"+c:c.toString(),a.hours=l<10?"0"+l:l.toString(),a.minutes=o<10?"0"+o:o.toString(),a.seconds=r<10?"0"+r:r.toString(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Completed in: ".concat(this.days,":").concat(this.hours,":").concat(this.minutes,":").concat(this.seconds)),r.a.createElement("br",null))}}]),t}(n.Component),ht=(a(362),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleMenuClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.handleCompleteToggle=function(){var e=(new Date).getTime(),t=!a.props.goal.completed;a.props.firebase.goalsRef.doc(a.props.goal.id).update({completed:t,completedAt:t?e:null});var n=a.props.firebase.settingsRef.doc("completedCount");n.get().then(function(e){var a,r=e.data();(a=t?r.count+1:r.count-1)<0&&(a=0),n.set({count:a})})},a.triggerModal=function(){a.props.toggleModal({goal:a.props.goal.goal,date:a.props.goal.date,id:a.props.goal.id}),a.handleClose()},a.handleDelete=function(){a.props.firebase.goalsRef.doc(a.props.goal.id).delete(),a.handleClose()},a.toggleTimeView=function(){a.setState({timeView:!a.state.timeView})},a.state={anchorEl:null,timeView:!0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=Boolean(e);return r.a.createElement(oe.a,{button:!0,onClick:this.toggleTimeView},this.state.timeView?r.a.createElement(Ee.a,{primary:this.props.goal.goal,secondary:this.props.goal.completed?r.a.createElement(pt,{completed:this.props.goal.completedAt}):r.a.createElement(ut,{date:this.props.goal.date}),primaryTypographyProps:{style:{width:"80%"},className:this.props.goal.completed?"goalitem-strike":""},secondaryTypographyProps:{color:"error"}}):r.a.createElement(Ee.a,{primary:this.props.goal.goal,secondary:this.props.goal.completed?r.a.createElement(r.a.Fragment,null,r.a.createElement(dt,{completed:this.props.goal.completedAt,updated:this.props.goal.updatedAt})):r.a.createElement(r.a.Fragment,null,r.a.createElement(mt,{date:this.props.goal.date}),r.a.createElement("br",null)),primaryTypographyProps:{style:{width:"80%"},className:this.props.goal.completed?"goalitem-strike":""},secondaryTypographyProps:{color:"error"}}),r.a.createElement(Qe.a,null,r.a.createElement(K.a,{onClick:this.handleCompleteToggle},this.props.goal.completed?r.a.createElement(nt.a,{color:"secondary"}):r.a.createElement(tt.a,null)),r.a.createElement(K.a,{onClick:this.handleMenuClick},r.a.createElement(ot.a,null)),r.a.createElement(Xe.a,{id:"long-menu",anchorEl:e,open:t,onClose:this.handleClose},!this.props.goal.completed&&r.a.createElement(Ze.a,{onClick:this.triggerModal},r.a.createElement(ce.a,null,r.a.createElement(ct.a,{color:"inherit"})),r.a.createElement(Ee.a,{inset:!0,primary:"Edit"})),r.a.createElement(Ze.a,{onClick:this.handleDelete},r.a.createElement(ce.a,null,r.a.createElement(st.a,{nativeColor:this.props.theme.palette.warn[500]})),r.a.createElement(Ee.a,{inset:!0,primary:"Delete"})))))}}]),t}(n.Component)),gt=Object(Ye.withTheme)()(E(ht)),ft=a(68),Et=a.n(ft),bt=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).update=function(){if(!a.unmounting){var e=(new Date).toLocaleString("en-US",a.options);e!==a.state.time&&a.setState({time:e}),requestAnimationFrame(a.update)}},a.d=new Date,a.options={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},a.state={time:a.d.toLocaleString("en-US",a.options)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){this.unmounting=!0}},{key:"render",value:function(){return r.a.createElement(Et.a,{color:"secondary",label:this.state.time})}}]),t}(n.Component),vt=E(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={completeCount:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.firebase.db.collection("users/".concat(this.props.uid,"/settings")).doc("completedCount");t.onSnapshot(function(a){if(a.exists){var n=a.data();e.setState({completeCount:n.count})}else t.set({count:0})})}},{key:"render",value:function(){return r.a.createElement(Et.a,{color:"primary",label:"Completed Goals: ".concat(this.state.completeCount)})}}]),t}(n.Component)),Ot=a(64),jt=a.n(Ot),yt=(a(369),function(e){var t=e.children,a=Object(g.a)(e,["children"]);return r.a.createElement(jt.a,Object.assign({},a,{className:"centeredModal"}),t)}),Ct=(a(371),E(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.props.firebase.db.collection("users/".concat(a.props.user.uid,"/goals")).onSnapshot(function(e){var t=[];e.forEach(function(e){return t.push(Object(je.a)({id:e.id},e.data()))}),a.setState({goals:t})}),a.props.firebase.db.collection("users/".concat(a.props.user.uid,"/settings")).onSnapshot(function(e){var t={};e.forEach(function(e){return t[e.id]=Object(je.a)({id:e.id},e.data())}),a.setState({settings:t})})},a.toggleModal=function(e){a.setState({goalModalOpen:!a.state.goalModalOpen,modalState:e&&e.id?e:null})},a.state={goalModalOpen:!1,modalState:void 0,goals:[],settings:{}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dash"},r.a.createElement("div",{className:"dash-items"},r.a.createElement("div",{className:"dash-item"},r.a.createElement(bt,null)),r.a.createElement("div",{className:"dash-item"},r.a.createElement(vt,{uid:this.props.user.uid}))),r.a.createElement(ne.a,null,this.state.goals.sort(function(e,t){var a=e.date-t.date;return e.completed===t.completed?a:e.completed?1:-1}).map(function(t){return r.a.createElement(gt,{key:t.id,goal:t,toggleModal:e.toggleModal})})),r.a.createElement(yt,{open:this.state.goalModalOpen,onClose:this.toggleModal},r.a.createElement(qe,{toggleModal:this.toggleModal,initialState:this.state.modalState})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Ce.a,{color:"secondary",variant:"extended","aria-label":"Add",id:"dash-addBtn",onClick:this.toggleModal},r.a.createElement(ke.a,null)))}}]),t}(r.a.Component))),wt=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Settings Works!")}}]),t}(n.Component),kt=(a(374),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement(Ne.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(Ne.a,{item:!0,xs:12,lg:8},r.a.createElement(T.a,{className:"about-card"},r.a.createElement(Re.a,null,r.a.createElement(I.a,{variant:"h4",align:"center"},"Thanks for using Goaler!"),r.a.createElement("br",null),r.a.createElement(I.a,{variant:"h5",align:"center"},"Contact me ",r.a.createElement("a",{href:"mailto:leewarrick@gmail.com",rel:"noopener noreferrer",target:"_BLANK"},"here")),r.a.createElement("br",null),r.a.createElement(I.a,{variant:"h6",align:"center"},"\xa9 Lee Warrick 2019. All Rights Reserved."))))))}}]),t}(n.Component)),St=(a(376),function(e){var t=e.component,a=e.user,n=Object(g.a)(e,["component","user"]);return r.a.createElement(C.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({},e,n,{user:a})):r.a.createElement(w.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),Dt=E(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.props.firebase.auth.onAuthStateChanged(function(e){e?(a.setState({user:e,loading:!1}),a.props.firebase.initializeUser(e.uid)):a.setState({user:null,loading:!1})})},a.signIn=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.firebase.signIn();case 2:t=e.sent,a.setState({user:t.user});case 4:case"end":return e.stop()}},e,this)})),a.signOut=function(){a.props.firebase.logout(),a.toggleDrawer()},a.toggleDrawer=function(){a.setState({drawer:!a.state.drawer})},a.state={user:null,loading:!0,from:null,drawer:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(k.a,{basename:"/Goaler"},r.a.createElement(B,{status:this.state.loading},r.a.createElement("div",{className:"App"},r.a.createElement(Z,{user:this.state.user,login:this.signIn,toggleDrawer:this.toggleDrawer}),r.a.createElement(D.a,{anchor:"right",open:this.state.drawer,onClose:this.toggleDrawer},r.a.createElement(Oe,{logout:this.signOut,toggleDrawer:this.toggleDrawer})),r.a.createElement(C.a,{path:"/login",render:function(t){return r.a.createElement(L,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(St,{user:this.state.user,exact:!0,path:"/about",component:kt}),r.a.createElement(St,{user:this.state.user,exact:!0,path:"/",component:Ct}),r.a.createElement(St,{user:this.state.user,exact:!0,path:"/settings",component:wt}))))}}]),t}(n.Component)),Mt=a(163),Tt=a.n(Mt),Nt=a(160),xt=a.n(Nt),At=a(161),It=a.n(At),Ht=a(162),Pt=a.n(Ht),Rt=a(87),Ft=a.n(Rt),Lt=Object(Ye.createMuiTheme)({palette:{type:"dark",primary:{main:xt.a[900]},secondary:{main:It.a[400]},error:Pt.a,warn:Ft.a,contrastThreshold:3,tonalOffset:.5},typography:{useNextVariants:!0}});a(381),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b.Provider,{value:new y},r.a.createElement(Ye.MuiThemeProvider,{theme:Lt},r.a.createElement(Tt.a,null),r.a.createElement(Dt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[164,2,1]]]);
//# sourceMappingURL=main.89c6f886.chunk.js.map