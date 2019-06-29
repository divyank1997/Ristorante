(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,a,t){},138:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(19),i=t.n(r),c=(t(88),t(89),t(90),t(91),t(12)),o=t(13),s=t(16),m=t(14),u=t(15),d=t(9),h=t(2),E=t(4),f=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={isNavOpen:!1,isModalOpen:!1},t.toggleNav=t.toggleNav.bind(Object(d.a)(Object(d.a)(t))),t.toggleModal=t.toggleModal.bind(Object(d.a)(Object(d.a)(t))),t.handleLogin=t.handleLogin.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.y,{dark:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(h.A,{onClick:this.toggleNav}),l.a.createElement(h.z,{className:"mr-auto",href:"/"},l.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),l.a.createElement(h.m,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(h.w,{navbar:!0},l.a.createElement(h.x,null,l.a.createElement(E.c,{className:"nav-link",to:"/home"},l.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),l.a.createElement(h.x,null,l.a.createElement(E.c,{className:"nav-link",to:"/aboutus"},l.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),l.a.createElement(h.x,null,l.a.createElement(E.c,{className:"nav-link",to:"/menu"},l.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),l.a.createElement(h.x,null,l.a.createElement(E.c,{className:"nav-link",to:"/contactus"},l.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),l.a.createElement(h.w,{className:"ml-auto",navbar:!0},l.a.createElement(h.x,null,l.a.createElement(h.c,{outline:!0,onClick:this.toggleModal},l.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),l.a.createElement(h.q,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-header"},l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("h1",null,"Ristorante con Fusion"),l.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),l.a.createElement(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement(h.v,{toggle:this.toggleModal},"Login"),l.a.createElement(h.u,null,l.a.createElement(h.n,{onSubmit:this.handleLogin},l.a.createElement(h.o,null,l.a.createElement(h.r,{htmlFor:"username"},"Username"),l.a.createElement(h.p,{type:"text ",name:"username",id:"username",innerRef:function(a){return e.username=a}})),l.a.createElement(h.o,null,l.a.createElement(h.r,{htmlFor:"password"},"Password"),l.a.createElement(h.p,{type:"text ",name:"password",id:"password",innerRef:function(a){return e.password=a}})),l.a.createElement(h.o,{check:!0},l.a.createElement(h.r,{check:!0},l.a.createElement(h.p,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember Me")),l.a.createElement(h.c,{type:"submit",name:"submit",className:"bg-primary"},"Submit")))))}}]),a}(n.Component);function g(e){var a=e.item;return l.a.createElement(h.d,null,l.a.createElement(h.g,{src:a.image,alt:a.name}),l.a.createElement(h.e,null,l.a.createElement(h.k,null,a.name),a.designation?l.a.createElement(h.i,null,a.designation):null,l.a.createElement(h.j,null,a.description)))}var p=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-item-start"},l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(g,{item:e.dish})),l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(g,{item:e.leader})),l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(g,{item:e.promotion}))))},b=t(7),v=function(e){return e&&e.length},N=function(e){return function(a){return!a||a.length<=e}},y=function(e){return function(a){return a&&a.length>=e}},w=function(e){return!isNaN(Number(e))},k=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},O=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleSubmit=t.handleSubmit.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleSubmit",value:function(e){console.log("Current state is: "+JSON.stringify(e)),alert("Current state is: "+JSON.stringify(e))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(h.a,null,l.a.createElement(h.b,null,l.a.createElement(E.b,{to:"/home"},"Home ")),l.a.createElement(h.b,{active:!0},l.a.createElement(E.b,{to:"/contactus"},"Contactus "))),l.a.createElement("div",{className:"col-12 "},l.a.createElement("h3",null," Contact "))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Location Information")),l.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"121, Clear Water Bay Road",l.a.createElement("br",null),"Clear Water Bay, Kowloon",l.a.createElement("br",null),"HONG KONG",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope"}),": ",l.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),l.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},l.a.createElement("h5",null,"Map of our Location")),l.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},l.a.createElement("div",{className:"btn-group",role:"group"},l.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},l.a.createElement("i",{className:"fa fa-phone"})," Call"),l.a.createElement("a",{role:"button",className:"btn btn-info"},l.a.createElement("i",{className:"fa fa-skype"})," Skype"),l.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12 "},l.a.createElement("h3",null,"Send us your feedback")),l.a.createElement("div",{className:"col-12 col-md-9 "},l.a.createElement(b.LocalForm,{onSubmit:function(a){return e.handleSubmit(a)}},l.a.createElement(h.B,{className:"form-group"},l.a.createElement(h.r,{htmlFor:"firstname",md:2},"First Name"),l.a.createElement(h.l,{md:10},l.a.createElement(b.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:v,minLength:y(3),maxLength:N(15)}}),l.a.createElement(b.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Min length should be 3",maxLength:"max length should be 15"}}))),l.a.createElement(h.B,{className:"form-group"},l.a.createElement(h.r,{htmlFor:"lastname",md:2},"Last Name"),l.a.createElement(h.l,{md:10},l.a.createElement(b.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:v,minLength:y(3),maxLength:N(15)}}),l.a.createElement(b.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Min length should be 3",maxLength:"max length should be 15"}}))),l.a.createElement(h.B,{className:"form-group"},l.a.createElement(h.r,{htmlFor:"telnum",md:2},"Contact Tel."),l.a.createElement(h.l,{md:10},l.a.createElement(b.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:v,isNumber:w,minLength:y(3),maxLength:N(15)}}),l.a.createElement(b.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",isNumber:"telnum should be numbers",minLength:"Min length should be 3",maxLength:"max length should be 15"}}))),l.a.createElement(h.B,{className:"form-group"},l.a.createElement(h.r,{htmlFor:"email",md:2},"Email"),l.a.createElement(h.l,{md:10},l.a.createElement(b.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:v,validEmail:k}}),l.a.createElement(b.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Email should contain only one  @"}}))),l.a.createElement(h.B,{className:"form-group"},l.a.createElement(h.l,{md:{size:6,offset:2}},l.a.createElement("div",{className:"form-check"},l.a.createElement(h.r,{check:!0},l.a.createElement(b.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",l.a.createElement("strong",null,"May we contact you?")))),l.a.createElement(h.l,{md:{size:3,offset:1}},l.a.createElement(b.Control.select,{model:".contactType",name:"contactType",className:"form-control"},l.a.createElement("option",null,"Tel."),l.a.createElement("option",null,"Email")))),l.a.createElement(h.B,{className:"form-group"},l.a.createElement(h.r,{htmlFor:"message",md:2},"Your Feedback"),l.a.createElement(h.l,{md:10},l.a.createElement(b.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),l.a.createElement(h.B,{className:"form-group"},l.a.createElement(h.l,{md:{size:10,offset:2}},l.a.createElement(h.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component);var C=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},l.a.createElement("h5",null,"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement(E.b,{to:"/home"},"Home")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/aboutus"},"About Us")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/menu"},"Menu")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/contactus"},"Contact Us")))),l.a.createElement("div",{className:"col-7 col-sm-5"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"121, Clear Water Bay Road",l.a.createElement("br",null),"Clear Water Bay, Kowloon",l.a.createElement("br",null),"HONG KONG",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",l.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),l.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},l.a.createElement("i",{className:"fa fa-google-plus"})),l.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},l.a.createElement("i",{className:"fa fa-youtube"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},l.a.createElement("i",{className:"fa fa-envelope-o"}))))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))};function x(e){var a=e.dish;e.onClick;return l.a.createElement(h.d,null,l.a.createElement(E.b,{to:"/menu/".concat(a.id)},l.a.createElement(h.g,{width:"100%",src:a.image,alt:a.name}),l.a.createElement(h.h,null,l.a.createElement(h.k,null,a.name))))}var j=function(e){var a=e.dishes.map(function(e){return l.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},l.a.createElement(x,{dish:e}))});return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(h.a,null,l.a.createElement(h.b,null,l.a.createElement(E.b,{to:"/home"},"Home ")),l.a.createElement(h.b,null,l.a.createElement(E.b,{to:"/menu"},"Menu ")))),l.a.createElement("div",{className:"col-12 "},l.a.createElement("h3",null,"Menu")),l.a.createElement("div",{className:"row"},a))};function I(e){return l.a.createElement("div",{key:e.leader.id,className:"col-12 mt-5"},l.a.createElement(h.s,{tag:"li"},l.a.createElement(h.s,{left:!0,middle:!0},l.a.createElement(h.s,{object:!0,src:e.leader.image,alt:e.leader.name})),l.a.createElement(h.s,{body:!0,className:"ml-5"},l.a.createElement(h.s,{heading:!0},e.leader.name),l.a.createElement("p",null,e.leader.designation),l.a.createElement("p",null,e.leader.description))))}var M=function(e){var a=e.leaders.map(function(e){return l.a.createElement(I,{leader:e})});return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(h.a,null,l.a.createElement(h.b,null,l.a.createElement(E.b,{to:"/home"},"Home")),l.a.createElement(h.b,{active:!0},"About Us")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"About Us"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("h2",null,"Our History"),l.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),l.a.createElement("p",null,"The restaurant traces its humble beginnings to ",l.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),l.a.createElement("div",{className:"col-12 col-md-5"},l.a.createElement(h.d,null,l.a.createElement(h.f,{className:"bg-primary text-white"},"Facts At a Glance"),l.a.createElement(h.e,null,l.a.createElement("dl",{className:"row p-1"},l.a.createElement("dt",{className:"col-6"},"Started"),l.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),l.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),l.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),l.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),l.a.createElement("dd",{className:"col-6"},"$1,250,375"),l.a.createElement("dt",{className:"col-6"},"Employees"),l.a.createElement("dd",{className:"col-6"},"40"))))),l.a.createElement("div",{className:"col-12"},l.a.createElement(h.d,null,l.a.createElement(h.e,{className:"bg-faded"},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),l.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",l.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",null,"Corporate Leadership")),l.a.createElement("div",{className:"col-12"},l.a.createElement(h.s,{list:!0},a))))},F=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={isModalOpen:!1},t.toggleModal=t.toggleModal.bind(Object(d.a)(Object(d.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){console.log("Current state is: "+JSON.stringify(e)),alert("Current state is: "+JSON.stringify(e))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.c,{outline:!0,onClick:this.toggleModal},l.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"),l.a.createElement(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement("div",{className:"container"},l.a.createElement(h.v,{toggle:this.toggleModal},"Comment"),l.a.createElement(h.u,null,l.a.createElement(b.LocalForm,{onSubmit:this.handleSubmit},l.a.createElement(h.B,{className:"form-group"},l.a.createElement(h.r,{htmlFor:"rating"}," Rating "),l.a.createElement(b.Control.select,{model:".rating ",name:"rating",id:"rating",className:"form-control"},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement(h.B,{className:"form-group"},l.a.createElement(h.r,{htmlFor:"yourname"},"Your name"),l.a.createElement(b.Control.text,{model:".yourname",name:"yourname",id:"yourname",className:"form-control"})),l.a.createElement(h.B,{className:"form-group"},l.a.createElement(h.r,{htmlFor:"textarea"}," Comment"),l.a.createElement(b.Control.textarea,{model:".textarea",name:"textarea",rows:"6",className:"form-control"})),l.a.createElement(h.c,{type:"submit",name:"submit",className:"bg-primary"},"Submit"))))))}}]),a}(n.Component);function S(e){var a=e.dish;return null!=a?l.a.createElement("div",{className:"container"},l.a.createElement(h.d,{key:a.id},l.a.createElement(h.g,{top:!0,src:a.image,alt:a.name}),l.a.createElement(h.e,null,l.a.createElement(h.k,null,a.name),l.a.createElement(h.j,null,a.description)))):l.a.createElement("div",null)}function T(e){var a=e.comment;if(null!=a){var t=a.map(function(e){return l.a.createElement("div",{className:"list-unstyled"},l.a.createElement("li",{key:e.id},l.a.createElement("p",null,e.comment),l.a.createElement("p",null,e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))});return l.a.createElement("div",{className:"list-unstyled"},l.a.createElement("h4",null,"Comments"),t,l.a.createElement(F,null))}return l.a.createElement("div",null)}var L=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(h.a,null,l.a.createElement(h.b,null,l.a.createElement(E.b,{to:"/menu"},"Menu")),l.a.createElement(h.b,{active:!0},e.dish.name)),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,e.dish.name),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement(S,{dish:e.dish})),l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement(T,{comment:e.comment}))))},A=t(18),Z=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(E.f,null,l.a.createElement(E.e,{path:"/home",component:function(){return l.a.createElement(p,{dish:e.props.dishes.filter(function(e){return e.featured})[0],leader:e.props.leaders.filter(function(e){return e.featured})[0],promotion:e.props.promotions.filter(function(e){return e.featured})[0]})}}),l.a.createElement(E.e,{path:"/aboutus",component:function(){return l.a.createElement(M,{leaders:e.props.leaders})}}),l.a.createElement(E.e,{exact:!0,path:"/menu",component:function(){return l.a.createElement(j,{dishes:e.props.dishes})}}),l.a.createElement(E.e,{path:"/menu/:dishId",component:function(a){var t=a.match;return l.a.createElement(L,{dish:e.props.dishes.filter(function(e){return e.id===parseInt(t.params.dishId,10)[0]}),comment:e.props.comments.filter(function(e){return e.dishId===parseInt(t.params.dishId,10)})})}}),l.a.createElement(E.e,{exact:!0,path:"/contactus",component:O}),l.a.createElement(E.d,{to:"/home"})),l.a.createElement(C,null))}}]),a}(n.Component),R=Object(E.g)(Object(A.connect)(function(e){return{dishes:e.dishes,promotions:e.promotions,leaders:e.leaders,comments:e.comments}})(Z)),B=(t(137),t(23)),q={dishes:[{id:0,name:"Uthappizza",image:"/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],comments:[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],leaders:[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],promotions:[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;arguments.length>1&&arguments[1];return e},H=Object(B.createStore)(z,q),P=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(A.Provider,{store:H},l.a.createElement(E.a,null,l.a.createElement("div",null,l.a.createElement(R,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,a,t){e.exports=t(138)},91:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.4d314d9c.chunk.js.map