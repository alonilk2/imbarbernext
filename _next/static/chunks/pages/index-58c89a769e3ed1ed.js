(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{182:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>B});var i=t(7876),r=t(4232);let a=()=>{let[e,s]=(0,r.useState)({width:0,height:0}),t=()=>{s({width:window.innerWidth,height:window.innerHeight})};return(0,r.useLayoutEffect)(()=>(t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)),[]),e};var l=t(7746),n=t(890),o=t(2510);function c(){let e={container:{maxWidth:"800px",margin:"40px auto",padding:a().width<550?"0":"20px",fontFamily:"Arial, sans-serif",direction:"rtl",color:"#181a18",fontSize:"1.25rem"},paper:{backgroundColor:"#ffba5191",borderRadius:"8px",padding:"32px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)"},header:{color:"#181a18",textAlign:"center",marginBottom:"32px",fontSize:"28px",fontWeight:"bold"},formControl:{marginBottom:"24px",width:"100%"},label:{display:"block",marginBottom:"8px",fontWeight:"500"},textField:{width:"100%",padding:"12px",border:"1px solid #ccc",borderRadius:"4px",resize:"vertical",boxSizing:"border-box",backgroundColor:"white",color:"black"},radioGroup:{display:"flex",flexDirection:"row",gap:"24px"},radioLabel:{display:"flex",alignItems:"center",cursor:"pointer"},radio:{marginLeft:"8px",width:"18px",height:"18px",accentColor:"#181a18",backgroundColor:"white !important"},button:{backgroundColor:"#181a18",color:"white",border:"none",borderRadius:"4px",padding:"14px",fontWeight:"500",width:"100%",cursor:"pointer",marginTop:"16px",transition:"background-color 0.2s"},buttonHover:{backgroundColor:"#181a18"}},s=(0,r.useRef)({name:"",phone:"",email:"",satisfied:"",changeWhat:"",whyLiterature:"",whyImAcademy:"",futureVision:"",investmentUnderstanding:"",readyToCommit:"",startDate:""}),[t,c]=(0,r.useState)();async function d(e){e.preventDefault();try{console.log("ABC"),await l.Ay.sendForm("service_c0mdbl5","template_w3ffrb8",s.current,"ksha_y5zBwYyqOlzl"),c(!0)}catch(e){c(!1)}}return(0,i.jsx)("div",{style:e.container,children:(0,i.jsxs)("div",{style:e.paper,children:[(0,i.jsx)("h1",{style:e.header,children:"טופס הרשמה - IM Academy"}),(0,i.jsxs)("form",{onSubmit:d,ref:s,children:[(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsxs)("label",{style:e.label,children:["שם מלא",(0,i.jsx)("span",{color:"red",children:"*"}),": "]}),(0,i.jsx)("input",{required:!0,type:"text",name:"name",style:e.textField})]}),(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsxs)("label",{style:e.label,children:["פלאפון",(0,i.jsx)("span",{color:"red",children:"*"}),": "]}),(0,i.jsx)("input",{required:!0,type:"text",name:"phone",style:e.textField})]}),(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsxs)("label",{style:e.label,children:["אימייל",(0,i.jsx)("span",{color:"red",children:"*"}),": "]}),(0,i.jsx)("input",{required:!0,type:"text",name:"email",style:e.textField})]}),(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsx)("label",{style:e.label,children:"האם אתה מרוצה מהמצב שלך היום מבחינת עבודה, זמן פנוי ומשכורת?"}),(0,i.jsxs)("div",{style:e.radioGroup,children:[(0,i.jsxs)("label",{style:e.radioLabel,children:[(0,i.jsx)("input",{type:"radio",name:"satisfied",value:"כן",style:e.radio}),"כן"]}),(0,i.jsxs)("label",{style:e.radioLabel,children:[(0,i.jsx)("input",{type:"radio",name:"satisfied",value:"לא",style:e.radio}),"לא"]})]})]}),"לא"===s.current.satisfied&&(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsx)("label",{style:e.label,children:"מה היית רוצה לשנות?"}),(0,i.jsx)("textarea",{name:"changeWhat",style:e.textField,rows:"3"})]}),(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsx)("label",{style:e.label,children:"למה דווקא מקצוע הספרות מושך אותך? (מה גורם לך לחשוב שזה התחום שלך?)"}),(0,i.jsx)("textarea",{name:"whyLiterature",style:e.textField,rows:"3"})]}),(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsx)("label",{style:e.label,children:"מה משך אותך ב-IM Academy?"}),(0,i.jsx)("textarea",{name:"whyImAcademy",style:e.textField,rows:"3"})]}),(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsx)("label",{style:e.label,children:"איפה אתה רואה את עצמך בעוד שנה מהיום אם תתחיל איתנו עכשיו?"}),(0,i.jsx)("textarea",{name:"futureVision",style:e.textField,rows:"3"})]}),(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsx)("label",{style:e.label,children:'האם אתה מבין שזה תהליך השקעה בעצמך ולא "הוצאה"?'}),(0,i.jsxs)("div",{style:e.radioGroup,children:[(0,i.jsxs)("label",{style:e.radioLabel,children:[(0,i.jsx)("input",{type:"radio",name:"investmentUnderstanding",value:"כן",style:e.radio}),"כן"]}),(0,i.jsxs)("label",{style:e.radioLabel,children:[(0,i.jsx)("input",{type:"radio",name:"investmentUnderstanding",value:"לא",style:e.radio}),"לא"]})]})]}),(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsx)("label",{style:e.label,children:"האם אתה מוכן להתחייב לתהליך ולהשקיע בעצמך כדי להצליח?"}),(0,i.jsxs)("div",{style:e.radioGroup,children:[(0,i.jsxs)("label",{style:e.radioLabel,children:[(0,i.jsx)("input",{type:"radio",name:"readyToCommit",value:"כן",style:e.radio}),"כן"]}),(0,i.jsxs)("label",{style:e.radioLabel,children:[(0,i.jsx)("input",{type:"radio",name:"readyToCommit",value:"לא",style:e.radio}),"לא"]})]})]}),(0,i.jsxs)("div",{style:e.formControl,children:[(0,i.jsx)("label",{style:e.label,children:"במידה ונראה שאתה מתאים - מתי תהיה זמין להתחלת התהליך?"}),(0,i.jsxs)("div",{style:{...e.radioGroup,flexWrap:"wrap"},children:[(0,i.jsxs)("label",{style:e.radioLabel,children:[(0,i.jsx)("input",{type:"radio",name:"startDate",value:"מיידי",style:e.radio}),"מיידי"]}),(0,i.jsxs)("label",{style:e.radioLabel,children:[(0,i.jsx)("input",{type:"radio",name:"startDate",value:"תוך שבוע",style:e.radio}),"תוך שבוע"]}),(0,i.jsxs)("label",{style:e.radioLabel,children:[(0,i.jsx)("input",{type:"radio",name:"startDate",value:"תוך חודש",style:e.radio}),"תוך חודש"]})]})]}),(0,i.jsx)("button",{type:"submit",style:e.button,onMouseOver:s=>s.target.style.backgroundColor=e.buttonHover.backgroundColor,onMouseOut:s=>s.target.style.backgroundColor=e.button.backgroundColor,children:"שלח טופס"})]}),!0===t&&(0,i.jsx)(n.A,{open:!0===t,autoHideDuration:6e3,onClose:()=>c(),children:(0,i.jsx)(o.A,{onClose:()=>c(),severity:"success",sx:{width:"100%"},children:"האימייל נשלח בהצלחה!"})})]})})}let d=(0,r.forwardRef)(function(e,s){let[t,l]=(0,r.useState)("היי! אשמח לקבוע פגישה טלפונית כדי לקבל פרטים על האקדמיה");(0,r.useRef)();let{width:n}=a();return(0,i.jsxs)("section",{className:"contact-section",ref:s,children:[(0,i.jsxs)("div",{className:"right-pane",dir:"rtl",children:[(0,i.jsx)("h5",{children:"רוצה עוד פרטים?"}),(0,i.jsxs)("p",{className:"contact-text",children:["כתובתנו: ",(0,i.jsx)("br",{}),"רחוב יקינטון 3, הר יונה נוף הגליל 17500"]}),(0,i.jsx)("p",{className:"contact-text",children:"פלאפון: 052-7481028"}),(0,i.jsx)(c,{})]}),(0,i.jsx)("div",{className:"left-pane",children:n<520?(0,i.jsx)("img",{width:"100%",src:"https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&scale=2&zoom=18&size=500x600&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786",alt:"Map"}):(0,i.jsx)("img",{width:"100%",src:"https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&scale=2&zoom=17&size=500x1000&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786",alt:"Map"})})]})});function h(){return(0,i.jsxs)("footer",{className:"footer",children:[(0,i.jsx)("div",{className:"socials"}),(0,i.jsx)("p",{children:"כל הזכויות שמורות \xa9 Idan Mavlayev 2025"}),(0,i.jsxs)("a",{className:"abdev",href:"https://alondev.com/",children:[(0,i.jsx)("img",{src:"/assets/abdev.webp",alt:"ABdev",className:"abdev-img"}),(0,i.jsx)("span",{style:{color:"white",display:"flex",alignItems:"center",fontSize:12,margin:5,color:"rgba(255,255,255,0.4)",whiteSpace:"nowrap"},children:"Built by"})]})]})}var x=t(7773),m=t(1176);function j(e){let{review:s}=e,{author_name:t,text:r}=s;return(0,i.jsxs)("div",{className:"review-container",children:[(0,i.jsx)(m.A,{name:"text-feedback",value:5,readOnly:!0,precision:1}),(0,i.jsx)("p",{children:r}),(0,i.jsx)("p",{className:"name",children:t})]})}let p={slideshow:{position:"relative",width:"100%",margin:"0 auto",overflow:"hidden"},slidesContainer:{display:"flex",transition:"transform 0.5s ease-in-out",width:"200%"},nav:{position:"absolute",top:"50%",transform:"translateY(-50%)",backgroundColor:"rgba(255, 255, 255, 0.7)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",fontSize:"20px",zIndex:1},prevButton:{left:"10px"},nextButton:{right:"10px"},indicators:{display:"flex",justifyContent:"center",margin:"10px 0"},indicator:{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:"#ccc",margin:"0 5px",cursor:"pointer"},activeIndicator:{backgroundColor:"#333"}};function g(e){let{reviews:s}=e,[t,a]=(0,r.useState)(0),[l,n]=(0,r.useState)(!0),o=Math.max(0,s.length-4)-1,c=(0,r.useRef)(null),d=()=>{a(e=>e<=0?o:e-1)},h=e=>{a(e)};return(0,r.useEffect)(()=>(l&&(c.current=setInterval(()=>{d()},3e3)),()=>{c.current&&clearInterval(c.current)}),[l,t]),(0,i.jsxs)("div",{style:p.slideshow,onMouseEnter:()=>n(!1),onMouseLeave:()=>n(!0),children:[(0,i.jsx)("button",{onClick:()=>{a(e=>e>=o?0:e+1)},style:{...p.nav,...p.prevButton},children:">"}),(0,i.jsx)("button",{onClick:d,style:{...p.nav,...p.nextButton},children:"<"}),(0,i.jsx)("div",{style:{...p.slidesContainer,transform:"translateX(".concat(25*t,"%)")},children:null==s?void 0:s.map(e=>(0,i.jsx)(j,{review:e}))}),(0,i.jsx)("div",{style:p.indicators,children:Array.from({length:o+1}).map((e,s)=>(0,i.jsx)("div",{style:{...p.indicator,...s===t?p.activeIndicator:{}},onClick:()=>h(s)},s))})]})}var u=t(5072);function b(e){let{links:s={facebook:"https://www.facebook.com/idanbarber",instagram:"https://www.instagram.com/imbarber_academy",tiktok:"https://www.tiktok.com/@idan_mavlayev?lang=he-IL"},iconSize:t=24,containerStyle:r={},linkStyle:l={}}=e;a().width;let n={display:"flex",gap:"20px",...r},o={color:"#fff",textDecoration:"none",display:"flex",alignItems:"center",...l};return(0,i.jsxs)("div",{style:n,children:[(0,i.jsx)("a",{href:s.facebook,target:"_blank",rel:"noopener noreferrer",style:o,children:(0,i.jsx)(u.toy,{viewBox:"-5 -5 32 32",size:t,stroke:"black",strokeWidth:1})}),(0,i.jsx)("a",{href:s.instagram,target:"_blank",rel:"noopener noreferrer",style:o,children:(0,i.jsx)(u.rcE,{viewBox:"-5 -5 32 32",size:t,stroke:"black",strokeWidth:1})}),(0,i.jsx)("a",{href:s.tiktok,target:"_blank",rel:"noopener noreferrer",style:o,children:(0,i.jsx)(u.lhl,{viewBox:"-5 -5 32 32",size:t,stroke:"black",strokeWidth:1})})]})}t(806);let y=[{src:"/assets/images/IMG_2693.jpg",width:300,height:400},{src:"/assets/images/IMG_5753.jpg",width:300,height:400},{src:"/assets/images/IMG_6657.jpg",width:300,height:400},{src:"/assets/images/IMG_7135.jpg",width:300,height:400},{src:"/assets/images/IMG_7152.jpg",width:300,height:400},{src:"/assets/images/IMG_6661.jpg",width:4,height:6},{src:"/assets/images/IMG_6663.jpg",width:4,height:6},{src:"/assets/images/366422800_1577079526152606_7295038832287343510_n.jpg",width:300,height:400},{src:"/assets/images/367363791_6396963823686581_6020232073178473218_n.jpg",width:300,height:400},{src:"/assets/images/365973163_3611257245820627_9153701522228245834_n.jpg",width:300,height:400},{src:"/assets/images/366123880_957821968765001_4965962855025676254_n.jpg",width:300,height:400},{src:"/assets/images/IMG_1866-min.JPG",width:400,height:600},{src:"/assets/images/IMG_1881-min.jpg",width:400,height:600},{src:"/assets/images/IMG_1893-min.jpg",width:400,height:600},{src:"/assets/images/IMG_5107-min.jpg",width:400,height:600},{src:"/assets/images/IMG_5115-min.jpg",width:400,height:700},{src:"/assets/images/IMG_5116-min.jpg",width:400,height:700},{src:"/assets/images/IMG_5126-min.jpg",width:400,height:700},{src:"/assets/images/IMG_5127-min.jpg",width:400,height:700},{src:"/assets/images/IMG_5128-min.jpg",width:400,height:700},{src:"/assets/images/IMG_5129-min.jpg",width:400,height:700},{src:"/assets/images/IMG_2076-min.jpg",width:400,height:600},{src:"/assets/images/IMG_2080-min.jpg",width:400,height:600},{src:"/assets/images/IMG_2083-min.jpg",width:400,height:600},{src:"/assets/images/IMG_2092-min.jpg",width:400,height:600},{src:"/assets/images/IMG_2101-min.jpg",width:400,height:600},{src:"/assets/images/IMG_2132-min.jpg",width:400,height:600},{src:"/assets/images/IMG_2136-min.jpg",width:400,height:600},{src:"/assets/images/IMG_2161-min.jpg",width:400,height:600},{src:"/assets/images/IMG_2174-min.jpg",width:400,height:600},{src:"/assets/images/IMG_2182-min.jpg",width:400,height:600}],v=[{author_name:"יאיר גולדשטיין",text:"אווירה מדהימה, כשאתה נכנס אתה מרגיש כאילו אתה נכנס לבית מלון,ריח טוב, אווירה טובה, ישר מקבל חיוך מהספרים.\nברגע שאתה נכנס למספרה אתה מקבל הצעה לקפה/מים ועוד המון חטיפים ודברים מתוקים אחרים.\nהכל מתוקתק במספרה והניקיון זה החלק הכי טוב שם.\nממליץ בחום"},{author_name:"נחשון יזרייב",text:"המספרה הכי טובה בצפון בפער!!\nיחס אדיב שירותי, מקבלים אותך בחיוך,\nאתה מקבל יחס אישי, דיוק עד לפרטים הקטנים, אווירה טובה, מציעים לך שתייה וכל דבר שאתה רק צריך, נקי חיטוי על כל דבר\nאין מילים באמת ממליץ בחום לכולם!!!❤️"},{author_name:"שובל לוי",text:"יש אנשים שמבחינתם התספורת השבועית זה נטל,\nלא במקרה הזה.\nתענוג להגיע למספרת IM Barber כל פעם מחדש!\nאווירה כיפית ונעימה שגורמת לך להנות מכל תספורת!\nתספורות ברמה הגבוהה ביותר, צוות מקצועי וחזק!\nמומלץ בחום!!!"},{author_name:"Nicole Kestelman",text:"מספרה ברמה הכי גבוהה שיש!\nשירות, צוות מקצועי, מקום נקי עם אווירה טובה !!\nעידן הספר והמורה הכי מקצועיים בצפון, האקדמייה שלו מכשירה את התלמידים להיות ספרים ברמה הכי גבוהה שיש עוד מההתחלה. אקדמיה מספר 1 .\nמומלץ מאוד !!❤️"},{author_name:"ולריה גנדניק",text:"מספרה ברמה הכי גבוהה שיש,\nצוות ספרים שלא רק מוציאים עם תספורת קטלנית אלא גם מביאים יחס אישי מדהים ומה שבטוח שיוצאים גם עם תספורת וגם עם חיוך! מקום מתוקתק, יפה , נקי ואפילו קפה על חשבונם\uD83E\uDEE2 ללא ספק אחזור שוב!!!!!"},{author_name:"אורן לוי",text:"הגעתי למספרה של עידן אחרי המלצה מחבר, קיבלתי שירות מדהים, יחס אישי, תספורת ברמה גבוהה מאוד, אווירה טובה, מקום נקי ומסודר. ממליץ בחום!"},{author_name:"Rial Howari",text:"מספרה מס' 1 בצפון!! נוחות, יחס אדיב, מקצועיות וכל מה שאתם צריכים במקום אחד מקצועי. מבטיח תגיעו פעם אחת אתם תתאהבו במקום! חוזר ואומר מקצועיות ואמינות 100% ממליץ בחום!"},{author_name:"Tal Knyazev",text:"מקום נקי עם אווירה טובה, ספרים ואנשים מאוד חברותיים, שירות של בית מלון 5 כוכבים והכי חשוב ספרים הכי מקצועים שיש עם הרמה הכי גבוהה שיש אין מצב שלא תצאו עם חיוך על הפנים ועם התספורת הכי טובה שיש ממליץ בחום"}];function f(){let{width:e}=a();return(0,i.jsxs)("section",{className:"gallery",children:[(0,i.jsxs)("div",{className:"followus",children:[(0,i.jsx)("div",{className:"rectangle-yellow"}),(0,i.jsx)("div",{className:"rectangle-white"}),(0,i.jsx)("p",{className:"back",children:"יש מצב שאתה עוד לא עוקב?!"}),(0,i.jsx)("p",{className:"back-1",children:"יש מצב שאתה עוד לא עוקב?!"}),(0,i.jsx)("p",{className:"front",children:"יש מצב שאתה עוד לא עוקב?!"}),(0,i.jsx)("div",{className:"socialsrow-follow",children:(0,i.jsx)(b,{iconSize:48,linkStyle:{color:"#cc7a00"},containerStyle:{marginTop:"5%"}})})]}),(0,i.jsxs)("div",{className:"recommendation",children:[(0,i.jsx)("h2",{children:"לקוחות ממליצים:"}),(0,i.jsx)(g,{reviews:v})]}),(0,i.jsxs)("div",{className:"recommendation",children:[(0,i.jsx)("h2",{children:"הצצה לתהליך:"}),(0,i.jsx)(x.A,{photos:y,targetRowHeight:600})]})]})}let w=()=>{let[e,s]=(0,r.useState)(0),{width:t}=a(),l=t<550;(0,r.useEffect)(()=>{let e=()=>{s(window.scrollY)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let n=Math.min(e/200,1),o=20*Math.min(e/200,1),c=40*Math.min(e/200,1),d=20-8*Math.min(e/200,1);return(0,i.jsxs)("nav",{style:{position:"fixed",top:0,left:0,right:0,display:"flex",justifyContent:"space-between",alignItems:"center",padding:l?"".concat(d,"px 5%"):"".concat(d,"px 50px"),height:"".concat(90-o,"px"),backgroundColor:"rgba(0, 0, 0, ".concat(n,")"),color:"#fff",transition:"all 0.3s ease",zIndex:1e3,boxSizing:"border-box",flexDirection:"row-reverse"},children:[(0,i.jsx)("div",{style:{flex:1,display:"flex",justifyContent:"flex-end",paddingTop:"5px"},children:(0,i.jsx)("img",{style:{transition:"font-size 0.3s ease",width:"".concat(l?200:250-c,"px")},src:"/assets/logo.svg",alt:"logo"})}),(0,i.jsx)(b,{iconSize:32})]})};function N(e){let{contactRef:s}=e;return(0,i.jsxs)("header",{className:"App-header",children:[(0,i.jsxs)("video",{className:"video",loop:!0,autoPlay:!0,playsInline:!0,muted:!0,loading:"lazy",children:[(0,i.jsx)("source",{src:"/assets/1.webm",type:"video/webm"}),(0,i.jsx)("source",{src:"/assets/1.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,i.jsx)(w,{}),(0,i.jsx)("div",{className:"content App-logo-bg",children:(0,i.jsxs)("div",{className:"titles",children:[(0,i.jsxs)("div",{className:"row line-container",children:[(0,i.jsx)("div",{class:"circle"}),(0,i.jsx)("div",{class:"line"}),(0,i.jsx)("div",{className:"english-title",children:"IM.Barber's Academy"}),(0,i.jsx)("div",{class:"line"}),(0,i.jsx)("div",{class:"circle"})]}),(0,i.jsx)("h1",{className:"title",children:"האקדמיה לספרות"}),(0,i.jsx)("h2",{className:"subtitle",children:"להפוך כל ספר לאמן, כל תספורת ליצירת מופת – באקדמיה שבה הדיוק פוגש את הדמיון, והחזון הופך למקצוע."}),(0,i.jsxs)("div",{className:"buttons",children:[(0,i.jsx)("button",{onClick:()=>window.location.href="https://calmark.io/p/ff2yx",className:"appoint",children:"קביעת תור לתספורת"}),(0,i.jsx)("button",{onClick:()=>{s.current&&s.current.scrollIntoView({behavior:"smooth"})},className:"contact-btn",children:"לפרטים נוספים"})]})]})})]})}let k={container:{},fixedContainer:{height:900,overflow:"hidden"},fixedContainerMobile:{height:500,overflow:"hidden"},imageWrapper:{position:"relative",width:"100%",height:"100%"},image:{objectFit:"cover",width:"100%",height:"100%",transition:"transform 0.2s ease-out",transformOrigin:"center center"},overlay:{inset:0,display:"flex",alignItems:"center",justifyContent:"center"},textBox:{backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"24px",borderRadius:"8px",textAlign:"center",color:"white",maxWidth:"500px"},title:{fontSize:"1.75rem",fontWeight:"bold",marginBottom:"16px"},subtitle:{fontSize:"1.25rem"}};function I(e){let{imageSrc:s,imageAlt:t="תמונת רקע",minScale:l=1,maxScale:n=1.5,title:o="אפקט זום בגלילה",subtitle:c="גלול למטה כדי לראות את התמונה מתקרבת"}=e,[d,h]=(0,r.useState)(l),{width:x}=a(),m=()=>{let e=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight),s=n-l;h(Math.min(n,Math.max(l,l+e*s)))};(0,r.useEffect)(()=>(window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}),[]);let j={...k.image,transform:"scale(".concat(d,")")};return(0,i.jsx)("div",{style:k.container,children:(0,i.jsx)("div",{style:x<=550?k.fixedContainerMobile:k.fixedContainer,children:(0,i.jsxs)("div",{style:k.imageWrapper,children:[(0,i.jsx)("img",{src:s,alt:t,style:j}),(0,i.jsx)("div",{style:k.overlay,children:(0,i.jsxs)("div",{style:k.textBox,children:[(0,i.jsx)("h1",{style:k.title,children:o}),(0,i.jsx)("p",{style:k.subtitle,children:c})]})})]})})})}function _(){let[e,s]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{s(!0)},[]),e)?(0,i.jsxs)("section",{className:"first-section",children:[(0,i.jsx)("div",{className:"introduction"}),(0,i.jsxs)("div",{className:"video-container",children:[(0,i.jsxs)("div",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,i.jsx)("h2",{children:"העתיד שלך מתחיל כאן"}),(0,i.jsxs)("div",{className:"left-pane",children:[(0,i.jsxs)("p",{children:["חולם על קריירה מצליחה שתשנה לך את החיים?",(0,i.jsx)("br",{}),"זה הרגע לקחת צעד קדימה ולהצטרף לאקדמיה המובילה בתחום הברברינג בישראל.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"במסלול אינטנסיבי וממוקד של חודשיים בלבד, תקבל הכשרה מעשית ברמה הגבוהה ביותר,",(0,i.jsx)("br",{}),"תלמד מהמאסטרים של התחום, ותצא עם מקצוע מבוקש ויוקרתי לכל החיים.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"עשרות ספרים בוגרי האקדמיה שלנו כבר הפכו לעצמאיים ומובילים בענף.",(0,i.jsx)("br",{}),"עכשיו תורך!",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"הגיע הזמן לעשות את הצעד הראשון – הצטרף אלינו והפוך את התשוקה שלך לקריירה מצליחה!"})]}),(0,i.jsx)("button",{onClick:()=>{},className:"details-btn",children:"לקבלת פרטים נוספים"})]})]}),(0,i.jsx)("div",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center"},children:(0,i.jsxs)("video",{controls:!0,preload:"metadata",width:"480",height:"480",children:[(0,i.jsx)("source",{src:"/assets/Firstvideo.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})]}),(0,i.jsxs)("div",{className:"idan-container",children:[(0,i.jsx)("div",{className:"images",children:(0,i.jsx)(I,{imageSrc:"/assets/images/idan.jpg",maxScale:1.5,minScale:1})}),(0,i.jsxs)("div",{className:"text",children:[(0,i.jsxs)("div",{className:"title-first",children:["יש לנו נסיון של ",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"title-second",children:"מעל 100"}),(0,i.jsx)("span",{className:"title-second",children:"חניכים"})]}),(0,i.jsx)("div",{className:"first-p black",children:(0,i.jsxs)("p",{children:["שלום! אני עידן מבלייב, בעלים ומייסד של IM Barbershop Academy.",(0,i.jsx)("br",{}),"יזם, אמן ואיש עסקים.",(0,i.jsx)("br",{}),"את הדרך שלי התחלתי ב-2017 מתוך חזון להפוך את האקדמיה והמספרה שלי למובילות בתחום.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"במשך השנים הפכתי את המספרה שלי לאימפריה משגשגת בעיר שיש בה תחרות רבה, ואני לא רק מנהל – אני גם אחד שמבין את הדרך.",(0,i.jsx)("br",{}),"היום אני גאה במעל 100 ספרים שעברו את התהליך איתנו, ממתחילים ועד מנוסים, שיצרו תוצאות גדולות בעסק שלהם.",(0,i.jsx)("br",{}),"החזון שלי הוא להמשיך להוביל אתכם לתוצאות עוד יותר גדולות.",(0,i.jsx)("br",{}),"ואני מבטיח לכם – אני לא עוצר כאן!",(0,i.jsx)("br",{})]})})]})]}),(0,i.jsxs)("div",{className:"first-container",children:[(0,i.jsx)("div",{className:"images",children:(0,i.jsx)(I,{imageSrc:"/assets/images/intro-2.jpeg",maxScale:1.7,minScale:1})}),(0,i.jsxs)("div",{className:"text",children:[(0,i.jsxs)("div",{className:"title-first green",children:["ליווי אישי ומקצועי",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"title-second",children:"שיתמוך בכם"}),(0,i.jsx)("span",{className:"title-second",children:"בדרך"})]}),(0,i.jsx)("div",{className:"second-p",children:(0,i.jsxs)("p",{children:["ההצלחה של התלמידים שלנו היא לא רק יעד, היא שליחות.",(0,i.jsx)("br",{}),"אנחנו מבטיחים להעניק לכל תלמיד שעובר איתנו את התהליך את הכלים, הידע והניסיון שלנו כדי להבטיח את הצלחתו.",(0,i.jsx)("br",{}),"הדרך להצלחה דורשת עבודה קשה, השקעה, ולא מעט אמונה עצמית.",(0,i.jsx)("br",{}),"אנחנו כאן, בכל רגע, עם הליווי האישי, המקצועי והעסקי שיתמוך בכם בדרך."]})}),(0,i.jsx)("button",{onClick:()=>{},className:"details-btn",children:"לקבלת פרטים נוספים"})]})]}),(0,i.jsxs)("div",{className:"second-container",children:[(0,i.jsx)("div",{className:"images",children:(0,i.jsx)(I,{imageSrc:"/assets/images/intro-1.jpeg",maxScale:1.7,minScale:1})}),(0,i.jsxs)("div",{className:"text",children:[(0,i.jsxs)("div",{className:"title-first",children:["הדרך להצלחה שלך",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"title-second",children:"מתחילה כאן"})]}),(0,i.jsx)("div",{className:"second-p",children:(0,i.jsxs)("p",{children:["הדרך של ספר מתחיל לא תמיד קלה.",(0,i.jsx)("br",{}),"היא דורשת התמדה, סבלנות, ומעל הכל – רצון אמיתי להצליח ולהתפתח.",(0,i.jsx)("br",{}),"אנחנו לא עוזבים אתכם ברגעים הקשים, אנחנו פה כדי לבנות אתכם, להאמין בכם, ולהוביל אתכם לניצחון.",(0,i.jsx)("br",{}),"זה לא קורה ביום אחד, אבל יום אחד זה יקרה, וביחד נביא אתכם אל המקום שאתם שואפים אליו.",(0,i.jsx)("br",{}),"הדרך להצלחה שלכם מתחילה כאן, איתנו, ב-IM Barbershop Academy.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("button",{onClick:()=>{},className:"details-btn-dark",children:"לקבלת פרטים נוספים"})]})]}),(0,i.jsxs)("div",{className:"first-container",style:{padding:"5% 0"},children:[(0,i.jsx)("div",{className:"images",children:(0,i.jsx)("div",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center"},children:(0,i.jsxs)("video",{controls:!0,preload:"metadata",width:"480",height:"480",children:[(0,i.jsx)("source",{src:"/assets/early.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})}),(0,i.jsxs)("div",{className:"text",children:[(0,i.jsxs)("div",{className:"title-first green",children:["חושבים שמאוחר מדי?",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"title-second",children:"או בכלל מוקדם מדי?"})]}),(0,i.jsx)("div",{className:"second-p",children:(0,i.jsx)("p",{children:"תצפו בקטע קצר מאחד השיעורים אצלנו באקדמיה, ותבינו שהכל אפשרי."})}),(0,i.jsx)("button",{onClick:()=>{},className:"details-btn",children:"לקבלת פרטים נוספים"})]})]}),(0,i.jsxs)("div",{className:"second-container",style:{padding:"5% 0"},children:[(0,i.jsx)("div",{className:"images",children:(0,i.jsx)("div",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center"},children:(0,i.jsxs)("video",{controls:!0,preload:"metadata",width:"480",height:"480",children:[(0,i.jsx)("source",{src:"/assets/baha.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})}),(0,i.jsxs)("div",{className:"text",children:[(0,i.jsxs)("div",{className:"title-first",children:["כבר למדת משהו בעבר",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"title-second",children:"ועדיין לא מרגיש הבוס של עצמך?"})]}),(0,i.jsx)("div",{className:"second-p",children:(0,i.jsx)("p",{children:"בוא ותראה מה יש לבהא בוגר האקדמייה שלנו לומר!"})}),(0,i.jsx)("button",{onClick:()=>{},className:"details-btn-dark",children:"לקבלת פרטים נוספים"})]})]})]}):(0,i.jsx)(i.Fragment,{})}var C=t(7455);function M(e){let{courseType:s,lessonsCount:t,equipType:r}=e;return(0,i.jsxs)("div",{className:"courseheader",children:[(0,i.jsx)("div",{className:"courseheader-column",children:(0,i.jsxs)("p",{className:"courseheader-column-title-large light-brown",style:"קורס אינטנסיבי"===s?{transform:"translateX(-5%)"}:null,children:[s,"קורס אינטנסיבי"===s&&(0,i.jsx)("span",{className:"recommended",children:"(מומלץ)"})]})}),(0,i.jsx)(C.A,{orientation:"vertical",flexItem:!0,light:!0,className:"divider-brown"}),(0,i.jsxs)("div",{className:"courseheader-column",children:[(0,i.jsx)("p",{className:"courseheader-column-number silver",children:t}),(0,i.jsx)("p",{className:"courseheader-column-title silver",children:"שיעורים מקיפים"})]}),(0,i.jsx)(C.A,{orientation:"vertical",flexItem:!0,light:!0,className:"divider-brown"}),(0,i.jsx)("div",{className:"courseheader-column",children:"ציוד מתקדם"===r?(0,i.jsx)("p",{className:"courseheader-column-title-large cherry",children:r}):(0,i.jsx)("p",{className:"courseheader-column-title-large silver",children:r})})]})}function S(){return(0,i.jsxs)("section",{className:"third-section",children:[(0,i.jsx)("div",{className:"rounded-outline"}),(0,i.jsx)("div",{className:"brush",children:(0,i.jsx)("h2",{className:"courses-title",children:"מסלולים"})}),(0,i.jsx)(M,{courseType:"קורס קבוצתי",lessonsCount:8,equipType:"ציוד מתקדם"}),(0,i.jsx)("div",{className:"course-container",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"יחס אישי של מדריכי האקדמיה."}),(0,i.jsx)("li",{children:"עד חמישה תלמידים בשיעור."}),(0,i.jsx)("li",{children:"ציורי ראש - איך להפוך כל פנס רגיל לאומנות."}),(0,i.jsx)("li",{children:"עבודת מספריים - זווית גזירה, התאמת גזירה לסוג התספורת."}),(0,i.jsx)("li",{children:"אפשרות לפיתוח עתידי וכניסת עבודה במספרה."}),(0,i.jsx)("li",{children:"עבודה עם תער - איך להתאים סוגי מסגרות לכל סוג תספורת."}),(0,i.jsx)("li",{children:"ציוד ברמה הגבוהה ביותר."}),(0,i.jsx)("li",{children:"התחייבות להצלחה שלכם במידה ועמדתם בכל המטלות שקיבלתם לבית!"}),(0,i.jsx)("li",{children:"תורת הזקן."}),(0,i.jsx)("li",{children:"מעסק קטן לאימפריה - הגדרת יעדים מדויקים, פעולות עסקיות, בידול, שיווק, מיינדסט מנצח ועוד!"}),(0,i.jsx)("li",{children:"תעודה שתוכיח לקהל הלקוחות שלכם שאתם מקצוענים עם תעודות"})]})}),(0,i.jsx)(M,{courseType:"אחד על אחד",lessonsCount:8,equipType:"ציוד מתקדם"}),(0,i.jsx)("div",{className:"course-container",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"יחס אישי של מדריך האקדמייה איתכם ב-4 עיניים!"}),(0,i.jsx)("li",{children:"ציורי ראש - איך להפוך כל פנס רגיל לאומנות."}),(0,i.jsx)("li",{children:"עבודת מספריים - זווית גזירה, התאמת גזירה לסוג התספורת."}),(0,i.jsx)("li",{children:"אפשרות לפיתוח עתידי וכניסת עבודה במספרה."}),(0,i.jsx)("li",{children:"עבודה עם תער - איך להתאים סוגי מסגרות לכל סוג תספורת."}),(0,i.jsx)("li",{children:"ציוד ברמה הגבוהה ביותר."}),(0,i.jsx)("li",{children:"התחייבות להצלחה שלך במידה ועמדת בכל המטלות שקיבלת לבית!"}),(0,i.jsx)("li",{children:"תורת הזקן."}),(0,i.jsx)("li",{children:"מעסק קטן לאימפריה - הגדרת יעדים מדויקים, פעולות עסקיות, בידול, שיווק, מיינדסט מנצח ועוד!"}),(0,i.jsx)("li",{children:"תעודה שתוכיח לקהל הלקוחות שלכם שאתם מקצוענים עם תעודות"}),(0,i.jsx)("li",{children:"אנטומיית הדירוג ואנטומייה כללית."})]})})]})}var G=t(7328),z=t.n(G);function B(){let e=(0,r.useRef)(null);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(z(),{children:[(0,i.jsx)("title",{children:"IM.Barber - Academy and Barbershop - האקדמיה לספרות"}),(0,i.jsx)("meta",{name:"description",content:"ברוכים הבאים לIM.Barber - Academy & Barbershop, חנות המוצרים והאקדמיה לספרות של IM.Barber, מוצרים למספרות, שיער, מכונות תספורת'"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("meta",{property:"og:title",content:"IM.Barber - Academy & Barbershop"}),(0,i.jsx)("meta",{property:"og:image",content:"https://alonilk2.github.io/map1/logo-barber.png"}),(0,i.jsx)("meta",{property:"og:description",content:"ברוכים הבאים לIM.Barber - Academy & Barbershop, חנות המוצרים והאקדמיה לספרות של IM.Barber, מוצרים למספרות, שיער, מכונות תספורת"}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.imbarber.com"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap",rel:"stylesheet"}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",rel:"stylesheet"})]}),(0,i.jsxs)("div",{className:"App",children:[(0,i.jsx)(N,{contactRef:e}),(0,i.jsx)(_,{}),(0,i.jsx)(S,{}),(0,i.jsx)(d,{ref:e}),(0,i.jsx)(f,{}),(0,i.jsx)(h,{})]})]})}},2936:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(182)}])}},e=>{var s=s=>e(e.s=s);e.O(0,[710,564,636,593,792],()=>s(2936)),_N_E=e.O()}]);