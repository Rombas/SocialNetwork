(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){e.exports={item:"Post_item__TiJ4W"}},14:function(e,t,n){e.exports={nav:"Navbar_nav__2K9S0",item:"Navbar_item__3MyWU",active:"Navbar_active__3rBmG"}},239:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(0),s=n(5),i=(n(1),n(37)),a=n.n(i),c=function(e){return e||"number"===typeof e?void 0:"Required"},o=function(e){var t=e.input,n=(e.label,e.type,e.meta);return Object(r.jsxs)("div",{children:[Object(r.jsx)("textarea",Object(s.a)(Object(s.a)({},t),{},{className:n.touched&&n.error?a.a.error:""})),Object(r.jsx)("div",{children:n.touched&&n.error&&Object(r.jsx)("span",{className:a.a.errorText,children:n.error})})]})},u=function(e){var t=e.input,n=e.label,i=e.type,c=e.meta;return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",Object(s.a)(Object(s.a)({},t),{},{placeholder:n,type:i,className:c.touched&&c.error?a.a.error:""})),Object(r.jsx)("div",{children:c.touched&&c.error&&Object(r.jsx)("span",{className:a.a.errorText,children:c.error})})]})}},282:function(e,t,n){"use strict";n.r(t);var r=n(0),s=(n(90),n(9)),i=n(91),a=n(11),c=n.n(a),o=n(20),u=n(43),l=n(5),j=n(124).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"4be8dcbe-a96b-47b2-adc7-fdd7ab65d62a"}}),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return j.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},d=function(){return j.get("auth/me")},h=function(e){return j.delete("follow/".concat(e))},b=function(e){return j.post("follow/".concat(e))},f=function(e){return j.get("profile/".concat(e))},O=function(e){return j.put("/profile/status",{status:e})},g=function(e){return j.get("/profile/status/".concat(e))},m=function(e){var t=new FormData;return t.append("image",e),j.put("/profile/photo/",t)},v=function(e,t,n){return j.post("/auth/login",{email:e,password:t,rememberMe:n})},x=function(){return j.delete("/auth/login")},w="ADD-POST",S="UPDATE-TEXT-AREA",y="SET-USER-PROFILE",C="SET-USER-STATUS",T="SET-USER-PHOTOS",A={newPostText:"enter",posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It is my first posts",likesCount:20}],profile:null,status:" "},P=function(e){return{type:C,status:e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n={id:5,message:t.postText,likesCount:0};return Object(l.a)(Object(l.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case S:return Object(l.a)(Object(l.a)({},e),{},{newPostText:t.newText});case y:return Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});case C:return Object(l.a)(Object(l.a)({},e),{},{status:t.status});case T:return Object(l.a)(Object(l.a)({},e),{},{profile:Object(l.a)(Object(l.a)({},e.profile),{},{photos:t.photos})});default:return e}},E={friends:[{id:1,name:"Dimych",avatar:"https://vokrug-tv.ru/pic/person/5/5/3/4/5534779888fe3ee25eb750183028cecf.jpeg"},{id:2,name:"Sveta",avatar:"https://drivemusic.club/uploads/artists_images/artists_250/sveta_5.jpg"},{id:3,name:"Sasha",avatar:"https://img.championat.com/c/900x900/news/big/o/l/sasha-grej-provela-strim-v-obraze-princessy-lei-iz-zvjozdnyh-vojn_1588866382278634836.jpg"}]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return e},I="SET-USERS",z="FOLLOW",N="UNFOLLOW",L="SET-CURRENT-PAGE",R="SET-USERS-COUNT",k="TOGGLE-IS-FETCHING",Q="TOGGLE-IS-FOLLOWING",F={users:[],usersCount:30,currentPage:1,portionSize:10,pageSize:10,isFetching:!1,isFollowing:!1,followingToggleList:[]},G=function(e){return{type:z,userID:e}},H=function(e){return{type:N,userID:e}},U=function(e){return{type:I,users:e}},B=function(e){return{type:L,currentPage:e}},X=function(e){return{type:R,usersCount:e}},J=function(e){return{type:k,isFetching:e}},Y=function(e,t){return{type:Q,isFollowing:e,userID:t}},K=function(){var e=Object(o.a)(c.a.mark((function e(t,n,r,s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Y(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(s(n)),t(Y(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID&&(e.followed=!0),e}))});case N:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID&&(e.followed=!1),e}))});case I:return Object(l.a)(Object(l.a)({},e),{},{users:t.users});case L:return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case R:return Object(l.a)(Object(l.a)({},e),{},{usersCount:t.usersCount});case k:return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case Q:return Object(l.a)(Object(l.a)({},e),{},{followingToggleList:t.isFollowing?[].concat(Object(u.a)(e.followingToggleList),[t.userID]):e.followingToggleList.filter((function(e){return e!==t.userID}))});default:return e}},V=n(44),Z="SET-LOGIN-INFO",q={id:null,email:null,login:null,isAuth:!1},_=function(e,t,n,r){return{type:Z,data:{id:e,email:t,login:n,isAuth:r}}},$=function(){return function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r,s,i,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,i=r.email,a=r.login,t(_(s,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(l.a)(Object(l.a)({},e),t.data);default:return e}},te=n(125),ne=n(123),re="SET-INITIALIZED-STATUS",se={initializedStatus:!1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(l.a)(Object(l.a)({},e),{},{initializedStatus:!0});default:return e}},ae=Object(s.c)({dialogsPage:i.b,profilePage:D,navbar:M,usersPage:W,auth:ee,form:ne.a,app:ie}),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,oe=Object(s.e)(ae,ce(Object(s.a)(te.a))),ue=n(1),le=n.n(ue),je=n(63),pe=n.n(je),de=n(29),he=n(30),be=n(32),fe=n(31),Oe=(n(239),n(14)),ge=n.n(Oe),me=n(17),ve=function(e){return Object(r.jsxs)("nav",{className:ge.a.nav,children:[Object(r.jsx)("div",{className:ge.a.item,children:Object(r.jsx)(me.b,{to:"/profile",activeClassName:ge.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:ge.a.item,children:Object(r.jsx)(me.b,{to:"/dialogs",activeClassName:ge.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:ge.a.item,children:Object(r.jsx)(me.b,{to:"/news",activeClassName:ge.a.active,children:"News"})}),Object(r.jsx)("div",{className:ge.a.item,children:Object(r.jsx)(me.b,{to:"/music",activeClassName:ge.a.active,children:"Music"})}),Object(r.jsx)("div",{className:ge.a.item,children:Object(r.jsx)(me.b,{to:"/settings",activeClassName:ge.a.active,children:"Settings"})}),Object(r.jsx)("div",{className:ge.a.item,children:Object(r.jsx)(me.b,{to:"/users",activeClassName:ge.a.active,children:"Users"})})]})},xe=n(10),we=function(e){return Object(r.jsx)("div",{children:"News"})},Se=function(e){return Object(r.jsx)("div",{children:"Music"})},ye=function(e){return Object(r.jsx)("div",{children:"Settings"})},Ce=n(66),Te=n.n(Ce),Ae="data:image/png;base64,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",Pe=n(54),De=function(e){for(var t=e.itemsCount,n=e.pageSize,s=e.currentPage,i=e.getUsers,a=e.portionSize,c=Math.ceil(t/n),o=Math.ceil(c/a),u=Object(ue.useState)(1),l=Object(Pe.a)(u,2),j=l[0],p=l[1],d=[],h=a*j,b=(j-1)*a+1;b<=(h<c?h:c);b++)d.push(b);return Object(r.jsxs)("div",{children:[j>1&&Object(r.jsx)("button",{onClick:function(){return p(j-1)},children:"Prev"}),d.map((function(e){return Object(r.jsxs)("span",{className:e===s?Te.a.current:null,onClick:function(){i(n,e)},children:[e,"."]},e)})),j!==o&&Object(r.jsx)("button",{onClick:function(){return p(j+1)},children:"Next"})]})},Ee=function(e){for(var t=Math.ceil(e.usersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);return Object(r.jsxs)("div",{children:[Object(r.jsx)(De,{currentPage:e.currentPage,getUsers:e.getUsers,itemsCount:e.usersCount,pageSize:e.pageSize,portionSize:e.portionSize}),e.users.map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)(me.b,{to:"profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:Ae,className:Te.a.photo,alt:"avatar"})}),t.followed?Object(r.jsx)("button",{disabled:e.followingToggleList.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:" Unfollow "}):Object(r.jsx)("button",{disabled:e.followingToggleList.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:" Follow "})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.city"}),Object(r.jsx)("div",{children:"user.location.country"})]})]})]},t.id)}))]})},Me=n(12),Ie=n.p+"static/media/grid.56527739.svg",ze=function(e){return Object(r.jsx)("img",{src:Ie,alt:"preloader"})},Ne=n(127),Le=Object(Ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Re=function(e){return e.usersPage.pageSize},ke=function(e){return e.usersPage.usersCount},Qe=function(e){return e.usersPage.currentPage},Fe=function(e){return e.usersPage.isFetching},Ge=function(e){return e.usersPage.followingToggleList},He=function(e){return e.usersPage.portionSize},Ue=function(e){Object(be.a)(n,e);var t=Object(fe.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(he.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(ze,{}):null,Object(r.jsx)(Ee,{usersCount:this.props.usersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,getUsers:this.props.getUsers,toggleIsFollowing:this.props.toggleIsFollowing,followingToggleList:this.props.followingToggleList,isAuth:this.props.isAuth,portionSize:this.props.portionSize})]})}}]),n}(le.a.Component),Be=Object(Me.b)((function(e){return{users:Le(e),pageSize:Re(e),usersCount:ke(e),currentPage:Qe(e),isFetching:Fe(e),portionSize:He(e),followingToggleList:Ge(e),isAuth:e.auth.isAuth}}),{follow:function(e){return function(t){K(t,e,b,G)}},setCurrentPage:B,setUsers:U,setUsersCount:X,toggleIsFetching:J,toggleIsFollowing:Y,unfollow:function(e){return function(t){K(t,e,h,H)}},getUsers:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var n=Object(o.a)(c.a.mark((function n(r){var s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(J(!0)),r(B(t)),n.next=4,p(e,t);case 4:s=n.sent,r(J(!1)),r(U(s.items)),r(X(s.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Ue),Xe=n(128),Je=n.n(Xe),Ye=function(e){var t=Object(ue.useState)(!1),n=Object(Pe.a)(t,2),s=n[0],i=n[1],a=Object(ue.useState)(e.status),c=Object(Pe.a)(a,2),o=c[0],u=c[1];Object(ue.useEffect)((function(){u(e.status)}),[e.status]);return Object(r.jsxs)("div",{children:[!s&&Object(r.jsx)("div",{children:Object(r.jsxs)("span",{onDoubleClick:function(){i(!0)},children:[" ",o||"There is no status"," "]})}),s&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onBlur:function(){i(!1),e.updateUserStatus(o)},autoFocus:!0,onChange:function(e){u(e.currentTarget.value)},value:o})})]})},Ke=n(25),We=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:e.profile.fullName}),Object(r.jsx)("img",{src:e.profile.photos.small?e.profile.photos.small:Ae,alt:"small avatar"}),e.isMyProfile&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"file",onChange:function(t){var n=t.target.files[0];e.uploadPhoto(n)}})}),Object(r.jsx)(Ye,{status:e.status,updateUserStatus:e.updateUserStatus})]})},Ve=n(129),Ze=n.n(Ve),qe=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:Ze.a.item,children:e.message}),Object(r.jsx)("div",{children:Object(r.jsxs)("span",{children:["like ",e.likeCount]})})]})},_e=n(121),$e=n(122),et=Object($e.a)({form:"addPost"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(_e.a,{type:"text",placeholder:"enter your post",validate:[Ke.c],component:Ke.b,name:"postMessage"})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add post"})})]})})),tt=function(e){return Object(r.jsx)(et,{onSubmit:function(t){e.addPostAction(t.postMessage)}})},nt=le.a.memo((function(e){var t=e.posts.map((function(e){return Object(r.jsx)(qe,{message:e.message,likeCount:e.likesCount},e.id)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsx)(tt,{addPostAction:e.addPostAction}),Object(r.jsx)("div",{children:t})]})})),rt=Object(Me.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPostAction:function(e){return{type:w,postText:e}},updateTextAreaAction:function(e){return{type:S,newText:e}}})(nt),st=function(e){return Object(r.jsxs)("div",{className:Je.a.content,children:[Object(r.jsx)(We,{uploadPhoto:e.uploadPhoto,profile:e.profile,status:e.status,isMyProfile:e.isMyProfile,updateUserStatus:e.updateUserStatus}),Object(r.jsx)(rt,{store:e.store})]})},it=function(e){Object(be.a)(n,e);var t=Object(fe.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(he.a)(n,[{key:"updateUserInfo",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userID)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.updateUserInfo()}},{key:"componentDidUpdate",value:function(e,t,n){e.userID!=this.props.match.params.userId&&this.updateUserInfo()}},{key:"render",value:function(){return this.props.profile?Object(r.jsx)(st,{profile:this.props.profile,isAuth:this.props.isAuth,status:this.props.status,updateUserStatus:this.props.updateUserStatus,uploadPhoto:this.props.uploadPhoto,isMyProfile:!this.props.match.params.userId}):Object(r.jsx)(ze,{})}}]),n}(le.a.Component),at=Object(s.d)(Object(Me.b)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth,status:e.profilePage.status,userID:e.auth.id}}),{getUserProfile:function(e){return function(){var t=Object(o.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:r=t.sent,n((s=r.data,{type:y,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(o.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:r=t.sent,n(P(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(o.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===O(e).data.resultCode&&n(P(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},uploadPhoto:function(e){return function(){var t=Object(o.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:0===(r=t.sent).data.resultCode&&n((s=r.data.data.photos,{type:T,photos:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()}}),xe.f)(it),ct=n(89),ot=n.n(ct),ut=function(e){return Object(r.jsxs)("header",{className:ot.a.header,children:[Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/ru/c/cf/\u041b\u043e\u0431\u043e\u0441_\u0423\u041f\u041d\u0424\u041c_%28\u043b\u043e\u0433\u043e%29.png",alt:"logo"}),Object(r.jsx)("div",{className:ot.a.authBar,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.disAuthMeOnSite,children:"LogOut"})]}):Object(r.jsx)("a",{href:"/login",children:"Login"})})]})},lt=function(e){Object(be.a)(n,e);var t=Object(fe.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(he.a)(n,[{key:"render",value:function(){return Object(r.jsx)(ut,Object(l.a)({},this.props))}}]),n}(le.a.Component),jt=Object(Me.b)((function(e){return{isAuth:e.auth.isAuth,id:e.auth.id,email:e.auth.email,login:e.auth.login}}),{getAuthLoginInfo:$,disAuthMeOnSite:function(){return function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:0===e.sent.data.resultCode&&t(_(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(lt),pt=n(37),dt=n.n(pt),ht=Object($e.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(_e.a,{name:"email",component:Ke.a,validate:[Ke.c],type:"text",label:"Email"})}),Object(r.jsx)("div",{children:Object(r.jsx)(_e.a,{name:"password",type:"password",label:"Password",component:Ke.a,validate:[Ke.c]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Remember Me"}),Object(r.jsx)(_e.a,{name:"rememberMe",component:"input",type:"checkbox"})]}),e.error&&Object(r.jsx)("div",{className:dt.a.error,children:e.error}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Submit"})})]})})),bt=Object(Me.b)((function(e){return{isAuth:e.auth.isAuth}}),{authMeOnSite:function(e,t,n){return function(){var r=Object(o.a)(c.a.mark((function r(s){var i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v(e,t,n);case 2:0===(i=r.sent).data.resultCode?s($()):s(Object(V.a)("login",{_error:i.data.messages}));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(xe.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login Page"}),Object(r.jsx)(ht,{onSubmit:function(t){e.authMeOnSite(t.email,t.password,t.rememberMe)}})]})})),ft=le.a.lazy((function(){return n.e(3).then(n.bind(null,284))})),Ot=function(e){Object(be.a)(n,e);var t=Object(fe.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(he.a)(n,[{key:"componentDidMount",value:function(){this.props.isInitialized()}},{key:"render",value:function(){return this.props.initializedStatus?Object(r.jsx)(me.a,{children:Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(jt,{}),Object(r.jsx)(ve,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(xe.b,{path:"/dialogs",render:function(){return Object(r.jsx)(ue.Suspense,{fallback:Object(r.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(r.jsx)(ft,{})})}}),Object(r.jsx)(xe.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(at,{})}}),Object(r.jsx)(xe.b,{path:"/users",render:function(){return Object(r.jsx)(Be,{})}}),Object(r.jsx)(xe.b,{path:"/news",render:function(){return Object(r.jsx)(we,{})}}),Object(r.jsx)(xe.b,{path:"/login",render:function(){return Object(r.jsx)(bt,{})}}),Object(r.jsx)(xe.b,{path:"/music",render:function(){return Object(r.jsx)(Se,{})}}),Object(r.jsx)(xe.b,{path:"/settings",render:function(){return Object(r.jsx)(ye,{})}})]})]})}):Object(r.jsx)(ze,{})}}]),n}(le.a.Component),gt=Object(Me.b)((function(e){return{initializedStatus:e.app.initializedStatus}}),{isInitialized:function(){return function(e){d().then((function(t){if(0===t.data.resultCode){var n=t.data.data,r=n.id,s=n.email,i=n.login;e(_(r,s,i,!0))}})).then((function(){e({type:re})}))}}})(Ot);pe.a.render(Object(r.jsx)(le.a.StrictMode,{children:Object(r.jsx)(Me.a,{store:oe,children:Object(r.jsx)(gt,{})})}),document.getElementById("root"))},37:function(e,t,n){e.exports={error:"Forms_error__gjvQB",errorText:"Forms_errorText__3z7mj"}},66:function(e,t,n){e.exports={photo:"Users_photo__1ZvPC",current:"Users_current__1aPQb"}},89:function(e,t,n){e.exports={header:"Header_header__1Ojhi",authBar:"Header_authBar__2TWyE"}},90:function(e,t,n){},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u}));var r=n(43),s=n(5),i="ADD-MESSAGE",a="UPDATE-MESSAGE-AREA",c={newMessageText:"enter",messages:[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"HiHi"},{id:4,message:"Piotr"},{id:5,message:"Roman"},{id:6,message:"Helga"}],dialogs:[{id:1,name:"Dimych",avatar:"https://vokrug-tv.ru/pic/person/5/5/3/4/5534779888fe3ee25eb750183028cecf.jpeg"},{id:2,name:"Sveta",avatar:"https://drivemusic.club/uploads/artists_images/artists_250/sveta_5.jpg"},{id:3,name:"Sasha",avatar:"https://img.championat.com/c/900x900/news/big/o/l/sasha-grej-provela-strim-v-obraze-princessy-lei-iz-zvjozdnyh-vojn_1588866382278634836.jpg"},{id:4,name:"Piotr",avatar:"https://upload.wikimedia.org/wikipedia/commons/6/66/Piotr_Adamczyk_2012.jpg"},{id:5,name:"Roman",avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg/1200px-Roman_Reigns_Tribute_to_the_Troops_2016.jpg"},{id:6,name:"Helga",avatar:"https://cdn.vox-cdn.com/thumbor/8h7ipgJo5zr-bTF-RLqjSuzz2Q0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9410113/MTS_simgazer_1589392_Helga.jpg"}]},o=function(e){return{type:i,message:e}},u=function(e){return{type:a,newText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:7,message:t.message};return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n]),newMessageText:""});case a:return Object(s.a)(Object(s.a)({},e),{},{newMessageText:t.newText});default:return e}}}},[[282,1,2]]]);
//# sourceMappingURL=main.fac214af.chunk.js.map