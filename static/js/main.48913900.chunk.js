(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(64)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(30),r=n.n(c);n(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(7),i=n(12),u=n(1),s=n(2),m=n(4),b=n(3),p=n(5),h=(n(39),n(40),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-homepage"},l.a.createElement("ul",{className:"nav-left"},l.a.createElement("li",null,"OwnHome Logo")),l.a.createElement("ul",{className:"nav-right"},l.a.createElement("li",null,"FAQs"),l.a.createElement("li",null,"Blog"),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/services"},"Hire Tradie"))))))}}]),t}(a.Component)),E=n(16),d=(n(46),a.Component,function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("div",{className:"home-container"},l.a.createElement("div",{className:"home-title"},l.a.createElement("h1",null,"House Prices are F#$%ed."),l.a.createElement("h3",null,"OwnHome is getting people on the housing ladder with our innovative solution")),l.a.createElement("div",{className:"home-video"},l.a.createElement("iframe",{className:"landing-page-explainer-video",src:"https://www.youtube.com/embed/tgbNymZ7vqY"})),l.a.createElement("div",{className:"home-signup"},l.a.createElement("form",{className:"signup-form"},l.a.createElement("input",{type:"text",className:"signup-input",placeholder:"Enter email address"}),l.a.createElement("button",{className:"signup-btn"},"Join Waitlist")))))}}]),t}(a.Component)),j=n(13),v=n.n(j),f=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).getAllJobs=function(){v.a.get("http://localhost:4000/jobs").then(function(e){n.setState({jobs:e.data})})},n.addJob=function(){console.log("add!")},n.state={jobs:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllJobs()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",null,l.a.createElement(o.b,{to:"/"},"Home"))),l.a.createElement("h3",null,"Welcome to the Jobs page"),l.a.createElement(o.b,{to:"/jobs/addjob"},l.a.createElement("button",null,"Add New Job")),l.a.createElement("br",null),l.a.createElement("br",null),this.state.jobs.length>0?this.state.jobs.map(function(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(o.b,{to:"/services/jobs/:id"+e._id},e.title)),l.a.createElement("div",null,e.category),l.a.createElement("div",null,e.price),l.a.createElement("br",null))}):l.a.createElement("div",null,"Loading..."))}}]),t}(a.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",null,"Who do you need"),l.a.createElement("input",{type:"text",placeholder:"Plumber"}),l.a.createElement("label",null,"What happened"),l.a.createElement("input",{type:"text",placeholder:"Broken Door"}),l.a.createElement("input",{type:"submit"})))}}]),t}(a.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(a.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(a.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).handleChange=function(e){return function(t){n.setState(Object(E.a)({},e,t.target.value))}},n.nextStep=function(){var e=n.state.step;n.setState({step:e+1})},n.prevStep=function(){var e=n.state.step;n.setState({step:e-1})},n.state={step:1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){switch(this.state.step){case 1:return l.a.createElement(O,null);case 2:return l.a.createElement(g,null);case 3:return l.a.createElement(y,null);case 4:return l.a.createElement(w,null)}}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).onChangeTitle=function(e){n.setState({title:e.target.value})},n.onChangeCategory=function(e){n.setState({category:e.target.value})},n.onChangePrice=function(e){n.setState({price:e.target.value})},n.onSubmit=function(){var e={title:n.state.title,category:n.state.category,price:n.state.price,description:n.state.description};v.a.post("http://localhost:4000/jobs/new",e).then(function(e){console.log(e)})},n.state={title:"",category:"",price:0,description:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",null,l.a.createElement(o.b,{to:"/"},"Home"))),l.a.createElement("h3",null,"New a Job"),l.a.createElement(k,null))}}]),t}(a.Component),N=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).state={job:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.post("http://localhost:4000/job",{id:this.props.match.params.id}).then(function(t){console.log(t),e.setState({job:t.data[0]})},function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("div",null,l.a.createElement(o.b,{to:"/jobs"},"All Jobs"))),l.a.createElement("h1",null,"Job page"),l.a.createElement("button",null,"Edit Job"),l.a.createElement("button",null,"Delete Job"),l.a.createElement("ul",null,l.a.createElement("li",null,this.state.job.title),l.a.createElement("li",null,this.state.job.category),l.a.createElement("li",null,this.state.job.price)))}}]),t}(a.Component),J=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("h1",null,"Filler underneath the nav"),l.a.createElement("h2",null,"Welcome to the other page"),l.a.createElement("h2",null,"Hire professional/accredited tradies"),l.a.createElement("p",null,"Post a job, get free quotes, no commitment"),l.a.createElement("div",{className:"book-service"},l.a.createElement("button",null,l.a.createElement(o.b,{to:"/services/postjob"},"Post a job"))))}}]),t}(a.Component),x=l.a.createElement(o.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:d}),l.a.createElement(i.a,{exact:!0,path:"/services/jobs",component:f}),l.a.createElement(i.a,{exact:!0,path:"/services/postjob",component:C}),l.a.createElement(i.a,{exact:!0,path:"/services/jobs/:id",component:N}),l.a.createElement(i.a,{exact:!0,path:"/services",component:J}));r.a.render(x,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.48913900.chunk.js.map