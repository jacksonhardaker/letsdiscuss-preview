webpackJsonp([1],{"/ttg":function(t,e){},Brxi:function(t,e){},CaEP:function(t,e){},DmcG:function(t,e){},JIy8:function(t,e){},L7dA:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a=n("PlbA"),i=n.n(a),o=n("Dd8w"),r=n.n(o),c=n("NYxO"),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"personAvatar",class:{small:"small"===t.size}},[t.missing?t._e():n("img",{staticClass:"personAvatar--picture",attrs:{src:t.picture,title:t.name,alt:t.name}}),t._v(" "),t.missing?n("div",{staticClass:"personAvatar--missing flex--col-cc"},[n("span",{staticClass:"font-h5"},[t._v("?")])]):t._e()])},staticRenderFns:[]};var l=n("VU/8")({name:"PersonAvatar",props:["picture","name","size"],computed:{missing:function(){return!(this.picture&&this.name)}}},u,!1,function(t){n("wfJl")},"data-v-507af78c",null).exports,m={name:"PageHeader",computed:r()({},Object(c.c)(["currentPerson","currentAlias","isAuthenticated"]),{personPicture:function(){return this.currentPerson?this.currentPerson.picture:""},personName:function(){return this.currentPerson?this.currentPerson.name:""},aliasPicture:function(){return this.currentAlias?this.currentAlias.pictureUrl:""},aliasName:function(){return this.currentAlias?this.currentAlias.name:""},showAlias:function(){return this.$router.currentRoute.meta.showAlias}}),methods:r()({},Object(c.b)({logout:"logout",login:"showLoginModal"})),components:{PersonAvatar:l}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"pageHeader"},[t.isAuthenticated?n("div",{staticClass:"pageHeader--loggedIn flex--row-sc"},[n("person-avatar",{attrs:{picture:t.personPicture,name:t.personName}}),t._v(" "),t.showAlias?n("span",{staticClass:"font-h4"},[t._v("=")]):t._e(),t._v(" "),t.showAlias?n("person-avatar",{attrs:{picture:t.aliasPicture,name:t.aliasName}}):t._e(),t._v(" "),n("button",{staticClass:"pageHeader--logoutBtn btn font-button",on:{click:function(e){t.logout()}}},[t._v("Logout")])],1):t._e(),t._v(" "),t.isAuthenticated?t._e():n("div",{staticClass:"pageHeader--loggedOut flex--row-ec"},[n("button",{staticClass:"btn font-button",on:{click:function(e){t.login()}}},[t._v("Login")])])])},staticRenderFns:[]};var h=n("VU/8")(m,d,!1,function(t){n("jpbm")},"data-v-c3114e74",null).exports,f=n("Xxa5"),p=n.n(f),g=n("exGp"),v=n.n(g),_=n("//Fk"),C=n.n(_),A={name:"LoadingAnimation",props:{show:Boolean,animate:Boolean}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"loading",class:{animate:t.animate,show:t.show}},[n("em",{staticClass:"loading-symbol"},[t._v("#")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("*")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("@")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("$")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("!*")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("?")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("#")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("$")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("@")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("*")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("?!")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("*")]),t._v(" "),n("em",{staticClass:"loading-symbol"},[t._v("!!")])])},staticRenderFns:[]};var w=n("VU/8")(A,L,!1,function(t){n("hhzs")},"data-v-48c3d882",null).exports;function b(){var t=this,e=this.showLoadingAnimation?0:400;return new C.a(function(n,s){setTimeout(function(){return n(t.showLoadingAnimation)},e)})}var E={name:"GlobalLoadingAnimation",computed:r()({},Object(c.c)({showLoadingAnimation:"showLoadingAnimation"}),{show:function(){return this.showLoadingAnimation}}),asyncComputed:{animate:{get:function(){var t=this;return v()(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.call(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}))()},watch:function(){this.showLoadingAnimation}}},components:{LoadingAnimation:w}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"global-loading"},[e("loading-animation",{attrs:{show:this.show,animate:this.animate}})],1)},staticRenderFns:[]};var T=n("VU/8")(E,R,!1,function(t){n("Brxi")},"data-v-375e71c1",null).exports,U={name:"FacebookLoginButton",methods:r()({},Object(c.b)({login:"facebookLogin"}))},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn btn--fixed-w-wide btn--tt-n btn--facebook font-sansN7",on:{click:function(e){t.login()}}},[n("i",{staticClass:"fa fa-facebook-square fa-2x"}),t._v(" Login "),n("span",{staticClass:"font-sansN4"},[t._v("with")]),t._v(" Facebook")])},staticRenderFns:[]};var y=n("VU/8")(U,O,!1,function(t){n("e4wf")},null,null).exports,S={name:"GoogleLoginButton",methods:r()({},Object(c.b)({login:"googleLogin"}))},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn btn--fixed-w-wide btn--tt-n btn--google font-sansN7",on:{click:function(e){t.login()}}},[n("i",{staticClass:"fa fa-google fa-2x"}),t._v(" Login "),n("span",{staticClass:"font-sansN4"},[t._v("with")]),t._v(" Google")])},staticRenderFns:[]};var I=n("VU/8")(S,x,!1,function(t){n("DmcG")},null,null).exports,N={name:"LoginOverlay",props:["showLoginOverlay"],methods:r()({},Object(c.b)({hideLoginModal:"hideLoginModal"})),components:{FacebookLoginButton:y,GoogleLoginButton:I}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showLoginOverlay?n("section",{staticClass:"loginOverlay flex--col-cc"},[n("button",{staticClass:"loginOverlay--closeBtn btn btn--large",on:{click:function(e){t.hideLoginModal()}}},[t._v("X")]),t._v(" "),n("facebook-login-button"),t._v(" "),n("google-login-button")],1):t._e()},staticRenderFns:[]};var M=n("VU/8")(N,k,!1,function(t){n("pNNc")},"data-v-43cf140a",null).exports,P={name:"App",computed:r()({},Object(c.c)(["isAuthenticated","displayLoginModal"]),{showLoginOverlay:function(){return this.displayLoginModal||!this.isAuthenticated&&!this.$router.currentRoute.meta.guest}}),components:{GlobalLoadingAnimation:T,LoginOverlay:M,PageHeader:h}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("page-header",{staticClass:"app--pageHeader",class:{blurred:this.showLoginOverlay}}),this._v(" "),e("router-view",{staticClass:"app",class:{blurred:this.showLoginOverlay}}),this._v(" "),e("global-loading-animation"),this._v(" "),e("login-overlay",{attrs:{showLoginOverlay:this.showLoginOverlay}})],1)},staticRenderFns:[]};var H=n("VU/8")(P,F,!1,function(t){n("tdXZ")},null,null).exports,q=n("/ocq"),G={name:"ArticleInput",data:function(){return{articleUrl:"",loading:!1,showLogin:!1}},computed:r()({},Object(c.c)(["isAuthenticated"])),methods:r()({},Object(c.b)({showLoginModal:"showLoginModal",hideLoginModal:"hideLoginModal",submitNewArticle:"submitNewArticle"}),{submit:function(){this.loading=!0,this.isAuthenticated?(console.log("[Logged in, so submitting article...]"),this.submitNewArticle(this.articleUrl)):(console.log("[Not logged it, so cannot submit article... Logging in...]"),this.showLoginModal())}}),watch:{isAuthenticated:function(t,e){!0===t&&this.loading&&this.submit()}},components:{LoadingAnimation:w,LoginOverlay:M}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"articleInput"},[n("div",{staticClass:"articleInput--content flex--col-cc"},[n("label",{staticClass:"articleInput--label font-overline"},[t._v("Start the Discussion")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.articleUrl,expression:"articleUrl"}],staticClass:"articleInput--text-input font-h5",attrs:{type:"text"},domProps:{value:t.articleUrl},on:{input:function(e){e.target.composing||(t.articleUrl=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn font-button",on:{click:function(e){t.submit()}}},[t._v("Start the discussion")]),t._v(" "),n("loading-animation",{staticClass:"articleInput--loading",attrs:{show:t.loading,animate:t.loading}})],1),t._v(" "),n("login-overlay",{attrs:{showLoginOverlay:t.showLogin}})],1)},staticRenderFns:[]};var V={name:"PageHome",components:{FacebookLoginButton:y,GoogleLoginButton:I,LoadingAnimation:w,ArticleInput:n("VU/8")(G,$,!1,function(t){n("/ttg")},"data-v-75f7f256",null).exports}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"pageHome flex--col-cs"},[this._m(0),this._v(" "),e("article-input"),this._v(" "),e("loading-animation",{staticClass:"pageHome--loading",attrs:{show:!1,animate:!1}}),this._v(" "),this._e(),this._v(" "),this._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"pageHome--intro"},[e("div",{staticClass:"pageHome--introBackground"}),this._v(" "),e("blockquote",{staticClass:"pageHome--introContent font-h6"},[this._v("So we might do well to ease up on “as a” — on the urge to underwrite our observations with our identities. "),e("q",[this._v("For me,")]),this._v(" Professor Spivak once tartly remarked, "),e("q",[this._v("the question ‘Who should speak’ is less crucial than ‘Who will listen?’")]),this._v(" "),e("p",[this._v("- Kwame Anthony Appiah")])])])}]};var D=n("VU/8")(V,B,!1,function(t){n("fN0r")},"data-v-8efe7152",null).exports,j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$options.name},[e("h1",[this._v("About")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n    This is an example project for the following article:\n    "),e("a",{attrs:{href:"https://markus.oberlehner.net/blog/how-to-structure-a-complex-vuex-store/"}},[this._v("\n      How to Structure a Complex Vuex Store\n    ")])])}]},z=n("VU/8")({name:"PageAbout"},j,!1,null,null,null).exports,Q={name:"BaseUrl",props:["src"],computed:{domain:function(){return this.src?new URL(this.src).hostname:""}}},K={render:function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n    "+this._s(this.domain)+"\n")])},staticRenderFns:[]},W={name:"ArticleCard",props:["image","title","description","author","url"],components:{BaseUrl:n("VU/8")(Q,K,!1,null,null,null).exports}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"articleCard card shadow-2 flex--col-cc"},[n("a",{staticClass:"articleCard--link",attrs:{target:"_blank",href:t.url}},[n("img",{staticClass:"articleCard--image",attrs:{src:t.image,alt:t.title}}),t._v(" "),n("base-url",{staticClass:"font-overline",attrs:{src:t.url}})],1),t._v(" "),n("h1",{staticClass:"font-h5 text-align-c"},[t._v(t._s(t.title))]),t._v(" "),n("aside",{staticClass:"font-caption"},[t._v("by "+t._s(t.author))]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"articleCard--desc font-body-2"},[t._v(t._s(t.description))])])},staticRenderFns:[]};var J=n("VU/8")(W,X,!1,function(t){n("imId")},"data-v-90998f96",null).exports,Y={name:"CommentInput",props:["article","alias","comment"],data:function(){return{commentText:""}},computed:{aliasPicture:function(){return this.alias?this.alias.pictureUrl:""},aliasName:function(){return this.alias?this.alias.name:""}},methods:r()({},Object(c.b)({leaveComment:"leaveComment",replyToComment:"replyToComment"}),{submit:function(){var t=this;this.comment?this.replyToComment({comment:this.comment,commentText:this.commentText}).then(function(){t.commentText=""}):this.leaveComment({article:this.article,commentText:this.commentText}).then(function(){t.commentText=""})}}),components:{PersonAvatar:l}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"commentInput flex--row-sc"},[n("person-avatar",{attrs:{picture:t.aliasPicture,name:t.aliasName,size:"small"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],attrs:{type:"text"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn",on:{click:function(e){t.submit()}}},[t._v("Comment")])],1)},staticRenderFns:[]};var tt=n("VU/8")(Y,Z,!1,function(t){n("i+aw")},"data-v-2eeabf72",null).exports,et={name:"ReplyItem",props:["reply"],components:{PersonAvatar:l}},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"replyItem"},[e("div",{staticClass:"replyItem--content flex--row-ss"},[e("person-avatar",{attrs:{picture:this.reply.alias.pictureUrl,name:this.reply.alias.name,size:"small"}}),this._v(" "),e("p",[this._v(this._s(this.reply.body))])],1)])},staticRenderFns:[]};var st={name:"ReplyList",props:["replies"],components:{ReplyItem:n("VU/8")(et,nt,!1,function(t){n("rrH1")},"data-v-43f2c32a",null).exports}},at={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"replyList list--noBullet"},this._l(this.replies,function(t){return e("li",{key:t.id,staticClass:"replyList--item"},[e("reply-item",{attrs:{reply:t}})],1)}))},staticRenderFns:[]};var it={name:"CommentItem",props:["comment","currentAlias"],data:function(){return{showReplyInput:!1}},computed:{alias:function(){return this.comment?this.comment.alias:null},picture:function(){return this.comment&&this.comment.alias?this.comment.alias.pictureUrl:""},name:function(){return this.comment&&this.comment.alias?this.comment.alias.name:""}},methods:{showReply:function(){this.showReplyInput=!this.showReplyInput}},components:{ReplyList:n("VU/8")(st,at,!1,function(t){n("L7dA")},"data-v-45fc59fc",null).exports,PersonAvatar:l,CommentInput:tt}},ot={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"commentItem"},[n("div",{staticClass:"commentItem--content flex--row-ss"},[n("person-avatar",{staticClass:"commentItem--avatar",attrs:{picture:t.picture,name:t.name,size:"small"}}),t._v(" "),n("p",{staticClass:"commentItem--body"},[t._v(t._s(t.comment.body))])],1),t._v(" "),n("reply-list",{staticClass:"commentItem--replies",attrs:{replies:t.comment.replies}}),t._v(" "),t.showReplyInput?t._e():n("button",{staticClass:"btn btn--small commentItem--replyButton",on:{click:function(e){t.showReply()}}},[t._v("Reply")]),t._v(" "),t.showReplyInput?n("comment-input",{staticClass:"commentItem--replyInput",attrs:{alias:t.currentAlias,comment:t.comment}}):t._e()],1)},staticRenderFns:[]};var rt={name:"CommentList",props:["comments","currentAlias"],components:{CommentItem:n("VU/8")(it,ot,!1,function(t){n("CaEP")},"data-v-d99eacf0",null).exports}},ct={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"commentList list--noBullet"},t._l(t.comments,function(e){return n("li",{key:e.id,staticClass:"commentList--item"},[n("comment-item",{attrs:{comment:e,"current-alias":t.currentAlias}})],1)}))},staticRenderFns:[]};var ut=n("VU/8")(rt,ct,!1,function(t){n("r0LW")},"data-v-b180e7ea",null).exports,lt={name:"PageArticle",computed:r()({},Object(c.c)({status:"getArticleStatus",article:"getArticle",alias:"currentAlias",articleComments:"articleComments"}),{image:function(){return this.article?this.article.image:"https://picsum.photos/200/300"},title:function(){return this.article?this.article.title:""},url:function(){return this.article?this.article.url:""},description:function(){return this.article?this.article.description:""},author:function(){return this.article?this.article.author:""}}),methods:r()({},Object(c.b)(["getArticle"])),created:function(){var t=v()(p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("[Attempting to load article... "+decodeURIComponent(this.$route.path)+"]"),t.next=3,this.getArticle(this.$route.params);case 3:t.sent;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),components:{ArticleCard:J,CommentInput:tt,CommentList:ut}},mt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"pageArticle flex--col-cc"},[n("article-card",{attrs:{image:t.image,title:t.title,description:t.description,url:t.url,author:t.author}}),t._v(" "),n("comment-list",{attrs:{comments:t.articleComments,"current-alias":t.alias}}),t._v(" "),n("comment-input",{attrs:{article:t.article,alias:t.alias}})],1)},staticRenderFns:[]};var dt=n("VU/8")(lt,mt,!1,function(t){n("Xk1S")},"data-v-38792211",null).exports;s.a.use(q.a);console.log("/letsdiscuss-web");var ht,ft,pt,gt,vt,_t,Ct,At,Lt,wt,bt=new q.a({base:"/letsdiscuss-web",routes:[{path:"/",name:"home",component:D,meta:{guest:!0,showAlias:!1}},{path:"/about",name:"about",component:z,meta:{guest:!0,showAlias:!1}},{path:"/article/:alias/:date/:slug",name:"article",component:dt,meta:{guest:!1,showAlias:!0}}],mode:"history"}),Et=n("bOdI"),Rt=n.n(Et),Tt={request:"ARTICLE_REQUEST",success:"ARTICLE_SUCCESS",error:"ARTICLE_ERROR"},Ut={request:"ARTICLE_SUBMIT_REQUEST",success:"ARTICLE_SUBMTI_SUCCESS",error:"ARTICLE_SUBMIT_ERROR"},Ot="AUTH_INVALID_TOKEN",yt={validate:{request:"VALIDATE_TOKEN_AUTH_REQUEST",success:"VALIDATE_TOKEN_AUTH_SUCCESS",error:"VALIDATE_TOKEN_AUTH_ERROR"}},St={request:"FACEBOOK_AUTH_REQUEST",success:"FACEBOOK_AUTH_SUCCESS",error:"FACEBOOK_AUTH_ERROR"},xt={request:"GOOGLE_AUTH_REQUEST",success:"GOOGLE_AUTH_SUCCESS",error:"GOOGLE_AUTH_ERROR"},It={request:"LOGOUT_AUTH_REQUEST",success:"LOGOUT_AUTH_SUCCESS",error:"LOGOUT_AUTH_ERROR"},Nt="CURRENT_PERSON_REQUEST",kt="CURRENT_PERSON_SUCCESS",Mt="CURRENT_PERSON_FAIL",Pt="LOADING_BEGIN",Ft="LOADING_FINISH",Ht="LOGIN_MODAL_SHOW",qt="LOGIN_MODAL_HIDE",Gt="CURRENT_ALIAS_REQUEST",$t="CURRENT_ALIAS_SUCCESS",Vt="CURRENT_ALIAS_FAIL",Bt={request:"LEAVE_COMMENT_REQUEST",success:"LEAVE_COMMENT_SUCCESS",error:"LEAVE_COMMENT_ERROR"},Dt={all:{request:"GETALL_COMMENTS_REQUEST",success:"GETALL_COMMENTS_SUCCESS",error:"GETALL_COMMENTS_ERROR"}},jt={request:"REPLY_TO_COMMENT_REQUEST",success:"REPLY_TO_COMMENT_SUCCESS",error:"REPLY_TO_COMMENT_ERROR"},zt=(ht={},Rt()(ht,Pt,function(t){t.loading=!0}),Rt()(ht,Ft,function(t){t.loading=!1}),Rt()(ht,Ht,function(t){t.showLoginModal=!0}),Rt()(ht,qt,function(t){t.showLoginModal=!1}),ht),Qt=(ft={},Rt()(ft,"showGlobalLoading",function(t){var e=t.commit;t.dispatch;return e(Pt)}),Rt()(ft,"hideGlobalLoading",function(t){var e=t.commit;t.dispatch;return e(Ft)}),Rt()(ft,"showLoginModal",function(t){var e=t.commit;t.dispatch;return e(Ht)}),Rt()(ft,"hideLoginModal",function(t){var e=t.commit;t.dispatch;return e(qt)}),ft),Kt=n("lbHh"),Wt=n.n(Kt),Xt=n("mtWM"),Jt=n.n(Xt),Yt={state:{token:Wt.a.get("LD-user-token")||null,status:""},getters:{isAuthenticated:function(t){return!!t.token},authStatus:function(t){return t.status}},mutations:(pt={},Rt()(pt,St.request,function(t){t.status="loading"}),Rt()(pt,St.success,function(t,e){t.status="success",t.token=e}),Rt()(pt,St.error,function(t){t.status="error"}),Rt()(pt,xt.request,function(t){t.status="loading"}),Rt()(pt,xt.success,function(t,e){t.status="success",t.token=e}),Rt()(pt,xt.error,function(t){t.status="error"}),Rt()(pt,It.request,function(t){t.status="loading"}),Rt()(pt,It.success,function(t){t.status="success",t.token=null}),Rt()(pt,It.error,function(t){t.status="error"}),Rt()(pt,Ot,function(t){t.status="invalid token",t.token=null}),Rt()(pt,yt.validate.request,function(t){t.status="loading"}),Rt()(pt,yt.validate.success,function(t){t.status="success"}),Rt()(pt,yt.validate.error,function(t){t.status="error"}),pt),actions:(gt={},Rt()(gt,"validateToken",function(t,e){var n=t.commit;t.dispatch;return new C.a(function(t,s){n(yt.validate.request),Jt.a.get("/token/isvalid/"+e).then(function(e){n(yt.validate.success),t(e.data)}).catch(function(t){n(yt.validate.error,t),s(t)})})}),Rt()(gt,"facebookLogin",function(t){var e=t.commit,n=t.dispatch;return new C.a(function(t,s){e(St.request),e(Pt);window.addEventListener("message",function s(a){var i=a.data.token;Wt.a.set("LD-user-token",i),Jt.a.defaults.headers.common.Authorization=i,e(St.success,i),e(Ft),n("hideLoginModal"),n("getCurrentPerson",i),t(i),window.removeEventListener("message",s)});window.open("https://letsdiscuss-211513.appspot.com/oauth/facebook","pop","width=600, height=640, scrollbars=no")})}),Rt()(gt,"googleLogin",function(t){var e=t.commit,n=t.dispatch;return new C.a(function(t,s){e(xt.request),e(Pt);window.addEventListener("message",function s(a){var i=a.data.token;Wt.a.set("LD-user-token",i),Jt.a.defaults.headers.common.Authorization=i,e(xt.success,i),e(Ft),n("hideLoginModal"),n("getCurrentPerson",i),t(i),window.removeEventListener("message",s)});window.open("https://letsdiscuss-211513.appspot.com/oauth/google","pop","width=600, height=640, scrollbars=no")})}),Rt()(gt,"logout",function(t){var e=t.commit;t.dispatch;return new C.a(function(t,n){e(It.request),e(Pt),Jt.a.put("/oauth/logout").then(function(n){e(It.success),e(Ft),Wt.a.remove("LD-user-token"),Jt.a.defaults.headers.common.Authorization=null,t(n)}).catch(function(t){e(It.error,t),e(Ft),Wt.a.remove("LD-user-token"),Jt.a.defaults.headers.common.Authorization=null,n(t)})})}),gt)},Zt={state:{currentPerson:null,status:""},getters:{personStatus:function(t){return t.status},currentPerson:function(t){return t.currentPerson}},mutations:(vt={},Rt()(vt,Nt,function(t){t.status="loading"}),Rt()(vt,kt,function(t,e){t.status="success",t.currentPerson=e}),Rt()(vt,Mt,function(t){t.status="error"}),vt),actions:Rt()({},"getCurrentPerson",function(t){var e=t.commit,n=t.dispatch;return new C.a(function(t,s){e(Nt),Jt.a.get("/person").then(function(t){e(kt,t.data),n("getCurrentAliasForArticle")}).catch(function(t){e(Mt,t)})})})},te={status:"",article:null},ee={getArticleStatus:function(t){return t.status},getArticle:function(t){return t.article}},ne=(_t={},Rt()(_t,Tt.request,function(t){t.status="loading"}),Rt()(_t,Tt.success,function(t,e){t.status="success",t.article=e}),Rt()(_t,Tt.error,function(t){t.status="error"}),Rt()(_t,Ut.request,function(t){t.status="loading"}),Rt()(_t,Ut.success,function(t){t.status="success"}),Rt()(_t,Ut.error,function(t){t.status="error"}),_t),se=(Ct={},Rt()(Ct,"submitNewArticle",function(t,e){var n=t.commit;t.dispatch;return new C.a(function(t,s){n(Ut.request);var a=new URLSearchParams;a.append("url",e),Jt.a.put("/article",a).then(function(t){n(Ut.success),console.log(t.data),bt.push("/article/"+t.data.slug)}).catch(function(t){n(Ut.error),s(t),console.log(t)})})}),Rt()(Ct,"getCurrentArticle",function(t){t.commit,t.dispatch;return new C.a(function(t,e){t(ee.getArticle(te))})}),Rt()(Ct,"getArticle",function(t,e){var n=t.commit,s=t.dispatch;return new C.a(function(t,a){n(Tt.request),n(Pt),Jt.a.get("/article/"+e.alias+"/"+e.date+"/"+e.slug).then(function(e){n(Tt.success,e.data),n(Ft),s("getCurrentAliasForArticle"),s("getAllComments",e.data),t(e.data)}).catch(function(t){n(Tt.error),a(t),console.log(t)})})}),Ct),ae={state:te,getters:ee,mutations:ne,actions:se},ie={state:{currentAlias:null,status:""},getters:{aliasStatus:function(t){return t.status},currentAlias:function(t){return t.currentAlias}},mutations:(At={},Rt()(At,Gt,function(t){t.status="loading"}),Rt()(At,$t,function(t,e){t.status="success",t.currentAlias=e}),Rt()(At,Vt,function(t){t.status="error"}),At),actions:Rt()({},"getCurrentAliasForArticle",function(t){var e=t.commit,n=t.dispatch;return new C.a(function(t,s){n("getCurrentArticle").then(function(n){n&&(e(Gt),Jt.a.get("/alias/current/"+n.id).then(function(n){e($t,n.data),t(n.data)}).catch(function(t){e(Vt)}))})})})},oe={state:{articleComments:[],status:""},getters:{commentStatus:function(t){return t.status},articleComments:function(t){return t.articleComments}},mutations:(Lt={},Rt()(Lt,Bt.request,function(t){t.status="loading"}),Rt()(Lt,Bt.success,function(t,e){t.status="success",t.articleComments.push(e)}),Rt()(Lt,Bt.error,function(t){t.status="error"}),Rt()(Lt,Dt.all.request,function(t){t.status="loading"}),Rt()(Lt,Dt.all.success,function(t,e){t.status="success",t.articleComments=e}),Rt()(Lt,Dt.all.error,function(t){t.status="error"}),Rt()(Lt,jt.request,function(t){t.status="loading"}),Rt()(Lt,jt.success,function(t,e){t.status="success";var n=t.articleComments.findIndex(function(t){return t.id===e.parent.id});t.articleComments[n].replies.push(e.reply)}),Rt()(Lt,jt.error,function(t){t.status="error"}),Lt),actions:(wt={},Rt()(wt,"leaveComment",function(t,e){var n=t.commit,s=t.dispatch;return new C.a(function(t,a){n(Bt.request),n(Pt);var i=new URLSearchParams;i.append("comment",e.commentText),Jt.a.put("/comment/"+e.article.id,i).then(function(e){n(Bt.success,e.data),n(Ft),s("getCurrentAliasForArticle"),t(e.data)}).catch(function(t){n(Bt.error,t),n(Ft),a(t)})})}),Rt()(wt,"replyToComment",function(t,e){var n=t.commit,s=t.dispatch;return new C.a(function(t,a){n(jt.request),n(Pt);var i=new URLSearchParams;i.append("comment",e.commentText),Jt.a.put("/comment/"+e.comment.article+"/reply/"+e.comment.id,i).then(function(a){n(jt.success,{reply:a.data,parent:e.comment}),n(Ft),s("getCurrentAliasForArticle"),t(a.data)}).catch(function(t){n(jt.error,t),n(Ft),a(t)})})}),Rt()(wt,"getAllComments",function(t,e){var n=t.commit;t.dispatch;return new C.a(function(t,s){n(Dt.all.request),Jt.a.get("/comments/"+e.id).then(function(e){n(Dt.all.success,e.data),t(e.data)}).catch(function(t){n(Dt.all.error),s(t)})})}),wt)};s.a.use(c.a);var re=new c.a.Store({strict:!1,state:{loading:!1,showLoginModal:!1},getters:{showLoadingAnimation:function(t){return t.loading},displayLoginModal:function(t){return t.showLoginModal}},mutations:zt,actions:Qt,modules:{auth:Yt,person:Zt,article:ae,alias:ie,comment:oe}});n("JIy8");s.a.use(i.a),s.a.config.productionTip=!1,Jt.a.defaults.baseURL="https://letsdiscuss-211513.appspot.com",Jt.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",Jt.a.defaults.crossDomain=!0;var ce=Wt.a.get("LD-user-token")||null;ce&&re.dispatch("validateToken",ce).then(function(t){t?(Jt.a.defaults.headers.common.Authorization=ce,re.dispatch("getCurrentPerson")):(Wt.a.remove("LD-user-token"),Jt.a.defaults.headers.common.Authorization=null)}),new s.a({el:"#app",router:bt,store:re,render:function(t){return t(H)}})},Xk1S:function(t,e){},e4wf:function(t,e){},fN0r:function(t,e){},hhzs:function(t,e){},"i+aw":function(t,e){},imId:function(t,e){},jpbm:function(t,e){},pNNc:function(t,e){},r0LW:function(t,e){},rrH1:function(t,e){},tdXZ:function(t,e){},wfJl:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7702cdbcf3a12fad8d63.js.map