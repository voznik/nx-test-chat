(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{MEpA:function(e,t,n){"use strict";n.r(t),n.d(t,"ChatWrapperModule",(function(){return W}));var s=n("2kYt"),c=n("DLXF"),r=n("sEIs"),i=n("EM62"),a=n("Meci"),o=n("29Wa"),u=n("Cd2c"),l=n("nIj0"),b=n("PBFl"),m=n("Jb3d"),d=n("kAAd"),h=n("bFHC");function p(e,t){if(1&e){const e=i.Qb();i.Pb(0,"mat-grid-tile",10),i.Xb("click",(function(){i.lc(e);const n=t.$implicit;return i.Zb().onSmileClick(n)})),i.uc(1),i.Ob()}if(2&e){const e=t.$implicit;i.zb(1),i.vc(e)}}const g=function(){return{standalone:!0}};let f=(()=>{class e{constructor(){this.smiles=["\ud83d\ude42","\ud83d\ude43","\ud83d\ude02","\ud83d\ude19"],this.send=new i.n}onSmileClick(e){this.text=this.text+e}onSubmit(e){e.valid&&e.value.length&&e.value.length>=3&&(this.send.emit(e.value.trim()),e.reset())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["chat-form"]],inputs:{text:"text"},outputs:{send:"send"},decls:16,vars:6,consts:[["layout","row","layout-align","start center"],["flex","","layout","row","floatLabel","never","appearance","outline","hideRequiredMarker","true",1,"push-left","push-right"],["rows","1","flex","","matInput","","placeholder","Type your message, and hit Enter","name","text","minlength","3",3,"ngModel","ngModelOptions","ngModelChange","keydown.enter"],["t","ngModel"],["mat-button","","matTooltip","Add content","matTooltipPosition","after",3,"matMenuTriggerFor"],["chatMenu","matMenu"],["cols","2","rowHeight","2:1"],[3,"click",4,"ngFor","ngForOf"],["mat-icon-button","","matTooltip","Send","matTooltipPosition","after","type","submit",3,"disabled","click"],["matSuffix",""],[3,"click"]],template:function(e,t){if(1&e){const e=i.Qb();i.Pb(0,"mat-card"),i.Pb(1,"div",0),i.Pb(2,"mat-form-field",1),i.Pb(3,"textarea",2,3),i.Xb("ngModelChange",(function(e){return t.text=e}))("keydown.enter",(function(){i.lc(e);const n=i.jc(4);return t.onSubmit(n)})),i.Ob(),i.Ob(),i.Pb(5,"div"),i.Pb(6,"button",4),i.uc(7," \ud83d\ude42 "),i.Ob(),i.Pb(8,"mat-menu",null,5),i.Pb(10,"mat-grid-list",6),i.tc(11,p,2,1,"mat-grid-tile",7),i.Ob(),i.Ob(),i.Ob(),i.Pb(12,"div"),i.Pb(13,"button",8),i.Xb("click",(function(){i.lc(e);const n=i.jc(4);return t.onSubmit(n)})),i.Pb(14,"mat-icon",9),i.uc(15,"send"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()}if(2&e){const e=i.jc(4),n=i.jc(9);i.zb(3),i.fc("ngModel",t.text)("ngModelOptions",i.hc(5,g)),i.zb(3),i.fc("matMenuTriggerFor",n),i.zb(5),i.fc("ngForOf",t.smiles),i.zb(2),i.fc("disabled",e.pristine||e.invalid)}},directives:[a.a,o.a,u.a,l.a,l.d,l.g,l.j,b.a,m.b,m.c,d.a,s.l,h.a,o.e,d.c],styles:[".mat-form-field-wrapper{padding-bottom:.25rem}"],encapsulation:2,changeDetection:0}),e})();var v=n("nKqi"),O=n("mFH5");function y(e,t){if(1&e&&(i.Pb(0,"mat-list-item",3),i.Lb(1,"img",4),i.Pb(2,"h3",5),i.uc(3),i.Pb(4,"span",6),i.uc(5),i.ac(6,"date"),i.Ob(),i.Ob(),i.Pb(7,"div",7),i.Pb(8,"div",8),i.uc(9),i.Ob(),i.Ob(),i.Ob()),2&e){const e=t.$implicit;i.Cb("border-bottom",!t.last),i.zb(1),i.gc("src","https://api.adorable.io/avatars/285/",e.user.id||0,"@adorable.io.png",i.mc),i.zb(2),i.wc(" ",e.user.name||"Firstname Lastname"," "),i.zb(2),i.vc(i.cc(6,6,e.date,"shortTime")),i.zb(4),i.wc(" ",e.message," ")}}function P(e,t){1&e&&(i.Pb(0,"mat-list-item"),i.Pb(1,"div",8),i.uc(2," There's no messaged in this chat room "),i.Ob(),i.Ob())}let w=(()=>{class e{constructor(){this.messages=null}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["chat-list"]],inputs:{messages:"messages"},decls:5,vars:2,consts:[["flex","",1,"mat-content"],["class","pad-top pad-bottom",3,"border-bottom",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"pad-top","pad-bottom"],["matListAvatar","",3,"src"],["matLine","",1,"cursor-pointer","tc-grey-700"],[1,"tc-grey-500","md-caption"],["matLine",""],[1,"text-wrap"]],template:function(e,t){1&e&&(i.Pb(0,"div",0),i.Pb(1,"mat-card"),i.Pb(2,"mat-list"),i.tc(3,y,10,9,"mat-list-item",1),i.tc(4,P,3,0,"mat-list-item",2),i.Ob(),i.Ob(),i.Ob()),2&e&&(i.zb(3),i.fc("ngForOf",t.messages),i.zb(1),i.fc("ngIf",!t.messages||!t.messages.length))},directives:[a.a,v.a,s.l,s.m,v.d,v.b,O.d],pipes:[s.e],styles:[""],encapsulation:2,changeDetection:0}),e})();function S(e,t){if(1&e){const e=i.Qb();i.Pb(0,"a",4),i.Xb("dblclick",(function(t){i.lc(e);const n=i.Zb().$implicit;return i.Zb().onUserClick(t,n)})),i.Pb(1,"mat-icon",5),i.uc(2,"lens"),i.Ob(),i.Pb(3,"span",6),i.Lb(4,"img",7),i.uc(5),i.Ob(),i.Ob()}if(2&e){const e=i.Zb().$implicit;i.zb(4),i.gc("src","https://api.adorable.io/avatars/285/",e.id||0,"@adorable.io.png",i.mc),i.zb(1),i.wc(" ",e.name,"")}}function k(e,t){if(1&e&&(i.Nb(0),i.tc(1,S,6,2,"a",3),i.Mb()),2&e){const e=t.$implicit,n=i.Zb();i.zb(1),i.fc("ngIf",(null==n.currentUser?null:n.currentUser.name)!==e.name)}}function U(e,t){1&e&&(i.Pb(0,"a",8),i.uc(1,"There'se no one exept you in this chat room"),i.Ob())}n("ZTXN");let M=(()=>{class e{constructor(){this.users=[],this.userClicked=new i.n}ngOnInit(){}onUserClick(e,t){e.preventDefault(),this.userClicked.emit(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["chat-users"]],inputs:{currentUser:"currentUser",users:"users"},outputs:{userClicked:"userClicked"},decls:3,vars:2,consts:[["dense",""],[4,"ngFor","ngForOf"],["mat-list-item","",4,"ngIf"],["mat-list-item","",3,"dblclick",4,"ngIf"],["mat-list-item","",3,"dblclick"],["color","accent","matListIcon",""],["layout","row","layout-align","start center"],[1,"size-16","push-right-sm",3,"src"],["mat-list-item",""]],template:function(e,t){1&e&&(i.Pb(0,"mat-list",0),i.tc(1,k,2,1,"ng-container",1),i.tc(2,U,2,0,"a",2),i.Ob()),2&e&&(i.zb(1),i.fc("ngForOf",t.users),i.zb(1),i.fc("ngIf",!t.users||1===t.users.length&&(null==t.currentUser?null:t.currentUser.name)===t.users[0].name))},directives:[v.a,s.l,s.m,v.d,h.a,v.c],styles:[""],changeDetection:0}),e})();var I=n("gJPw"),C=n("xVbo"),x=n("YtkY"),j=n("8j5Y"),$=n("C05f");const z="chatUser";let T=(()=>{class e{constructor(){this.currentUser=new $.a(null),this.currentUser$=this.currentUser.asObservable();const e=JSON.parse(window.sessionStorage.getItem(z));e&&this.currentUser.next(e)}getCurrentUserName(){return JSON.parse(window.sessionStorage.getItem(z)).name}enterChat(e){this.currentUser.next({name:e}),window.sessionStorage.setItem(z,JSON.stringify({name:e}))}exitChat(){this.currentUser.next(null),this.currentUser.complete(),window.sessionStorage.removeItem(z)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Gb({token:e,factory:e.\u0275fac}),e})();var F=n("vobO");let E=(()=>{class e{constructor(e,t,n){this.dataService=e,this.sessionService=t,this._http=n,this.chatMessages$=this.dataService.stream$.pipe(Object(C.a)(e=>"messages"===e.event),Object(x.a)(e=>e.data)),this.chatUsers$=this.dataService.stream$.pipe(Object(C.a)(e=>"users"===e.event),Object(x.a)(e=>e.data),Object(j.a)({complete:()=>{this.sessionService.exitChat()}})),this.connection$=this.dataService.connection$,this.connectionOptions={reconnect:!1,queryParams:""}}connectSocket(){const e=this.sessionService.getCurrentUserName();this.connectionOptions.queryParams="chatUser="+e,this.dataService.connect(this.connectionOptions)}disconnectSocket(){this.dataService.disconnect(),this.sessionService.exitChat()}sendEvent(e){this.dataService.sendMessage(e)}sendChatMessage(e){this.dataService.sendMessage("chatMessage",e)}getUsers(){return this._http.get("/api/users")}}return e.\u0275fac=function(t){return new(t||e)(i.Tb(I.b),i.Tb(T),i.Tb(F.a))},e.\u0275prov=i.Gb({token:e,factory:e.\u0275fac}),e})();var L=n("ROBh"),N=n("J+dc"),X=n("TLy2");let A=(()=>{class e{constructor(e,t){this.router=e,this.sessionService=t}canActivate(e,t){return this.sessionService.currentUser$.pipe(Object(N.a)(1),Object(X.a)(e=>e?Object(L.a)(!0):(this.router.navigate(["/chat/enter"]),Object(L.a)(!1))))}}return e.\u0275fac=function(t){return new(t||e)(i.Tb(r.b),i.Tb(T))},e.\u0275prov=i.Gb({token:e,factory:e.\u0275fac}),e})();var J=n("l5H0");const H=function(){return{standalone:!0}};let Z=(()=>{class e{constructor(e,t){this.sessionService=e,this.router=t,this.username=""}ngOnInit(){}sendUserInfo(e){e.valid&&e.value.length&&e.value.length>=3&&(this.sessionService.enterChat(e.value.trim),e.reset(),this.router.navigate(["/chat/room"]))}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(T),i.Kb(r.b))},e.\u0275cmp=i.Eb({type:e,selectors:[["test-chat-chat-login"]],decls:10,vars:4,consts:[["cardTitle","Welcome","cardSubtitle","Fill your username","cardWidth","30"],[1,"chat-login-form","pad"],["appearance","outline"],["flex","","matInput","","placeholder","Username (min 3 symbols)","name","username","required","","minlength","3",3,"ngModel","ngModelOptions","ngModelChange","keydown.enter"],["t","ngModel"],[1,"chat-login-footer","pad"],["type","submit","mat-button","","mat-stroked-button","",3,"disabled","click"]],template:function(e,t){if(1&e){const e=i.Qb();i.Pb(0,"td-layout-card-over",0),i.Pb(1,"div",1),i.Pb(2,"mat-form-field",2),i.Pb(3,"mat-label"),i.uc(4,"Username"),i.Ob(),i.Pb(5,"input",3,4),i.Xb("ngModelChange",(function(e){return t.username=e}))("keydown.enter",(function(){i.lc(e);const n=i.jc(6);return t.sendUserInfo(n)})),i.Ob(),i.Ob(),i.Ob(),i.Pb(7,"div",5),i.Pb(8,"button",6),i.Xb("click",(function(){i.lc(e);const n=i.jc(6);return t.sendUserInfo(n)})),i.uc(9," ENTER "),i.Ob(),i.Ob(),i.Ob()}if(2&e){const e=i.jc(6);i.zb(5),i.fc("ngModel",t.username)("ngModelOptions",i.hc(3,H)),i.zb(3),i.fc("disabled",e.pristine||e.invalid)}},directives:[J.b,o.a,o.d,u.a,l.a,l.l,l.d,l.g,l.j,b.a],styles:[""]}),e})();var q=n("lQ7A");const D=[{path:"room",component:(()=>{class e{constructor(e,t){this.chatService=e,this.sessionService=t,this.currentUser=null,this.currentUserName="",this.users$=this.chatService.chatUsers$,this.messages$=this.chatService.chatMessages$,this.connection$=this.chatService.connection$,this.messageInput=""}ngOnInit(){this.sessionService.currentUser$.subscribe(e=>this.currentUser=e),this.chatService.connectSocket(),this.chatService.sendEvent("chat"),this.chatService.sendEvent("users")}userNameClicked(e){const t="@"+e.name;this.messageInput&&this.messageInput.includes(t)||(this.messageInput=this.messageInput+t+" ")}sendMessage(e){this.chatService.sendChatMessage({message:e,user:this.currentUser}),this.messageInput=null}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(E),i.Kb(T))},e.\u0275cmp=i.Eb({type:e,selectors:[["ng-component"]],decls:10,vars:8,consts:[["fullscreen",""],["opened","","mode","side","position","end",1,"chat-sidenav"],["sidenav",""],[3,"currentUser","users","userClicked"],["layout","column","layout-fill","",1,"chat-main"],[3,"messages"],[3,"text","send"]],template:function(e,t){1&e&&(i.Pb(0,"mat-sidenav-container",0),i.Pb(1,"mat-sidenav",1,2),i.Pb(3,"chat-users",3),i.Xb("userClicked",(function(e){return t.userNameClicked(e)})),i.ac(4,"async"),i.Ob(),i.Ob(),i.Pb(5,"mat-sidenav-content"),i.Pb(6,"div",4),i.Lb(7,"chat-list",5),i.ac(8,"async"),i.Pb(9,"chat-form",6),i.Xb("send",(function(e){return t.sendMessage(e)})),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&e&&(i.zb(3),i.fc("currentUser",t.currentUser)("users",i.bc(4,4,t.users$)),i.zb(4),i.fc("messages",i.bc(8,6,t.messages$)),i.zb(2),i.fc("text",t.messageInput))},directives:[q.b,q.a,M,q.c,w,f],pipes:[s.b],styles:[".chat-main{min-height:100%;display:flex;flex-direction:column;align-items:stretch}.chat-main chat-list{flex-grow:1}.chat-main chat-form{flex-shrink:0}"],encapsulation:2}),e})(),canActivate:[A]},{path:"enter",component:Z},{path:"",redirectTo:"room"}];let K=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[r.d.forChild(D)]]}),e})(),Q=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},providers:[E,A,T],imports:[[s.c,K,c.a]]}),e})(),W=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[Q]]}),e})()}}]);