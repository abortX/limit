var nu=Object.defineProperty;var Cl=Object.getOwnPropertySymbols;var iu=Object.prototype.hasOwnProperty,ru=Object.prototype.propertyIsEnumerable;var yo=(ie,G,$)=>G in ie?nu(ie,G,{enumerable:!0,configurable:!0,writable:!0,value:$}):ie[G]=$,Pl=(ie,G)=>{for(var $ in G||(G={}))iu.call(G,$)&&yo(ie,$,G[$]);if(Cl)for(var $ of Cl(G))ru.call(G,$)&&yo(ie,$,G[$]);return ie};var is=(ie,G,$)=>(yo(ie,typeof G!="symbol"?G+"":G,$),$);import{g as kn,o as Cn,a as hn,c as un,p as Vn,b as jn,d as We,e as Pn,F as su,f as ou,h as au}from"./vendor.7151e625.js";const lu=function(){const G=document.createElement("link").relList;if(G&&G.supports&&G.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))k(U);new MutationObserver(U=>{for(const fe of U)if(fe.type==="childList")for(const le of fe.addedNodes)le.tagName==="LINK"&&le.rel==="modulepreload"&&k(le)}).observe(document,{childList:!0,subtree:!0});function $(U){const fe={};return U.integrity&&(fe.integrity=U.integrity),U.referrerpolicy&&(fe.referrerPolicy=U.referrerpolicy),U.crossorigin==="use-credentials"?fe.credentials="include":U.crossorigin==="anonymous"?fe.credentials="omit":fe.credentials="same-origin",fe}function k(U){if(U.ep)return;U.ep=!0;const fe=$(U);fetch(U.href,fe)}};lu();var Wn=(ie,G)=>{for(const[$,k]of G)ie[$]=k;return ie};const xo=ie=>(Vn("data-v-08c1b2ab"),ie=ie(),jn(),ie),cu={class:"panel"},hu=xo(()=>We("div",{class:"panel-header"},"\u7C7B\u578B",-1)),uu=xo(()=>We("div",{class:"chart",id:"lefttop"},null,-1)),du=xo(()=>We("div",{class:"panel-footer"},null,-1)),pu=[hu,uu,du],fu={setup(ie){const G=kn().appContext.config.globalProperties;function $(k){var U=[],fe=[];for(var le in k)U.push(le),fe.push(k[le]);let O=G.lefttop.getOption();O.series[0].data=fe,O.xAxis[0].data=U,G.lefttop.setOption(O),G.lefttop.hideLoading()}return Cn(()=>{G.lefttop=G.echarts.init(document.getElementById("lefttop"));var k={backgroundColor:"transparent",tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 233,0)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(0, 255, 233,0)"}],global:!1}}}},grid:{top:"20%",left:"5%",right:"5%",bottom:"10%"},xAxis:[{type:"category",axisLine:{show:!1},splitArea:{color:"#f00",lineStyle:{color:"#f00"}},axisLabel:{color:"#fff"},splitLine:{show:!1},boundaryGap:!1,data:["A","B","C","D","E","F"]}],yAxis:[{type:"value",min:0,splitNumber:1,splitLine:{show:!1,lineStyle:{color:"rgba(255,255,255,0.1)"}},axisLine:{show:!1},axisLabel:{show:!1,margin:20,textStyle:{color:"#d1e6eb"}},axisTick:{show:!1}}],series:[{name:"\u6CE8\u518C\u603B\u91CF",type:"line",smooth:!0,showAllSymbol:!0,symbol:"circle",symbolSize:20,label:{show:!0,position:"top",textStyle:{color:"#00b3f4"}},itemStyle:{color:"#00b3f4",borderColor:"#fff",borderWidth:0,shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},tooltip:{show:!1},areaStyle:{normal:{color:new G.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0,179,244,0.3)"},{offset:1,color:"rgba(0,179,244,0)"}],!1),shadowColor:"rgba(0,179,244, 0.9)",shadowBlur:20}},data:[502.84,205.97,332.79,281.55,398.35,214.02]}]};G.lefttop.showLoading({textColor:"#fff",color:"rgba(4,13,33,255)",maskColor:"rgba(4,13,33,255)"}),G.lefttop.setOption(k),window.addEventListener("resize",function(){G.lefttop.resize()}),G.WebSocket.register_call("type_type",$)}),(k,U)=>(hn(),un("div",cu,pu))}};var mu=Wn(fu,[["__scopeId","data-v-08c1b2ab"]]);const _o=ie=>(Vn("data-v-d12c855c"),ie=ie(),jn(),ie),gu={class:"panel"},vu=_o(()=>We("div",{class:"panel-header"},"\u670D\u52A1",-1)),yu=_o(()=>We("div",{class:"chart",id:"leftcenter"},null,-1)),xu=_o(()=>We("div",{class:"panel-footer"},null,-1)),_u=[vu,yu,xu],bu={setup(ie){const G=kn().appContext.config.globalProperties;function $(k){let U=G.leftcenter.getOption();U.series[1].data=k.values,U.series[0].data=k.values2,U.xAxis[0].data=k.keys,G.leftcenter.setOption(U),G.leftcenter.hideLoading()}return Cn(()=>{G.leftcenter=G.echarts.init(document.getElementById("leftcenter"));var k={backgroundColor:"transparent",tooltip:{show:!0,trigger:"axis",backgroundColor:"RGBA(0, 49, 85, 1)",borderColor:"rgba(0, 151, 251, 1)",borderWidth:1,borderRadius:0,textStyle:{color:"#BCE9FC",fontSize:10,align:"left"}},legend:{data:["\u5206\u53D1","\u8BF7\u6C42"],textStyle:{color:"#ccc"},top:"90%"},grid:{right:"0%",top:"5%",left:"0%",bottom:"10%",containLabel:!0},xAxis:{type:"category",boundaryGap:!0,data:["01","02","03","04","05"],axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"rgba(255,255,255,.7)"}},splitLine:{show:!1,lineStyle:{color:"rgba(77, 128, 254, 0.2)"}}},yAxis:[{show:!0,type:"value",splitNumber:0,axisLabel:{textStyle:{color:"rgba(255,255,255,.7)",fontStyle:"normal",fontSize:12}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{color:"rgba(77, 128, 254, 0.2)"}}}],series:[{name:"\u5206\u53D1",type:"pictorialBar",barWidth:"60%",stack:"\u603B\u91CF",label:{normal:{show:!1}},itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 151, 251, 1)"},{offset:1,color:"rgba(0, 34, 66, 0.2)"}],globalCoord:!1}}},symbol:"path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",data:[23,84,101,74,87]},{name:"\u8BF7\u6C42",type:"pictorialBar",barWidth:"60%",stack:"\u603B\u91CF",label:{normal:{show:!1}},itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 255, 0, 1)"},{offset:1,color:"rgba(0, 34, 66, 0.2)"}],globalCoord:!1}}},symbol:"path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",data:[13,54,71,24,57]}]};G.leftcenter.showLoading({textColor:"#fff",color:"rgba(4,13,33,255)",maskColor:"rgba(4,13,33,255)"}),G.leftcenter.setOption(k),window.addEventListener("resize",function(){G.leftcenter.resize()}),G.WebSocket.register_call("log_type",$)}),(k,U)=>(hn(),un("div",gu,_u))}};var wu=Wn(bu,[["__scopeId","data-v-d12c855c"]]);const bo=ie=>(Vn("data-v-4ca265aa"),ie=ie(),jn(),ie),Mu={class:"panel"},Su=bo(()=>We("div",{class:"panel-header"},"\u79BB\u7EBF",-1)),Eu=bo(()=>We("div",{class:"chart",id:"leftbuttom"},null,-1)),Tu=bo(()=>We("div",{class:"panel-footer"},null,-1)),Lu=[Su,Eu,Tu],Au={setup(ie){const G=kn().appContext.config.globalProperties;var $=60;function k(U){$=(parseFloat(U)*100).toFixed(0);let fe=G.leftbuttom.getOption();fe.title[0].text="{a|"+$+"}{c|%}",G.leftbuttom.setOption(fe),G.leftbuttom.hideLoading()}return Cn(()=>{G.leftbuttom=G.echarts.init(document.getElementById("leftbuttom"));let U=0,fe=60;var le,O={backgroundColor:"transparent",title:{text:"{a|"+fe+"}{c|%}",x:"center",y:"center",textStyle:{rich:{a:{fontSize:20,color:"#29EEF3"},c:{fontSize:20,color:"#ffffff"}}}},series:[{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(Le,oe){return{type:"arc",shape:{cx:oe.getWidth()/2,cy:oe.getHeight()/2,r:Math.min(oe.getWidth(),oe.getHeight())/2*.9,startAngle:(0+U)*Math.PI/180,endAngle:(90+U)*Math.PI/180},style:{stroke:"#8383FA",fill:"transparent",lineWidth:2},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(Le,oe){let se=oe.getWidth()/2,pe=oe.getHeight()/2,Me=Math.min(oe.getWidth(),oe.getHeight())/2*.9,Ue=we(se,pe,Me,90+U);return{type:"circle",shape:{cx:Ue.x,cy:Ue.y,r:4},style:{stroke:"#8450F9",fill:"#8450F9"},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(Le,oe){return{type:"arc",shape:{cx:oe.getWidth()/2,cy:oe.getHeight()/2,r:Math.min(oe.getWidth(),oe.getHeight())/2*.9,startAngle:(180+U)*Math.PI/180,endAngle:(270+U)*Math.PI/180},style:{stroke:"#4386FA",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(Le,oe){let se=oe.getWidth()/2,pe=oe.getHeight()/2,Me=Math.min(oe.getWidth(),oe.getHeight())/2*.9,Ue=we(se,pe,Me,180+U);return{type:"circle",shape:{cx:Ue.x,cy:Ue.y,r:4},style:{stroke:"#4386FA",fill:"#4386FA"},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(Le,oe){return{type:"arc",shape:{cx:oe.getWidth()/2,cy:oe.getHeight()/2,r:Math.min(oe.getWidth(),oe.getHeight())/2*.65,startAngle:(270+-U)*Math.PI/180,endAngle:(40+-U)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(Le,oe){return{type:"arc",shape:{cx:oe.getWidth()/2,cy:oe.getHeight()/2,r:Math.min(oe.getWidth(),oe.getHeight())/2*.65,startAngle:(90+-U)*Math.PI/180,endAngle:(220+-U)*Math.PI/180},style:{stroke:"#FF8E89",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(Le,oe){let se=oe.getWidth()/2,pe=oe.getHeight()/2,Me=Math.min(oe.getWidth(),oe.getHeight())/2*.65,Ue=we(se,pe,Me,90+-U);return{type:"circle",shape:{cx:Ue.x,cy:Ue.y,r:4},style:{stroke:"#FF8E89",fill:"#FF8E89"},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(Le,oe){let se=oe.getWidth()/2,pe=oe.getHeight()/2,Me=Math.min(oe.getWidth(),oe.getHeight())/2*.65,Ue=we(se,pe,Me,270+-U);return{type:"circle",shape:{cx:Ue.x,cy:Ue.y,r:4},style:{stroke:"#0CD3DB",fill:"#0CD3DB"},silent:!0}},data:[0]},{name:"\u5403\u732A\u8089\u9891\u7387",type:"pie",radius:["52%","40%"],silent:!0,clockwise:!0,startAngle:90,z:0,zlevel:0,label:{normal:{position:"center"}},data:[{value:fe,name:"",itemStyle:{normal:{color:{colorStops:[{offset:0,color:"#A098FC"},{offset:.3,color:"#4386FA"},{offset:.6,color:"#4FADFD"},{offset:.8,color:"#0CD3DB"},{offset:1,color:"#646CF9"}]}}}},{value:100-fe,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:"#173164"}}}]},{name:"\u5403\u732A\u8089\u9891\u7387",type:"pie",radius:["32%","35%"],silent:!0,clockwise:!0,startAngle:270,z:0,zlevel:0,label:{normal:{position:"center"}},data:[{value:fe,name:"",itemStyle:{normal:{color:{colorStops:[{offset:0,color:"#00EDF3"},{offset:1,color:"#646CF9"}]}}}},{value:100-fe,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:"#173164"}}}]}]};function we(Le,oe,se,pe){let Me=Le+se*Math.cos(pe*Math.PI/180),Ue=oe+se*Math.sin(pe*Math.PI/180);return{x:Me,y:Ue}}function Ie(){U=U+3,O.title.text="{a|"+$+"}{c|%}",G.leftbuttom.setOption(O)}le&&clearInterval(le),le=setInterval(function(){Ie()},100),G.WebSocket.register_call("offline_type",k),G.leftbuttom.setOption(O),window.addEventListener("resize",function(){G.leftbuttom.resize()}),G.leftbuttom.showLoading({textColor:"#fff",color:"rgba(4,13,33,255)",maskColor:"rgba(4,13,33,255)"})}),(U,fe)=>(hn(),un("div",Mu,Lu))}};var Cu=Wn(Au,[["__scopeId","data-v-4ca265aa"]]);const wo=ie=>(Vn("data-v-5194af96"),ie=ie(),jn(),ie),Pu={class:"panel"},Ru=wo(()=>We("div",{class:"panel-header"},"\u533A\u57DF",-1)),Iu=wo(()=>We("div",{class:"chart",id:"righttop"},null,-1)),Du=wo(()=>We("div",{class:"panel-footer"},null,-1)),Nu=[Ru,Iu,Du],Ou={setup(ie){const G=kn().appContext.config.globalProperties;var $=[];function k(U){$=[];for(var fe in U){var le={value:U[fe],name:fe};$.push(le)}let O=G.righttop.getOption();O.series[0].data=$,G.righttop.setOption(O),G.righttop.hideLoading()}return Cn(()=>{G.righttop=G.echarts.init(document.getElementById("righttop"));var U={tooltip:{trigger:"item"},legend:{show:!0,top:"90%",left:"center",textStyle:{color:"#fff"}},series:[{name:"",type:"pie",radius:["5%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:50,borderWidth:0},label:{show:!1,position:"right"},emphasis:{show:!1,label:{show:!0,fontSize:"12"}},labelLine:{show:!0},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]};G.righttop.showLoading({textColor:"#fff",color:"rgba(4,13,33,255)",maskColor:"rgba(4,13,33,255)"}),G.righttop.setOption(U),window.addEventListener("resize",function(){G.righttop.resize()}),G.WebSocket.register_call("area_type",k)}),(U,fe)=>(hn(),un("div",Pu,Nu))}};var zu=Wn(Ou,[["__scopeId","data-v-5194af96"]]);const Mo=ie=>(Vn("data-v-8144364a"),ie=ie(),jn(),ie),Fu={class:"panel"},Bu=Mo(()=>We("div",{class:"panel-header"},"\u72B6\u6001",-1)),Uu=Mo(()=>We("div",{class:"chart",id:"rightcenter"},null,-1)),Hu=Mo(()=>We("div",{class:"panel-footer"},null,-1)),Gu=[Bu,Uu,Hu],ku={setup(ie){const G=kn().appContext.config.globalProperties;function $(k){let U=G.rightcenter.getOption();U.series[0].data=k.type200,U.series[1].data=k.not200,U.series[2].data=k.type200,U.series[3].data=k.type200,U.xAxis[0].data=k.keys,G.rightcenter.setOption(U),G.rightcenter.hideLoading()}return Cn(()=>{G.rightcenter=G.echarts.init(document.getElementById("rightcenter"));for(var k=[],U=[],fe=[],le=0;le<12;le++){k.push(le+1);var O=Math.random()*200,we=Math.random()*200;fe.push(O),U.push(we)}var Ie={color:["#2f89cf"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"0%",top:"5%",right:"0%",bottom:"10%",containLabel:!0},legend:{data:["\u6B63\u5E38","\u5F02\u5E38"],textStyle:{color:"#ccc"},top:"90%"},xAxis:{data:k,axisTick:{show:!1},axisLabel:{color:"rgba(255,255,255,.7)"},axisLine:{show:!1}},yAxis:{splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"rgba(255,255,255,.7)"}},series:[{name:"\u6B63\u5E38",type:"line",smooth:!0,showAllSymbol:!1,symbol:"emptyCircle",symbolSize:5,data:U},{name:"\u5F02\u5E38",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new G.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])},data:fe},{name:"\u6B63\u5E38",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{color:new G.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])},z:-12,data:U},{name:"\u6B63\u5E38",type:"pictorialBar",symbol:"rect",itemStyle:{color:"#0f375f"},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:U}]};G.rightcenter.showLoading({textColor:"#fff",color:"rgba(4,13,33,255)",maskColor:"rgba(4,13,33,255)"}),G.rightcenter.setOption(Ie),window.addEventListener("resize",function(){G.rightcenter.resize()}),G.WebSocket.register_call("acc_type",$)}),(k,U)=>(hn(),un("div",Fu,Gu))}};var Vu=Wn(ku,[["__scopeId","data-v-8144364a"]]);const So=ie=>(Vn("data-v-bd972c36"),ie=ie(),jn(),ie),ju={class:"panel"},Wu=So(()=>We("div",{class:"panel-header"},"\u8D44\u6E90",-1)),qu=So(()=>We("div",{class:"chart",id:"rightbuttom"},null,-1)),Xu=So(()=>We("div",{class:"panel-footer"},null,-1)),Yu=[Wu,qu,Xu],Ju={setup(ie){const G=kn().appContext.config.globalProperties;function $(k){let U=k,fe=G.rightbuttom.getOption();fe.series[0].label.formatter=U.toFixed(2)+"%",G.rightbuttom.setOption(fe),G.rightbuttom.hideLoading()}return Cn(()=>{G.rightbuttom=G.echarts.init(document.getElementById("rightbuttom"));var k=[],U=.3;k.push(U);var fe={backgroundColor:"transparent",series:[{type:"liquidFill",radius:"80%",data:k,amplitude:"8%",backgroundStyle:{borderWidth:1,borderColor:"rgb(255,0,255,0.01)",color:"rgb(255,0,255,0.01)"},label:{normal:{formatter:U.toFixed(2)+"%",textStyle:{fontSize:30}}}}]};G.rightbuttom.setOption(fe,!0),window.addEventListener("resize",function(){G.rightbuttom.resize()}),G.rightbuttom.showLoading({textColor:"#fff",color:"rgba(4,13,33,255)",maskColor:"rgba(4,13,33,255)"}),G.WebSocket.register_call("cpu_type",$)}),(k,U)=>(hn(),un("div",ju,Yu))}};var Zu=Wn(Ju,[["__scopeId","data-v-bd972c36"]]);const Rl=ie=>(Vn("data-v-7ec764fc"),ie=ie(),jn(),ie),$u={class:"centerboard"},Qu=Rl(()=>We("div",{class:"chart",id:"centertop"},null,-1)),Ku=Rl(()=>We("div",{class:"centerboard-footer"},null,-1)),ed=[Qu,Ku],td={setup(ie){const G=kn().appContext.config.globalProperties;var $=[{c1:"#00c7ef",c2:"#0AF3FF"},{c1:"#FF8E14",c2:"#FFA12F"},{c1:"#AF5AFF",c2:"#B62AFF"},{c1:"#25dd59",c2:"#29f463"},{c1:"#6E35FF",c2:"#6E67FF"},{c1:"#002AFF",c2:"#0048FF"},{c1:"#8CD282",c2:"#95F300"},{c1:"#3B0EFF",c2:"#604BFF"},{c1:"#00BE74",c2:"#04FDB8"},{c1:"#4a3ac6",c2:"#604BFF"}],k=[],U=[],fe=[];function le(Le,oe,se,pe){Le.forEach((Me,Ue)=>{if(Me.name===null)return!1;let ke=10;switch(oe){case 0:ke=70;break;case 1:ke=50;break;default:ke=10;break}let x=null;switch(oe){case 0:case 1:x={position:"inside",rotate:0};break}oe===0&&(se=$[0]),oe==1&&(se=$.find((Je,tt)=>tt==Ue%10),fe.push(Me.name));let yt={color:se.c2},He=null;oe===0?He={type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:se.c1},{offset:.8,color:se.c1},{offset:1,color:"rgba(0, 0, 0, 0.3)"}],global:!1}:He={type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:se.c1},{offset:.4,color:se.c1},{offset:1,color:se.c2}],global:!1};let Te=null;Me.list&&Me.list.length!==0?Te={borderColor:se.c2,color:He}:(Me.isEnd=!0,Me.isdisease=="true"?Te={color:se.c2,borderColor:se.c2}:Te={color:"transparent",borderColor:se.c2}),Te=Object.assign(Te,{shadowColor:"rgba(255, 255, 255, 0.5)",shadowBlur:10}),oe==1&&(pe=Me.name);let Fe={name:Me.name,symbolSize:ke,category:pe,label:x,color:He,itemStyle:Te,lineStyle:yt};Fe=Object.assign(Me,Fe),oe===0&&(Fe=Object.assign(Fe,{root:!0})),Me.list&&Me.list.length===0&&(Fe=Object.assign(Fe,{isEnd:!0})),k.push(Fe),Me.list&&Me.list.length>0&&le(Me.list,oe+1,se,pe)})}function O(Le,oe,se){Le.forEach(pe=>{pe.list&&pe.list.forEach((Me,Ue)=>{oe===0&&(se=$.find((yt,He)=>He==Ue%10));let ke=null;switch(oe){case 0:Me.list.length>0?ke={normal:{color:"target"}}:ke={normal:{color:se.c2}};break;default:ke={normal:{color:"source"}};break}let x={source:pe.name,target:Me.name,lineStyle:ke};U.push(x),Me.list&&pe.list.length>0&&O(pe.list,oe+1)})})}function we(Le){let oe={name:"ROOT",value:0,list:[]};for(var se in Le){let Me={name:se,value:se,list:[]};for(let Ue=1;Ue<=Le[se];Ue++){let ke={name:se+"-"+Ue,value:1+"-"+se+"-"+Ue};Me.list.push(ke)}oe.list.push(Me)}var pe=[];return pe.push(oe),pe}function Ie(Le){let oe=G.centertop.getOption();k=[],U=[],fe=[];var se=we(Le),pe=se[0].list.map(Me=>({name:Me.name}));le(JSON.parse(JSON.stringify(se)),0),O(JSON.parse(JSON.stringify(se)),0),oe.series[0].data.length!=k.length&&(oe.series[0].data=k,oe.series[0].categories=pe,oe.series[0].links=U,G.centertop.setOption(oe),G.centertop.hideLoading())}return Cn(()=>{G.centertop=G.echarts.init(document.getElementById("centertop"));function Le(){let Ue={name:"MX",value:0,list:[]};for(let x=1;x<=10;x++){let yt={name:"\u8282\u70B9"+x,value:x,list:[]};for(let He=1;He<=5;He++){let Te={name:`\u8282\u70B91-${x}-${He}`,value:1+"-"+x+"-"+He};yt.list.push(Te)}Ue.list.push(yt)}var ke=[];return ke.push(Ue),ke}var oe=Le(),se=oe[0].list.map(Ue=>({name:Ue.name})),pe=$.map(Ue=>Ue.c2);le(JSON.parse(JSON.stringify(oe)),0),O(JSON.parse(JSON.stringify(oe)),0);var Me={backgroundColor:"transparent",toolbox:{show:!0,left:"right",right:20,top:"bottom",bottom:20},color:pe,legend:{show:!1,data:fe,textStyle:{color:"#fff",fontSize:10},icon:"circle",type:"scroll",orient:"vertical",left:"right",right:20,top:20,bottom:80,pageIconColor:"#00f6ff",pageIconInactiveColor:"#fff",pageIconSize:12,pageTextStyle:{color:"#fff",fontSize:12}},selectedMode:"false",bottom:20,left:0,right:0,top:0,animationDuration:1500,animationEasingUpdate:"quinticInOut",series:[{name:"\u77E5\u8BC6\u56FE\u8C31",type:"graph",hoverAnimation:!0,layout:"force",force:{repulsion:300,edgeLength:100},nodeScaleRatio:.1,draggable:!0,roam:!0,symbol:"circle",data:k,links:U,categories:se,focusNodeAdjacency:!0,scaleLimit:{min:.1,max:9},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,8],label:{normal:{show:!0,position:"right",color:"#fff",distance:5,fontSize:10}},lineStyle:{normal:{width:.5,curveness:0,type:"solid"}}}]};G.centertop.setOption(Me),window.addEventListener("resize",function(){G.centertop.resize()}),G.WebSocket.register_call("mind_type",Ie),G.centertop.showLoading({textColor:"#fff",color:"rgba(4,13,33,255)",maskColor:"rgba(4,13,33,255)"})}),(Le,oe)=>(hn(),un("div",$u,ed))}};var nd=Wn(td,[["__scopeId","data-v-7ec764fc"]]);const id={class:"js-webgl-globe-data"},rd=We("div",{class:"js-webgl-globe-loading"},null,-1),sd=We("div",{class:"js-webgl-globe"},null,-1),od=[rd,sd],ad={setup(ie){return Cn(()=>{}),(G,$)=>(hn(),un("div",id,od))}};const ld=We("header",null,[We("h1",null,"\u77E9\u9635\u4E2D\u63A7"),We("div",{class:"matrixinfo2"},"LIMIT MATRIX SETREE"),We("div",{class:"matrixinfo"},"\u6EC7ICP\u59072021005467\u53F7")],-1),cd={class:"mainbox"},hd={class:"column"},ud={class:"column"},dd={class:"column"},pd={setup(ie){return(G,$)=>(hn(),un(su,null,[ld,We("section",cd,[We("div",hd,[Pn(mu),Pn(Cu),Pn(wu)]),We("div",ud,[Pn(ad),Pn(nd)]),We("div",dd,[Pn(zu),Pn(Zu),Pn(Vu)])])],64))}},To=class{constructor(){is(this,"ws",null);is(this,"type_mapping",{})}static get Instance(){return this.instance||(this.instance=new To),this.instance}connect(){if(!window.WebSocket)return console.log("\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301WebSocket");this.ws=new WebSocket("wss://limitmatrix.com:8008"),this.ws.onopen=()=>{console.log("\u8FDE\u63A5\u670D\u52A1\u5668\u6210\u529F!")},this.ws.onclose=()=>{console.log("\u670D\u52A1\u5DF2\u5173\u95ED!")},this.ws.onmessage=G=>{var $=JSON.parse(G.data);for(var k in this.type_mapping)k&&this.type_mapping[k].call(this,$[k])}}register_call(G,$){this.type_mapping[G]=$}un_register_call(G){this.type_mapping[G]=null}};let rs=To;is(rs,"instance",null);rs.Instance.connect();const Eo=ou(pd);Eo.config.globalProperties.WebSocket=rs.Instance;Eo.config.globalProperties.echarts=au;Eo.mount("#app");(function(){(function(ie){var G={};function $(k){if(G[k])return G[k].exports;var U=G[k]={i:k,l:!1,exports:{}};return ie[k].call(U.exports,U,U.exports,$),U.l=!0,U.exports}$.m=ie,$.c=G,$.d=function(k,U,fe){$.o(k,U)||Object.defineProperty(k,U,{enumerable:!0,get:fe})},$.r=function(k){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(k,"__esModule",{value:!0})},$.t=function(k,U){if(1&U&&(k=$(k)),8&U||4&U&&typeof k=="object"&&k&&k.__esModule)return k;var fe=Object.create(null);if($.r(fe),Object.defineProperty(fe,"default",{enumerable:!0,value:k}),2&U&&typeof k!="string")for(var le in k)$.d(fe,le,function(O){return k[O]}.bind(null,le));return fe},$.n=function(k){var U=k&&k.__esModule?function(){return k.default}:function(){return k};return $.d(U,"a",U),U},$.o=function(k,U){return Object.prototype.hasOwnProperty.call(k,U)},$.p="",$($.s=18)})([function(ie,G,$){var k=$(9)();ie.exports=function(U){return U!==k&&U!==null}},function(ie,G,$){var k,U,fe,le,O,we,Ie,Le=$(2),oe=$(16),se=Function.prototype.apply,pe=Function.prototype.call,Me=Object.create,Ue=Object.defineProperty,ke=Object.defineProperties,x=Object.prototype.hasOwnProperty,yt={configurable:!0,enumerable:!1,writable:!0};U=function(He,Te){var Fe,Je;return oe(Te),Je=this,k.call(this,He,Fe=function(){fe.call(Je,He,Fe),se.call(Te,this,arguments)}),Fe.__eeOnceListener__=Te,this},O={on:k=function(He,Te){var Fe;return oe(Te),x.call(this,"__ee__")?Fe=this.__ee__:(Fe=yt.value=Me(null),Ue(this,"__ee__",yt),yt.value=null),Fe[He]?typeof Fe[He]=="object"?Fe[He].push(Te):Fe[He]=[Fe[He],Te]:Fe[He]=Te,this},once:U,off:fe=function(He,Te){var Fe,Je,tt,at;if(oe(Te),!x.call(this,"__ee__"))return this;if(!(Fe=this.__ee__)[He])return this;if(typeof(Je=Fe[He])=="object")for(at=0;tt=Je[at];++at)tt!==Te&&tt.__eeOnceListener__!==Te||(Je.length===2?Fe[He]=Je[at?0:1]:Je.splice(at,1));else Je!==Te&&Je.__eeOnceListener__!==Te||delete Fe[He];return this},emit:le=function(He){var Te,Fe,Je,tt,at;if(x.call(this,"__ee__")&&(tt=this.__ee__[He]))if(typeof tt=="object"){for(Fe=arguments.length,at=new Array(Fe-1),Te=1;Te<Fe;++Te)at[Te-1]=arguments[Te];for(tt=tt.slice(),Te=0;Je=tt[Te];++Te)se.call(Je,this,at)}else switch(arguments.length){case 1:pe.call(tt,this);break;case 2:pe.call(tt,this,arguments[1]);break;case 3:pe.call(tt,this,arguments[1],arguments[2]);break;default:for(Fe=arguments.length,at=new Array(Fe-1),Te=1;Te<Fe;++Te)at[Te-1]=arguments[Te];se.call(tt,this,at)}}},we={on:Le(k),once:Le(U),off:Le(fe),emit:Le(le)},Ie=ke({},we),ie.exports=G=function(He){return He==null?Me(Ie):ke(Object(He),we)},G.methods=O},function(ie,G,$){var k=$(3),U=$(11),fe=$(12),le=$(13);(ie.exports=function(O,we){var Ie,Le,oe,se,pe;return arguments.length<2||typeof O!="string"?(se=we,we=O,O=null):se=arguments[2],O==null?(Ie=oe=!0,Le=!1):(Ie=le.call(O,"c"),Le=le.call(O,"e"),oe=le.call(O,"w")),pe={value:we,configurable:Ie,enumerable:Le,writable:oe},se?k(U(se),pe):pe}).gs=function(O,we,Ie){var Le,oe,se,pe;return typeof O!="string"?(se=Ie,Ie=we,we=O,O=null):se=arguments[3],we==null?we=void 0:fe(we)?Ie==null?Ie=void 0:fe(Ie)||(se=Ie,Ie=void 0):(se=we,we=Ie=void 0),O==null?(Le=!0,oe=!1):(Le=le.call(O,"c"),oe=le.call(O,"e")),pe={get:we,set:Ie,configurable:Le,enumerable:oe},se?k(U(se),pe):pe}},function(ie,G,$){ie.exports=$(4)()?Object.assign:$(5)},function(ie,G,$){ie.exports=function(){var k,U=Object.assign;return typeof U=="function"&&(U(k={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),k.foo+k.bar+k.trzy==="razdwatrzy")}},function(ie,G,$){var k=$(6),U=$(10),fe=Math.max;ie.exports=function(le,O){var we,Ie,Le,oe=fe(arguments.length,2);for(le=Object(U(le)),Le=function(se){try{le[se]=O[se]}catch(pe){we||(we=pe)}},Ie=1;Ie<oe;++Ie)k(O=arguments[Ie]).forEach(Le);if(we!==void 0)throw we;return le}},function(ie,G,$){ie.exports=$(7)()?Object.keys:$(8)},function(ie,G,$){ie.exports=function(){try{return Object.keys("primitive"),!0}catch{return!1}}},function(ie,G,$){var k=$(0),U=Object.keys;ie.exports=function(fe){return U(k(fe)?Object(fe):fe)}},function(ie,G,$){ie.exports=function(){}},function(ie,G,$){var k=$(0);ie.exports=function(U){if(!k(U))throw new TypeError("Cannot use null or undefined");return U}},function(ie,G,$){var k=$(0),U=Array.prototype.forEach,fe=Object.create,le=function(O,we){var Ie;for(Ie in O)we[Ie]=O[Ie]};ie.exports=function(O){var we=fe(null);return U.call(arguments,function(Ie){k(Ie)&&le(Object(Ie),we)}),we}},function(ie,G,$){ie.exports=function(k){return typeof k=="function"}},function(ie,G,$){ie.exports=$(14)()?String.prototype.contains:$(15)},function(ie,G,$){var k="razdwatrzy";ie.exports=function(){return typeof k.contains=="function"&&k.contains("dwa")===!0&&k.contains("foo")===!1}},function(ie,G,$){var k=String.prototype.indexOf;ie.exports=function(U){return k.call(this,U,arguments[1])>-1}},function(ie,G,$){ie.exports=function(k){if(typeof k!="function")throw new TypeError(k+" is not a function");return k}},function(ie,G,$){},function(ie,G,$){function k(){}$.r(G),Object.assign(k.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const i=n.indexOf(e);i!==-1&&n.splice(i,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const n=e.slice(0);for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}}});const U=[];for(let t=0;t<256;t++)U[t]=(t<16?"0":"")+t.toString(16);let fe=1234567;const le={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(U[255&t]+U[t>>8&255]+U[t>>16&255]+U[t>>24&255]+"-"+U[255&e]+U[e>>8&255]+"-"+U[e>>16&15|64]+U[e>>24&255]+"-"+U[63&n|128]+U[n>>8&255]+"-"+U[n>>16&255]+U[n>>24&255]+U[255&i]+U[i>>8&255]+U[i>>16&255]+U[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(fe=t%2147483647),fe=16807*fe%2147483647,(fe-1)/2147483646},degToRad:function(t){return t*le.DEG2RAD},radToDeg:function(t){return t*le.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)==0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),f=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*f,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*f,a*c);break;case"ZYZ":t.set(l*f,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class O{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class we{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],f=i[8],g=r[0],m=r[3],v=r[6],y=r[1],w=r[4],_=r[7],b=r[2],E=r[5],S=r[8];return s[0]=o*g+a*y+l*b,s[3]=o*m+a*w+l*E,s[6]=o*v+a*_+l*S,s[1]=c*g+u*y+h*b,s[4]=c*m+u*w+h*E,s[7]=c*v+u*_+h*S,s[2]=d*g+p*y+f*b,s[5]=d*m+p*w+f*E,s[8]=d*v+p*_+f*S,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}getInverse(e,n){n!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");const i=e.elements,r=this.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],p=i[8],f=p*c-u*d,g=u*h-p*l,m=d*l-c*h,v=s*f+o*g+a*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return r[0]=f*y,r[1]=(a*d-p*o)*y,r[2]=(u*o-a*c)*y,r[3]=g*y,r[4]=(p*s-a*h)*y,r[5]=(a*l-u*s)*y,r[6]=m*y,r[7]=(o*h-d*s)*y,r[8]=(c*s-o*l)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).getInverse(this).transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1)}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*c,r[6]=n*a+i*u,r[1]=-i*s+n*l,r[4]=-i*o+n*c,r[7]=-i*a+n*u,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}}let Ie;const Le={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ie===void 0&&(Ie=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Ie.width=t.width,Ie.height=t.height;const n=Ie.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ie}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let oe=0;function se(t,e,n,i,r,s,o,a,l,c){Object.defineProperty(this,"id",{value:oe++}),this.uuid=le.generateUUID(),this.name="",this.image=t!==void 0?t:se.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=e!==void 0?e:se.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:1001,this.wrapT=i!==void 0?i:1001,this.magFilter=r!==void 0?r:1006,this.minFilter=s!==void 0?s:1008,this.anisotropy=l!==void 0?l:1,this.format=o!==void 0?o:1023,this.internalFormat=null,this.type=a!==void 0?a:1009,this.offset=new O(0,0),this.repeat=new O(1,1),this.center=new O(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c!==void 0?c:3e3,this.version=0,this.onUpdate=null}se.DEFAULT_IMAGE=void 0,se.DEFAULT_MAPPING=300,se.prototype=Object.assign(Object.create(k.prototype),{constructor:se,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=le.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)r.push(Le.getDataURL(i[s]))}else r=Le.getDataURL(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}}),Object.defineProperty(se.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});class pe{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const o=e.elements,a=o[0],l=o[4],c=o[8],u=o[1],h=o[5],d=o[9],p=o[2],f=o[6],g=o[10];if(Math.abs(l-u)<.01&&Math.abs(c-p)<.01&&Math.abs(d-f)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+p)<.1&&Math.abs(d+f)<.1&&Math.abs(a+h+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(a+1)/2,y=(h+1)/2,w=(g+1)/2,_=(l+u)/4,b=(c+p)/4,E=(d+f)/4;return v>y&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=_/i,s=b/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=_/r,s=E/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=E/s),this.set(i,r,s,n),this}let m=Math.sqrt((f-d)*(f-d)+(c-p)*(c-p)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(f-d)/m,this.y=(c-p)/m,this.z=(u-l)/m,this.w=Math.acos((a+h+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}function Me(t,e,n){this.width=t,this.height=e,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),n=n||{},this.texture=new se(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}function Ue(t,e,n){Me.call(this,t,e,n),this.samples=4}Me.prototype=Object.assign(Object.create(k.prototype),{constructor:Me,isWebGLRenderTarget:!0,setSize:function(t,e){this.width===t&&this.height===e||(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Ue.prototype=Object.assign(Object.create(Me.prototype),{constructor:Ue,isWebGLMultisampleRenderTarget:!0,copy:function(t){return Me.prototype.copy.call(this,t),this.samples=t.samples,this}});class ke{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],f=s[o+2],g=s[o+3];if(h!==g||l!==d||c!==p||u!==f){let m=1-a;const v=l*d+c*p+u*f+h*g,y=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const b=Math.sqrt(w),E=Math.atan2(b,v*y);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const _=a*y;if(l=l*m+d*_,c=c*m+p*_,u=u*m+f*_,h=h*m+g*_,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],f=s[o+3];return e[n]=a*f+u*h+l*p-c*d,e[n+1]=l*f+u*d+c*h-a*p,e[n+2]=c*f+u*p+a*d-l*h,e[n+3]=u*f-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),f=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*f,this._y=c*p*h-d*u*f,this._z=c*u*f+d*p*h,this._w=c*u*h-d*p*f;break;case"YXZ":this._x=d*u*h+c*p*f,this._y=c*p*h-d*u*f,this._z=c*u*f-d*p*h,this._w=c*u*h+d*p*f;break;case"ZXY":this._x=d*u*h-c*p*f,this._y=c*p*h+d*u*f,this._z=c*u*f+d*p*h,this._w=c*u*h-d*p*f;break;case"ZYX":this._x=d*u*h-c*p*f,this._y=c*p*h+d*u*f,this._z=c*u*f-d*p*h,this._w=c*u*h+d*p*f;break;case"YZX":this._x=d*u*h+c*p*f,this._y=c*p*h+d*u*f,this._z=c*u*f-d*p*h,this._w=c*u*h-d*p*f;break;case"XZY":this._x=d*u*h-c*p*f,this._y=c*p*h-d*u*f,this._z=c*u*f+d*p*h,this._w=c*u*h+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-6?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(le.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}inverse(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}class x{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(He.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(He.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,h=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yt.copy(this).projectOnVector(e),this.sub(yt)}reflect(e){return this.sub(yt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(le.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,4*n)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,3*n)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const yt=new x,He=new ke;class Te{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new x(1/0,1/0,1/0),this.max=n!==void 0?n:new x(-1/0,-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<n&&(n=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<n&&(n=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=tt.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new x),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new x),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),at.copy(n.boundingBox),at.applyMatrix4(e.matrixWorld),this.union(at));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new x),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tt),tt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),lr.subVectors(this.max,Ai),qn.subVectors(e.a,Ai),Xn.subVectors(e.b,Ai),Yn.subVectors(e.c,Ai),dn.subVectors(Xn,qn),pn.subVectors(Yn,Xn),Rn.subVectors(qn,Yn);let n=[0,-dn.z,dn.y,0,-pn.z,pn.y,0,-Rn.z,Rn.y,dn.z,0,-dn.x,pn.z,0,-pn.x,Rn.z,0,-Rn.x,-dn.y,dn.x,0,-pn.y,pn.x,0,-Rn.y,Rn.x,0];return!!Fe(n,qn,Xn,Yn,lr)&&(n=[1,0,0,0,1,0,0,0,1],!!Fe(n,qn,Xn,Yn,lr)&&(cr.crossVectors(dn,pn),n=[cr.x,cr.y,cr.z],Fe(n,qn,Xn,Yn,lr)))}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new x),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return tt.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=.5*this.getSize(tt).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Je)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Fe(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){In.fromArray(t,s);const a=r.x*Math.abs(In.x)+r.y*Math.abs(In.y)+r.z*Math.abs(In.z),l=e.dot(In),c=n.dot(In),u=i.dot(In);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Je=[new x,new x,new x,new x,new x,new x,new x,new x],tt=new x,at=new Te,qn=new x,Xn=new x,Yn=new x,dn=new x,pn=new x,Rn=new x,Ai=new x,lr=new x,cr=new x,In=new x,Il=new Te;class fn{constructor(e,n){this.center=e!==void 0?e:new x,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Il.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new x),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Te),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}}const en=new x,ss=new x,hr=new x,mn=new x,os=new x,ur=new x,as=new x;class Ci{constructor(e,n){this.origin=e!==void 0?e:new x,this.direction=n!==void 0?n:new x(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new x),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new x),n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=en.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(en.copy(this.direction).multiplyScalar(n).add(this.origin),en.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ss.copy(e).add(n).multiplyScalar(.5),hr.copy(n).sub(e).normalize(),mn.copy(this.origin).sub(ss);const s=.5*e.distanceTo(n),o=-this.direction.dot(hr),a=mn.dot(this.direction),l=-mn.dot(hr),c=mn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,f;if(u>0)if(h=o*l-a,d=o*a-l,f=s*u,h>=0)if(d>=-f)if(d<=f){const g=1/u;h*=g,d*=g,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-f?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=f?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(hr).multiplyScalar(d).add(ss),p}intersectSphere(e,n){en.subVectors(e.center,this.origin);const i=en.dot(this.direction),r=en.dot(en)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r?null:((s>i||i!=i)&&(i=s),(o<r||r!=r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r?null:((a>i||i!=i)&&(i=a),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,n)))}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,n,i,r,s){os.subVectors(n,e),ur.subVectors(i,e),as.crossVectors(os,ur);let o,a=this.direction.dot(as);if(a>0){if(r)return null;o=1}else{if(!(a<0))return null;o=-1,a=-a}mn.subVectors(this.origin,e);const l=o*this.direction.dot(ur.crossVectors(mn,ur));if(l<0)return null;const c=o*this.direction.dot(os.cross(mn));if(c<0||l+c>a)return null;const u=-o*mn.dot(as);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}class De{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,l,c,u,h,d,p,f,g,m){const v=this.elements;return v[0]=e,v[4]=n,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=d,v[3]=p,v[7]=f,v[11]=g,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jn.setFromMatrixColumn(e,0).length(),s=1/Jn.setFromMatrixColumn(e,1).length(),o=1/Jn.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,f=a*u,g=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+f*c,n[5]=d-g*c,n[9]=-a*l,n[2]=g-d*c,n[6]=f+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,f=c*u,g=c*h;n[0]=d+g*a,n[4]=f*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-f,n[6]=g+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,f=c*u,g=c*h;n[0]=d-g*a,n[4]=-o*h,n[8]=f+p*a,n[1]=p+f*a,n[5]=o*u,n[9]=g-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,f=a*u,g=a*h;n[0]=l*u,n[4]=f*c-p,n[8]=d*c+g,n[1]=l*h,n[5]=g*c+d,n[9]=p*c-f,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,f=a*l,g=a*c;n[0]=l*u,n[4]=g-d*h,n[8]=f*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+f,n[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,p=o*c,f=a*l,g=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+g,n[5]=o*u,n[9]=p*h-f,n[2]=f*h-p,n[6]=a*u,n[10]=g*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dl,e,Nl)}lookAt(e,n,i){const r=this.elements;return xt.subVectors(e,n),xt.lengthSq()===0&&(xt.z=1),xt.normalize(),gn.crossVectors(i,xt),gn.lengthSq()===0&&(Math.abs(i.z)===1?xt.x+=1e-4:xt.z+=1e-4,xt.normalize(),gn.crossVectors(i,xt)),gn.normalize(),dr.crossVectors(xt,gn),r[0]=gn.x,r[4]=dr.x,r[8]=xt.x,r[1]=gn.y,r[5]=dr.y,r[9]=xt.y,r[2]=gn.z,r[6]=dr.z,r[10]=xt.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],f=i[2],g=i[6],m=i[10],v=i[14],y=i[3],w=i[7],_=i[11],b=i[15],E=r[0],S=r[4],P=r[8],I=r[12],T=r[1],z=r[5],F=r[9],V=r[13],ee=r[2],R=r[6],te=r[10],X=r[14],ne=r[3],me=r[7],ve=r[11],L=r[15];return s[0]=o*E+a*T+l*ee+c*ne,s[4]=o*S+a*z+l*R+c*me,s[8]=o*P+a*F+l*te+c*ve,s[12]=o*I+a*V+l*X+c*L,s[1]=u*E+h*T+d*ee+p*ne,s[5]=u*S+h*z+d*R+p*me,s[9]=u*P+h*F+d*te+p*ve,s[13]=u*I+h*V+d*X+p*L,s[2]=f*E+g*T+m*ee+v*ne,s[6]=f*S+g*z+m*R+v*me,s[10]=f*P+g*F+m*te+v*ve,s[14]=f*I+g*V+m*X+v*L,s[3]=y*E+w*T+_*ee+b*ne,s[7]=y*S+w*z+_*R+b*me,s[11]=y*P+w*F+_*te+b*ve,s[15]=y*I+w*V+_*X+b*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14];return e[3]*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+e[7]*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+e[11]*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+e[15]*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}getInverse(e,n){n!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");const i=this.elements,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],f=r[9],g=r[10],m=r[11],v=r[12],y=r[13],w=r[14],_=r[15],b=f*w*d-y*g*d+y*h*m-u*w*m-f*h*_+u*g*_,E=v*g*d-p*w*d-v*h*m+c*w*m+p*h*_-c*g*_,S=p*y*d-v*f*d+v*u*m-c*y*m-p*u*_+c*f*_,P=v*f*h-p*y*h-v*u*g+c*y*g+p*u*w-c*f*w,I=s*b+o*E+a*S+l*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/I;return i[0]=b*T,i[1]=(y*g*l-f*w*l-y*a*m+o*w*m+f*a*_-o*g*_)*T,i[2]=(u*w*l-y*h*l+y*a*d-o*w*d-u*a*_+o*h*_)*T,i[3]=(f*h*l-u*g*l-f*a*d+o*g*d+u*a*m-o*h*m)*T,i[4]=E*T,i[5]=(p*w*l-v*g*l+v*a*m-s*w*m-p*a*_+s*g*_)*T,i[6]=(v*h*l-c*w*l-v*a*d+s*w*d+c*a*_-s*h*_)*T,i[7]=(c*g*l-p*h*l+p*a*d-s*g*d-c*a*m+s*h*m)*T,i[8]=S*T,i[9]=(v*f*l-p*y*l-v*o*m+s*y*m+p*o*_-s*f*_)*T,i[10]=(c*y*l-v*u*l+v*o*d-s*y*d-c*o*_+s*u*_)*T,i[11]=(p*u*l-c*f*l-p*o*d+s*f*d+c*o*m-s*u*m)*T,i[12]=P*T,i[13]=(p*y*a-v*f*a+v*o*g-s*y*g-p*o*w+s*f*w)*T,i[14]=(v*u*a-c*y*a-v*o*h+s*y*h+c*o*w-s*u*w)*T,i[15]=(c*f*a-p*u*a+p*o*h-s*f*h-c*o*g+s*u*g)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,f=s*h,g=o*u,m=o*h,v=a*h,y=l*c,w=l*u,_=l*h,b=i.x,E=i.y,S=i.z;return r[0]=(1-(g+v))*b,r[1]=(p+_)*b,r[2]=(f-w)*b,r[3]=0,r[4]=(p-_)*E,r[5]=(1-(d+v))*E,r[6]=(m+y)*E,r[7]=0,r[8]=(f+w)*S,r[9]=(m-y)*S,r[10]=(1-(d+g))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Jn.set(r[0],r[1],r[2]).length();const o=Jn.set(r[4],r[5],r[6]).length(),a=Jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],It.copy(this);const l=1/s,c=1/o,u=1/a;return It.elements[0]*=l,It.elements[1]*=l,It.elements[2]*=l,It.elements[4]*=c,It.elements[5]*=c,It.elements[6]*=c,It.elements[8]*=u,It.elements[9]*=u,It.elements[10]*=u,n.setFromRotationMatrix(It),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(n-e),c=2*s/(i-r),u=(n+e)/(n-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),c=1/(i-r),u=1/(o-s),h=(n+e)*l,d=(i+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jn=new x,It=new De,Dl=new x(0,0,0),Nl=new x(1,1,1),gn=new x,dr=new x,xt=new x;class Zn{constructor(e=0,n=0,i=0,r=Zn.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){const r=le.clamp,s=e.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(n=n||this._order){case"XYZ":this._y=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lo,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return Ao.setFromEuler(this),this.setFromQuaternion(Ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new x(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Zn.DefaultOrder="XYZ",Zn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const Lo=new De,Ao=new ke;class Co{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let Ol=0;const Po=new x,$n=new ke,tn=new De,pr=new x,Pi=new x,zl=new x,Fl=new ke,Ro=new x(1,0,0),Io=new x(0,1,0),Do=new x(0,0,1),Bl={type:"added"},No={type:"removed"};function _e(){Object.defineProperty(this,"id",{value:Ol++}),this.uuid=le.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DefaultUp.clone();const t=new x,e=new Zn,n=new ke,i=new x(1,1,1);e._onChange(function(){n.setFromEuler(e,!1)}),n._onChange(function(){e.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new we}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=_e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}_e.DefaultUp=new x(0,1,0),_e.DefaultMatrixAutoUpdate=!0,_e.prototype=Object.assign(Object.create(k.prototype),{constructor:_e,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this},rotateOnWorldAxis:function(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this},rotateX:function(t){return this.rotateOnAxis(Ro,t)},rotateY:function(t){return this.rotateOnAxis(Io,t)},rotateZ:function(t){return this.rotateOnAxis(Do,t)},translateOnAxis:function(t,e){return Po.copy(t).applyQuaternion(this.quaternion),this.position.add(Po.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(Ro,t)},translateY:function(t){return this.translateOnAxis(Io,t)},translateZ:function(t){return this.translateOnAxis(Do,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(tn.getInverse(this.matrixWorld))},lookAt:function(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Pi,pr,this.up):tn.lookAt(pr,Pi,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(tn),this.quaternion.premultiply($n.inverse()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(No)),this},clear:function(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(No)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),tn.getInverse(this.matrixWorld),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new x),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new ke),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,zl),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new x),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Fl,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new x),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON()),this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){const u=a[l];r(t.shapes,u)}else r(t.shapes,a)}}if(this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(e){const o=s(t.geometries),a=s(t.materials),l=s(t.textures),c=s(t.images),u=s(t.shapes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u)}return n.object=i,n;function s(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e){if(e===void 0&&(e=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}});const ls=new x,Ul=new x,Hl=new we;class nn{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new x(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ls.subVectors(i,n).cross(Ul.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new x),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new x);const i=e.delta(ls),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?void 0:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new x),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Hl.getNormalMatrix(e),r=this.coplanarPoint(ls).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}const Dt=new x,rn=new x,cs=new x,sn=new x,Qn=new x,Kn=new x,Oo=new x,hs=new x,us=new x,ds=new x;class lt{constructor(e,n,i){this.a=e!==void 0?e:new x,this.b=n!==void 0?n:new x,this.c=i!==void 0?i:new x}static getNormal(e,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new x),r.subVectors(i,n),Dt.subVectors(e,n),r.cross(Dt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dt.subVectors(r,n),rn.subVectors(i,n),cs.subVectors(e,n);const o=Dt.dot(Dt),a=Dt.dot(rn),l=Dt.dot(cs),c=rn.dot(rn),u=rn.dot(cs),h=o*c-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new x),h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,f=(o*u-a*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,sn),sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,sn),l.set(0,0),l.addScaledVector(s,sn.x),l.addScaledVector(o,sn.y),l.addScaledVector(a,sn.z),l}static isFrontFacing(e,n,i,r){return Dt.subVectors(i,n),rn.subVectors(e,n),Dt.cross(rn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),.5*Dt.cross(rn).length()}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new x),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new nn),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return lt.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return lt.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new x);const i=this.a,r=this.b,s=this.c;let o,a;Qn.subVectors(r,i),Kn.subVectors(s,i),hs.subVectors(e,i);const l=Qn.dot(hs),c=Kn.dot(hs);if(l<=0&&c<=0)return n.copy(i);us.subVectors(e,r);const u=Qn.dot(us),h=Kn.dot(us);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Qn,o);ds.subVectors(e,s);const p=Qn.dot(ds),f=Kn.dot(ds);if(f>=0&&p<=f)return n.copy(s);const g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return a=c/(c-f),n.copy(i).addScaledVector(Kn,a);const m=u*f-p*h;if(m<=0&&h-u>=0&&p-f>=0)return Oo.subVectors(s,r),a=(h-u)/(h-u+(p-f)),n.copy(r).addScaledVector(Oo,a);const v=1/(m+g+d);return o=g*v,a=d*v,n.copy(i).addScaledVector(Qn,o).addScaledVector(Kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nt={h:0,s:0,l:0},fr={h:0,s:0,l:0};function ps(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}function fs(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function ms(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}class ye{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=le.euclideanModulo(e,1),n=le.clamp(n,0,1),i=le.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=ps(s,r,e+1/3),this.g=ps(s,r,e),this.b=ps(s,r,e-1/3)}return this}setStyle(e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[5]),this;if(r=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[5]),this;break;case"hsl":case"hsla":if(r=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return n(r[5]),this.setHSL(a,l,c)}}}else if(i=/^\#([A-Fa-f0-9]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const n=zo[e];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n){return n===void 0&&(n=2),this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n){n===void 0&&(n=2);const i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case n:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-n)/u+2;break;case r:a=(n-i)/u+4}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"}offsetHSL(e,n,i){return this.getHSL(Nt),Nt.h+=e,Nt.s+=n,Nt.l+=i,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpHSL(e,n){this.getHSL(Nt),e.getHSL(fr);const i=le.lerp(Nt.h,fr.h,n),r=le.lerp(Nt.s,fr.s,n),s=le.lerp(Nt.l,fr.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ye.NAMES=zo,ye.prototype.r=1,ye.prototype.g=1,ye.prototype.b=1;class gs{constructor(e,n,i,r,s,o){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new x,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new ye,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o!==void 0?o:0}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}}let Gl=0;function Se(){Object.defineProperty(this,"id",{value:Gl++}),this.uuid=le.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}function dt(t){Se.call(this),this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}Se.prototype=Object.assign(Object.create(k.prototype),{constructor:Se,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1;continue}const i=this[e];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.")}},toJSON:function(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(Se.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),dt.prototype=Object.create(Se.prototype),dt.prototype.constructor=dt,dt.prototype.isMeshBasicMaterial=!0,dt.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};const Xe=new x,mr=new O;function Ce(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}function vs(t,e,n){Ce.call(this,new Int8Array(t),e,n)}function ys(t,e,n){Ce.call(this,new Uint8Array(t),e,n)}function xs(t,e,n){Ce.call(this,new Uint8ClampedArray(t),e,n)}function _s(t,e,n){Ce.call(this,new Int16Array(t),e,n)}function Ri(t,e,n){Ce.call(this,new Uint16Array(t),e,n)}function bs(t,e,n){Ce.call(this,new Int32Array(t),e,n)}function Ii(t,e,n){Ce.call(this,new Uint32Array(t),e,n)}function be(t,e,n){Ce.call(this,new Float32Array(t),e,n)}function ws(t,e,n){Ce.call(this,new Float64Array(t),e,n)}Object.defineProperty(Ce.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(Ce.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ye),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new O),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new x),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new pe),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)Xe.x=this.getX(e),Xe.y=this.getY(e),Xe.z=this.getZ(e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)Xe.x=this.getX(e),Xe.y=this.getY(e),Xe.z=this.getZ(e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)Xe.x=this.getX(e),Xe.y=this.getY(e),Xe.z=this.getZ(e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this},set:function(t,e){return e===void 0&&(e=0),this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}}),vs.prototype=Object.create(Ce.prototype),vs.prototype.constructor=vs,ys.prototype=Object.create(Ce.prototype),ys.prototype.constructor=ys,xs.prototype=Object.create(Ce.prototype),xs.prototype.constructor=xs,_s.prototype=Object.create(Ce.prototype),_s.prototype.constructor=_s,Ri.prototype=Object.create(Ce.prototype),Ri.prototype.constructor=Ri,bs.prototype=Object.create(Ce.prototype),bs.prototype.constructor=bs,Ii.prototype=Object.create(Ce.prototype),Ii.prototype.constructor=Ii,be.prototype=Object.create(Ce.prototype),be.prototype.constructor=be,ws.prototype=Object.create(Ce.prototype),ws.prototype.constructor=ws;class kl{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(e){const n=[];let i,r,s;const o=e.faces;for(r=0;r<o.length;r++){const a=o[r];a.materialIndex!==s&&(s=a.materialIndex,i!==void 0&&(i.count=3*r-i.start,n.push(i)),i={start:3*r,materialIndex:s})}i!==void 0&&(i.count=3*r-i.start,n.push(i)),this.groups=n}fromGeometry(e){const n=e.faces,i=e.vertices,r=e.faceVertexUvs,s=r[0]&&r[0].length>0,o=r[1]&&r[1].length>0,a=e.morphTargets,l=a.length;let c;if(l>0){c=[];for(let v=0;v<l;v++)c[v]={name:a[v].name,data:[]};this.morphTargets.position=c}const u=e.morphNormals,h=u.length;let d;if(h>0){d=[];for(let v=0;v<h;v++)d[v]={name:u[v].name,data:[]};this.morphTargets.normal=d}const p=e.skinIndices,f=e.skinWeights,g=p.length===i.length,m=f.length===i.length;i.length>0&&n.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let v=0;v<n.length;v++){const y=n[v];this.vertices.push(i[y.a],i[y.b],i[y.c]);const w=y.vertexNormals;if(w.length===3)this.normals.push(w[0],w[1],w[2]);else{const b=y.normal;this.normals.push(b,b,b)}const _=y.vertexColors;if(_.length===3)this.colors.push(_[0],_[1],_[2]);else{const b=y.color;this.colors.push(b,b,b)}if(s===!0){const b=r[0][v];b!==void 0?this.uvs.push(b[0],b[1],b[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",v),this.uvs.push(new O,new O,new O))}if(o===!0){const b=r[1][v];b!==void 0?this.uvs2.push(b[0],b[1],b[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",v),this.uvs2.push(new O,new O,new O))}for(let b=0;b<l;b++){const E=a[b].vertices;c[b].data.push(E[y.a],E[y.b],E[y.c])}for(let b=0;b<h;b++){const E=u[b].vertexNormals[v];d[b].data.push(E.a,E.b,E.c)}g&&this.skinIndices.push(p[y.a],p[y.b],p[y.c]),m&&this.skinWeights.push(f[y.a],f[y.b],f[y.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}}function Fo(t){if(t.length===0)return-1/0;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}let Vl=1;const Gt=new De,Ms=new _e,ei=new x,_t=new Te,Di=new Te,st=new x;function Be(){Object.defineProperty(this,"id",{value:Vl+=2}),this.uuid=le.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Be.prototype=Object.assign(Object.create(k.prototype),{constructor:Be,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(Fo(t)>65535?Ii:Ri)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,e,n){this.groups.push({start:t,count:e,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new we().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return Gt.makeRotationX(t),this.applyMatrix4(Gt),this},rotateY:function(t){return Gt.makeRotationY(t),this.applyMatrix4(Gt),this},rotateZ:function(t){return Gt.makeRotationZ(t),this.applyMatrix4(Gt),this},translate:function(t,e,n){return Gt.makeTranslation(t,e,n),this.applyMatrix4(Gt),this},scale:function(t,e,n){return Gt.makeScale(t,e,n),this.applyMatrix4(Gt),this},lookAt:function(t){return Ms.lookAt(t),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this},setFromObject:function(t){const e=t.geometry;if(t.isPoints||t.isLine){const n=new be(3*e.vertices.length,3),i=new be(3*e.colors.length,3);if(this.setAttribute("position",n.copyVector3sArray(e.vertices)),this.setAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){const r=new be(e.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new be(e,3)),this},updateFromObject:function(t){let e=t.geometry;if(t.isMesh){let n=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(n=void 0,e.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}if(e.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(e.vertices),n.needsUpdate=!0),e.verticesNeedUpdate=!1}if(e.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(e.normals),n.needsUpdate=!0),e.normalsNeedUpdate=!1}if(e.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(e.colors),n.needsUpdate=!0),e.colorsNeedUpdate=!1}if(e.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(e.uvs),n.needsUpdate=!0),e.uvsNeedUpdate=!1}if(e.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(e.lineDistances),n.needsUpdate=!0),e.lineDistancesNeedUpdate=!1}return e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new kl().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){const e=new Float32Array(3*t.vertices.length);if(this.setAttribute("position",new Ce(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){const n=new Float32Array(3*t.normals.length);this.setAttribute("normal",new Ce(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){const n=new Float32Array(3*t.colors.length);this.setAttribute("color",new Ce(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){const n=new Float32Array(2*t.uvs.length);this.setAttribute("uv",new Ce(n,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){const n=new Float32Array(2*t.uvs2.length);this.setAttribute("uv2",new Ce(n,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(const n in t.morphTargets){const i=[],r=t.morphTargets[n];for(let s=0,o=r.length;s<o;s++){const a=r[s],l=new be(3*a.data.length,3);l.name=a.name,i.push(l.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(t.skinIndices.length>0){const n=new be(4*t.skinIndices.length,4);this.setAttribute("skinIndex",n.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){const n=new be(4*t.skinWeights.length,4);this.setAttribute("skinWeight",n.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Te);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];_t.setFromBufferAttribute(r),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,_t.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,_t.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(_t.min),this.boundingBox.expandByPoint(_t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new x,1/0);if(t){const n=this.boundingSphere.center;if(_t.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(st.addVectors(_t.min,Di.min),_t.expandByPoint(st),st.addVectors(_t.max,Di.max),_t.expandByPoint(st)):(_t.expandByPoint(Di.min),_t.expandByPoint(Di.max))}_t.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)st.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(st));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)st.fromBufferAttribute(o,l),a&&(ei.fromBufferAttribute(t,l),st.add(ei)),i=Math.max(i,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new x,r=new x,s=new x,o=new x,a=new x,l=new x,c=new x,u=new x;if(t)for(let h=0,d=t.count;h<d;h+=3){const p=t.getX(h+0),f=t.getX(h+1),g=t.getX(h+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,f),s.fromBufferAttribute(e,g),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),o.fromBufferAttribute(n,p),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),o.add(c),a.add(c),l.add(c),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),n.setXYZ(h+0,c.x,c.y,c.z),n.setXYZ(h+1,c.x,c.y,c.z),n.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!t||!t.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const r=n[i].array,s=t.attributes[i],o=s.array,a=s.itemSize*e,l=Math.min(o.length,r.length-a);for(let c=0,u=a;c<l;c++,u++)r[u]=o[c]}return this},normalizeNormals:function(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)st.fromBufferAttribute(t,e),st.normalize(),t.setXYZ(e,st.x,st.y,st.z)},toNonIndexed:function(){function t(o,a){const l=o.array,c=o.itemSize,u=o.normalized,h=new l.constructor(a.length*c);let d=0,p=0;for(let f=0,g=a.length;f<g;f++){d=a[f]*c;for(let m=0;m<c;m++)h[p++]=l[d++]}return new Ce(h,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const e=new Be,n=this.index.array,i=this.attributes;for(const o in i){const a=t(i[o],n);e.setAttribute(o,a)}const r=this.morphAttributes;for(const o in r){const a=[],l=r[o];for(let c=0,u=l.length;c<u;c++){const h=t(l[c],n);a.push(h)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const l=s[o];e.addGroup(l.start,l.count,l.materialIndex)}return e},toJSON:function(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(t[l]=a[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const l=n[a],c=l.toJSON(t.data);l.name!==""&&(c.name=l.name),t.data.attributes[a]=c}const i={};let r=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],c=[];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=d.toJSON(t.data);d.name!==""&&(p.name=d.name),c.push(p)}c.length>0&&(i[a]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new Be().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const r=t.morphAttributes;for(const l in r){const c=[],u=r[l];for(let h=0,d=u.length;h<d;h++)c.push(u[h].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const Bo=new De,Dn=new Ci,Ss=new fn,vn=new x,yn=new x,xn=new x,Es=new x,Ts=new x,Ls=new x,gr=new x,vr=new x,yr=new x,ti=new O,ni=new O,ii=new O,Ni=new x,xr=new x;function Ze(t,e){_e.call(this),this.type="Mesh",this.geometry=t!==void 0?t:new Be,this.material=e!==void 0?e:new dt,this.updateMorphTargets()}function Uo(t,e,n,i,r,s,o,a){let l;if(l=e.side===1?i.intersectTriangle(o,s,r,!0,a):i.intersectTriangle(r,s,o,e.side!==2,a),l===null)return null;xr.copy(a),xr.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xr);return c<n.near||c>n.far?null:{distance:c,point:xr.clone(),object:t}}function _r(t,e,n,i,r,s,o,a,l,c,u,h){vn.fromBufferAttribute(r,c),yn.fromBufferAttribute(r,u),xn.fromBufferAttribute(r,h);const d=t.morphTargetInfluences;if(e.morphTargets&&s&&d){gr.set(0,0,0),vr.set(0,0,0),yr.set(0,0,0);for(let f=0,g=s.length;f<g;f++){const m=d[f],v=s[f];m!==0&&(Es.fromBufferAttribute(v,c),Ts.fromBufferAttribute(v,u),Ls.fromBufferAttribute(v,h),o?(gr.addScaledVector(Es,m),vr.addScaledVector(Ts,m),yr.addScaledVector(Ls,m)):(gr.addScaledVector(Es.sub(vn),m),vr.addScaledVector(Ts.sub(yn),m),yr.addScaledVector(Ls.sub(xn),m)))}vn.add(gr),yn.add(vr),xn.add(yr)}t.isSkinnedMesh&&(t.boneTransform(c,vn),t.boneTransform(u,yn),t.boneTransform(h,xn));const p=Uo(t,e,n,i,vn,yn,xn,Ni);if(p){a&&(ti.fromBufferAttribute(a,c),ni.fromBufferAttribute(a,u),ii.fromBufferAttribute(a,h),p.uv=lt.getUV(Ni,vn,yn,xn,ti,ni,ii,new O)),l&&(ti.fromBufferAttribute(l,c),ni.fromBufferAttribute(l,u),ii.fromBufferAttribute(l,h),p.uv2=lt.getUV(Ni,vn,yn,xn,ti,ni,ii,new O));const f=new gs(c,u,h);lt.getNormal(vn,yn,xn,f.normal),p.face=f}return p}Ze.prototype=Object.assign(Object.create(_e.prototype),{constructor:Ze,isMesh:!0,copy:function(t){return _e.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(r),t.ray.intersectsSphere(Ss)===!1)||(Bo.getInverse(r),Dn.copy(t.ray).applyMatrix4(Bo),n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,l=n.morphAttributes.position,c=n.morphTargetsRelative,u=n.attributes.uv,h=n.attributes.uv2,d=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let f=0,g=d.length;f<g;f++){const m=d[f],v=i[m.materialIndex];for(let y=Math.max(m.start,p.start),w=Math.min(m.start+m.count,p.start+p.count);y<w;y+=3){const _=o.getX(y),b=o.getX(y+1),E=o.getX(y+2);s=_r(this,v,t,Dn,a,l,c,u,h,_,b,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3){const m=o.getX(f),v=o.getX(f+1),y=o.getX(f+2);s=_r(this,i,t,Dn,a,l,c,u,h,m,v,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}else if(a!==void 0)if(Array.isArray(i))for(let f=0,g=d.length;f<g;f++){const m=d[f],v=i[m.materialIndex];for(let y=Math.max(m.start,p.start),w=Math.min(m.start+m.count,p.start+p.count);y<w;y+=3)s=_r(this,v,t,Dn,a,l,c,u,h,y,y+1,y+2),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}else for(let f=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);f<g;f+=3)s=_r(this,i,t,Dn,a,l,c,u,h,f,f+1,f+2),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}else if(n.isGeometry){const o=Array.isArray(i),a=n.vertices,l=n.faces;let c;const u=n.faceVertexUvs[0];u.length>0&&(c=u);for(let h=0,d=l.length;h<d;h++){const p=l[h],f=o?i[p.materialIndex]:i;if(f===void 0)continue;const g=a[p.a],m=a[p.b],v=a[p.c];if(s=Uo(this,f,t,Dn,g,m,v,Ni),s){if(c&&c[h]){const y=c[h];ti.copy(y[0]),ni.copy(y[1]),ii.copy(y[2]),s.uv=lt.getUV(Ni,g,m,v,ti,ni,ii,new O)}s.face=p,s.faceIndex=h,e.push(s)}}}}});class As extends Be{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxBufferGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;function f(g,m,v,y,w,_,b,E,S,P,I){const T=_/S,z=b/P,F=_/2,V=b/2,ee=E/2,R=S+1,te=P+1;let X=0,ne=0;const me=new x;for(let ve=0;ve<te;ve++){const L=ve*z-V;for(let C=0;C<R;C++){const re=C*T-F;me[g]=re*y,me[m]=L*w,me[v]=ee,c.push(me.x,me.y,me.z),me[g]=0,me[m]=0,me[v]=E>0?1:-1,u.push(me.x,me.y,me.z),h.push(C/S),h.push(1-ve/P),X+=1}}for(let ve=0;ve<P;ve++)for(let L=0;L<S;L++){const C=d+L+R*ve,re=d+L+R*(ve+1),J=d+(L+1)+R*(ve+1),Z=d+(L+1)+R*ve;l.push(C,re,Z),l.push(re,J,Z),ne+=6}a.addGroup(p,ne,I),p+=ne,d+=X}f("z","y","x",-1,-1,i,n,e,o,s,0),f("z","y","x",1,-1,i,n,-e,o,s,1),f("x","z","y",1,1,e,i,n,r,o,2),f("x","z","y",1,-1,e,i,-n,r,o,3),f("x","y","z",1,-1,e,n,i,r,s,4),f("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(h,2))}}function ri(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ct(t){const e={};for(let n=0;n<t.length;n++){const i=ri(t[n]);for(const r in i)e[r]=i[r]}return e}const jl={clone:ri,merge:ct};function pt(t){Se.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}function _n(){_e.call(this),this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De}function ot(t,e,n,i){_n.call(this),this.type="PerspectiveCamera",this.fov=t!==void 0?t:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=e!==void 0?e:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}function si(t,e,n){if(_e.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0)return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");this.renderTarget=n;const i=new ot(90,1,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new x(1,0,0)),this.add(i);const r=new ot(90,1,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new x(-1,0,0)),this.add(r);const s=new ot(90,1,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new x(0,1,0)),this.add(s);const o=new ot(90,1,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new x(0,-1,0)),this.add(o);const a=new ot(90,1,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new x(0,0,1)),this.add(a);const l=new ot(90,1,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new x(0,0,-1)),this.add(l),this.update=function(c,u){this.parent===null&&this.updateMatrixWorld();const h=c.xr.enabled,d=c.getRenderTarget();c.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,c.setRenderTarget(n,0),c.render(u,i),c.setRenderTarget(n,1),c.render(u,r),c.setRenderTarget(n,2),c.render(u,s),c.setRenderTarget(n,3),c.render(u,o),c.setRenderTarget(n,4),c.render(u,a),n.texture.generateMipmaps=p,c.setRenderTarget(n,5),c.render(u,l),c.setRenderTarget(d),c.xr.enabled=h}}function bn(t,e,n,i,r,s,o,a,l,c){t=t!==void 0?t:[],e=e!==void 0?e:301,o=o!==void 0?o:1022,se.call(this,t,e,n,i,r,s,o,a,l,c),this.flipY=!1,this._needsFlipEnvMap=!0}function Nn(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),Me.call(this,t,t,e),e=e||{},this.texture=new bn(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture._needsFlipEnvMap=!1}function oi(t,e,n,i,r,s,o,a,l,c,u,h){se.call(this,null,s,o,a,l,c,i,r,u,h),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=l!==void 0?l:1003,this.minFilter=c!==void 0?c:1003,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}pt.prototype=Object.create(Se.prototype),pt.prototype.constructor=pt,pt.prototype.isShaderMaterial=!0,pt.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ri(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this},pt.prototype.toJSON=function(t){const e=Se.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e},_n.prototype=Object.assign(Object.create(_e.prototype),{constructor:_n,isCamera:!0,copy:function(t,e){return _e.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new x),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){_e.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(t,e){_e.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}}),ot.prototype=Object.assign(Object.create(_n.prototype),{constructor:ot,isPerspectiveCamera:!0,copy:function(t,e){return _n.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){const e=.5*this.getFilmHeight()/t;this.fov=2*le.RAD2DEG*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const t=Math.tan(.5*le.DEG2RAD*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return 2*le.RAD2DEG*Math.atan(Math.tan(.5*le.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=this.near;let e=t*Math.tan(.5*le.DEG2RAD*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/l,i*=s.width/a,n*=s.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){const e=_e.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}),si.prototype=Object.create(_e.prototype),si.prototype.constructor=si,bn.prototype=Object.create(se.prototype),bn.prototype.constructor=bn,bn.prototype.isCubeTexture=!0,Object.defineProperty(bn.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}}),Nn.prototype=Object.create(Me.prototype),Nn.prototype.constructor=Nn,Nn.prototype.isWebGLCubeRenderTarget=!0,Nn.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=1023,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={tEquirect:{value:null}},i=`

			varying vec3 vWorldDirection;

			vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

				return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

			}

			void main() {

				vWorldDirection = transformDirection( position, modelMatrix );

				#include <begin_vertex>
				#include <project_vertex>

			}
		`,r=`

			uniform sampler2D tEquirect;

			varying vec3 vWorldDirection;

			#include <common>

			void main() {

				vec3 direction = normalize( vWorldDirection );

				vec2 sampleUV = equirectUv( direction );

				gl_FragColor = texture2D( tEquirect, sampleUV );

			}
		`,s=new As(5,5,5),o=new pt({name:"CubemapFromEquirect",uniforms:ri(n),vertexShader:i,fragmentShader:r,side:1,blending:0});o.uniforms.tEquirect.value=e;const a=new Ze(s,o),l=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new si(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this},Nn.prototype.clear=function(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)},oi.prototype=Object.create(se.prototype),oi.prototype.constructor=oi,oi.prototype.isDataTexture=!0;const ai=new fn,br=new x;class wr{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new nn,n!==void 0?n:new nn,i!==void 0?i:new nn,r!==void 0?r:new nn,s!==void 0?s:new nn,o!==void 0?o:new nn]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],d=i[8],p=i[9],f=i[10],g=i[11],m=i[12],v=i[13],y=i[14],w=i[15];return n[0].setComponents(a-r,h-l,g-d,w-m).normalize(),n[1].setComponents(a+r,h+l,g+d,w+m).normalize(),n[2].setComponents(a+s,h+c,g+p,w+v).normalize(),n[3].setComponents(a-s,h-c,g-p,w-v).normalize(),n[4].setComponents(a-o,h-u,g-f,w-y).normalize(),n[5].setComponents(a+o,h+u,g+f,w+y).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ai.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(br.x=r.normal.x>0?e.max.x:e.min.x,br.y=r.normal.y>0?e.max.y:e.min.y,br.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}}function Ho(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Wl(t,e){const n=e.isWebGL2,i=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),i.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);const s=i.get(r);s&&(t.deleteBuffer(s.buffer),i.delete(r))},update:function(r,s){if(r.isGLBufferAttribute){var o=i.get(r);return void((!o||o.version<r.version)&&i.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version}))}r.isInterleavedBufferAttribute&&(r=r.data);const a=i.get(r);a===void 0?i.set(r,function(l,c){const u=l.array,h=l.usage,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,u,h),l.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:u instanceof Uint8Array&&(p=5121),{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}(r,s)):a.version<r.version&&(function(l,c,u){const h=c.array,d=c.updateRange;t.bindBuffer(u,l),d.count===-1?t.bufferSubData(u,0,h):(n?t.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}(a.buffer,r,s),a.version=r.version)}}}class ql extends Be{constructor(e,n,i,r){super(),this.type="PlaneBufferGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=(e=e||1)/2,o=(n=n||1)/2,a=Math.floor(i)||1,l=Math.floor(r)||1,c=a+1,u=l+1,h=e/a,d=n/l,p=[],f=[],g=[],m=[];for(let v=0;v<u;v++){const y=v*d-o;for(let w=0;w<c;w++){const _=w*h-s;f.push(_,-y,0),g.push(0,0,1),m.push(w/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<a;y++){const w=y+c*v,_=y+c*(v+1),b=y+1+c*(v+1),E=y+1+c*v;p.push(w,_,E),p.push(_,b,E)}this.setIndex(p),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(m,2))}}const ze={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float fogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,normal_fragment_begin:`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmissionmap_fragment:`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,transmissionmap_pars_fragment:`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,normal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,normal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`},ue={common:{diffuse:{value:new ye(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new we},uv2Transform:{value:new we},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new O(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new we}},sprite:{diffuse:{value:new ye(15658734)},opacity:{value:1},center:{value:new O(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new we}}},kt={basic:{uniforms:ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.fog,ue.lights,{emissive:{value:new ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:ct([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:ct([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:ct([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:ct([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:ct([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:ct([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:ct([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.normal_vert,fragmentShader:ze.normal_frag},sprite:{uniforms:ct([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:ct([ue.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:ct([ue.common,ue.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:ct([ue.lights,ue.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};function Xl(t,e,n,i,r){const s=new ye(0);let o,a,l=0,c=null,u=0,h=null;function d(p,f){n.buffers.color.setClear(p.r,p.g,p.b,f,r)}return{getClearColor:function(){return s},setClearColor:function(p,f){s.set(p),l=f!==void 0?f:1,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(s,l)},render:function(p,f,g,m){let v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=e.get(v));const y=t.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?d(s,l):v&&v.isColor&&(d(v,1),m=!0),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.isWebGLCubeRenderTarget||v.mapping===306)?(a===void 0&&(a=new Ze(new As(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:ri(kt.cube.uniforms),vertexShader:kt.cube.vertexShader,fragmentShader:kt.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(_,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(a)),v.isWebGLCubeRenderTarget&&(v=v.texture),a.material.uniforms.envMap.value=v,a.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v._needsFlipEnvMap?-1:1,c===v&&u===v.version&&h===t.toneMapping||(a.material.needsUpdate=!0,c=v,u=v.version,h=t.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null)):v&&v.isTexture&&(o===void 0&&(o=new Ze(new ql(2,2),new pt({name:"BackgroundMaterial",uniforms:ri(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),o.material.uniforms.uvTransform.value.copy(v.matrix),c===v&&u===v.version&&h===t.toneMapping||(o.material.needsUpdate=!0,c=v,u=v.version,h=t.toneMapping),p.unshift(o,o.geometry,o.material,0,0,null))}}}function Yl(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null);let c=l;function u(_){return i.isWebGL2?t.bindVertexArray(_):s.bindVertexArrayOES(_)}function h(_){return i.isWebGL2?t.deleteVertexArray(_):s.deleteVertexArrayOES(_)}function d(_){const b=[],E=[],S=[];for(let P=0;P<r;P++)b[P]=0,E[P]=0,S[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:E,attributeDivisors:S,object:_,attributes:{},index:null}}function p(){const _=c.newAttributes;for(let b=0,E=_.length;b<E;b++)_[b]=0}function f(_){g(_,0)}function g(_,b){const E=c.newAttributes,S=c.enabledAttributes,P=c.attributeDivisors;E[_]=1,S[_]===0&&(t.enableVertexAttribArray(_),S[_]=1),P[_]!==b&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](_,b),P[_]=b)}function m(){const _=c.newAttributes,b=c.enabledAttributes;for(let E=0,S=b.length;E<S;E++)b[E]!==_[E]&&(t.disableVertexAttribArray(E),b[E]=0)}function v(_,b,E,S,P,I){i.isWebGL2!==!0||E!==5124&&E!==5125?t.vertexAttribPointer(_,b,E,S,P,I):t.vertexAttribIPointer(_,b,E,P,I)}function y(){w(),c!==l&&(c=l,u(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(_,b,E,S,P){let I=!1;if(o){const T=function(z,F,V){const ee=V.wireframe===!0;let R=a[z.id];R===void 0&&(R={},a[z.id]=R);let te=R[F.id];te===void 0&&(te={},R[F.id]=te);let X=te[ee];return X===void 0&&(X=d(i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()),te[ee]=X),X}(S,E,b);c!==T&&(c=T,u(c.object)),I=function(z,F){const V=c.attributes,ee=z.attributes;if(Object.keys(V).length!==Object.keys(ee).length)return!0;for(const R in ee){const te=V[R],X=ee[R];if(te===void 0||te.attribute!==X||te.data!==X.data)return!0}return c.index!==F}(S,P),I&&function(z,F){const V={},ee=z.attributes;for(const R in ee){const te=ee[R],X={};X.attribute=te,te.data&&(X.data=te.data),V[R]=X}c.attributes=V,c.index=F}(S,P)}else{const T=b.wireframe===!0;c.geometry===S.id&&c.program===E.id&&c.wireframe===T||(c.geometry=S.id,c.program=E.id,c.wireframe=T,I=!0)}_.isInstancedMesh===!0&&(I=!0),P!==null&&n.update(P,34963),I&&(function(T,z,F,V){if(i.isWebGL2===!1&&(T.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const ee=V.attributes,R=F.getAttributes(),te=z.defaultAttributeValues;for(const X in R){const ne=R[X];if(ne>=0){const me=ee[X];if(me!==void 0){const ve=me.normalized,L=me.itemSize,C=n.get(me);if(C===void 0)continue;const re=C.buffer,J=C.type,Z=C.bytesPerElement;if(me.isInterleavedBufferAttribute){const A=me.data,W=A.stride,Q=me.offset;A&&A.isInstancedInterleavedBuffer?(g(ne,A.meshPerAttribute),V._maxInstanceCount===void 0&&(V._maxInstanceCount=A.meshPerAttribute*A.count)):f(ne),t.bindBuffer(34962,re),v(ne,L,J,ve,W*Z,Q*Z)}else me.isInstancedBufferAttribute?(g(ne,me.meshPerAttribute),V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)):f(ne),t.bindBuffer(34962,re),v(ne,L,J,ve,0,0)}else if(X==="instanceMatrix"){const ve=n.get(T.instanceMatrix);if(ve===void 0)continue;const L=ve.buffer,C=ve.type;g(ne+0,1),g(ne+1,1),g(ne+2,1),g(ne+3,1),t.bindBuffer(34962,L),t.vertexAttribPointer(ne+0,4,C,!1,64,0),t.vertexAttribPointer(ne+1,4,C,!1,64,16),t.vertexAttribPointer(ne+2,4,C,!1,64,32),t.vertexAttribPointer(ne+3,4,C,!1,64,48)}else if(X==="instanceColor"){const ve=n.get(T.instanceColor);if(ve===void 0)continue;const L=ve.buffer,C=ve.type;g(ne,1),t.bindBuffer(34962,L),t.vertexAttribPointer(ne,3,C,!1,12,0)}else if(te!==void 0){const ve=te[X];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(ne,ve);break;case 3:t.vertexAttrib3fv(ne,ve);break;case 4:t.vertexAttrib4fv(ne,ve);break;default:t.vertexAttrib1fv(ne,ve)}}}}m()}(_,b,E,S),P!==null&&t.bindBuffer(34963,n.get(P).buffer))},reset:y,resetDefaultState:w,dispose:function(){y();for(const _ in a){const b=a[_];for(const E in b){const S=b[E];for(const P in S)h(S[P].object),delete S[P];delete b[E]}delete a[_]}},releaseStatesOfGeometry:function(_){if(a[_.id]===void 0)return;const b=a[_.id];for(const E in b){const S=b[E];for(const P in S)h(S[P].object),delete S[P];delete b[E]}delete a[_.id]},releaseStatesOfProgram:function(_){for(const b in a){const E=a[b];if(E[_.id]===void 0)continue;const S=E[_.id];for(const P in S)h(S[P].object),delete S[P];delete E[_.id]}},initAttributes:p,enableAttribute:f,disableUnusedAttributes:m}}function Jl(t,e,n,i){const r=i.isWebGL2;let s;this.setMode=function(o){s=o},this.render=function(o,a){t.drawArrays(s,o,a),n.update(a,s,1)},this.renderInstances=function(o,a,l){if(l===0)return;let c,u;if(r)c=t,u="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[u](s,o,a,l),n.update(a,s,l)}}function Zl(t,e,n){let i;function r(w){if(w==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext;let o=n.precision!==void 0?n.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=n.logarithmicDepthBuffer===!0,c=t.getParameter(34930),u=t.getParameter(35660),h=t.getParameter(3379),d=t.getParameter(34076),p=t.getParameter(34921),f=t.getParameter(36347),g=t.getParameter(36348),m=t.getParameter(36349),v=u>0,y=s||!!e.get("OES_texture_float");return{isWebGL2:s,getMaxAnisotropy:function(){if(i!==void 0)return i;const w=e.get("EXT_texture_filter_anisotropic");return i=w!==null?t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,i},getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:v&&y,maxSamples:s?t.getParameter(36183):0}}function $l(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new nn,a=new we,l={value:null,needsUpdate:!1};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,f){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,f!==!0||m===null){const v=p+4*g,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<v)&&(m=new Float32Array(v));for(let w=0,_=p;w!==g;++w,_+=4)o.copy(h[w]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const f=h.length!==0||d||i!==0||r;return r=d,n=u(h,p,0),i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,p){const f=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,v=t.get(h);if(!r||f===null||f.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,w=4*y;let _=v.clippingState||null;l.value=_,_=u(f,d,w,p);for(let b=0;b!==w;++b)_[b]=n[b];v.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}}}function Ql(t){let e=new WeakMap;function n(r,s){return s===303?r.mapping=301:s===304&&(r.mapping=302),r}function i(r){const s=r.target;s.removeEventListener("dispose",i);const o=e.get(s);o!==void 0&&(e.delete(s),o.dispose())}return{get:function(r){if(r&&r.isTexture){const s=r.mapping;if(s===303||s===304){if(e.has(r))return n(e.get(r).texture,r.mapping);{const o=r.image;if(o&&o.height>0){const a=t.getRenderList(),l=t.getRenderTarget(),c=t.getRenderState(),u=new Nn(o.height/2);return u.fromEquirectangularTexture(t,r),e.set(r,u),t.setRenderTarget(l),t.setRenderList(a),t.setRenderState(c),r.addEventListener("dispose",i),n(u.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}function Kl(t){const e={};return{has:function(n){if(e[n]!==void 0)return e[n]!==null;let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i!==null},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),e[n]}}}function ec(t,e,n,i){const r=new WeakMap,s=new WeakMap;function o(l){const c=l.target,u=r.get(c);u.index!==null&&e.remove(u.index);for(const d in u.attributes)e.remove(u.attributes[d]);c.removeEventListener("dispose",o),r.delete(c);const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function a(l){const c=[],u=l.index,h=l.attributes.position;let d=0;if(u!==null){const g=u.array;d=u.version;for(let m=0,v=g.length;m<v;m+=3){const y=g[m+0],w=g[m+1],_=g[m+2];c.push(y,w,w,_,_,y)}}else{const g=h.array;d=h.version;for(let m=0,v=g.length/3-1;m<v;m+=3){const y=m+0,w=m+1,_=m+2;c.push(y,w,w,_,_,y)}}const p=new(Fo(c)>65535?Ii:Ri)(c,1);p.version=d;const f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){let u=r.get(c);return u||(c.addEventListener("dispose",o),c.isBufferGeometry?u=c:c.isGeometry&&(c._bufferGeometry===void 0&&(c._bufferGeometry=new Be().setFromObject(l)),u=c._bufferGeometry),r.set(c,u),n.memory.geometries++,u)},update:function(l){const c=l.attributes;for(const h in c)e.update(c[h],34962);const u=l.morphAttributes;for(const h in u){const d=u[h];for(let p=0,f=d.length;p<f;p++)e.update(d[p],34962)}},getWireframeAttribute:function(l){const c=s.get(l);if(c){const u=l.index;u!==null&&c.version<u.version&&a(l)}else a(l);return s.get(l)}}}function tc(t,e,n,i){const r=i.isWebGL2;let s,o,a;this.setMode=function(l){s=l},this.setIndex=function(l){o=l.type,a=l.bytesPerElement},this.render=function(l,c){t.drawElements(s,c,o,l*a),n.update(c,s,1)},this.renderInstances=function(l,c,u){if(u===0)return;let h,d;if(r)h=t,d="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",h===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[d](s,c,o,l*a,u),n.update(c,s,u)}}function nc(t){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,r){switch(e.calls++,i){case 4:e.triangles+=r*(n/3);break;case 1:e.lines+=r*(n/2);break;case 3:e.lines+=r*(n-1);break;case 2:e.lines+=r*n;break;case 0:e.points+=r*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function ic(t,e){return t[0]-e[0]}function rc(t,e){return Math.abs(e[1])-Math.abs(t[1])}function sc(t){const e={},n=new Float32Array(8),i=[];for(let r=0;r<8;r++)i[r]=[r,0];return{update:function(r,s,o,a){const l=r.morphTargetInfluences,c=l===void 0?0:l.length;let u=e[s.id];if(u===void 0){u=[];for(let g=0;g<c;g++)u[g]=[g,0];e[s.id]=u}for(let g=0;g<c;g++){const m=u[g];m[0]=g,m[1]=l[g]}u.sort(rc);for(let g=0;g<8;g++)g<c&&u[g][1]?(i[g][0]=u[g][0],i[g][1]=u[g][1]):(i[g][0]=Number.MAX_SAFE_INTEGER,i[g][1]=0);i.sort(ic);const h=o.morphTargets&&s.morphAttributes.position,d=o.morphNormals&&s.morphAttributes.normal;let p=0;for(let g=0;g<8;g++){const m=i[g],v=m[0],y=m[1];v!==Number.MAX_SAFE_INTEGER&&y?(h&&s.getAttribute("morphTarget"+g)!==h[v]&&s.setAttribute("morphTarget"+g,h[v]),d&&s.getAttribute("morphNormal"+g)!==d[v]&&s.setAttribute("morphNormal"+g,d[v]),n[g]=y,p+=y):(h&&s.getAttribute("morphTarget"+g)!==void 0&&s.deleteAttribute("morphTarget"+g),d&&s.getAttribute("morphNormal"+g)!==void 0&&s.deleteAttribute("morphNormal"+g),n[g]=0)}const f=s.morphTargetsRelative?1:1-p;a.getUniforms().setValue(t,"morphTargetBaseInfluence",f),a.getUniforms().setValue(t,"morphTargetInfluences",n)}}}function oc(t,e,n,i){let r=new WeakMap;return{update:function(s){const o=i.render.frame,a=s.geometry,l=e.get(s,a);return r.get(l)!==o&&(a.isGeometry&&l.updateFromObject(s),e.update(l),r.set(l,o)),s.isInstancedMesh&&(n.update(s.instanceMatrix,34962),s.instanceColor!==null&&n.update(s.instanceColor,34962)),l},dispose:function(){r=new WeakMap}}}function Oi(t,e,n,i){se.call(this,null),this.image={data:t||null,width:e||1,height:n||1,depth:i||1},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}function zi(t,e,n,i){se.call(this,null),this.image={data:t||null,width:e||1,height:n||1,depth:i||1},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}kt.physical={uniforms:ct([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new O(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ye(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},Oi.prototype=Object.create(se.prototype),Oi.prototype.constructor=Oi,Oi.prototype.isDataTexture2DArray=!0,zi.prototype=Object.create(se.prototype),zi.prototype.constructor=zi,zi.prototype.isDataTexture3D=!0;const Go=new se,ac=new Oi,lc=new zi,ko=new bn,Vo=[],jo=[],Wo=new Float32Array(16),qo=new Float32Array(9),Xo=new Float32Array(4);function li(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vo[r];if(s===void 0&&(s=new Float32Array(r),Vo[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yo(t,e){let n=jo[e];n===void 0&&(n=new Int32Array(e),jo[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cc(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function hc(t,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function uc(t,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function dc(t,e){const n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function pc(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Et(n,i))return;Xo.set(i),t.uniformMatrix2fv(this.addr,!1,Xo),bt(n,i)}}function fc(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Et(n,i))return;qo.set(i),t.uniformMatrix3fv(this.addr,!1,qo),bt(n,i)}}function mc(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Et(n,i))return;Wo.set(i),t.uniformMatrix4fv(this.addr,!1,Wo),bt(n,i)}}function gc(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||Go,r)}function vc(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ac,r)}function yc(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||lc,r)}function xc(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||ko,r)}function _c(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bc(t,e){const n=this.cache;Et(n,e)||(t.uniform2iv(this.addr,e),bt(n,e))}function wc(t,e){const n=this.cache;Et(n,e)||(t.uniform3iv(this.addr,e),bt(n,e))}function Mc(t,e){const n=this.cache;Et(n,e)||(t.uniform4iv(this.addr,e),bt(n,e))}function Sc(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ec(t,e){t.uniform1fv(this.addr,e)}function Tc(t,e){t.uniform1iv(this.addr,e)}function Lc(t,e){t.uniform2iv(this.addr,e)}function Ac(t,e){t.uniform3iv(this.addr,e)}function Cc(t,e){t.uniform4iv(this.addr,e)}function Pc(t,e){const n=li(e,this.size,2);t.uniform2fv(this.addr,n)}function Rc(t,e){const n=li(e,this.size,3);t.uniform3fv(this.addr,n)}function Ic(t,e){const n=li(e,this.size,4);t.uniform4fv(this.addr,n)}function Dc(t,e){const n=li(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Nc(t,e){const n=li(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Oc(t,e){const n=li(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zc(t,e,n){const i=e.length,r=Yo(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||Go,r[s])}function Fc(t,e,n){const i=e.length,r=Yo(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||ko,r[s])}function Bc(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=function(i){switch(i){case 5126:return cc;case 35664:return hc;case 35665:return uc;case 35666:return dc;case 35674:return pc;case 35675:return fc;case 35676:return mc;case 5124:case 35670:return _c;case 35667:case 35671:return bc;case 35668:case 35672:return wc;case 35669:case 35673:return Mc;case 5125:return Sc;case 35678:case 36198:case 36298:case 36306:case 35682:return gc;case 35679:case 36299:case 36307:return yc;case 35680:case 36300:case 36308:case 36293:return xc;case 36289:case 36303:case 36311:case 36292:return vc}}(e.type)}function Jo(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=function(i){switch(i){case 5126:return Ec;case 35664:return Pc;case 35665:return Rc;case 35666:return Ic;case 35674:return Dc;case 35675:return Nc;case 35676:return Oc;case 5124:case 35670:return Tc;case 35667:case 35671:return Lc;case 35668:case 35672:return Ac;case 35669:case 35673:return Cc;case 35678:case 36198:case 36298:case 36306:case 35682:return zc;case 35680:case 36300:case 36308:case 36293:return Fc}}(e.type)}function Zo(t){this.id=t,this.seq=[],this.map={}}Jo.prototype.updateCache=function(t){const e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),bt(e,t)},Zo.prototype.setValue=function(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(t,e[o.id],n)}};const Cs=/([\w\d_]+)(\])?(\[|\.)?/g;function $o(t,e){t.seq.push(e),t.map[e.id]=e}function Uc(t,e,n){const i=t.name,r=i.length;for(Cs.lastIndex=0;;){const s=Cs.exec(i),o=Cs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a|=0),c===void 0||c==="["&&o+2===r){$o(n,c===void 0?new Bc(a,t,e):new Jo(a,t,e));break}{let u=n.map[a];u===void 0&&(u=new Zo(a),$o(n,u)),n=u}}}function wn(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i);Uc(r,t.getUniformLocation(e,r.name),this)}}function Qo(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}wn.prototype.setValue=function(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)},wn.prototype.setOptional=function(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)},wn.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}},wn.seqWithValue=function(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n};let Hc=0;function Ko(t){switch(t){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function ea(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();return i&&r===""?"":"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+function(s){const o=s.split(`
`);for(let a=0;a<o.length;a++)o[a]=a+1+": "+o[a];return o.join(`
`)}(t.getShaderSource(e))}function Fi(t,e){const n=Ko(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Gc(t,e){const n=Ko(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function kc(t,e){let n;switch(e){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="OptimizedCineon";break;case 4:n="ACESFilmic";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Bi(t){return t!==""}function ta(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function na(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ps(t){return t.replace(Vc,jc)}function jc(t,e){const n=ze[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ps(n)}const Wc=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,qc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ia(t){return t.replace(qc,ra).replace(Wc,Xc)}function Xc(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ra(t,e,n,i)}function ra(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sa(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yc(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=function(P){let I="SHADOWMAP_TYPE_BASIC";return P.shadowMapType===1?I="SHADOWMAP_TYPE_PCF":P.shadowMapType===2?I="SHADOWMAP_TYPE_PCF_SOFT":P.shadowMapType===3&&(I="SHADOWMAP_TYPE_VSM"),I}(n),c=function(P){let I="ENVMAP_TYPE_CUBE";if(P.envMap)switch(P.envMapMode){case 301:case 302:I="ENVMAP_TYPE_CUBE";break;case 306:case 307:I="ENVMAP_TYPE_CUBE_UV"}return I}(n),u=function(P){let I="ENVMAP_MODE_REFLECTION";if(P.envMap)switch(P.envMapMode){case 302:case 307:I="ENVMAP_MODE_REFRACTION"}return I}(n),h=function(P){let I="ENVMAP_BLENDING_NONE";if(P.envMap)switch(P.combine){case 0:I="ENVMAP_BLENDING_MULTIPLY";break;case 1:I="ENVMAP_BLENDING_MIX";break;case 2:I="ENVMAP_BLENDING_ADD"}return I}(n),d=t.gammaFactor>0?t.gammaFactor:1,p=n.isWebGL2?"":function(P){return[P.extensionDerivatives||P.envMapCubeUV||P.bumpMap||P.tangentSpaceNormalMap||P.clearcoatNormalMap||P.flatShading||P.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(P.extensionFragDepth||P.logarithmicDepthBuffer)&&P.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",P.extensionDrawBuffers&&P.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(P.extensionShaderTextureLOD||P.envMap)&&P.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bi).join(`
`)}(n),f=function(P){const I=[];for(const T in P){const z=P[T];z!==!1&&I.push("#define "+T+" "+z)}return I.join(`
`)}(s),g=r.createProgram();let m,v,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[f].filter(Bi).join(`
`),m.length>0&&(m+=`
`),v=[p,f].filter(Bi).join(`
`),v.length>0&&(v+=`
`)):(m=[sa(n),"#define SHADER_NAME "+n.shaderName,f,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),v=[p,sa(n),"#define SHADER_NAME "+n.shaderName,f,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?ze.tonemapping_pars_fragment:"",n.toneMapping!==0?kc("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",ze.encodings_pars_fragment,n.map?Fi("mapTexelToLinear",n.mapEncoding):"",n.matcap?Fi("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Fi("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Fi("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Fi("lightMapTexelToLinear",n.lightMapEncoding):"",Gc("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bi).join(`
`)),o=Ps(o),o=ta(o,n),o=na(o,n),a=Ps(a),a=ta(a,n),a=na(a,n),o=ia(o),a=ia(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",n.glslVersion==="300 es"?"":"out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=y+v+a,_=Qo(r,35633,y+m+o),b=Qo(r,35632,w);if(r.attachShader(g,_),r.attachShader(g,b),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),t.debug.checkShaderErrors){const P=r.getProgramInfoLog(g).trim(),I=r.getShaderInfoLog(_).trim(),T=r.getShaderInfoLog(b).trim();let z=!0,F=!0;if(r.getProgramParameter(g,35714)===!1){z=!1;const V=ea(r,_,"vertex"),ee=ea(r,b,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(g,35715),"gl.getProgramInfoLog",P,V,ee)}else P!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",P):I!==""&&T!==""||(F=!1);F&&(this.diagnostics={runnable:z,programLog:P,vertexShader:{log:I,prefix:m},fragmentShader:{log:T,prefix:v}})}let E,S;return r.deleteShader(_),r.deleteShader(b),this.getUniforms=function(){return E===void 0&&(E=new wn(r,g)),E},this.getAttributes=function(){return S===void 0&&(S=function(P,I){const T={},z=P.getProgramParameter(I,35721);for(let F=0;F<z;F++){const V=P.getActiveAttrib(I,F).name;T[V]=P.getAttribLocation(I,V)}return T}(r,g)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=n.shaderName,this.id=Hc++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=b,this}function Jc(t,e,n,i,r,s){const o=[],a=i.isWebGL2,l=i.logarithmicDepthBuffer,c=i.floatVertexTextures,u=i.maxVertexUniforms,h=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},f=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function g(m){let v;return m?m.isTexture?v=m.encoding:m.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),v=m.texture.encoding):v=3e3,v}return{getParameters:function(m,v,y,w,_){const b=w.fog,E=m.isMeshStandardMaterial?w.environment:null,S=e.get(m.envMap||E),P=p[m.type],I=_.isSkinnedMesh?function(V){const ee=V.skeleton.bones;if(c)return 1024;{const R=u,te=Math.floor((R-20)/4),X=Math.min(te,ee.length);return X<ee.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+ee.length+" bones. This GPU supports "+X+"."),0):X}}(_):0;let T,z;if(m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead.")),P){const V=kt[P];T=V.vertexShader,z=V.fragmentShader}else T=m.vertexShader,z=m.fragmentShader;const F=t.getRenderTarget();return{isWebGL2:a,shaderID:P,shaderName:m.type,vertexShader:T,fragmentShader:z,defines:m.defines,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,instancing:_.isInstancedMesh===!0,instancingColor:_.isInstancedMesh===!0&&_.instanceColor!==null,supportsVertexTextures:h,outputEncoding:F!==null?g(F.texture):t.outputEncoding,map:!!m.map,mapEncoding:g(m.map),matcap:!!m.matcap,matcapEncoding:g(m.matcap),envMap:!!S,envMapMode:S&&S.mapping,envMapEncoding:g(S),envMapCubeUV:!!S&&(S.mapping===306||S.mapping===307),lightMap:!!m.lightMap,lightMapEncoding:g(m.lightMap),aoMap:!!m.aoMap,emissiveMap:!!m.emissiveMap,emissiveMapEncoding:g(m.emissiveMap),bumpMap:!!m.bumpMap,normalMap:!!m.normalMap,objectSpaceNormalMap:m.normalMapType===1,tangentSpaceNormalMap:m.normalMapType===0,clearcoatMap:!!m.clearcoatMap,clearcoatRoughnessMap:!!m.clearcoatRoughnessMap,clearcoatNormalMap:!!m.clearcoatNormalMap,displacementMap:!!m.displacementMap,roughnessMap:!!m.roughnessMap,metalnessMap:!!m.metalnessMap,specularMap:!!m.specularMap,alphaMap:!!m.alphaMap,gradientMap:!!m.gradientMap,sheen:!!m.sheen,transmissionMap:!!m.transmissionMap,combine:m.combine,vertexTangents:m.normalMap&&m.vertexTangents,vertexColors:m.vertexColors,vertexUvs:!!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatMap||m.clearcoatRoughnessMap||m.clearcoatNormalMap||m.displacementMap||m.transmissionMap),uvsVertexOnly:!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatNormalMap||m.transmissionMap||!m.displacementMap),fog:!!b,useFog:m.fog,fogExp2:b&&b.isFogExp2,flatShading:m.flatShading,sizeAttenuation:m.sizeAttenuation,logarithmicDepthBuffer:l,skinning:m.skinning&&I>0,maxBones:I,useVertexTexture:c,morphTargets:m.morphTargets,morphNormals:m.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&y.length>0,shadowMapType:t.shadowMap.type,toneMapping:m.toneMapped?t.toneMapping:0,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:m.premultipliedAlpha,alphaTest:m.alphaTest,doubleSided:m.side===2,flipSided:m.side===1,depthPacking:m.depthPacking!==void 0&&m.depthPacking,index0AttributeName:m.index0AttributeName,extensionDerivatives:m.extensions&&m.extensions.derivatives,extensionFragDepth:m.extensions&&m.extensions.fragDepth,extensionDrawBuffers:m.extensions&&m.extensions.drawBuffers,extensionShaderTextureLOD:m.extensions&&m.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){const v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.fragmentShader),v.push(m.vertexShader)),m.defines!==void 0)for(const y in m.defines)v.push(y),v.push(m.defines[y]);if(m.isRawShaderMaterial===!1){for(let y=0;y<f.length;y++)v.push(m[f[y]]);v.push(t.outputEncoding),v.push(t.gammaFactor)}return v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){const v=p[m.type];let y;if(v){const w=kt[v];y=jl.clone(w.uniforms)}else y=m.uniforms;return y},acquireProgram:function(m,v){let y;for(let w=0,_=o.length;w<_;w++){const b=o[w];if(b.cacheKey===v){y=b,++y.usedTimes;break}}return y===void 0&&(y=new Yc(t,v,m,r),o.push(y)),y},releaseProgram:function(m){if(--m.usedTimes==0){const v=o.indexOf(m);o[v]=o[o.length-1],o.pop(),m.destroy()}},programs:o}}function Zc(){let t=new WeakMap;return{get:function(e){let n=t.get(e);return n===void 0&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e)},update:function(e,n,i){t.get(e)[n]=i},dispose:function(){t=new WeakMap}}}function $c(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qc(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function oa(t){const e=[];let n=0;const i=[],r=[],s={id:-1};function o(a,l,c,u,h,d){let p=e[n];const f=t.get(c);return p===void 0?(p={id:a.id,object:a,geometry:l,material:c,program:f.program||s,groupOrder:u,renderOrder:a.renderOrder,z:h,group:d},e[n]=p):(p.id=a.id,p.object=a,p.geometry=l,p.material=c,p.program=f.program||s,p.groupOrder=u,p.renderOrder=a.renderOrder,p.z=h,p.group=d),n++,p}return{opaque:i,transparent:r,init:function(){n=0,i.length=0,r.length=0},push:function(a,l,c,u,h,d){const p=o(a,l,c,u,h,d);(c.transparent===!0?r:i).push(p)},unshift:function(a,l,c,u,h,d){const p=o(a,l,c,u,h,d);(c.transparent===!0?r:i).unshift(p)},finish:function(){for(let a=n,l=e.length;a<l;a++){const c=e[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.program=null,c.group=null}},sort:function(a,l){i.length>1&&i.sort(a||$c),r.length>1&&r.sort(l||Qc)}}}function Kc(t){let e=new WeakMap;return{get:function(n,i){const r=e.get(n);let s;return r===void 0?(s=new oa(t),e.set(n,new WeakMap),e.get(n).set(i,s)):(s=r.get(i),s===void 0&&(s=new oa(t),r.set(i,s))),s},dispose:function(){e=new WeakMap}}}function eh(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new x,color:new ye};break;case"SpotLight":n={position:new x,direction:new x,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new x,color:new ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new x,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":n={color:new ye,position:new x,halfWidth:new x,halfHeight:new x}}return t[e.id]=n,n}}}let th=0;function nh(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function ih(t,e){const n=new eh,i=function(){const l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let u;switch(c.type){case"DirectionalLight":case"SpotLight":u={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new O};break;case"PointLight":u={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new O,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=u,u}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)r.probe.push(new x);const s=new x,o=new De,a=new De;return{setup:function(l,c,u){let h=0,d=0,p=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let f=0,g=0,m=0,v=0,y=0,w=0,_=0,b=0;const E=u.matrixWorldInverse;l.sort(nh);for(let P=0,I=l.length;P<I;P++){const T=l[P],z=T.color,F=T.intensity,V=T.distance,ee=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=z.r*F,d+=z.g*F,p+=z.b*F;else if(T.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(T.sh.coefficients[R],F);else if(T.isDirectionalLight){const R=n.get(T);if(R.color.copy(T.color).multiplyScalar(T.intensity),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(E),T.castShadow){const te=T.shadow,X=i.get(T);X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,r.directionalShadow[f]=X,r.directionalShadowMap[f]=ee,r.directionalShadowMatrix[f]=T.shadow.matrix,w++}r.directional[f]=R,f++}else if(T.isSpotLight){const R=n.get(T);if(R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(E),R.color.copy(z).multiplyScalar(F),R.distance=V,R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(E),R.coneCos=Math.cos(T.angle),R.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),R.decay=T.decay,T.castShadow){const te=T.shadow,X=i.get(T);X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,r.spotShadow[m]=X,r.spotShadowMap[m]=ee,r.spotShadowMatrix[m]=T.shadow.matrix,b++}r.spot[m]=R,m++}else if(T.isRectAreaLight){const R=n.get(T);R.color.copy(z).multiplyScalar(F),R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(E),a.identity(),o.copy(T.matrixWorld),o.premultiply(E),a.extractRotation(o),R.halfWidth.set(.5*T.width,0,0),R.halfHeight.set(0,.5*T.height,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),r.rectArea[v]=R,v++}else if(T.isPointLight){const R=n.get(T);if(R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(E),R.color.copy(T.color).multiplyScalar(T.intensity),R.distance=T.distance,R.decay=T.decay,T.castShadow){const te=T.shadow,X=i.get(T);X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,r.pointShadow[g]=X,r.pointShadowMap[g]=ee,r.pointShadowMatrix[g]=T.shadow.matrix,_++}r.point[g]=R,g++}else if(T.isHemisphereLight){const R=n.get(T);R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(E),R.direction.normalize(),R.skyColor.copy(T.color).multiplyScalar(F),R.groundColor.copy(T.groundColor).multiplyScalar(F),r.hemi[y]=R,y++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=p;const S=r.hash;S.directionalLength===f&&S.pointLength===g&&S.spotLength===m&&S.rectAreaLength===v&&S.hemiLength===y&&S.numDirectionalShadows===w&&S.numPointShadows===_&&S.numSpotShadows===b||(r.directional.length=f,r.spot.length=m,r.rectArea.length=v,r.point.length=g,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=_,r.spotShadowMatrix.length=b,S.directionalLength=f,S.pointLength=g,S.spotLength=m,S.rectAreaLength=v,S.hemiLength=y,S.numDirectionalShadows=w,S.numPointShadows=_,S.numSpotShadows=b,r.version=th++)},state:r}}function aa(t,e){const n=new ih(t,e),i=[],r=[];return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:function(s){n.setup(i,r,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){r.push(s)}}}function rh(t,e){let n=new WeakMap;return{get:function(i,r){let s;return n.has(i)===!1?(s=new aa(t,e),n.set(i,new WeakMap),n.get(i).set(r,s)):n.get(i).has(r)===!1?(s=new aa(t,e),n.get(i).set(r,s)):s=n.get(i).get(r),s},dispose:function(){n=new WeakMap}}}function On(t){Se.call(this),this.type="MeshDepthMaterial",this.depthPacking=3200,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}function zn(t){Se.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new x,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}function la(t,e,n){let i=new wr;const r=new O,s=new O,o=new pe,a=[],l=[],c={},u={0:1,1:0,2:2},h=new pt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new O},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),d=h.clone();d.defines.HORIZONAL_PASS=1;const p=new Be;p.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Ze(p,h),g=this;function m(b,E){const S=e.update(f);h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(E,null,S,h,f,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(E,null,S,d,f,null)}function v(b,E,S){const P=b<<0|E<<1|S<<2;let I=a[P];return I===void 0&&(I=new On({depthPacking:3201,morphTargets:b,skinning:E}),a[P]=I),I}function y(b,E,S){const P=b<<0|E<<1|S<<2;let I=l[P];return I===void 0&&(I=new zn({morphTargets:b,skinning:E}),l[P]=I),I}function w(b,E,S,P,I,T,z){let F=null,V=v,ee=b.customDepthMaterial;if(P.isPointLight===!0&&(V=y,ee=b.customDistanceMaterial),ee===void 0){let R=!1;S.morphTargets===!0&&(R=E.morphAttributes&&E.morphAttributes.position&&E.morphAttributes.position.length>0);let te=!1;b.isSkinnedMesh===!0&&(S.skinning===!0?te=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b)),F=V(R,te,b.isInstancedMesh===!0)}else F=ee;if(t.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0){const R=F.uuid,te=S.uuid;let X=c[R];X===void 0&&(X={},c[R]=X);let ne=X[te];ne===void 0&&(ne=F.clone(),X[te]=ne),F=ne}return F.visible=S.visible,F.wireframe=S.wireframe,F.side=z===3?S.shadowSide!==null?S.shadowSide:S.side:S.shadowSide!==null?S.shadowSide:u[S.side],F.clipShadows=S.clipShadows,F.clippingPlanes=S.clippingPlanes,F.clipIntersection=S.clipIntersection,F.wireframeLinewidth=S.wireframeLinewidth,F.linewidth=S.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(P.matrixWorld),F.nearDistance=I,F.farDistance=T),F}function _(b,E,S,P,I){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===3)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const z=e.update(b),F=b.material;if(Array.isArray(F)){const V=z.groups;for(let ee=0,R=V.length;ee<R;ee++){const te=V[ee],X=F[te.materialIndex];if(X&&X.visible){const ne=w(b,z,X,P,S.near,S.far,I);t.renderBufferDirect(S,null,z,ne,b,te)}}}else if(F.visible){const V=w(b,z,F,P,S.near,S.far,I);t.renderBufferDirect(S,null,z,V,b,null)}}const T=b.children;for(let z=0,F=T.length;z<F;z++)_(T[z],E,S,P,I)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(b,E,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const P=t.getRenderTarget(),I=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),z=t.state;z.setBlending(0),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let F=0,V=b.length;F<V;F++){const ee=b[F],R=ee.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const te=R.getFrameExtents();if(r.multiply(te),s.copy(R.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/te.x),r.x=s.x*te.x,R.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/te.y),r.y=s.y*te.y,R.mapSize.y=s.y)),R.map===null&&!R.isPointLightShadow&&this.type===3){const ne={minFilter:1006,magFilter:1006,format:1023};R.map=new Me(r.x,r.y,ne),R.map.texture.name=ee.name+".shadowMap",R.mapPass=new Me(r.x,r.y,ne),R.camera.updateProjectionMatrix()}if(R.map===null){const ne={minFilter:1003,magFilter:1003,format:1023};R.map=new Me(r.x,r.y,ne),R.map.texture.name=ee.name+".shadowMap",R.camera.updateProjectionMatrix()}t.setRenderTarget(R.map),t.clear();const X=R.getViewportCount();for(let ne=0;ne<X;ne++){const me=R.getViewport(ne);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),z.viewport(o),R.updateMatrices(ee,ne),i=R.getFrustum(),_(E,S,R.camera,ee,this.type)}R.isPointLightShadow||this.type!==3||m(R,S),R.needsUpdate=!1}g.needsUpdate=!1,t.setRenderTarget(P,I,T)}}function sh(t,e,n){const i=n.isWebGL2,r=new function(){let A=!1;const W=new pe;let Q=null;const N=new pe(0,0,0,0);return{setMask:function(D){Q===D||A||(t.colorMask(D,D,D,D),Q=D)},setLocked:function(D){A=D},setClear:function(D,H,K,j,ge){ge===!0&&(D*=j,H*=j,K*=j),W.set(D,H,K,j),N.equals(W)===!1&&(t.clearColor(D,H,K,j),N.copy(W))},reset:function(){A=!1,Q=null,N.set(-1,0,0,0)}}},s=new function(){let A=!1,W=null,Q=null,N=null;return{setTest:function(D){D?X(2929):ne(2929)},setMask:function(D){W===D||A||(t.depthMask(D),W=D)},setFunc:function(D){if(Q!==D){if(D)switch(D){case 0:t.depthFunc(512);break;case 1:t.depthFunc(519);break;case 2:t.depthFunc(513);break;case 3:t.depthFunc(515);break;case 4:t.depthFunc(514);break;case 5:t.depthFunc(518);break;case 6:t.depthFunc(516);break;case 7:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);Q=D}},setLocked:function(D){A=D},setClear:function(D){N!==D&&(t.clearDepth(D),N=D)},reset:function(){A=!1,W=null,Q=null,N=null}}},o=new function(){let A=!1,W=null,Q=null,N=null,D=null,H=null,K=null,j=null,ge=null;return{setTest:function(de){A||(de?X(2960):ne(2960))},setMask:function(de){W===de||A||(t.stencilMask(de),W=de)},setFunc:function(de,ae,Ee){Q===de&&N===ae&&D===Ee||(t.stencilFunc(de,ae,Ee),Q=de,N=ae,D=Ee)},setOp:function(de,ae,Ee){H===de&&K===ae&&j===Ee||(t.stencilOp(de,ae,Ee),H=de,K=ae,j=Ee)},setLocked:function(de){A=de},setClear:function(de){ge!==de&&(t.clearStencil(de),ge=de)},reset:function(){A=!1,W=null,Q=null,N=null,D=null,H=null,K=null,j=null,ge=null}}};let a={},l=null,c=null,u=null,h=null,d=null,p=null,f=null,g=null,m=null,v=!1,y=null,w=null,_=null,b=null,E=null;const S=t.getParameter(35661);let P=!1,I=0;const T=t.getParameter(7938);T.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL\ ([0-9])/.exec(T)[1]),P=I>=1):T.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(T)[1]),P=I>=2);let z=null,F={};const V=new pe,ee=new pe;function R(A,W,Q){const N=new Uint8Array(4),D=t.createTexture();t.bindTexture(A,D),t.texParameteri(A,10241,9728),t.texParameteri(A,10240,9728);for(let H=0;H<Q;H++)t.texImage2D(W+H,0,6408,1,1,0,6408,5121,N);return D}const te={};function X(A){a[A]!==!0&&(t.enable(A),a[A]=!0)}function ne(A){a[A]!==!1&&(t.disable(A),a[A]=!1)}te[3553]=R(3553,3553,1),te[34067]=R(34067,34069,6),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),X(2929),s.setFunc(3),C(!1),re(1),X(2884),L(0);const me={100:32774,101:32778,102:32779};if(i)me[103]=32775,me[104]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(me[103]=A.MIN_EXT,me[104]=A.MAX_EXT)}const ve={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function L(A,W,Q,N,D,H,K,j){if(A!==0){if(c||(X(3042),c=!0),A===5)D=D||W,H=H||Q,K=K||N,W===h&&D===f||(t.blendEquationSeparate(me[W],me[D]),h=W,f=D),Q===d&&N===p&&H===g&&K===m||(t.blendFuncSeparate(ve[Q],ve[N],ve[H],ve[K]),d=Q,p=N,g=H,m=K),u=A,v=null;else if(A!==u||j!==v){if(h===100&&f===100||(t.blendEquation(32774),h=100,f=100),j)switch(A){case 1:t.blendFuncSeparate(1,771,1,771);break;case 2:t.blendFunc(1,1);break;case 3:t.blendFuncSeparate(0,0,769,771);break;case 4:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A)}else switch(A){case 1:t.blendFuncSeparate(770,771,1,771);break;case 2:t.blendFunc(770,1);break;case 3:t.blendFunc(0,769);break;case 4:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A)}d=null,p=null,g=null,m=null,u=A,v=j}}else c&&(ne(3042),c=!1)}function C(A){y!==A&&(A?t.frontFace(2304):t.frontFace(2305),y=A)}function re(A){A!==0?(X(2884),A!==w&&(A===1?t.cullFace(1029):A===2?t.cullFace(1028):t.cullFace(1032))):ne(2884),w=A}function J(A,W,Q){A?(X(32823),b===W&&E===Q||(t.polygonOffset(W,Q),b=W,E=Q)):ne(32823)}function Z(A){A===void 0&&(A=33984+S-1),z!==A&&(t.activeTexture(A),z=A)}return{buffers:{color:r,depth:s,stencil:o},enable:X,disable:ne,useProgram:function(A){return l!==A&&(t.useProgram(A),l=A,!0)},setBlending:L,setMaterial:function(A,W){A.side===2?ne(2884):X(2884);let Q=A.side===1;W&&(Q=!Q),C(Q),A.blending===1&&A.transparent===!1?L(0):L(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),r.setMask(A.colorWrite);const N=A.stencilWrite;o.setTest(N),N&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),J(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits)},setFlipSided:C,setCullFace:re,setLineWidth:function(A){A!==_&&(P&&t.lineWidth(A),_=A)},setPolygonOffset:J,setScissorTest:function(A){A?X(3089):ne(3089)},activeTexture:Z,bindTexture:function(A,W){z===null&&Z();let Q=F[z];Q===void 0&&(Q={type:void 0,texture:void 0},F[z]=Q),Q.type===A&&Q.texture===W||(t.bindTexture(A,W||te[A]),Q.type=A,Q.texture=W)},unbindTexture:function(){const A=F[z];A!==void 0&&A.type!==void 0&&(t.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)},compressedTexImage2D:function(){try{t.compressedTexImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texImage2D:function(){try{t.texImage2D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texImage3D:function(){try{t.texImage3D.apply(t,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},scissor:function(A){V.equals(A)===!1&&(t.scissor(A.x,A.y,A.z,A.w),V.copy(A))},viewport:function(A){ee.equals(A)===!1&&(t.viewport(A.x,A.y,A.z,A.w),ee.copy(A))},reset:function(){a={},z=null,F={},l=null,u=null,y=null,w=null,r.reset(),s.reset(),o.reset()}}}function oh(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap;let p,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return f?new OffscreenCanvas(L,C):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function m(L,C,re,J){let Z=1;if((L.width>J||L.height>J)&&(Z=J/Math.max(L.width,L.height)),Z<1||C===!0){if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){const A=C?le.floorPowerOfTwo:Math.floor,W=A(Z*L.width),Q=A(Z*L.height);p===void 0&&(p=g(W,Q));const N=re?g(W,Q):p;return N.width=W,N.height=Q,N.getContext("2d").drawImage(L,0,0,W,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+W+"x"+Q+")."),N}return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L}return L}function v(L){return le.isPowerOfTwo(L.width)&&le.isPowerOfTwo(L.height)}function y(L,C){return L.generateMipmaps&&C&&L.minFilter!==1003&&L.minFilter!==1006}function w(L,C,re,J){t.generateMipmap(L),i.get(C).__maxMipLevel=Math.log(Math.max(re,J))*Math.LOG2E}function _(L,C,re){if(a===!1)return C;if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=C;return C===6403&&(re===5126&&(J=33326),re===5131&&(J=33325),re===5121&&(J=33321)),C===6407&&(re===5126&&(J=34837),re===5131&&(J=34843),re===5121&&(J=32849)),C===6408&&(re===5126&&(J=34836),re===5131&&(J=34842),re===5121&&(J=32856)),J!==33325&&J!==33326&&J!==34842&&J!==34836||e.get("EXT_color_buffer_float"),J}function b(L){return L===1003||L===1004||L===1005?9728:9729}function E(L){const C=L.target;C.removeEventListener("dispose",E),function(re){const J=i.get(re);J.__webglInit!==void 0&&(t.deleteTexture(J.__webglTexture),i.remove(re))}(C),C.isVideoTexture&&d.delete(C),o.memory.textures--}function S(L){const C=L.target;C.removeEventListener("dispose",S),function(re){const J=i.get(re),Z=i.get(re.texture);if(re){if(Z.__webglTexture!==void 0&&t.deleteTexture(Z.__webglTexture),re.depthTexture&&re.depthTexture.dispose(),re.isWebGLCubeRenderTarget)for(let A=0;A<6;A++)t.deleteFramebuffer(J.__webglFramebuffer[A]),J.__webglDepthbuffer&&t.deleteRenderbuffer(J.__webglDepthbuffer[A]);else t.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&t.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&t.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer&&t.deleteRenderbuffer(J.__webglColorRenderbuffer),J.__webglDepthRenderbuffer&&t.deleteRenderbuffer(J.__webglDepthRenderbuffer);i.remove(re.texture),i.remove(re)}}(C),o.memory.textures--}let P=0;function I(L,C){const re=i.get(L);if(L.isVideoTexture&&function(J){const Z=o.render.frame;d.get(J)!==Z&&(d.set(J,Z),J.update())}(L),L.version>0&&re.__version!==L.version){const J=L.image;if(J===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else{if(J.complete!==!1)return void R(re,L,C);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}n.activeTexture(33984+C),n.bindTexture(3553,re.__webglTexture)}function T(L,C){const re=i.get(L);L.version>0&&re.__version!==L.version?function(J,Z,A){if(Z.image.length!==6)return;ee(J,Z),n.activeTexture(33984+A),n.bindTexture(34067,J.__webglTexture),t.pixelStorei(37440,Z.flipY);const W=Z&&(Z.isCompressedTexture||Z.image[0].isCompressedTexture),Q=Z.image[0]&&Z.image[0].isDataTexture,N=[];for(let ae=0;ae<6;ae++)N[ae]=W||Q?Q?Z.image[ae].image:Z.image[ae]:m(Z.image[ae],!1,!0,c);const D=N[0],H=v(D)||a,K=s.convert(Z.format),j=s.convert(Z.type),ge=_(Z.internalFormat,K,j);let de;if(V(34067,Z,H),W){for(let ae=0;ae<6;ae++){de=N[ae].mipmaps;for(let Ee=0;Ee<de.length;Ee++){const Ne=de[Ee];Z.format!==1023&&Z.format!==1022?K!==null?n.compressedTexImage2D(34069+ae,Ee,ge,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+ae,Ee,ge,Ne.width,Ne.height,0,K,j,Ne.data)}}J.__maxMipLevel=de.length-1}else{de=Z.mipmaps;for(let ae=0;ae<6;ae++)if(Q){n.texImage2D(34069+ae,0,ge,N[ae].width,N[ae].height,0,K,j,N[ae].data);for(let Ee=0;Ee<de.length;Ee++){const Ne=de[Ee].image[ae].image;n.texImage2D(34069+ae,Ee+1,ge,Ne.width,Ne.height,0,K,j,Ne.data)}}else{n.texImage2D(34069+ae,0,ge,K,j,N[ae]);for(let Ee=0;Ee<de.length;Ee++){const Ne=de[Ee];n.texImage2D(34069+ae,Ee+1,ge,K,j,Ne.image[ae])}}J.__maxMipLevel=de.length}y(Z,H)&&w(34067,Z,D.width,D.height),J.__version=Z.version,Z.onUpdate&&Z.onUpdate(Z)}(re,L,C):(n.activeTexture(33984+C),n.bindTexture(34067,re.__webglTexture))}const z={1e3:10497,1001:33071,1002:33648},F={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function V(L,C,re){re?(t.texParameteri(L,10242,z[C.wrapS]),t.texParameteri(L,10243,z[C.wrapT]),L!==32879&&L!==35866||t.texParameteri(L,32882,z[C.wrapR]),t.texParameteri(L,10240,F[C.magFilter]),t.texParameteri(L,10241,F[C.minFilter])):(t.texParameteri(L,10242,33071),t.texParameteri(L,10243,33071),L!==32879&&L!==35866||t.texParameteri(L,32882,33071),C.wrapS===1001&&C.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(L,10240,b(C.magFilter)),t.texParameteri(L,10241,b(C.minFilter)),C.minFilter!==1003&&C.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const J=e.get("EXT_texture_filter_anisotropic");if(J){if(C.type===1015&&e.get("OES_texture_float_linear")===null||C.type===1016&&(a||e.get("OES_texture_half_float_linear"))===null)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(t.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function ee(L,C){L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E),L.__webglTexture=t.createTexture(),o.memory.textures++)}function R(L,C,re){let J=3553;C.isDataTexture2DArray&&(J=35866),C.isDataTexture3D&&(J=32879),ee(L,C),n.activeTexture(33984+re),n.bindTexture(J,L.__webglTexture),t.pixelStorei(37440,C.flipY),t.pixelStorei(37441,C.premultiplyAlpha),t.pixelStorei(3317,C.unpackAlignment);const Z=function(j){return!a&&(j.wrapS!==1001||j.wrapT!==1001||j.minFilter!==1003&&j.minFilter!==1006)}(C)&&v(C.image)===!1,A=m(C.image,Z,!1,u),W=v(A)||a,Q=s.convert(C.format);let N,D=s.convert(C.type),H=_(C.internalFormat,Q,D);V(J,C,W);const K=C.mipmaps;if(C.isDepthTexture)H=6402,a?H=C.type===1015?36012:C.type===1014?33190:C.type===1020?35056:33189:C.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===1026&&H===6402&&C.type!==1012&&C.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=1012,D=s.convert(C.type)),C.format===1027&&H===6402&&(H=34041,C.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=1020,D=s.convert(C.type))),n.texImage2D(3553,0,H,A.width,A.height,0,Q,D,null);else if(C.isDataTexture)if(K.length>0&&W){for(let j=0,ge=K.length;j<ge;j++)N=K[j],n.texImage2D(3553,j,H,N.width,N.height,0,Q,D,N.data);C.generateMipmaps=!1,L.__maxMipLevel=K.length-1}else n.texImage2D(3553,0,H,A.width,A.height,0,Q,D,A.data),L.__maxMipLevel=0;else if(C.isCompressedTexture){for(let j=0,ge=K.length;j<ge;j++)N=K[j],C.format!==1023&&C.format!==1022?Q!==null?n.compressedTexImage2D(3553,j,H,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,j,H,N.width,N.height,0,Q,D,N.data);L.__maxMipLevel=K.length-1}else if(C.isDataTexture2DArray)n.texImage3D(35866,0,H,A.width,A.height,A.depth,0,Q,D,A.data),L.__maxMipLevel=0;else if(C.isDataTexture3D)n.texImage3D(32879,0,H,A.width,A.height,A.depth,0,Q,D,A.data),L.__maxMipLevel=0;else if(K.length>0&&W){for(let j=0,ge=K.length;j<ge;j++)N=K[j],n.texImage2D(3553,j,H,Q,D,N);C.generateMipmaps=!1,L.__maxMipLevel=K.length-1}else n.texImage2D(3553,0,H,Q,D,A),L.__maxMipLevel=0;y(C,W)&&w(J,C,A.width,A.height),L.__version=C.version,C.onUpdate&&C.onUpdate(C)}function te(L,C,re,J){const Z=s.convert(C.texture.format),A=s.convert(C.texture.type),W=_(C.texture.internalFormat,Z,A);n.texImage2D(J,0,W,C.width,C.height,0,Z,A,null),t.bindFramebuffer(36160,L),t.framebufferTexture2D(36160,re,J,i.get(C.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function X(L,C,re){if(t.bindRenderbuffer(36161,L),C.depthBuffer&&!C.stencilBuffer){let J=33189;if(re){const Z=C.depthTexture;Z&&Z.isDepthTexture&&(Z.type===1015?J=36012:Z.type===1014&&(J=33190));const A=ne(C);t.renderbufferStorageMultisample(36161,A,J,C.width,C.height)}else t.renderbufferStorage(36161,J,C.width,C.height);t.framebufferRenderbuffer(36160,36096,36161,L)}else if(C.depthBuffer&&C.stencilBuffer){if(re){const J=ne(C);t.renderbufferStorageMultisample(36161,J,35056,C.width,C.height)}else t.renderbufferStorage(36161,34041,C.width,C.height);t.framebufferRenderbuffer(36160,33306,36161,L)}else{const J=s.convert(C.texture.format),Z=s.convert(C.texture.type),A=_(C.texture.internalFormat,J,Z);if(re){const W=ne(C);t.renderbufferStorageMultisample(36161,W,A,C.width,C.height)}else t.renderbufferStorage(36161,A,C.width,C.height)}t.bindRenderbuffer(36161,null)}function ne(L){return a&&L.isWebGLMultisampleRenderTarget?Math.min(h,L.samples):0}let me=!1,ve=!1;this.allocateTextureUnit=function(){const L=P;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),P+=1,L},this.resetTextureUnits=function(){P=0},this.setTexture2D=I,this.setTexture2DArray=function(L,C){const re=i.get(L);L.version>0&&re.__version!==L.version?R(re,L,C):(n.activeTexture(33984+C),n.bindTexture(35866,re.__webglTexture))},this.setTexture3D=function(L,C){const re=i.get(L);L.version>0&&re.__version!==L.version?R(re,L,C):(n.activeTexture(33984+C),n.bindTexture(32879,re.__webglTexture))},this.setTextureCube=T,this.setupRenderTarget=function(L){const C=i.get(L),re=i.get(L.texture);L.addEventListener("dispose",S),re.__webglTexture=t.createTexture(),o.memory.textures++;const J=L.isWebGLCubeRenderTarget===!0,Z=L.isWebGLMultisampleRenderTarget===!0,A=v(L)||a;if(!a||L.texture.format!==1022||L.texture.type!==1015&&L.texture.type!==1016||(L.texture.format=1023,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),J){C.__webglFramebuffer=[];for(let W=0;W<6;W++)C.__webglFramebuffer[W]=t.createFramebuffer()}else if(C.__webglFramebuffer=t.createFramebuffer(),Z)if(a){C.__webglMultisampledFramebuffer=t.createFramebuffer(),C.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,C.__webglColorRenderbuffer);const W=s.convert(L.texture.format),Q=s.convert(L.texture.type),N=_(L.texture.internalFormat,W,Q),D=ne(L);t.renderbufferStorageMultisample(36161,D,N,L.width,L.height),t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,C.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),L.depthBuffer&&(C.__webglDepthRenderbuffer=t.createRenderbuffer(),X(C.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(J){n.bindTexture(34067,re.__webglTexture),V(34067,L.texture,A);for(let W=0;W<6;W++)te(C.__webglFramebuffer[W],L,36064,34069+W);y(L.texture,A)&&w(34067,L.texture,L.width,L.height),n.bindTexture(34067,null)}else n.bindTexture(3553,re.__webglTexture),V(3553,L.texture,A),te(C.__webglFramebuffer,L,36064,3553),y(L.texture,A)&&w(3553,L.texture,L.width,L.height),n.bindTexture(3553,null);L.depthBuffer&&function(W){const Q=i.get(W),N=W.isWebGLCubeRenderTarget===!0;if(W.depthTexture){if(N)throw new Error("target.depthTexture not supported in Cube render targets");(function(D,H){if(H&&H.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,D),!H.depthTexture||!H.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(H.depthTexture).__webglTexture&&H.depthTexture.image.width===H.width&&H.depthTexture.image.height===H.height||(H.depthTexture.image.width=H.width,H.depthTexture.image.height=H.height,H.depthTexture.needsUpdate=!0),I(H.depthTexture,0);const K=i.get(H.depthTexture).__webglTexture;if(H.depthTexture.format===1026)t.framebufferTexture2D(36160,36096,3553,K,0);else{if(H.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");t.framebufferTexture2D(36160,33306,3553,K,0)}})(Q.__webglFramebuffer,W)}else if(N){Q.__webglDepthbuffer=[];for(let D=0;D<6;D++)t.bindFramebuffer(36160,Q.__webglFramebuffer[D]),Q.__webglDepthbuffer[D]=t.createRenderbuffer(),X(Q.__webglDepthbuffer[D],W,!1)}else t.bindFramebuffer(36160,Q.__webglFramebuffer),Q.__webglDepthbuffer=t.createRenderbuffer(),X(Q.__webglDepthbuffer,W,!1);t.bindFramebuffer(36160,null)}(L)},this.updateRenderTargetMipmap=function(L){const C=L.texture;if(y(C,v(L)||a)){const re=L.isWebGLCubeRenderTarget?34067:3553,J=i.get(C).__webglTexture;n.bindTexture(re,J),w(re,C,L.width,L.height),n.bindTexture(re,null)}},this.updateMultisampleRenderTarget=function(L){if(L.isWebGLMultisampleRenderTarget)if(a){const C=i.get(L);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);const re=L.width,J=L.height;let Z=16384;L.depthBuffer&&(Z|=256),L.stencilBuffer&&(Z|=1024),t.blitFramebuffer(0,0,re,J,0,0,re,J,Z,9728),t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSetTexture2D=function(L,C){L&&L.isWebGLRenderTarget&&(me===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),me=!0),L=L.texture),I(L,C)},this.safeSetTextureCube=function(L,C){L&&L.isWebGLCubeRenderTarget&&(ve===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ve=!0),L=L.texture),T(L,C)}}function ah(t,e,n){const i=n.isWebGL2;return{convert:function(r){let s;if(r===1009)return 5121;if(r===1017)return 32819;if(r===1018)return 32820;if(r===1019)return 33635;if(r===1010)return 5120;if(r===1011)return 5122;if(r===1012)return 5123;if(r===1013)return 5124;if(r===1014)return 5125;if(r===1015)return 5126;if(r===1016)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===1021)return 6406;if(r===1022)return 6407;if(r===1023)return 6408;if(r===1024)return 6409;if(r===1025)return 6410;if(r===1026)return 6402;if(r===1027)return 34041;if(r===1028)return 6403;if(r===1029)return 36244;if(r===1030)return 33319;if(r===1031)return 33320;if(r===1032)return 36248;if(r===1033)return 36249;if(r===33776||r===33777||r===33778||r===33779){if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(r===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===35840||r===35841||r===35842||r===35843){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(r===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===36196)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===37492||r===37496)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(r===37492)return s.COMPRESSED_RGB8_ETC2;if(r===37496)return s.COMPRESSED_RGBA8_ETC2_EAC}return r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821||r===37840||r===37841||r===37842||r===37843||r===37844||r===37845||r===37846||r===37847||r===37848||r===37849||r===37850||r===37851||r===37852||r===37853?(s=e.get("WEBGL_compressed_texture_astc"),s!==null?r:null):r===36492?(s=e.get("EXT_texture_compression_bptc"),s!==null?r:null):r===1020?i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}function Rs(t){ot.call(this),this.cameras=t||[]}function gt(){_e.call(this),this.type="Group"}function Ui(){this._targetRay=null,this._grip=null,this._hand=null}function ca(t,e){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const l=[],c=new Map,u=new ot;u.layers.enable(1),u.viewport=new pe;const h=new ot;h.layers.enable(2),h.viewport=new pe;const d=[u,h],p=new Rs;p.layers.enable(1),p.layers.enable(2);let f=null,g=null;function m(I){const T=c.get(I.inputSource);T&&T.dispatchEvent({type:I.type,data:I.inputSource})}function v(){c.forEach(function(I,T){I.disconnect(T)}),c.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),P.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function y(I){s=I,P.setContext(i),P.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}function w(I){const T=i.inputSources;for(let z=0;z<l.length;z++)c.set(T[z],l[z]);for(let z=0;z<I.removed.length;z++){const F=I.removed[z],V=c.get(F);V&&(V.dispatchEvent({type:"disconnected",data:F}),c.delete(F))}for(let z=0;z<I.added.length;z++){const F=I.added[z],V=c.get(F);V&&V.dispatchEvent({type:"connected",data:F})}}this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let T=l[I];return T===void 0&&(T=new Ui,l[I]=T),T.getTargetRaySpace()},this.getControllerGrip=function(I){let T=l[I];return T===void 0&&(T=new Ui,l[I]=T),T.getGripSpace()},this.getHand=function(I){let T=l[I];return T===void 0&&(T=new Ui,l[I]=T),T.getHandSpace()},this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(I){if(i=I,i!==null){i.addEventListener("select",m),i.addEventListener("selectstart",m),i.addEventListener("selectend",m),i.addEventListener("squeeze",m),i.addEventListener("squeezestart",m),i.addEventListener("squeezeend",m),i.addEventListener("end",v);const T=e.getContextAttributes();T.xrCompatible!==!0&&e.makeXRCompatible();const z={antialias:T.antialias,alpha:T.alpha,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r},F=new XRWebGLLayer(i,e,z);i.updateRenderState({baseLayer:F}),i.requestReferenceSpace(o).then(y),i.addEventListener("inputsourceschange",w)}};const _=new x,b=new x;function E(I,T){T===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(T.matrixWorld,I.matrix),I.matrixWorldInverse.getInverse(I.matrixWorld)}this.getCamera=function(I){p.near=h.near=u.near=I.near,p.far=h.far=u.far=I.far,f===p.near&&g===p.far||(i.updateRenderState({depthNear:p.near,depthFar:p.far}),f=p.near,g=p.far);const T=I.parent,z=p.cameras;E(p,T);for(let V=0;V<z.length;V++)E(z[V],T);I.matrixWorld.copy(p.matrixWorld);const F=I.children;for(let V=0,ee=F.length;V<ee;V++)F[V].updateMatrixWorld(!0);return z.length===2?function(V,ee,R){_.setFromMatrixPosition(ee.matrixWorld),b.setFromMatrixPosition(R.matrixWorld);const te=_.distanceTo(b),X=ee.projectionMatrix.elements,ne=R.projectionMatrix.elements,me=X[14]/(X[10]-1),ve=X[14]/(X[10]+1),L=(X[9]+1)/X[5],C=(X[9]-1)/X[5],re=(X[8]-1)/X[0],J=(ne[8]+1)/ne[0],Z=me*re,A=me*J,W=te/(-re+J),Q=W*-re;ee.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Q),V.translateZ(W),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.getInverse(V.matrixWorld);const N=me+W,D=ve+W,H=Z-Q,K=A+(te-Q),j=L*ve/D*N,ge=C*ve/D*N;V.projectionMatrix.makePerspective(H,K,j,ge,N,D)}(p,u,h):p.projectionMatrix.copy(u.projectionMatrix),p};let S=null;const P=new Ho;P.setAnimationLoop(function(I,T){if(a=T.getViewerPose(s),a!==null){const F=a.views,V=i.renderState.baseLayer;t.setFramebuffer(V.framebuffer);let ee=!1;F.length!==p.cameras.length&&(p.cameras.length=0,ee=!0);for(let R=0;R<F.length;R++){const te=F[R],X=V.getViewport(te),ne=d[R];ne.matrix.fromArray(te.transform.matrix),ne.projectionMatrix.fromArray(te.projectionMatrix),ne.viewport.set(X.x,X.y,X.width,X.height),R===0&&p.matrix.copy(ne.matrix),ee===!0&&p.cameras.push(ne)}}const z=i.inputSources;for(let F=0;F<l.length;F++){const V=l[F],ee=z[F];V.update(ee,T,s)}S&&S(I,T)}),this.setAnimationLoop=function(I){S=I},this.dispose=function(){}}function lh(t){function e(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map),r.alphaMap&&(i.alphaMap.value=r.alphaMap),r.specularMap&&(i.specularMap.value=r.specularMap);const s=t.get(r).envMap;if(s){i.envMap.value=s,i.flipEnvMap.value=s.isCubeTexture&&s._needsFlipEnvMap?-1:1,i.reflectivity.value=r.reflectivity,i.refractionRatio.value=r.refractionRatio;const l=t.get(s).__maxMipLevel;l!==void 0&&(i.maxMipLevel.value=l)}let o,a;r.lightMap&&(i.lightMap.value=r.lightMap,i.lightMapIntensity.value=r.lightMapIntensity),r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity),r.map?o=r.map:r.specularMap?o=r.specularMap:r.displacementMap?o=r.displacementMap:r.normalMap?o=r.normalMap:r.bumpMap?o=r.bumpMap:r.roughnessMap?o=r.roughnessMap:r.metalnessMap?o=r.metalnessMap:r.alphaMap?o=r.alphaMap:r.emissiveMap?o=r.emissiveMap:r.clearcoatMap?o=r.clearcoatMap:r.clearcoatNormalMap?o=r.clearcoatNormalMap:r.clearcoatRoughnessMap&&(o=r.clearcoatRoughnessMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),i.uvTransform.value.copy(o.matrix)),r.aoMap?a=r.aoMap:r.lightMap&&(a=r.lightMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),i.uv2Transform.value.copy(a.matrix))}function n(i,r){i.roughness.value=r.roughness,i.metalness.value=r.metalness,r.roughnessMap&&(i.roughnessMap.value=r.roughnessMap),r.metalnessMap&&(i.metalnessMap.value=r.metalnessMap),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap),r.bumpMap&&(i.bumpMap.value=r.bumpMap,i.bumpScale.value=r.bumpScale,r.side===1&&(i.bumpScale.value*=-1)),r.normalMap&&(i.normalMap.value=r.normalMap,i.normalScale.value.copy(r.normalScale),r.side===1&&i.normalScale.value.negate()),r.displacementMap&&(i.displacementMap.value=r.displacementMap,i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),t.get(r).envMap&&(i.envMapIntensity.value=r.envMapIntensity)}return{refreshFogUniforms:function(i,r){i.fogColor.value.copy(r.color),r.isFog?(i.fogNear.value=r.near,i.fogFar.value=r.far):r.isFogExp2&&(i.fogDensity.value=r.density)},refreshMaterialUniforms:function(i,r,s,o){r.isMeshBasicMaterial?e(i,r):r.isMeshLambertMaterial?(e(i,r),function(a,l){l.emissiveMap&&(a.emissiveMap.value=l.emissiveMap)}(i,r)):r.isMeshToonMaterial?(e(i,r),function(a,l){l.gradientMap&&(a.gradientMap.value=l.gradientMap),l.emissiveMap&&(a.emissiveMap.value=l.emissiveMap),l.bumpMap&&(a.bumpMap.value=l.bumpMap,a.bumpScale.value=l.bumpScale,l.side===1&&(a.bumpScale.value*=-1)),l.normalMap&&(a.normalMap.value=l.normalMap,a.normalScale.value.copy(l.normalScale),l.side===1&&a.normalScale.value.negate()),l.displacementMap&&(a.displacementMap.value=l.displacementMap,a.displacementScale.value=l.displacementScale,a.displacementBias.value=l.displacementBias)}(i,r)):r.isMeshPhongMaterial?(e(i,r),function(a,l){a.specular.value.copy(l.specular),a.shininess.value=Math.max(l.shininess,1e-4),l.emissiveMap&&(a.emissiveMap.value=l.emissiveMap),l.bumpMap&&(a.bumpMap.value=l.bumpMap,a.bumpScale.value=l.bumpScale,l.side===1&&(a.bumpScale.value*=-1)),l.normalMap&&(a.normalMap.value=l.normalMap,a.normalScale.value.copy(l.normalScale),l.side===1&&a.normalScale.value.negate()),l.displacementMap&&(a.displacementMap.value=l.displacementMap,a.displacementScale.value=l.displacementScale,a.displacementBias.value=l.displacementBias)}(i,r)):r.isMeshStandardMaterial?(e(i,r),r.isMeshPhysicalMaterial?function(a,l){n(a,l),a.reflectivity.value=l.reflectivity,a.clearcoat.value=l.clearcoat,a.clearcoatRoughness.value=l.clearcoatRoughness,l.sheen&&a.sheen.value.copy(l.sheen),l.clearcoatMap&&(a.clearcoatMap.value=l.clearcoatMap),l.clearcoatRoughnessMap&&(a.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap),l.clearcoatNormalMap&&(a.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),a.clearcoatNormalMap.value=l.clearcoatNormalMap,l.side===1&&a.clearcoatNormalScale.value.negate()),a.transmission.value=l.transmission,l.transmissionMap&&(a.transmissionMap.value=l.transmissionMap)}(i,r):n(i,r)):r.isMeshMatcapMaterial?(e(i,r),function(a,l){l.matcap&&(a.matcap.value=l.matcap),l.bumpMap&&(a.bumpMap.value=l.bumpMap,a.bumpScale.value=l.bumpScale,l.side===1&&(a.bumpScale.value*=-1)),l.normalMap&&(a.normalMap.value=l.normalMap,a.normalScale.value.copy(l.normalScale),l.side===1&&a.normalScale.value.negate()),l.displacementMap&&(a.displacementMap.value=l.displacementMap,a.displacementScale.value=l.displacementScale,a.displacementBias.value=l.displacementBias)}(i,r)):r.isMeshDepthMaterial?(e(i,r),function(a,l){l.displacementMap&&(a.displacementMap.value=l.displacementMap,a.displacementScale.value=l.displacementScale,a.displacementBias.value=l.displacementBias)}(i,r)):r.isMeshDistanceMaterial?(e(i,r),function(a,l){l.displacementMap&&(a.displacementMap.value=l.displacementMap,a.displacementScale.value=l.displacementScale,a.displacementBias.value=l.displacementBias),a.referencePosition.value.copy(l.referencePosition),a.nearDistance.value=l.nearDistance,a.farDistance.value=l.farDistance}(i,r)):r.isMeshNormalMaterial?(e(i,r),function(a,l){l.bumpMap&&(a.bumpMap.value=l.bumpMap,a.bumpScale.value=l.bumpScale,l.side===1&&(a.bumpScale.value*=-1)),l.normalMap&&(a.normalMap.value=l.normalMap,a.normalScale.value.copy(l.normalScale),l.side===1&&a.normalScale.value.negate()),l.displacementMap&&(a.displacementMap.value=l.displacementMap,a.displacementScale.value=l.displacementScale,a.displacementBias.value=l.displacementBias)}(i,r)):r.isLineBasicMaterial?(function(a,l){a.diffuse.value.copy(l.color),a.opacity.value=l.opacity}(i,r),r.isLineDashedMaterial&&function(a,l){a.dashSize.value=l.dashSize,a.totalSize.value=l.dashSize+l.gapSize,a.scale.value=l.scale}(i,r)):r.isPointsMaterial?function(a,l,c,u){let h;a.diffuse.value.copy(l.color),a.opacity.value=l.opacity,a.size.value=l.size*c,a.scale.value=.5*u,l.map&&(a.map.value=l.map),l.alphaMap&&(a.alphaMap.value=l.alphaMap),l.map?h=l.map:l.alphaMap&&(h=l.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),a.uvTransform.value.copy(h.matrix))}(i,r,s,o):r.isSpriteMaterial?function(a,l){let c;a.diffuse.value.copy(l.color),a.opacity.value=l.opacity,a.rotation.value=l.rotation,l.map&&(a.map.value=l.map),l.alphaMap&&(a.alphaMap.value=l.alphaMap),l.map?c=l.map:l.alphaMap&&(c=l.alphaMap),c!==void 0&&(c.matrixAutoUpdate===!0&&c.updateMatrix(),a.uvTransform.value.copy(c.matrix))}(i,r):r.isShadowMaterial?(i.color.value.copy(r.color),i.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function Hi(t){const e=(t=t||{}).canvas!==void 0?t.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0&&t.alpha,r=t.depth===void 0||t.depth,s=t.stencil===void 0||t.stencil,o=t.antialias!==void 0&&t.antialias,a=t.premultipliedAlpha===void 0||t.premultipliedAlpha,l=t.preserveDrawingBuffer!==void 0&&t.preserveDrawingBuffer,c=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0&&t.failIfMajorPerformanceCaveat;let h=null,d=null;this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const p=this;let f=!1,g=null,m=0,v=0,y=null,w=null,_=-1,b=null,E=null;const S=new pe,P=new pe;let I=null,T=e.width,z=e.height,F=1,V=null,ee=null;const R=new pe(0,0,T,z),te=new pe(0,0,T,z);let X=!1;const ne=new wr;let me=!1,ve=!1;const L=new De,C=new x,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function J(){return y===null?F:1}let Z,A,W,Q,N,D,H,K,j,ge,de,ae,Ee,Ne,Ke,Qt,Kt,sr,or,Rt,ut,ce=n;function yl(M,q){for(let B=0;B<M.length;B++){const Y=M[B],he=e.getContext(Y,q);if(he!==null)return he}return null}try{const M={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",bl,!1),e.addEventListener("webglcontextrestored",wl,!1),ce===null){const q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&q.shift(),ce=yl(q,M),ce===null)throw yl(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ce.getShaderPrecisionFormat===void 0&&(ce.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}function xl(){Z=new Kl(ce),A=new Zl(ce,Z,t),A.isWebGL2===!1&&(Z.get("WEBGL_depth_texture"),Z.get("OES_texture_float"),Z.get("OES_texture_half_float"),Z.get("OES_texture_half_float_linear"),Z.get("OES_standard_derivatives"),Z.get("OES_element_index_uint"),Z.get("OES_vertex_array_object"),Z.get("ANGLE_instanced_arrays")),Z.get("OES_texture_float_linear"),Rt=new ah(ce,Z,A),W=new sh(ce,Z,A),W.scissor(P.copy(te).multiplyScalar(F).floor()),W.viewport(S.copy(R).multiplyScalar(F).floor()),Q=new nc(ce),N=new Zc,D=new oh(ce,Z,W,N,A,Rt,Q),H=new Ql(p),K=new Wl(ce,A),ut=new Yl(ce,Z,K,A),j=new ec(ce,K,Q,ut),ge=new oc(ce,j,K,Q),Kt=new sc(ce),Ke=new $l(N),de=new Jc(p,H,Z,A,ut,Ke),ae=new lh(N),Ee=new Kc(N),Ne=new rh(Z,A),Qt=new Xl(p,H,W,ge,a),sr=new Jl(ce,Z,Q,A),or=new tc(ce,Z,Q,A),Q.programs=de.programs,p.capabilities=A,p.extensions=Z,p.properties=N,p.renderLists=Ee,p.state=W,p.info=Q}xl();const An=new ca(p,ce);this.xr=An;const _l=new la(p,ge,A.maxTextureSize);function bl(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function wl(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1,xl()}function Ml(M){const q=M.target;q.removeEventListener("dispose",Ml),function(B){Sl(B),N.remove(B)}(q)}function Sl(M){const q=N.get(M).program;q!==void 0&&de.releaseProgram(q)}this.shadowMap=_l,this.getContext=function(){return ce},this.getContextAttributes=function(){return ce.getContextAttributes()},this.forceContextLoss=function(){const M=Z.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Z.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(M){M!==void 0&&(F=M,this.setSize(T,z,!1))},this.getSize=function(M){return M===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),M=new O),M.set(T,z)},this.setSize=function(M,q,B){An.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(T=M,z=q,e.width=Math.floor(M*F),e.height=Math.floor(q*F),B!==!1&&(e.style.width=M+"px",e.style.height=q+"px"),this.setViewport(0,0,M,q))},this.getDrawingBufferSize=function(M){return M===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),M=new O),M.set(T*F,z*F).floor()},this.setDrawingBufferSize=function(M,q,B){T=M,z=q,F=B,e.width=Math.floor(M*B),e.height=Math.floor(q*B),this.setViewport(0,0,M,q)},this.getCurrentViewport=function(M){return M===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),M=new pe),M.copy(S)},this.getViewport=function(M){return M.copy(R)},this.setViewport=function(M,q,B,Y){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,q,B,Y),W.viewport(S.copy(R).multiplyScalar(F).floor())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,q,B,Y){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,q,B,Y),W.scissor(P.copy(te).multiplyScalar(F).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(M){W.setScissorTest(X=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){ee=M},this.getClearColor=function(){return Qt.getClearColor()},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(M,q,B){let Y=0;(M===void 0||M)&&(Y|=16384),(q===void 0||q)&&(Y|=256),(B===void 0||B)&&(Y|=1024),ce.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bl,!1),e.removeEventListener("webglcontextrestored",wl,!1),Ee.dispose(),Ne.dispose(),N.dispose(),H.dispose(),ge.dispose(),ut.dispose(),An.dispose(),ar.stop()},this.renderBufferImmediate=function(M,q){ut.initAttributes();const B=N.get(M);M.hasPositions&&!B.position&&(B.position=ce.createBuffer()),M.hasNormals&&!B.normal&&(B.normal=ce.createBuffer()),M.hasUvs&&!B.uv&&(B.uv=ce.createBuffer()),M.hasColors&&!B.color&&(B.color=ce.createBuffer());const Y=q.getAttributes();M.hasPositions&&(ce.bindBuffer(34962,B.position),ce.bufferData(34962,M.positionArray,35048),ut.enableAttribute(Y.position),ce.vertexAttribPointer(Y.position,3,5126,!1,0,0)),M.hasNormals&&(ce.bindBuffer(34962,B.normal),ce.bufferData(34962,M.normalArray,35048),ut.enableAttribute(Y.normal),ce.vertexAttribPointer(Y.normal,3,5126,!1,0,0)),M.hasUvs&&(ce.bindBuffer(34962,B.uv),ce.bufferData(34962,M.uvArray,35048),ut.enableAttribute(Y.uv),ce.vertexAttribPointer(Y.uv,2,5126,!1,0,0)),M.hasColors&&(ce.bindBuffer(34962,B.color),ce.bufferData(34962,M.colorArray,35048),ut.enableAttribute(Y.color),ce.vertexAttribPointer(Y.color,3,5126,!1,0,0)),ut.disableUnusedAttributes(),ce.drawArrays(4,0,M.count),M.count=0},this.renderBufferDirect=function(M,q,B,Y,he,Pe){q===null&&(q=re);const Oe=he.isMesh&&he.matrixWorld.determinant()<0,je=Al(M,q,Y,he);W.setMaterial(Y,Oe);let Re=B.index;const nt=B.attributes.position;if(Re===null){if(nt===void 0||nt.count===0)return}else if(Re.count===0)return;let rt,Ae=1;Y.wireframe===!0&&(Re=j.getWireframeAttribute(B),Ae=2),(Y.morphTargets||Y.morphNormals)&&Kt.update(he,B,Y,je),ut.setup(he,Y,je,B,Re);let et=sr;Re!==null&&(rt=K.get(Re),et=or,et.setIndex(rt));const ln=Re!==null?Re.count:nt.count,Ge=B.drawRange.start*Ae,Gn=B.drawRange.count*Ae,Mt=Pe!==null?Pe.start*Ae:0,St=Pe!==null?Pe.count*Ae:1/0,it=Math.max(Ge,Mt),vo=Math.min(ln,Ge+Gn,Mt+St)-1,vt=Math.max(0,vo-it+1);if(vt!==0){if(he.isMesh)Y.wireframe===!0?(W.setLineWidth(Y.wireframeLinewidth*J()),et.setMode(1)):et.setMode(4);else if(he.isLine){let cn=Y.linewidth;cn===void 0&&(cn=1),W.setLineWidth(cn*J()),he.isLineSegments?et.setMode(1):he.isLineLoop?et.setMode(2):et.setMode(3)}else he.isPoints?et.setMode(0):he.isSprite&&et.setMode(4);if(he.isInstancedMesh)et.renderInstances(it,vt,he.count);else if(B.isInstancedBufferGeometry){const cn=Math.min(B.instanceCount,B._maxInstanceCount);et.renderInstances(it,vt,cn)}else et.render(it,vt)}},this.compile=function(M,q){d=Ne.get(M,q),d.init(),M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights(q);const B=new WeakMap;M.traverse(function(Y){const he=Y.material;if(he)if(Array.isArray(he))for(let Pe=0;Pe<he.length;Pe++){const Oe=he[Pe];B.has(Oe)===!1&&(Li(Oe,M,Y),B.set(Oe))}else B.has(he)===!1&&(Li(he,M,Y),B.set(he))})};let go=null;const ar=new Ho;function El(M,q,B,Y){if(M.visible===!1)return;if(M.layers.test(q.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(q);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ne.intersectsSprite(M)){Y&&C.setFromMatrixPosition(M.matrixWorld).applyMatrix4(L);const Pe=ge.update(M),Oe=M.material;Oe.visible&&h.push(M,Pe,Oe,B,C.z,null)}}else if(M.isImmediateRenderObject)Y&&C.setFromMatrixPosition(M.matrixWorld).applyMatrix4(L),h.push(M,null,M.material,B,C.z,null);else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Q.render.frame&&(M.skeleton.update(),M.skeleton.frame=Q.render.frame),!M.frustumCulled||ne.intersectsObject(M))){Y&&C.setFromMatrixPosition(M.matrixWorld).applyMatrix4(L);const Pe=ge.update(M),Oe=M.material;if(Array.isArray(Oe)){const je=Pe.groups;for(let Re=0,nt=je.length;Re<nt;Re++){const rt=je[Re],Ae=Oe[rt.materialIndex];Ae&&Ae.visible&&h.push(M,Pe,Ae,B,C.z,rt)}}else Oe.visible&&h.push(M,Pe,Oe,B,C.z,null)}}const he=M.children;for(let Pe=0,Oe=he.length;Pe<Oe;Pe++)El(he[Pe],q,B,Y)}function Tl(M,q,B){const Y=q.isScene===!0?q.overrideMaterial:null;for(let he=0,Pe=M.length;he<Pe;he++){const Oe=M[he],je=Oe.object,Re=Oe.geometry,nt=Y===null?Oe.material:Y,rt=Oe.group;if(B.isArrayCamera){E=B;const Ae=B.cameras;for(let et=0,ln=Ae.length;et<ln;et++){const Ge=Ae[et];je.layers.test(Ge.layers)&&(W.viewport(S.copy(Ge.viewport)),d.setupLights(Ge),Ll(je,q,Ge,Re,nt,rt))}}else E=null,Ll(je,q,B,Re,nt,rt)}}function Ll(M,q,B,Y,he,Pe){if(M.onBeforeRender(p,q,B,Y,he,Pe),d=Ne.get(q,E||B),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),M.isImmediateRenderObject){const Oe=Al(B,q,he,M);W.setMaterial(he),ut.reset(),function(je,Re){je.render(function(nt){p.renderBufferImmediate(nt,Re)})}(M,Oe)}else p.renderBufferDirect(B,q,Y,he,M,Pe);M.onAfterRender(p,q,B,Y,he,Pe),d=Ne.get(q,E||B)}function Li(M,q,B){q.isScene!==!0&&(q=re);const Y=N.get(M),he=d.state.lights,Pe=d.state.shadowsArray,Oe=he.state.version,je=de.getParameters(M,he.state,Pe,q,B),Re=de.getProgramCacheKey(je);let nt=Y.program,rt=!0;if(nt===void 0)M.addEventListener("dispose",Ml);else if(nt.cacheKey!==Re)Sl(M);else if(Y.lightsStateVersion!==Oe)rt=!1;else{if(je.shaderID!==void 0){const Ge=M.isMeshStandardMaterial?q.environment:null;return void(Y.envMap=H.get(M.envMap||Ge))}rt=!1}rt&&(je.uniforms=de.getUniforms(M),M.onBeforeCompile(je,p),nt=de.acquireProgram(je,Re),Y.program=nt,Y.uniforms=je.uniforms,Y.outputEncoding=je.outputEncoding);const Ae=Y.uniforms;(M.isShaderMaterial||M.isRawShaderMaterial)&&M.clipping!==!0||(Y.numClippingPlanes=Ke.numPlanes,Y.numIntersection=Ke.numIntersection,Ae.clippingPlanes=Ke.uniform),Y.environment=M.isMeshStandardMaterial?q.environment:null,Y.fog=q.fog,Y.envMap=H.get(M.envMap||Y.environment),Y.needsLights=function(Ge){return Ge.isMeshLambertMaterial||Ge.isMeshToonMaterial||Ge.isMeshPhongMaterial||Ge.isMeshStandardMaterial||Ge.isShadowMaterial||Ge.isShaderMaterial&&Ge.lights===!0}(M),Y.lightsStateVersion=Oe,Y.needsLights&&(Ae.ambientLightColor.value=he.state.ambient,Ae.lightProbe.value=he.state.probe,Ae.directionalLights.value=he.state.directional,Ae.directionalLightShadows.value=he.state.directionalShadow,Ae.spotLights.value=he.state.spot,Ae.spotLightShadows.value=he.state.spotShadow,Ae.rectAreaLights.value=he.state.rectArea,Ae.ltc_1.value=he.state.rectAreaLTC1,Ae.ltc_2.value=he.state.rectAreaLTC2,Ae.pointLights.value=he.state.point,Ae.pointLightShadows.value=he.state.pointShadow,Ae.hemisphereLights.value=he.state.hemi,Ae.directionalShadowMap.value=he.state.directionalShadowMap,Ae.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Ae.spotShadowMap.value=he.state.spotShadowMap,Ae.spotShadowMatrix.value=he.state.spotShadowMatrix,Ae.pointShadowMap.value=he.state.pointShadowMap,Ae.pointShadowMatrix.value=he.state.pointShadowMatrix);const et=Y.program.getUniforms(),ln=wn.seqWithValue(et.seq,Ae);Y.uniformsList=ln}function Al(M,q,B,Y){q.isScene!==!0&&(q=re),D.resetTextureUnits();const he=q.fog,Pe=B.isMeshStandardMaterial?q.environment:null,Oe=y===null?p.outputEncoding:y.texture.encoding,je=H.get(B.envMap||Pe),Re=N.get(B),nt=d.state.lights;if(me===!0&&(ve===!0||M!==b)){const it=M===b&&B.id===_;Ke.setState(B,M,it)}B.version===Re.__version?B.fog&&Re.fog!==he||Re.environment!==Pe||Re.needsLights&&Re.lightsStateVersion!==nt.state.version?Li(B,q,Y):Re.numClippingPlanes===void 0||Re.numClippingPlanes===Ke.numPlanes&&Re.numIntersection===Ke.numIntersection?(Re.outputEncoding!==Oe||Re.envMap!==je)&&Li(B,q,Y):Li(B,q,Y):(Li(B,q,Y),Re.__version=B.version);let rt=!1,Ae=!1,et=!1;const ln=Re.program,Ge=ln.getUniforms(),Gn=Re.uniforms;if(W.useProgram(ln.program)&&(rt=!0,Ae=!0,et=!0),B.id!==_&&(_=B.id,Ae=!0),rt||b!==M){if(Ge.setValue(ce,"projectionMatrix",M.projectionMatrix),A.logarithmicDepthBuffer&&Ge.setValue(ce,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),b!==M&&(b=M,Ae=!0,et=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const it=Ge.map.cameraPosition;it!==void 0&&it.setValue(ce,C.setFromMatrixPosition(M.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ge.setValue(ce,"isOrthographic",M.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||B.skinning)&&Ge.setValue(ce,"viewMatrix",M.matrixWorldInverse)}if(B.skinning){Ge.setOptional(ce,Y,"bindMatrix"),Ge.setOptional(ce,Y,"bindMatrixInverse");const it=Y.skeleton;if(it){const vo=it.bones;if(A.floatVertexTextures){if(it.boneTexture===void 0){let vt=Math.sqrt(4*vo.length);vt=le.ceilPowerOfTwo(vt),vt=Math.max(vt,4);const cn=new Float32Array(vt*vt*4);cn.set(it.boneMatrices);const tu=new oi(cn,vt,vt,1023,1015);it.boneMatrices=cn,it.boneTexture=tu,it.boneTextureSize=vt}Ge.setValue(ce,"boneTexture",it.boneTexture,D),Ge.setValue(ce,"boneTextureSize",it.boneTextureSize)}else Ge.setOptional(ce,it,"boneMatrices")}}var Mt,St;return(Ae||Re.receiveShadow!==Y.receiveShadow)&&(Re.receiveShadow=Y.receiveShadow,Ge.setValue(ce,"receiveShadow",Y.receiveShadow)),Ae&&(Ge.setValue(ce,"toneMappingExposure",p.toneMappingExposure),Re.needsLights&&(St=et,(Mt=Gn).ambientLightColor.needsUpdate=St,Mt.lightProbe.needsUpdate=St,Mt.directionalLights.needsUpdate=St,Mt.directionalLightShadows.needsUpdate=St,Mt.pointLights.needsUpdate=St,Mt.pointLightShadows.needsUpdate=St,Mt.spotLights.needsUpdate=St,Mt.spotLightShadows.needsUpdate=St,Mt.rectAreaLights.needsUpdate=St,Mt.hemisphereLights.needsUpdate=St),he&&B.fog&&ae.refreshFogUniforms(Gn,he),ae.refreshMaterialUniforms(Gn,B,F,z),wn.upload(ce,Re.uniformsList,Gn,D)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(wn.upload(ce,Re.uniformsList,Gn,D),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ge.setValue(ce,"center",Y.center),Ge.setValue(ce,"modelViewMatrix",Y.modelViewMatrix),Ge.setValue(ce,"normalMatrix",Y.normalMatrix),Ge.setValue(ce,"modelMatrix",Y.matrixWorld),ln}ar.setAnimationLoop(function(M){An.isPresenting||go&&go(M)}),typeof window!="undefined"&&ar.setContext(window),this.setAnimationLoop=function(M){go=M,An.setAnimationLoop(M),M===null?ar.stop():ar.start()},this.render=function(M,q){let B,Y;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),B=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),Y=arguments[3]),q!==void 0&&q.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(f===!0)return;ut.resetDefaultState(),_=-1,b=null,M.autoUpdate===!0&&M.updateMatrixWorld(),q.parent===null&&q.updateMatrixWorld(),An.enabled===!0&&An.isPresenting===!0&&(q=An.getCamera(q)),M.isScene===!0&&M.onBeforeRender(p,M,q,B||y),d=Ne.get(M,q),d.init(),L.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ne.setFromProjectionMatrix(L),ve=this.localClippingEnabled,me=Ke.init(this.clippingPlanes,ve,q),h=Ee.get(M,q),h.init(),El(M,q,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(V,ee),me===!0&&Ke.beginShadows();const he=d.state.shadowsArray;_l.render(he,M,q),d.setupLights(q),me===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),B!==void 0&&this.setRenderTarget(B),Qt.render(h,M,q,Y);const Pe=h.opaque,Oe=h.transparent;Pe.length>0&&Tl(Pe,M,q),Oe.length>0&&Tl(Oe,M,q),M.isScene===!0&&M.onAfterRender(p,M,q),y!==null&&(D.updateRenderTargetMipmap(y),D.updateMultisampleRenderTarget(y)),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1),h=null,d=null},this.setFramebuffer=function(M){g!==M&&y===null&&ce.bindFramebuffer(36160,M),g=M},this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderList=function(){return h},this.setRenderList=function(M){h=M},this.getRenderState=function(){return d},this.setRenderState=function(M){d=M},this.getRenderTarget=function(){return y},this.setRenderTarget=function(M,q=0,B=0){y=M,m=q,v=B,M&&N.get(M).__webglFramebuffer===void 0&&D.setupRenderTarget(M);let Y=g,he=!1;if(M){const Pe=N.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Y=Pe[q],he=!0):Y=M.isWebGLMultisampleRenderTarget?N.get(M).__webglMultisampledFramebuffer:Pe,S.copy(M.viewport),P.copy(M.scissor),I=M.scissorTest}else S.copy(R).multiplyScalar(F).floor(),P.copy(te).multiplyScalar(F).floor(),I=X;if(w!==Y&&(ce.bindFramebuffer(36160,Y),w=Y),W.viewport(S),W.scissor(P),W.setScissorTest(I),he){const Pe=N.get(M.texture);ce.framebufferTexture2D(36160,36064,34069+q,Pe.__webglTexture,B)}},this.readRenderTargetPixels=function(M,q,B,Y,he,Pe,Oe){if(!M||!M.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=N.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(je=je[Oe]),je){let Re=!1;je!==w&&(ce.bindFramebuffer(36160,je),Re=!0);try{const nt=M.texture,rt=nt.format,Ae=nt.type;if(rt!==1023&&Rt.convert(rt)!==ce.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!(Ae===1009||Rt.convert(Ae)===ce.getParameter(35738)||Ae===1015&&(A.isWebGL2||Z.get("OES_texture_float")||Z.get("WEBGL_color_buffer_float"))||Ae===1016&&(A.isWebGL2?Z.get("EXT_color_buffer_float"):Z.get("EXT_color_buffer_half_float"))))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");ce.checkFramebufferStatus(36160)===36053?q>=0&&q<=M.width-Y&&B>=0&&B<=M.height-he&&ce.readPixels(q,B,Y,he,Rt.convert(rt),Rt.convert(Ae),Pe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Re&&ce.bindFramebuffer(36160,w)}}},this.copyFramebufferToTexture=function(M,q,B){B===void 0&&(B=0);const Y=Math.pow(2,-B),he=Math.floor(q.image.width*Y),Pe=Math.floor(q.image.height*Y),Oe=Rt.convert(q.format);D.setTexture2D(q,0),ce.copyTexImage2D(3553,B,Oe,M.x,M.y,he,Pe,0),W.unbindTexture()},this.copyTextureToTexture=function(M,q,B,Y){Y===void 0&&(Y=0);const he=q.image.width,Pe=q.image.height,Oe=Rt.convert(B.format),je=Rt.convert(B.type);D.setTexture2D(B,0),ce.pixelStorei(37440,B.flipY),ce.pixelStorei(37441,B.premultiplyAlpha),ce.pixelStorei(3317,B.unpackAlignment),q.isDataTexture?ce.texSubImage2D(3553,Y,M.x,M.y,he,Pe,Oe,je,q.image.data):q.isCompressedTexture?ce.compressedTexSubImage2D(3553,Y,M.x,M.y,q.mipmaps[0].width,q.mipmaps[0].height,Oe,q.mipmaps[0].data):ce.texSubImage2D(3553,Y,M.x,M.y,Oe,je,q.image),Y===0&&B.generateMipmaps&&ce.generateMipmap(3553),W.unbindTexture()},this.initTexture=function(M){D.setTexture2D(M,0),W.unbindTexture()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function ha(t){Hi.call(this,t)}On.prototype=Object.create(Se.prototype),On.prototype.constructor=On,On.prototype.isMeshDepthMaterial=!0,On.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this},zn.prototype=Object.create(Se.prototype),zn.prototype.constructor=zn,zn.prototype.isMeshDistanceMaterial=!0,zn.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this},Rs.prototype=Object.assign(Object.create(ot.prototype),{constructor:Rs,isArrayCamera:!0}),gt.prototype=Object.assign(Object.create(_e.prototype),{constructor:gt,isGroup:!0}),Object.assign(Ui.prototype,{constructor:Ui,getHandSpace:function(){if(this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let t=0;t<=window.XRHand.LITTLE_PHALANX_TIP;t++){const e=new gt;e.matrixAutoUpdate=!1,e.visible=!1,this._hand.joints.push(e),this._hand.add(e)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,l=this._hand;if(t)if(l&&t.hand){s=!0;for(let c=0;c<=window.XRHand.LITTLE_PHALANX_TIP;c++)if(t.hand[c]){const u=e.getJointPose(t.hand[c],n),h=l.joints[c];u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=u.radius),h.visible=u!==null;const d=l.joints[window.XRHand.INDEX_PHALANX_TIP],p=l.joints[window.XRHand.THUMB_PHALANX_TIP],f=d.position.distanceTo(p.position),g=.02,m=.005;l.inputState.pinching&&f>g+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=g-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),this}}),Object.assign(ca.prototype,k.prototype),ha.prototype=Object.assign(Object.create(Hi.prototype),{constructor:ha,isWebGL1Renderer:!0});class ua extends _e{constructor(){super(),Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}function Tt(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=le.generateUUID()}Object.defineProperty(Tt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(Tt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e){return e===void 0&&(e=0),this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=le.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new Tt(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),this.stride);return e.setUsage(this.usage),e},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=le.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const Fn=new x;function Bn(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}function Un(t){Se.call(this),this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}let ci;Object.defineProperties(Bn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}}),Object.assign(Bn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)Fn.x=this.getX(e),Fn.y=this.getY(e),Fn.z=this.getZ(e),Fn.applyMatrix4(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Bn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}),Un.prototype=Object.create(Se.prototype),Un.prototype.constructor=Un,Un.prototype.isSpriteMaterial=!0,Un.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};const Gi=new x,hi=new x,ui=new x,di=new O,ki=new O,da=new De,Mr=new x,Vi=new x,Sr=new x,pa=new O,Is=new O,fa=new O;function ma(t){if(_e.call(this),this.type="Sprite",ci===void 0){ci=new Be;const e=new Tt(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ci.setIndex([0,1,2,0,2,3]),ci.setAttribute("position",new Bn(e,3,0,!1)),ci.setAttribute("uv",new Bn(e,2,3,!1))}this.geometry=ci,this.material=t!==void 0?t:new Un,this.center=new O(.5,.5)}function Er(t,e,n,i,r,s){di.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ki.x=s*di.x-r*di.y,ki.y=r*di.x+s*di.y):ki.copy(di),t.copy(e),t.x+=ki.x,t.y+=ki.y,t.applyMatrix4(da)}ma.prototype=Object.assign(Object.create(_e.prototype),{constructor:ma,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hi.setFromMatrixScale(this.matrixWorld),da.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ui.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hi.multiplyScalar(-ui.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;Er(Mr.set(-.5,-.5,0),ui,s,hi,i,r),Er(Vi.set(.5,-.5,0),ui,s,hi,i,r),Er(Sr.set(.5,.5,0),ui,s,hi,i,r),pa.set(0,0),Is.set(1,0),fa.set(1,1);let o=t.ray.intersectTriangle(Mr,Vi,Sr,!1,Gi);if(o===null&&(Er(Vi.set(-.5,.5,0),ui,s,hi,i,r),Is.set(0,1),o=t.ray.intersectTriangle(Mr,Sr,Vi,!1,Gi),o===null))return;const a=t.ray.origin.distanceTo(Gi);a<t.near||a>t.far||e.push({distance:a,point:Gi.clone(),uv:lt.getUV(Gi,Mr,Vi,Sr,pa,Is,fa,new O),face:null,object:this})},copy:function(t){return _e.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});const Tr=new x,ga=new x;function Ds(){_e.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}function Ns(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Ze.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De}Ds.prototype=Object.assign(Object.create(_e.prototype),{constructor:Ds,isLOD:!0,copy:function(t){_e.prototype.copy.call(this,t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e){e===void 0&&(e=0),e=Math.abs(e);const n=this.levels;let i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){Tr.setFromMatrixPosition(this.matrixWorld);const n=t.ray.origin.distanceTo(Tr);this.getObjectForDistance(n).raycast(t,e)}},update:function(t){const e=this.levels;if(e.length>1){Tr.setFromMatrixPosition(t.matrixWorld),ga.setFromMatrixPosition(this.matrixWorld);const n=Tr.distanceTo(ga)/t.zoom;let i,r;for(e[0].object.visible=!0,i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){const e=_e.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}}),Ns.prototype=Object.assign(Object.create(Ze.prototype),{constructor:Ns,isSkinnedMesh:!0,copy:function(t){return Ze.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.getInverse(e)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const t=new pe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){Ze.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){const t=new x,e=new pe,n=new pe,i=new x,r=new De;return function(s,o){const a=this.skeleton,l=this.geometry;e.fromBufferAttribute(l.attributes.skinIndex,s),n.fromBufferAttribute(l.attributes.skinWeight,s),t.fromBufferAttribute(l.attributes.position,s).applyMatrix4(this.bindMatrix),o.set(0,0,0);for(let c=0;c<4;c++){const u=n.getComponent(c);if(u!==0){const h=e.getComponent(c);r.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),o.addScaledVector(i.copy(t).applyMatrix4(r),u)}}return o.applyMatrix4(this.bindMatrixInverse)}}()});const va=new De,ch=new De;function Os(t,e){if(t=t||[],this.bones=t.slice(0),this.boneMatrices=new Float32Array(16*this.bones.length),this.frame=-1,e===void 0)this.calculateInverses();else if(this.bones.length===e.length)this.boneInverses=e.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}function ya(){_e.call(this),this.type="Bone"}Object.assign(Os.prototype,{calculateInverses:function(){this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++){const n=new De;this.bones[t]&&n.getInverse(this.bones[t].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.getInverse(this.boneInverses[t])}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){const o=t[r]?t[r].matrixWorld:ch;va.multiplyMatrices(o,e[r]),va.toArray(n,16*r)}i!==void 0&&(i.needsUpdate=!0)},clone:function(){return new Os(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}}),ya.prototype=Object.assign(Object.create(_e.prototype),{constructor:ya,isBone:!0});const xa=new De,_a=new De,Lr=[],ji=new Ze;function Wi(t,e,n){Ze.call(this,t,e),this.instanceMatrix=new Ce(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}function ft(t){Se.call(this),this.type="LineBasicMaterial",this.color=new ye(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}Wi.prototype=Object.assign(Object.create(Ze.prototype),{constructor:Wi,isInstancedMesh:!0,copy:function(t){return Ze.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new Ce(new Float32Array(3*this.count),3)),e.toArray(this.instanceColor.array,3*t)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,16*t)},raycast:function(t,e){const n=this.matrixWorld,i=this.count;if(ji.geometry=this.geometry,ji.material=this.material,ji.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,xa),_a.multiplyMatrices(n,xa),ji.matrixWorld=_a,ji.raycast(t,Lr);for(let s=0,o=Lr.length;s<o;s++){const a=Lr[s];a.instanceId=r,a.object=this,e.push(a)}Lr.length=0}},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,16*t)},updateMorphTargets:function(){}}),ft.prototype=Object.create(Se.prototype),ft.prototype.constructor=ft,ft.prototype.isLineBasicMaterial=!0,ft.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};const ba=new x,wa=new x,Ma=new De,Ar=new Ci,Cr=new fn;function pi(t,e,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),_e.call(this),this.type="Line",this.geometry=t!==void 0?t:new Be,this.material=e!==void 0?e:new ft,this.updateMorphTargets()}pi.prototype=Object.assign(Object.create(_e.prototype),{constructor:pi,isLine:!0,copy:function(t){return _e.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ba.fromBufferAttribute(e,i-1),wa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ba.distanceTo(wa);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;n[0]=0;for(let i=1,r=e.length;i<r;i++)n[i]=n[i-1],n[i]+=e[i-1].distanceTo(e[i])}return this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;Ma.getInverse(i),Ar.copy(t.ray).applyMatrix4(Ma);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new x,l=new x,c=new x,u=new x,h=this.isLineSegments?2:1;if(n.isBufferGeometry){const d=n.index,p=n.attributes.position;if(d!==null){const f=d.array;for(let g=0,m=f.length-1;g<m;g+=h){const v=f[g],y=f[g+1];if(a.fromBufferAttribute(p,v),l.fromBufferAttribute(p,y),Ar.distanceSqToSegment(a,l,u,c)>o)continue;u.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(u);w<t.near||w>t.far||e.push({distance:w,point:c.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else for(let f=0,g=p.count-1;f<g;f+=h){if(a.fromBufferAttribute(p,f),l.fromBufferAttribute(p,f+1),Ar.distanceSqToSegment(a,l,u,c)>o)continue;u.applyMatrix4(this.matrixWorld);const m=t.ray.origin.distanceTo(u);m<t.near||m>t.far||e.push({distance:m,point:c.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const d=n.vertices,p=d.length;for(let f=0;f<p-1;f+=h){if(Ar.distanceSqToSegment(d[f],d[f+1],u,c)>o)continue;u.applyMatrix4(this.matrixWorld);const g=t.ray.origin.distanceTo(u);g<t.near||g>t.far||e.push({distance:g,point:c.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const Pr=new x,Rr=new x;function fi(t,e){pi.call(this,t,e),this.type="LineSegments"}function Sa(t,e){pi.call(this,t,e),this.type="LineLoop"}function Ot(t){Se.call(this),this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}fi.prototype=Object.assign(Object.create(pi.prototype),{constructor:fi,isLineSegments:!0,computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Pr.fromBufferAttribute(e,i),Rr.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pr.distanceTo(Rr);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;for(let i=0,r=e.length;i<r;i+=2)Pr.copy(e[i]),Rr.copy(e[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pr.distanceTo(Rr)}return this}}),Sa.prototype=Object.assign(Object.create(pi.prototype),{constructor:Sa,isLineLoop:!0}),Ot.prototype=Object.create(Se.prototype),Ot.prototype.constructor=Ot,Ot.prototype.isPointsMaterial=!0,Ot.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};const Ea=new De,zs=new Ci,Ir=new fn,Dr=new x;function qi(t,e){_e.call(this),this.type="Points",this.geometry=t!==void 0?t:new Be,this.material=e!==void 0?e:new Ot,this.updateMorphTargets()}function Fs(t,e,n,i,r,s,o){const a=zs.distanceSqToPoint(t);if(a<n){const l=new x;zs.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function Ta(t,e,n,i,r,s,o,a,l){se.call(this,t,e,n,i,r,s,o,a,l),this.format=o!==void 0?o:1022,this.minFilter=s!==void 0?s:1006,this.magFilter=r!==void 0?r:1006,this.generateMipmaps=!1;const c=this;"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(function u(){c.needsUpdate=!0,t.requestVideoFrameCallback(u)})}function Xi(t,e,n,i,r,s,o,a,l,c,u,h){se.call(this,null,s,o,a,l,c,i,r,u,h),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}function Nr(t,e,n,i,r,s,o,a,l){se.call(this,t,e,n,i,r,s,o,a,l),this.needsUpdate=!0}function Or(t,e,n,i,r,s,o,a,l,c){if((c=c!==void 0?c:1026)!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===1026&&(n=1012),n===void 0&&c===1027&&(n=1020),se.call(this,null,i,r,s,o,a,c,n,l),this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=a!==void 0?a:1003,this.flipY=!1,this.generateMipmaps=!1}qi.prototype=Object.assign(Object.create(_e.prototype),{constructor:qi,isPoints:!0,copy:function(t){return _e.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;Ea.getInverse(i),zs.copy(t.ray).applyMatrix4(Ea);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position;if(a!==null){const c=a.array;for(let u=0,h=c.length;u<h;u++){const d=c[u];Dr.fromBufferAttribute(l,d),Fs(Dr,d,o,i,t,e,this)}}else for(let c=0,u=l.count;c<u;c++)Dr.fromBufferAttribute(l,c),Fs(Dr,c,o,i,t,e,this)}else{const a=n.vertices;for(let l=0,c=a.length;l<c;l++)Fs(a[l],l,o,i,t,e,this)}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}),Ta.prototype=Object.assign(Object.create(se.prototype),{constructor:Ta,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){const t=this.image;!("requestVideoFrameCallback"in t)&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}),Xi.prototype=Object.create(se.prototype),Xi.prototype.constructor=Xi,Xi.prototype.isCompressedTexture=!0,Nr.prototype=Object.create(se.prototype),Nr.prototype.constructor=Nr,Nr.prototype.isCanvasTexture=!0,Or.prototype=Object.create(se.prototype),Or.prototype.constructor=Or,Or.prototype.isDepthTexture=!0;let hh=0;const Vt=new De,Bs=new _e,zr=new x;function zt(){Object.defineProperty(this,"id",{value:hh+=2}),this.uuid=le.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}zt.prototype=Object.assign(Object.create(k.prototype),{constructor:zt,isGeometry:!0,applyMatrix4:function(t){const e=new we().getNormalMatrix(t);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(t);for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(e).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return Vt.makeRotationX(t),this.applyMatrix4(Vt),this},rotateY:function(t){return Vt.makeRotationY(t),this.applyMatrix4(Vt),this},rotateZ:function(t){return Vt.makeRotationZ(t),this.applyMatrix4(Vt),this},translate:function(t,e,n){return Vt.makeTranslation(t,e,n),this.applyMatrix4(Vt),this},scale:function(t,e,n){return Vt.makeScale(t,e,n),this.applyMatrix4(Vt),this},lookAt:function(t){return Bs.lookAt(t),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this},fromBufferGeometry:function(t){const e=this,n=t.index!==null?t.index:void 0,i=t.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,l=i.uv2;l!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)e.vertices.push(new x().fromBufferAttribute(r,h)),o!==void 0&&e.colors.push(new ye().fromBufferAttribute(o,h));function c(h,d,p,f){const g=o===void 0?[]:[e.colors[h].clone(),e.colors[d].clone(),e.colors[p].clone()],m=s===void 0?[]:[new x().fromBufferAttribute(s,h),new x().fromBufferAttribute(s,d),new x().fromBufferAttribute(s,p)],v=new gs(h,d,p,m,g,f);e.faces.push(v),a!==void 0&&e.faceVertexUvs[0].push([new O().fromBufferAttribute(a,h),new O().fromBufferAttribute(a,d),new O().fromBufferAttribute(a,p)]),l!==void 0&&e.faceVertexUvs[1].push([new O().fromBufferAttribute(l,h),new O().fromBufferAttribute(l,d),new O().fromBufferAttribute(l,p)])}const u=t.groups;if(u.length>0)for(let h=0;h<u.length;h++){const d=u[h],p=d.start;for(let f=p,g=p+d.count;f<g;f+=3)n!==void 0?c(n.getX(f),n.getX(f+1),n.getX(f+2),d.materialIndex):c(f,f+1,f+2,d.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)c(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)c(h,h+1,h+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this},normalize:function(){this.computeBoundingSphere();const t=this.boundingSphere.center,e=this.boundingSphere.radius,n=e===0?1:1/e,i=new De;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const t=new x,e=new x;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];t.subVectors(a,o),e.subVectors(s,o),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t){t===void 0&&(t=!0);const e=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)e[n]=new x;if(t){const n=new x,i=new x;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],l=this.vertices[o.b],c=this.vertices[o.c];n.subVectors(c,l),i.subVectors(a,l),n.cross(i),e[o.a].add(n),e[o.b].add(n),e[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];e[r.a].add(r.normal),e[r.b].add(r.normal),e[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)e[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(e[r.a]),s[1].copy(e[r.b]),s[2].copy(e[r.c])):(s[0]=e[r.a].clone(),s[1]=e[r.b].clone(),s[2]=e[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,e=this.faces.length;t<e;t++){const n=this.faces[t],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const t=new zt;t.faces=this.faces;for(let e=0,n=this.morphTargets.length;e<n;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];const r=this.morphNormals[e].faceNormals,s=this.morphNormals[e].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const l=new x,c={a:new x,b:new x,c:new x};r.push(l),s.push(c)}}const i=this.morphNormals[e];t.vertices=this.morphTargets[e].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],l=i.vertexNormals[r];a.copy(o.normal),l.a.copy(o.vertexNormals[0]),l.b.copy(o.vertexNormals[1]),l.c.copy(o.vertexNormals[2])}}for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Te),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n){if(!t||!t.isGeometry)return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);let i;const r=this.vertices.length,s=this.vertices,o=t.vertices,a=this.faces,l=t.faces,c=this.colors,u=t.colors;n===void 0&&(n=0),e!==void 0&&(i=new we().getNormalMatrix(e));for(let h=0,d=o.length;h<d;h++){const p=o[h].clone();e!==void 0&&p.applyMatrix4(e),s.push(p)}for(let h=0,d=u.length;h<d;h++)c.push(u[h].clone());for(let h=0,d=l.length;h<d;h++){const p=l[h];let f,g;const m=p.vertexNormals,v=p.vertexColors,y=new gs(p.a+r,p.b+r,p.c+r);y.normal.copy(p.normal),i!==void 0&&y.normal.applyMatrix3(i).normalize();for(let w=0,_=m.length;w<_;w++)f=m[w].clone(),i!==void 0&&f.applyMatrix3(i).normalize(),y.vertexNormals.push(f);y.color.copy(p.color);for(let w=0,_=v.length;w<_;w++)g=v[w],y.vertexColors.push(g.clone());y.materialIndex=p.materialIndex+n,a.push(y)}for(let h=0,d=t.faceVertexUvs.length;h<d;h++){const p=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let f=0,g=p.length;f<g;f++){const m=p[f],v=[];for(let y=0,w=m.length;y<w;y++)v.push(m[y].clone());this.faceVertexUvs[h].push(v)}}},mergeMesh:function(t){t&&t.isMesh?(t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t)},mergeVertices:function(){const t={},e=[],n=[],i=Math.pow(10,4);for(let o=0,a=this.vertices.length;o<a;o++){const l=this.vertices[o],c=Math.round(l.x*i)+"_"+Math.round(l.y*i)+"_"+Math.round(l.z*i);t[c]===void 0?(t[c]=o,e.push(this.vertices[o]),n[o]=e.length-1):n[o]=n[t[c]]}const r=[];for(let o=0,a=this.faces.length;o<a;o++){const l=this.faces[o];l.a=n[l.a],l.b=n[l.b],l.c=n[l.c];const c=[l.a,l.b,l.c];for(let u=0;u<3;u++)if(c[u]===c[(u+1)%3]){r.push(o);break}}for(let o=r.length-1;o>=0;o--){const a=r[o];this.faces.splice(a,1);for(let l=0,c=this.faceVertexUvs.length;l<c;l++)this.faceVertexUvs[l].splice(a,1)}const s=this.vertices.length-e.length;return this.vertices=e,s},setFromPoints:function(t){this.vertices=[];for(let e=0,n=t.length;e<n;e++){const i=t[e];this.vertices.push(new x(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const t=this.faces,e=t.length;for(let o=0;o<e;o++)t[o]._id=o;t.sort(function(o,a){return o.materialIndex-a.materialIndex});const n=this.faceVertexUvs[0],i=this.faceVertexUvs[1];let r,s;n&&n.length===e&&(r=[]),i&&i.length===e&&(s=[]);for(let o=0;o<e;o++){const a=t[o]._id;r&&r.push(n[a]),s&&s.push(i[a])}r&&(this.faceVertexUvs[0]=r),s&&(this.faceVertexUvs[1]=s)},toJSON:function(){const t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){const p=this.parameters;for(const f in p)p[f]!==void 0&&(t[f]=p[f]);return t}const e=[];for(let p=0;p<this.vertices.length;p++){const f=this.vertices[p];e.push(f.x,f.y,f.z)}const n=[],i=[],r={},s=[],o={},a=[],l={};for(let p=0;p<this.faces.length;p++){const f=this.faces[p],g=!0,m=!1,v=this.faceVertexUvs[0][p]!==void 0,y=f.normal.length()>0,w=f.vertexNormals.length>0,_=f.color.r!==1||f.color.g!==1||f.color.b!==1,b=f.vertexColors.length>0;let E=0;if(E=c(E,0,0),E=c(E,1,g),E=c(E,2,m),E=c(E,3,v),E=c(E,4,y),E=c(E,5,w),E=c(E,6,_),E=c(E,7,b),n.push(E),n.push(f.a,f.b,f.c),n.push(f.materialIndex),v){const S=this.faceVertexUvs[0][p];n.push(d(S[0]),d(S[1]),d(S[2]))}if(y&&n.push(u(f.normal)),w){const S=f.vertexNormals;n.push(u(S[0]),u(S[1]),u(S[2]))}if(_&&n.push(h(f.color)),b){const S=f.vertexColors;n.push(h(S[0]),h(S[1]),h(S[2]))}}function c(p,f,g){return g?p|1<<f:p&~(1<<f)}function u(p){const f=p.x.toString()+p.y.toString()+p.z.toString();return r[f]!==void 0||(r[f]=i.length/3,i.push(p.x,p.y,p.z)),r[f]}function h(p){const f=p.r.toString()+p.g.toString()+p.b.toString();return o[f]!==void 0||(o[f]=s.length,s.push(p.getHex())),o[f]}function d(p){const f=p.x.toString()+p.y.toString();return l[f]!==void 0||(l[f]=a.length/2,a.push(p.x,p.y)),l[f]}return t.data={},t.data.vertices=e,t.data.normals=i,s.length>0&&(t.data.colors=s),a.length>0&&(t.data.uvs=[a]),t.data.faces=n,t},clone:function(){return new zt().copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;const e=t.vertices;for(let h=0,d=e.length;h<d;h++)this.vertices.push(e[h].clone());const n=t.colors;for(let h=0,d=n.length;h<d;h++)this.colors.push(n[h].clone());const i=t.faces;for(let h=0,d=i.length;h<d;h++)this.faces.push(i[h].clone());for(let h=0,d=t.faceVertexUvs.length;h<d;h++){const p=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let f=0,g=p.length;f<g;f++){const m=p[f],v=[];for(let y=0,w=m.length;y<w;y++){const _=m[y];v.push(_.clone())}this.faceVertexUvs[h].push(v)}}const r=t.morphTargets;for(let h=0,d=r.length;h<d;h++){const p={};if(p.name=r[h].name,r[h].vertices!==void 0){p.vertices=[];for(let f=0,g=r[h].vertices.length;f<g;f++)p.vertices.push(r[h].vertices[f].clone())}if(r[h].normals!==void 0){p.normals=[];for(let f=0,g=r[h].normals.length;f<g;f++)p.normals.push(r[h].normals[f].clone())}this.morphTargets.push(p)}const s=t.morphNormals;for(let h=0,d=s.length;h<d;h++){const p={};if(s[h].vertexNormals!==void 0){p.vertexNormals=[];for(let f=0,g=s[h].vertexNormals.length;f<g;f++){const m=s[h].vertexNormals[f],v={};v.a=m.a.clone(),v.b=m.b.clone(),v.c=m.c.clone(),p.vertexNormals.push(v)}}if(s[h].faceNormals!==void 0){p.faceNormals=[];for(let f=0,g=s[h].faceNormals.length;f<g;f++)p.faceNormals.push(s[h].faceNormals[f].clone())}this.morphNormals.push(p)}const o=t.skinWeights;for(let h=0,d=o.length;h<d;h++)this.skinWeights.push(o[h].clone());const a=t.skinIndices;for(let h=0,d=a.length;h<d;h++)this.skinIndices.push(a[h].clone());const l=t.lineDistances;for(let h=0,d=l.length;h<d;h++)this.lineDistances.push(l[h]);const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});class La extends Be{constructor(e,n,i,r){super(),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},e=e||1,n=n!==void 0?Math.max(3,n):8,i=i!==void 0?i:0,r=r!==void 0?r:2*Math.PI;const s=[],o=[],a=[],l=[],c=new x,u=new O;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(a,3)),this.setAttribute("uv",new be(l,2))}}class Aa extends Be{constructor(e,n,i,r,s,o,a,l){super(),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;e=e!==void 0?e:1,n=n!==void 0?n:1,i=i||1,r=Math.floor(r)||8,s=Math.floor(s)||1,o=o!==void 0&&o,a=a!==void 0?a:0,l=l!==void 0?l:2*Math.PI;const u=[],h=[],d=[],p=[];let f=0;const g=[],m=i/2;let v=0;function y(w){const _=f,b=new O,E=new x;let S=0;const P=w===!0?e:n,I=w===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*I,0),d.push(0,I,0),p.push(.5,.5),f++;const T=f;for(let z=0;z<=r;z++){const F=z/r*l+a,V=Math.cos(F),ee=Math.sin(F);E.x=P*ee,E.y=m*I,E.z=P*V,h.push(E.x,E.y,E.z),d.push(0,I,0),b.x=.5*V+.5,b.y=.5*ee*I+.5,p.push(b.x,b.y),f++}for(let z=0;z<r;z++){const F=_+z,V=T+z;w===!0?u.push(V,V+1,F):u.push(V+1,V,F),S+=3}c.addGroup(v,S,w===!0?1:2),v+=S}(function(){const w=new x,_=new x;let b=0;const E=(n-e)/i;for(let S=0;S<=s;S++){const P=[],I=S/s,T=I*(n-e)+e;for(let z=0;z<=r;z++){const F=z/r,V=F*l+a,ee=Math.sin(V),R=Math.cos(V);_.x=T*ee,_.y=-I*i+m,_.z=T*R,h.push(_.x,_.y,_.z),w.set(ee,E,R).normalize(),d.push(w.x,w.y,w.z),p.push(F,1-I),P.push(f++)}g.push(P)}for(let S=0;S<r;S++)for(let P=0;P<s;P++){const I=g[P][S],T=g[P+1][S],z=g[P+1][S+1],F=g[P][S+1];u.push(I,T,F),u.push(T,z,F),b+=6}c.addGroup(v,b,0),v+=b})(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(p,2))}}new x,new x,new x,new lt;function Ca(t,e,n,i,r){let s,o;if(r===function(a,l,c,u){let h=0;for(let d=l,p=c-u;d<c;d+=u)h+=(a[p]-a[d])*(a[d+1]+a[p+1]),p=d;return h}(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Ia(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Ia(s,t[s],t[s+1],o);return o&&Fr(o,o.next)&&(Zi(o),o=o.next),o}function Mn(t,e){if(!t)return t;e||(e=t);let n,i=t;do if(n=!1,i.steiner||!Fr(i,i.next)&&Qe(i.prev,i,i.next)!==0)i=i.next;else{if(Zi(i),i=e=i.prev,i===i.next)break;n=!0}while(n||i!==e);return e}function Yi(t,e,n,i,r,s,o){if(!t)return;!o&&s&&function(u,h,d,p){let f=u;do f.z===null&&(f.z=Us(f.x,f.y,h,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==u);f.prevZ.nextZ=null,f.prevZ=null,function(g){let m,v,y,w,_,b,E,S,P=1;do{for(v=g,g=null,_=null,b=0;v;){for(b++,y=v,E=0,m=0;m<P&&(E++,y=y.nextZ,y);m++);for(S=P;E>0||S>0&&y;)E!==0&&(S===0||!y||v.z<=y.z)?(w=v,v=v.nextZ,E--):(w=y,y=y.nextZ,S--),_?_.nextZ=w:g=w,w.prevZ=_,_=w;v=y}_.nextZ=null,P*=2}while(b>1)}(f)}(t,i,r,s);let a,l,c=t;for(;t.prev!==t.next;)if(a=t.prev,l=t.next,s?dh(t,i,r,s):uh(t))e.push(a.i/n),e.push(t.i/n),e.push(l.i/n),Zi(t),t=l.next,c=l.next;else if((t=l)===c){o?o===1?Yi(t=ph(Mn(t),e,n),e,n,i,r,s,2):o===2&&fh(t,e,n,i,r,s):Yi(Mn(t),e,n,i,r,s,1);break}}function uh(t){const e=t.prev,n=t,i=t.next;if(Qe(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(mi(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Qe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function dh(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Qe(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Us(a,l,e,n,i),d=Us(c,u,e,n,i);let p=t.prevZ,f=t.nextZ;for(;p&&p.z>=h&&f&&f.z<=d;){if(p!==t.prev&&p!==t.next&&mi(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Qe(p.prev,p,p.next)>=0||(p=p.prevZ,f!==t.prev&&f!==t.next&&mi(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Qe(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;p&&p.z>=h;){if(p!==t.prev&&p!==t.next&&mi(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Qe(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;f&&f.z<=d;){if(f!==t.prev&&f!==t.next&&mi(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Qe(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function ph(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Fr(r,s)&&Pa(r,i,i.next,s)&&Ji(r,s)&&Ji(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),Zi(i),Zi(i.next),i=t=s),i=i.next}while(i!==t);return Mn(i)}function fh(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xh(o,a)){let l=Ra(o,a);return o=Mn(o,o.next),l=Mn(l,l.next),Yi(o,e,n,i,r,s),void Yi(l,e,n,i,r,s)}a=a.next}o=o.next}while(o!==t)}function mh(t,e){return t.x-e.x}function gh(t,e){if(e=function(n,i){let r=i;const s=n.x,o=n.y;let a,l=-1/0;do{if(o<=r.y&&o>=r.next.y&&r.next.y!==r.y){const f=r.x+(o-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(f<=s&&f>l){if(l=f,f===s){if(o===r.y)return r;if(o===r.next.y)return r.next}a=r.x<r.next.x?r:r.next}}r=r.next}while(r!==i);if(!a)return null;if(s===l)return a;const c=a,u=a.x,h=a.y;let d,p=1/0;r=a;do s>=r.x&&r.x>=u&&s!==r.x&&mi(o<h?s:l,o,u,h,o<h?l:s,o,r.x,r.y)&&(d=Math.abs(o-r.y)/(s-r.x),Ji(r,n)&&(d<p||d===p&&(r.x>a.x||r.x===a.x&&vh(a,r)))&&(a=r,p=d)),r=r.next;while(r!==c);return a}(t,e)){const n=Ra(e,t);Mn(e,e.next),Mn(n,n.next)}}function vh(t,e){return Qe(t.prev,t,e.prev)<0&&Qe(e.next,t,t.next)<0}function Us(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*r)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function yh(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function mi(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function xh(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(n,i){let r=n;do{if(r.i!==n.i&&r.next.i!==n.i&&r.i!==i.i&&r.next.i!==i.i&&Pa(r,r.next,n,i))return!0;r=r.next}while(r!==n);return!1}(t,e)&&(Ji(t,e)&&Ji(e,t)&&function(n,i){let r=n,s=!1;const o=(n.x+i.x)/2,a=(n.y+i.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&o<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==n);return s}(t,e)&&(Qe(t.prev,t,e.prev)||Qe(t,e.prev,e))||Fr(t,e)&&Qe(t.prev,t,t.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Fr(t,e){return t.x===e.x&&t.y===e.y}function Pa(t,e,n,i){const r=Ur(Qe(t,e,n)),s=Ur(Qe(t,e,i)),o=Ur(Qe(n,i,t)),a=Ur(Qe(n,i,e));return r!==s&&o!==a||!(r!==0||!Br(t,n,e))||!(s!==0||!Br(t,i,e))||!(o!==0||!Br(n,t,i))||!(a!==0||!Br(n,e,i))}function Br(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ur(t){return t>0?1:t<0?-1:0}function Ji(t,e){return Qe(t.prev,t,t.next)<0?Qe(t,e,t.next)>=0&&Qe(t,t.prev,e)>=0:Qe(t,e,t.prev)<0||Qe(t,t.next,e)<0}function Ra(t,e){const n=new Hs(t.i,t.x,t.y),i=new Hs(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Ia(t,e,n,i){const r=new Hs(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Zi(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Hs(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}const Sn={area:function(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return .5*n},isClockWise:function(t){return Sn.area(t)<0},triangulateShape:function(t,e){const n=[],i=[],r=[];Da(t),Na(n,t);let s=t.length;e.forEach(Da);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,Na(n,e[a]);const o=function(a,l,c){c=c||2;const u=l&&l.length,h=u?l[0]*c:a.length;let d=Ca(a,0,h,c,!0);const p=[];if(!d||d.next===d.prev)return p;let f,g,m,v,y,w,_;if(u&&(d=function(b,E,S,P){const I=[];let T,z,F,V,ee;for(T=0,z=E.length;T<z;T++)F=E[T]*P,V=T<z-1?E[T+1]*P:b.length,ee=Ca(b,F,V,P,!1),ee===ee.next&&(ee.steiner=!0),I.push(yh(ee));for(I.sort(mh),T=0;T<I.length;T++)gh(I[T],S),S=Mn(S,S.next);return S}(a,l,d,c)),a.length>80*c){f=m=a[0],g=v=a[1];for(let b=c;b<h;b+=c)y=a[b],w=a[b+1],y<f&&(f=y),w<g&&(g=w),y>m&&(m=y),w>v&&(v=w);_=Math.max(m-f,v-g),_=_!==0?1/_:0}return Yi(d,p,c,f,g,_),p}(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Da(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Na(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Oa extends Be{constructor(e,n){super(),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++)o(e[a]);function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1;let h=n.depth!==void 0?n.depth:100,d=n.bevelEnabled===void 0||n.bevelEnabled,p=n.bevelThickness!==void 0?n.bevelThickness:6,f=n.bevelSize!==void 0?n.bevelSize:p-2,g=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const v=n.extrudePath,y=n.UVGenerator!==void 0?n.UVGenerator:_h;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=n.amount);let w,_,b,E,S,P=!1;v&&(w=v.getSpacedPoints(u),P=!0,d=!1,_=v.computeFrenetFrames(u,!1),b=new x,E=new x,S=new x),d||(m=0,p=0,f=0,g=0);const I=a.extractPoints(c);let T=I.shape;const z=I.holes;if(!Sn.isClockWise(T)){T=T.reverse();for(let N=0,D=z.length;N<D;N++){const H=z[N];Sn.isClockWise(H)&&(z[N]=H.reverse())}}const F=Sn.triangulateShape(T,z),V=T;for(let N=0,D=z.length;N<D;N++){const H=z[N];T=T.concat(H)}function ee(N,D,H){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().multiplyScalar(H).add(N)}const R=T.length,te=F.length;function X(N,D,H){let K,j,ge;const de=N.x-D.x,ae=N.y-D.y,Ee=H.x-N.x,Ne=H.y-N.y,Ke=de*de+ae*ae,Qt=de*Ne-ae*Ee;if(Math.abs(Qt)>Number.EPSILON){const Kt=Math.sqrt(Ke),sr=Math.sqrt(Ee*Ee+Ne*Ne),or=D.x-ae/Kt,Rt=D.y+de/Kt,ut=((H.x-Ne/sr-or)*Ne-(H.y+Ee/sr-Rt)*Ee)/(de*Ne-ae*Ee);K=or+de*ut-N.x,j=Rt+ae*ut-N.y;const ce=K*K+j*j;if(ce<=2)return new O(K,j);ge=Math.sqrt(ce/2)}else{let Kt=!1;de>Number.EPSILON?Ee>Number.EPSILON&&(Kt=!0):de<-Number.EPSILON?Ee<-Number.EPSILON&&(Kt=!0):Math.sign(ae)===Math.sign(Ne)&&(Kt=!0),Kt?(K=-ae,j=de,ge=Math.sqrt(Ke)):(K=de,j=ae,ge=Math.sqrt(Ke/2))}return new O(K/ge,j/ge)}const ne=[];for(let N=0,D=V.length,H=D-1,K=N+1;N<D;N++,H++,K++)H===D&&(H=0),K===D&&(K=0),ne[N]=X(V[N],V[H],V[K]);const me=[];let ve,L=ne.concat();for(let N=0,D=z.length;N<D;N++){const H=z[N];ve=[];for(let K=0,j=H.length,ge=j-1,de=K+1;K<j;K++,ge++,de++)ge===j&&(ge=0),de===j&&(de=0),ve[K]=X(H[K],H[ge],H[de]);me.push(ve),L=L.concat(ve)}for(let N=0;N<m;N++){const D=N/m,H=p*Math.cos(D*Math.PI/2),K=f*Math.sin(D*Math.PI/2)+g;for(let j=0,ge=V.length;j<ge;j++){const de=ee(V[j],ne[j],K);J(de.x,de.y,-H)}for(let j=0,ge=z.length;j<ge;j++){const de=z[j];ve=me[j];for(let ae=0,Ee=de.length;ae<Ee;ae++){const Ne=ee(de[ae],ve[ae],K);J(Ne.x,Ne.y,-H)}}}const C=f+g;for(let N=0;N<R;N++){const D=d?ee(T[N],L[N],C):T[N];P?(E.copy(_.normals[0]).multiplyScalar(D.x),b.copy(_.binormals[0]).multiplyScalar(D.y),S.copy(w[0]).add(E).add(b),J(S.x,S.y,S.z)):J(D.x,D.y,0)}for(let N=1;N<=u;N++)for(let D=0;D<R;D++){const H=d?ee(T[D],L[D],C):T[D];P?(E.copy(_.normals[N]).multiplyScalar(H.x),b.copy(_.binormals[N]).multiplyScalar(H.y),S.copy(w[N]).add(E).add(b),J(S.x,S.y,S.z)):J(H.x,H.y,h/u*N)}for(let N=m-1;N>=0;N--){const D=N/m,H=p*Math.cos(D*Math.PI/2),K=f*Math.sin(D*Math.PI/2)+g;for(let j=0,ge=V.length;j<ge;j++){const de=ee(V[j],ne[j],K);J(de.x,de.y,h+H)}for(let j=0,ge=z.length;j<ge;j++){const de=z[j];ve=me[j];for(let ae=0,Ee=de.length;ae<Ee;ae++){const Ne=ee(de[ae],ve[ae],K);P?J(Ne.x,Ne.y+w[u-1].y,w[u-1].x+H):J(Ne.x,Ne.y,h+H)}}}function re(N,D){let H=N.length;for(;--H>=0;){const K=H;let j=H-1;j<0&&(j=N.length-1);for(let ge=0,de=u+2*m;ge<de;ge++){const ae=R*ge,Ee=R*(ge+1);A(D+K+ae,D+j+ae,D+j+Ee,D+K+Ee)}}}function J(N,D,H){l.push(N),l.push(D),l.push(H)}function Z(N,D,H){W(N),W(D),W(H);const K=r.length/3,j=y.generateTopUV(i,r,K-3,K-2,K-1);Q(j[0]),Q(j[1]),Q(j[2])}function A(N,D,H,K){W(N),W(D),W(K),W(D),W(H),W(K);const j=r.length/3,ge=y.generateSideWallUV(i,r,j-6,j-3,j-2,j-1);Q(ge[0]),Q(ge[1]),Q(ge[3]),Q(ge[1]),Q(ge[2]),Q(ge[3])}function W(N){r.push(l[3*N+0]),r.push(l[3*N+1]),r.push(l[3*N+2])}function Q(N){s.push(N.x),s.push(N.y)}(function(){const N=r.length/3;if(d){let D=0,H=R*D;for(let K=0;K<te;K++){const j=F[K];Z(j[2]+H,j[1]+H,j[0]+H)}D=u+2*m,H=R*D;for(let K=0;K<te;K++){const j=F[K];Z(j[0]+H,j[1]+H,j[2]+H)}}else{for(let D=0;D<te;D++){const H=F[D];Z(H[2],H[1],H[0])}for(let D=0;D<te;D++){const H=F[D];Z(H[0]+R*u,H[1]+R*u,H[2]+R*u)}}i.addGroup(N,r.length/3-N,0)})(),function(){const N=r.length/3;let D=0;re(V,D),D+=V.length;for(let H=0,K=z.length;H<K;H++){const j=z[H];re(j,D),D+=j.length}i.addGroup(N,r.length/3-N,1)}()}this.setAttribute("position",new be(r,3)),this.setAttribute("uv",new be(s,2)),this.computeVertexNormals()}toJSON(){const e=Be.prototype.toJSON.call(this);return function(n,i,r){if(r.shapes=[],Array.isArray(n))for(let s=0,o=n.length;s<o;s++){const a=n[s];r.shapes.push(a.uuid)}else r.shapes.push(n.uuid);return i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r}(this.parameters.shapes,this.parameters.options,e)}}const _h={generateTopUV:function(t,e,n,i,r){const s=e[3*n],o=e[3*n+1],a=e[3*i],l=e[3*i+1],c=e[3*r],u=e[3*r+1];return[new O(s,o),new O(a,l),new O(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[3*n],a=e[3*n+1],l=e[3*n+2],c=e[3*i],u=e[3*i+1],h=e[3*i+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],g=e[3*s],m=e[3*s+1],v=e[3*s+2];return Math.abs(a-u)<.01?[new O(o,1-l),new O(c,1-h),new O(d,1-f),new O(g,1-v)]:[new O(a,1-l),new O(u,1-h),new O(p,1-f),new O(m,1-v)]}};class bh extends zt{constructor(e,n){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},this.fromBufferGeometry(new Oa(e,n)),this.mergeVertices()}toJSON(){const e=super.toJSON();return function(n,i,r){if(r.shapes=[],Array.isArray(n))for(let s=0,o=n.length;s<o;s++){const a=n[s];r.shapes.push(a.uuid)}else r.shapes.push(n.uuid);return i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r}(this.parameters.shapes,this.parameters.options,e)}}function Hr(t,e,n){Be.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,l=new x,c=new x,u=new x,h=new x,d=new x;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const p=e+1;for(let f=0;f<=n;f++){const g=f/n;for(let m=0;m<=e;m++){const v=m/e;t(v,g,c),r.push(c.x,c.y,c.z),v-a>=0?(t(v-a,g,u),h.subVectors(c,u)):(t(v+a,g,u),h.subVectors(u,c)),g-a>=0?(t(v,g-a,u),d.subVectors(c,u)):(t(v,g+a,u),d.subVectors(u,c)),l.crossVectors(h,d).normalize(),s.push(l.x,l.y,l.z),o.push(v,g)}}for(let f=0;f<n;f++)for(let g=0;g<e;g++){const m=f*p+g,v=f*p+g+1,y=(f+1)*p+g+1,w=(f+1)*p+g;i.push(m,v,w),i.push(v,y,w)}this.setIndex(i),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(s,3)),this.setAttribute("uv",new be(o,2))}function Gs(t,e,n){zt.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new Hr(t,e,n)),this.mergeVertices()}Hr.prototype=Object.create(Be.prototype),Hr.prototype.constructor=Hr,Gs.prototype=Object.create(zt.prototype),Gs.prototype.constructor=Gs;class wh extends Be{constructor(e,n,i,r,s,o){super(),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},e=e||.5,n=n||1,s=s!==void 0?s:0,o=o!==void 0?o:2*Math.PI,i=i!==void 0?Math.max(3,i):8;const a=[],l=[],c=[],u=[];let h=e;const d=(n-e)/(r=r!==void 0?Math.max(1,r):1),p=new x,f=new O;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const v=s+m/i*o;p.x=h*Math.cos(v),p.y=h*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/n+1)/2,f.y=(p.y/n+1)/2,u.push(f.x,f.y)}h+=d}for(let g=0;g<r;g++){const m=g*(i+1);for(let v=0;v<i;v++){const y=v+m,w=y,_=y+i+1,b=y+i+2,E=y+1;a.push(w,_,E),a.push(_,b,E)}}this.setIndex(a),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(u,2))}}class Mh extends Be{constructor(e,n){super(),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:n},n=n||12;const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;function c(u){const h=r.length/3,d=u.extractPoints(n);let p=d.shape;const f=d.holes;Sn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,v=f.length;m<v;m++){const y=f[m];Sn.isClockWise(y)===!0&&(f[m]=y.reverse())}const g=Sn.triangulateShape(p,f);for(let m=0,v=f.length;m<v;m++){const y=f[m];p=p.concat(y)}for(let m=0,v=p.length;m<v;m++){const y=p[m];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let m=0,v=g.length;m<v;m++){const y=g[m],w=y[0]+h,_=y[1]+h,b=y[2]+h;i.push(w,_,b),l+=3}}this.setIndex(i),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(s,3)),this.setAttribute("uv",new be(o,2))}toJSON(){const e=Be.prototype.toJSON.call(this);return function(n,i){if(i.shapes=[],Array.isArray(n))for(let r=0,s=n.length;r<s;r++){const o=n[r];i.shapes.push(o.uuid)}else i.shapes.push(n.uuid);return i}(this.parameters.shapes,e)}}class Sh extends zt{constructor(e,n){super(),this.type="ShapeGeometry",typeof n=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),n=n.curveSegments),this.parameters={shapes:e,curveSegments:n},this.fromBufferGeometry(new Mh(e,n)),this.mergeVertices()}toJSON(){const e=zt.prototype.toJSON.call(this);return function(n,i){if(i.shapes=[],Array.isArray(n))for(let r=0,s=n.length;r<s;r++){const o=n[r];i.shapes.push(o.uuid)}else i.shapes.push(n.uuid);return i}(this.parameters.shapes,e)}}class za extends Be{constructor(e,n,i,r,s,o,a){super(),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=e||1,n=Math.max(3,Math.floor(n)||8),i=Math.max(2,Math.floor(i)||6),r=r!==void 0?r:0,s=s!==void 0?s:2*Math.PI,o=o!==void 0?o:0,a=a!==void 0?a:Math.PI;const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new x,d=new x,p=[],f=[],g=[],m=[];for(let v=0;v<=i;v++){const y=[],w=v/i;let _=0;v==0&&o==0?_=.5/n:v==i&&l==Math.PI&&(_=-.5/n);for(let b=0;b<=n;b++){const E=b/n;h.x=-e*Math.cos(r+E*s)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+w*a),f.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(E+_,1-w),y.push(c++)}u.push(y)}for(let v=0;v<i;v++)for(let y=0;y<n;y++){const w=u[v][y+1],_=u[v][y],b=u[v+1][y],E=u[v+1][y+1];(v!==0||o>0)&&p.push(w,_,E),(v!==i-1||l<Math.PI)&&p.push(_,b,E)}this.setIndex(p),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(m,2))}}class Fa extends Be{constructor(e,n,i,r,s){super(),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s},n=n||64,i=i||1,r=r||8,s=s||!1;const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new x,l=new x,c=new O;let u=new x;const h=[],d=[],p=[],f=[];function g(m){u=e.getPointAt(m/n,u);const v=o.normals[m],y=o.binormals[m];for(let w=0;w<=r;w++){const _=w/r*Math.PI*2,b=Math.sin(_),E=-Math.cos(_);l.x=E*v.x+b*y.x,l.y=E*v.y+b*y.y,l.z=E*v.z+b*y.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}(function(){for(let m=0;m<n;m++)g(m);g(s===!1?n:0),function(){for(let m=0;m<=n;m++)for(let v=0;v<=r;v++)c.x=m/n,c.y=v/r,p.push(c.x,c.y)}(),function(){for(let m=1;m<=n;m++)for(let v=1;v<=r;v++){const y=(r+1)*(m-1)+(v-1),w=(r+1)*m+(v-1),_=(r+1)*m+v,b=(r+1)*(m-1)+v;f.push(y,w,b),f.push(w,_,b)}}()})(),this.setIndex(f),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(p,2))}toJSON(){const e=Be.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}}function gi(t){Se.call(this),this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.setValues(t)}function $i(t){pt.call(this,t),this.type="RawShaderMaterial"}function Ft(t){Se.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new O(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}function Hn(t){Ft.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new O(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=le.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}function En(t){Se.call(this),this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new O(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function vi(t){Se.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new O(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function yi(t){Se.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new O(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function xi(t){Se.call(this),this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function _i(t){Se.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new O(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function bi(t){ft.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}gi.prototype=Object.create(Se.prototype),gi.prototype.constructor=gi,gi.prototype.isShadowMaterial=!0,gi.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.color.copy(t.color),this},$i.prototype=Object.create(pt.prototype),$i.prototype.constructor=$i,$i.prototype.isRawShaderMaterial=!0,Ft.prototype=Object.create(Se.prototype),Ft.prototype.constructor=Ft,Ft.prototype.isMeshStandardMaterial=!0,Ft.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this},Hn.prototype=Object.create(Ft.prototype),Hn.prototype.constructor=Hn,Hn.prototype.isMeshPhysicalMaterial=!0,Hn.prototype.copy=function(t){return Ft.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new ye).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this},En.prototype=Object.create(Se.prototype),En.prototype.constructor=En,En.prototype.isMeshPhongMaterial=!0,En.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},vi.prototype=Object.create(Se.prototype),vi.prototype.constructor=vi,vi.prototype.isMeshToonMaterial=!0,vi.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},yi.prototype=Object.create(Se.prototype),yi.prototype.constructor=yi,yi.prototype.isMeshNormalMaterial=!0,yi.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},xi.prototype=Object.create(Se.prototype),xi.prototype.constructor=xi,xi.prototype.isMeshLambertMaterial=!0,xi.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},_i.prototype=Object.create(Se.prototype),_i.prototype.constructor=_i,_i.prototype.isMeshMatcapMaterial=!0,_i.prototype.copy=function(t){return Se.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},bi.prototype=Object.create(ft.prototype),bi.prototype.constructor=bi,bi.prototype.isLineDashedMaterial=!0,bi.prototype.copy=function(t){return ft.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Eh=Object.freeze({__proto__:null,ShadowMaterial:gi,SpriteMaterial:Un,RawShaderMaterial:$i,ShaderMaterial:pt,PointsMaterial:Ot,MeshPhysicalMaterial:Hn,MeshStandardMaterial:Ft,MeshPhongMaterial:En,MeshToonMaterial:vi,MeshNormalMaterial:yi,MeshLambertMaterial:xi,MeshDepthMaterial:On,MeshDistanceMaterial:zn,MeshBasicMaterial:dt,MeshMatcapMaterial:_i,LineDashedMaterial:bi,LineBasicMaterial:ft,Material:Se});const $e={arraySlice:function(t,e,n){return $e.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){const e=t.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(function(i,r){return t[i]-t[r]}),n},sortedArray:function(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let l=0;l!==e;++l)r[o++]=t[a+l]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r){r=r||30;const s=t.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let p=0;p<c.times.length;++p){const f=c.times[p]*r;if(!(f<n||f>=i)){h.push(c.times[p]);for(let g=0;g<u;++g)d.push(c.values[p*u+g])}}h.length!==0&&(c.times=$e.convertArray(h,c.times.constructor),c.values=$e.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e,n,i){e===void 0&&(e=0),n===void 0&&(n=t),(i===void 0||i<=0)&&(i=30);const r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=n.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=t.tracks.find(function(v){return v.name===a.name&&v.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const f=a.times.length-1;let g;if(s<=a.times[0]){const v=u,y=h-u;g=$e.arraySlice(a.values,v,y)}else if(s>=a.times[f]){const v=f*h+u,y=v+h-u;g=$e.arraySlice(a.values,v,y)}else{const v=a.createInterpolant(),y=u,w=h-u;v.evaluate(s),g=$e.arraySlice(v.resultBuffer,y,w)}l==="quaternion"&&new ke().fromArray(g).normalize().conjugate().toArray(g);const m=c.times.length;for(let v=0;v<m;++v){const y=v*p+d;if(l==="quaternion")ke.multiplyQuaternionsFlat(c.values,y,g,0,c.values,y);else{const w=p-2*d;for(let _=0;_<w;++_)c.values[y+_]-=g[_]}}}return t.blendMode=2501,t}};function Lt(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}function ks(t,e,n,i){Lt.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}function Gr(t,e,n,i){Lt.call(this,t,e,n,i)}function Vs(t,e,n,i){Lt.call(this,t,e,n,i)}function ht(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$e.convertArray(e,this.TimeBufferType),this.values=$e.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}function js(t,e,n){ht.call(this,t,e,n)}function Ws(t,e,n,i){ht.call(this,t,e,n,i)}function Qi(t,e,n,i){ht.call(this,t,e,n,i)}function qs(t,e,n,i){Lt.call(this,t,e,n,i)}function kr(t,e,n,i){ht.call(this,t,e,n,i)}function Xs(t,e,n,i){ht.call(this,t,e,n,i)}function Ki(t,e,n,i){ht.call(this,t,e,n,i)}function jt(t,e,n,i){this.name=t,this.tracks=n,this.duration=e!==void 0?e:-1,this.blendMode=i!==void 0?i:2500,this.uuid=le.generateUUID(),this.duration<0&&this.resetDuration()}function Th(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return Ws;case"quaternion":return kr;case"bool":case"boolean":return js;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}(t.type);if(t.times===void 0){const n=[],i=[];$e.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Lt.prototype,{evaluate:function(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];e:{t:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break n}if(t>=r)break e;{const o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0}}for(;n<s;){const o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),Object.assign(Lt.prototype,{beforeStart_:Lt.prototype.copySampleValue_,afterEnd_:Lt.prototype.copySampleValue_}),ks.prototype=Object.assign(Object.create(Lt.prototype),{constructor:ks,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,o=2*e-n;break;case 2402:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case 2401:s=t,a=2*n-e;break;case 2402:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}const l=.5*(n-e),c=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(a-n),this._offsetPrev=r*c,this._offsetNext=s*c},interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,l=a-o,c=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),f=p*p,g=f*p,m=-h*g+2*h*f-h*p,v=(1+h)*g+(-1.5-2*h)*f+(-.5+h)*p+1,y=(-1-d)*g+(1.5+d)*f+.5*p,w=d*g-d*f;for(let _=0;_!==o;++_)r[_]=m*s[c+_]+v*s[l+_]+y*s[a+_]+w*s[u+_];return r}}),Gr.prototype=Object.assign(Object.create(Lt.prototype),{constructor:Gr,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,l=a-o,c=(n-e)/(i-e),u=1-c;for(let h=0;h!==o;++h)r[h]=s[l+h]*u+s[a+h]*c;return r}}),Vs.prototype=Object.assign(Object.create(Lt.prototype),{constructor:Vs,interpolate_:function(t){return this.copySampleValue_(t-1)}}),Object.assign(ht,{toJSON:function(t){const e=t.constructor;let n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:$e.convertArray(t.times,Array),values:$e.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}}),Object.assign(ht.prototype,{constructor:ht,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(t){return new Vs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Gr(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new ks(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(t===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=$e.arraySlice(n,r,s),this.values=$e.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),t=!1;break}s=a}if(i!==void 0&&$e.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t},optimize:function(){const t=$e.arraySlice(this.times),e=$e.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===2302,r=t.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const l=t[o];if(l!==t[o+1]&&(o!==1||l!==l[0]))if(i)a=!0;else{const c=o*n,u=c-n,h=c+n;for(let d=0;d!==n;++d){const p=e[c+d];if(p!==e[u+d]||p!==e[h+d]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];const c=o*n,u=s*n;for(let h=0;h!==n;++h)e[u+h]=e[c+h]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,l=0;l!==n;++l)e[a+l]=e[o+l];++s}return s!==t.length?(this.times=$e.arraySlice(t,0,s),this.values=$e.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){const t=$e.arraySlice(this.times,0),e=$e.arraySlice(this.values,0),n=new this.constructor(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}),js.prototype=Object.assign(Object.create(ht.prototype),{constructor:js,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),Ws.prototype=Object.assign(Object.create(ht.prototype),{constructor:Ws,ValueTypeName:"color"}),Qi.prototype=Object.assign(Object.create(ht.prototype),{constructor:Qi,ValueTypeName:"number"}),qs.prototype=Object.assign(Object.create(Lt.prototype),{constructor:qs,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e);let l=t*o;for(let c=l+o;l!==c;l+=4)ke.slerpFlat(r,0,s,l-o,s,l,a);return r}}),kr.prototype=Object.assign(Object.create(ht.prototype),{constructor:kr,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(t){return new qs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0}),Xs.prototype=Object.assign(Object.create(ht.prototype),{constructor:Xs,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),Ki.prototype=Object.assign(Object.create(ht.prototype),{constructor:Ki,ValueTypeName:"vector"}),Object.assign(jt,{parse:function(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,s=n.length;r!==s;++r)e.push(Th(n[r]).scale(i));return new jt(t.name,t.duration,e,t.blendMode)},toJSON:function(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(ht.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){const r=e.length,s=[];for(let o=0;o<r;o++){let a=[],l=[];a.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const c=$e.getKeyframeOrder(a);a=$e.sortedArray(a,1,c),l=$e.sortedArray(l,1,c),i||a[0]!==0||(a.push(r),l.push(l[0])),s.push(new Qi(".morphTargetInfluences["+e[o].name+"]",a,l).scale(1/n))}return new jt(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){const l=t[o],c=l.name.match(r);if(c&&c.length>1){const u=c[1];let h=i[u];h||(i[u]=h=[]),h.push(l)}}const s=[];for(const o in i)s.push(jt.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,u,h,d,p){if(h.length!==0){const f=[],g=[];$e.flattenJSON(h,f,g,d),f.length!==0&&p.push(new c(u,f,g))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode;let a=t.length||-1;const l=t.hierarchy||[];for(let c=0;c<l.length;c++){const u=l[c].keys;if(u&&u.length!==0)if(u[0].morphTargets){const h={};let d;for(d=0;d<u.length;d++)if(u[d].morphTargets)for(let p=0;p<u[d].morphTargets.length;p++)h[u[d].morphTargets[p]]=-1;for(const p in h){const f=[],g=[];for(let m=0;m!==u[d].morphTargets.length;++m){const v=u[d];f.push(v.time),g.push(v.morphTarget===p?1:0)}i.push(new Qi(".morphTargetInfluence["+p+"]",f,g))}a=h.length*(s||1)}else{const h=".bones["+e[c].name+"]";n(Ki,h+".position",u,"pos",i),n(kr,h+".quaternion",u,"rot",i),n(Ki,h+".scale",u,"scl",i)}}return i.length===0?null:new jt(r,a,i,o)}}),Object.assign(jt.prototype,{resetDuration:function(){let t=0;for(let e=0,n=this.tracks.length;e!==n;++e){const i=this.tracks[e];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new jt(this.name,this.duration,t,this.blendMode)}});const wi={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}},Lh=new function(t,e,n){const i=this;let r=!1,s=0,o=0,a;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,r===!1&&i.onStart!==void 0&&i.onStart(c,s,o),r=!0},this.itemEnd=function(c){s++,i.onProgress!==void 0&&i.onProgress(c,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,h=l.length;u<h;u+=2){const d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(c))return p}return null}};function qe(t){this.manager=t!==void 0?t:Lh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(qe.prototype,{load:function(){},loadAsync:function(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});const Bt={};function Wt(t){qe.call(this,t)}function Ba(t){qe.call(this,t)}function Ua(t){qe.call(this,t)}function Vr(t){qe.call(this,t)}function Ys(t){qe.call(this,t)}function Ha(t){qe.call(this,t)}function jr(t){qe.call(this,t)}function xe(){this.type="Curve",this.arcLengthDivisions=200}function At(t,e,n,i,r,s,o,a){xe.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}function er(t,e,n,i,r,s){At.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}function Js(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s;return t+e*s+n*o+i*(o*s)}}}Wt.prototype=Object.assign(Object.create(qe.prototype),{constructor:Wt,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=wi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(Bt[t]!==void 0)return void Bt[t].push({onLoad:e,onProgress:n,onError:i});const o=t.match(/^data:(.*?)(;base64)?,(.*)$/);let a;if(o){const l=o[1],c=!!o[2];let u=o[3];u=decodeURIComponent(u),c&&(u=atob(u));try{let h;const d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":const p=new Uint8Array(u.length);for(let g=0;g<u.length;g++)p[g]=u.charCodeAt(g);h=d==="blob"?new Blob([p.buffer],{type:l}):p.buffer;break;case"document":h=new DOMParser().parseFromString(u,l);break;case"json":h=JSON.parse(u);break;default:h=u}setTimeout(function(){e&&e(h),r.manager.itemEnd(t)},0)}catch(h){setTimeout(function(){i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Bt[t]=[],Bt[t].push({onLoad:e,onProgress:n,onError:i}),a=new XMLHttpRequest,a.open("GET",t,!0),a.addEventListener("load",function(l){const c=this.response,u=Bt[t];if(delete Bt[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),wi.add(t,c);for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}r.manager.itemEnd(t)}else{for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),a.addEventListener("progress",function(l){const c=Bt[t];for(let u=0,h=c.length;u<h;u++){const d=c[u];d.onProgress&&d.onProgress(l)}},!1),a.addEventListener("error",function(l){const c=Bt[t];delete Bt[t];for(let u=0,h=c.length;u<h;u++){const d=c[u];d.onError&&d.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),a.addEventListener("abort",function(l){const c=Bt[t];delete Bt[t];for(let u=0,h=c.length;u<h;u++){const d=c[u];d.onError&&d.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(a.responseType=this.responseType),this.withCredentials!==void 0&&(a.withCredentials=this.withCredentials),a.overrideMimeType&&a.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)a.setRequestHeader(l,this.requestHeader[l]);a.send(null)}return r.manager.itemStart(t),a},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}}),Ba.prototype=Object.assign(Object.create(qe.prototype),{constructor:Ba,load:function(t,e,n,i){const r=this,s=new Wt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=[];for(let n=0;n<t.length;n++){const i=jt.parse(t[n]);e.push(i)}return e}}),Ua.prototype=Object.assign(Object.create(qe.prototype),{constructor:Ua,load:function(t,e,n,i){const r=this,s=[],o=new Xi;o.image=s;const a=new Wt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let l=0;function c(u){a.load(t[u],function(h){const d=r.parse(h,!0);s[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(o.minFilter=1006),o.format=d.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let u=0,h=t.length;u<h;++u)c(u);else a.load(t,function(u){const h=r.parse(u,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let p=0;p<d;p++){s[p]={mipmaps:[]};for(let f=0;f<h.mipmapCount;f++)s[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+f]),s[p].format=h.format,s[p].width=h.width,s[p].height=h.height}}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=1006),o.format=h.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}}),Vr.prototype=Object.assign(Object.create(qe.prototype),{constructor:Vr,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=wi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1),wi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(c){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1),i&&i(c),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}),Ys.prototype=Object.assign(Object.create(qe.prototype),{constructor:Ys,load:function(t,e,n,i){const r=new bn,s=new Vr(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(l){s.load(t[l],function(c){r.images[l]=c,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)a(l);return r}}),Ha.prototype=Object.assign(Object.create(qe.prototype),{constructor:Ha,load:function(t,e,n,i){const r=this,s=new oi,o=new Wt(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){const l=r.parse(a);l&&(l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:1001,s.wrapT=l.wrapT!==void 0?l.wrapT:1001,s.magFilter=l.magFilter!==void 0?l.magFilter:1006,s.minFilter=l.minFilter!==void 0?l.minFilter:1006,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=1008),l.mipmapCount===1&&(s.minFilter=1006),s.needsUpdate=!0,e&&e(s,l))},n,i),s}}),jr.prototype=Object.assign(Object.create(qe.prototype),{constructor:jr,load:function(t,e,n,i){const r=new se,s=new Vr(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;const a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?1022:1023,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}),Object.assign(xe.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t){t===void 0&&(t=5);const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t){t===void 0&&(t=5);const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){const t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;s=e||t*n[r-1];let o,a=0,l=r-1;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),o=n[i]-s,o<0)a=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===s)return i/(r-1);const c=n[i];return(i+(s-c)/(n[i+1]-c))/(r-1)},getTangent:function(t,e){let n=t-1e-4,i=t+1e-4;n<0&&(n=0),i>1&&(i=1);const r=this.getPoint(n),s=this.getPoint(i),o=e||(r.isVector2?new O:new x);return o.copy(s).sub(r).normalize(),o},getTangentAt:function(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){const n=new x,i=[],r=[],s=[],o=new x,a=new De;for(let d=0;d<=t;d++){const p=d/t;i[d]=this.getTangentAt(p,new x),i[d].normalize()}r[0]=new x,s[0]=new x;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);c<=l&&(l=c,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(le.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,p))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(le.clamp(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(a.makeRotationAxis(i[p],d*p)),s[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}),At.prototype=Object.create(xe.prototype),At.prototype.constructor=At,At.prototype.isEllipseCurve=!0,At.prototype.getPoint=function(t,e){const n=e||new O,i=2*Math.PI;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=s?0:i),this.aClockwise!==!0||s||(r===i?r=-i:r-=i);const o=this.aStartAngle+t*r;let a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=a-this.aX,d=l-this.aY;a=h*c-d*u+this.aX,l=h*u+d*c+this.aY}return n.set(a,l)},At.prototype.copy=function(t){return xe.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},At.prototype.toJSON=function(){const t=xe.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t},At.prototype.fromJSON=function(t){return xe.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},er.prototype=Object.create(At.prototype),er.prototype.constructor=er,er.prototype.isArcCurve=!0;const Wr=new x,Zs=new Js,$s=new Js,Qs=new Js;function Ut(t,e,n,i){xe.call(this),this.type="CatmullRomCurve3",this.points=t||[],this.closed=e||!1,this.curveType=n||"centripetal",this.tension=i!==void 0?i:.5}function Ga(t,e,n,i,r){const s=.5*(i-e),o=.5*(r-n),a=t*t;return(2*n-2*i+s+o)*(t*a)+(-3*n+3*i-2*s-o)*a+s*t+n}function tr(t,e,n,i){return function(r,s){const o=1-r;return o*o*s}(t,e)+function(r,s){return 2*(1-r)*r*s}(t,n)+function(r,s){return r*r*s}(t,i)}function nr(t,e,n,i,r){return function(s,o){const a=1-s;return a*a*a*o}(t,e)+function(s,o){const a=1-s;return 3*a*a*s*o}(t,n)+function(s,o){return 3*(1-s)*s*s*o}(t,i)+function(s,o){return s*s*s*o}(t,r)}function qt(t,e,n,i){xe.call(this),this.type="CubicBezierCurve",this.v0=t||new O,this.v1=e||new O,this.v2=n||new O,this.v3=i||new O}function Ht(t,e,n,i){xe.call(this),this.type="CubicBezierCurve3",this.v0=t||new x,this.v1=e||new x,this.v2=n||new x,this.v3=i||new x}function wt(t,e){xe.call(this),this.type="LineCurve",this.v1=t||new O,this.v2=e||new O}function Xt(t,e){xe.call(this),this.type="LineCurve3",this.v1=t||new x,this.v2=e||new x}function Yt(t,e,n){xe.call(this),this.type="QuadraticBezierCurve",this.v0=t||new O,this.v1=e||new O,this.v2=n||new O}function on(t,e,n){xe.call(this),this.type="QuadraticBezierCurve3",this.v0=t||new x,this.v1=e||new x,this.v2=n||new x}function Jt(t){xe.call(this),this.type="SplineCurve",this.points=t||[]}Ut.prototype=Object.create(xe.prototype),Ut.prototype.constructor=Ut,Ut.prototype.isCatmullRomCurve3=!0,Ut.prototype.getPoint=function(t,e){const n=e||new x,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let o,a,l=Math.floor(s),c=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1),this.closed||l>0?o=i[(l-1)%r]:(Wr.subVectors(i[0],i[1]).add(i[0]),o=Wr);const u=i[l%r],h=i[(l+1)%r];if(this.closed||l+2<r?a=i[(l+2)%r]:(Wr.subVectors(i[r-1],i[r-2]).add(i[r-1]),a=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(o.distanceToSquared(u),d),f=Math.pow(u.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(a),d);f<1e-4&&(f=1),p<1e-4&&(p=f),g<1e-4&&(g=f),Zs.initNonuniformCatmullRom(o.x,u.x,h.x,a.x,p,f,g),$s.initNonuniformCatmullRom(o.y,u.y,h.y,a.y,p,f,g),Qs.initNonuniformCatmullRom(o.z,u.z,h.z,a.z,p,f,g)}else this.curveType==="catmullrom"&&(Zs.initCatmullRom(o.x,u.x,h.x,a.x,this.tension),$s.initCatmullRom(o.y,u.y,h.y,a.y,this.tension),Qs.initCatmullRom(o.z,u.z,h.z,a.z,this.tension));return n.set(Zs.calc(c),$s.calc(c),Qs.calc(c)),n},Ut.prototype.copy=function(t){xe.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},Ut.prototype.toJSON=function(){const t=xe.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t},Ut.prototype.fromJSON=function(t){xe.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new x().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},qt.prototype=Object.create(xe.prototype),qt.prototype.constructor=qt,qt.prototype.isCubicBezierCurve=!0,qt.prototype.getPoint=function(t,e){const n=e||new O,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(nr(t,i.x,r.x,s.x,o.x),nr(t,i.y,r.y,s.y,o.y)),n},qt.prototype.copy=function(t){return xe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},qt.prototype.toJSON=function(){const t=xe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},qt.prototype.fromJSON=function(t){return xe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},Ht.prototype=Object.create(xe.prototype),Ht.prototype.constructor=Ht,Ht.prototype.isCubicBezierCurve3=!0,Ht.prototype.getPoint=function(t,e){const n=e||new x,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(nr(t,i.x,r.x,s.x,o.x),nr(t,i.y,r.y,s.y,o.y),nr(t,i.z,r.z,s.z,o.z)),n},Ht.prototype.copy=function(t){return xe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},Ht.prototype.toJSON=function(){const t=xe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},Ht.prototype.fromJSON=function(t){return xe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},wt.prototype=Object.create(xe.prototype),wt.prototype.constructor=wt,wt.prototype.isLineCurve=!0,wt.prototype.getPoint=function(t,e){const n=e||new O;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},wt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},wt.prototype.getTangent=function(t,e){const n=e||new O;return n.copy(this.v2).sub(this.v1).normalize(),n},wt.prototype.copy=function(t){return xe.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},wt.prototype.toJSON=function(){const t=xe.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},wt.prototype.fromJSON=function(t){return xe.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},Xt.prototype=Object.create(xe.prototype),Xt.prototype.constructor=Xt,Xt.prototype.isLineCurve3=!0,Xt.prototype.getPoint=function(t,e){const n=e||new x;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},Xt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},Xt.prototype.copy=function(t){return xe.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},Xt.prototype.toJSON=function(){const t=xe.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},Xt.prototype.fromJSON=function(t){return xe.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},Yt.prototype=Object.create(xe.prototype),Yt.prototype.constructor=Yt,Yt.prototype.isQuadraticBezierCurve=!0,Yt.prototype.getPoint=function(t,e){const n=e||new O,i=this.v0,r=this.v1,s=this.v2;return n.set(tr(t,i.x,r.x,s.x),tr(t,i.y,r.y,s.y)),n},Yt.prototype.copy=function(t){return xe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},Yt.prototype.toJSON=function(){const t=xe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},Yt.prototype.fromJSON=function(t){return xe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},on.prototype=Object.create(xe.prototype),on.prototype.constructor=on,on.prototype.isQuadraticBezierCurve3=!0,on.prototype.getPoint=function(t,e){const n=e||new x,i=this.v0,r=this.v1,s=this.v2;return n.set(tr(t,i.x,r.x,s.x),tr(t,i.y,r.y,s.y),tr(t,i.z,r.z,s.z)),n},on.prototype.copy=function(t){return xe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},on.prototype.toJSON=function(){const t=xe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},on.prototype.fromJSON=function(t){return xe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},Jt.prototype=Object.create(xe.prototype),Jt.prototype.constructor=Jt,Jt.prototype.isSplineCurve=!0,Jt.prototype.getPoint=function(t,e){const n=e||new O,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],l=i[s],c=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(Ga(o,a.x,l.x,c.x,u.x),Ga(o,a.y,l.y,c.y,u.y)),n},Jt.prototype.copy=function(t){xe.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this},Jt.prototype.toJSON=function(){const t=xe.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t},Jt.prototype.fromJSON=function(t){xe.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new O().fromArray(i))}return this};var Ah=Object.freeze({__proto__:null,ArcCurve:er,CatmullRomCurve3:Ut,CubicBezierCurve:qt,CubicBezierCurve3:Ht,EllipseCurve:At,LineCurve:wt,LineCurve3:Xt,QuadraticBezierCurve:Yt,QuadraticBezierCurve3:on,SplineCurve:Jt});function Tn(){xe.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}function Zt(t){Tn.call(this),this.type="Path",this.currentPoint=new O,t&&this.setFromPoints(t)}function Mi(t){Zt.call(this,t),this.uuid=le.generateUUID(),this.type="Shape",this.holes=[]}function Ye(t,e){_e.call(this),this.type="Light",this.color=new ye(t),this.intensity=e!==void 0?e:1}function ka(t,e,n){Ye.call(this,t,n),this.type="HemisphereLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.groundColor=new ye(e)}function an(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new O(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new O(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}function Ks(){an.call(this,new ot(50,1,.5,500)),this.focus=1}function qr(t,e,n,i,r,s){Ye.call(this,t,e),this.type="SpotLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.target=new _e,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new Ks}function eo(){an.call(this,new ot(90,1,.5,500)),this._frameExtents=new O(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}function Va(t,e,n,i){Ye.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new eo}function to(t,e,n,i,r,s){_n.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t!==void 0?t:-1,this.right=e!==void 0?e:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=s!==void 0?s:2e3,this.updateProjectionMatrix()}function no(){an.call(this,new to(-5,5,5,-5,.5,500))}function io(t,e){Ye.call(this,t,e),this.type="DirectionalLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.target=new _e,this.shadow=new no}function ro(t,e){Ye.call(this,t,e),this.type="AmbientLight"}function ja(t,e,n,i){Ye.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Tn.prototype=Object.assign(Object.create(xe.prototype),{constructor:Tn,add:function(t){this.curves.push(t)},closePath:function(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new wt(e,t))},getPoint:function(t){const e=t*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=e){const r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){t===void 0&&(t=40);const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){t=t||12;const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?2*t:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let l=0;l<a.length;l++){const c=a[l];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){xe.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){const t=xe.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){xe.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ah[i.type]().fromJSON(i))}return this}}),Zt.prototype=Object.assign(Object.create(Tn.prototype),{constructor:Zt,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){const n=new wt(this.currentPoint.clone(),new O(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){const r=new Yt(this.currentPoint.clone(),new O(t,e),new O(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){const o=new qt(this.currentPoint.clone(),new O(t,e),new O(n,i),new O(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){const e=new Jt([this.currentPoint.clone()].concat(t));return this.curves.push(e),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){const l=new At(t,e,n,i,r,s,o,a);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this},copy:function(t){return Tn.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){const t=Tn.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return Tn.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}}),Mi.prototype=Object.assign(Object.create(Zt.prototype),{constructor:Mi,getPointsHoles:function(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){Zt.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){const t=Zt.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){Zt.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Zt().fromJSON(i))}return this}}),Ye.prototype=Object.assign(Object.create(_e.prototype),{constructor:Ye,isLight:!0,copy:function(t){return _e.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){const e=_e.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}),ka.prototype=Object.assign(Object.create(Ye.prototype),{constructor:ka,isHemisphereLight:!0,copy:function(t){return Ye.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}),Object.assign(an.prototype,{_projScreenMatrix:new De,_lightPositionWorld:new x,_lookTarget:new x,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){const e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}),Ks.prototype=Object.assign(Object.create(an.prototype),{constructor:Ks,isSpotLightShadow:!0,updateMatrices:function(t){const e=this.camera,n=2*le.RAD2DEG*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),an.prototype.updateMatrices.call(this,t)}}),qr.prototype=Object.assign(Object.create(Ye.prototype),{constructor:qr,isSpotLight:!0,copy:function(t){return Ye.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),eo.prototype=Object.assign(Object.create(an.prototype),{constructor:eo,isPointLightShadow:!0,updateMatrices:function(t,e){e===void 0&&(e=0);const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}}),Va.prototype=Object.assign(Object.create(Ye.prototype),{constructor:Va,isPointLight:!0,copy:function(t){return Ye.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}),to.prototype=Object.assign(Object.create(_n.prototype),{constructor:to,isOrthographicCamera:!0,copy:function(t,e){return _n.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){const e=_e.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}),no.prototype=Object.assign(Object.create(an.prototype),{constructor:no,isDirectionalLightShadow:!0,updateMatrices:function(t){an.prototype.updateMatrices.call(this,t)}}),io.prototype=Object.assign(Object.create(Ye.prototype),{constructor:io,isDirectionalLight:!0,copy:function(t){return Ye.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),ro.prototype=Object.assign(Object.create(Ye.prototype),{constructor:ro,isAmbientLight:!0}),ja.prototype=Object.assign(Object.create(Ye.prototype),{constructor:ja,isRectAreaLight:!0,copy:function(t){return Ye.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){const e=Ye.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});class Ch{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new x)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],i*r*1.092548),n.addScaledVector(o[5],r*s*1.092548),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],i*s*1.092548),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],1.023328*r),n.addScaledVector(o[2],1.023328*s),n.addScaledVector(o[3],1.023328*i),n.addScaledVector(o[4],.858086*i*r),n.addScaledVector(o[5],.858086*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],.858086*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+3*r);return this}toArray(e=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+3*r);return e}static getBasisAt(e,n){const i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}function $t(t,e){Ye.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new Ch}function Wa(t){qe.call(this,t),this.textures={}}$t.prototype=Object.assign(Object.create(Ye.prototype),{constructor:$t,isLightProbe:!0,copy:function(t){return Ye.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){const e=Ye.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}}),Wa.prototype=Object.assign(Object.create(qe.prototype),{constructor:Wa,load:function(t,e,n,i){const r=this,s=new Wt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=new Eh[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new ye().setHex(t.sheen)),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const s=t.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new ye().setHex(s.value);break;case"v2":i.uniforms[r].value=new O().fromArray(s.value);break;case"v3":i.uniforms[r].value=new x().fromArray(s.value);break;case"v4":i.uniforms[r].value=new pe().fromArray(s.value);break;case"m3":i.uniforms[r].value=new we().fromArray(s.value);break;case"m4":i.uniforms[r].value=new De().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new O().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new O().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});function Xr(){Be.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}function Yr(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Ce.call(this,t,e,n),this.meshPerAttribute=i||1}function qa(t){qe.call(this,t)}Xr.prototype=Object.assign(Object.create(Be.prototype),{constructor:Xr,isInstancedBufferGeometry:!0,copy:function(t){return Be.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t=Be.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}),Yr.prototype=Object.assign(Object.create(Ce.prototype),{constructor:Yr,isInstancedBufferAttribute:!0,copy:function(t){return Ce.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){const t=Ce.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}),qa.prototype=Object.assign(Object.create(qe.prototype),{constructor:qa,load:function(t,e,n,i){const r=this,s=new Wt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e={},n={};function i(u,h){if(e[h]!==void 0)return e[h];const d=u.interleavedBuffers[h],p=function(g,m){if(n[m]!==void 0)return n[m];const v=g.arrayBuffers[m],y=new Uint32Array(v).buffer;return n[m]=y,y}(u,d.buffer),f=new Tt(new Jr[d.type](p),d.stride);return f.uuid=d.uuid,e[h]=f,f}const r=t.isInstancedBufferGeometry?new Xr:new Be,s=t.data.index;if(s!==void 0){const u=new Jr[s.type](s.array);r.setIndex(new Ce(u,1))}const o=t.data.attributes;for(const u in o){const h=o[u];let d;if(h.isInterleavedBufferAttribute)d=new Bn(i(t.data,h.data),h.itemSize,h.offset,h.normalized);else{const p=new Jr[h.type](h.array);d=new(h.isInstancedBufferAttribute?Yr:Ce)(p,h.itemSize,h.normalized)}h.name!==void 0&&(d.name=h.name),r.setAttribute(u,d)}const a=t.data.morphAttributes;if(a)for(const u in a){const h=a[u],d=[];for(let p=0,f=h.length;p<f;p++){const g=h[p];let m;m=g.isInterleavedBufferAttribute?new Bn(i(t.data,g.data),g.itemSize,g.offset,g.normalized):new Ce(new Jr[g.type](g.array),g.itemSize,g.normalized),g.name!==void 0&&(m.name=g.name),d.push(m)}r.morphAttributes[u]=d}t.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const l=t.data.groups||t.data.drawcalls||t.data.offsets;if(l!==void 0)for(let u=0,h=l.length;u!==h;++u){const d=l[u];r.addGroup(d.start,d.count,d.materialIndex)}const c=t.data.boundingSphere;if(c!==void 0){const u=new x;c.center!==void 0&&u.fromArray(c.center),r.boundingSphere=new fn(u,c.radius)}return t.name&&(r.name=t.name),t.userData&&(r.userData=t.userData),r}});const Jr={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Xa(t){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),qe.call(this,t),this.options={premultiplyAlpha:"none"}}function Ya(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null}function Ja(t){this.type="Font",this.data=t}function Ph(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s)return void console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");const o=new Ya;let a,l,c,u,h,d,p,f;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,v=g.length;m<v;)switch(g[m++]){case"m":a=g[m++]*e+n,l=g[m++]*e+i,o.moveTo(a,l);break;case"l":a=g[m++]*e+n,l=g[m++]*e+i,o.lineTo(a,l);break;case"q":c=g[m++]*e+n,u=g[m++]*e+i,h=g[m++]*e+n,d=g[m++]*e+i,o.quadraticCurveTo(h,d,c,u);break;case"b":c=g[m++]*e+n,u=g[m++]*e+i,h=g[m++]*e+n,d=g[m++]*e+i,p=g[m++]*e+n,f=g[m++]*e+i,o.bezierCurveTo(h,d,p,f,c,u)}}return{offsetX:s.ha*e,path:o}}function Za(t){qe.call(this,t)}let so;Xa.prototype=Object.assign(Object.create(qe.prototype),{constructor:Xa,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=wi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){wi.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}}),Object.assign(Ya.prototype,{moveTo:function(t,e){return this.currentPath=new Zt,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(v){const y=[];for(let w=0,_=v.length;w<_;w++){const b=v[w],E=new Mi;E.curves=b.curves,y.push(E)}return y}function i(v,y){const w=y.length;let _=!1;for(let b=w-1,E=0;E<w;b=E++){let S=y[b],P=y[E],I=P.x-S.x,T=P.y-S.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(S=y[E],I=-I,P=y[b],T=-T),v.y<S.y||v.y>P.y)continue;if(v.y===S.y){if(v.x===S.x)return!0}else{const z=T*(v.x-S.x)-I*(v.y-S.y);if(z===0)return!0;if(z<0)continue;_=!_}}else{if(v.y!==S.y)continue;if(P.x<=v.x&&v.x<=S.x||S.x<=v.x&&v.x<=P.x)return!0}}return _}const r=Sn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Mi,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=t?!u:u;const h=[],d=[];let p,f,g=[],m=0;d[m]=void 0,g[m]=[];for(let v=0,y=s.length;v<y;v++)a=s[v],p=a.getPoints(),o=r(p),o=t?!o:o,o?(!u&&d[m]&&m++,d[m]={s:new Mi,p},d[m].s.curves=a.curves,u&&m++,g[m]=[]):g[m].push({h:a,p:p[0]});if(!d[0])return n(s);if(d.length>1){let v=!1;const y=[];for(let w=0,_=d.length;w<_;w++)h[w]=[];for(let w=0,_=d.length;w<_;w++){const b=g[w];for(let E=0;E<b.length;E++){const S=b[E];let P=!0;for(let I=0;I<d.length;I++)i(S.p,d[I].p)&&(w!==I&&y.push({froms:w,tos:I,hole:E}),P?(P=!1,h[I].push(S)):v=!0);P&&h[w].push(S)}}y.length>0&&(v||(g=h))}for(let v=0,y=d.length;v<y;v++){l=d[v].s,c.push(l),f=g[v];for(let w=0,_=f.length;w<_;w++)l.holes.push(f[w].h)}return c}}),Object.assign(Ja.prototype,{isFont:!0,generateShapes:function(t,e){e===void 0&&(e=100);const n=[],i=function(r,s,o){const a=Array.from?Array.from(r):String(r).split(""),l=s/o.resolution,c=(o.boundingBox.yMax-o.boundingBox.yMin+o.underlineThickness)*l,u=[];let h=0,d=0;for(let p=0;p<a.length;p++){const f=a[p];if(f===`
`)h=0,d-=c;else{const g=Ph(f,l,h,d,o);h+=g.offsetX,u.push(g.path)}}return u}(t,e,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}}),Za.prototype=Object.assign(Object.create(qe.prototype),{constructor:Za,load:function(t,e,n,i){const r=this,s=new Wt(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const l=r.parse(a);e&&e(l)},n,i)},parse:function(t){return new Ja(t)}});function oo(t){qe.call(this,t)}function $a(t,e,n){$t.call(this,void 0,n);const i=new ye().set(t),r=new ye().set(e),s=new x(i.r,i.g,i.b),o=new x(r.r,r.g,r.b),a=Math.sqrt(Math.PI),l=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(l)}function Qa(t,e){$t.call(this,void 0,e);const n=new ye().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}oo.prototype=Object.assign(Object.create(qe.prototype),{constructor:oo,load:function(t,e,n,i){const r=this,s=new Wt(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{const a=o.slice(0);(so===void 0&&(so=new(window.AudioContext||window.webkitAudioContext)),so).decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}}),$a.prototype=Object.assign(Object.create($t.prototype),{constructor:$a,isHemisphereLightProbe:!0,copy:function(t){return $t.prototype.copy.call(this,t),this},toJSON:function(t){return $t.prototype.toJSON.call(this,t)}}),Qa.prototype=Object.assign(Object.create($t.prototype),{constructor:Qa,isAmbientLightProbe:!0,copy:function(t){return $t.prototype.copy.call(this,t),this},toJSON:function(t){return $t.prototype.toJSON.call(this,t)}});const Ka=new De,el=new De;Object.assign(function(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new ot,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new ot,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}.prototype,{update:function(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;const n=t.projectionMatrix.clone(),i=e.eyeSep/2,r=i*e.near/e.focus,s=e.near*Math.tan(le.DEG2RAD*e.fov*.5)/e.zoom;let o,a;el.elements[12]=-i,Ka.elements[12]=i,o=-s*e.aspect+r,a=s*e.aspect+r,n.elements[0]=2*e.near/(a-o),n.elements[8]=(a+o)/(a-o),this.cameraL.projectionMatrix.copy(n),o=-s*e.aspect-r,a=s*e.aspect-r,n.elements[0]=2*e.near/(a-o),n.elements[8]=(a+o)/(a-o),this.cameraR.projectionMatrix.copy(n)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(el),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Ka)}});class Rh{constructor(e){this.autoStart=e===void 0||e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=(typeof performance=="undefined"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=(typeof performance=="undefined"?Date:performance).now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function tl(t,e,n){let i,r,s;switch(this.binding=t,this.valueSize=n,e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(tl.prototype,{accumulate:function(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;const o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,l=e+e;a!==l;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const t=3*this.valueSize;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){ke.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){const s=this._workIndex*r;ke.multiplyQuaternionsFlat(t,s,t,e,t,n),ke.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){const o=e+s;t[o]=t[o]+t[n+s]*i}}});const Ih=new RegExp("[\\[\\]\\.:\\/]","g"),Dh="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",Nh=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),Oh=/(WCOD+)?/.source.replace("WCOD",Dh),zh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),Fh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),Bh=new RegExp("^"+Nh+Oh+zh+Fh+"$"),Uh=["material","materials","bones"];function nl(t,e,n){const i=n||mt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}function mt(t,e,n){this.path=e,this.parsedPath=n||mt.parseTrackName(e),this.node=mt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(nl.prototype,{getValue:function(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}),Object.assign(mt,{Composite:nl,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new mt.Composite(t,e,n):new mt(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(Ih,"")},parseTrackName:function(t){const e=Bh.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Uh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}}),Object.assign(mt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,e){t[e]=this.node[this.propertyName]},function(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]},function(t,e){t[e]=this.resolvedProperty[this.propertyIndex]},function(t,e){this.resolvedProperty.toArray(t,e)}],SetterByBindingTypeAndVersioning:[[function(t,e){this.targetObject[this.propertyName]=t[e]},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]},function(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0},function(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){this.resolvedProperty[this.propertyIndex]=t[e]},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){this.resolvedProperty.fromArray(t,e)},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,e){this.bind(),this.getValue(t,e)},setValue:function(t,e){this.bind(),this.setValue(t,e)},bind:function(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=mt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;default:if(t[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n]}if(l!==void 0){if(t[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[l]}}const s=t[i];if(s===void 0){const l=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t)}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),Object.assign(mt.prototype,{_getValue_unbound:mt.prototype.getValue,_setValue_unbound:mt.prototype.setValue}),Object.assign(function(){this.uuid=le.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}.prototype,{isAnimationObjectGroup:!0,add:function(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=t.length,l=this.nCachedObjects_;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],d=h.uuid;let p=e[d];if(p===void 0){p=a++,e[d]=p,t.push(h);for(let f=0,g=s;f!==g;++f)r[f].push(new mt(h,n[f],i[f]))}else if(p<l){o=t[p];const f=--l,g=t[f];e[g.uuid]=p,t[p]=g,e[d]=f,t[f]=h;for(let m=0,v=s;m!==v;++m){const y=r[m],w=y[f];let _=y[p];y[p]=w,_===void 0&&(_=new mt(h,n[m],i[m])),y[f]=_}}else t[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l},remove:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],l=a.uuid,c=e[l];if(c!==void 0&&c>=r){const u=r++,h=t[u];e[h.uuid]=c,t[c]=h,e[l]=u,t[u]=a;for(let d=0,p=i;d!==p;++d){const f=n[d],g=f[u],m=f[c];f[c]=g,f[u]=m}}}this.nCachedObjects_=r},uncache:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o].uuid,c=e[l];if(c!==void 0)if(delete e[l],c<r){const u=--r,h=t[u],d=--s,p=t[d];e[h.uuid]=c,t[c]=h,e[p.uuid]=u,t[u]=p,t.pop();for(let f=0,g=i;f!==g;++f){const m=n[f],v=m[u],y=m[d];m[c]=v,m[u]=y,m.pop()}}else{const u=--s,h=t[u];u>0&&(e[h.uuid]=c),t[c]=h,t.pop();for(let d=0,p=i;d!==p;++d){const f=n[d];f[c]=f[u],f.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,l=a.length,c=this.nCachedObjects_,u=new Array(l);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(u);for(let h=c,d=a.length;h!==d;++h){const p=a[h];u[h]=new mt(p,t,e)}return u},unsubscribe_:function(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o];e[t[o]]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});class Hh{constructor(e,n,i,r){this._mixer=e,this._clip=n,this._localRoot=i||null,this.blendMode=r||n.blendMode;const s=n.tracks,o=s.length,a=new Array(o),l={endingStart:2400,endingEnd:2400};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=n/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled)return void this._updateWeight(e);const s=this._startTime;if(s!==null){const l=(e-s)*i;if(l<0||i===0)return;this._startTime=null,n=i*l}n*=this._updateTimeScale(e);const o=this._updateTime(n),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case 2501:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case 2500:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(n*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n))}return this._effectiveTimeScale=n,n}_updateTime(e){const n=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===2202;if(e===0)return s===-1?r:o&&(1&s)==1?n-r:r;if(i===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=n)r=n;else{if(!(r<0)){this.time=r;break e}r=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){const a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(1&s)==1)return n-r}return r}_setEndings(e,n,i){const r=this._interpolantSettings;i?(r.endingStart=2401,r.endingEnd=2401):(r.endingStart=e?this.zeroSlopeAtStart?2401:2400:2402,r.endingEnd=n?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(e,n,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=n,a[1]=s+e,l[1]=i,this}}function il(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}il.prototype=Object.assign(Object.create(k.prototype),{constructor:il,_bindAction:function(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,l=this._bindingsByRootAndName;let c=l[a];c===void 0&&(c={},l[a]=c);for(let u=0;u!==r;++u){const h=i[u],d=h.name;let p=c[d];if(p!==void 0)s[u]=p;else{if(p=s[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,a,d));continue}const f=e&&e._propertyBindings[u].binding.parsedPath;p=new tl(mt.create(n,d,f),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,a,d),s[u]=p}o[u].resultBuffer=p.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{const o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,l=a[a.length-1],c=t._byClipCacheIndex;l._byClipCacheIndex=c,a[c]=l,a.pop(),t._byClipCacheIndex=null,delete o.actionByRoot[(t._localRoot||this._root).uuid],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}},_lendAction:function(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],l=t._cacheIndex;a._cacheIndex=l,e[l]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Gr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){const i=e||this._root,r=i.uuid;let s=typeof t=="string"?jt.findByName(i,t):t;const o=s!==null?s.uuid:t,a=this._actionsByClip[o];let l=null;if(n===void 0&&(n=s!==null?s.blendMode:2500),a!==void 0){const u=a.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=a.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;const c=new Hh(this,s,e,n);return this._bindAction(c,l),this._addInactiveAction(c,o,r),c},existingAction:function(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?jt.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const t=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this},update:function(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,s);const o=this._bindings,a=this._nActiveBindings;for(let l=0;l!==a;++l)o[l].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const l=s[o];this._deactivateAction(l);const c=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=c,e[c]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}},uncacheRoot:function(t){const e=t.uuid,n=this._actionsByClip;for(const r in n){const s=n[r].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}const i=this._bindingsByRootAndName[e];if(i!==void 0)for(const r in i){const s=i[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}},uncacheAction:function(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});class ao{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new ao(this.value.clone===void 0?this.value:this.value.clone())}}function rl(t,e,n){Tt.call(this,t,e),this.meshPerAttribute=n||1}function sl(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}function Zr(t,e,n,i){this.ray=new Ci(t,e),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function ol(t,e){return t.distance-e.distance}function lo(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)lo(r[s],e,n,!0)}}rl.prototype=Object.assign(Object.create(Tt.prototype),{constructor:rl,isInstancedInterleavedBuffer:!0,copy:function(t){return Tt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){const e=Tt.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){const e=Tt.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}),Object.defineProperty(sl.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(sl.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}}),Object.assign(Zr.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(t,e,n){const i=n||[];return lo(t,this,i,e),i.sort(ol),i},intersectObjects:function(t,e,n){const i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=t.length;r<s;r++)lo(t[r],this,i,e);return i.sort(ol),i}});const al=new O;new x,new x;function $r(t){_e.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}$r.prototype=Object.create(_e.prototype),$r.prototype.constructor=$r,$r.prototype.isImmediateRenderObject=!0;const Ln=new x,Qr=new De,co=new De,ll=[.125,.215,.35,.446,.526,.582],Gh=5+ll.length;(function(){const t=[],e=[],n=[];let i=8;for(let r=0;r<Gh;r++){const s=Math.pow(2,i);e.push(s);let o=1/s;r>4?o=ll[r-8+4-1]:r==0&&(o=0),n.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,f=2,g=1,m=new Float32Array(p*d*h),v=new Float32Array(f*d*h),y=new Float32Array(g*d*h);for(let _=0;_<h;_++){const b=_%3*2/3-1,E=_>2?0:-1,S=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];m.set(S,p*d*_),v.set(u,f*d*_);const P=[_,_,_,_,_,_];y.set(P,g*d*_)}const w=new Be;w.setAttribute("position",new Ce(m,p)),w.setAttribute("uv",new Ce(v,f)),w.setAttribute("faceIndex",new Ce(y,g)),t.push(w),i>4&&i--}return{_lodPlanes:t,_sizeLods:e,_sigmas:n}})();function cl(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),Ut.call(this,t),this.type="catmullrom"}xe.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(xe.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Object.assign(Tn.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=new zt;for(let n=0,i=t.length;n<i;n++){const r=t[n];e.vertices.push(new x(r.x,r.y,r.z||0))}return e}}),Object.assign(Zt.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}}),cl.prototype=Object.create(Ut.prototype),Object.assign(cl.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}}),class extends fi{constructor(t,e,n,i){t=t||10,e=e||10,n=new ye(n!==void 0?n:4473924),i=new ye(i!==void 0?i:8947848);const r=e/2,s=t/e,o=t/2,a=[],l=[];for(let u=0,h=0,d=-o;u<=e;u++,d+=s){a.push(-o,0,d,o,0,d),a.push(d,0,-o,d,0,o);const p=u===r?n:i;p.toArray(l,h),h+=3,p.toArray(l,h),h+=3,p.toArray(l,h),h+=3,p.toArray(l,h),h+=3}const c=new Be;c.setAttribute("position",new be(a,3)),c.setAttribute("color",new be(l,3)),super(c,new ft({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}}.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},class extends fi{constructor(t){const e=function a(l){const c=[];l&&l.isBone&&c.push(l);for(let u=0;u<l.children.length;u++)c.push.apply(c,a(l.children[u]));return c}(t),n=new Be,i=[],r=[],s=new ye(0,0,1),o=new ye(0,1,0);for(let a=0;a<e.length;a++){const l=e[a];l.parent&&l.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new be(i,3)),n.setAttribute("color",new be(r,3)),super(n,new ft({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");co.getInverse(this.root.matrixWorld);for(let r=0,s=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(Qr.multiplyMatrices(co,o.matrixWorld),Ln.setFromMatrixPosition(Qr),i.setXYZ(s,Ln.x,Ln.y,Ln.z),Qr.multiplyMatrices(co,o.parent.matrixWorld),Ln.setFromMatrixPosition(Qr),i.setXYZ(s+1,Ln.x,Ln.y,Ln.z),s+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Object.assign(qe.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),function(e){const n=e.lastIndexOf("/");return n===-1?"./":e.substr(0,n+1)}(t)}}),qe.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Object.assign(class{constructor(t,e){Object.defineProperty(this,"isBox2",{value:!0}),this.min=t!==void 0?t:new O(1/0,1/0),this.max=e!==void 0?e:new O(-1/0,-1/0)}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=al.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return t===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new O),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new O),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),e=new O),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),e=new O),e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return al.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(Te.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(fn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}}),wr.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)},Object.assign(le,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),le.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),le.ceilPowerOfTwo(t)}}),Object.assign(we.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}}),Object.assign(De.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new x().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)}}),nn.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)},ke.prototype.multiplyVector3=function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},Object.assign(Ci.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}}),Object.assign(lt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}}),Object.assign(lt,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),lt.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),lt.getNormal(t,e,n,i)}}),Object.assign(Mi.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new bh(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Sh(this,t)}}),Object.assign(O.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(x.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(pe.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(zt.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(t){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.assign(_e.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(_e.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Object.assign(Ze.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}),Object.defineProperties(Ze.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Object.defineProperties(Ds.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(Os.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}}),Ns.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Object.defineProperty(xe.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}}),ot.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)},Object.defineProperties(Ye.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}}),Object.defineProperties(Ce.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===35048},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048)}}}),Object.assign(Ce.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?35048:35044),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(Be.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new Ce(arguments[1],arguments[2])))},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(Be.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Object.defineProperties(Xr.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}}),Object.defineProperties(Zr.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}}),Object.defineProperties(Tt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===35048},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}}),Object.assign(Tt.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?35048:35044),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(Oa.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}}),Object.assign(ua.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}}),Object.defineProperties(ao.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}}),Object.defineProperties(Se.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ye}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}}),Object.defineProperties(En.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(Hn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}}),Object.defineProperties(pt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}}),Object.assign(Hi.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}}),Object.defineProperties(Hi.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?3001:3e3}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(la.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Me.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}}),Object.defineProperties(class extends _e{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e){if(e===void 0&&(e=0),this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl!==!1)return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl!==!1)return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new oo().load(t,function(n){e.setBuffer(n)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}}),si.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)},si.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)},Le.crossOrigin=void 0,Le.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new jr;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s},Le.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Ys;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s},Le.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Le.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"122"}}));var kh=function(){var t=/^[og]\s*(.+)?/,e=/^mtllib /,n=/^usemtl /,i=/^usemap /,r=new x,s=new x,o=new x,a=new x,l=new x;function c(){var h={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(d,p){if(this.object&&this.object.fromDeclaration===!1)return this.object.name=d,void(this.object.fromDeclaration=p!==!1);var f=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:d||"",fromDeclaration:p!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(m,v){var y=this._finalize(!1);y&&(y.inherited||y.groupCount<=0)&&this.materials.splice(y.index,1);var w={index:this.materials.length,name:m||"",mtllib:Array.isArray(v)&&v.length>0?v[v.length-1]:"",smooth:y!==void 0?y.smooth:this.smooth,groupStart:y!==void 0?y.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(_){var b={index:typeof _=="number"?_:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return b.clone=this.clone.bind(b),b}};return this.materials.push(w),w},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(m){var v=this.currentMaterial();if(v&&v.groupEnd===-1&&(v.groupEnd=this.geometry.vertices.length/3,v.groupCount=v.groupEnd-v.groupStart,v.inherited=!1),m&&this.materials.length>1)for(var y=this.materials.length-1;y>=0;y--)this.materials[y].groupCount<=0&&this.materials.splice(y,1);return m&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),v}},f&&f.name&&typeof f.clone=="function"){var g=f.clone(0);g.inherited=!0,this.object.materials.push(g)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(d,p){var f=parseInt(d,10);return 3*(f>=0?f-1:f+p/3)},parseNormalIndex:function(d,p){var f=parseInt(d,10);return 3*(f>=0?f-1:f+p/3)},parseUVIndex:function(d,p){var f=parseInt(d,10);return 2*(f>=0?f-1:f+p/2)},addVertex:function(d,p,f){var g=this.vertices,m=this.object.geometry.vertices;m.push(g[d+0],g[d+1],g[d+2]),m.push(g[p+0],g[p+1],g[p+2]),m.push(g[f+0],g[f+1],g[f+2])},addVertexPoint:function(d){var p=this.vertices;this.object.geometry.vertices.push(p[d+0],p[d+1],p[d+2])},addVertexLine:function(d){var p=this.vertices;this.object.geometry.vertices.push(p[d+0],p[d+1],p[d+2])},addNormal:function(d,p,f){var g=this.normals,m=this.object.geometry.normals;m.push(g[d+0],g[d+1],g[d+2]),m.push(g[p+0],g[p+1],g[p+2]),m.push(g[f+0],g[f+1],g[f+2])},addFaceNormal:function(d,p,f){var g=this.vertices,m=this.object.geometry.normals;r.fromArray(g,d),s.fromArray(g,p),o.fromArray(g,f),l.subVectors(o,s),a.subVectors(r,s),l.cross(a),l.normalize(),m.push(l.x,l.y,l.z),m.push(l.x,l.y,l.z),m.push(l.x,l.y,l.z)},addColor:function(d,p,f){var g=this.colors,m=this.object.geometry.colors;g[d]!==void 0&&m.push(g[d+0],g[d+1],g[d+2]),g[p]!==void 0&&m.push(g[p+0],g[p+1],g[p+2]),g[f]!==void 0&&m.push(g[f+0],g[f+1],g[f+2])},addUV:function(d,p,f){var g=this.uvs,m=this.object.geometry.uvs;m.push(g[d+0],g[d+1]),m.push(g[p+0],g[p+1]),m.push(g[f+0],g[f+1])},addDefaultUV:function(){var d=this.object.geometry.uvs;d.push(0,0),d.push(0,0),d.push(0,0)},addUVLine:function(d){var p=this.uvs;this.object.geometry.uvs.push(p[d+0],p[d+1])},addFace:function(d,p,f,g,m,v,y,w,_){var b=this.vertices.length,E=this.parseVertexIndex(d,b),S=this.parseVertexIndex(p,b),P=this.parseVertexIndex(f,b);if(this.addVertex(E,S,P),this.addColor(E,S,P),y!==void 0&&y!==""){var I=this.normals.length;E=this.parseNormalIndex(y,I),S=this.parseNormalIndex(w,I),P=this.parseNormalIndex(_,I),this.addNormal(E,S,P)}else this.addFaceNormal(E,S,P);if(g!==void 0&&g!==""){var T=this.uvs.length;E=this.parseUVIndex(g,T),S=this.parseUVIndex(m,T),P=this.parseUVIndex(v,T),this.addUV(E,S,P),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(d){this.object.geometry.type="Points";for(var p=this.vertices.length,f=0,g=d.length;f<g;f++)this.addVertexPoint(this.parseVertexIndex(d[f],p))},addLineGeometry:function(d,p){this.object.geometry.type="Line";for(var f=this.vertices.length,g=this.uvs.length,m=0,v=d.length;m<v;m++)this.addVertexLine(this.parseVertexIndex(d[m],f));var y=0;for(v=p.length;y<v;y++)this.addUVLine(this.parseUVIndex(p[y],g))}};return h.startObject("",!1),h}function u(h){qe.call(this,h),this.materials=null}return u.prototype=Object.assign(Object.create(qe.prototype),{constructor:u,load:function(h,d,p,f){var g=this,m=new Wt(this.manager);m.setPath(this.path),m.setRequestHeader(this.requestHeader),m.setWithCredentials(this.withCredentials),m.load(h,function(v){try{d(g.parse(v))}catch(y){f?f(y):console.error(y),g.manager.itemError(h)}},p,f)},setMaterials:function(h){return this.materials=h,this},parse:function(h){var d=new c;h.indexOf(`\r
`)!==-1&&(h=h.replace(/\r\n/g,`
`)),h.indexOf(`\\
`)!==-1&&(h=h.replace(/\\\n/g,""));for(var p=h.split(`
`),f="",g="",m=[],v=typeof"".trimLeft=="function",y=0,w=p.length;y<w;y++)if(f=p[y],(f=v?f.trimLeft():f.trim()).length!==0&&(g=f.charAt(0))!=="#")if(g==="v"){var _=f.split(/\s+/);switch(_[0]){case"v":d.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?d.colors.push(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6])):d.colors.push(void 0,void 0,void 0);break;case"vn":d.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":d.uvs.push(parseFloat(_[1]),parseFloat(_[2]))}}else if(g==="f"){for(var b=f.substr(1).trim().split(/\s+/),E=[],S=0,P=b.length;S<P;S++){var I=b[S];if(I.length>0){var T=I.split("/");E.push(T)}}var z=E[0];for(S=1,P=E.length-1;S<P;S++){var F=E[S],V=E[S+1];d.addFace(z[0],F[0],V[0],z[1],F[1],V[1],z[2],F[2],V[2])}}else if(g==="l"){var ee=f.substring(1).trim().split(" "),R=[],te=[];if(f.indexOf("/")===-1)R=ee;else for(var X=0,ne=ee.length;X<ne;X++){var me=ee[X].split("/");me[0]!==""&&R.push(me[0]),me[1]!==""&&te.push(me[1])}d.addLineGeometry(R,te)}else if(g==="p"){var ve=f.substr(1).trim().split(" ");d.addPointGeometry(ve)}else if((m=t.exec(f))!==null){var L=(" "+m[0].substr(1).trim()).substr(1);d.startObject(L)}else if(n.test(f))d.object.startMaterial(f.substring(7).trim(),d.materialLibraries);else if(e.test(f))d.materialLibraries.push(f.substring(7).trim());else if(i.test(f))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if((m=f.split(" ")).length>1){var C=m[1].trim().toLowerCase();d.object.smooth=C!=="0"&&C!=="off"}else d.object.smooth=!0;(ae=d.object.currentMaterial())&&(ae.smooth=d.object.smooth)}else{if(f==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+f+'"')}d.finalize();var re=new gt;for(re.materialLibraries=[].concat(d.materialLibraries),y=0,w=d.objects.length;y<w;y++){var J=d.objects[y],Z=J.geometry,A=J.materials,W=Z.type==="Line",Q=Z.type==="Points",N=!1;if(Z.vertices.length!==0){var D=new Be;D.setAttribute("position",new be(Z.vertices,3)),D.setAttribute("normal",new be(Z.normals,3)),Z.colors.length>0&&(N=!0,D.setAttribute("color",new be(Z.colors,3))),Z.hasUVIndices===!0&&D.setAttribute("uv",new be(Z.uvs,2));for(var H,K=[],j=0,ge=A.length;j<ge;j++){var de=(Ke=A[j]).name+"_"+Ke.smooth+"_"+N,ae=d.materials[de];if(this.materials!==null)if(ae=this.materials.create(Ke.name),!W||!ae||ae instanceof ft){if(Q&&ae&&!(ae instanceof Ot)){var Ee=new Ot({size:10,sizeAttenuation:!1});Se.prototype.copy.call(Ee,ae),Ee.color.copy(ae.color),Ee.map=ae.map,ae=Ee}}else{var Ne=new ft;Se.prototype.copy.call(Ne,ae),Ne.color.copy(ae.color),ae=Ne}ae===void 0&&((ae=W?new ft:Q?new Ot({size:1,sizeAttenuation:!1}):new En).name=Ke.name,ae.flatShading=!Ke.smooth,ae.vertexColors=N,d.materials[de]=ae),K.push(ae)}if(K.length>1){for(j=0,ge=A.length;j<ge;j++){var Ke=A[j];D.addGroup(Ke.groupStart,Ke.groupCount,j)}H=W?new fi(D,K):Q?new qi(D,K):new Ze(D,K)}else H=W?new fi(D,K[0]):Q?new qi(D,K[0]):new Ze(D,K[0]);H.name=J.name,re.add(H)}}return re}}),u}();const Kr=25,ho=new Zn(.3,4.6,.05),hl="PR_OPENED",ul="PR_MERGED",dl="CUSTOM",es=16777215,pl=2197759,fl=16018366,Si="PAUSE",Ei="RESUME";var Vh=$(1),Ct=$.n(Vh)()(new class{}().prototype);const Ve={},jh=new x,ir=Math.PI/180,Wh=180/Math.PI;function ts(t){return t*ir}function ml(t){return t*Wh}function gl(t,e,n){const i=n||new De;i.identity(),i.makeRotationY(e),i.multiply(t.matrix),t.matrix.copy(i),t.rotation.setFromRotationMatrix(t.matrix)}function Ti(t){t instanceof Ze&&(t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.lightMap&&t.material.lightMap.dispose(),t.material.bumpMap&&t.material.bumpMap.dispose(),t.material.normalMap&&t.material.normalMap.dispose(),t.material.specularMap&&t.material.specularMap.dispose(),t.material.envMap&&t.material.envMap.dispose(),t.material.emissiveMap&&t.material.emissiveMap.dispose(),t.material.metalnessMap&&t.material.metalnessMap.dispose(),t.material.roughnessMap&&t.material.roughnessMap.dispose(),t.material.dispose()))}function uo(t,e){for(let n=t.children.length-1;n>=0;n--){const i=t.children[n];uo(i,e),typeof e=="function"&&e(i)}}function qh(t,e,n,i){t=ts(t),e=ts(e),n=ts(n);const r=(i=ts(i))-e,s=Math.cos(n)*Math.cos(r),o=Math.cos(n)*Math.sin(r),a=Math.atan2(Math.sin(t)+Math.sin(n),Math.sqrt((Math.cos(t)+s)*(Math.cos(t)+s)+o*o)),l=e+Math.atan2(o,Math.cos(t)+s);return[ml(a),ml(l)]}function Pt(t,e,n,i){i=i||new x;const r=(90-t)*ir,s=(e+180)*ir;return i.set(-n*Math.sin(r)*Math.cos(s),n*Math.cos(r),n*Math.sin(r)*Math.sin(s)),i}function po(){this.array=null}class Xh{constructor(e){this.props=e,this.init()}init(){const{radius:e,detail:n=50,renderer:i,shadowPoint:r,highlightPoint:s,highlightColor:o,frontHighlightColor:a=3555965,waterColor:l=857395,landColorFront:c=16777215,shadowDist:u,highlightDist:h,frontPoint:d}=this.props,p=new za(e,n,n),f=new Ft({color:l,metalness:0,roughness:.9});this.uniforms=[],f.onBeforeCompile=m=>{m.uniforms.shadowDist={value:u},m.uniforms.highlightDist={value:h},m.uniforms.shadowPoint={value:new x().copy(r)},m.uniforms.highlightPoint={value:new x().copy(s)},m.uniforms.frontPoint={value:new x().copy(d)},m.uniforms.highlightColor={value:new ye(o)},m.uniforms.frontHighlightColor={value:new ye(a)},m.vertexShader=`#define GLSLIFY 1
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

varying vec3 vWorldPosition;

void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	// # include <worldpos_vertex>
    vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;
	vWorldPosition = worldPosition.xyz;
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m.fragmentShader=`#define GLSLIFY 1
#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSPARENCY
	uniform float transparency;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform float shadowDist;
uniform float highlightDist;
uniform vec3 shadowPoint;
uniform vec3 highlightPoint;
uniform vec3 frontPoint;
uniform vec3 highlightColor;
uniform vec3 frontHighlightColor;

varying vec3 vWorldPosition;

void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#ifdef USE_MAP

		vec4 texelColor = texture2D( map, vUv );
		texelColor = mapTexelToLinear( texelColor );
		
		#ifndef IS_FILL
			diffuseColor *= texelColor;
		#endif

	#endif
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif

    float dist;
	float distZ;

    // highlights
	#ifdef USE_HIGHLIGHT
		dist = distance(vWorldPosition, highlightPoint);
		distZ = distance(vWorldPosition.z, 0.0);
		outgoingLight = mix(highlightColor, outgoingLight, smoothstep(0.0, highlightDist, dist) * smoothstep(0.0, 3.0, pow(distZ, 0.5)));
        outgoingLight = mix(outgoingLight * 2.0, outgoingLight, smoothstep(0.0, 12.0, distZ));
	#endif

    // front hightlight
    #ifdef USE_FRONT_HIGHLIGHT
        dist = distance(vWorldPosition * vec3(0.875, 0.5, 1.0), frontPoint);
        outgoingLight = mix(frontHighlightColor * 1.6, outgoingLight, smoothstep(0.0, 15.0, dist));
    #endif

    // shadows
    dist = distance(vWorldPosition, shadowPoint);
	outgoingLight = mix(outgoingLight * 0.01, outgoingLight, smoothstep(0.0, shadowDist, dist));
    // shadow debug
	// outgoingLight = mix(vec3(1.0, 0.0, 0.0), outgoingLight, smoothstep(0.0, shadowDist, dist));

	#ifdef IS_FILL
		outgoingLight = mix(outgoingLight, outgoingLight * 0.5, 1.0 - texelColor.g * 1.5);
	#endif

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,this.uniforms.push(m.uniforms)},f.defines={USE_HIGHLIGHT:1,USE_HIGHLIGHT_ALT:1,USE_FRONT_HIGHLIGHT:1,DITHERING:1},this.mesh=new gt;const g=new Ze(p,f);g.renderOrder=1,this.mesh.add(g),this.meshFill=g,this.materials=[f]}setShadowPoint(e){this.uniforms&&this.uniforms.forEach(n=>{n.shadowPoint.value.copy(e)})}setHighlightPoint(e){this.uniforms&&this.uniforms.forEach(n=>{n.highlightPoint.value.copy(e)})}setFrontPoint(e){this.uniforms&&this.uniforms.forEach(n=>{n.frontPoint.value.copy(e)})}setShadowDist(e){this.uniforms&&this.uniforms.forEach(n=>{n.shadowDist.value=e})}setHighlightDist(e){this.uniforms&&this.uniforms.forEach(n=>{n.highlightDist.value=e})}dispose(){this.mesh=null,this.materials=null,this.uniforms=null,this.meshFill=null}}function rr(t,e,n,i,r){return function(s,o,a){return(a-o)*s+o}(function(s,o,a){return(s-o)/(a-o)||0}(t,e,n),i,r)}function fo(t,e,n){return Math.max(e,Math.min(t,n))}class Yh{constructor(e){this.props=e,this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchMove=this.handleTouchMove.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.handlePause=this.handlePause.bind(this),this.handleResume=this.handleResume.bind(this),this.init()}init(){this.dragging=!1,this.mouse=new O(.5,.5),this.lastMouse=new O(.5,.5),this.target=new x(0,0),this.matrix=new De,this.velocity=new O,this.autoRotationSpeedScalar=1,this.autoRotationSpeedScalarTarget=1,this.addListeners(),Ct.on(Si,this.handlePause),Ct.on(Ei,this.handleResume)}addListeners(){const{domElement:e}=this.props;this.removeListeners(),e.addEventListener("mousedown",this.handleMouseDown,!1),e.addEventListener("mousemove",this.handleMouseMove,!1),e.addEventListener("mouseup",this.handleMouseUp,!1),e.addEventListener("mouseout",this.handleMouseOut,!1),e.addEventListener("mouseleave",this.handleMouseOut,!1),e.addEventListener("touchstart",this.handleTouchStart,!1),e.addEventListener("touchmove",this.handleTouchMove,!1),e.addEventListener("touchend",this.handleTouchEnd,!1),e.addEventListener("touchcancel",this.handleTouchEnd,!1)}removeListeners(){const{domElement:e}=this.props;e.removeEventListener("mousedown",this.handleMouseDown),e.removeEventListener("mousemove",this.handleMouseMove),e.removeEventListener("mouseup",this.handleMouseUp),e.removeEventListener("mouseout",this.handleMouseOut),e.removeEventListener("mouseleave",this.handleMouseOut),e.removeEventListener("touchstart",this.handleTouchStart),e.removeEventListener("touchmove",this.handleTouchMove),e.removeEventListener("touchend",this.handleTouchEnd),e.removeEventListener("touchcancel",this.handleTouchEnd)}setMouse(e){const{width:n,height:i}=Ve.parentNode.getBoundingClientRect();this.mouse.x=e.clientX/n*2-1,this.mouse.y=-e.clientY/i*2+1}setDragging(e){this.dragging=e;const{setDraggingCallback:n}=this.props;n&&typeof n=="function"&&n(e)}handlePause(){this.removeListeners()}handleResume(){this.addListeners()}handleMouseDown(e){this.setMouse(e),this.setDragging(!0)}handleMouseMove(e){this.setMouse(e)}handleMouseUp(e){this.setMouse(e),this.setDragging(!1)}handleMouseOut(){this.setDragging(!1)}handleTouchStart(e){this.setMouse(e.changedTouches[0]),this.lastMouse.copy(this.mouse),this.setDragging(!0)}handleTouchMove(e){this.setMouse(e.changedTouches[0])}handleTouchEnd(e){this.setMouse(e.changedTouches[0]),this.setDragging(!1)}update(e=.01){let n=0,i=0;const{object:r,objectContainer:s,rotateSpeed:o,autoRotationSpeed:a,easing:l=.1,maxRotationX:c=.3}=this.props;this.dragging&&(n=this.mouse.x-this.lastMouse.x,i=this.mouse.y-this.lastMouse.y,this.target.y=fo(this.target.y-i,-c,.6*c)),s.rotation.x+=(this.target.y+ho.x-s.rotation.x)*l,this.target.x+=(n-this.target.x)*l,gl(r,this.target.x*o,this.matrix),this.dragging||gl(r,e*a*this.autoRotationSpeedScalar,this.matrix),this.autoRotationSpeedScalar+=.05*(this.autoRotationSpeedScalarTarget-this.autoRotationSpeedScalar),this.lastMouse.copy(this.mouse),this.velocity.set(n,i)}dispose(){this.removeListeners(),Ct.off(Si,this.handlePause),Ct.off(Ei,this.handleResume),this.dragging=null,this.mouse=null,this.lastMouse=null,this.target=null,this.matrix=null,this.velocity=null,this.autoRotationSpeedScalar=null,this.autoRotationSpeedScalarTarget=null}}class Jh{constructor(e){this.props=e,this.init()}init(){const{maxAmount:e=1e3,data:n=[],radius:i=1,camera:r,maxIndexDistance:s,visibleIndex:o,colors:{openPrColor:a,openPrParticleColor:l}}=this.props,{pixelRatio:c,spikeRadius:u=.06}=Ve;this.mesh=new gt;const h=new dt({color:65280,visible:!1}),d=new As(.75,1,.75);d.translate(0,.5,0),d.rotateX(-Math.PI/2);const p=new Wi(d,h,e);this.mesh.add(p);const f=new dt({color:a,transparent:!0,opacity:.4,alphaTest:.05,blending:2});f.onBeforeCompile=R=>{R.uniforms.cameraPosition={value:r.position},R.uniforms.radius={value:i},R.uniforms.visibleIndex={value:o},R.uniforms.maxIndexDistance={value:s},R.uniforms.highlightIndex={value:-9999},R.vertexShader=`#define GLSLIFY 1
#include <common>

uniform float visibleIndex;
uniform float maxIndexDistance;

attribute float index;

varying float vScale;
varying float vIndex;

#ifndef PI
#define PI 3.141592653589793
#endif

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}

void main() {
	vIndex = index;

	vec3 pos = position;

	float scale = sineInOut(clamp(smoothstep(maxIndexDistance, 0.0, distance(index, visibleIndex)), 0., 1.));
	pos.z *= scale;
	vScale = scale;

	vec3 transformed = vec3( pos );
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
}`,R.fragmentShader=`#define GLSLIFY 1
uniform vec3 diffuse;
uniform float opacity;

#include <common>

uniform float radius;
uniform float visibleIndex;
uniform float maxIndexDistance;
uniform float highlightIndex;

varying float vScale;
varying float vIndex;

void main() {
	if(vScale <= 0.01){
		discard;
		return;
	}

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <alphatest_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	reflectedLight.indirectDiffuse += vec3( 1.0 );
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	vec3 rgb = outgoingLight.rgb;
	float alpha = diffuseColor.a;

	// highlight when mouse is over
	if(highlightIndex == vIndex){
		rgb = vec3(1.0);
		alpha = 1.0;
	}

	gl_FragColor = vec4( rgb, alpha );
}`,this.spikeUniforms=R.uniforms};const g=[],m=[];for(let R=0;R<e;R++)g.push(R),m.push(R);const v=new Aa(u*c,u*c,1,6,1,!1);v.setAttribute("index",new Yr(new Float32Array(g),1)),v.translate(0,.5,0),v.rotateX(-Math.PI/2);const y=new Wi(v,f,e);this.mesh.add(y);const w=new Be,_=[],b=[],E=new ye(l),S=new gt,P=this.getDensities(),{densityValues:I,minDensity:T,maxDensity:z}=P;let F=0;for(let R=0;R<e;R++){const te=n[R],{gop:X}=te,ne=X;Pt(ne.lat,ne.lon,i,S.position);const me=I[F++];S.scale.z=rr(me,T,z,.05*i,.2*i),S.lookAt(jh),S.updateMatrix(),y.setMatrixAt(R,S.matrix),p.setMatrixAt(R,S.matrix),Pt(ne.lat,ne.lon,i+S.scale.z+.25,S.position),_.push(S.position.x,S.position.y,S.position.z),b.push(E.r,E.g,E.b)}w.setAttribute("position",new be(_,3).onUpload(po)),w.setAttribute("color",new be(b,3).onUpload(po)),w.setAttribute("index",new be(m,1).onUpload(po));const V=new Ot({alphaTest:.05,size:.8,depthWrite:!1});V.onBeforeCompile=R=>{R.uniforms.cameraPosition={value:r.position},R.uniforms.radius={value:i},R.uniforms.visibleIndex={value:o},R.uniforms.maxIndexDistance={value:s},R.vertexShader=`#define GLSLIFY 1
uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

uniform float time;
uniform float visibleIndex;
uniform float maxIndexDistance;
uniform float speed;

attribute float index;
attribute vec3 curveStart;
attribute vec3 curveCtrl1;
attribute vec3 curveCtrl2;
attribute vec3 curveEnd;
attribute float timeOffset;

varying float vAlpha;

float quarticInOut(float t) {
  return t < 0.5
    ? +8.0 * pow(t, 4.0)
    : -8.0 * pow(t - 1.0, 4.0) + 1.0;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, float t) {
  vec3 E = mix(A, B, t);
  vec3 F = mix(B, C, t);
  vec3 G = mix(C, D, t);

  vec3 H = mix(E, F, t);
  vec3 I = mix(F, G, t);

  vec3 P = mix(H, I, t);

  return P;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, vec3 E, float t) {
  vec3 A1 = mix(A, B, t);
  vec3 B1 = mix(B, C, t);
  vec3 C1 = mix(C, D, t);
  vec3 D1 = mix(D, E, t);

  vec3 A2 = mix(A1, B1, t);
  vec3 B2 = mix(B1, C1, t);
  vec3 C2 = mix(C1, D1, t);

  vec3 A3 = mix(A2, B2, t);
  vec3 B3 = mix(B2, C2, t);
  
  vec3 P = mix(A3, B3, t);

  return P;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, vec3 E, vec3 F, float t) {
  vec3 A1 = mix(A, B, t);
  vec3 B1 = mix(B, C, t);
  vec3 C1 = mix(C, D, t);
  vec3 D1 = mix(D, E, t);
  vec3 E1 = mix(E, F, t);

  vec3 A2 = mix(A1, B1, t);
  vec3 B2 = mix(B1, C1, t);
  vec3 C2 = mix(C1, D1, t);
  vec3 D2 = mix(D1, E1, t);

  vec3 A3 = mix(A2, B2, t);
  vec3 B3 = mix(B2, C2, t);
  vec3 C3 = mix(C2, D2, t);

  vec3 A4 = mix(A3, B3, t);
  vec3 B4 = mix(B3, C3, t);
  
  vec3 P = mix(A4, B4, t);

  return P;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, vec3 E, vec3 F, vec3 G, float t) {
  vec3 A1 = mix(A, B, t);
  vec3 B1 = mix(B, C, t);
  vec3 C1 = mix(C, D, t);
  vec3 D1 = mix(D, E, t);
  vec3 E1 = mix(E, F, t);
  vec3 F1 = mix(F, G, t);

  vec3 A2 = mix(A1, B1, t);
  vec3 B2 = mix(B1, C1, t);
  vec3 C2 = mix(C1, D1, t);
  vec3 D2 = mix(D1, E1, t);
  vec3 E2 = mix(E1, F1, t);

  vec3 A3 = mix(A2, B2, t);
  vec3 B3 = mix(B2, C2, t);
  vec3 C3 = mix(C2, D2, t);
  vec3 D3 = mix(D2, E2, t);

  vec3 A4 = mix(A3, B3, t);
  vec3 B4 = mix(B3, C3, t);
  vec3 C4 = mix(C3, D3, t);

  vec3 A5 = mix(A4, B4, t);
  vec3 B5 = mix(B4, C4, t);
  
  vec3 P = mix(A5, B5, t);

  return P;
}

void main() {    
	#include <color_vertex>

	// animate along curve and loop
	float t = quarticInOut(fract((time * speed + timeOffset)));

	vec3 pos = position;

	#ifdef USE_CURVE
		pos =  bezier(curveStart, curveCtrl1, curveCtrl2, curveEnd, t);
	#endif

	vec3 transformed = vec3( pos );

	// visible near visibleIndex
	float dist = distance(index, visibleIndex);
	vAlpha = smoothstep(maxIndexDistance * 0.75, 0.0, dist); // show after lines draw in (* 0.75)

	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R.fragmentShader=`#define GLSLIFY 1
uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform float radius;
uniform float visibleIndex;
uniform float maxIndexDistance;

varying vec3 vViewPosition;
varying float vAlpha;

#define V0 vec3(0.0)

void main() {
	if(vAlpha <= 0.05){
		discard;
		return;
	}

	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>	

	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a * vAlpha );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,this.particleUniforms=R.uniforms};const ee=new qi(w,V);this.mesh.add(ee),this.materials=[f,V],this.spikes=y,this.spikeIntersects=p,this.particles=ee,this.spikes.renderOrder=3,this.particles.renderOrder=4}getDensities(){const{data:e,maxAmount:n=1e3,radius:i}=this.props,r=new x,s=[],o=[];for(let c=0;c<n;c++){const u=e[c],{gop:h}=u,d=h;d&&d.lat&&d.lon&&(Pt(d.lat,d.lon,i,r),s.push(new x().copy(r)),o.push(0))}let a=99999,l=-1;return o.forEach(c=>{c<a?a=c:c>l&&(l=c)}),{densityValues:o,minDensity:a,maxDensity:l}}setHighlightIndex(e){this.spikeUniforms&&this.spikeUniforms.highlightIndex.value!==e&&(this.spikeUniforms.highlightIndex.value=e)}update(e){if(this.spikeUniforms&&this.particleUniforms){const{maxAmount:n,maxIndexDistance:i}=this.props;this.spikeUniforms&&(this.spikeUniforms.visibleIndex.value=e),this.particleUniforms&&(this.particleUniforms.visibleIndex.value=e);const r=fo(e-i|0,0,n),s=2*i|0,o=fo(r+s,0,n);this.spikes.count=o,this.particles.geometry.setDrawRange(r,s)}}dispose(){this.mesh&&uo(this.mesh,Ti),this.mesh&&this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.props=null,this.mesh=null,this.spikeUniforms=null,this.particleUniforms=null,this.materials=null,this.spikes=null,this.particles=null}}class Zh{constructor(e){this.props=e,this.init()}init(){const{data:e,radius:n=1,camera:i,maxAmount:r=e.length,maxIndexDistance:s,visibleIndex:o,colors:a}=this.props,{parentNode:l,lineWidth:c,pixelRatio:u}=Ve;this.mesh=new gt,this.isAnimating=[],this.animatingLandingsOut=[],this.landings=[],this.lineMeshes=[],this.lineHitMeshes=[],this.highlightedMesh,this.colors=a,this.landingGeo=new La(.35,8),this.TUBE_RADIUS_SEGMENTS=3,this.HIT_DETAIL_FRACTION=4,this.DATA_INCREMENT_SPEED=1.5,this.PAUSE_LENGTH_FACTOR=2,this.MIN_PAUSE=3e3,this.visibleIndex=0,this.lineAnimationSpeed=600;const h=new x,d=new x;this.tubeMaterial=new dt({blending:2,opacity:.95,transparent:!0,color:this.colors.mergedPrColor}),this.highlightMaterial=new dt({opacity:1,transparent:!1,color:this.colors.mergedPrColorHighlight}),this.hiddenMaterial=new dt({visible:!1});for(let p=0;p<r;p++){const{gop:f,gm:g}=e[p],m=f,v=g,y=Pt(m.lat,m.lon,n),w=Pt(v.lat,v.lon,n),_=y.distanceTo(w);if(_>1.5){let b;b=rr(_,0,2*n,1,_>1.85*n?3.25:_>1.4*n?2.3:1.5);const E=qh(m.lat,m.lon,v.lat,v.lon),S=Pt(E[0],E[1],n*b);h.copy(S),d.copy(S);const P=rr(_,10,30,.2,.15),I=rr(_,10,30,.8,.85);b=rr(_,0,2*n,1,1.7);const T=new Ht(y,h,d,w);T.getPoint(P,h),T.getPoint(I,d),h.multiplyScalar(b),d.multiplyScalar(b);const z=new Ht(y,h,d,w),F=Pt(v.lat,v.lon,n+p/1e4),V=Pt(v.lat,v.lon,n+5);this.landings.push({pos:F,lookAt:V});const ee=20+parseInt(z.getLength()),R=new Fa(z,ee,.08,this.TUBE_RADIUS_SEGMENTS,!1),te=new Fa(z,parseInt(ee/this.HIT_DETAIL_FRACTION),.6,this.TUBE_RADIUS_SEGMENTS,!1);R.setDrawRange(0,0),te.setDrawRange(0,0);const X=new Ze(R,this.tubeMaterial),ne=new Ze(te,this.hiddenMaterial);ne.name="lineMesh",X.userData={dataIndex:p},ne.userData={dataIndex:p,lineMeshIndex:this.lineMeshes.length},this.lineMeshes.push(X),this.lineHitMeshes.push(ne)}}l.getBoundingClientRect()}resetHighlight(){this.highlightedMesh!=null&&(this.highlightedMesh.material=this.tubeMaterial,this.highlightedMesh=null)}setHighlightObject(e){const n=parseInt(e.userData.lineMeshIndex),i=this.lineMeshes[n];i!=this.highlightedMesh&&(i.material=this.highlightMaterial,this.resetHighlight(),this.highlightedMesh=i)}update(e=.01,n){let i=parseInt(this.visibleIndex+e*this.DATA_INCREMENT_SPEED);i>=this.lineMeshes.length&&(i=0,this.visibleIndex=0),i>this.visibleIndex&&this.isAnimating.push(this.animatedObjectForIndex(i));let r=[],s=[];for(const o of this.isAnimating){const a=o.line.geometry.index.count,l=o.line.geometry.drawRange.count+e*this.lineAnimationSpeed;let c=o.line.geometry.drawRange.start+e*this.lineAnimationSpeed;if(l>=a&&c<a&&this.animateLandingIn(o),l>=a*this.PAUSE_LENGTH_FACTOR+this.MIN_PAUSE&&c<a){if(o.line==this.highlightedMesh){r.push(o);continue}c=this.TUBE_RADIUS_SEGMENTS*Math.ceil(c/this.TUBE_RADIUS_SEGMENTS);const u=this.TUBE_RADIUS_SEGMENTS*Math.ceil(c/this.HIT_DETAIL_FRACTION/this.TUBE_RADIUS_SEGMENTS);o.line.geometry.setDrawRange(c,l),o.lineHit.geometry.setDrawRange(u,l/this.HIT_DETAIL_FRACTION),r.push(o)}else c<a?(o.line.geometry.setDrawRange(0,l),o.lineHit.geometry.setDrawRange(0,l/this.HIT_DETAIL_FRACTION),r.push(o)):this.endAnimation(o)}for(let o=0;o<this.animatingLandingsOut.length;o++)this.animateLandingOut(this.animatingLandingsOut[o])&&s.push(this.animatingLandingsOut[o]);this.isAnimating=r,this.animatingLandingsOut=s,this.visibleIndex=this.visibleIndex+e*this.DATA_INCREMENT_SPEED}endAnimation(e){e.line.geometry.setDrawRange(0,0),e.lineHit.geometry.setDrawRange(0,0),this.mesh.remove(e.line),this.mesh.remove(e.lineHit),e.line=null,e.lineHit=null,this.animatingLandingsOut.push(e)}animateLandingIn(e){if(e.dot.scale.x>.99)return e.dotFade==null?void 0:(e.dotFade.material.opacity=0,this.mesh.remove(e.dotFade),Ti(e.dotFade),void(e.dotFade=null));const n=e.dot.scale.x+.06*(1-e.dot.scale.x);e.dot.scale.set(n,n,1);const i=e.dotFade.scale.x+.06*(1-e.dotFade.scale.x);e.dotFade.scale.set(i,i,1),e.dotFade.material.opacity=1-i}animateLandingOut(e){if(e.dot.scale.x<.01)return this.mesh.remove(e.dot),e.dot=null,Ti(e.dot),e.dotFade!=null&&(this.mesh.remove(e.dotFade),Ti(e.dotFade),e.dotFade=null),!1;const n=e.dot.scale.x-.15*e.dot.scale.x;return e.dot.scale.set(n,n,1),!0}animatedObjectForIndex(e){const n=this.lineMeshes[e];this.mesh.add(n);const i=this.lineHitMeshes[e];this.mesh.add(i);const r=this.landingFromPositionData(this.landings[e]);this.mesh.add(r);const s=this.fadingLandingMeshFromMesh(r);return this.mesh.add(s),{line:n,lineHit:i,dot:r,dotFade:s}}landingFromPositionData(e){const n=new Ze(this.landingGeo,this.tubeMaterial);return n.position.set(e.pos.x,e.pos.y,e.pos.z),n.lookAt(e.lookAt.x,e.lookAt.y,e.lookAt.z),n.scale.set(0,0,1),n}fadingLandingMeshFromMesh(e){const n=e.clone();return n.geometry=new wh(1.55,1.8,16),n.material=new dt({color:this.colors.mergedPrColor,blending:2,transparent:!0,opacity:0,alphaTest:.02,visible:!0}),n.scale.set(0,0,1),n.renderOrder=5,n}dispose(){this.mesh&&uo(this.mesh,Ti),this.mesh&&this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh=null}}function ns(){const t=document.querySelector(".js-webgl-globe");if(!t||!t.hasChildNodes())return;const e=t.parentNode;e&&e.classList.remove("home-globe-container-webgl");const n=t.querySelector(".js-webgl-globe-loading");n&&t.removeChild(n);const i=t.querySelector(".js-globe-canvas");i&&t.removeChild(i);const r=t.querySelector(".js-globe-popup");r&&t.removeChild(r),t.querySelector(".js-globe-fallback-image").removeAttribute("hidden")}class $h{constructor(e){this.props=e,this.init(),this.now=new Date,this.cardHeader="",this.units={day:864e5,hour:36e5,minute:6e4,second:1e3},this.cardOffset={x:10,y:16}}init(){const e=document.querySelector(this.props.parentSelector||"body"),{basePath:n,imagePath:i}=Ve;this.isVisible=!1,this.element=function(r,s,o){r=r||"div";const a=document.createElement(r);return s&&s.forEach(l=>{a.classList.add(l)}),o&&(a.innerHTML=o),a}("div",["data-info","position-absolute","top-0","left-0","rounded","text-mono","f6","py-3","pl-2","pr-5","z-3","js-globe-popup","text-white","d-none"],`
      <a class='js-globe-popover-card no-underline d-flex flex-row flex-items-start'>

        <div class='pr-2 pt-1 pl-2'>
          <img src='https://limitmatrix.com/static/webgl-globe/images/pull-request-icon.svg' aria-hidden='true' class='js-globe-popup-icon-pr'>
          <img src='https://limitmatrix.com/static/webgl-globe/images/north-star.svg' aria-hidden='true' class='js-globe-popup-icon-acv mt-n1 d-none' width='24'>
        </div>

        <div>
          <div class='f4 text-white js-globe-popover-header'>#34234 facebook/react</div>
          <div style='color: #959da5' class='js-globe-popover-body'></div>
        </div>

      </a>
    `),this.element.style.maxWidth="450px",this.element.style.backgroundColor="rgba(0,0,0, 0.4)",this.element.style.backdropFilter="blur(10px)",this.element.style.webkitBackdropFilter="blur(10px)",e.appendChild(this.element),this.card=this.element.querySelector(".js-globe-popover-card"),this.header=this.card.querySelector(".js-globe-popover-header"),this.body=this.card.querySelector(".js-globe-popover-body")}update(e,n){const i=e.x+n.x+this.cardOffset.x,r=e.y+n.y+this.cardOffset.y,s=this.element.getBoundingClientRect(),o=Math.min(i,window.innerWidth-s.width-this.cardOffset.x),a=r+s.height,l=e.y-s.height-this.cardOffset.y/2+n.y,c=a>window.innerHeight+n.y?l:r;this.element.style.transform=`translate(${o}px, ${c}px)`}setInfo(e){const{user_opened_location:n,user_merged_location:i,language:r,type:s,header:o,body:a,name_with_owner:l,pr_id:c,time:u,url:h}=e,d=`#${c} ${l}`;if(this.cardHeader==d||this.cardHeader==o)return;this.cardHeader=d;const p=this.shouldShowTime(u)?this.relativeTime(u):"";h!==null&&(this.card.href=h),s===ul?(this.header.textContent=d,this.body.innerText=`Opened in ${n},
merged ${p} in ${i}`,r!==null&&this.body.prepend(r,this.colorDotForLanguage(r)),this.showPRIcon()):s===hl?(this.header.textContent=d,this.body.innerText=`Opened ${p} in ${n}`,r!==null&&this.body.prepend(r,this.colorDotForLanguage(r)),this.showPRIcon()):s===dl&&(this.header.textContent=o,this.body.innerText=a,this.showGHIcon())}relativeTime(e){const n=e-this.now;for(const i in this.units)if(Math.abs(n)>this.units[i]||i=="second"){const r=Math.abs(Math.round(n/this.units[i]));return`${r} ${i}${r>1?"s":""} ago`}}shouldShowTime(e){return e!==null&&this.now-e<this.units.day}showPRIcon(){document.querySelector(".js-globe-popup-icon-pr").classList.remove("d-none"),document.querySelector(".js-globe-popup-icon-acv").classList.add("d-none")}showGHIcon(){document.querySelector(".js-globe-popup-icon-pr").classList.add("d-none"),document.querySelector(".js-globe-popup-icon-acv").classList.remove("d-none")}show(){if(this.isVisible==1)return;const{domElement:e,controls:n}=this.props;e.classList.add("cursor-pointer"),this.element.classList.remove("d-none"),this.element.classList.add("d-block"),n.autoRotationSpeedScalarTarget=0,this.isVisible=!0}hide(){if(this.isVisible==0)return;const{domElement:e,controls:n}=this.props;e.classList.remove("cursor-pointer"),this.element.classList.remove("d-block"),this.element.classList.add("d-none"),n.autoRotationSpeedScalarTarget=1,this.isVisible=!1}dispose(){this.element&&this.element.parentNode&&document.body.removeChild(this.element),this.element=null,this.props=null,this.icon=null,this.dataElement=null,this.openedLocationElement=null,this.mergedLocationElement=null,this.languageElement=null}colorDotForLanguage(e){const n=document.createElement("span");return n.style.color=this.colorForLanguage(e),n.textContent=" \u2022 ",n}colorForLanguage(e){return{ActionScript:"#882B0F",AMPL:"#E6EFBB","API Blueprint":"#2ACCA8","Apollo Guidance Computer":"#0B3D91",AppleScript:"#101F1F",Arc:"#aa2afe","ASP.NET":"#9400ff",Assembly:"#6E4C13",Batchfile:"#C1F12E",C:"#555555","C#":"#178600","C++":"#f34b7d",Clojure:"#db5855",CoffeeScript:"#244776",ColdFusion:"#ed2cd6","ColdFusion CFC":"#ed2cd6","Common Lisp":"#3fb68b","Component Pascal":"#B0CE4E",Crystal:"#000100",CSON:"#244776",CSS:"#563d7c",Dart:"#00B4AB",Dockerfile:"#384d54",EJS:"#a91e50",Elixir:"#6e4a7e",Elm:"#60B5CC","Emacs Lisp":"#c065db",EmberScript:"#FFF4F3",EQ:"#a78649",Erlang:"#B83998","Game Maker Language":"#71b417",GAML:"#FFC766",Glyph:"#c1ac7f",Go:"#00ADD8",GraphQL:"#e10098",Haml:"#ece2a9",Handlebars:"#f7931e",Harbour:"#0e60e3",Haskell:"#5e5086",HTML:"#e34c26",J:"#9EEDFF",Java:"#b07219",JavaScript:"#f1e05a",Julia:"#a270ba",Kotlin:"#F18E33",Less:"#1d365d",Lex:"#DBCA00",LLVM:"#185619",Lua:"#000080",Makefile:"#427819",Markdown:"#083fa1",MATLAB:"#e16737",Mercury:"#ff2b2b",Metal:"#8f14e9",Nim:"#ffc200",Nix:"#7e7eff",NumPy:"#9C8AF9","Objective-C":"#438eff","Objective-C++":"#6866fb",Pan:"#cc0000",Pascal:"#E3F171",Pawn:"#dbb284",Perl:"#0298c3",PHP:"#4F5D95",PLSQL:"#dad8d8",PostScript:"#da291c",PowerBuilder:"#8f0f8d",PowerShell:"#012456",Prisma:"#0c344b",Processing:"#0096D8",Puppet:"#302B6D",Python:"#3572A5",R:"#198CE7",Reason:"#ff5847",Ruby:"#701516",Rust:"#dea584",Sass:"#a53b70",Scala:"#c22d40",Scheme:"#1e4aec",SCSS:"#c6538c",Shell:"#89e051",Svelte:"#ff3e00",SVG:"#ff9900",Swift:"#ffac45","TI Program":"#A0AA87",Turing:"#cf142b",Twig:"#c1d026",TypeScript:"#2b7489",Uno:"#9933cc",UnrealScript:"#a54c4d",Vala:"#fbe5cd","Vim script":"#199f4b","Visual Basic .NET":"#945db7",Vue:"#41586f",wdl:"#42f1f4",WebAssembly:"#04133b",YAML:"#cb171e"}[e]}}class Qh{constructor(e){this.handleResize=this.handleResize.bind(this),this.handlePause=this.handlePause.bind(this),this.handleResume=this.handleResume.bind(this),this.handleScroll=this.handleScroll.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.setDragging=this.setDragging.bind(this),this.update=this.update.bind(this),this.hasLoaded=!1,this.initBase(e||document.body),this.initScene(),this.addListeners(),Ct.on(Si,this.handlePause),Ct.on(Ei,this.handleResume)}initBase(e){const{width:n,height:i}=Ve.parentNode.getBoundingClientRect();this.scene=new ua,this.camera=new ot(20,n/i,170,260),this.renderer=new Hi({powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:!1}),this.then=Date.now()/1e3,this.fpsWarnings=0,this.fpsWarningThreshold=50,this.fpsTarget=60,this.fpsEmergencyThreshold=12,this.fpsTargetSensitivity=.925,this.fpsStorage=[],this.worldDotRows=200,this.worldDotSize=.095,this.renderQuality=4,this.renderer.setPixelRatio(Ve.pixelRatio||1),this.renderer.setSize(n,i),this.renderer.setClearColor(265505,1),e.appendChild(this.renderer.domElement),this.renderer.domElement.classList.add("webgl-canvas"),this.renderer.domElement.classList.add("js-globe-canvas");const r=new ro(16777215,.8);this.scene.add(r),this.parentContainer=new gt,this.parentContainer.name="parentContainer";let s=ho;const o=new Date().getTimezoneOffset()||0;s.y=ho.y+Math.PI*(o/720),this.parentContainer.rotation.copy(s),this.scene.add(this.parentContainer),this.haloContainer=new gt,this.haloContainer.name="haloContainer",this.scene.add(this.haloContainer),this.container=new gt,this.container.name="container",this.parentContainer.add(this.container),this.camera.position.set(0,0,220),this.scene.add(this.camera),this.clock=new Rh,this.mouse=new x(0,0,.5),this.mouseScreenPos=new O(-9999,-9999),this.raycaster=new Zr,this.raycaster.far=260,this.paused=!1,this.canvasOffset={x:0,y:0},this.updateCanvasOffset(),this.highlightMaterial=new dt({opacity:1,transparent:!1,color:es}),this.handleResize(),this.startUpdating(),window.scene=this.scene}initScene(){const{isMobile:e,globeRadius:n=Kr,assets:{textures:{globeDiffuse:i,globeAlpha:r}}}=Ve;this.radius=n,this.light0=new qr(pl,12,120,.3,0,1.1),this.light1=new io(11124735,3),this.light3=new qr(fl,5,75,.5,0,1.25),this.light0.target=this.parentContainer,this.light1.target=this.parentContainer,this.light3.target=this.parentContainer,this.scene.add(this.light0,this.light1,this.light3),this.positionContainer(),this.shadowPoint=new x().copy(this.parentContainer.position).add(new x(.7*this.radius,.3*-this.radius,this.radius)),this.highlightPoint=new x().copy(this.parentContainer.position).add(new x(1.5*-this.radius,1.5*-this.radius,0)),this.frontPoint=new x().copy(this.parentContainer.position).add(new x(0,0,this.radius));const s=new Xh({radius:this.radius,detail:55,renderer:this.renderer,shadowPoint:this.shadowPoint,shadowDist:1.5*this.radius,highlightPoint:this.highlightPoint,highlightColor:5339494,highlightDist:5,frontPoint:this.frontPoint,frontHighlightColor:2569853,waterColor:1513012,landColorFront:es,landColorBack:es});this.container.add(s.mesh),this.globe=s;const o=new Ze(new za(Kr,45,45),new pt({uniforms:{c:{type:"f",value:.7},p:{type:"f",value:15},glowColor:{type:"c",value:new ye(1844322)},viewVector:{type:"v3",value:new x(0,0,220)}},vertexShader:`#define GLSLIFY 1
uniform vec3 viewVector;
uniform float c;
uniform float p;
varying float intensity;
void main() 
{
  vec3 vNormal = normalize( normalMatrix * normal );
  vec3 vNormel = normalize( normalMatrix * viewVector );
  intensity = pow( c - dot(vNormal, vNormel), p );
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`#define GLSLIFY 1
uniform vec3 glowColor;
varying float intensity;
void main() 
{
	vec3 glow = glowColor * intensity;
  gl_FragColor = vec4( glow, 1.0 );
}`,side:1,blending:2,transparent:!0}));o.scale.multiplyScalar(1.15),o.rotateX(.03*Math.PI),o.rotateY(.03*Math.PI),o.renderOrder=3,this.haloContainer.add(o),this.dragging=!1,this.rotationSpeed=.05,this.raycastIndex=0,this.raycastTrigger=10,this.raycastTargets=[],this.intersectTests=[],this.controls=new Yh({object:this.container,objectContainer:this.parentContainer,domElement:this.renderer.domElement,setDraggingCallback:this.setDragging,rotateSpeed:e?1.5:3,autoRotationSpeed:this.rotationSpeed,easing:.12,maxRotationX:.5,camera:this.camera})}initDataObjects(e){const n={openPrColor:pl,openPrParticleColor:6137337,mergedPrColor:fl,mergedPrColorHighlight:es},{isMobile:i,assets:{textures:{particleDiffuse:r,worldMap:s}}}=Ve;this.buildWorldGeometry(),this.addArcticCodeVault(),this.maxAmount=e.length,this.maxIndexDistance=60,this.indexIncrementSpeed=15,this.visibleIndex=60,this.openPrEntity=new Jh({data:e,maxAmount:this.maxAmount,radius:this.radius,particleDiffuse:r,camera:this.camera,maxIndexDistance:this.maxIndexDistance,indexIncrementSpeed:this.indexIncrementSpeed,visibleIndex:this.visibleIndex,colors:n}),this.mergedPrEntity=new Zh({data:e,maxAmount:this.maxAmount,radius:this.radius,camera:this.camera,maxIndexDistance:this.maxIndexDistance,visibleIndex:this.visibleIndex,colors:n,mouse:this.mouse});const{width:o,height:a}=Ve.parentNode.getBoundingClientRect(),l=850/a*1;this.containerScale=l,this.dataInfo=new $h({parentSelector:".js-webgl-globe-data",domElement:this.renderer.domElement,controls:this.controls}),this.dataItem={},this.intersectTests.push(this.globe.meshFill),this.intersectTests.push(this.openPrEntity.spikeIntersects),this.intersectTests.push(...this.mergedPrEntity.lineHitMeshes),this.intersects=[]}monitorFps(){if(this.renderQuality==1)return;const e=Date.now()/1e3,n=e-this.then;this.then=e;const i=parseInt(1/n+.5);this.fpsStorage.push(i),this.fpsStorage.length>10&&this.fpsStorage.shift();const r=this.fpsStorage.reduce((s,o)=>s+o)/this.fpsStorage.length;r<this.fpsTarget*this.fpsTargetSensitivity&&this.fpsStorage.length>9?(this.fpsWarnings++,this.fpsWarnings>this.fpsWarningThreshold&&(this.renderQuality=Math.max(this.renderQuality-1,1),this.fpsWarnings=0,this.updateRenderQuality(),this.fpsStorage=[])):this.fpsStorage.length>9&&r<this.fpsEmergencyThreshold?(this.renderQuality=1,this.initPerformanceEmergency()):this.fpsWarnings=0}updateRenderQuality(){this.renderQuality==4?this.initRegularQuality():this.renderQuality==3?this.initMediumQuality():this.renderQuality==2?this.initLowQuality():this.renderQuality==1&&this.initLowestQuality()}initRegularQuality(){this.renderer.setPixelRatio(Ve.pixelRatio||1),this.indexIncrementSpeed=15,this.raycastTrigger=10}initMediumQuality(){this.renderer.setPixelRatio(Math.min(Ve.pixelRatio,1.85)),this.indexIncrementSpeed=13,this.raycastTrigger=12}initLowQuality(){this.renderer.setPixelRatio(Math.min(Ve.pixelRatio,1.5)),this.indexIncrementSpeed=10,this.raycastTrigger=14,this.worldDotRows=180,this.worldDotSize=.1,this.resetWorldMap(),this.buildWorldGeometry()}initLowestQuality(){this.renderer.setPixelRatio(1),this.indexIncrementSpeed=5,this.raycastTrigger=16,this.worldDotRows=140,this.worldDotSize=.1,this.resetWorldMap(),this.buildWorldGeometry()}initPerformanceEmergency(){this.dispose(),ns()}buildWorldGeometry(){const{assets:{textures:{worldMap:e}}}=Ve,n=new _e,i=this.getImageData(e.image),r=[],s=this.worldDotRows;for(let c=-90;c<=90;c+=180/s){const u=Math.cos(Math.abs(c)*ir)*Kr*Math.PI*2*2;for(let h=0;h<u;h++){const d=360*h/u-180;if(!this.visibilityForCoordinate(d,c,i))continue;const p=Pt(c,d,this.radius);n.position.set(p.x,p.y,p.z);const f=Pt(c,d,this.radius+5);n.lookAt(f.x,f.y,f.z),n.updateMatrix(),r.push(n.matrix.clone())}}const o=new La(this.worldDotSize,5),a=new Ft({color:3818644,metalness:0,roughness:.9,transparent:!0,alphaTest:.02});a.onBeforeCompile=function(c){c.fragmentShader=c.fragmentShader.replace("gl_FragColor = vec4( outgoingLight, diffuseColor.a );",`
        gl_FragColor = vec4( outgoingLight, diffuseColor.a );
        if (gl_FragCoord.z > 0.51) {
          gl_FragColor.a = 1.0 + ( 0.51 - gl_FragCoord.z ) * 17.0;
        }
      `)};const l=new Wi(o,a,r.length);for(let c=0;c<r.length;c++)l.setMatrixAt(c,r[c]);l.renderOrder=3,this.worldMesh=l,this.container.add(l)}resetWorldMap(){this.container.remove(this.worldMesh),Ti(this.worldMesh),this.dotMesh=null}addArcticCodeVault(){new Aa(.075,.075,1.5,8),this.vaultMaterial=new dt({blending:2,opacity:.9,transparent:!0,color:4299263}),this.vaultIsHighlighted=!1;const e=Pt(78.14,15.26,this.radius),n=Pt(78.14,15.26,this.radius+5),{basePath:i,imagePath:r}=Ve,s=`https://limitmatrix.com/static/webgl-globe/images/flag.obj`;new kh().load(s,o=>{o.position.set(e.x,e.y,e.z),o.lookAt(n.x,n.y,n.z),o.rotateX(90*ir),o.scale.set(.1,.1,.1),o.renderOrder=3;for(const a of o.children)a.material=this.vaultMaterial,a.name="arcticCodeVault",this.arcticCodeVaultMesh=a,this.intersectTests.push(this.arcticCodeVaultMesh);this.container.add(o)})}highlightArcticCodeVault(){this.vaultIsHighlighted||(this.arcticCodeVaultMesh.material=this.highlightMaterial,this.vaultIsHighlighted=!0)}resetArcticCodeVaultHighlight(){this.vaultIsHighlighted&&(this.arcticCodeVaultMesh.material=this.vaultMaterial,this.vaultIsHighlighted=!1)}visibilityForCoordinate(e,n,i){const r=4*i.width,s=parseInt((e+180)/360*i.width+.5),o=i.height-parseInt((n+90)/180*i.height-.5),a=parseInt(r*(o-1)+4*s)+3;return i.data[a]>90}getImageData(e){const n=document.createElement("canvas").getContext("2d");return n.canvas.width=e.width,n.canvas.height=e.height,n.drawImage(e,0,0,e.width,e.height),n.getImageData(0,0,e.width,e.height)}addListeners(){window.addEventListener("resize",this.handleResize,!1),window.addEventListener("orientationchange",this.handleResize,!1),window.addEventListener("scroll",this.handleScroll,!1),this.handleClick=e=>{this.dataItem===null||this.dataItem.url===null||this.shouldCancelClick(e)||window.open(this.dataItem.url,"_blank")},this.renderer.domElement.addEventListener("mouseup",this.handleClick,!1),this.handleMouseDown=e=>{this.resetInteractionIntention(e)},this.renderer.domElement.addEventListener("mousedown",this.handleMouseDown,!1),this.handleTouchStart=e=>{const n=e.changedTouches[0];this.handleMouseMove(n),this.resetInteractionIntention(n),e.preventDefault()},this.renderer.domElement.addEventListener("touchstart",this.handleTouchStart,!1),this.handleTouchMove=e=>{this.shouldCancelClick(e.changedTouches[0])&&(this.mouse={x:-9999,y:-9999},e.preventDefault())},this.renderer.domElement.addEventListener("touchmove",this.handleTouchMove,!1),this.renderer.domElement.addEventListener("mousemove",this.handleMouseMove,!1)}removeListeners(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("orientationchange",this.handleResize),window.removeEventListener("scroll",this.handleScroll),this.renderer.domElement.removeEventListener("mousemove",this.handleMouseMove),this.renderer.domElement.removeEventListener("mouseup",this.handleClick),this.renderer.domElement.removeEventListener("mousedown",this.handleMouseDown),this.renderer.domElement.removeEventListener("touchstart",this.handleTouchStart),this.renderer.domElement.removeEventListener("touchmove",this.handleTouchMove)}updateCanvasOffset(){const e=document.querySelector(".js-webgl-globe-data").getBoundingClientRect(),n=document.querySelector(".js-webgl-globe").getBoundingClientRect();this.canvasOffset={x:n.x-e.x,y:n.y-e.y}}resetInteractionIntention(e){this.mouseDownPos={x:e.clientX,y:e.clientY}}shouldCancelClick(e){const n=Math.abs(e.clientX-this.mouseDownPos.x);return Math.abs(e.clientY-this.mouseDownPos.y)>2||n>2}positionContainer(){const{isMobile:e,parentNode:n}=Ve,{height:i}=n.getBoundingClientRect(),r=850/i*1;this.containerScale=r,e?this.parentContainer.position.set(0,0,0):(this.parentContainer.scale.set(r,r,r),this.parentContainer.position.set(0,0,0),this.haloContainer.scale.set(r,r,r)),this.haloContainer.position.set(0,0,-10),this.positionLights(r)}positionLights(e=1){this.light0&&(this.light0.position.set(this.parentContainer.position.x-2.5*this.radius,80,-40).multiplyScalar(e),this.light0.distance=120*e),this.light1&&this.light1.position.set(this.parentContainer.position.x-50,this.parentContainer.position.y+30,10).multiplyScalar(e),this.light2&&(this.light2.position.set(this.parentContainer.position.x-25,0,100).multiplyScalar(e),this.light2.distance=150*e),this.light3&&(this.light3.position.set(this.parentContainer.position.x+this.radius,this.radius,2*this.radius).multiplyScalar(e),this.light3.distance=75*e)}handlePause(){this.stopUpdating(),this.clock.stop()}handleResume(){this.clock.start(),this.startUpdating()}handleScroll(){window.scrollY>=this.renderer.domElement.getBoundingClientRect().height&&!this.paused?(this.paused=!0,Ct.emit(Si)):window.scrollY<this.renderer.domElement.getBoundingClientRect().height&&this.paused&&(this.paused=!1,Ct.emit(Ei))}handleResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{const{width:e,height:n}=Ve.parentNode.getBoundingClientRect();this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.positionContainer();const i=850/n*1,r=this.radius*i;this.shadowPoint.copy(this.parentContainer.position).add(new x(.7*r,.3*-r,r)),this.globe.setShadowPoint(this.shadowPoint),this.highlightPoint.copy(this.parentContainer.position).add(new x(1.5*-r,1.5*-r,0)),this.globe.setHighlightPoint(this.highlightPoint),this.frontPoint=new x().copy(this.parentContainer.position).add(new x(0,0,r)),this.globe.setFrontPoint(this.frontPoint),this.globe.setShadowDist(1.5*r),this.globe.setHighlightDist(5*i),this.updateCanvasOffset()},150)}handleMouseMove(e){e.preventDefault!=null&&e.preventDefault();const{width:n,height:i,x:r,y:s}=Ve.parentNode.getBoundingClientRect(),o=e.clientX-r,a=e.clientY-s;this.mouse.x=o/n*2-1,this.mouse.y=-a/i*2+1,this.mouseScreenPos.set(o,a)}startUpdating(){this.stopUpdating(),this.update()}stopUpdating(){cancelAnimationFrame(this.rafID)}setDragging(e=!0){this.dragging=e}setDataInfo(e){if(!this.dataInfo||this.dataItem==e)return;this.dataItem=e;const{uol:n,uml:i,l:r,type:s,body:o,header:a,nwo:l,pr:c,ma:u,oa:h}=e;let d=u||h;d&&(d=d.replace(" ","T"),d=d.includes("Z")?d:d.concat("-08:00"),d=Date.parse(d)),l&&c&&(this.dataItem.url="https://limitmatrix.com"),this.dataInfo.setInfo({user_opened_location:n,user_merged_location:i,language:r,name_with_owner:l,pr_id:c,time:d,type:s,body:o,header:a,url:this.dataItem.url})}testForDataIntersection(){const{mouse:e,raycaster:n,camera:i}=this;this.intersects.length=0,function(r,s,o,a,l,c=!1){(a=a||new Zr).setFromCamera(r,s);const u=a.intersectObjects(o,c,l);u.length>0&&u[0]}(e,i,this.intersectTests,n,this.intersects),this.intersects.length&&this.intersects[0].object===this.globe.meshFill&&(this.intersects.length=0)}transitionIn(){return new Promise(()=>{this.container.add(this.openPrEntity.mesh),this.container.add(this.mergedPrEntity.mesh)})}handleUpdate(){if(this.monitorFps(),this.clock===null)return;const e=this.clock.getDelta();if(this.controls&&this.controls.update(e),this.visibleIndex+=e*this.indexIncrementSpeed,this.visibleIndex>=this.maxAmount-60&&(this.visibleIndex=60),this.openPrEntity&&this.openPrEntity.update(this.visibleIndex),this.mergedPrEntity&&this.mergedPrEntity.update(e,this.visibleIndex),!this.dataInfo)return void this.render();const{raycaster:n,camera:i,mouseScreenPos:r}=this;let s,o=!1;if(this.raycastIndex%this.raycastTrigger==0){if(this.testForDataIntersection(),this.intersects.length){this.radius,this.containerScale;for(let a=0;a<this.intersects.length&&!o;a++){const{instanceId:l,object:c}=this.intersects[a];if(c.name==="lineMesh"){s=this.setMergedPrEntityDataItem(c),o=!0;break}if(c===this.openPrEntity.spikeIntersects&&this.shouldShowOpenPrEntity(l)){s=this.setOpenPrEntityDataItem(l),o=!0;break}if(c.name==="arcticCodeVault"){s={header:"Arctic Code Vault",body:`Svalbard \u2022 Cold storage of the work of 3,466,573 open source developers. For safe keeping.
Learn more \u2192`,type:dl,url:"https://archiveprogram.github.com"},this.highlightArcticCodeVault(),o=!0;break}}}o&&s?(this.setDataInfo(s),this.dataInfo.show()):(this.dataInfo.hide(),this.openPrEntity.setHighlightIndex(-9999),this.mergedPrEntity.resetHighlight(),this.resetArcticCodeVaultHighlight(),this.dataItem=null,Ve.isMobile&&(this.mouse={x:-9999,y:-9999}))}this.dragging&&(this.dataInfo.hide(),this.openPrEntity.setHighlightIndex(-9999),this.mergedPrEntity.resetHighlight(),this.resetArcticCodeVaultHighlight()),this.dataInfo.isVisible&&this.dataInfo.update(r,this.canvasOffset),this.raycastIndex++,this.raycastIndex>=this.raycastTrigger&&(this.raycastIndex=0),this.render()}update(){this.handleUpdate(),this.hasLoaded||this.sceneDidLoad(),this.rafID=requestAnimationFrame(this.update)}render(){this.renderer.render(this.scene,this.camera)}shouldShowMergedPrEntity(e,n){const i=e.geometry.attributes.index.array[n];return i>=this.visibleIndex-this.maxIndexDistance&&i<=this.visibleIndex+this.maxIndexDistance}sceneDidLoad(){this.hasLoaded=!0;const e=document.querySelector(".js-webgl-globe-loading");if(!e)return;const n={fill:"both",duration:600,easing:"ease"};this.renderer.domElement.animate([{opacity:0,transform:"scale(0.1)"},{opacity:1,transform:"scale(0.7)"}],n),e.animate([{opacity:1,transform:"scale(0.1)"},{opacity:0,transform:"scale(0.7)"}],n).addEventListener("finish",()=>{e.remove()})}setMergedPrEntityDataItem(e){this.mergedPrEntity.setHighlightObject(e),this.openPrEntity.setHighlightIndex(-9999);const n=this.mergedPrEntity.props.data[parseInt(e.userData.dataIndex)];return n.type=ul,n}shouldShowOpenPrEntity(e){return e>=this.visibleIndex-this.maxIndexDistance&&e<=this.visibleIndex+this.maxIndexDistance}setOpenPrEntityDataItem(e){this.openPrEntity.setHighlightIndex(e),this.mergedPrEntity.resetHighlight();const n=this.openPrEntity.props.data[e];return n.type=hl,n}dispose(){this.stopUpdating(),this.removeListeners(),Ct.off(Si,this.handlePause),Ct.off(Ei,this.handleResume),this.renderer&&this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),this.controls&&this.controls.dispose(),this.globe&&this.globe.dispose(),this.openPrEntity&&this.openPrEntity.dispose(),this.mergedPrEntity&&this.mergedPrEntity.dispose(),this.dataInfo&&this.dataInfo.dispose(),this.scene=null,this.camera=null,this.renderer=null,this.parentContainer=null,this.container=null,this.clock=null,this.mouse=null,this.mouseScreenPos=null,this.raycaster=null,this.paused=null,this.radius=null,this.light0=null,this.light1=null,this.light2=null,this.light3=null,this.shadowPoint=null,this.highlightPoint=null,this.frontPoint=null,this.globe=null,this.dragging=null,this.rotationSpeed=null,this.raycastIndex=null,this.raycastTrigger=null,this.raycastTargets=null,this.intersectTests=null,this.controls=null,this.maxAmount=null,this.maxIndexDistance=null,this.indexIncrementSpeed=null,this.visibleIndex=null,this.openPrEntity=null}}class Kh{constructor(){this.reset()}reset(){clearInterval(this.interval),this.loadInfo={},this.assets={}}load(e,n){return this.reset(),this.progressCallback=n,new Promise(i=>{if(!e.length)return void i(null);const r=[];e.forEach(s=>{Object.prototype.toString.call(s.url)!=="[object Array]"&&(s.url.indexOf(".png")>-1||s.url.indexOf(".jpg")>-1||s.url.indexOf(".jpeg")>-1||s.url.indexOf(".gif")>-1?(this.assets.textures=this.assets.textures||{},r.push(this.loadTexture(s))):s.url.indexOf(".json")>-1&&s.type===0&&(this.assets.data=this.assets.data||{},r.push(this.loadData(s))))}),this.interval=setInterval(this.update,1e3/30),Promise.all(r).then(()=>{i({assets:this.assets,loader:this})})})}loadData(e){this.loadInfo[e.id]={loaded:0,total:0};const n=new XMLHttpRequest;let i=!1;return new Promise((r,s)=>{const o=()=>{i=!0,this.assets.data[e.id]=null,this.loadInfo[e.id].loaded=this.loadInfo[e.id].total=1,s(new Error("loadData error"))};n.addEventListener("progress",a=>{this.loadInfo[e.id].loaded=a.loaded,this.loadInfo[e.id].total=a.total}),n.overrideMimeType("application/json"),n.open("GET",e.url,!0),n.onreadystatechange=()=>{n.readyState===4&&n.status===200?(this.assets.data[e.id]=JSON.parse(n.responseText),this.loadInfo[e.id].loaded=this.loadInfo[e.id].total,r(this.assets.data[e.id])):n.status!==404||i||o()},n.onerror=o,n.send()})}loadTexture(e){const n=new jr;return this.loadInfo[e.id]={loaded:0,total:0},new Promise((i,r)=>{n.load(e.url,s=>{this.loadInfo[e.id].loaded=this.loadInfo[e.id].total,this.assets.textures[e.id]=s,i()},s=>{this.loadInfo[e.id].loaded=s.loaded,this.loadInfo[e.id].total=s.total},s=>{r(s)})})}update(){if(typeof this.progressCallback=="function"){let e=0,n=0;for(const i in this.loadInfo)this.loadInfo[i].loaded&&(e+=this.loadInfo[i].loaded),this.loadInfo[i].total&&(n+=this.loadInfo[i].total);this.progressCallback&&this.progressCallback(e,n)}}dispose(){clearInterval(this.interval),this.interval=null,this.loadInfo=null,this.assets=null,this.progressCallback=null}}async function vl(t=""){const e=await fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}});if(e.status!==200)throw new Error(`WebGL Globe: Failed to load data.json (status: ${e.status})`);return e.json()}class eu{constructor(e){this.init=this.init.bind(this),this.handleVisibilityChange=this.handleVisibilityChange.bind(this),function(n){for(const[i,r]of Object.entries(n))Ve[i]=r}(Pl({app:this,env:"production",imagePath:"images/",dataPath:"data/",isMobile:/iPhone|iPad|iPod|Android|BlackBerry|BB10/i.test(navigator.userAgent),pixelRatio:window.devicePixelRatio||1},e))}loadAssets(){const{basePath:e,imagePath:n}=Ve,i=[{url:`https://limitmatrix.com/static/webgl-globe/images/particle-diffuse.png`,id:"particleDiffuse"},{url:`https://limitmatrix.com/static/webgl-globe/images/map.png`,id:"worldMap"}],r=new Kh;return new Promise((s,o)=>{r.load(i).then(({assets:a})=>{s(a),r.dispose()}).catch(a=>o(a))})}async loadData(){try{const e=await vl(`https://limitmatrix.com/static/webgl-globe/data/data.json`);if(!e||e.length===0)throw new Error("WebGL Globe: data.json response was empty");return e}catch{return await this.loadFallbackData()}}async loadFallbackData(){try{const e=await vl(`${Ve.basePath}${Ve.dataPath}fallback.json`);if(!e||e.length===0)throw new Error("WebGL Globe: fallback.json response was empty");return e}catch(e){throw new Error(e)}}filterData(e){const n=[];for(let s=0;s<e.length;s++){const o=e[s],a=o.gop,l=o.gm;(a||l)&&(o.gop=a||l,o.gm=l||a,o.uol=o.uol||o.uml,o.uml=o.uml||o.uol,o.gop.lat&&o.gop.lon&&o.gm.lat&&o.gm.lon&&(o.oa||o.ma)&&n.splice(Math.floor(Math.random()*n.length),0,o))}const i=n.slice(n.length-60,n.length),r=n.slice(0,60);return i.concat(n,r)}trackPageVisibility(){let e,n;document.hidden!==void 0?(e="hidden",n="visibilitychange"):document.msHidden!==void 0?(e="msHidden",n="msvisibilitychange"):document.webkitHidden!==void 0&&(e="webkitHidden",n="webkitvisibilitychange"),this.documentHidden=e,this.visibilityChange=n,document.addEventListener(n,this.handleVisibilityChange,!1)}init(){return new Promise((e,n)=>{this.loadAssets().then(i=>{Ve.assets=i;const{parentNode:r=document.body}=Ve;this.loadData().then(s=>{Ve.data=this.filterData(s),this.webglController=new Qh(r),this.webglController.initDataObjects(Ve.data),this.webglController.transitionIn(1.5,.6),this.trackPageVisibility(),e()}).catch(s=>{ns(),n(s)})}).catch(i=>{n(i)})})}handleVisibilityChange(){document[this.documentHidden]?Ct.emit(Si):Ct.emit(Ei)}get renderer(){return this.webglController?this.webglController.renderer:null}get canvas(){return this.webglController?this.webglController.renderer.domElement:null}dispose(){document.removeEventListener(this.visibilityChange,this.handleVisibilityChange),this.webglController.dispose(),this.webglController=null,this.visibilityChange=null,this.documentHidden=null,Object.keys(Ve).forEach(e=>{delete Ve[e]})}}let mo;$(17),async function(){if(await(document.readyState==="interactive"||document.readyState==="complete"?Promise.resolve():new Promise(e=>{document.addEventListener("DOMContentLoaded",()=>{e()})})),mo=document.querySelector(".js-webgl-globe"),!mo)return;if(!function(){const e=document.createElement("canvas");return(e.getContext("webgl")||e.getContext("webgl2")||e.getContext("experimental-webgl"))instanceof WebGLRenderingContext}())return ns();const t=new eu({basePath:"../webgl-globe/",parentNode:mo,globeRadius:Kr,lineWidth:1.5,spikeRadius:.06});console.error(t),t.init().then(()=>{t.canvas.addEventListener("webglcontextlost",ns,!1)})}()}])})();
