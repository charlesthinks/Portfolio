(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(266)},117:function(e,t,a){},198:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(21),r=a.n(o),c=(a(117),a(6)),l=a(97),s=a.n(l),m=a(19),p=a(65),u=a.n(p),d=a(63),h=a.n(d),g=a(34),b=a.n(g),f=Object(c.createMuiTheme)({palette:{primary:{ligth:"#69696a",main:"#28282a",dark:"#1e1e1f"},secondary:{light:"#e3f2fd",main:"#2196f3",dark:"#0d47a1"},warning:{main:"#ffc071",dark:"#ffb25e"},error:{xLight:b.a[50],main:b.a[500],dark:b.a[700]},success:{xLight:u.a[50],dark:u.a[700]}},typography:{fontFamily:"'Work Sans', sans-serif",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:700,fontFamilySecondary:"'Roboto Condensed', sans-serif",useNextVariants:!0}}),y={color:f.palette.text.primary,fontWeight:f.typography.fontWeightMedium,fontFamily:f.typography.fontFamilySecondary,textTransform:"uppercase"},v=Object(m.a)({},f,{palette:Object(m.a)({},f.palette,{background:Object(m.a)({},f.palette.background,{default:f.palette.common.white,placeholder:h.a[200]})}),typography:Object(m.a)({},f.typography,{fontHeader:y,h1:Object(m.a)({},f.typography.h1,y,{letterSpacing:0,fontSize:60}),h2:Object(m.a)({},f.typography.h2,y,{fontSize:48}),h3:Object(m.a)({},f.typography.h3,y,{fontSize:42}),h4:Object(m.a)({},f.typography.h4,y,{fontSize:36}),h5:Object(m.a)({},f.typography.h5,{fontSize:20,fontWeight:f.typography.fontWeightLight}),h6:Object(m.a)({},f.typography.h6,y,{fontSize:18}),subtitle1:Object(m.a)({},f.typography.subtitle1,{fontSize:18}),body1:Object(m.a)({},f.typography.body2,{fontWeight:f.typography.fontWeightRegular,fontSize:16}),body2:Object(m.a)({},f.typography.body1,{fontSize:14})})});var E=function(e){return function(t){return i.a.createElement(c.MuiThemeProvider,{theme:v},i.a.createElement(s.a,null),i.a.createElement(e,t))}},w=a(10),k=a(48),x=a.n(k),j=a(22),N=a(5),S=a.n(N),O=a(18);function C(e){return Math.round(1e4*e)/1e4}function B(e){var t,a=e.children,n=e.classes,o=e.className,r=e.component,c=e.fullHeight,l=e.fullWidth,s=e.margin,m=e.marginBottom,p=e.style,u=e.width,d=Object(j.a)(e,["children","classes","className","component","fullHeight","fullWidth","margin","marginBottom","style","width"]);return i.a.createElement(r,Object.assign({className:S()(n.root,(t={},Object(w.a)(t,n["width".concat(Object(O.capitalize)(u))],!l),Object(w.a)(t,n.fullHeight,c),Object(w.a)(t,n.margin,s),Object(w.a)(t,n.marginBottom,m),t),o),style:p},d),a)}B.defaultProps={component:"div",fullHeight:!1,fullWidth:!1,margin:!1,marginBottom:!1,width:"medium"};var I=Object(c.withStyles)(function(e){var t,a;return{margin:{margin:7*e.spacing.unit},marginBottom:{marginBottom:12*e.spacing.unit},widthSmall:Object(w.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(660+6*e.spacing.unit),{width:660,marginLeft:"auto",marginRight:"auto"}),widthMedium:Object(w.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(850+6*e.spacing.unit),{width:850,marginLeft:"auto",marginRight:"auto"}),widthLarge:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(w.a)(t,e.breakpoints.up("md"),{width:880,marginLeft:"auto",marginRight:"auto"}),Object(w.a)(t,e.breakpoints.up(C(880/.7777)),{width:"77.7777%"}),Object(w.a)(t,e.breakpoints.up(C(1400/.7777)),{width:1400}),t),widthXlarge:(a={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(w.a)(a,e.breakpoints.up("md"),{width:900,marginLeft:"auto",marginRight:"auto"}),Object(w.a)(a,e.breakpoints.up(C(1e3)),{width:"90%"}),Object(w.a)(a,e.breakpoints.up(C(2e3)),{width:1800}),a),widthFull:{width:"100%"},fullHeight:{height:"100%"}}})(B),T=a(47),z=a.n(T),L={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};function R(e){var t=e.children,a=e.classes,n=e.marked,o=e.variant,r=Object(j.a)(e,["children","classes","marked","variant"]);return i.a.createElement(z.a,Object.assign({headlineMapping:L,variant:o},r),t,n?i.a.createElement("span",{className:a["marked".concat(Object(O.capitalize)(o)+Object(O.capitalize)(n))]}):null)}R.defaultProps={marked:!1};var W=Object(c.withStyles)(function(e){return{markedH2Center:{height:4,width:73,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH3Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH4Center:{height:4,width:55,display:"block",margin:"".concat(e.spacing.unit,"px auto 0"),backgroundColor:e.palette.secondary.main},markedH6Left:{height:2,width:28,display:"block",marginTop:e.spacing.unit/2,background:"currentColor"}}})(R),D=a(20),M=a.n(D);var P=Object(c.withStyles)(function(e){var t;return{root:{marginTop:8*e.spacing.unit,marginBottom:4*e.spacing.unit},images:{marginTop:8*e.spacing.unit,display:"flex",flexWrap:"wrap"},imageWrapper:(t={position:"relative",display:"block",padding:0,borderRadius:0,height:"40vh"},Object(w.a)(t,e.breakpoints.down("sm"),{width:"100% !important",height:100}),Object(w.a)(t,"&:hover",{zIndex:1}),Object(w.a)(t,"&:hover $imageBackdrop",{opacity:.15}),Object(w.a)(t,"&:hover $imageMarked",{opacity:0}),Object(w.a)(t,"&:hover $imageTitle",{border:"4px solid currentColor"}),t),imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,background:e.palette.common.black,opacity:.5,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(2*e.spacing.unit,"px ").concat(4*e.spacing.unit,"px ").concat(e.spacing.unit+6,"px")},imageMarked:{height:3,width:18,background:e.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}})(function(e){var t=e.classes;return i.a.createElement(I,{className:t.root,component:"section",width:"large"},i.a.createElement(W,{variant:"h4",marked:"center",align:"center",component:"h2"},"Portfolio"),i.a.createElement("div",{className:t.images},[{url:"https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80",title:"Tour",width:"33.3%",link:"https://avrybrdly93.github.io/Tour/"},{url:"https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80",title:"BetterHealth",width:"33.3%",link:"http://better-health.herokuapp.com"},{url:"https://images.pexels.com/photos/1437863/pexels-photo-1437863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"Sublme",width:"33.4%",link:"http://sublme-music.herokuapp.com"},{url:"https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"Crystal Collector",width:"38%",link:"https://charlesthinks.github.io/unit-4-game/"},{url:"https://media2.giphy.com/media/3o6gbbuLW76jkt8vIc/source.gif",title:"Giphy AJAX",width:"38%",link:"https://charlesthinks.github.io/Giphy-AJAX/"},{url:"https://media.giphy.com/media/KQS3zjDesBGpO/giphy.gif",title:"Psychic Game",width:"24%",link:"https://charlesthinks.github.io/Psychic-Game/"},{url:"https://images.pexels.com/photos/532001/pexels-photo-532001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"BPOALA",width:"24%",link:"http://bpoala.org/"},{url:"https://images.pexels.com/photos/975668/pexels-photo-975668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"iWearByRaqui",width:"33.3%",link:"http://i-wearbyraqui.com/"},{url:"https://images.pexels.com/photos/346796/pexels-photo-346796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"Sheriff's Youth Foundation",width:"42.7%",link:"http://www.sheriffsyouthfoundation.org/"}].map(function(e){return i.a.createElement(x.a,{key:e.title,className:t.imageWrapper,style:{width:e.width},component:function(t){return i.a.createElement(M.a,Object.assign({},t,{href:e.link,target:"_blank",variant:"button"}))}},i.a.createElement("div",{className:t.imageSrc,style:{backgroundImage:"url(".concat(e.url,")")}}),i.a.createElement("div",{className:t.imageBackdrop}),i.a.createElement("div",{className:t.imageButton},i.a.createElement(W,{component:"h3",variant:"h6",color:"inherit",className:t.imageTitle},e.title,i.a.createElement("div",{className:t.imageMarked}))))})))}),F=a(50),H=a.n(F);var A=Object(c.withStyles)(function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:9*e.spacing.unit,marginBottom:9*e.spacing.unit},button:{border:"4px solid currentColor",borderRadius:0,height:"auto",padding:"".concat(2*e.spacing.unit,"px ").concat(5*e.spacing.unit,"px")},link:{marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit},buoy:{width:60}}})(function(e){var t=e.classes;return i.a.createElement(I,{className:t.root,component:"section"},i.a.createElement(H.a,{className:t.button,component:function(e){return i.a.createElement(M.a,Object.assign({},e,{href:"mailto:cduncan98@icloud.com",variant:"button"}))}},i.a.createElement(W,{variant:"h4",component:"span"},"Got any questions? Need help?")),i.a.createElement(W,{variant:"subtitle1",className:t.link},"I am here to help. Get in touch!"),i.a.createElement("i",{class:"fas fa-life-ring fa-4x"}))}),G=a(98),J=a.n(G),U=a(49),q=a.n(U),X=a(16),$=a.n(X);var Y=J()(q.a,Object(c.withStyles)(function(e){return{root:{display:"flex",backgroundColor:e.palette.secondary.light},layoutBody:{marginTop:8*e.spacing.unit,marginBottom:8*e.spacing.unit,display:"flex"},iconsWrapper:{height:120},icons:{display:"flex"},icon:{width:48,height:48,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:e.palette.warning.main,marginRight:e.spacing.unit,"&:hover":{backgroundColor:e.palette.warning.dark}},list:{margin:0,listStyle:"none",paddingLeft:0},listItem:{paddingTop:e.spacing.unit/2,paddingBottom:e.spacing.unit/2},language:{marginTop:e.spacing.unit,width:150}}}))(function(e){var t=e.classes;return i.a.createElement(W,{component:"footer",className:t.root},i.a.createElement(I,{className:t.layoutBody,width:"large"},i.a.createElement($.a,{container:!0,spacing:40},i.a.createElement($.a,{item:!0,xs:6,sm:4,md:2},i.a.createElement($.a,{container:!0,direction:"column",justify:"flex-end",className:t.iconsWrapper,spacing:16},i.a.createElement($.a,{item:!0,className:t.icons},i.a.createElement("a",{href:"https://linkedin.com/in/charlesthinks",className:t.icon,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),i.a.createElement("a",{href:"https://github.com/charlesthinks",className:t.icon,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-github fa-2x"}))),i.a.createElement($.a,{item:!0},"Made with"," ",i.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f"),"."))),i.a.createElement($.a,{item:!0,xs:6,sm:4,md:2},i.a.createElement(W,{variant:"h6",marked:"left",gutterBottom:!0},"Social"),i.a.createElement("ul",{className:t.list},i.a.createElement("li",{className:t.listItem},i.a.createElement(M.a,{href:"http://instagram.com/charlesthinks"},"Instagram")),i.a.createElement("li",{className:t.listItem},i.a.createElement(M.a,{href:"http://twitter.com/charlesthinks"},"Twitter")),i.a.createElement("li",{className:t.listItem},i.a.createElement(M.a,{href:"http://linkedin.com/in/charlesthinks"},"LinkedIn")),i.a.createElement("li",{className:t.listItem},i.a.createElement(M.a,{href:"http://github.com/charlesthinks"},"GitHub")))),i.a.createElement($.a,{item:!0,xs:6,sm:4,md:2},i.a.createElement(W,{variant:"h6",marked:"left",gutterBottom:!0},"Contact"),i.a.createElement("ul",{className:t.list},i.a.createElement("li",{className:t.listItem},i.a.createElement(M.a,{href:"mailto:cduncan98@icloud.com"},"Email")),i.a.createElement("li",{className:t.listItem},"Cell: (951) 268-0090"),i.a.createElement("li",{className:t.listItem},"Monday - Friday"),i.a.createElement("li",{className:t.listItem},"8AM - 10PM PST"))))))});var Q=Object(c.withStyles)(function(e){return{root:{borderRadius:0,fontWeight:e.typography.fontWeightMedium,fontFamily:e.typography.fontFamilySecondary,padding:"".concat(2*e.spacing.unit-1,"px ").concat(4*e.spacing.unit,"px"),fontSize:e.typography.pxToRem(14),boxShadow:"none","&:active, &:focus":{boxShadow:"none"}},sizeSmall:{padding:"".concat(e.spacing.unit,"px ").concat(3*e.spacing.unit,"px"),fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"".concat(3*e.spacing.unit-3,"px ").concat(6*e.spacing.unit,"px"),fontSize:e.typography.pxToRem(16)}}})(function(e){return i.a.createElement(H.a,e)});var _=Object(c.withStyles)(function(e){return{root:Object(w.a)({color:e.palette.common.white,position:"relative",display:"flex",alignItems:"center"},e.breakpoints.up("sm"),{height:"80vh",minHeight:500,maxHeight:1300}),layoutBody:{marginTop:3*e.spacing.unit,marginBottom:14*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center"},backdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.5,zIndex:-1},background:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundRepeat:"no-repeat",zIndex:-2},arrowDown:{position:"absolute",bottom:4*e.spacing.unit}}})(function(e){var t=e.backgroundClassName,a=e.children,n=e.classes;return i.a.createElement("section",{className:n.root},i.a.createElement(I,{className:n.layoutBody,width:"full"},a,i.a.createElement("div",{className:n.backdrop}),i.a.createElement("div",{className:S()(n.background,t)}),i.a.createElement("div",{className:n.arrowDown},i.a.createElement("i",{className:"fas fa-chevron-down"}))))}),K=(a(198),function(){var e=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return e.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,n=300-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout(function(){a.tick()},n)},window.onload=function(){for(var t=document.getElementsByClassName("txt-rotate"),a=0;a<t.length;a++){var n=t[a].getAttribute("data-rotate"),i=t[a].getAttribute("data-period");n&&new e(t[a],JSON.parse(n),i)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(o)},i.a.createElement("h1",null,"I am",i.a.createElement("span",{className:"txt-rotate","data-period":"2000","data-rotate":'[ " dedicated.", " diligent.", " genius.", " passionate.", " faithful." ]'}))}),V="https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";var Z=Object(c.withStyles)(function(e){return{background:{backgroundImage:"url(".concat(V,")"),backgroundColor:"#7fc7d9",backgroundPosition:"center"},button:{minWidth:200,textAlign:"center"},h5:Object(w.a)({marginBottom:4*e.spacing.unit,marginTop:4*e.spacing.unit},e.breakpoints.up("sm"),{marginTop:10*e.spacing.unit}),more:{marginTop:2*e.spacing.unit}}})(function(e){var t=e.classes;return i.a.createElement(_,{backgroundClassName:t.background},i.a.createElement("img",{style:{display:"none"},src:V,alt:""}),i.a.createElement(W,{color:"inherit",align:"center",variant:"caption",className:t.h5},i.a.createElement(K,null)),i.a.createElement(Q,{color:"secondary",variant:"contained",size:"large",className:t.button,component:function(e){return i.a.createElement(M.a,Object.assign({},e,{href:"mailto:cduncan98@icloud.com",variant:"button"}))}},"Contact"),i.a.createElement(W,{variant:"body2",color:"inherit",className:t.more},"Discover more"))});var ee=Object(c.withStyles)(function(e){return{root:{display:"flex",overflow:"hidden",backgroundColor:e.palette.secondary.light},layoutBody:{marginTop:10*e.spacing.unit,marginBottom:15*e.spacing.unit,position:"relative",display:"flex",flexDirection:"column",alignItems:"center"},item:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0px ".concat(5*e.spacing.unit,"px")},image:{height:55},title:{marginTop:5*e.spacing.unit,marginBottom:5*e.spacing.unit},mainTitle:{marginBottom:14*e.spacing.unit},curvyLines:{pointerEvents:"none",position:"absolute",top:-180}}})(function(e){var t=e.classes;return i.a.createElement("section",{className:t.root},i.a.createElement(I,{className:t.layoutBody,width:"large"},i.a.createElement("img",{src:"/static/themes/onepirate/productCurvyLines.png",className:t.curvyLines,alt:"curvy lines"}),i.a.createElement(W,{variant:"h4",marked:"center",className:t.mainTitle,component:"h2"},"About"),i.a.createElement("div",null,i.a.createElement($.a,{container:!0,spacing:40},i.a.createElement($.a,{item:!0,xs:12,md:4},i.a.createElement("div",{className:t.item},i.a.createElement("i",{class:"fas fa-graduation-cap fa-2x"}),i.a.createElement(W,{variant:"h6",className:t.title},"Coding Bootcamp"),i.a.createElement(W,{variant:"h5"},"Graduated from University of California, Riverside - Extension's Full Stack Coding BootCamp."))),i.a.createElement($.a,{item:!0,xs:12,md:4},i.a.createElement("div",{className:t.item},i.a.createElement("i",{class:"fas fa-code fa-2x"}),i.a.createElement(W,{variant:"h6",className:t.title},"Skills"),i.a.createElement(W,{variant:"h5"},"HTML5, CSS3, JavaScript, jQuery, React.js, AJAX, Git, Node.js, MongoDB, MySQL + more."))),i.a.createElement($.a,{item:!0,xs:12,md:4},i.a.createElement("div",{className:t.item},i.a.createElement("i",{class:"fas fa-palette fa-2x"}),i.a.createElement(W,{variant:"h6",className:t.title},"UI/UX Design"),i.a.createElement(W,{variant:"h5"},"I have 5 years Adobe Photoshop experience transitioning those skills into creating ","beautiful web applications.")))))))});var te=Object(c.withStyles)(function(e){return{root:{display:"flex",backgroundColor:e.palette.secondary.light,overflow:"hidden"},layoutBody:{marginTop:10*e.spacing.unit,marginBottom:15*e.spacing.unit,position:"relative",display:"flex",flexDirection:"column",alignItems:"center"},item:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0px ".concat(5*e.spacing.unit,"px")},title:{marginBottom:14*e.spacing.unit},number:{fontSize:24,fontFamily:e.typography.fontFamily,color:e.palette.secondary.main,fontWeight:e.typography.fontWeightMedium},image:{height:55,marginTop:4*e.spacing.unit,marginBottom:4*e.spacing.unit},curvyLines:{pointerEvents:"none",position:"absolute",top:-180,opacity:.7},button:{marginTop:8*e.spacing.unit}}})(function(e){var t=e.classes;return i.a.createElement("section",{className:t.root},i.a.createElement(I,{className:t.layoutBody,width:"large"},i.a.createElement("img",{src:"/static/themes/onepirate/productCurvyLines.png",className:t.curvyLines,alt:"curvy lines"}),i.a.createElement(W,{variant:"h4",marked:"center",className:t.title,component:"h2"},"Testimonials"),i.a.createElement("div",null,i.a.createElement($.a,{container:!0,spacing:40},i.a.createElement($.a,{item:!0,xs:12,md:6},i.a.createElement("div",{className:t.item},i.a.createElement(W,{variant:"body2",align:"center"},'"Charles Duncan, simply put, just has an eye for design. It is a rare gift. I\u2019ve had the honor of instructing Charles for 6 months, in an extremely challenging boot camp coding class. Above all, I was impressed not only with Charles\' natural affinity for design and development, but also his ability to create engaging and highly stylized web presences. His natural gift is a true asset for any positions requiring Full-Stack Development and comes with my heartfelt recommendation."'),i.a.createElement("br",null),i.a.createElement("div",{className:t.number},"Joe Tanksley"),i.a.createElement(W,{variant:"caption",className:t.job},"Senior Software Engineer - Front End (Media Services) / Instructor - FSF (UC - Riverside via Trilogy Ed)"))),i.a.createElement($.a,{item:!0,xs:12,md:6},i.a.createElement("div",{className:t.item},i.a.createElement(W,{variant:"body2",align:"center"},'"Exceptional UX talent. Charles demonstrated a natural ability to steer projects to adopting fluid and sensible UI. I believe he would be invaluable to any front-end web development teams."'),i.a.createElement("br",null),i.a.createElement("div",{className:t.number},"Hans Tang"),i.a.createElement(W,{variant:"caption",className:t.job},"Lead Web Developer at CRM TECH"))),i.a.createElement($.a,{item:!0,xs:12,md:6},i.a.createElement("div",{className:t.item},i.a.createElement(W,{variant:"body2",align:"center"},'"Charles is an extremely creative and conscientious person. He has great problem solving skills and is able to access a problem and develop a solution. As a leader, he is able to gain the trust of his teammates, incorporate different ideas and create a solution that meets requirements."'),i.a.createElement("br",null),i.a.createElement("div",{className:t.number},"Nolen Diggs"),i.a.createElement(W,{variant:"caption",className:t.job},"Full-Stack Developer an Independent Consultant"))),i.a.createElement($.a,{item:!0,xs:12,md:6},i.a.createElement("div",{className:t.item},i.a.createElement(W,{variant:"body2",align:"center"},'"Charles Duncan, can a natural talent for design that makes him a great Designer, UX/UI or Front-End Developer. I had a chance to work with Charles for six months in a Coding Bootcamp and supervising him designing three web applications. I am impressed that Charles can easily wireframe websites and design blueprint of web applications before actually developing it which makes the whole development process much easier and more efficient for the whole team. He is a great team player and can manage the front-end development team. If you want to develop an eye-catching application, I recommend you to add Charles to your team."'),i.a.createElement("br",null),i.a.createElement("div",{className:t.number},"Sean Roshan"),i.a.createElement(W,{variant:"caption",className:t.job},"Full-Stack Software Developer / Java Developer / Project Manager")))))))}),ae=a(99),ne=a(100),ie=a(110),oe=a(101),re=a(111),ce=a(107),le=a.n(ce),se=a(102),me=a.n(se);function pe(e){var t=e.classes,a=e.InputProps,n=(a=void 0===a?{}:a).classes,o=(n=void 0===n?{}:n).input,r=Object(j.a)(n,["input"]),c=Object(j.a)(a,["classes"]),l=e.InputLabelProps,s=e.noBorder,p=e.size,u=e.SelectProps,d=Object(j.a)(e,["classes","InputProps","InputLabelProps","noBorder","size","SelectProps"]);return i.a.createElement(me.a,Object.assign({InputProps:Object(m.a)({disableUnderline:!0,classes:Object(m.a)({root:t.root,input:S()(t.input,t["inputSize".concat(Object(O.capitalize)(p))],Object(w.a)({},t.inputBorder,!s),o),disabled:t.disabled},r)},c),InputLabelProps:Object(m.a)({},l,{shrink:!0,className:t.formLabel}),SelectProps:Object(m.a)({},u,{classes:{select:t.select,icon:t.selectIcon}})},d))}pe.defaultProps={noBorder:!1,size:"medium"};var ue=Object(c.withStyles)(function(e){return{root:{padding:0,"label + &":{marginTop:3*e.spacing.unit}},input:{minWidth:6*e.spacing.unit,backgroundColor:e.palette.common.white,"&$disabled":{backgroundColor:e.palette.divider}},inputBorder:{border:"1px solid #e9ddd0","&:focus":{borderColor:e.palette.secondary.main}},disabled:{},inputSizeSmall:{fontSize:14,padding:e.spacing.unit,width:"calc(100% - ".concat(2*e.spacing.unit,"px)")},inputSizeMedium:{fontSize:16,padding:2*e.spacing.unit,width:"calc(100% - ".concat(4*e.spacing.unit,"px)")},inputSizeLarge:{fontSize:18,padding:22,width:"calc(100% - ".concat(44,"px)")},inputSizeXlarge:{fontSize:20,padding:25,width:"calc(100% - ".concat(50,"px)")},formLabel:{fontSize:18},select:{height:"auto",borderRadius:0},selectIcon:{top:"50%",marginTop:-12}}})(pe),de=a(103),he=a.n(de),ge=a(64),be=a.n(ge),fe=a(106),ye=a.n(fe),ve=a(104),Ee=a.n(ve),we=a(105),ke=a.n(we);function xe(e){return i.a.createElement(be.a,Object.assign({},e,{direction:"down"}))}var je=Object(c.withStyles)(function(e){return{content:Object(w.a)({backgroundColor:e.palette.secondary.light,color:e.palette.text.primary,flexWrap:"inherit"},e.breakpoints.up("md"),{borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomRightRadius:4,borderBottomLeftRadius:4}),contentMessage:{fontSize:16,display:"flex",alignItems:"center"},contentAction:{paddingLeft:2*e.spacing.unit},info:{flexShrink:0,marginRight:2*e.spacing.unit},close:{padding:e.spacing.unit}}})(function(e){var t=e.classes,a=e.onClose,n=e.message,o=Object(j.a)(e,["classes","onClose","message"]);return i.a.createElement(he.a,Object.assign({anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:6e3,transition:xe,ContentProps:{"aria-describedby":"snackbar",classes:{root:t.content,message:t.contentMessage,action:t.contentAction}},message:i.a.createElement(i.a.Fragment,null,i.a.createElement(Ee.a,{className:t.info}),i.a.createElement("span",{id:"snackbar"},n)),action:[i.a.createElement(ke.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:a},i.a.createElement(ye.a,null))]},o))}),Ne=function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(ie.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(i)))).state={open:!1},a.handleSubmit=function(e){e.preventDefault(),a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a}return Object(re.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(I,{className:e.root,component:"section",width:"large"},i.a.createElement($.a,{container:!0,spacing:0},i.a.createElement($.a,{item:!0,xs:12,md:6,className:e.cardWrapper},i.a.createElement("div",{className:e.card},i.a.createElement("form",{onSubmit:this.handleSubmit,className:e.cardContent},i.a.createElement(W,{variant:"h2",component:"h2",gutterBottom:!0},"Get started"),i.a.createElement(W,{variant:"h5"},"Start building your beautiful site today."),i.a.createElement(ue,{noBorder:!0,className:e.textField,placeholder:"Your email"}),i.a.createElement(ue,{noBorder:!0,className:e.nameField,placeholder:"Your fullname"}),i.a.createElement(ue,{select:!0,SelectProps:{native:!0},className:e.nameField,placeholder:"Please select category..."},[{name:"eCommerce"},{name:"Business"},{name:"Personal"}].map(function(e){return i.a.createElement("option",{value:e.name,key:e.name},e.name)})),i.a.createElement(Q,{type:"submit",color:"primary",variant:"contained",className:e.button},"Get connected")))),i.a.createElement($.a,{item:!0,xs:12,md:6,className:e.imagesWrapper},i.a.createElement(le.a,{smDown:!0},i.a.createElement("div",{className:e.imageDots}),i.a.createElement("img",{src:"https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"call to action",className:e.image})))),i.a.createElement(je,{open:this.state.open,onClose:this.handleClose,message:"You will be emailed within 24 hours confirming your request."}))}}]),t}(i.a.Component),Se=Object(c.withStyles)(function(e){return{root:{marginTop:10*e.spacing.unit,marginBottom:0,display:"flex"},cardWrapper:{zIndex:1},card:{display:"flex",justifyContent:"center",backgroundColor:"#2196f3",padding:"".concat(8*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},cardContent:{maxWidth:400},textField:{width:"100%",marginTop:3*e.spacing.unit,marginBottom:2*e.spacing.unit},nameField:{width:"100%",marginBottom:2*e.spacing.unit},button:{width:"100%"},imagesWrapper:{position:"relative"},imageDots:{position:"absolute",top:-67,left:-67,right:0,bottom:0,width:"100%",background:"url(/static/onepirate/productCTAImageDots.png)"},image:{position:"absolute",top:-28,left:-28,right:0,bottom:0,width:"100%",maxWidth:600}}})(Ne),Oe=a(108),Ce=a.n(Oe);var Be=Object(c.withStyles)(function(e){return{root:{color:e.palette.common.white}}})(function(e){return i.a.createElement(Ce.a,Object.assign({elevation:0,position:"static"},e))}),Ie=a(109),Te=a.n(Ie),ze=function(e){return{root:Object(w.a)({height:64},e.breakpoints.up("sm"),{height:70})}};var Le=Object(c.withStyles)(ze)(function(e){return i.a.createElement(Te.a,e)});var Re=Object(c.withStyles)(function(e){return{title:{fontSize:24},placeholder:ze(e).root,toolbar:{justifyContent:"space-between"},left:{flex:1},leftLinkActive:{color:e.palette.common.white},right:{flex:1,display:"flex",justifyContent:"flex-end"},rightLink:{fontSize:16,color:e.palette.common.white,marginLeft:3*e.spacing.unit},linkSecondary:{color:e.palette.secondary.main}}})(function(e){var t=e.classes;return i.a.createElement("div",null,i.a.createElement(Be,{position:"fixed"},i.a.createElement(Le,{className:t.toolbar},i.a.createElement("div",{className:t.left}),i.a.createElement(M.a,{variant:"h6",underline:"none",color:"inherit",className:t.title,href:"/premium-themes/onepirate"},"charles duncan"),i.a.createElement("div",{className:t.right},i.a.createElement(M.a,{variant:"h6",underline:"none",className:S()(t.rightLink,t.linkSecondary),href:"mailto:cduncan98@icloud.com"},"Contact")))),i.a.createElement("div",{className:t.placeholder}))});var We=E(function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Re,null),i.a.createElement(Z,null),i.a.createElement(ee,null),i.a.createElement(P,null),i.a.createElement(te,null),i.a.createElement(Se,null),i.a.createElement(A,null),i.a.createElement(Y,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[112,1,2]]]);
//# sourceMappingURL=main.f72a46c7.chunk.js.map