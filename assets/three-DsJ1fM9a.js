import{W as pe,P as ue,S as _e,C as he,f as Z,g as fe,O as me,D as xe,h as ve,i as ee,M as K,j as te,k as T,B as ye,r as m,l as se,m as $e,o as v,n as y,p as o,q as k,s as z,t as be,H as h,F as oe,v as x,w as g,x as ge}from"./vendor-BhptFieL.js";let Y;function P({width:t=300,height:r=500,camer:s={pos:{x:0,y:0,z:5},rotate:{x:0,y:0,z:0}},cam_fov:l=25}){const d=new pe({antialias:!0});d.setSize(t,r),d.shadowMap.enabled=!0,d.shadowMap.type=ue;const n=new _e;n.background=new he(15198183);const a=new Z(l,t/r,.01,20);a.position.set(s.pos.x,s.pos.y,s.pos.z),a.rotation.x=s.rotate.x,a.rotation.y=s.rotate.y,a.rotation.z=s.rotate.z;const c=new Z(l,t/r,.01,20);c.position.set(s.pos.x,s.pos.y,s.pos.z),c.rotation.x=s.rotate.x,c.rotation.y=s.rotate.y,c.rotation.z=s.rotate.z;const p=new fe(c);n.add(c),n.add(p);const e=new me,u=new xe(16777215,3);u.castShadow=!0,u.position.set(0,0,0),u.lookAt(0,0,-1),e.add(u);function _(i){return[[i,0,0],[-i,0,0],[0,i,0],[0,-i,0],[i,i,0],[i,-i,0],[-i,i,0],[-i,-i,0]]}const S=[];_(.29).forEach(i=>{const f=new ve(16777215,1,10,1);f.position.set(i[0],i[1],0),f.lookAt(i[0],i[1],-1),f.castShadow=!0,f.shadow.mapSize.set(256,256),S.push(f)}),S.forEach(i=>{e.add(i)}),e.position.set(0,2,5),e.lookAt(0,0,0),n.add(e);const C=new ee(6,6),H=new K({side:te,emissive:0}),I=new T(C,H);I.position.set(0,0,-.36),n.add(I);const O=new ee(.92,1.6),L=new K({side:te,color:7637736,metalness:0,roughness:.5,ior:1.45,emissive:0}),M=new T(O,L);M.receiveShadow=!0,n.add(M);const B=new ye(.4,.4,.02),G=new K({metalness:0,emissive:0,transmission:.5,opacity:1}),b=new T(B,G);b.position.set(0,0,.4),b.castShadow=!0,n.add(b),Y=!0;function q(){d.render(n,a),Y&&requestAnimationFrame(q)}function N(){Y=!1}function F(i){b.position.z=i}return{renderer:d,scene:n,animate:q,setPos:F,stop:N}}const $=(t,r)=>{const s=t.__vccOpts||t;for(const[l,d]of r)s[l]=d;return s},we={class:"views"},Pe={class:"bar"},ke={__name:"core",props:{initHeight:{type:Number,default:.4}},emits:["endClick"],setup(t,{emit:r}){const s=m(),l=m(),d=m(),n=m(),a=m(),c=m(),p=m(),e=t,{renderer:u,animate:_,setPos:S,stop:C}=P({width:300,height:600,cam_fov:17}),{renderer:H,animate:I,setPos:O,stop:L}=P({width:400,height:300,camer:{pos:{x:2,y:-2,z:1.8},rotate:{x:Math.PI/3.5,y:Math.PI/4.7,z:Math.PI/8}},cam_fov:15}),{renderer:M,animate:B,setPos:G,stop:b}=P({width:400,height:300,camer:{pos:{x:2,y:-2,z:1.8},rotate:{x:Math.PI/3.5,y:Math.PI/4.7,z:Math.PI/8}},cam_fov:15}),{renderer:q,animate:N,setPos:F,stop:i}=P({width:400,height:300,camer:{pos:{x:2,y:-2,z:1.8},rotate:{x:Math.PI/3.5,y:Math.PI/4.7,z:Math.PI/8}},cam_fov:15}),{renderer:f,animate:ne,setPos:ie,stop:ae}=P({width:400,height:300,camer:{pos:{x:2,y:-2,z:1.8},rotate:{x:Math.PI/3.5,y:Math.PI/4.7,z:Math.PI/8}},cam_fov:15}),Q=[],ce=A=>{const X=s.value.clientHeight,le=s.value.offsetTop,E=.02,D=1-(A.y-le)/X,j=D*(.4-E)+E;l.value.style.top=`${600*(1-D)}px`,l.value.style.height=`${600*D}px`;const w=j<E?E:j>1?1:j;Q.push([w,performance.now()]),O(w),G(w),F(w),ie(w)},re=r,de=A=>{re("endClick",Q)};return se(()=>{S(e.initHeight),d.value.appendChild(u.domElement),n.value.appendChild(H.domElement),a.value.appendChild(M.domElement),c.value.appendChild(q.domElement),p.value.appendChild(f.domElement),_(),I(),B(),N(),ne()}),$e(()=>{C(),L(),b(),i(),ae()}),(A,X)=>(v(),y("div",{ref_key:"dom",ref:s,class:"box-layout",onMousemove:ce,onClick:de},[o("div",{ref_key:"dom1",ref:d,id:"content1"},null,512),o("div",we,[o("div",{ref_key:"dom2",ref:n,id:"content2"},null,512),o("div",{ref_key:"dom3",ref:a,id:"content2"},null,512),o("div",{ref_key:"dom4",ref:c,id:"content2"},null,512),o("div",{ref_key:"dom5",ref:p,id:"content2"},null,512)]),o("div",Pe,[o("div",{ref_key:"bar",ref:l,class:"process"},null,512)])],544))}},ze=$(ke,[["__scopeId","data-v-62bd5a88"]]);function Se(t,r=!1){let s='<div class="tBox">',l=[],d=(e,u,_=0)=>(_&&(e=`${e}-${_}`),u.indexOf(e)>=0?d(e,u,_+1):e),n="margin: 0 11px 0 10px;",a,c=0;return t.forEach(e=>{switch(c=e.prefix&&e.prefix.length>c?e.prefix.length:c,e.type){case"radio":a=d(e.name,l),l.push(a),s+=`<div class="para">
                    <div cc>${e.prefix?e.prefix:""}</div><div class="${e.align?e.align:"col"}">`,e.choose.forEach((u,_)=>{s+=`<div><label>
                    <input type=radio ${e.required?"required":""} name=${a} value="${_}" style="${n}" />
                    ${u}
                    </label></div>`}),s+="</div></div>";break;case"number":a=d(e.name,l),l.push(a),s+=`
                <div class="para">
                    <div cc>${e.prefix?e.prefix:""}</div>
                    <input size=${e.size} type=number ${e.required?"required":""} name=${a} style="${n}" />${e.suffix?e.suffix:""}
                </div>
                `;break;case"text":a=d(e.name,l),l.push(a),s+=`
                <div class="para">
                    <div cc>${e.prefix?e.prefix:""}</div>
                    <input size=${e.size} type=text ${e.required?"required":""} name=${a} style="${n}" />${e.suffix?e.suffix:""}
                </div>
                    `;break}}),s+="</div>",`${`
<style>
.tBox {
    text-align: left;
    font-size: 20px;
    height: 500px;
    overflow-x: auto;
}
p {
    margin: 0 0 0 166px;
    padding: 0;
}
[type="text"]{
    font-size: 20px;
    line-height: 1.8em;
}
.para {
    margin: 20px 0 0 0;
    border-block-end: 1px solid white;
}
.para>div {
    vertical-align: top;
}
div[cc] {
    display: inline-block;
    width: ${c*(r?11:22)+20}px;
}
.col{
    display: inline-block;
}
.col>div{
    display: block;
}
.hor {
    display: inline-block;
}
.hor>div{
    display: inline-block;
}
</style>`} ${s}`}const Ie={},R=t=>(k("data-v-5cfd03f1"),t=t(),z(),t),Me={class:"instruction_total"},qe=R(()=>o("div",{class:"title"},"手机界面深度感知研究",-1)),Ee=R(()=>o("div",{class:"content"},[o("p",null,"您好！我们诚挚邀请您参与由中国科学院心理研究所主持的手机界面深度感知研究项目。本研究旨在探索通过调整阴影参数来优化深度感知的效果，从而提升手机界面设计的用户体验。"),o("p",null,"在本次研究中，您将有机会通过对比一系列精心设计的图片来评估不同深度感知效果。您的参与将为我们的科研工作提供重要数据支持，并且有助于推动中国高科技产业的发展。"),o("p",null,"我们承诺，研究过程中收集的所有信息将严格保密，并仅用于学术研究目的。")],-1)),Ce=R(()=>o("div",{class:"next"},"（如果您已完全理解上述内容，请按空格键进入第一部分）",-1)),He=[qe,Ee,Ce];function Oe(t,r){return v(),y("div",Me,He)}const Le=$(Ie,[["render",Oe],["__scopeId","data-v-5cfd03f1"]]),Be={},U=t=>(k("data-v-2e77cbef"),t=t(),z(),t),Ge={class:"instruction_total"},Ne=U(()=>o("div",{class:"title"},"【第一部分】手机界面深度的感知",-1)),Fe=U(()=>o("div",{class:"content"},[o("p",null,"在这一部分，您会看到一组图像。这些图像展示了正方形在不同的光源照射下产生的阴影，其中正方形可能与背景表面保持一定距离，或者紧贴背景表面。"),o("p",null,"您的任务是仔细观察这些阴影，并根据其特征来判断您是否能够感知到正方形和背景之间的深度差异。若您感知到了深度分离，请尝试估计正方形和背景之间的距离，并据此调整显示器右侧的标记，使其高度与您的估计相匹配。如果没有看到深度，则将其设置为零高度。在您完成深度匹配之后，请不要忘记对您的视觉美学体验进行评价。"),o("p",null,"请您放心，整个过程并无时间限制，您可以在任何时候按照自己的节奏来完成这项任务。")],-1)),Ae=U(()=>o("div",{class:"next"},"（如果您已完全理解上述内容，请按“空格键”开始练习）",-1)),De=[Ne,Fe,Ae];function je(t,r){return v(),y("div",Ge,De)}const Ke=$(Be,[["render",je],["__scopeId","data-v-2e77cbef"]]),Te={},W=t=>(k("data-v-bd13bfea"),t=t(),z(),t),Ye={class:"instruction_total"},Re=W(()=>o("div",{class:"title"},"【第二部分】个人基本信息收集",-1)),Ue=W(()=>o("div",{class:"content"},[o("p",null,"接下来，我们会搜集您关于手机使用情况的信息，请根据您的实际情况进行作答。")],-1)),We=W(()=>o("div",{class:"next"},"如果您已经理解，请按“空格键”进入作答",-1)),Je=[Re,Ue,We];function Ve(t,r){return v(),y("div",Ye,Je)}const Qe=$(Te,[["render",Ve],["__scopeId","data-v-bd13bfea"]]),Xe={},J=t=>(k("data-v-b0cb75cd"),t=t(),z(),t),Ze={class:"instruction_total"},et=J(()=>o("div",{class:"title"},"【练习阶段】",-1)),tt=J(()=>o("div",{class:"content"},[o("p",null,"接下来你将观看一系列图片。请仔细观察这些阴影，并根据其特征来判断您是否能够感知到正方形和背景之间的深度差异。")],-1)),ot=J(()=>o("div",{class:"next"},"（按空格键开始观看）",-1)),st=[et,tt,ot];function nt(t,r){return v(),y("div",Ze,st)}const it=$(Xe,[["render",nt],["__scopeId","data-v-b0cb75cd"]]),at={},V=t=>(k("data-v-b74ca883"),t=t(),z(),t),ct={class:"instruction_total"},rt=V(()=>o("div",{class:"title"},"【正式实验】",-1)),dt=V(()=>o("div",{class:"content"},[o("p",null,"接下来你将观看一系列图片。请仔细观察这些阴影，并根据其特征来判断您是否能够感知到正方形和背景之间的深度差异。")],-1)),lt=V(()=>o("div",{class:"next"},"（按空格键开始观看）",-1)),pt=[rt,dt,lt];function ut(t,r){return v(),y("div",ct,pt)}const _t=$(at,[["render",ut],["__scopeId","data-v-b74ca883"]]),ht={id:"exp"},ft={__name:"three",setup(t){const r=be({display_element:"exp",on_finish(){r.DOM_container.innerText="实验已结束，感谢您的参与"}}),s={type:h,choices:"NO_KEYS",stimulus:"<div style='font-size: 100px;'>+</div>",trial_duration:100},l={type:h,choices:" ",stimulus:"<div style='font-size: 32px;'>你可以休息一分钟！</div><div style='margin: 45px 0 0 0; font-size: 20px;'>（你也可以按空格键继续实验）</div>"},d={type:h,choices:["NO_KEYS"],stimulus:"<div id='box'></div>",on_load:()=>{const p=performance.now();x(g(ze,{initHeight:.4,onEndClick:e=>{x(null,document.querySelector("#box")),r.finishTrial({resp:e,start_time:p})}}),document.querySelector("#box"))}},n=[{timeline:[{type:h,choices:"NO_KEYS",stimulus:()=>"请用本地浏览器打开"}],conditional_function:()=>{var p=navigator.userAgent.toLowerCase();return p.match(/micromessenger/i)=="micromessenger"}}];n.push({type:oe,fullscreen_mode:!0,message:'<p style="margin: 0 0 53px 0;">欢迎参加本实验，请点击下方按钮进入全屏状态。</p>',button_label:"全屏进入实验"}),n.push({type:h,choices:[" "],stimulus:"<div id='box'></div>",on_load(){x(g(Le),document.querySelector("#box"))}}),n.push({type:h,choices:[" "],stimulus:"<div id='box'></div>",on_load(){x(g(Ke),document.querySelector("#box"))}}),n.push({type:h,choices:[" "],stimulus:"<div id='box'></div>",on_load(){x(g(it),document.querySelector("#box"))}},s,d),n.push({type:h,choices:[" "],stimulus:"<div id='box'></div>",on_load(){x(g(_t),document.querySelector("#box"))}});let a=1,c=0;return n.push({timeline:[{timeline:[s,d],loop_function(){return c+=1,c<26}},l],conditional_function(){return!0},loop_function(){return a+=1,c=0,a<=4}}),n.push({type:h,choices:[" "],stimulus:"<div id='box'></div>",on_load(){x(g(Qe),document.querySelector("#box"))}}),n.push({type:ge,html(){return Se([{size:4,type:"text",name:"age",required:!0,prefix:"您的年龄是"},{type:"radio",name:"gender",required:!0,choose:["男","女"],align:"col",prefix:"您的性别是"},{type:"radio",name:"education",required:!0,choose:["小学","中学","中专","大专","本科","硕士及以上"],align:"col",prefix:"您的最高学历"},{type:"radio",name:"phoneLicense",required:!0,choose:["是","否"],align:"col",prefix:"您是否使用过智能手机？"},{size:8,type:"text",name:"usePhoneTime",required:!0,prefix:"您的机龄是多久？"}])},button_label:"继续",on_finish(p){Object.keys(p.response).forEach((e,u)=>{p.response[e]})}}),n.push({type:oe,fullscreen_mode:!1}),se(()=>{r.run(n)}),(p,e)=>(v(),y("div",ht))}},xt=$(ft,[["__scopeId","data-v-fc173587"]]);export{xt as default};
