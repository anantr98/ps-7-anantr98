(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(6),r=n.n(c),i=(n(27),n(8)),l=n(9),u=n(12),s=n(10),m=n(13),d=(n(29),n(38)),h=n(36),f=n(37),p=n(21),b=n(7),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a("data/BigUSCities.csv").then(function(t){e.setState({data:t}),console.log(e.state.data)})}},{key:"render",value:function(){return console.log(this.state.data),o.a.createElement("div",{className:"container"},"Locations",this.state.data.map(function(e,t){return o.a.createElement(b.a,{key:"Locations"+t},o.a.createElement(b.b,null,o.a.createElement(b.d,null,e.City),o.a.createElement(b.c,null,e.Country)))}))}}]),t}(a.Component);function E(){return o.a.createElement("div",null,"My name is Anant Rajeev. I am 20 years old and from Northern California.")}function w(){return o.a.createElement("div",null,"Welcome to Anant's Website.")}var j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(h.a,{to:"/"},"Home")," ",o.a.createElement(h.a,{to:"/Location"},"Locations")," ",o.a.createElement(h.a,{to:"/about"},"About"),o.a.createElement(f.a,{exact:!0,path:"/",component:w}),o.a.createElement(f.a,{path:"/Location",component:v}),o.a.createElement(f.a,{path:"/about",component:E})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.672574ae.chunk.js.map