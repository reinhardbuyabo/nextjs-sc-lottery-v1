        @media screen and (max-width: ${hr}) {
            font-size: ${vo-2}px;
        }

        @media screen and (max-width: ${pr}) {
            font-size: ${vo-4}px;
        }

        @media screen and (max-width: ${mr}) {
            font-size: ${vo-6}px;
        }

        @media screen and (max-width: ${gr}) {
            font-size: ${vo-8}px;
        }
    `,Mo=no`
        @media screen and (max-width: ${hr}) {
            font-size: ${bo-2}px;
        }

        @media screen and (max-width: ${pr}) {
            font-size: ${bo-4}px;
        }

        @media screen and (max-width: ${mr}) {
            font-size: ${bo-6}px;
        }
    `,So=no`
        @media screen and (max-width: ${hr}) {
            font-size: ${wo-2}px;
        }

        @media screen and (max-width: ${pr}) {
            font-size: ${wo-4}px;
        }

        @media screen and (max-width: ${mr}) {
            font-size: ${wo-6}px;
        }
    `,Eo=no`
        @media screen and (max-width: ${pr}) {
            font-size: ${_o-2}px;
        }

        @media screen and (max-width: ${mr}) {
            font-size: ${_o-4}px;
        }
    `,ko=no`
        @media screen and (max-width: ${mr}) {
            font-size: ${Co-2}px;
        }
    `,Ao=no`
    -webkit-font-smoothing: antialiased;
    color: ${cr.grey};
    fill: ${cr.grey};
    font-family: 'open-sans', sans-serif;
    font-size: ${vo}px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0;

    ${xo};
`,Lo=no`
    font-size: ${vo}px;
    line-height: 40px;
    letter-spacing: -0.75px;

    ${xo};
`,Oo=no`
    font-size: ${bo}px;
    line-height: 36px;

    ${Mo}
`,Po=no`
    font-size: ${wo}px;
    font-weight: 700;
    line-height: 32px;

    ${So}
`,Ro=no`
    font-size: ${_o}px;
    line-height: 28px;

    ${Eo}
`,To=no`
    font-size: ${Co}px;
    line-height: 25px;

    ${ko}
`,Io=no`
    font-family: IBM Plex Mono, 'Lucida Console', sans-serif;
    font-size: 16px;
    font-style: normal;
`,No=no`
    font-family: IBM Plex Mono, 'Lucida Console', monospace;
    font-size: 14px;
`,Fo=no`
    -webkit-font-smoothing: antialiased;
    color: ${cr.grey};
    fill: ${cr.grey};
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
`,Bo=Po,Do=Ro,Uo=To,jo=Ao,$o=Io,zo=No,Ho=Fo,qo=no`
    font-weight: 600;
`,Zo=no`
    font-weight: 700;
`,Vo=no`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
`,Go=no`
    ${Fo};
    font-weight: 600;
`,Wo=no`
    font-weight: 500;
`,Ko=no`
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', Tahoma, sans-serif;
`,Yo=no`
    border: none;
    box-sizing: border-box;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 0;
`,Jo=no`
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    outline: inherit;
    padding: 0;
`;yo.h1`
    ${Yo};
    ${jo};
    ${Lo}
    margin-bottom: 12px;

    &:empty {
        display: none;
    }
`,yo.h2`
    ${Yo};
    ${jo};
    ${Oo}
    margin-bottom: 12px;

    &:empty {
        display: none;
    }
`,yo.p`
    ${Yo};
    ${Ho};

    span {
        ${qo};
        color: ${cr.blue};
    }

    &:last-of-type {
        margin: 8px 0 16px;
    }
`;const Xo=We`
    background: ${cr.greenForestLight};
    color: ${cr.green};
`,Qo=We`
    background: ${cr.greenForestDark};
    color: ${cr.white};
`,ta=We`
    background: ${cr.redLight};
    color: ${cr.red};
`,ea=We`
    background: ${cr.redDark};
    color: ${cr.white};
`,ra=We`
    background: ${cr.blueSkyLight};
    color: ${cr.blueDark};
`,na=We`
    background: ${cr.grey};
    color: ${cr.white};
`,ia=We`
    background: ${cr.yellowLight};
    color: ${cr.yellow};
`,oa=We`
    background: ${cr.yellowDark};
    color: ${cr.white};
`,aa=We`
    background: ${cr.blueCloud};
    color: ${cr.blueSkyDark};
`,sa=We`
    background: ${cr.blueCloudDark};
    color: ${cr.white};
`,ua=We`
    background: ${cr.purpleLight};
    color: ${cr.purple};
`,la=We`
    background: ${cr.purpleDark};
    color: ${cr.white};
`;var ca={coloredBlue:aa,coloredBlueDark:sa,coloredGrayDark:na,coloredGreen:Xo,coloredGreenDark:Qo,coloredGrey:ra,coloredPink:We`
    background: ${cr.pinkLight};
    color: ${cr.pink};
`,coloredPinkDark:We`
    background: ${cr.pinkDark};
    color: ${cr.white};
`,coloredPurple:ua,coloredPurpleDark:la,coloredRed:ta,coloredRedDark:ea,coloredYellow:ia,coloredYellowDark:oa,coloredBlueLight:We`
    background: ${cr.blueLight3};
    color: ${cr.blue};
`};const fa=We`
    ${Yo}
    ${Ho}
    ${Zo};
    align-items: center;
    border-radius: 20px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    overflow: hidden;
    padding: 2px 20px;
    text-align: center;
    width: 100%;
`,da=We`
    background: ${cr.blueLight};
`,ha=We`
    background: ${cr.greenForestLight};
    color: ${cr.green};
    display: flex;

    svg {
        fill: ${cr.green};
        padding-right: 5px;
    }
`,pa=We`
    background: ${cr.blueLight};
`,ma=We`
    align-items: center;
    background: ${cr.green};
    border-radius: 30px;
    color: ${cr.white};
    display: flex;
    font-size: 12px;
    height: 32px;
    justify-content: center;
    padding: 0 4px;
    width: 32px;
`;var ga={activeStatus:ha,chips:We`
    align-items: center;
    background: ${cr.green};
    border-left: 5px solid;
    border-radius: 5px;
    color: ${cr.white};
    display: flex;
    font-size: 12px;
    height: 32px;
    justify-content: center;
    padding: 6px 12px;
    width: 32px;
`,discount:ma,inactiveStatus:pa,initialStyles:fa,regular:da};const{activeStatus:ya,discount:va,inactiveStatus:ba,initialStyles:wa,regular:_a,chips:Ca}=ga,{coloredBlue:xa,coloredBlueDark:Ma,coloredGrayDark:Sa,coloredGreen:Ea,coloredGreenDark:ka,coloredGrey:Aa,coloredPink:La,coloredPinkDark:Oa,coloredPurple:Pa,coloredPurpleDark:Ra,coloredRed:Ta,coloredRedDark:Ia,coloredYellow:Na,coloredYellowDark:Fa,coloredBlueLight:Ba}=ca,Da=lr.div`
    cursor: pointer;
    display: flex;
    margin-left: 8px;
    padding: auto;
    &:hover{
        svg{
            fill: ${cr.blue};
        }
    }
`,Ua=lr.div`
    ${wa}
    ${({active:t,theme:e})=>((t,e)=>{switch(t){case"status":return e?ya:ba;case"discount":return va;case"chips":return Ca;default:return _a}})(e,t)}
    ${({color:t,theme:e,tone:r})=>"status"!==e&&t&&((t,e)=>{switch(t){case"green":return"light"===e?Ea:ka;case"red":return"light"===e?Ta:Ia;case"yellow":return"light"===e?Na:Fa;case"blue":return"light"===e?xa:Ma;case"blueLight":return Ba;case"purple":return"light"===e?Pa:Ra;case"pink":return"light"===e?La:Oa;case"grey":return"light"===e?Aa:Sa;default:return Aa}})(t,r)}
    width: ${({width:t})=>t};

    ${({width:t,theme:e})=>"discount"===e&&Boolean(t)&&`height: ${t}; width: ${t}; border-radius: 50%;`};

    ${({theme:t,tone:e})=>"chips"===t&&"dark"===e&&"border: 0px;"};

    ${({fontSize:t})=>Boolean(t)&&`font-size: ${t}`};
`;var ja={SpanStyled:Da,TagStyled:Ua},$a={exports:{}},za={},Ha=i,qa=Symbol.for("react.element"),Za=Symbol.for("react.fragment"),Va=Object.prototype.hasOwnProperty,Ga=Ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wa={key:!0,ref:!0,__self:!0,__source:!0};function Ka(t,e,r){var n,i={},o=null,a=null;for(n in void 0!==r&&(o=""+r),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(a=e.ref),e)Va.call(e,n)&&!Wa.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:qa,type:t,key:o,ref:a,props:i,_owner:Ga.current}}za.Fragment=Za,za.jsx=Ka,za.jsxs=Ka,$a.exports=za;const Ya=$a.exports.jsx,Ja=$a.exports.jsxs,Xa=$a.exports.Fragment,{TagStyled:Qa,SpanStyled:ts}=ja,es=t=>{switch(t){case"blue":default:return cr.blue;case"red":return cr.red;case"green":return cr.green;case"yellow":return cr.yellow}},rs=lr.section`
  background-color: ${cr.white};
  border: 1px solid ${t=>es(t.theme)};
  border-radius: 20px;
  opacity: 0%;
  overflow: hidden;
  transition-delay: 0.3s;
  transition: opacity 0.3s ease-out;
`,ns=lr.header`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px 12px;

  &:hover {
    background-color: ${cr.paleBlue2};
  }
`,is=lr.h4`
  ${Yo}
  ${jo}
    ${Do}
    line-height: 1;
  padding: 8px 0;
`;var os={DivStyled:lr.div`
  align-items: center;
  display: flex;
  justify-content: center;

  p {
    ${Yo}
    ${Ho}
        margin: 0 6px;
    min-width: 100px;
    text-align: right;
  }

  svg {
    margin: 0 6px;
    min-width: 18px;
  }

  div {
    margin: 0 6px;
  }

  &:last-of-type {
    margin-left: auto;
  }
`,DivStyledContent:lr.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`,H4Styled:is,HeaderStyled:ns,SectionStyled:rs,getThemeColor:es};const{SectionStyled:as,HeaderStyled:ss,H4Styled:us,DivStyled:ls,DivStyledContent:cs,getThemeColor:fs}=os,ds=We`
    background-image: url(${t=>t.image});
    background-position: center;
    background-size: cover;
`;var hs={DivStyled:lr.div`
    background: radial-gradient(
        106.45% 108.64% at 32.33% -4.84%,
        #ecf5fc 0.52%,
        #cee4f3 100%
    );
    align-items: center;
    background: ${t=>t.avatarBackground};
    color: ${t=>t.textColor};
    display: flex;
    flex-direction: column;
    font-size: ${t=>t.fontSize}px;
    justify-content: center;
    overflow: hidden;
    position: static;
    text-transform: uppercase;
    word-break: break-all;
    ${t=>"image"===t.theme&&t.image&&ds};
    span {
        display: none;
    }
    &,
    & > svg {
        height: ${t=>t.size}px;
        width: ${t=>t.size}px;
        border-radius: ${t=>""+(t.isRounded?"50%":t.borderRadius?`${t.borderRadius}px`:"0px")};
    }
`,H4Styled:lr.h4`
    ${Do};
    ${Ko};
    ${Zo};
    ${Yo};
    color: ${t=>t.color};
    font-size: inherit;
`};const{DivStyled:ps,H4Styled:ms}=hs;var gs={DivStyled:lr.div`
    ${Yo}
    ${Ho}
    align-items: center;
    border-radius: 6px;
    display: flex;
    height: min-content;
    justify-content: center;
    overflow: hidden;
    padding: 4px 10px;
    width: min-content;
    background-color: ${({state:t="normal"})=>(t=>{switch(t){case"danger":return cr.red;case"success":return cr.green;case"warning":return cr.yellow;default:return cr.blue}})(t)};
`};const ys=lr.button`
  ${Jo};
  display: inline-block;
  vertical-align: sub;

  &:first-child {
    fill: ${cr.grey};
    transition: fill 0.2s ease-out;
  }

  &:hover > svg {
    fill: ${cr.blue};
  }
`,vs=({text:t,iconSize:e=24,onCopy:r=(()=>{}),revertIn:n=3e3,...o})=>{const[,a]=(()=>{const[t,e]=(0,i.useState)(null);return[t,async t=>{if(!(null==navigator?void 0:navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(r){return console.warn("Copy failed",r),e(null),!1}}]})(),[s,u]=(0,i.useState)(!1);return Ya(ys,{className:"input_copy","data-testid":"test-copy-button",iconSize:e,onClick:e=>{r(e),a(`${t}`),u(!0),setTimeout((()=>{u(!1)}),n)},...o,children:s?Ya(B,{title:"check icon",titleId:"copybutton check icon",fill:cr.green,fontSize:e}):Ya(U,{title:"copy icon",titleId:"copybutton copy icon",fill:cr.blue,fontSize:e})})},bs=We`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', Tahoma, Verdana, sans-serif;
`,ws=We`
    ${bs};
    color: ${cr.grey};
    fill: ${cr.grey};
    font-style: normal;
    letter-spacing: 0;
`,_s=We`
    ${bs};
    color: ${cr.blueDark};
    fill: ${cr.blueDark};
    font-style: normal;
    letter-spacing: 0;
`,Cs=We`
    ${_s};
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.75px;
    ${xo};
`,xs=We`
    ${_s};
    font-size: 32px;
    font-weight: 400;
    line-height: 36px;
    ${Mo}
`,Ms=We`
    ${_s};
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    ${So}
`,Ss=We`
    ${_s};
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    ${Eo}
`,Es=We`
    ${_s};
    font-weight: 600;
    color: ${cr.blueDark};
    fill: ${cr.blueDark};
    font-size: 18px;
    line-height: 24px;
`,ks=We`
    ${_s};
    font-weight: 600;
    color: ${cr.blueDark};
    fill: ${cr.blueDark};
    font-size: 16px;
    line-height: 24px;
`,As=We`
    ${ws};
    font-size: 14px;
    line-height: 24px;
`,Ls=We`
    ${ws};
    font-size: 12px;
    line-height: 1.5;
`,Os=We`
    ${ws};
    font-size: 10px;
    line-height: 1.5;
`,Ps=We`
    ${ws};
    font-size: 18px;
    line-height: 24px;
`,Rs=We`
    ${ws};
    font-size: 16px;
    line-height: 24px;
`,Ts=We`
    font-style: italic;
`,Is=We`
    font-family: 'IBM Plex Mono', 'Lucida Console', monospace;
`,Ns=t=>We`
    ${(t=>{switch(t){case"h1":return Cs;case"h2":return xs;case"h3":return Ms;case"h4":return Ss;case"subtitle1":return Es;case"subtitle2":return ks;case"body18":return Ps;case"body16":default:return Rs;case"caption14":return As;case"caption12":return Ls;case"caption10":return Os}})(t.variant||"body16")};
    ${(null==t?void 0:t.monospace)&&Is};
    ${(null==t?void 0:t.color)&&`color: ${t.color}`};
    ${(null==t?void 0:t.italic)&&Ts};
    ${(null==t?void 0:t.weight)&&(t=>{switch(t){case"regular":case"400":return We`
                font-weight: 400;
            `;case"medium":case"500":return We`
                font-weight: 500;
            `;case"semibold":case"600":return We`
                font-weight: 600;
            `;case"bold":case"700":return We`
                font-weight: 700;
            `;default:return We`
                font-weight: ${t};
            `}})(t.weight)};
`,{DivStyled:Fs}=(lr((({children:t,copyable:e,iconSize:r,italic:n,monospace:i,onCopy:o,variant:a="body16",...s})=>{const u=(t=>{switch(t){case"h1":return"h1";case"h2":case"subtitle1":case"subtitle2":return"h2";case"h3":return"h3";case"h4":return"h4";default:return"span"}})(a);return Ja(u,{"data-testid":"test-typography",...s,children:[t,e&&Ya(vs,{iconSize:r,onCopy:o,text:`${t}`})]})}))`
    ${t=>Ns(t)};
    margin: 0;
    position: relative;
`,gs),Bs=ur`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`,Ds=lr.div`
    ${Ho}
    display: flex;
    flex-direction: ${t=>"bottom"==t.direction?"column":"row"};
    align-items: center;
    justify-content: center;
    max-width: fit-content;
    text-align: center;
    & > span {
        color: ${t=>t.spinnerColor};
        font-weight: 500;
        font-size: ${t=>`${t.fontSize?t.fontSize:t.size&&t.size/2}px`};
        line-height: 5px;
        margin: 8px;
    }
`,Us=lr.div`
    width: ${t=>`${t.size}px`};
    height: ${t=>`${t.size}px`};
    box-sizing: border-box;
    border: 2px solid ${t=>t.spinnerColor};
    border-bottom: transparent;
    border-right: transparent;
    border-radius: 50%;
    animation: 1s ${Bs} infinite;
`,js=ur`
    from {height: 2px; width: 2px;}
    to {height: 7px;width: 7px;}
`,$s=lr.div`
    display: flex;
    justify-content: center;
    width: fit-content;

    span {
        align-items: center;
        display: flex;
        height: 10px;
        justify-content: center;
        width: 10px;

        &:before {
            animation-direction: alternate;
            animation-duration: 0.4s;
            animation-iteration-count: infinite;
            animation-name: ${js};
            background-color: ${t=>t.spinnerColor};
            border-radius: 50%;
            content: '';
            display: block;
        }

        &#anim-delay1:before {
            animation-delay: 0s;
        }
        &#anim-delay2:before {
            animation-delay: 0.1s;
        }
        &#anim-delay3:before {
            animation-delay: 0.2s;
        }
        &#anim-delay4:before {
            animation-delay: 0.3s;
        }
        &#anim-delay5:before {
            animation-delay: 0.4s;
        }
    }
`,zs=({direction:t="bottom",fontSize:e,size:r=20,spinnerColor:n=cr.white,spinnerType:i="loader",text:o,...a})=>Ja(Ds,{"data-testid":"test-loading",direction:t,fontSize:e,role:"spinner",size:r,spinnerColor:n,...a,children:["loader"==i?Ya(Us,{spinnerColor:n,size:r}):Ya(Hs,{size:r,spinnerColor:n}),o&&Ya("span",{children:o})]}),Hs=({size:t,spinnerColor:e,...r})=>Ja($s,{"aria-busy":"true","aria-label":"loading, please wait","data-testid":"test-loading",role:"alert",size:t,spinnerColor:e,...r,children:[Ya("span",{"aria-hidden":"true",id:"anim-delay1"}),Ya("span",{"aria-hidden":"true",id:"anim-delay2"}),Ya("span",{"aria-hidden":"true",id:"anim-delay3"}),Ya("span",{"aria-hidden":"true",id:"anim-delay4"}),Ya("span",{"aria-hidden":"true",id:"anim-delay5"})]}),qs=We`
    span {
        flex-direction: row-reverse;
    }
    svg {
        margin-right: 12px;
    }
`,Zs=We`
    span {
        flex-direction: row;
    }
    svg {
        margin-left: 12px;
    }
`,Vs=We`
    align-items: center;
    border-width: 0;
    display: flex;
    height: 32px;
    justify-content: center;
    padding: 0;
    width: 32px;
    text-indent: -99999px;
`;var Gs={getIconColor:t=>We`
        svg {
            fill: ${t};
        }
    `,getIconLayoutStyles:t=>{switch(t){case"trailing":return Zs;case"icon-only":return Vs;default:return qs}},largeIconResize:()=>We`
    border-width: 4px;
    height: 40px;
    width: 40px;
`,smallIconResize:()=>We`
    height: 24px;
    width: 24px;
`};const Ws=We`
    border-radius: 20px;
    font-size: 14px;
    padding: 0 16px;
`,Ks=We`
    font-size: 14px;
    padding: 2px 14px;
`,Ys=We`
    padding: 6px 22px;
`,Js=We`
    padding: 16px 24px;
`;var Xs={getSizeStyles:t=>{switch(t){case"large":return Ys;case"small":return Ws;case"xl":return Js;default:return Ks}}};var Qs={linkStyles:We`
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${cr.blue};
    padding: 0px;
    color: ${cr.blue};

    :active {
        border-width: 0px;
        border-bottom: 1px solid ${cr.blue};
    }

    :hover {
        color: ${cr.blueSkyDark};
        border-bottom: 1px solid ${cr.blueSkyDark};
    }

    svg {
        fill: ${cr.blue};
    }
`,textStyles:We`
    background-color: transparent;
    border-width: 0px;
    color: ${cr.blue};

    svg {
        fill: ${cr.blue};
    }
`,transparentStyles:We`
    background-color: transparent;
    border-color: transparent;
`};const{getIconColor:tu,getIconLayoutStyles:eu,largeIconResize:ru,smallIconResize:nu}=Gs,{getSizeStyles:iu}=Xs,{linkStyles:ou,textStyles:au,transparentStyles:su}=Qs;var uu={BaseButtonStyled:lr.button`
    ${Yo}
    ${Ho}
    align-items: center;
    background-origin: border-box;
    border-radius: ${({radius:t})=>t?`${t}px;`:"12px"};
    border: 2px solid transparent;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: center;
    overflow: hidden;
    padding: 2px 4px;
    position: relative;
    text-align: center;
    transition: all 0.2s ease;
    width: ${t=>t.isFullWidth?"100%":"fit-content"};

    :hover {
        background-color: ${dr("light",10)};
    }

    :focus {
        border-color: ${cr.blue};
    }

    :disabled {
        opacity: 50%;
        pointer-events: none;
    }

    span {
        align-items: center;
        display: flex;
        pointer-events: none;
        z-index: 1;
    }

    svg {
        pointer-events: none;
        z-index: 1;
    }

    // minor theme and props style corrections
    ${({isTransparent:t})=>t&&su}
    ${({theme:t,size:e})=>"link"!==t&&e&&iu(e)}
    ${({theme:t})=>"link"===t&&ou}
    ${({theme:t})=>"text"===t&&au}

    // if icon styles corrections
    ${({icon:t,iconLayout:e})=>t&&e&&eu(e)}
    ${({icon:t,iconLayout:e,size:r})=>t&&"icon-only"===e&&"small"===r&&nu()}
    ${({icon:t,iconLayout:e,size:r})=>t&&"icon-only"===e&&"large"===r&&ru()}
    ${({icon:t,iconColor:e})=>t&&e&&tu(e)}
`};const{BaseButtonStyled:lu}=uu,cu=({disabled:t=!1,icon:e,iconColor:r,iconLayout:n="leading",id:i,isLoading:o=!1,isTransparent:a=!1,loadingProps:s,loadingText:u="Loading...",onClick:l=(t=>t.preventDefault),radius:c,size:f="regular",theme:d="secondary",text:h="click",type:p="button",...m})=>Ya(lu,{"data-testid":"test-button",disabled:t||o,icon:e,iconColor:r,iconLayout:n,isTransparent:a,id:i,onClick:t=>l(t),radius:c,size:f,theme:d,type:p,...m,children:Ya("span",{children:Ja(Xa,o?{children:[Ya(zs,{size:15,...s}),u]}:{children:[h,e&&e]})})});(0,i.lazy)((()=>r.e(132).then(r.bind(r,44132)))),(0,i.lazy)((()=>r.e(140).then(r.bind(r,26140)))),(0,i.lazy)((()=>r.e(390).then(r.bind(r,89390)))),(0,i.lazy)((()=>r.e(205).then(r.bind(r,41205)))),(0,i.lazy)((()=>r.e(583).then(r.bind(r,20583)))),(0,i.lazy)((()=>r.e(590).then(r.bind(r,62590))));var fu={SectionStyled:lr.section`
    ${Ho};
    align-items: center;
    color: ${cr.white};
    display: flex;
    height: 40px;
    justify-content: center;
    left: 0;
    max-width: 100%;
    padding: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 10001;
    background-color: ${t=>t.type&&(t=>{switch(t){case"success":return cr.green;case"warning":return cr.yellow;case"error":return cr.red;default:return cr.blue}})(t.type)};
    height: ${({height:t})=>t};

    button {
        padding: 0 8px;
        margin: 2px 6px;
        border: 0;
    }

    strong {
        margin: 0 8px;
        padding: 2px 8px;
        line-height: 16px;
    }
`};const{SectionStyled:du}=fu,hu=We`
  ${Yo};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`,pu=We`
  ${Yo};
`,mu=We`
  ${Yo};
  color: ${cr.greyIcons};
  display: flex;
  margin: 0 2px;
  user-select: none;
`,gu=lr.nav`
  ${pu};
  color: ${t=>(null==t?void 0:t.color)||cr.grey};
`,yu=lr.ol`
  ${hu};
`,vu=lr.li`
  align-items: center;
  display: flex;

  svg:first-child {
    margin-right: 5px;
  }

  &:last-child {
    pointer-events: none;
  }
`;var bu={Breadcrumb:lr(x)`
  ${Go};
  align-items: center;
  display: flex;
  text-decoration: none;
  transition: all 0.2s ease;
  user-select: none;
  &:hover {
    color: ${cr.blueDark};
  }
`,BreadcrumbsSeparator:lr.li`
  ${mu};
`,ListItemStyled:vu,ListStyled:yu,NavStyled:gu};const{Breadcrumb:wu,BreadcrumbsSeparator:_u,ListItemStyled:Cu,ListStyled:xu,NavStyled:Mu}=bu;const Su=We`
  position: absolute;
  height: 0;
  width: 0;
`,Eu=We`
  right: ${t=>t.width&&`calc(${t.width}px + 10px)`};
  top: 50%;
  transform: translateY(${t=>`${t.moveBody}%`});
`,ku=We`
  ${Su};
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${cr.blueDark2};
  border-top: 10px solid transparent;
  right: -10px;
  top: calc(${t=>`${t.move}%`} - 10px);
`,Au=We`
  left: ${t=>t.width&&`calc(${t.width}px + 10px)`};
  top: 50%;
  transform: translateY(${t=>`${t.moveBody}%`});
`,Lu=We`
  ${Su};
  border-bottom: 10px solid transparent;
  border-right: 10px solid ${cr.blueDark2};
  border-top: 10px solid transparent;
  left: -10px;
  top: calc(${t=>`${t.move}%`} - 10px);
`,Ou=We`
  bottom: ${t=>t.height&&`calc(${t.height}px + 10px)`};
  left: 50%;
  transform: translateX(${t=>`${t.moveBody}%`});
`,Pu=We`
  left: 50%;
  top: ${t=>t.height&&`calc(${t.height}px + 10px)`};
  transform: translateX(${t=>`${t.moveBody}%`});
`,Ru={top:We`
  ${Su};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${cr.blueDark2};
  left: calc(${t=>`${t.move}%`} - 10px);
  top: 100%;
`,bottom:We`
  ${Su}
  border-bottom: 10px solid ${cr.blueDark2};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  left: calc(${t=>`${t.move}%`} - 10px);
  top: -10px;
`,left:ku,right:Lu},Tu={top:Ou,bottom:Pu,left:Eu,right:Au},Iu=lr.div`
  ${Ko}
  ${Yo}
    color: #252525;
  position: relative;
`,Nu=lr.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: 1;
  min-width: ${t=>t.minWidth}px;
  ${({position:t})=>Tu[t]};
`,Fu=lr.div`
  &:hover + ${Nu} {
    opacity: 1;
    visibility: visible;
    transition: 0.5s;
    transition-delay: 0.1s;
  }
`,Bu=lr.div`
  background-color: ${cr.blueDark2};
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: ${t=>t.maxWidth&&`${t.maxWidth}px`};
  min-width: fit-content;
  padding: 10px;
  transition: 0.5ms;
`;var Du={DivStyled:Nu,DivStyledArrow:lr.div`
  ${({position:t})=>Ru[t]}
`,DivStyledTooltipParent:Iu,DivStyledTooltipContent:Fu,DivStyledTooltipText:Bu};const{DivStyled:Uu,DivStyledArrow:ju,DivStyledTooltipParent:$u,DivStyledTooltipContent:zu,DivStyledTooltipText:Hu}=Du,qu=lr.div`
  ${Yo};
  ${Ho};
  outline: 2px solid transparent;
  background: ${cr.blueLight};
  border-radius: 20px;
  display: grid;
  min-height: fit-content;
  padding: 11px;
  position: relative;
  transition: all 0.2s ease;
  width: 100%;
  ${t=>t.isDisabled?"opacity:70%;":"&:hover {\n        background: radial-gradient(\n            102.8% 102.8% at 3.14% -9.06%,\n            #e9fffc 0%,\n            #e8fefb 4.74%,\n            #e4f4f7 50.11%,\n            #e1eef4 83.07%,\n            #e0ecf3 100%\n        );\n    }"}
  ${t=>"pointer"===t.cursorType&&"cursor: pointer;"}
    ${t=>t.isSelected&&`outline-color: ${cr.green};`}
`;var Zu={AbsoluteIconStyled:lr.div`
  position: absolute;
  top: -2px;
  ${t=>"topL"===t.position?"left: -2px;":"right: -2px;"}
`,DivStyled:qu,FooterStyled:lr.footer`
  display: grid;
  text-align: center;
`,HeaderStyled:lr.div`
  position: relative;
`};const{AbsoluteIconStyled:Vu,DivStyled:Gu,FooterStyled:Wu,HeaderStyled:Ku}=Zu;lr.div`
    ${Yo}
    align-items: center;
    display: flex;
    height: ${t=>t.height};
    justify-content: center;
    width: ${t=>t.width};
`;var Yu={arbitrum:"linear-gradient(113.54deg, rgba(60, 87, 140, 0.5) 14.91%, rgba(70, 86, 169, 0.5) 43.21%, rgba(125, 150, 217, 0.345) 44.27%, rgba(129, 161, 225, 0.185) 55.76%), linear-gradient(151.07deg, #141659 33.25%, #4152A7 98.24%)",fantom:"linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(10, 41, 255, 0.6) 42.57%, rgba(25, 105, 255, 0.336) 45.98%, rgba(25, 105, 255, 0.03) 55.76%), linear-gradient(160.75deg, #071AFF 41.37%, #45D4FF 98.29%)",avalanche:"linear-gradient(113.54deg, rgba(119, 0, 1, 0.5) 14.91%, rgba(216, 43, 44, 0.5) 43.21%, rgba(255, 130, 130, 0.345) 44.27%, rgba(220, 96, 97, 0.185) 55.76%), linear-gradient(151.07deg, #8F0E0F 33.25%, #FA4A4B 98.24%)",polygon:"linear-gradient(113.54deg, rgba(103, 58, 194, 0.6) 14.91%, rgba(122, 74, 221, 0.498) 44.27%, rgba(170, 129, 255, 0.222) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #7A4ADD 41.37%, #D57BFF 98.29%)",binance:"linear-gradient(113.54deg, rgba(217, 166, 54, 0.6) 14.91%, rgba(230, 166, 26, 0.6) 44.27%, rgba(207, 168, 28, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(245, 223, 30, 0) 55.76%), linear-gradient(147.17deg, #F5D116 48.73%, #CD9614 98.22%)",ethereum:"linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)",cronos:"#012d74",coinbase:"linear-gradient(113.54deg, rgba(45, 91, 104, 0.531738) 14.91%, rgba(0, 4, 48, 0.6) 42.57%, rgba(45, 91, 104, 0.336) 45.98%, rgba(0, 4, 48, 0.03) 55.76%), linear-gradient(160.75deg, #000430 41.37%, #223F47 98.29%), linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(10, 41, 255, 0.6) 42.57%, rgba(25, 105, 255, 0.336) 45.98%, rgba(25, 105, 255, 0.03) 55.76%), linear-gradient(160.75deg, #071AFF 41.37%, #45D4FF 98.29%)"};var Ju={DivStyledCryptoLogo:lr.div`
  ${Yo};
  ${t=>{return We`
  height: ${e=t.size};
  width: ${e};
`;var e}}
  align-items: center;
  border-radius: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background: ${t=>{return(null==t?void 0:t.bgColor)||(e=t.chain,Yu[e]);var e}};
`};const{DivStyledCryptoLogo:Xu}=Ju,Qu={GridStyled:lr.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
    width: 100%;
`,GridElementStyled:lr.div`
    height: 144px;
    & > div {
        height: 100%;
    }
`,CardContentStyled:lr.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    margin-top: 13px;
`},{GridStyled:tl,CardContentStyled:el,GridElementStyled:rl}=Qu,nl=We`
    ${Yo};
    height: 10px;
    left: -12px;
    position: absolute;
    top: 0;
    width: 10px;
`,il=We`
    ${Yo};
    ${Ho};
    color: ${cr.blueDark};
    cursor: pointer;
    display: block;
    font-size: 18px;
    margin-bottom: 4px;
    overflow: hidden;
    position: relative;
    width: fit-content;
`,ol=We`
    opacity: 50%;
    pointer-events: none;
`,al=We`
    padding-left: 28px;

    &:before,
    .after {
        border-radius: 5px;
        content: '';
        display: block;
        height: 20px;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 1px;
        transition: all 0.1s ease-out;
        width: 20px;
    }

    &:before {
        background-color: ${cr.blueLight};
        border: 1px solid ${cr.blueSky};
        z-index: 0;
    }

    .after {
        align-items: center;
        display: flex;
        justify-content: center;
        left: 1px;
        opacity: 0;
        top: 2px;
        z-index: 1;
    }

    &:hover {
        &:before {
            filter: brightness(95%);
        }
    }

    &:active {
        &:before {
            filter: brightness(90%);
        }
    }
`,sl=We`
    &:before {
        background-color: ${cr.green};
        border-color: ${cr.greenLight};
    }
    .after {
        opacity: 1;
    }
`,ul=We`
    padding-left: 48px;

    &:before {
        background-color: ${cr.greyLight};
        border-radius: 7px;
        content: '';
        display: block;
        height: 14px;
        left: 3px;
        opacity: 0.4;
        position: absolute;
        top: calc(50% - 7px);
        transition: all 0.1s ease-out;
        width: 34px;
    }

    &:after {
        background-color: ${cr.blueLight};
        border-radius: 50%;
        border: 1px solid ${cr.blue};
        content: '';
        display: block;
        height: 20px;
        left: 0;
        position: absolute;
        top: calc(50% - 11px);
        transition: all 0.1s ease-out;
        width: 20px;
    }

    &:hover {
        &:after {
            filter: brightness(95%);
        }
    }

    &:active {
        &:after {
            filter: brightness(90%);
        }
    }
`,ll=We`
    &:before {
        background-color: ${cr.green};
    }

    &:after {
        background-color: ${cr.green};
        border: 1px solid ${cr.green};
        left: 18px;
    }
`;var cl={StyledInput:lr.input`
    ${nl}
`,StyledLabel:lr.label`
    ${il}
    ${t=>t.disabled&&ol}
    ${t=>"box"===t.layout&&al}
    ${t=>"box"===t.layout&&t.checked&&sl}
    ${t=>"switch"===t.layout&&ul}
    ${t=>"switch"===t.layout&&t.checked&&ll}
`};const{StyledInput:fl,StyledLabel:dl}=cl,hl=lr.textarea`
  ${Yo};
  ${zo};
  ${Vo}
  background: ${cr.blueLight};
  overflow-x: auto;
  padding: 16px 8px;
  position: relative;
  width: 100vw;

  color: ${cr.blueDark};
  font-style: italic;
  overflow-y: hidden;
  white-space: pre;
  resize: none;
`,pl=lr.div`
  display: flex;
`,ml=lr.div`
  margin: 19px;
  position: absolute;
  right: 0;
`,gl=lr.div`
  background: ${cr.blueLight2};
  overflow: hidden;
  padding: 16px 8px 0px 23px;
`,yl=lr.ul`
  ${Yo};
  list-style: none;
  text-align: right;
`,vl=lr.div`
  border-radius: 16px;
  border: 2px solid ${cr.paleBlue2};
  display: flex;
  max-height: 100%;
  max-width: fit-content;
  overflow: hidden;
  position: relative;
  flex-direction: column;
`,bl=We`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0px 8px 5px -2px ${cr.blueSky};
  overflow: hidden;
`,wl={WidthWrapperStyled:lr.div`
  border-bottom: 2px solid ${cr.paleBlue2};
  max-height: ${t=>t.maxHeight};
  max-width: ${t=>t.maxWidth};

  ${t=>t.maxHeight&&!t.isMaximized&&bl};
`,SideStyled:gl,StyledUl:yl,TextAreaStyled:hl,WrapperStyled:vl,ContentStyled:pl,HeaderStyled:lr.div`
  padding: 8px 16px;
  border-bottom: 1px solid ${cr.paleBlue2};
`,DivStyledButtonWrap:ml},{SideStyled:_l,StyledUl:Cl}=wl,{ContentStyled:xl,HeaderStyled:Ml,DivStyledButtonWrap:Sl,TextAreaStyled:El,WidthWrapperStyled:kl,WrapperStyled:Al}=wl,Ll=lr.div`
    background: ${cr.blueLight};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
    width: ${t=>t.width};

    @media (max-width: 600px) {
        padding: 16px 8px;
    }
`,Ol=lr.pre`
    ${Yo};
    display: flex;
    height: max-content;
    justify-content: space-between;
    position: relative;

    @media (max-width: 600px) {
        width: 100%;
    }
`,Pl=lr.div`
    align-self: flex-end;
    display: flex;
    font-size: 24px;
    margin-left: 8px;
`,Rl=lr.div`
    position: relative;
    margin: 0 8px;
    &:before {
        border-left: 2px solid ${cr.paleBlue2};
        content: '';
        height: 24px;
        position: absolute;
        width: 0;
    }
`;var Tl={CredentialsStyled:Ll,DivWrapperStyled:lr.div`
    ${Yo};
    overflow-x: ${t=>t.isHidden?"hidden":t.isMultiline&&"auto"};
    width: 90%;

    @media (max-width: 600px) {
        width: 80%;
    }
`,DividerStyled:Rl,PreformattedStyled:Ol,ToolsStyled:Pl};lr.div`
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
`,lr.button`
    ${Jo};
    cursor: pointer;
`;const{CredentialsStyled:Il,DividerStyled:Nl,DivWrapperStyled:Fl,PreformattedStyled:Bl,ToolsStyled:Dl}=Tl;lr.div`
    ${Yo};
    ${Ho};
    background: ${({brand:t})=>(t=>{switch(t){case"amex":return fr.lightBlue;case"diners":return fr.purpleToPink;case"mastercard":return fr.blue;case"visa":return fr.goldShiny}})(t)};
    border: 2px solid ${Ul=cr.white,jl=40,`rgba(${parseInt(Ul.slice(1,3),16)},${parseInt(Ul.slice(3,5),16)},${parseInt(Ul.slice(5,7),16)},${Number(jl)/100})`};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 17%;
    padding: 16px;
    height: 154px;
    width: 277px;

    ${({isExpired:t,pressed:e})=>t?$l:e?zl:""}
`;var Ul,jl;lr.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
`,lr.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    svg {
        cursor: pointer;
    }
`,lr.div`
    color: white;
    display: flex;
    margin-right: 8px;
`;lr.div`
    display: grid;
    place-items: center;

    :hover {
        cursor: pointer;
    }
`;lr.p`
    ${Go};
    color: ${cr.white};
    font-size: 18px;
    line-height: 24px;
    margin: 0;
`,lr.p`
    ${Go}
    color: ${t=>t.isExpired?cr.red:cr.white};
    font-size: 12px;
    line-height: 16px;
    margin: 0 0 0 5px;
`;const $l=We`
    border-color: ${cr.red};
`,zl=We`
    border-color: ${cr.green};
`,Hl=lr.div`
  ${Yo};
  align-items: center;
  background: ${t=>t.color};
  border-radius: 16px;
  border: 1px solid ${dr("light",10)};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  left: 20px;
  max-width: 256px;
  overflow: hidden;
  padding: 24px, 40px, 24px, 40px;
  position: relative;
  top: 20px;
  width: 100%;

  :after {
    content: '';
    display: block;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: all 0.3s ease;
    width: 100%;
    z-index: 0;
  }

  :hover {
    box-shadow: 0px 0px 400px 400px rgba(4, 24, 54, 0.2) inset;
  }
  background: ${t=>t.color};
`,ql=lr.div`
  flex-grow: 0;
  flex: none;
  height: 160px;
  left: 21px;
  order: 0;
  position: static;
  top: 0px;
  width: 120px;
`,Zl=lr.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex: none;
  height: 224px;
  left: 51.5px;
  margin: 16px 0px;
  order: 0;
  padding: 0px;
  position: static;
  top: 28px;
  width: 162px;
`,Vl=lr.div`
  border-radius: 0px;
  height: 136px;
`,Gl=lr.div`
  bottom: 0%;
  color: ${cr.white};
  flex-grow: 0;
  flex: none;
  height: 64px;
  left: calc(50% - 162px / 2);
  margin: 0px 0px;
  order: 1;
  overflow: hidden;
  position: static;
  text-align: center;
  top: 71.43%;
  width: 100%;
`;var Wl={DivStyledCryptoCard:Hl,DivStyledButton:lr.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex: none;
  height: 40px;
  justify-content: center;
  left: 39px;
  margin: 16px 0px;
  order: 1;
  position: static;
  top: 268px;
  width: 187px;
`,DivStyledImage:ql,DivStyledInfo:Zl,DivStyledLogo:Vl,DivStyledNetworkInfo:Gl,PStyledChainName:lr.p`
  ${Ko};
  ${Wo};
  font-size: 32px;
  height: 55%;
  margin: 0;
  overflow: hidden;
  word-break: break-all;
`,PStyledNetwork:lr.p`
  ${Ko};
  ${Zo};
  font-size: 20px;
  height: 36px;
  line-height: 36px;
  margin: 0;
  overflow: hidden;
  word-break: break-all;
`};const{DivStyledCryptoCard:Kl,DivStyledButton:Yl,DivStyledImage:Jl,DivStyledInfo:Xl,DivStyledLogo:Ql,DivStyledNetworkInfo:tc,PStyledChainName:ec,PStyledNetwork:rc}=Wl,nc=(lr.span`
  ${Yo};
  align-items: center;
  background-color: ${cr.white};
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 5px;
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 0;
`,lr.div`
    ${Yo}
    border-radius: 16px;
    display: flex;
    max-width: 100%;
    min-width: fit-content;
    outline: 1px solid;
    position: relative;
    transition: all 0.1s linear;

    outline-color: ${({state:t})=>{switch(t){case"error":return cr.red;case"confirmed":return cr.green;case"disabled":return cr.greyDisabled;default:return cr.greyLight}}};

    & > * > * > * {
        ${t=>"disabled"===t.state&&` fill: ${cr.greyDisabled};`};
    }

    &:hover {
        outline-color: ${t=>"disabled"!==t.state&&cr.blue};

        strong {
            overflow: visible;
            text-overflow: unset;
            white-space: pre-wrap;
        }
    }

    &:hover > .input_prefixIcon > svg {
        fill: ${t=>!(null==t?void 0:t.state)&&cr.blue};
    }

    input {
        & + label {
            color: ${({state:t})=>{switch(t){case"error":return cr.red;case"confirmed":return cr.green;case"disabled":return cr.greyDisabled;default:return cr.grey}}};
        }
    }

    &:hover {
        ${t=>"error"===t.state&&`outline-color: ${cr.red};`}
        ${t=>"confirmed"===t.state&&`outline-color: ${cr.green};`}

        label {
            ${t=>!(null==t?void 0:t.state)&&`color: ${cr.blue};`}
        }
    }

    :not(&:focus-within) {
        &.input_filled {
            outline-color: ${cr.blueSky} !important;
        }
    }

    &:focus-within,
    &.input_filled {
        outline: 2px solid ${cr.blue};

        label {
            font-weight: 600;
            ${t=>!(null==t?void 0:t.state)&&`color: ${cr.blue};`}
        }

        ${t=>"error"===t.state&&`outline-color: ${cr.red};`}
        ${t=>"confirmed"===t.state&&`outline-color: ${cr.green};`}
    }

    ${({size:t})=>"large"===t?We`
                    height: 56px;
                    padding: 14px 16px;
                    & > label {
                        top: 15px;
                    }
                `:We`
                    height: 40px;
                    padding: 8px 16px;
                    & > label {
                        top: 8px;
                    }
                `}
`),ic=lr.label`
    ${Yo}
    ${Ho}
    background-color: ${({labelBgColor:t})=>t||cr.white};
    height: 24px;
    left: ${({hasPrefix:t})=>t?"48px":"16px"};
    pointer-events: none;
    position: absolute;
    transition: all 0.1s ease-out;
    z-index: 1;
`,oc=lr.input`
    ${Yo}
    ${Ho}
    background-color: transparent;
    overflow: hidden;
    transition: all 0.1s ease-out;
    width: 100%;
    ${t=>t.customInput&&"width: 0px; height:0px;"}

    &:focus,
    &:placeholder-shown,
    .input_filled & {
        + label {
            font-size: 14px;
            height: 18px;
            line-height: 1;
            padding: 2px 4px;
            top: -13px;
            left: 12px;
        }
    }

    &:focus {
        &::placeholder {
            display: none;
            visibility: visible;
            color: ${cr.grey};
        }
    }

    &:-webkit-autofill,
    :-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
`,ac=We`
    ${Yo}
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    max-width: 24px;
    width: 100%;

    & :first-child {
        fill: ${cr.grey};
        transition: fill 0.2s ease-out;
        width: 100%;
        height: 100%;
    }
`,sc=lr.div`
    ${ac}
    margin-right: 12px;
`,uc=lr.div`
    height: 100%;
    justify-content: center;
    margin-left: 24px;
    max-width: 24px;
    position: relative;
    width: 100%;

    & :first-child {
        width: 100%;
        height: 100%;
    }

    &:before {
        border-left: 1px solid ${cr.paleBlue2};
        content: '';
        height: 24px;
        left: -12px;
        position: absolute;
        width: 0;
    }
`,lc=lr.button`
    ${Jo}
    ${ac}
    position: relative;
    margin-left: 12px;

    &:hover > svg {
        fill: ${cr.blue};
    }
`;var cc={CopyContainerStyled:uc,DivStyled:sc,DivWrapperStyled:nc,InputStyled:oc,LabelStyled:ic,StrongStyled:lr.strong`
    ${Yo}
    ${Ho}
    bottom: -23px;
    color: ${t=>t.isError?cr.red:cr.grey};
    font-size: 12px;
    height: 24px;
    left: 16px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
`,VisibilityIcon:lc};const{DivWrapperStyled:fc,InputStyled:dc,LabelStyled:hc,StrongStyled:pc}=cc,{CopyContainerStyled:mc,DivStyled:gc,DivWrapperStyled:yc,InputStyled:vc,LabelStyled:bc,StrongStyled:wc,VisibilityIcon:_c}=(lr.div`
  ${Yo}
  display: flex;
  fill: ${cr.grey};
  flex-direction: column;
  height: fit-content;
  position: relative;
  row-gap: 16px;
  ${t=>t.isDisabled&&"opacity: 50%;"}
`,lr.div`
  border-radius: 16px;
  border: 1px solid ${t=>t.hasOutline?cr.greyLight:"transparent"};
  color: ${cr.blue};
  cursor: pointer;
  height: 40px;
  min-height: fit-content;
  min-width: fit-content;
  outline: 0px solid transparent;
  transition: all 0.3s ease;
  width: ${t=>t.width};
  & > div {
    align-items: center;
    color: inherit;
    display: flex;
    gap: 2px;
    padding: 8px;
    transition: all 0.3s ease;
    & :nth-child(2) {
      margin-right: auto;
      white-space: nowrap;
    }
    & :nth-child(3) {
      margin-left: auto;
    }
  }
  &:hover {
    border-color: ${t=>t.hasOutline?cr.blueSky:"transparent"};
  }
  &:focus {
    border: 2px solid ${cr.blueSky};
  }
  ${t=>t.isOpen&&We`
      ${t.hasOutline&&"outline: 4px solid rgba(158, 204, 234, 0.3)"};
      border-color: ${t.hasOutline?cr.blue:"transparent"};
    `};
`,lr.div`
  background-color: #f2f6ff;
  border-radius: 16px;
  border: 2px solid ${cr.blueSky};
  display: flex;
  flex-direction: column;
  margin-top: -8px;
  overflow: hidden;
  position: absolute;
  top: 56px;
  transition: all 0.3s ease;
  width: ${t=>t.width};
  z-index: 999;
  display: ${t=>t.isOpen?"block":"none"};
`,lr.div`
  padding: 8px;
`,lr.div`
  color: #041836;
  cursor: pointer;
  display: flex;
  grid-gap: 8px;
  padding: 6px 16px 6px 16px;
  transition: all 0.3s ease;
  &:hover {
    border-radius: 8px;
    background-color: #ebeff9;
  }
`,lr.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 0px;
`,cc),Cc=lr.fieldset`
    ${Yo};
    display: flex;
    flex-direction: 'column';
    flex-wrap: wrap;
    overflow: hidden;
    position: relative;
`,xc=lr.legend`
    ${Yo};
    ${jo}
    ${Bo}
    color: ${cr.grey};
    display: block;
    margin-bottom: 4px;
`;var Mc={DivStyled:lr.div`
    opacity: ${t=>t.disabled&&.5};
    position: relative;
`,DivWrapperStyled:lr.div`
    align-items: ${({isRow:t})=>t?"center":"flex-start"};
    flex-direction: ${t=>t.isRow?"row":"column"};
    gap: ${t=>t.isRow&&"12px"};
    display: flex;
    flex-wrap: wrap;
`,FieldsetStyled:Cc,LabelStyled:lr.label`
    ${Yo};
    /* ${jo} */
    ${Ho}
    padding-left: ${t=>t.isCreditCardMode?"0":"28px"};
    align-content: center;
    color: ${cr.greyDark};
    display: flex;
    line-height: 20px;
    margin-bottom: 12px;
    position: relative;
    width: fit-content;

    &:before {
        left: ${t=>t.isCreditCardMode?"20px":"0"};
        top: ${t=>t.isCreditCardMode?"20px":"0"};
        background-color: ${cr.blueLight};
        border-radius: 50%;
        border: 1px solid ${cr.blueSky};
        content: '';
        display: block;
        height: 18px;
        position: absolute;
        transition: all 0.1s ease-out;
        width: 18px;
    }

    &:after {
        left: ${t=>t.isCreditCardMode?"26px":"6px"};
        top: ${t=>t.isCreditCardMode?"26px":"6px"};
        background-color: ${cr.white};
        border-radius: 50%;
        content: '';
        display: block;
        height: 8px;
        opacity: 0;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 8px;
    }

    &:hover {
        &:before {
            filter: brightness(95%);
        }
    }

    &:active {
        &:before {
            filter: brightness(90%);
        }
    }
`,LegendStyled:xc,RadioButtonStyled:lr.input`
    position: absolute;

    &:checked {
        & + label {
            &:before {
                background-color: ${cr.green};
                border-color: ${cr.greenLight};
            }
            &:after {
                opacity: 1;
            }
        }
    }
`};const{DivStyled:Sc,DivWrapperStyled:Ec,FieldsetStyled:kc,LabelStyled:Ac,LegendStyled:Lc,RadioButtonStyled:Oc}=Mc,Pc=lr.div`
    ${Yo};
    display: inline-block;
    position: relative;
`,Rc=lr.label`
  ${Yo}
  ${Ho}
    background-color: ${cr.white};
  height: 24px;
  left: ${({hasPrefixIcon:t,hasSelectedIndex:e})=>t&&!e?50:12}px;
  line-height: 1;
  pointer-events: none;
  position: absolute;
  padding: 0 4px;
  transition: all 0.1s ease-out;
  ${({hasSelectedIndex:t})=>t?"top: -9px; font-size: 14px;":"top: 20px;"};
`,Tc=lr.span`
    margin-right: px;
`,Ic=lr.div`
    ${Yo};
    ${Ho};
    background-color: ${cr.white};
    border-radius: 16px;
    border: 2px solid;
    cursor: pointer;
    display: flex;
    height: 56px;
    overflow: hidden;
    padding: 14px 50px 14px 16px;
    transition: all 0.1s linear;

    border-color: ${({state:t})=>{switch(t){case"error":return cr.red;case"confirmed":return cr.green;case"disabled":return cr.greyDisabled;default:return cr.greyLight}}};

    ${({hasPrefixIcon:t})=>t&&"gap: 13px"};

    ${({state:t})=>"disabled"===t&&`& * {fill: ${cr.greyDisabled};} color: ${cr.greyDisabled} !important;`};

    &:hover {
        border-color: ${t=>"disabled"!==t.state&&cr.blueSky};
    }

    &:focus {
        border-color: ${cr.blue};

        & + label {
            color: ${cr.blue};
        }
    }

    &:hover {
        ${t=>"error"===t.state&&`border-color: ${cr.red};`}
        ${t=>"confirmed"===t.state&&`border-color: ${cr.green};`}

        & + label {
            ${t=>!(null==t?void 0:t.state)&&`color: ${cr.blue};`}
        }
    }

    &:focus {
        ${t=>"error"===t.state&&`border-color: ${cr.red};`}
        ${t=>"confirmed"===t.state&&`border-color: ${cr.green};`}
        & + label {
            ${t=>"error"===t.state&&`color: ${cr.red};`}
            ${t=>"confirmed"===t.state&&`color: ${cr.green};`}
        }
    }

    & + label {
        color: ${({state:t})=>{switch(t){case"error":return cr.red;case"confirmed":return cr.green;case"disabled":return cr.greyDisabled;default:return cr.grey}}};
    }
`,Nc=We`
    align-items: center;
    display: flex;
    justify-content: center;
    max-height: 24px;
    max-width: 24px;
    width: 100%;
`,Fc=lr.div`
    ${Yo}
    ${Nc}
    margin-right: 13px;
    & :first-child {
        width: 100%;
        height: 100%;
    }
`,Bc=lr.div`
    ${Nc};
    position: absolute;
    right: 16px;
`,Dc=lr.label`
    ${Yo}
    ${Ho}
    bottom: -23px;
    color: ${cr.red};
    font-size: 12px;
    height: 24px;
    left: 16px;
    pointer-events: none;
    position: absolute;
`,Uc=lr.div`
  ${Yo}
  ${Ho}
    background-color: ${cr.blueLight};
  border-radius: 16px;
  border: 2px solid ${cr.blueSky};
  left: 0;
  margin-top: 10px;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 10;
  max-height: 265px;
  overflow: auto;

  &::-webkit-scrollbar {
    background: none;
    height: 0;
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${cr.greyIcons};
    border-radius: 30px;
    border: 8px solid transparent;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`,jc=lr.div`
    ${Yo};
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 14px 50px 14px 16px;
    &:hover {
        background-color: rgba(128, 128, 128, 0.1);
    }
    &:first-child {
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }
    &:last-child {
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
    }
`,$c=lr.p`
    text-align: center;
    margin-top: -12px;
    margin-bottom: 5px;
`;var zc={DivStyledDescription:lr.div`
    ${Yo};
    ${Ho};
    bottom: -23px;
    color: ${cr.grey};
    font-size: 12px;
    height: 24px;
    left: 16px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
`,DivStyledWrapper:Pc,DropDownIcon:Bc,ErrorLabel:Dc,LabelStyled:Rc,NoDataTextStyled:$c,Option:jc,Options:Uc,PrefixIcon:Fc,PrefixSpan:Tc,SelectedItem:Ic};const{DivStyledDescription:Hc,DivStyledWrapper:qc,DropDownIcon:Zc,ErrorLabel:Vc,LabelStyled:Gc,NoDataTextStyled:Wc,Option:Kc,Options:Yc,PrefixIcon:Jc,PrefixSpan:Xc,SelectedItem:Qc}=zc,tf=lr.select`
    ${Yo}
    ${Ho}
    background-color: transparent;
    overflow: hidden;
    transition: all 0.1s ease-out;
    width: 100%;

    &:focus,
    .input_filled & {
        + label {
            font-size: 14px;
            height: 18px;
            line-height: 1;
            padding: 2px 4px;
            top: -13px;
            left: 12px;
        }
    }
`;var ef={DivStyledDescription:lr.div`
    ${Yo};
    ${Ho};
    bottom: -23px;
    color: ${cr.grey};
    font-size: 12px;
    height: 24px;
    left: 16px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
`,SelectStyled:tf};const{DivWrapperStyled:rf,LabelStyled:nf}=cc,{DivStyledDescription:of,SelectStyled:af}=ef;const sf=lr.div`
    ${Yo};
    --arrow-width: 2.5em;
    --checkbox-width: 2em;
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 0.88em;
    line-height: 1;
    &[aria-expanded='true'] {
        border-color: ${cr.blueSky};
        & .w3uik__dropdown-wrapper {
            display: block;
        }

        .w3uik__select-overlay {
            display: block;
        }
    }
`,uf=lr.div`
    background-color: ${cr.white};
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    min-height: 2.75em;
    padding: 8px 20px 8px 10px;
    position: relative;
    transition: all 0.1s linear;
`,lf=lr.label`
    ${Yo};
    background-color: ${cr.white};
    color: ${cr.blue};
    font-weight: 500;
    font-size: 14px;
    height: 24px;
    left: 12px;
    line-height: 1;
    padding: 0 4px;
    pointer-events: none;
    position: absolute;
    top: -9px;
    transition: all 0.1s ease-out;
    z-index: 10;
    &[aria-disabled='true'] {
        color: ${cr.greyLight};
    }
`,cf=lr.button`
    appearance: none;
    background: none;
    border: 1px solid ${cr.greyLight};
    border-radius: 16px;
    box-sizing: border-box;
    color: black;
    font-size: 1em;
    height: 100%;
    left: 0;
    min-height: 2.75em;
    padding: 0;
    position: absolute;
    flex-grow: 1;
    text-align: left;
    top: 0;
    transition: border-color 150ms linear;
    width: 100%;
    z-index: 3;

    &[aria-expanded='true'],
    &:focus {
        border-color: ${cr.blueSky};
        outline: none;
        /* On Tab - set box shadow */
        -webkit-box-shadow: 0px 0px 0px 2px ${cr.blueSky};
        -moz-box-shadow: 0px 0px 0px 2px ${cr.blueSky};
        box-shadow: 0px 0px 0px 2px ${cr.blueSky};
    }

    &:hover:enabled {
        border-color: ${cr.blueSky};
    }

    :disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`,ff=lr.ul`
    display: flex;
    flex-wrap: wrap;
    font-family: inherit;
    grid-auto-flow: column;
    grid-gap: 0.5em;
    left: 0.5em;
    list-style: none;
    margin: 0;
    max-width: calc(100% - var(--arrow-width));
    padding-bottom: 2px;
    padding-left: 0;
    padding-right: calc(var(--arrow-width) + 0.5em);
    padding-top: 2px;
    position: relative;
    z-index: 10;
    &[aria-disabled='true'] {
        cursor: not-allowed;
        opacity: 0.5;
    }
`,df=lr.li`
    display: flex;
    z-index: -10;
    align-items: center;
    width: 100%;
    padding-right: calc(var(--arrow-width) + 0.5em);
    line-break: loose;
`,hf=lr.div`
    display: flex;
    flex-wrap: wrap;
    font-family: inherit;
    grid-auto-flow: column;
    grid-gap: 0.5em;
    left: 0.5em;
    list-style: none;
    margin: 0;
    max-width: calc(100% - var(--arrow-width));
    padding-bottom: 0;
    padding-left: 0;
    padding-right: calc(var(--arrow-width) + 0.5em);
    padding-top: 0;
    position: relative;
    top: 0.5em;
    z-index: 10;
    line-height: 1.75em;
    min-height: 1.75em;
    opacity: 0.6;
    pointer-events: none;
`,pf=lr.div`
    bottom: 0;
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
`,mf=lr.menu`
    display: none;
    margin: 0;
    margin-top: 5px;
    padding: 0;
    position: relative;
    z-index: 3;
`,gf=lr.div`
    background: ${cr.blueLight};
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 20;
    border: 2px solid ${cr.blueSky};
    border-radius: 16px;
`,yf=lr.input`
    background-color: ${cr.blueLight};
    appearance: none;
    border: 0;
    border-bottom: 1px solid ${cr.paleBlue2};
    border-radius: 16px 16px 0 0;
    color: ${cr.blueDark};
    display: block;
    font-family: inherit;
    font-size: 1em;
    padding-bottom: 1em;
    padding-left: 3em;
    padding-right: 0.5em;
    padding-top: 1em;
    width: 100%;

    &[aria-hidden='true'] {
        position: absolute;
        display: none;

        & + .w3uik__search-icon {
            display: none;
        }
    }
    &:focus {
        outline: none;
    }
`,vf=lr.ul`
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: 0 4px 8px rgba(248, 174, 174, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    list-style: none;
    margin: 0;
    max-height: 13em;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0;

    // Scrollbar in options
    &::-webkit-scrollbar {
        background: none;
        height: 0;
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: ${cr.greyIcons};
        border-radius: 30px;
        border: 4px solid transparent;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    // For Last option in list
    :last-child,
    :last-child:hover,
    :last-child:focus {
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }
    // For 1st option in list - first child is input so select 2nd child
    :nth-child(2),
    :nth-child(2):hover,
    :nth-child(2):focus {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
`,bf=lr.li`
    display: block;
    margin: 0;
    padding: 0;
    background-color: transparent;
`,wf=lr.span`
    align-items: center;
    display: flex;
    height: 24px;
    justify-content: center;
    margin: 0 4px;
    padding: 0 5px;
    width: 24px;
    // Any component(svg/img) used as icon will have a common width
    * {
        height: 100%;
        object-fit: contain;
        width: 24px !important;
    }
`,_f=lr.span`
    overflow: hidden;
    text-overflow: ellipsis;
`,Cf=lr.button`
    align-items: center;
    appearance: none;
    background: none;
    border: none;
    color: ${cr.blueDark};
    display: flex;
    font-size: 1em;
    padding-bottom: 0.375em;
    padding-left: 0;
    padding-right: 0.5em;
    padding-top: 0.375em;
    text-align: left;
    transition-duration: 150ms;
    transition-property: background-color, color;
    transition-timing-function: linear;
    width: 100%;

    &::before {
        content: '';
        display: flex;
        height: 3em;
        justify-content: center;
        /* width: var(--checkbox-width); */
    }

    // Option Selected Styles
    &[aria-selected='true'] {
        color: ${cr.blueDark2};
        &::before {
            background-size: contain;
            content: '';
        }
    }

    &:hover {
        background: ${cr.beauBlue};
    }

    &[data-highlighted],
    &:focus {
        background: ${cr.beauBlue};
        outline: none;
    }

    &[disabled] {
        color: ${cr.grey};
        cursor: not-allowed;
    }
`,xf=lr.span`
    display: block;
    color: ${cr.grey};
    padding: 1em;
    text-align: center;
`,Mf=lr.div`
    color: ${cr.grey};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    overflow: hidden;
    padding: 4px 4px;
    position: absolute;
    text-overflow: ellipsis;
    top: 100%;
    white-space: nowrap;
    width: 90%;
    &:hover {
        overflow: visible;
        white-space: normal;
    }
    &[aria-invalid='true'] {
        color: ${cr.red};
    }
`,Sf=lr((({title:t,titleId:e,...r})=>F("svg",{"aria-hidden":"true","data-testid":"test-icon",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-labelledby":e,...r,children:[t?N("title",{id:e,children:t}):null,N("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25zM3.125 11a7.875 7.875 0 1 1 15.75 0 7.875 7.875 0 0 1-15.75 0z"}),N("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.381 15.381a.875.875 0 0 1 1.238 0l4 4a.875.875 0 1 1-1.238 1.238l-4-4a.875.875 0 0 1 0-1.238z"})]})))`
    background-size: contain;
    height: 1em;
    pointer-events: none;
    position: absolute;
    left: 0.5em;
    top: 1em;
    transform: translateY(-50%);
    width: 1em;
`,Ef=lr(H)`
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: var(--arrow-width);
`,kf=lr(q)`
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: var(--arrow-width);
`;var Af={ButtonStyledListItem:Cf,ButtonStyledSelect:cf,CheckmarkIconStyled:lr(D)`
    color: ${cr.green};
    margin-left: auto;
    display: none;
    height: 12px;
    width: 12px;
    &[aria-selected='true'] {
        display: block;
    }
`,DivStyledDesc:Mf,DivStyledDropdown:gf,DivStyledOverlay:pf,DivStyledPlaceholder:hf,DivStyledSelectWrapper:uf,DivStyledWrapper:sf,InputStyledSearch:yf,LabelStyled:lf,ListItemStyledDropdown:bf,ListItemStyledTag:df,ListStyledDropdown:vf,ListStyledSelected:ff,MenuStyledWrapper:mf,SearchIconStyled:Sf,SpanStyledItemIcon:wf,SpanStyledItemText:_f,SpanStyledNoResults:xf,TriangleDownIconStyled:Ef,TriangleUpIconStyled:kf};const{ButtonStyledListItem:Lf,CheckmarkIconStyled:Of,DivStyledDropdown:Pf,InputStyledSearch:Rf,ListItemStyledDropdown:Tf,ListStyledDropdown:If,MenuStyledWrapper:Nf,SearchIconStyled:Ff,SpanStyledItemIcon:Bf,SpanStyledNoResults:Df}=Af,{DivStyledPlaceholder:Uf,ListItemStyledTag:jf,ListStyledSelected:$f,SpanStyledItemIcon:zf,SpanStyledItemText:Hf}=Af,{ButtonStyledSelect:qf,DivStyledDesc:Zf,DivStyledOverlay:Vf,DivStyledSelectWrapper:Gf,DivStyledWrapper:Wf,LabelStyled:Kf,TriangleDownIconStyled:Yf,TriangleUpIconStyled:Jf}=Af,Xf=lr.div`
  ${Yo};
  background-color: ${cr.white};
  border-radius: 16px;
  border: 1px solid ${cr.greyLight};
  display: inline-block;
  max-width: 100%;
  padding: 12px;
  position: relative;
  transition: all 0.1s linear;
  width: ${t=>t.width?t.width:"294px"};

  &:hover {
    border-color: ${t=>"disabled"===t.state?cr.greyLight:cr.blue};
  }

  &:focus {
    border-color: ${cr.blue};

    + label {
      color: ${cr.blue};
    }
  }

  ${t=>"error"===t.state&&`border-color: ${cr.red};`}
  ${t=>"confirmed"===t.state&&`border-color: ${cr.green};`}

    &:hover {
    ${t=>"error"===t.state&&`border-color: ${cr.red};`}
    ${t=>"confirmed"===t.state&&`border-color: ${cr.green};`}

        label {
      ${t=>"error"!==t.state&&"confirmed"!==t.state&&"disabled"!==t.state&&`color: ${cr.blue};`}
    }
  }

  &:focus {
    ${t=>"error"===t.state&&`border-color: ${cr.red};`}
    ${t=>"confirmed"===t.state&&`border-color: ${cr.green};`}
        & + label {
      ${t=>"error"===t.state&&`color: ${cr.red};`}
      ${t=>"confirmed"===t.state&&`color: ${cr.green};`}
    }
  }

  textarea {
    & + label {
      ${t=>"error"===t.state&&`color: ${cr.red};`}
      ${t=>"confirmed"===t.state&&`color: ${cr.green};`}
    }
  }
`,Qf=lr.label`
  ${Yo}
  ${Ho}
    background-color: ${cr.white};
  height: 24px;
  left: 12px;
  padding: 0 4px;
  pointer-events: none;
  position: absolute;
  top: 14px;
  transition: all 0.1s ease-out;
`;var td={TextAreaStyled:lr.textarea`
  ${Yo}
  ${Ho}
    background-color: transparent;
  display: block;
  max-width: 100%;
  min-height: 128px;
  overflow: hidden;
  padding: 2px;
  width: 100%;

  &::placeholder {
    opacity: 0;
  }

  &:focus,
  .filled & {
    + label {
      font-size: 14px;
      height: 18px;
      line-height: 1;
      padding: 2px 4px;
      top: -10px;
    }
  }

  &:focus {
    &::placeholder {
      opacity: 1;
      color: ${cr.grey};
    }
  }
`,LabelStyled:Qf,TextAreaWrapper:Xf};const{TextAreaStyled:ed,LabelStyled:rd,TextAreaWrapper:nd}=td,id=lr.h3`
  ${Yo};
  ${jo};
  ${Bo};
  margin-bottom: 18px;
`,od=lr.h4`
  ${Yo};
  ${jo};
  ${Do};
  margin-bottom: 12px;
  margin-top: 32px;
`;var ad={FormStyled:lr.form`
  ${Yo};
  background-color: ${cr.white};
  border-radius: 16px;
  padding: 16px;

  .form-item + .form-item {
    margin-top: 30px;
  }

  > button[type='submit'],
  .customFooter {
    margin-top: 32px;
  }
`,H4Styled:od,H3Styled:id};const{H3Styled:sd,H4Styled:ud,FormStyled:ld}=ad,cd=lr.section`
    ${Yo};
    background-color: ${t=>t.backgroundColor};
    background-image: ${({backgroundURL:t,linearGradient:e=""})=>t?`${e&&e+", "} url(${t})`:e};
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: ${t=>t.rounded||"0px"};
    display: flex;
    justify-content: space-between;
    height: ${({height:t})=>t||"100%"};
    max-width: 100%;
    overflow: hidden;

    * {
        color: ${t=>t.textColor||cr.white} !important;
    }

    @media (max-width: ${gr}) {
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 20px;
        height: fit-content;
    }
`,fd=lr.div`
    display: flex;
    flex-grow: 1;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    padding: ${t=>t.padding||"20px"};
    @media (max-width: ${gr}) {
        padding: 20px;
        width: 100%;
        align-items: center;
    }
`,dd=lr.div`
    display: flex;
    flex-grow: 1;
    width: 50%;
    @media (max-width: ${gr}) {
        width: 100%;
    }
`;var hd={ImageStyled:lr.img`
    block-size: auto;
    height: 100%;
    max-inline-size: 100%;
    object-fit: contain;
    ${t=>(t=>{switch(t){case"center":return We`
                margin: auto;
            `;case"left":return We`
                margin-right: auto;
            `;case"right":return We`
                margin-left: auto;
            `}})(t.align||"center")};
    @media (max-width: ${gr}) {
        margin: auto;
    }
`,LeftContainerDiv:fd,RightContainerDiv:dd,SectionStyled:cd};const{ImageStyled:pd,LeftContainerDiv:md,RightContainerDiv:gd,SectionStyled:yd}=hd;var vd={DivStyled:lr.div`
  ${Yo};
  ${Ho};
  ${qo};
  background-color: ${cr.white};
  border-radius: 16px;
  border: 2px solid ${cr.blueSkyLight};
  display: grid;
  grid-gap: 5px;
  margin: 0;
  padding: 16px;
  width: 100%;
`,PStyledTopic:lr.p`
  color: ${cr.blue};
  margin: 0;
`,PStyledInfo:lr.p`
  color: ${cr.blueDark};
  font-size: 24px;
  margin: 0;
`};const{DivStyled:bd,PStyledTopic:wd,PStyledInfo:_d}=vd,Cd=lr.a`
    ${Yo}
    ${Ho}
    align-items: center;
    color: ${cr.blue};
    display: inline-block;
    font-weight: 600;
    height: fit-content;
    max-width: 100%;
    width: fit-content;

    &:hover {
        filter: brightness(0.7);
    }
`;var xd={InternalLinkStyled:lr(x)`
    ${Yo}
    ${Ho}
    align-items: center;
    color: ${cr.blue};
    display: inline-block;
    font-weight: 600;
    max-width: 100%;
    width: fit-content;
    &:hover {
        filter: brightness(0.7);
    }
`,LinkStyled:Cd,SpanStyledFlex:lr.span`
    align-items: baseline;
    display: flex;
    flex-direction: ${({iconLayout:t})=>"leading"===t?"row":"row-reverse"};
    margin: ${t=>"leading"===t.iconLayout?"auto 2px auto 4px":"auto 4px auto 2px"};

    svg {
        margin: ${t=>"leading"===t.iconLayout?"auto 4px auto 0":"auto 0 auto 4px"};
    }
`,SpanStyledText:lr.span`
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`};const{InternalLinkStyled:Md,LinkStyled:Sd,SpanStyledFlex:Ed,SpanStyledText:kd}=xd,Ad=lr.div`
    ${t=>!t.canOverflow&&"\n            overflow: auto;\n            scrollbar-width: none;\n            ::-webkit-scrollbar {\n              display: none;\n            }\n            -ms-overflow-style: none;\n        "}
    ${Ho};
    background-color: ${cr.white};
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    margin: 80px auto;
    max-width: ${t=>t.width};
    width: 96%;
`,Ld=lr.header`
    ${t=>t.fixedMode&&"position: sticky; top: 0;background-color: white;"}
    ${t=>"string"===typeof t.title&&`h3 {\n        color: ${cr.blue};\n        padding-right: 8px;\n        margin-block-start: 0;\n        margin-block-end: 0;\n    }`}
    align-items: center;
    display: flex;
    padding: 24px 32px 20px;
    justify-content: ${t=>t.title?"space-between":"flex-end"};
    border-bottom: ${t=>t.headerHasBottomBorder?`1px solid ${cr.paleBlue2}`:void 0};

    div {
        border-color: ${cr.blue};
        border-radius: 15px;
    }

    button {
        min-width: 30px;
    }

    #modal-close-button {
        border: 3px solid ${cr.paleBlue2};
        background-color: white;
    }
`,Od=lr.div`
    padding: 0px 32px 0px;
`,Pd=lr.footer`
    ${t=>t.fixedMode&&"position: sticky;bottom: 0;background-color: white;"}
    border-top: 1px solid ${cr.paleBlue2};
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px 32px;
    justify-content: ${t=>t.hasCancel?"space-between":"flex-end"};

    button {
        margin: 3px 0;
    }

    #modal-cancel-button {
        color: ${cr.grey};
        :hover {
            color: ${cr.black};
        }
    }
`,Rd=lr.div`
    align-items: ${({isCentered:t})=>t?" center":"flex-start"};
    background: rgba(${(t=>{var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?` ${parseInt(e[1],16)}, ${parseInt(e[2],16)}, ${parseInt(e[3],16)} `:"66, 135, 245"})(cr.blueDark)}, 0.7);
    bottom: 0;
    display: ${({isVisible:t})=>t?" flex":"none"};
    height: 100vh;
    justify-content: center;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 5;
`,Td=lr.footer`
    ${t=>t.fixedMode&&"position: sticky;bottom: 0;background-color: white;"}
    border-top: 1px solid ${cr.paleBlue2};
    display: flex;
    padding: 0px 32px 32px;
`;var Id={CustomButtonStyle:lr.div`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`,CustomFooterStyled:Td,DivStyled:Rd,DivStyledContent:Od,DivStyledWrap:Ad,FooterStyled:Pd,HeaderStyled:Ld};const{CustomFooterStyled:Nd,DivStyled:Fd,DivStyledContent:Bd,DivStyledWrap:Dd,FooterStyled:Ud,HeaderStyled:jd}=Id,$d=We`
    border-color: ${cr.red};
    & > svg {
        fill: ${cr.red};
    }
`,zd=We`
    border-color: ${cr.blue};
    & > svg {
        fill: ${cr.blue};
    }
`,Hd=We`
    border-color: ${cr.green};
    & > svg {
        fill: ${cr.green};
    }
`,qd=We`
    border-color: ${cr.yellow};
    & > svg {
        fill: ${cr.yellow};
    }
`,Zd=ur` 
    0% {
        left: 150%;
    }

    100% {
        left: 0;
    }
`,Vd=ur` 
    0% {
        left: 0;
    }

    100% {
        left: 150%;
    }
`,Gd=ur` 
    0% {
        left: -150%;
    }

    100% {
        left: 0;
    }
`,Wd=ur` 
    0% {
        left: 0;
    }

    100% {
        left: -150%;
    }
`,Kd=t=>{switch(t){case"error":return cr.red;case"success":return cr.green;case"warning":return cr.yellow;default:return cr.blue}},Yd=lr.div`
    position: fixed;
    z-index: 30;

    ${t=>(t=>{switch(t){case"bottomL":return We`
                left: 0;
                bottom: 0;
            `;case"topL":return We`
                left: 0;
                top: 0;
            `;case"bottomR":return We`
                right: 0;
                bottom: 0;
            `;default:return We`
                right: 0;
                top: 0;
            `}})(t.position)}
`,Jd=lr.div`
    ${Yo}
    align-items: center;
    border-radius: 100%;
    display: flex;
    height: 24px;
    justify-content: center;
    width: 24px;
`,Xd=lr.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 10px;
    width: 100%;
`,Qd=lr.span`
    ${$o}
    color: ${cr.grey};
    display: inline-block;
    word-break: break-word;
`,th=lr.h5`
    ${Uo};
    display: inline-block;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
    word-break: break-word;
`,eh=lr.div`
    ${Yo}
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
`,rh=lr.div`
    background-color: rgba(158, 204, 234, 0.3);
    bottom: 0;
    height: 6px;
    left: 0;
    position: absolute;
`,nh={CloseWrapperStyled:eh,IconWrapperStyled:Jd,NotificationStyled:lr.div`
    ${Yo}
    ${Ho}
    animation-fill-mode: forwards;
    background-color: ${cr.white};
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(48, 71, 105, 0.1);
    color: ${cr.grey};
    display: flex;
    margin: 18px;
    padding: 16px 48px 16px 16px;
    position: relative;
    width: 320px;
    overflow: hidden;
    z-index: 9999;

    ${t=>((t,e)=>{switch(t){case"bottomL":case"topL":return We`
                animation: ${e?Wd:Gd} 1s;
            `;case"bottomR":case"topR":return We`
                animation: ${e?Vd:Zd} 1s;
            `;default:throw new Error("Make sure you provided position")}})(t.position,t.isClosing)}

    & > ${Jd} {
        ${t=>(t=>{switch(t){case"error":return $d;case"success":return Hd;case"warning":return qd;default:return zd}})(t.type)}
    }
    & > ${Xd} > ${th} {
        color: ${t=>Kd(t.type)};
    }
`,SpanStyled:Qd,TextContentStyled:Xd,TitleStyled:th,NotificationContainerStyled:Yd,BarStyled:rh},{BarStyled:ih,CloseWrapperStyled:oh,IconWrapperStyled:ah,NotificationStyled:sh,SpanStyled:uh,TextContentStyled:lh,TitleStyled:ch}=nh,fh=({dispatch:t,icon:e,id:r,message:n,position:o="topL",title:a="New Message",type:s="info",...u})=>{const[l,c]=(0,i.useState)(!1),[f,d]=(0,i.useState)(),[h,p]=(0,i.useState)(0),m=()=>{if(l)return;const t=setInterval((()=>{p((e=>e<320?e+1:(clearInterval(t),e)))}),20);d(t)},g=()=>{clearInterval(f)};(0,i.useEffect)((()=>{l||320===h&&y()}),[h,l]),(0,i.useEffect)((()=>m()),[]);const y=()=>{g(),c(!0),setTimeout((()=>{t({type:"remove_notification",id:r})}),400)},v=t=>Kd(t);return Ja(sh,{"data-testid":"test-notification",id:r,isClosing:l,onMouseEnter:g,onMouseLeave:m,position:o,type:s,...u,children:[Ya(ah,{"data-testid":"test-notification-icon-wrapper",children:e||("error"===s||"warning"===s?Ya($,{title:"exclamation icon",titleId:"notification exclamation icon",fill:v(s)}):"info"===s?Ya(z,{title:"info icon",titleId:"notification info icon",fill:v(s)}):Ya(D,{title:"checkmark icon",titleId:"notification checkmark icon",fill:v(s)}))}),Ja(lh,{children:[Ya(ch,{"data-testid":"test-notification-title",children:a}),Ya(oh,{onClick:y,"data-testid":"test-notification-x",children:Ya(j,{title:"cross icon",titleId:"notification cross icon",fontSize:10,fill:cr.greyIcons})}),Ya(uh,{"data-testid":"test-notification-message",children:n})]}),Ya(ih,{style:{width:h}})]})},dh=(0,i.createContext)(),{NotificationContainerStyled:hh}=nh,ph=[];function mh(t,e){switch(e.type){case"add_notification":return[...t,{...e.payload}];case"remove_notification":return t.filter((t=>t.id!==e.id));case"clear_notifications":return[];default:return t}}const gh=t=>{const[e,r]=(0,i.useReducer)(mh,ph),n=(0,i.useMemo)((()=>{const t={topR:[],topL:[],bottomR:[],bottomL:[]};return e.forEach((e=>t[e.position].push(e))),Object.keys(t).map((e=>{var n;return Ya(hh,{position:e,children:null==(n=null==t?void 0:t[e])?void 0:n.map((t=>Ya(fh,{id:t.id||String(Date.now()),dispatch:r,...t},t.id)))},`container-${e}`)}))}),[e]);return Ja(dh.Provider,{value:r,children:[n,t.children]})},yh=()=>{const t=(0,i.useContext)(dh);if(void 0===t)throw new Error("useNotification hook must be used within a NotificationProvider");return e=>{t({type:"add_notification",payload:{id:String(Date.now()),...e}})}},vh=lr.div`
  background: #ffffff;
  border-radius: 20px;
  border: 2px solid #c1d8e7;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 448px;
  max-width: 386.67px;
  padding: 32px;
  ${t=>t.isActive&&`\n      border-color: ${cr.green};\n    `}
`;vh.displayName="DivStyled";var bh={DivStyled:vh,DivStyledFeatures:lr.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  overflow-y: auto;
  row-gap: 8px;
  & > div {
    display: flex;
    align-items: center;
  }
`,DivStyledCardFooter:lr.div`
  margin-top: auto;
`};var wh={StyledDiv:lr.div`
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: center;
`};const{StyledDiv:_h}=wh,{DivStyled:Ch,DivStyledFeatures:xh,DivStyledCardFooter:Mh}=bh,Sh="20px",Eh="10px",kh=lr.div`
    ${Yo};
    position: relative;

    &:hover > ul {
        display: block;
    }
`,Ah=(t,e)=>{switch(t){case"top":return(t=>We`
    left: 50%;
    bottom: calc(100% + ${Eh});
    transform: translateX(calc(-50% + ${t||0}px));

    &:before {
        bottom: -${Eh};
        height: ${Eh};
        left: 0;
        width: 100%;
    }

    &:after {
        left: calc((50% - ${Eh}) - ${t||0}px);
        bottom: -6px;
    }
`)(e);case"left":return(t=>We`
    right: calc(100% + ${Eh});
    top: 50%;
    transform: translateY(calc(-50% + ${t||0}px));

    &:before {
        height: 100%;
        right: -${Eh};
        top: 0;
        width: ${Eh};
    }

    &:after {
        top: calc((50% - ${Eh}) - ${t||0}px);
        right: -2px;
    }
`)(e);case"right":return(t=>We`
    left: calc(100% + ${Eh});
    top: 50%;
    transform: translateY(calc(-50% + ${t||0}px));

    &:before {
        height: 100%;
        left: -${Eh};
        top: 0;
        width: ${Eh};
    }

    &:after {
        top: calc((50% - ${Eh}) - ${t||0}px);
        left: -2px;
    }
`)(e);default:return(t=>We`
    left: 50%;
    top: calc(100% + ${Eh});
    transform: translateX(calc(-50% + ${t||0}px));

    &:before {
        height: ${Eh};
        left: 0;
        top: -${Eh};
        width: 100%;
    }

    &:after {
        left: calc((50% - ${Eh}) - ${t||0}px);
        top: -6px;
    }
`)(e)}};var Lh={DivStyled:kh,ListStyled:lr.ul`
    ${Yo};
    background-color: ${t=>`${t.backgroundColor}`};
    border-radius: ${Sh};
    display: none;
    list-style: none;
    min-width: ${t=>`${t.width}`};
    padding: 8px;
    position: absolute;
    ${t=>t.position&&Ah(t.position,t.moveBody)};

    &:hover {
        display: block;
    }

    li {
        ${Yo};
        display: block;
        list-style: none;
        position: relative;
        z-index: 2;
    }

    &:before {
        // dead-zone buffer to prevent off-hover bug
        background-color: transparent;
        content: '';
        display: block;
        position: absolute;
        // dynamic values come from setPosition()
    }

    &:after {
        // the tail of the popover box
        background-color: ${t=>`${t.backgroundColor}`};
        content: '';
        display: block;
        height: ${Sh};
        position: absolute;
        transform: rotate(45deg);
        width: ${Sh};
        z-index: 1;
        // dynamic values come from setPosition()
    }
`,halfSize:Eh};const{DivStyled:Oh,ListStyled:Ph}=Lh,Rh=lr.div`
    background: ${t=>t.backgroundColor?t.backgroundColor:""};
    cursor: pointer;
    display: inline-block;
`,Th=lr.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    height: ${t=>t.height?`${t.height}px`:"auto"};
    width: ${t=>t.width?`${t.width}px`:"auto"};
`;var Ih={DivContainerStyled:Rh,DivImageStyled:lr.div`
    align-items: center;
    display: flex;
    width: 24px;
    height: 24px;
    margin: auto 0;
    padding-right: 8px;
`,DivStyled:Th,TextStyled:lr.p`
    ${Ko};
    ${qo};
    color: ${t=>t.textColor?t.textColor:cr.white};
    font-size: ${t=>t.textSize?`${t.textSize}px`:""};
    overflow: hidden;
    text-overflow: ellipsis;
`};const{DivContainerStyled:Nh,DivStyled:Fh,DivImageStyled:Bh,TextStyled:Dh}=Ih,Uh=(t,e,r)=>Object.keys(t).includes(e)?t[e]:r,jh=lr.div`
  ${Ho}
  display: flex;
  flex-wrap: wrap;
  align-items: ${t=>t.alignItems&&t.alignItems};
  gap: ${t=>t.rowGap?`${t.rowGap}px ${t.colGap}px`:"15px 15px"};
  justify-content: ${t=>t.justifyItems&&t.justifyItems};
  margin-left: ${t=>t.colGap&&t.colGap/2+"px"};
  width: ${t=>`${t.width&&`${t.width}px`} `};
`;var $h={ColDiv:lr.div`
  color: white;
  order: ${t=>t.order};
  ${Ho}
  // xSmall devices (landscape phones, 576px and up)
        @media (max-width: 767px) {
    flex: ${t=>t.span?100/(t.xs?t.xs:0)*Uh(t.breakpointsConfig,"xs",t.span)+"%":"100%"};

    max-width: ${t=>t.span?`calc(${100/(t.xs?t.xs:0)*Uh(t.breakpointsConfig,"xs",t.span)}% - ${t.colGap}px)`:"100%"};
    ${t=>t.isFullWidth&&"max-width: 100%; flex: 100%;"}
  }

  // sm devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991px) {
    color: black;
    flex: ${t=>t.span?100/(t.sm?t.sm:0)*Uh(t.breakpointsConfig,"sm",t.span)+"%":"100%"};

    max-width: ${t=>t.span?`calc(${100/(t.sm?t.sm:0)*Uh(t.breakpointsConfig,"sm",t.span)}% - ${t.colGap}px)`:"100%"};
    ${t=>t.isFullWidth&&"max-width: 100%; flex: 100%;"}
  }

  // Meduim(desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199px) {
    flex: ${t=>t.span?Uh(t.breakpointsConfig,"md",t.span)*(100/(t.md?t.md:0))+"%":"100%"};

    max-width: ${t=>t.span?`calc(${100/(t.md?t.md:0)*Uh(t.breakpointsConfig,"md",t.span)}% - ${t.colGap}px)`:"100%"};
    ${t=>t.isFullWidth&&"max-width: 100%; flex: 100%;"}
  }

  // large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    flex: ${t=>t.span?100/(t.lg?t.lg:0)*Uh(t.breakpointsConfig,"lg",t.span)+"%":"90%"};

    max-width: ${t=>t.span?`calc(${100/(t.lg?t.lg:0)*Uh(t.breakpointsConfig,"lg",t.span)}% - ${t.colGap}px )`:"90%"};

    ${t=>t.isFullWidth&&"max-width: 100%; flex: 100%;"}
  }
`,RowDiv:jh};const{ColDiv:zh,RowDiv:Hh}=$h;(0,i.createContext)({lg:0,md:0,sm:0,xs:0,rowGap:15,colGap:15});lr.div`
  ${Yo};
  animation: progress 1.5s linear infinite;
  background: ${cr.white} no-repeat;
  background-image: ${fr.lightGrey};
  background-size: 200px 100%;
  box-sizing: border-box;
  display: inline-block;
  flex-shrink: 0;
  outline: none;
  overflow: hidden;
  position: relative;
  border-radius: ${({borderRadius:t})=>t};
  height: ${({height:t})=>t};
  width: ${({width:t})=>t};
  &:after,
  &:before {
    box-sizing: border-box;
  }
  @keyframes progress {
    0% {
      background-position: -300px 0;
    }
    100% {
      background-position: calc(300px + 100%) 0;
    }
  }
`;const qh=lr.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;
`,Zh=lr.ol`
  ${Yo};
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 24px;
  position: relative;
  text-align: center;
  width: 100%;
`,Vh=lr.li`
  ${Yo};
  ${Ho};
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${cr.green};
  color: ${cr.white};
  display: flex;
  font-size: 24px;
  height: 32px;
  justify-content: center;
  line-height: 0;
  position: relative;
  width: 32px;

  background-color: ${t=>t.activeStep<=t.thisStep?cr.green:cr.white};
  opacity: ${t=>t.activeStep<t.thisStep?"50%":"100%"};
`,Gh=lr.span`
  background-color: rgba(46, 125, 175, 0.3);
  border: none;
  display: block;
  height: 2px;

  &:last-of-type {
    display: none;
  }

  width: calc((100% / ${t=>t.stepTotal-1}) - (${t=>2===t.stepTotal?"90px":"64px"}));
`,Wh=lr.div`
  text-align: center;

  & > div[role='spinner'] {
    margin: 30px auto;
  }
`,Kh=lr.div`
  ${Yo};
  ${Ho};
  display: inline-block;
  margin: 20px 20px 32px;
  p,
  i {
    ${Yo};
    ${Ho};
  }

  :hover {
    display: inline-block;
    height: auto;
  }
`,Yh=lr.nav`
  display: flex;
  justify-content: center;
  margin-top: 12px;

  button {
    margin: 0 12px;
  }
`,Jh=lr.footer``;var Xh={DivStyled:Wh,DivStyledContent:Kh,DivStyledHelper:lr.div`
  margin-top: 26px;
  text-align: center;

  p,
  i,
  span {
    ${Ho};
    font-size: 12px;
  }

  img,
  button {
    margin: 0 auto;
  }
`,FooterStyled:Jh,HeaderStyled:lr.header`
  ${t=>t.headerWidth&&`max-width: ${t.headerWidth}px`};
  width: 100%;
`,ListItemStyled:Vh,NavStyled:Yh,OrderedListStyled:Zh,SectionStyled:qh,SpanStyled:Gh};const{DivStyled:Qh,DivStyledHelper:tp,FooterStyled:ep,ListItemStyled:rp,NavStyled:np,OrderedListStyled:ip,SectionStyled:op,SpanStyled:ap,HeaderStyled:sp}=Xh;lr.div`
  display: flex;
  flex-direction: column;
`,lr.div`
  ${Yo}
  ${Ho}
    display: grid;
  min-height: fit-content;
  align-items: flex-start;
  justify-content: center;
  grid-column: 1 / -1;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`,lr.div`
  padding-top: 1px;
  background: radial-gradient(106.45% 108.64% at 32.33% -4.84%, #ecf5fc 0.52%, #cee4f3 100%);
  grid-column: 1 / -1;
`,lr.div`
  ${Yo}
  ${Ho}
    display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 12px 0px;
  > div {
    display: flex;
    flex-direction: row;
    min-width: 50px;
    justify-content: space-evenly;
    align-items: center;
  }
`,lr.div`
  cursor: ${t=>t.isActive?"pointer":"cursor"};
  color: ${t=>t.isActive?cr.blue:cr.greyLight};
`,lr.div`
  align-items: ${t=>t.alignCellItems};
  justify-content: ${t=>t.justifyCellItems};
  display: flex;
  padding: 16px 0;
`,lr.div.attrs((t=>({columns:t.columns})))`
  ${Yo}
  ${Ho}
    padding-bottom: 11px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
  background-color: white;
  display: grid;
  grid-template-columns: ${t=>t.columns};
  // row-gap: 22px;
  column-gap: 11px;
  overflow: hidden;
  min-height: fit-content;
  min-width: fit-content;
  & > .firstCol {
    padding-left: 22px;
  }
  & > .lastCol {
    padding-right: 22px;
  }
  & > div.table_header {
    font-weight: 600;
    padding: 12px 0;

    &:first-of-type {
      padding-left: 22px;
    }
  }
`,lr.div`
  background: radial-gradient(106.45% 108.64% at 32.33% -4.84%, #ecf5fc 0.52%, #cee4f3 100%);
  border-radius: 20px;
  padding: 1px;
  position: relative;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,lr.div`
  width: 32px;
  height: 32px;
  border: 2px solid transparent;
  border-radius: 12px;
  margin: 0px 5px;
  display: grid;
  align-items: center;
  justify-content: center;
  border-color: ${t=>t.active&&cr.blue};
  background-color: ${t=>!t.active&&"#EBEFF9"};
  cursor: ${t=>!t.active&&"pointer"};
`,lr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -1;
  & > h3 {
    margin-top: 29px;
  }
`,lr.div`
    ${Yo}
    ${Ho}
    min-height: fit-content;
    display: flex;
    flex-direction: row;
    ${t=>!t.isVertical&&"flex-direction:column"}
`,lr.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-height: fit-content;
    min-width: fit-content;
    row-gap: 5px;
    ${t=>t.isVertical&&"flex-direction: column;"}

    ${t=>t.haveBackground&&!t.isVertical&&We`
            & > span {
                background-color: ${cr.blueCultured};
            }
            & > span:first-child {
                border-radius: 16px 0 0 16px;
            }

            & > span:last-child {
                border-radius: 0 16px 16px 0;
            }
        `};
    ${t=>t.haveBackground&&t.isVertical&&We`
            background-color: ${cr.blueCultured};
            border-radius: 16px;
        `};
    ${t=>t.isWidthAuto&&We`
            & > span {
                flex-grow: 1;
            }
        `}
`,lr.div`
    padding: ${t=>t.isVertical?"0px 11px":"11px 0px"};
`,lr.div`
    transition-duration: 500ms;
    transition-property: border;
    transition-timing-function: ease-in-out;
    margin: 0px 48px 0px 0px;
    padding-bottom: 4px;
    line-height: 24px;
    padding-bottom: 4px;
    margin-bottom: 11px;

    cursor: pointer;
    ${t=>t.isActive&&"font-weight:600;"};
    ${t=>t.isActive&&"border-bottom: 2px solid #21BF96;"};
    ${t=>(t.isActive||t.isDisabled)&&"pointer-events: none;"};
    ${t=>!t.isActive&&`color:${cr.greyIcons};`};
    line-height: ${t=>t.lineHeight&&`${t.lineHeight}px`};
    ${t=>t.isDisabled&&`color:${cr.greyDisabled};`}
`,lr.div`
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    border-radius: 16px;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${cr.blueCultured};
    border: 2px solid transparent;
    cursor: pointer;
    color: ${cr.blue};
    min-width: fit-content;
    ${({isActive:t})=>t&&We`
            border-color: ${cr.blueSky};
            background: ${cr.white};
        `};
    ${t=>t.isDisabled&&"pointer-events: none;"};
    ${t=>t.hasMargin&&"margin-right:6px;"};
    ${t=>t.isDisabled&&`opacity: 0.5; background-color: ${cr.white};`};
    line-height: ${t=>t.lineHeight&&`${t.lineHeight}px`};
    &:hover {
        background: ${cr.blueLight2};
        ${({isActive:t})=>t&&We`
                background: ${fr.beauBlue};
            `};
    }

    & > span {
        font-weight: 600;
        font-size: 14px;
        text-align: center;
    }
`,(0,i.createContext)({selectedKey:0,setSelectedKey:null,tabStyle:"bar"});var up={DivStyled:lr.section`
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`,DivStyledContent:lr.div`
    display: flex;
    flex-direction: ${({fullWidth:t})=>t?"column":"row"};
    flex-wrap: wrap;
    gap: 16px;
`,SectionStyled:lr.section`
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
`};const{DivStyled:lp,DivStyledContent:cp,SectionStyled:fp}=up;var dp={DivStyled:lr.div`
    ${Yo};
    align-items: center;
    background: ${cr.white};
    border-radius: 13px;
    border: 2px dashed ${cr.blueSky};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    min-height: 160px;
    overflow: hidden;
    padding: 8px;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    ${t=>!t.isFileSelected&&We`
            &:hover {
                background: radial-gradient(
                    102.8% 102.8% at 3.14% -9.06%,
                    #e9fffc 0%,
                    #e8fefb 4.74%,
                    #e4f4f7 50.11%,
                    #e1eef4 83.07%,
                    #e0ecf3 100%
                );
            }
        `}

    ${t=>!t.isFileSelected&&We`
            &:active {
                background: radial-gradient(
                    102.8% 102.8% at 3.14% -9.06%,
                    #d3fff8 0%,
                    #d2fdf7 4.74%,
                    #c8e9ef 50.11%,
                    #c2dde9 83.07%,
                    #c0d8e7 100%
                );
            }
        `}
`,TextContentStyled:lr.div`
    ${Yo};
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
`,InputStyled:lr.input`
    display: none;
`,ImageStyled:lr.img`
    border-radius: 8px;
    height: 144px;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
`,IconDivStyled:lr.div`
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
`};const{DivStyled:hp,IconDivStyled:pp,ImageStyled:mp,InputStyled:gp,TextContentStyled:yp}=dp,vp="92px",bp="12px",wp="92.8px",_p=lr.div`
  ${Yo};
  display: flex;
  flex-wrap: wrap;
  gap: ${bp};
  justify-content: flex-start;
  margin: 10px 0px 4px 0px;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 420px) {
    gap: 5px;
  }
`;var Cp={InputStyled:lr.input`
  ${Yo};
  ${Ko};
  border-radius: 20px;
  border: 0;
  box-shadow: inset 0 0 0 1px ${cr.greyLight};
  color: ${cr.blueDark};
  font-size: 18px;
  font-weight: 600;
  height: ${vp};
  line-height: ${vp};
  padding: 0;
  text-align: center;
  transition: box-shadow 0.2s ease-out;
  width: ${wp};
  &::placeholder {
    color: ${cr.greyIcons};
    opacity: 1; // firefox
  }
  &:focus {
    box-shadow: inset 0 0 0 2px ${cr.blueSky} !important;
  }
  &.is-filled {
    background: ${cr.blueLight};
    box-shadow: none;
  }
  &:hover {
    box-shadow: inset 0 0 0 1px ${cr.blueSky};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media only screen and (max-width: 420px) {
    width: 52px;
    height: 52px;
    line-height: 52px;
    border-radius: 10px;
  }
  /* Firefox */
  -moz-appearance: textfield;
  caret-color: transparent;
`,DivStyledWrapper:_p,DivStyledTooltip:lr.div`
  background-color: ${cr.red};
  border-radius: 4px;
  color: ${cr.white};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  padding: 8px 12px;
  position: absolute;
  width: fit-content;
  &::after {
    content: ' ';
    position: absolute;
    left: 30px;
    top: -4px;
    border-top: none;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 4px solid ${cr.red};
  }
`};const{InputStyled:xp,DivStyledWrapper:Mp,DivStyledTooltip:Sp}=Cp;var Ep={DivStyled:lr.div`
  ${Yo};
  background-color: ${cr.white};
  border: 1px solid ${cr.paleBlue2};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 32px;
  width: 100%;
  :first-child {
    :first-child {
      ${Ko};
      font-weight: 400;
    }
    :nth-child(1) {
      ${Ko};
      font-weight: 600;
    }
  }
        @media screen and (max-width: ${Up}) {
            font-size: ${$y-2}px;
        }

        @media screen and (max-width: ${jp}) {
            font-size: ${$y-4}px;
        }

        @media screen and (max-width: ${$p}) {
            font-size: ${$y-6}px;
        }

        @media screen and (max-width: ${zp}) {
            font-size: ${$y-8}px;
        }
    `,Gy=Ay`
    -webkit-font-smoothing: antialiased;
    color: ${Dp};
    fill: ${Dp};
    font-family: 'open-sans', sans-serif;
    font-size: ${$y}px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0;

    ${Vy};
`,Wy=Ay`
    font-size: ${$y}px;
    line-height: 40px;
    letter-spacing: -0.75px;

    ${Vy};
`,Ky=Ay`
    font-size: ${zy}px;
    line-height: 36px;

    ${Ay`
        @media screen and (max-width: ${Up}) {
            font-size: ${zy-2}px;
        }

        @media screen and (max-width: ${jp}) {
            font-size: ${zy-4}px;
        }

        @media screen and (max-width: ${$p}) {
            font-size: ${zy-6}px;
        }
    `}
`,Yy=Ay`
    -webkit-font-smoothing: antialiased;
    color: ${Dp};
    fill: ${Dp};
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
`,Jy=Ay`
    font-weight: 600;
`,Xy=(Ay`
    font-size: ${Hy}px;
    font-weight: 700;
    line-height: 32px;

    ${Ay`
        @media screen and (max-width: ${Up}) {
            font-size: ${Hy-2}px;
        }

        @media screen and (max-width: ${jp}) {
            font-size: ${Hy-4}px;
        }

        @media screen and (max-width: ${$p}) {
            font-size: ${Hy-6}px;
        }
    `}
`,Ay`
    font-size: ${qy}px;
    line-height: 28px;

    ${Ay`
        @media screen and (max-width: ${jp}) {
            font-size: ${qy-2}px;
        }

        @media screen and (max-width: ${$p}) {
            font-size: ${qy-4}px;
        }
    `}
`,Ay`
    font-size: ${Zy}px;
    line-height: 25px;

    ${Ay`
        @media screen and (max-width: ${$p}) {
            font-size: ${Zy-2}px;
        }
    `}
`,Ay`
    font-family: IBM Plex Mono, 'Lucida Console', sans-serif;
    font-size: 16px;
    font-style: normal;
`,Ay`
    font-family: IBM Plex Mono, 'Lucida Console', monospace;
    font-size: 14px;
`,Ay`
    font-weight: 700;
`,Ay`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
`,Ay`
    ${Yy};
    font-weight: 600;
`,Ay`
    font-weight: 500;
`,Ay`
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', Tahoma, sans-serif;
`,Ay`
    border: none;
    box-sizing: border-box;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 0;
`);Ay`
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    outline: inherit;
    padding: 0;
`,jy.h1`
    ${Xy};
    ${Gy};
    ${Wy}
    margin-bottom: 12px;

    &:empty {
        display: none;
    }
`,jy.h2`
    ${Xy};
    ${Gy};
    ${Ky}
    margin-bottom: 12px;

    &:empty {
        display: none;
    }
`,jy.p`
    ${Xy};
    ${Yy};

    span {
        ${Jy};
        color: ${Bp};
    }

    &:last-of-type {
        margin: 8px 0 16px;
    }
        @media screen and (max-width: ${Qw}) {
            font-size: ${rM-2}px;
        }

        @media screen and (max-width: ${t_}) {
            font-size: ${rM-4}px;
        }

        @media screen and (max-width: ${e_}) {
            font-size: ${rM-6}px;
        }

        @media screen and (max-width: ${r_}) {
            font-size: ${rM-8}px;
        }
    `,uM=zx`
        @media screen and (max-width: ${Qw}) {
            font-size: ${nM-2}px;
        }

        @media screen and (max-width: ${t_}) {
            font-size: ${nM-4}px;
        }

        @media screen and (max-width: ${e_}) {
            font-size: ${nM-6}px;
        }
    `,lM=zx`
        @media screen and (max-width: ${Qw}) {
            font-size: ${iM-2}px;
        }

        @media screen and (max-width: ${t_}) {
            font-size: ${iM-4}px;
        }

        @media screen and (max-width: ${e_}) {
            font-size: ${iM-6}px;
        }
    `,cM=zx`
        @media screen and (max-width: ${t_}) {
            font-size: ${oM-2}px;
        }

        @media screen and (max-width: ${e_}) {
            font-size: ${oM-4}px;
        }
    `,fM=zx`
        @media screen and (max-width: ${e_}) {
            font-size: ${aM-2}px;
        }
    `,dM=zx`
    -webkit-font-smoothing: antialiased;
    color: ${Yw.grey};
    fill: ${Yw.grey};
    font-family: 'open-sans', sans-serif;
    font-size: ${rM}px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0;

    ${sM};
`,hM=zx`
    font-size: ${rM}px;
    line-height: 40px;
    letter-spacing: -0.75px;

    ${sM};
`,pM=zx`
    font-size: ${nM}px;
    line-height: 36px;

    ${uM}
`,mM=zx`
    font-size: ${iM}px;
    font-weight: 700;
    line-height: 32px;

    ${lM}
`,gM=zx`
    font-size: ${oM}px;
    line-height: 28px;

    ${cM}
`,yM=zx`
    font-size: ${aM}px;
    line-height: 25px;

    ${fM}
`,vM=zx`
    font-family: IBM Plex Mono, 'Lucida Console', sans-serif;
    font-size: 16px;
    font-style: normal;
`,bM=zx`
    font-family: IBM Plex Mono, 'Lucida Console', monospace;
    font-size: 14px;
`,wM=zx`
    -webkit-font-smoothing: antialiased;
    color: ${Yw.grey};
    fill: ${Yw.grey};
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
`,_M=mM,CM=gM,xM=yM,MM=dM,SM=vM,EM=bM,kM=wM,AM=zx`
    font-weight: 600;
`,LM=zx`
    font-weight: 700;
`,OM=zx`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
`,PM=zx`
    ${wM};
    font-weight: 600;
`,RM=zx`
    font-weight: 500;
`,TM=zx`
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', Tahoma, sans-serif;
`,IM=zx`
    border: none;
    box-sizing: border-box;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 0;
`,NM=zx`
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    outline: inherit;
    padding: 0;
`;eM.h1`
    ${IM};
    ${MM};
    ${hM}
    margin-bottom: 12px;

    &:empty {
        display: none;
    }
`,eM.h2`
    ${IM};
    ${MM};
    ${pM}
    margin-bottom: 12px;

    &:empty {
        display: none;
    }
`,eM.p`
    ${IM};
    ${kM};

    span {
        ${AM};
        color: ${Yw.blue};
    }

    &:last-of-type {
        margin: 8px 0 16px;
    }
`;const FM=Iw`
    background: ${Yw.greenForestLight};
    color: ${Yw.green};
`,BM=Iw`
    background: ${Yw.greenForestDark};
    color: ${Yw.white};
`,DM=Iw`
    background: ${Yw.redLight};
    color: ${Yw.red};
`,UM=Iw`
    background: ${Yw.redDark};
    color: ${Yw.white};
`,jM=Iw`
    background: ${Yw.blueSkyLight};
    color: ${Yw.blueDark};
`,$M=Iw`
    background: ${Yw.grey};
    color: ${Yw.white};
`,zM=Iw`
    background: ${Yw.yellowLight};
    color: ${Yw.yellow};
`,HM=Iw`
    background: ${Yw.yellowDark};
    color: ${Yw.white};
`,qM=Iw`
    background: ${Yw.blueCloud};
    color: ${Yw.blueSkyDark};
`,ZM=Iw`
    background: ${Yw.blueCloudDark};
    color: ${Yw.white};
`,VM=Iw`
    background: ${Yw.purpleLight};
    color: ${Yw.purple};
`,GM=Iw`
    background: ${Yw.purpleDark};
    color: ${Yw.white};
`;var WM={coloredBlue:qM,coloredBlueDark:ZM,coloredGrayDark:$M,coloredGreen:FM,coloredGreenDark:BM,coloredGrey:jM,coloredPink:Iw`
    background: ${Yw.pinkLight};
    color: ${Yw.pink};
`,coloredPinkDark:Iw`
    background: ${Yw.pinkDark};
    color: ${Yw.white};
`,coloredPurple:VM,coloredPurpleDark:GM,coloredRed:DM,coloredRedDark:UM,coloredYellow:zM,coloredYellowDark:HM,coloredBlueLight:Iw`
    background: ${Yw.blueLight3};
    color: ${Yw.blue};
`};const KM=Iw`
    ${IM}
    ${kM}
    ${LM};
    align-items: center;
    border-radius: 20px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    overflow: hidden;
    padding: 2px 20px;
    text-align: center;
    width: 100%;
`,YM=Iw`
    background: ${Yw.blueLight};
`,JM=Iw`
    background: ${Yw.greenForestLight};
    color: ${Yw.green};
    display: flex;

    svg {
        fill: ${Yw.green};
        padding-right: 5px;
    }
`,XM=Iw`
    background: ${Yw.blueLight};
`,QM=Iw`
    align-items: center;
    background: ${Yw.green};
    border-radius: 30px;
    color: ${Yw.white};
    display: flex;
    font-size: 12px;
    height: 32px;
    justify-content: center;
    padding: 0 4px;
    width: 32px;
`;var tS={activeStatus:JM,chips:Iw`
    align-items: center;
    background: ${Yw.green};
    border-left: 5px solid;
    border-radius: 5px;
    color: ${Yw.white};
    display: flex;
    font-size: 12px;
    height: 32px;
    justify-content: center;
    padding: 6px 12px;
    width: 32px;
`,discount:QM,inactiveStatus:XM,initialStyles:KM,regular:YM};const{activeStatus:eS,discount:rS,inactiveStatus:nS,initialStyles:iS,regular:oS,chips:aS}=tS,{coloredBlue:sS,coloredBlueDark:uS,coloredGrayDark:lS,coloredGreen:cS,coloredGreenDark:fS,coloredGrey:dS,coloredPink:hS,coloredPinkDark:pS,coloredPurple:mS,coloredPurpleDark:gS,coloredRed:yS,coloredRedDark:vS,coloredYellow:bS,coloredYellowDark:wS,coloredBlueLight:_S}=WM;Kw.div`
    cursor: pointer;
    display: flex;
    margin-left: 8px;
    padding: auto;
    &:hover{
        svg{
            fill: ${Yw.blue};
        }
    }
`,Kw.div`
    ${iS}
    ${({active:t,theme:e})=>((t,e)=>{switch(t){case"status":return e?eS:nS;case"discount":return rS;case"chips":return aS;default:return oS}})(e,t)}
    ${({color:t,theme:e,tone:r})=>"status"!==e&&t&&((t,e)=>{switch(t){case"green":return"light"===e?cS:fS;case"red":return"light"===e?yS:vS;case"yellow":return"light"===e?bS:wS;case"blue":return"light"===e?sS:uS;case"blueLight":return _S;case"purple":return"light"===e?mS:gS;case"pink":return"light"===e?hS:pS;case"grey":return"light"===e?dS:lS;default:return dS}})(t,r)}
    width: ${({width:t})=>t};

    ${({width:t,theme:e})=>"discount"===e&&Boolean(t)&&`height: ${t}; width: ${t}; border-radius: 50%;`};

    ${({theme:t,tone:e})=>"chips"===t&&"dark"===e&&"border: 0px;"};

    ${({fontSize:t})=>Boolean(t)&&`font-size: ${t}`};
`;var CS={exports:{}},xS={},MS=i,SS=Symbol.for("react.element"),ES=Symbol.for("react.fragment"),kS=Object.prototype.hasOwnProperty,AS=MS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LS={key:!0,ref:!0,__self:!0,__source:!0};function OS(t,e,r){var n,i={},o=null,a=null;for(n in void 0!==r&&(o=""+r),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(a=e.ref),e)kS.call(e,n)&&!LS.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:SS,type:t,key:o,ref:a,props:i,_owner:AS.current}}xS.Fragment=ES,xS.jsx=OS,xS.jsxs=OS,CS.exports=xS;const PS=CS.exports.jsx,RS=CS.exports.jsxs,TS=CS.exports.Fragment;Kw.section`
  background-color: ${Yw.white};
  border: 1px solid ${t=>(t=>{switch(t){case"blue":default:return Yw.blue;case"red":return Yw.red;case"green":return Yw.green;case"yellow":return Yw.yellow}})(t.theme)};
  border-radius: 20px;
  opacity: 0%;
  overflow: hidden;
  transition-delay: 0.3s;
  transition: opacity 0.3s ease-out;
`,Kw.header`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px 12px;

  &:hover {
    background-color: ${Yw.paleBlue2};
  }
`,Kw.h4`
  ${IM}
  ${MM}
    ${CM}
    line-height: 1;
  padding: 8px 0;
`,Kw.div`
  align-items: center;
  display: flex;
  justify-content: center;

  p {
    ${IM}
    ${kM}
        margin: 0 6px;
    min-width: 100px;
    text-align: right;
  }

  svg {
    margin: 0 6px;
    min-width: 18px;
  }

  div {
    margin: 0 6px;
  }

  &:last-of-type {
    margin-left: auto;
  }
`,Kw.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;const IS=Iw`
    background-image: url(${t=>t.image});
    background-position: center;
    background-size: cover;
`;Kw.div`
    background: radial-gradient(
        106.45% 108.64% at 32.33% -4.84%,
        #ecf5fc 0.52%,
        #cee4f3 100%
    );
    align-items: center;
    background: ${t=>t.avatarBackground};
    color: ${t=>t.textColor};
    display: flex;
    flex-direction: column;
    font-size: ${t=>t.fontSize}px;
    justify-content: center;
    overflow: hidden;
    position: static;
    text-transform: uppercase;
    word-break: break-all;
    ${t=>"image"===t.theme&&t.image&&IS};
    span {
        display: none;
    }
    &,
    & > svg {
        height: ${t=>t.size}px;
        width: ${t=>t.size}px;
        border-radius: ${t=>""+(t.isRounded?"50%":t.borderRadius?`${t.borderRadius}px`:"0px")};
    }
`,Kw.h4`
    ${CM};
    ${TM};
    ${LM};
    ${IM};
    color: ${t=>t.color};
    font-size: inherit;
`;Kw.div`
    ${IM}
    ${kM}
    align-items: center;
    border-radius: 6px;
    display: flex;
    height: min-content;
    justify-content: center;
    overflow: hidden;
    padding: 4px 10px;
    width: min-content;
    background-color: ${({state:t="normal"})=>(t=>{switch(t){case"danger":return Yw.red;case"success":return Yw.green;case"warning":return Yw.yellow;default:return Yw.blue}})(t)};
`;const NS=Kw.button`
  ${NM};
  display: inline-block;
  vertical-align: sub;

  &:first-child {
    fill: ${Yw.grey};
    transition: fill 0.2s ease-out;
  }

  &:hover > svg {
    fill: ${Yw.blue};
  }
`,FS=({text:t,iconSize:e=24,onCopy:r=(()=>{}),revertIn:n=3e3,...o})=>{const[,a]=(()=>{const[t,e]=(0,i.useState)(null);return[t,async t=>{if(!(null==navigator?void 0:navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(r){return console.warn("Copy failed",r),e(null),!1}}]})(),[s,u]=(0,i.useState)(!1);return PS(NS,{className:"input_copy","data-testid":"test-copy-button",iconSize:e,onClick:e=>{r(e),a(`${t}`),u(!0),setTimeout((()=>{u(!1)}),n)},...o,children:s?PS(Lv,{title:"check icon",titleId:"copybutton check icon",fill:Yw.green,fontSize:e}):PS(Ov,{title:"copy icon",titleId:"copybutton copy icon",fill:Yw.blue,fontSize:e})})},BS=Iw`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', Tahoma, Verdana, sans-serif;
`,DS=Iw`
    ${BS};
    color: ${Yw.grey};
    fill: ${Yw.grey};
    font-style: normal;
    letter-spacing: 0;
`,US=Iw`
    ${BS};
    color: ${Yw.blueDark};
    fill: ${Yw.blueDark};
    font-style: normal;
    letter-spacing: 0;
`,jS=Iw`
    ${US};
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.75px;
    ${sM};
`,$S=Iw`
    ${US};
    font-size: 32px;
    font-weight: 400;
    line-height: 36px;
    ${uM}
`,zS=Iw`
    ${US};
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    ${lM}
`,HS=Iw`
    ${US};
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    ${cM}
`,qS=Iw`
    ${US};
    font-weight: 600;
    color: ${Yw.blueDark};
    fill: ${Yw.blueDark};
    font-size: 18px;
    line-height: 24px;
`,ZS=Iw`
    ${US};
    font-weight: 600;
    color: ${Yw.blueDark};
    fill: ${Yw.blueDark};
    font-size: 16px;
    line-height: 24px;
`,VS=Iw`
    ${DS};
    font-size: 14px;
    line-height: 24px;
`,GS=Iw`
    ${DS};
    font-size: 12px;
    line-height: 1.5;
`,WS=Iw`
    ${DS};
    font-size: 10px;
    line-height: 1.5;
`,KS=Iw`
    ${DS};
    font-size: 18px;
    line-height: 24px;
`,YS=Iw`
    ${DS};
    font-size: 16px;
    line-height: 24px;
`,JS=Iw`
    font-style: italic;
`,XS=Iw`
    font-family: 'IBM Plex Mono', 'Lucida Console', monospace;
`,QS=t=>Iw`
    ${(t=>{switch(t){case"h1":return jS;case"h2":return $S;case"h3":return zS;case"h4":return HS;case"subtitle1":return qS;case"subtitle2":return ZS;case"body18":return KS;case"body16":default:return YS;case"caption14":return VS;case"caption12":return GS;case"caption10":return WS}})(t.variant||"body16")};
    ${(null==t?void 0:t.monospace)&&XS};
    ${(null==t?void 0:t.color)&&`color: ${t.color}`};
    ${(null==t?void 0:t.italic)&&JS};
    ${(null==t?void 0:t.weight)&&(t=>{switch(t){case"regular":case"400":return Iw`
                font-weight: 400;
            `;case"medium":case"500":return Iw`
                font-weight: 500;
            `;case"semibold":case"600":return Iw`
                font-weight: 600;
            `;case"bold":case"700":return Iw`
                font-weight: 700;
            `;default:return Iw`
                font-weight: ${t};
            `}})(t.weight)};
`,tE=(Kw((({children:t,copyable:e,iconSize:r,italic:n,monospace:i,onCopy:o,variant:a="body16",...s})=>{const u=(t=>{switch(t){case"h1":return"h1";case"h2":case"subtitle1":case"subtitle2":return"h2";case"h3":return"h3";case"h4":return"h4";default:return"span"}})(a);return RS(u,{"data-testid":"test-typography",...s,children:[t,e&&PS(FS,{iconSize:r,onCopy:o,text:`${t}`})]})}))`
    ${t=>QS(t)};
    margin: 0;
    position: relative;
`,Ww`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`),eE=Kw.div`
    ${kM}
    display: flex;
    flex-direction: ${t=>"bottom"==t.direction?"column":"row"};
    align-items: center;
    justify-content: center;
    max-width: fit-content;
    text-align: center;
    & > span {
        color: ${t=>t.spinnerColor};
        font-weight: 500;
        font-size: ${t=>`${t.fontSize?t.fontSize:t.size&&t.size/2}px`};
        line-height: 5px;
        margin: 8px;
    }
`,rE=Kw.div`
    width: ${t=>`${t.size}px`};
    height: ${t=>`${t.size}px`};
    box-sizing: border-box;
    border: 2px solid ${t=>t.spinnerColor};
    border-bottom: transparent;
    border-right: transparent;
    border-radius: 50%;
    animation: 1s ${tE} infinite;
`,nE=Ww`
    from {height: 2px; width: 2px;}
    to {height: 7px;width: 7px;}
`,iE=Kw.div`
    display: flex;
    justify-content: center;
    width: fit-content;

    span {
        align-items: center;
        display: flex;
        height: 10px;
        justify-content: center;
        width: 10px;

        &:before {
            animation-direction: alternate;
            animation-duration: 0.4s;
            animation-iteration-count: infinite;
            animation-name: ${nE};
            background-color: ${t=>t.spinnerColor};
            border-radius: 50%;
            content: '';
            display: block;
        }

        &#anim-delay1:before {
            animation-delay: 0s;
        }
        &#anim-delay2:before {
            animation-delay: 0.1s;
        }
        &#anim-delay3:before {
            animation-delay: 0.2s;
        }
        &#anim-delay4:before {
            animation-delay: 0.3s;
        }
        &#anim-delay5:before {
            animation-delay: 0.4s;
        }
    }
`,oE=({direction:t="bottom",fontSize:e,size:r=20,spinnerColor:n=Yw.white,spinnerType:i="loader",text:o,...a})=>RS(eE,{"data-testid":"test-loading",direction:t,fontSize:e,role:"spinner",size:r,spinnerColor:n,...a,children:["loader"==i?PS(rE,{spinnerColor:n,size:r}):PS(aE,{size:r,spinnerColor:n}),o&&PS("span",{children:o})]}),aE=({size:t,spinnerColor:e,...r})=>RS(iE,{"aria-busy":"true","aria-label":"loading, please wait","data-testid":"test-loading",role:"alert",size:t,spinnerColor:e,...r,children:[PS("span",{"aria-hidden":"true",id:"anim-delay1"}),PS("span",{"aria-hidden":"true",id:"anim-delay2"}),PS("span",{"aria-hidden":"true",id:"anim-delay3"}),PS("span",{"aria-hidden":"true",id:"anim-delay4"}),PS("span",{"aria-hidden":"true",id:"anim-delay5"})]}),sE=Iw`
    span {
        flex-direction: row-reverse;
    }
    svg {
        margin-right: 12px;
    }
`,uE=Iw`
    span {
        flex-direction: row;
    }
    svg {
        margin-left: 12px;
    }
`,lE=Iw`
    align-items: center;
    border-width: 0;
    display: flex;
    height: 32px;
    justify-content: center;
    padding: 0;
    width: 32px;
    text-indent: -99999px;
`;var cE={getIconColor:t=>Iw`
        svg {
            fill: ${t};
        }
    `,getIconLayoutStyles:t=>{switch(t){case"trailing":return uE;case"icon-only":return lE;default:return sE}},largeIconResize:()=>Iw`
    border-width: 4px;
    height: 40px;
    width: 40px;
`,smallIconResize:()=>Iw`
    height: 24px;
    width: 24px;
`};const fE=Iw`
    border-radius: 20px;
    font-size: 14px;
    padding: 0 16px;
`,dE=Iw`
    font-size: 14px;
    padding: 2px 14px;
`,hE=Iw`
    padding: 6px 22px;
`,pE=Iw`
    padding: 16px 24px;
`;var mE={getSizeStyles:t=>{switch(t){case"large":return hE;case"small":return fE;case"xl":return pE;default:return dE}}};var gE={linkStyles:Iw`
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${Yw.blue};
    padding: 0px;
    color: ${Yw.blue};

    :active {
        border-width: 0px;
        border-bottom: 1px solid ${Yw.blue};
    }

    :hover {
        color: ${Yw.blueSkyDark};
        border-bottom: 1px solid ${Yw.blueSkyDark};
    }

    svg {
        fill: ${Yw.blue};
    }
`,textStyles:Iw`
    background-color: transparent;
    border-width: 0px;
    color: ${Yw.blue};

    svg {
        fill: ${Yw.blue};
    }
`,transparentStyles:Iw`
    background-color: transparent;
    border-color: transparent;
`};const{getIconColor:yE,getIconLayoutStyles:vE,largeIconResize:bE,smallIconResize:wE}=cE,{getSizeStyles:_E}=mE,{linkStyles:CE,textStyles:xE,transparentStyles:ME}=gE;var SE={BaseButtonStyled:Kw.button`
    ${IM}
    ${kM}
    align-items: center;
    background-origin: border-box;
    border-radius: ${({radius:t})=>t?`${t}px;`:"12px"};
    border: 2px solid transparent;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: center;
    overflow: hidden;
    padding: 2px 4px;
    position: relative;
    text-align: center;
    transition: all 0.2s ease;
    width: ${t=>t.isFullWidth?"100%":"fit-content"};

    :hover {
        background-color: ${Xw("light",10)};
    }

    :focus {
        border-color: ${Yw.blue};
    }

    :disabled {
        opacity: 50%;
        pointer-events: none;
    }

    span {
        align-items: center;
        display: flex;
        pointer-events: none;
        z-index: 1;
    }

    svg {
        pointer-events: none;
        z-index: 1;
    }

    // minor theme and props style corrections
    ${({isTransparent:t})=>t&&ME}
    ${({theme:t,size:e})=>"link"!==t&&e&&_E(e)}
    ${({theme:t})=>"link"===t&&CE}
    ${({theme:t})=>"text"===t&&xE}

    // if icon styles corrections
    ${({icon:t,iconLayout:e})=>t&&e&&vE(e)}
    ${({icon:t,iconLayout:e,size:r})=>t&&"icon-only"===e&&"small"===r&&wE()}
    ${({icon:t,iconLayout:e,size:r})=>t&&"icon-only"===e&&"large"===r&&bE()}
    ${({icon:t,iconColor:e})=>t&&e&&yE(e)}
`};const{BaseButtonStyled:EE}=SE,kE=({disabled:t=!1,icon:e,iconColor:r,iconLayout:n="leading",id:i,isLoading:o=!1,isTransparent:a=!1,loadingProps:s,loadingText:u="Loading...",onClick:l=(t=>t.preventDefault),radius:c,size:f="regular",theme:d="secondary",text:h="click",type:p="button",...m})=>PS(EE,{"data-testid":"test-button",disabled:t||o,icon:e,iconColor:r,iconLayout:n,isTransparent:a,id:i,onClick:t=>l(t),radius:c,size:f,theme:d,type:p,...m,children:PS("span",{children:RS(TS,o?{children:[PS(oE,{size:15,...s}),u]}:{children:[h,e&&e]})})}),AE=(0,i.lazy)((()=>r.e(243).then(r.bind(r,89243)))),LE=(0,i.lazy)((()=>r.e(41).then(r.bind(r,20041)))),OE=(0,i.lazy)((()=>r.e(552).then(r.bind(r,78552)))),PE=(0,i.lazy)((()=>r.e(220).then(r.bind(r,50220)))),RE=(0,i.lazy)((()=>r.e(891).then(r.bind(r,47891)))),TE=(0,i.lazy)((()=>r.e(46).then(r.bind(r,33046)))),IE=t=>{const e=()=>PS(kE,{...t});return PS(TS,{children:PS(i.Suspense,{fallback:e(),children:(()=>{switch(t.theme){case"primary":return PS(PE,{...t});case"secondary":return PS(RE,{...t});case"outline":return PS(OE,{...t});case"translucent":return PS(TE,{...t});case"colored":return PS(AE,{...t});case"custom":return PS(LE,{customize:t.customize,...t});default:return e()}})()})})};Kw.section`
    ${kM};
    align-items: center;
    color: ${Yw.white};
    display: flex;
    height: 40px;
    justify-content: center;
    left: 0;
    max-width: 100%;
    padding: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 10001;
    background-color: ${t=>t.type&&(t=>{switch(t){case"success":return Yw.green;case"warning":return Yw.yellow;case"error":return Yw.red;default:return Yw.blue}})(t.type)};
    height: ${({height:t})=>t};

    button {
        padding: 0 8px;
        margin: 2px 6px;
        border: 0;
    }

    strong {
        margin: 0 8px;
        padding: 2px 8px;
        line-height: 16px;
    }
`;const NE=Iw`
  ${IM};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`,FE=Iw`
  ${IM};
`,BE=Iw`
  ${IM};
  color: ${Yw.greyIcons};
  display: flex;
  margin: 0 2px;
  user-select: none;
`;Kw.nav`
  ${FE};
  color: ${t=>(null==t?void 0:t.color)||Yw.grey};
`,Kw.ol`
  ${NE};
`,Kw.li`
  align-items: center;
  display: flex;

  svg:first-child {
    margin-right: 5px;
  }

  &:last-child {
    pointer-events: none;
  }
`,Kw(yv)`
  ${PM};
  align-items: center;
  display: flex;
  text-decoration: none;
  transition: all 0.2s ease;
  user-select: none;
  &:hover {
    color: ${Yw.blueDark};
  }
`,Kw.li`
  ${BE};
`;const DE=Iw`
  position: absolute;
  height: 0;
  width: 0;
`,UE=Iw`
  right: ${t=>t.width&&`calc(${t.width}px + 10px)`};
  top: 50%;
  transform: translateY(${t=>`${t.moveBody}%`});
`,jE=Iw`
  ${DE};
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${Yw.blueDark2};
  border-top: 10px solid transparent;
  right: -10px;
  top: calc(${t=>`${t.move}%`} - 10px);
`,$E=Iw`
  left: ${t=>t.width&&`calc(${t.width}px + 10px)`};
  top: 50%;
  transform: translateY(${t=>`${t.moveBody}%`});
`,zE=Iw`
  ${DE};
  border-bottom: 10px solid transparent;
  border-right: 10px solid ${Yw.blueDark2};
  border-top: 10px solid transparent;
  left: -10px;
  top: calc(${t=>`${t.move}%`} - 10px);
`,HE=Iw`
  bottom: ${t=>t.height&&`calc(${t.height}px + 10px)`};
  left: 50%;
  transform: translateX(${t=>`${t.moveBody}%`});
`,qE=Iw`
  left: 50%;
  top: ${t=>t.height&&`calc(${t.height}px + 10px)`};
  transform: translateX(${t=>`${t.moveBody}%`});
`,ZE={top:Iw`
  ${DE};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${Yw.blueDark2};
  left: calc(${t=>`${t.move}%`} - 10px);
  top: 100%;
`,bottom:Iw`
  ${DE}
  border-bottom: 10px solid ${Yw.blueDark2};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  left: calc(${t=>`${t.move}%`} - 10px);
  top: -10px;
`,left:jE,right:zE},VE={top:HE,bottom:qE,left:UE,right:$E},GE=Kw.div`
  ${TM}
  ${IM}
    color: #252525;
  position: relative;
`,WE=Kw.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: 1;
  min-width: ${t=>t.minWidth}px;
  ${({position:t})=>VE[t]};
`,KE=Kw.div`
  &:hover + ${WE} {
    opacity: 1;
    visibility: visible;
    transition: 0.5s;
    transition-delay: 0.1s;
  }
`,YE=Kw.div`
  background-color: ${Yw.blueDark2};
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: ${t=>t.maxWidth&&`${t.maxWidth}px`};
  min-width: fit-content;
  padding: 10px;
  transition: 0.5ms;
`;var JE={DivStyled:WE,DivStyledArrow:Kw.div`
  ${({position:t})=>ZE[t]}
`,DivStyledTooltipParent:GE,DivStyledTooltipContent:KE,DivStyledTooltipText:YE};const{DivStyled:XE,DivStyledArrow:QE,DivStyledTooltipParent:tk,DivStyledTooltipContent:ek,DivStyledTooltipText:rk}=JE;Kw.div`
  ${IM};
  ${kM};
  outline: 2px solid transparent;
  background: ${Yw.blueLight};
  border-radius: 20px;
  display: grid;
  min-height: fit-content;
  padding: 11px;
  position: relative;
  transition: all 0.2s ease;
  width: 100%;
  ${t=>t.isDisabled?"opacity:70%;":"&:hover {\n        background: radial-gradient(\n            102.8% 102.8% at 3.14% -9.06%,\n            #e9fffc 0%,\n            #e8fefb 4.74%,\n            #e4f4f7 50.11%,\n            #e1eef4 83.07%,\n            #e0ecf3 100%\n        );\n    }"}
  ${t=>"pointer"===t.cursorType&&"cursor: pointer;"}
    ${t=>t.isSelected&&`outline-color: ${Yw.green};`}
`,Kw.div`
  position: absolute;
  top: -2px;
  ${t=>"topL"===t.position?"left: -2px;":"right: -2px;"}
`,Kw.footer`
  display: grid;
  text-align: center;
`,Kw.div`
  position: relative;
    ${IM}
    align-items: center;

