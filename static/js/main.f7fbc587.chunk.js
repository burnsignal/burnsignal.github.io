(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{266:function(e,t,a){e.exports=a.p+"static/media/logo.0a58105d.png"},270:function(e,t,a){e.exports=a(655)},277:function(e,t,a){},279:function(e,t,a){},281:function(e,t,a){},283:function(e,t,a){},285:function(e,t,a){},287:function(e,t,a){},300:function(e,t){},321:function(e,t){},323:function(e,t){},392:function(e,t){},587:function(e,t){},623:function(e,t,a){e.exports=a.p+"static/media/profile.d6759143.png"},655:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(62),o=a.n(c),l=a(15);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(22),i=a(8),u={polls:[],web3:void 0,auth:!1,verified:!1},m=Object(n.createContext)(u),d=m.Provider,p=a(3),b=a.n(p),f=a(13),E=a(134),h=a(660),v=(a(277),a(279),a(281),a(283),a(285),a(287),a(53)),g=a(656),y=a(664),A=a(657),O=a(658),w=a(659),j=a(663),N=a(665),x=a(666),k=a(36),C=a.n(k),S=a(661),B=a(662),I="0x61a8598eabb7bddca95d3783c228878cd788e0a9",P={BAR_CONFIG:function(e,t,a){return a?{type:"horizontalBar",responsive:!0,data:{labels:["Yes","No"],datasets:[{data:e,borderColor:"#d048b6",borderWidth:2,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:0,right:0,top:0,bottom:-50}},legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1},ticks:{suggestedMin:0,padding:0,callback:function(e,t,a){return"",""}}}],yAxes:[{gridLines:{display:!1},ticks:{fontColor:"#d048b6",fontStyle:"bold",fontSize:13,mirror:!0}}]}}}:a?void 0:{type:"horizontalBar",responsive:!0,data:{labels:["Yes","No"],datasets:[{data:e,borderColor:"#d048b6",borderWidth:2,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},layout:{padding:{left:0,right:0,top:0,bottom:-50}},scales:{xAxes:[{scaleLabel:{display:!0},ticks:{mirror:!0,suggestedMin:0,callback:function(e,t,a){return"",""}}}]}}}},SPLINE_CONFIG:function(e,t){var a={};return{options:{lineTension:100,bezierCurve:!0,legend:{display:!1},tooltips:{enabled:!0,mode:"single",callbacks:{label:function(e,t){var a,n,r=e.yLabel;return r>55?(n=(100-r).toFixed(2),a=r.toFixed(2)):(a=(100-r).toFixed(2),n=r.toFixed(2))," Yes: ".concat(a,"% \n No: ").concat(n,"%")}}},scales:{xAxes:[{type:"time",time:{unit:"week",unitStepSize:1,displayFormats:{week:"MMM D"}},ticks:{callback:function(e,t,n){return void 0===a[e]||0==t?a[e]=!0:e="",e}}}],yAxes:[{id:"yAxis1",ticks:{min:0,max:t,callback:function(e,t,a){return"",""}}},{id:"yAxis2",labels:["","Yes","","No",""],type:"category",gridLines:{drawOnChartArea:!1,display:!1}}]}},type:"line",data:e}},SPLINE_STYLE:function(e){return{label:"Data",fill:!0,backgroundColor:e,borderColor:"#d048b6",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#d048b6",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#d048b6",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4}}},Y=[{constant:!1,inputs:[{name:"_name",type:"string"},{name:"_data",type:"string"},{name:"_deadline",type:"uint64"}],name:"newVoteProposal",outputs:[{name:"newProposal",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"proposal",type:"address"},{indexed:!1,name:"issuer",type:"address"},{indexed:!1,name:"deadline",type:"uint256"},{indexed:!1,name:"name",type:"string"},{indexed:!1,name:"data",type:"string"},{indexed:!1,name:"optionA",type:"string"},{indexed:!1,name:"optionAaddr",type:"address"},{indexed:!1,name:"optionB",type:"string"},{indexed:!1,name:"optionBaddr",type:"address"}],name:"newProposalIssued",type:"event"}],D=a(137),L=a.n(D),T=a(261),H=a.n(T),Z=a(262),z=a.n(Z),F=a(263),R=a.n(F),Q={walletconnect:{package:z.a,options:{infuraId:"ec7ebabd867b43d0a2cf6d65a85b8ad1"}},authereum:{package:R.a,options:{}}},M=function(){return new Promise(function(){var e=Object(f.a)(b.a.mark(function e(t,a){var n,r,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(n=new H.a.Core({network:"rinkeby",cacheProvider:!1,providerOptions:Q})).clearCachedProvider(),e.next=5,n.connect();case 5:r=e.sent,c=r.authereum?new L.a(r.authereum):new L.a(r),t(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t,a){return e.apply(this,arguments)}}())},V=(a(623),a(266)),G=a.n(V);var W=Object(E.h)(function(e){var t=Object(n.useState)({route:!1,create:!1,about:!1,network:!1}),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)({question:!1,description:!1}),d=Object(i.a)(u,2),p=(d[0],d[1],Object(n.useState)(r.a.createElement(ne,null))),k=Object(i.a)(p,2),P=k[0],D=k[1],L=Object(n.useState)(!1),T=Object(i.a)(L,2),H=T[0],Z=T[1],z=Object(n.useState)(r.a.createElement(oe,null)),F=Object(i.a)(z,2),R=F[0],Q=F[1],V=Object(n.useState)(""),W=Object(i.a)(V,2),q=(W[0],W[1],Object(n.useRef)(null)),K=Object(n.useRef)(null),J=Object(n.useContext)(m),U=J.dispatch,X=J.state,_=Object(E.f)(),$=function(){var e=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M();case 3:return t=e.sent,e.next=6,ee(t);case 6:window.ethereum.on("accountsChanged",function(){return ee(t)}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Web3 login could not be detected");case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.a)(b.a.mark(function e(t){var a,n,l;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.eth.getAccounts();case 2:return a=e.sent,e.next=5,t.eth.net.getId();case 5:n=e.sent,l=new t.eth.Contract(Y,I),4!==n&&o(Object(s.a)({},c,{network:!0})),D(r.a.createElement(re,{account:a[0]})),Q(r.a.createElement(ce,{account:a[0]})),U({payload:{web3:t,accounts:a,instance:l,auth:!0,verified:!0},type:"WEB3"});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),te=function(e,t){var a;t||window.history.pushState({},window.title,"/#/".concat(e)),o(Object(s.a)({},c,(a={},Object(v.a)(a,e,!0),Object(v.a)(a,"route",t),a)))},ae=function(e){var t;c.route?_.push("/"):_.goBack(),o(Object(s.a)({},c,(t={},Object(v.a)(t,e,!1),Object(v.a)(t,"route",!1),t)))};function ne(){return r.a.createElement(l.b,{to:"/login"},r.a.createElement(g.a,null,"Login"))}function re(e){var t=e.account;return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{type:"button",onClick:function(){return te("create")}}," Create "),r.a.createElement(l.b,{to:"/profile/".concat(t)},r.a.createElement(g.a,null," Profile ")),r.a.createElement(l.b,{to:"/logout"},r.a.createElement(g.a,null,"Logout")))}function ce(e){var t=e.account;return r.a.createElement(l.b,{className:"nav-link",to:"/profile/".concat(t)},r.a.createElement("img",{className:"nav-profile",src:C()(t)}))}function oe(){return r.a.createElement(l.b,{className:"nav-link",to:"/login"},r.a.createElement("div",{className:"nav-profile-alt"},r.a.createElement("i",{className:"far fa-user-circle"})))}var le=function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n,r,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=X.web3,a=X.instance,n=X.accounts,e.next=3,t.eth.getBlock("latest");case 3:return r=e.sent,c=r.timestamp+604800,e.next=7,a.methods.newVoteProposal(K.current.value,q.current.value,c).send({from:n[0]}).on("transactionHash",function(e){ae("create"),document.getElementsByClassName("create-poll-description")[0].value="",document.getElementsByClassName("create-poll-question")[0].value=""});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){!function(){var t=Object(f.a)(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.location&&(e.location.pathname.match("about")?te("about",!0):e.location.pathname.match("create")?te("create",!0):e.location.pathname.match("login")?($(),_.push("/")):e.location.pathname.match("logout")&&(U({payload:{web3:!1,auth:!1,verified:!1},type:"WEB3"}),D(r.a.createElement(ne,null)),Q(r.a.createElement(oe,null)),_.push("/")));case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[e.location.pathname]),r.a.createElement("nav",{className:"fixed-top"},r.a.createElement(h.a,null,r.a.createElement(S.a,null,r.a.createElement(B.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement("div",{className:"navbar navbar-expand-lg"},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{className:"navbar-logo",src:G.a}),r.a.createElement("span",{className:"navbar-title"}," Burn Signal "))),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},R,r.a.createElement(j.a,{isOpen:H,toggle:function(){return Z(function(e){return!e})}},r.a.createElement(N.a,{caret:!0},r.a.createElement("i",{className:"nav-login-icon tim-icons icon-minimal-down"})),r.a.createElement(x.a,null,r.a.createElement(l.b,{to:"/"},r.a.createElement(g.a,null," Home ")),P,r.a.createElement(g.a,{divider:!0}),r.a.createElement(g.a,{type:"button",onClick:function(){return te("about")}},"About"),r.a.createElement(g.a,{target:"_",href:"https://blog.burnsignal.io"},"Blog")))))))),r.a.createElement(function(){return r.a.createElement(y.a,{isOpen:c.network},r.a.createElement(A.a,null,r.a.createElement("h5",{className:"modal-title align-left"},"Incorrect Network")),r.a.createElement(O.a,null,"Your web3 provider is on the incorrect network, please change to Rinkeby testnet to proceed."),r.a.createElement(w.a,null))},null),r.a.createElement(function(){return r.a.createElement(y.a,{isOpen:c.create},r.a.createElement(A.a,null,r.a.createElement("h5",{className:"modal-title align-left"},"Create"),r.a.createElement("button",{type:"button",className:"close",onClick:function(){return ae("create")}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement(O.a,null,r.a.createElement("input",{name:"question",ref:K,placeholder:"Ask a question",className:"create-poll-question"}),r.a.createElement("textarea",{name:"description",ref:q,placeholder:"Description",className:"create-poll-description"}),r.a.createElement("button",{className:"btn btn-primary button-poll",onClick:le}," Create ")),r.a.createElement(w.a,null))},null),r.a.createElement(function(){return r.a.createElement(y.a,{isOpen:c.about},r.a.createElement(A.a,null,r.a.createElement("h5",{className:"modal-title align-left"},"About"),r.a.createElement("button",{type:"button",className:"close",onClick:function(){return ae("about")}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement(O.a,null,r.a.createElement("p",null,"Burn Signal is an experiment in distributed preference signaling where verified unique users burn ETH to signal their opinion."),r.a.createElement("p",null,"Votes are weighted quadratically."),r.a.createElement("p",null,"We use ",r.a.createElement("a",{id:"pink",target:"_",href:"https://brightid.org"},"BrightID")," as our proof of uniqueness, only votes cast by ethereum addresses that are verified unique by BrightID count towards the outcome of a burn signals."),r.a.createElement("br",null),r.a.createElement("p",null,"Burn Signal is funded by grants and community contributions. If you would like to contribute funds, check out our ",r.a.createElement("a",{id:"pink",target:"_",href:"https://gitcoin.co/grants/138/burner-vote"},"Gitcoin Grants campaign"),", if you would like to contribute code or other work, check out our ",r.a.createElement("a",{id:"pink",target:"_",href:"https://github.com/burnsignal"},"GitHub")," and our ",r.a.createElement("a",{id:"pink",target:"_",href:"https://colony.io/colony/burn"},"Colony"),"."),r.a.createElement("br",null),r.a.createElement("p",null,"Check out our ",r.a.createElement("a",{id:"pink",target:"_",href:"https://blog.burnsignal.io"}," blog ")," for more information.")),r.a.createElement(w.a,null))},null)))}),q=a(78),K=a(143),J=function(e){return Object(q.a)(e.substring(0,10)).reduceRight(function(e,t,a,n){return[].concat(Object(q.a)(e),[n.splice(~~(Math.random()*n.length),1)[0]])},[]).join("")},U=function(e,t){return e+(t=-1==Math.sign(t.y)?-1*t.y:t.y)},X=function(e){return-1===Math.sign(e)},_=function(e){return parseInt(e)>=1e15?"".concat(parseFloat(e/Math.pow(10,18)).toLocaleString()," ETH"):parseInt(e)>=1e6?"".concat(parseInt(e/1e9).toLocaleString()," GWEI"):parseInt(e)<1e6?"".concat(parseInt(e).toLocaleString()," WEI"):void 0},$=function(e,t){var a=e.concat(t),n=[],r=0;for(a.sort(function(e,t){return e.x-t.x});r<a.length;){var c=a[r],o=X(c.y)?-1*c.y:c.y,l=X(c.y)?t.slice(0,t.indexOf(c)+1):e.slice(0,e.indexOf(c)+1),s=100;if(0!=r){var i=a.slice(0,r+1).reduce(U,0),u=l.reduce(U,0),m=a[r-1];if(c.x-m.x<=225e5){var d=X(m.y)?-1*m.y:m.y;X(c.y)&&!X(m.y)||!X(c.y)&&X(m.y)?(s=u/i*100,s-=d/i*100):s=u/i*100,X(s)&&(s*=-1),n[n.length-1]={x:c.x,y:s},a[r-1]={x:c.x,y:d+o},a.splice(r,1)}else X(s=u/i*100)&&(s*=-1),n.push({x:c.x,y:s}),r++}else 0==r&&(n.push({x:c.x,y:s}),r++)}return n},ee=function(){var e=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={yes:[],no:[],voters:[]},e.next=3,Object.entries(t).map(function(){var e=Object(f.a)(b.a.mark(function e(t){var n,r,c,o,l,s,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(i.a)(t,2),n[0],r=n[1],c=r.address,o=r.yes,l=r.no,e.next=4,ae(o,"yes",[]);case 4:return s=e.sent,e.next=7,ae(l,"no",[]);case 7:u=e.sent,s.sort(function(e,t){return e.x-t.x}),u.sort(function(e,t){return e.x-t.x}),Object.assign(a.yes,a.yes.concat(s)),Object.assign(a.no,a.no.concat(u)),a.voters.push(c);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),te=function(e,t){return[e.reduce(U,0),t.reduce(U,0)]},ae=function(e,t,a){return new Promise(function(n){e.sqrt.forEach(function(n,r){var c=e.timestamps[r],o=parseFloat(n);"no"===t&&(o*=-1),isNaN(o)&&(o=0),a.push({x:1e3*c,y:o})}),n(a)})},ne=function(e){e=e.toLowerCase().replace("0x","");for(var t=Object(K.keccak_256)(e),a="0x",n=0;n<e.length;n++)parseInt(t[n],16)>=8?a+=e[n].toUpperCase():a+=e[n];return a};var re=a(649);var ce=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useRef)(null),u=Object(n.useContext)(m).state;e.title;var d=function(){var t=Object(f.a)(b.a.mark(function t(a){var n,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.web3,r=s.current.value%1===0?n.utils.toBN(parseFloat(s.current.value)).mul(n.utils.toBN(1e18)):parseInt(s.current.value*Math.pow(10,18)),t.next=4,n.eth.sendTransaction({to:e.address[a],from:u.accounts[0],value:r}).on("transactionHash",function(){e.modalToggle()});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)(function(){u.web3&&o(!1)},[]),r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{isOpen:!c&&e.modalState},u.web3&&u.verified&&r.a.createElement(function(t){var a=t.option;return r.a.createElement(n.Fragment,null,r.a.createElement(A.a,null,r.a.createElement("h5",{className:"modal-title"},e.title),r.a.createElement("button",{type:"button",className:"close",onClick:e.modalToggle},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement(O.a,null,r.a.createElement("span",{className:"vote-selection"}," How much ETH will you burn to cast your vote? "),r.a.createElement("input",{type:"number",ref:s,className:"modal-input",placeholder:"0.5 ETH"})),r.a.createElement(w.a,null,r.a.createElement("button",{type:"button",className:"btn btn-primary btn-verify","data-dismiss":"modal",onClick:function(){return d(a)}},"Vote ",a)))},{option:e.modalOption}),!u.web3&&!u.verified&&r.a.createElement(function(t){var a=t.option;return r.a.createElement(n.Fragment,null,r.a.createElement(A.a,null,e.title,r.a.createElement("button",{type:"button",className:"close",onClick:e.modalToggle},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement(O.a,{className:"align-center"},"Vote ",r.a.createElement("span",{id:"pink"},a)," by sending any amount of ETH to ",r.a.createElement("br",null),r.a.createElement("a",{target:"_",id:"pink",href:"https://etherscan.io/address/".concat(e.address[a])},e.address[a]),r.a.createElement("div",{className:"poll-qr"},r.a.createElement(re,{includeMargin:!0,size:200,value:e.address[a]})),"To ensure that you vote counts, please link your ethereum account to your BrightID account at\u2028 ",r.a.createElement("a",{target:"_",href:"https://ethereum.brightid.org"},"ethereum.brightid.org")),r.a.createElement(w.a,null))},{option:e.modalOption}),u.web3&&!u.verified&&r.a.createElement(function(){return r.a.createElement(n.Fragment,null,r.a.createElement(A.a,null,r.a.createElement("h5",{className:"modal-title"},"Please verify your account"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement(O.a,null,"Before casting your vote, you should verify your Ethereum account using BrightID."),r.a.createElement(w.a,null,r.a.createElement("button",{type:"button",className:"btn btn-primary btn-verify","data-dismiss":"modal"},"Verify")))},null)),r.a.createElement(y.a,{isOpen:c&&e.modalState},r.a.createElement(function(){return r.a.createElement("div",{className:"queryLogin"},r.a.createElement(A.a,null,"Log in to vote.",r.a.createElement("button",{type:"button",className:"close",onClick:e.modalToggle},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement(w.a,null,r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return o(!1)}},"Vote without authentication"),r.a.createElement(l.b,{to:"/login",onClick:e.modalToggle},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-verify","data-dismiss":"modal"},"Login"))))},null)))},oe=function(e){return'{ polls(where: { id: "'.concat(e,'" }) { yes no users { address yes { contributions timestamps total value sqrt } no { contributions timestamps total value sqrt } } } }')},le='{ issues(where: { title_not_contains: "question" }) { id poll body title issuer deadline optionBaddr optionAaddr } }',se=function(e){return'{ issues(where: { title: "'.concat(e,'" }) { poll } }')},ie=function(e){return'{ user(id: "'.concat(e.toLowerCase(),'") { burns polls burned } }')},ue='{ exchanges(where: { id:"0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667"}) { price } } ',me="https://api.thegraph.com/subgraphs/name/burnsignal/proof-of-concept",de="https://api.thegraph.com/subgraphs/name/graphprotocol/uniswap",pe=function(){var e=Object(f.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,Object(s.a)({},(n=t,{method:"POST",body:JSON.stringify({query:n})}))).then(function(e){return e.json()}).then(function(e){return e}).catch(console.log);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}var n},e)}));return function(t,a){return e.apply(this,arguments)}}();function be(){return fe.apply(this,arguments)}function fe(){return(fe=Object(f.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(le,me);case 2:return t=e.sent,a={},t.data.issues.sort(function(e,t){return t.deadline-e.deadline}),t.data.issues.forEach(function(e){a[e.poll]=Object(s.a)({},e)}),e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ee(e){return he.apply(this,arguments)}function he(){return(he=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(se(t),me);case 2:if(0!=(a=e.sent).data.issues.length){e.next=7;break}return e.abrupt("return",{id:""});case 7:return e.abrupt("return",a.data.issues[0].poll);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ve(e){return ge.apply(this,arguments)}function ge(){return(ge=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(oe(t),me);case 2:if(0!=(a=e.sent).data.polls.length){e.next=7;break}return e.abrupt("return",{yes:0,no:0,users:[]});case 7:return e.abrupt("return",a.data.polls[0]);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ye(e){return Ae.apply(this,arguments)}function Ae(){return(Ae=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(ie(t),me);case 2:if(null!==(a=e.sent).data.user){e.next=7;break}return e.abrupt("return",{burned:0,polls:[],burns:[]});case 7:return e.abrupt("return",a.data.user);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Oe(){return we.apply(this,arguments)}function we(){return(we=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(ue,de);case 2:return t=e.sent,console.log(t),e.abrupt("return",t.data.exchanges[0].price);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var je=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)(0),p=Object(i.a)(d,2),h=p[0],v=p[1],g=Object(n.useState)(0),y=Object(i.a)(g,2),A=y[0],O=y[1],w=Object(E.g)().address;return Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n,r,o,l,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye(w);case 2:t=e.sent,a=[],n=t.burned,r=t.polls,o=t.burns,l=0;case 6:if(!(l<r.length)){e.next=14;break}return e.next=9,Ee(r[l]);case 9:s=e.sent,"question"!=r[l]&&a.push({address:s,title:r[l]});case 11:l++,e.next=6;break;case 14:O(_(parseInt(n)/o.length)),v(o.length),c(_(n)),m(a);case 18:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("div",{className:"profile"},r.a.createElement(S.a,null,r.a.createElement(B.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement(l.b,{to:"/profile/".concat(w)},r.a.createElement("img",{className:"profile-blockie",src:C()(w)})),r.a.createElement("div",{className:"profile-address"},r.a.createElement("a",{href:"https://etherscan.io/address/".concat(w)},ne(w))),r.a.createElement("div",{className:"profile-traits"},r.a.createElement("ul",null,r.a.createElement("li",null,"Burned: ",r.a.createElement("span",{id:"pink"},a)," "),r.a.createElement("li",null,"Burns: ",r.a.createElement("span",{id:"pink"},h)," "),r.a.createElement("li",null,"Average: ",r.a.createElement("span",{id:"pink"},A)," "))))))),r.a.createElement(S.a,null,r.a.createElement(B.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"Polls")),r.a.createElement("div",{className:"card-body"}),r.a.createElement("ul",null,u.map(function(e){return r.a.createElement(l.b,{to:"/poll/".concat(e.address)},r.a.createElement("li",null," ",e.title," "))}))))))},Ne=a(96),xe=a.n(Ne),ke=a(97),Ce=a.n(ke);var Se=function(e){var t=e.chartId;return Object(n.useEffect)(function(){!function(){var a=e.pollRecords,n=a.yes,r=a.no,c=$(n,r),o=document.getElementById(t).getContext("2d"),l=o.createLinearGradient(0,337.5,0,25);l.addColorStop(1,"rgba(255,51,138,0.225)"),l.addColorStop(.7,"rgba(255,51,138,0.2)"),l.addColorStop(.5,"rgba(255,51,138,0.125)"),l.addColorStop(.2,"rgba(255,51,138,0.075)"),l.addColorStop(0,"rgba(119,52,169,0)"),c.sort(function(e,t){return e.x-t.x});var i={datasets:[Object(s.a)({},P.SPLINE_STYLE(l),{data:c})]};new Ce.a(o,Object(s.a)({},P.SPLINE_CONFIG(i,100)))}()},[]),r.a.createElement(n.Fragment,null,r.a.createElement("canvas",{id:t}," "))};var Be=function(e){var t=e.chartId;return Object(n.useEffect)(function(){!function(){var a=e.pollCount,n=a.yes,r=a.no,c=document.getElementById(t).getContext("2d"),o=function(e){return e/(n+r)*100},l=[o(n),o(r)];new Ce.a(c,Object(s.a)({},P.BAR_CONFIG(l,100,e.type)))}()},[]),r.a.createElement("div",{className:"chart-container"},r.a.createElement("canvas",{id:t}," "))};var Ie=function(e){var t=Object(n.useState)({yes:"",no:""}),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)({yes:0,no:0}),d=Object(i.a)(u,2),p=d[0],h=d[1],v=Object(n.useState)(""),g=Object(i.a)(v,2),y=g[0],A=g[1],O=Object(n.useState)(!1),w=Object(i.a)(O,2),j=w[0],N=w[1],x=Object(n.useState)(0),k=Object(i.a)(x,2),I=k[0],P=k[1],Y=Object(n.useState)(0),D=Object(i.a)(Y,2),L=D[0],T=D[1],H=Object(n.useState)("0x"),Z=Object(i.a)(H,2),z=Z[0],F=Z[1],R=Object(n.useState)({}),Q=Object(i.a)(R,2),M=Q[0],V=Q[1],G=Object(n.useState)(""),W=Object(i.a)(G,2),q=W[0],K=W[1],U=Object(n.useState)(""),X=Object(i.a)(U,2),$=X[0],ae=X[1],re=Object(n.useState)(""),oe=Object(i.a)(re,2),le=oe[0],se=oe[1],ie=Object(n.useState)(0),ue=Object(i.a)(ie,2),me=ue[0],de=ue[1],pe=Object(n.useContext)(m).state,be=Object(E.g)().address,fe=Object(E.f)(),Ee=void 0!==e.location?be:e.id,he=function(){return ae(!$)};function ge(t,a){var n="".concat(e.location.pathname,"/").concat(t);a&&fe[fe.length-1]!==n&&fe.push(n),K(t),he()}return Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n,r,c,l,i,u,m,d,p,f,E,v,g;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===pe.polls[Ee]){e.next=23;break}return t=pe.polls[Ee],a=t.title,n=t.body,r=t.issuer,c=t.optionAaddr,l=t.optionBaddr,e.next=4,ve(a);case 4:return i=e.sent,u=i.yes,m=i.users,d=i.no,p=parseInt(u)+parseInt(d),f=pe.price*p/Math.pow(10,18),e.next=10,ee(m);case 10:E=e.sent,v=te(E.yes,E.no),g=_(p),h({yes:v[0],no:v[1]}),o({yes:c,no:l}),F(ne(r)),P(E.voters.length),de(f.toFixed(2)),V(Object(s.a)({},E)),A(n),N(!0),T(g),se(a);case 23:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[pe.polls]),Object(n.useEffect)(function(){e.location&&(e.location.pathname.match("yes")?ge("yes",!1):e.location.pathname.match("no")&&ge("no",!1))},[]),r.a.createElement("div",{className:"poll"},r.a.createElement(S.a,null,r.a.createElement(ce,{modalOption:q,modalToggle:function(){var t=e.location.pathname.replace("/yes","");t=t.replace("/no",""),fe.push(t),he()},modalState:$,title:le,address:c}),r.a.createElement(B.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement(l.b,{className:"poll-issuer",to:"/profile/".concat(z)},r.a.createElement("img",{className:"poll-profile",src:C()(z)})),r.a.createElement("div",{className:"poll-info"},r.a.createElement("div",{className:"poll-title"},le),r.a.createElement("div",{className:"poll-description"},y))),r.a.createElement("div",{className:"card-body vote-body"},r.a.createElement("div",{className:"vote-options"},r.a.createElement("button",{className:"btn btn-simple",onClick:function(){return ge("yes",!0)}},"Yes"),r.a.createElement("button",{className:"btn btn-simple",onClick:function(){return ge("no",!0)}},"No")))))),r.a.createElement(S.a,null,r.a.createElement(B.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"Results")),r.a.createElement("div",{className:"card-body"},j&&r.a.createElement(Be,{type:!1,chartId:J(Ee),pollCount:p}))))),r.a.createElement(S.a,null,r.a.createElement(B.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"Details")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{class:"poll-details"},r.a.createElement("i",{id:"pink",className:"far fa-user"}),"\xa0\xa0",I,r.a.createElement("img",{src:xe.a,className:"eth-icon-xl"}),"\xa0\xa0",L,"\xa0\xa0|\xa0\xa0$",me),j&&r.a.createElement(Se,{chartId:J(Ee),pollRecords:M}))))))};var Pe=function(e){var t=Object(n.useState)({yes:"",no:""}),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)({yes:0,no:0}),d=Object(i.a)(u,2),p=d[0],h=d[1],v=Object(n.useState)(""),g=Object(i.a)(v,2),y=g[0],A=g[1],O=Object(n.useState)(!1),w=Object(i.a)(O,2),j=w[0],N=w[1],x=Object(n.useState)(0),k=Object(i.a)(x,2),I=k[0],P=k[1],Y=Object(n.useState)(0),D=Object(i.a)(Y,2),L=D[0],T=D[1],H=Object(n.useState)("0x"),Z=Object(i.a)(H,2),z=Z[0],F=Z[1],R=Object(n.useState)({}),Q=Object(i.a)(R,2),M=(Q[0],Q[1]),V=Object(n.useState)(""),G=Object(i.a)(V,2),W=G[0],q=G[1],K=Object(n.useState)(""),U=Object(i.a)(K,2),X=U[0],$=U[1],ae=Object(n.useState)(""),re=Object(i.a)(ae,2),oe=re[0],le=re[1],se=Object(n.useState)(0),ie=Object(i.a)(se,2),ue=(ie[0],ie[1]),me=Object(n.useContext)(m).state,de=Object(E.g)().address,pe=Object(E.f)(),be=void 0!==e.location?de:e.id,fe=function(){return $(!X)};function Ee(e,t){var a="/#/poll/".concat(be,"/").concat(e);window.history.pushState({},window.title,a),q(e),fe()}return Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n,r,c,l,i,u,m,d,p,f,E,v,g;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===me.polls[be]){e.next=23;break}return t=me.polls[be],a=t.title,n=t.body,r=t.issuer,c=t.optionAaddr,l=t.optionBaddr,e.next=4,ve(a);case 4:return i=e.sent,u=i.yes,m=i.users,d=i.no,p=parseInt(u)+parseInt(d),f=me.price*p/Math.pow(10,18),e.next=10,ee(m);case 10:E=e.sent,v=te(E.yes,E.no),g=_(p),h({yes:v[0],no:v[1]}),o({yes:c,no:l}),F(ne(r)),P(E.voters.length),ue(f.toFixed(2)),M(Object(s.a)({},E)),A(n),N(!0),T(g),le(a);case 23:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[me.polls]),r.a.createElement("div",{className:"feed-poll"},r.a.createElement(S.a,null,r.a.createElement(ce,{modalOption:W,modalToggle:function(){pe.goBack(),fe()},modalState:X,title:oe,address:c}),r.a.createElement(B.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement("div",{className:"card"},r.a.createElement(l.b,{to:"/poll/".concat(be)},r.a.createElement("div",{className:"card-header"},r.a.createElement(l.b,{className:"poll-issuer",to:"/profile/".concat(z)},r.a.createElement("img",{className:"poll-profile",src:C()(z)})),r.a.createElement("div",{className:"poll-info"},r.a.createElement("div",{className:"poll-title"},oe),r.a.createElement("div",{className:"poll-description"},y))),r.a.createElement("div",{className:"card-body vote-body"},r.a.createElement("button",{className:"btn btn-simple",onClick:function(e){e.preventDefault(),Ee("yes")}},"Yes"),r.a.createElement("button",{className:"btn btn-simple",onClick:function(e){e.preventDefault(),Ee("no")}},"No"),r.a.createElement("div",{className:"poll-result"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{id:"pink",className:"far fa-user"}),"\xa0\xa0",I),r.a.createElement("li",null,r.a.createElement("img",{src:xe.a,className:"eth-icon"}),"\xa0\xa0",L),r.a.createElement("li",null,"Results"),j&&r.a.createElement(Be,{type:!0,chartId:J(be),pollCount:p})))))))))};var Ye=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useContext)(m).state,c=function(){var n=Object(f.a)(b.a.mark(function n(){var r,c,o,l,s;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.web3,c=a.instance,o=a.accounts,n.next=3,r.eth.getBlock("latest");case 3:return l=n.sent,s=l.timestamp+604800,n.next=7,c.methods.newVoteProposal(t.current.value,e.current.value,s).send({from:o[0]}).on("transactionHash",function(e){document.getElementsByClassName("create-poll-description")[0].value="",document.getElementsByClassName("create-poll-question")[0].value=""});case 7:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,a.web3&&r.a.createElement("div",{className:"new-poll"},r.a.createElement(S.a,null,r.a.createElement(B.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"}),r.a.createElement("div",{className:"card-body"},r.a.createElement(l.b,{to:"/profile/".concat(a.accounts[0])},r.a.createElement("img",{className:"new-poll-profile",src:C()(a.accounts[0])})),r.a.createElement(function(){return r.a.createElement(n.Fragment,null,r.a.createElement("input",{ref:t,name:"question",placeholder:"Ask a question",className:"create-poll-question"}),r.a.createElement("textarea",{name:"description",ref:e,placeholder:"Description",className:"create-poll-description"}),r.a.createElement("button",{className:"btn btn-primary button-poll",onClick:c}," Create "))},null)))))),Object.keys(a.polls).map(function(e,t){return r.a.createElement(Pe,{key:e,id:e})}))};function De(){return r.a.createElement("center",null,r.a.createElement("div",{class:"page404"},r.a.createElement("h2",null," 404 not found "),r.a.createElement("label",null," Oops, looks like you've made a wrong turn...",r.a.createElement("br",null),r.a.createElement(l.b,{to:"/"}," Take me back! "))))}var Le=Object(E.h)(function(e){var t=Object(n.useContext)(m),a=t.dispatch;return t.state,Object(n.useEffect)(function(){return window.scrollTo(0,0)},[e.location.pathname]),Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe();case 2:return t=e.sent,e.next=5,be();case 5:n=e.sent,a({payload:{polls:n,price:t},type:"POLL"});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("main",null,r.a.createElement(W,null),r.a.createElement(h.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/poll/:address/:option?",component:Ie}),r.a.createElement(E.a,{path:"/profile/:address",component:je}),r.a.createElement(E.a,{exact:!0,path:"/",component:Ye}),r.a.createElement(E.a,{path:"/logout",component:Ye}),r.a.createElement(E.a,{path:"/login",component:Ye}),r.a.createElement(E.a,{path:"/create",component:Ye}),r.a.createElement(E.a,{path:"/about",component:Ye}),r.a.createElement(E.a,null,r.a.createElement(De,null)))))});o.a.render(r.a.createElement(function(e){var t=e.children,a=Object(n.useReducer)(function(e,t){switch(t.type){case"POLL":case"WEB3":return Object(s.a)({},e,t.payload);default:return e}},u),c=Object(i.a)(a,2),o=c[0],l=c[1];return r.a.createElement(d,{value:{state:o,dispatch:l}},t)},null,r.a.createElement(l.a,{basename:"/"},r.a.createElement(n.Fragment,null,r.a.createElement(Le,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t){e.exports="data:image/png;base64,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"}},[[270,2,1]]]);
//# sourceMappingURL=main.f7fbc587.chunk.js.map