(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e){e.exports={"menu.load_from_url":"Otw\xf3rz URL","menu.load_from_file":"Otw\xf3rz plik","menu.print":"Drukuj","menu.download":"Pobierz","menu.png_file":"Plik PNG","menu.svg_file":"Plik SVG","menu.github":"\u0179r\xf3d\u0142a na GitHub","intro.title":"Topola Genealogy","intro.description":"Topola Genealogy pozwala przegl\u0105da\u0107 drzewo genealogiczne w interaktywny spos\xf3b.","intro.instructions":"Kliknij OTW\xd3RZ URL lub OTW\xd3RZ PLIK, aby za\u0142adowa\u0107 plik GEDCOM. Wi\u0119kszo\u015b\u0107 program\xf3w genealogicznych posiada funkcj\u0119 eksportu do pliku GEDCOM.","intro.examples":"Poni\u017cej jest kilka przyk\u0142ad\xf3w znalezionych w Internecie:","intro.from":"\u017ar\xf3d\u0142o:","intro.privacy":"Prywatno\u015b\u0107","intro.privacy_note":'U\u017cywaj\u0105c funkcji "Otw\xf3rz plik", Twoje dane nie s\u0105 nigdzie wysy\u0142ane i pozostaj\u0105 na Twoim komputerze. U\u017cywaj\u0105c funkcji "Otw\xf3rz URL", dane z podanego adresu przesy\u0142ane s\u0105 przez us\u0142ug\u0119 {link} w celu umo\u017cliwienia za\u0142adowania danych z innej domeny (CORS).',"load_from_url.title":"Otw\xf3rz z adresu URL","load_from_url.comment":"Dane z podanego adresu URL zostan\u0105 za\u0142adowane poprzez us\u0142ug\u0119 {link} w celu unikni\u0119cia problem\xf3w z CORS.","load_from_url.cancel":"Anuluj","load_from_url.load":"Otw\xf3rz"}},224:function(e,t){},261:function(e,t,n){e.exports=n(464)},273:function(e,t){},279:function(e,t){},459:function(e,t,n){},464:function(e,t,n){"use strict";n.r(t);var a=n(151),r=n(221),o=n(222),l=n(0),i=n(59),s=n(223),c=n(15),u=n(35),d=n(36),m=n(40),h=n(37),f=n(39),p=n(41),g=n(17),v=n(226),E=n.n(v),y=n(67);function w(){var e=g.select("#chart").node().parentElement;e.scrollLeft=-g.event.transform.x,e.scrollTop=-g.event.transform.y}function b(){var e=g.select("#chart").node().parentElement,t=e.scrollLeft+e.clientWidth/2,n=e.scrollTop+e.clientHeight/2;g.select(e).call(g.zoom().translateTo,t,n)}var O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).chart=void 0,n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"renderChart",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{initialRender:!1};t.initialRender&&(g.select("#chart").node().innerHTML="",this.chart=Object(y.createChart)({json:this.props.data,chartType:y.HourglassChart,renderer:y.DetailedRenderer,svgSelector:"#chart",indiCallback:function(t){return e.props.onSelection(t)},animate:!0,updateSvgSize:!1,locale:this.context.intl.locale}));var n=this.chart.render({startIndi:this.props.selection.id,baseGeneration:this.props.selection.generation}),a=g.select("#chart"),r=a.node().parentElement;g.select(r).on("scroll",b).call(g.zoom().scaleExtent([1,1]).translateExtent([[0,0],n.size]).on("zoom",w));var o,l,i=r.clientWidth/2-n.origin[0],s=r.clientHeight/2-n.origin[1],c=g.max([0,(r.clientWidth-n.size[0])/2]),u=g.max([0,(r.clientHeight-n.size[1])/2]),d=a.transition().delay(200).duration(500);(t.initialRender?a:d).attr("transform","translate(".concat(c,", ").concat(u,")")).attr("width",n.size[0]).attr("height",n.size[1]),t.initialRender?(r.scrollLeft=-i,r.scrollTop=-s):d.tween("scrollLeft",(l=-i,function(){var e=g.interpolateNumber(r.scrollLeft,l);return function(t){r.scrollLeft=e(t)}})).tween("scrollTop",(o=-s,function(){var e=g.interpolateNumber(r.scrollTop,o);return function(t){r.scrollTop=e(t)}}))}},{key:"componentDidMount",value:function(){this.renderChart({initialRender:!0})}},{key:"componentDidUpdate",value:function(e){this.renderChart({initialRender:this.props.data!==e.data})}},{key:"render",value:function(){return l.createElement("div",{id:"svgContainer"},l.createElement("svg",{id:"chart"}))}},{key:"getSvgContents",value:function(){var e=document.getElementById("chart").cloneNode(!0);return e.removeAttribute("transform"),e.outerHTML}},{key:"print",value:function(){var e=this,t=document.createElement("iframe");t.style.position="absolute",t.style.top="-1000px",t.style.left="-1000px",t.onload=function(){t.contentDocument.open(),t.contentDocument.write(e.getSvgContents()),t.contentDocument.close(),setTimeout(function(){t.contentWindow.focus(),t.contentWindow.print(),t.parentNode.removeChild(t)},500)},document.body.appendChild(t)}},{key:"downloadSvg",value:function(){var e=document.createElement("a");e.href=URL.createObjectURL(new Blob([this.getSvgContents()],{type:"image/svg+xml"})),e.target="_blank",e.download="topola.svg",e.click()}},{key:"downloadPng",value:function(){var e=document.createElement("canvas"),t=document.getElementById("chart");e.width=2*t.getBBox().width,e.height=2*t.getBBox().height;var n=e.getContext("2d"),a=n.fillStyle;n.fillStyle="white",n.fillRect(0,0,e.width,e.height),n.fillStyle=a,E()(e,this.getSvgContents(),{ignoreDimensions:!0,ignoreClear:!0,scaleWidth:e.width,scaleHeight:e.height});e.toBlob(function(e){var t=document.createElement("a");t.href=URL.createObjectURL(e),t.target="_blank",t.download="topola.png",t.click()},"image/png")}}]),t}(l.PureComponent);function k(e,t){if(!e.children)return e;var n=e.children.sort(function(e){var t=new Map;return e.indis.forEach(function(e){t[e.id]=e}),function(e,n){var a,r,o=(a=e)<(r=n)?-1:a>r?1:0,l=t[e],i=t[n],s=l&&l.birth,c=i&&i.birth,u=s&&(s.date||s.dateRange&&s.dateRange.from),d=c&&(c.date||c.dateRange&&c.dateRange.from);return u&&u.year&&d&&d.year?u.year!==d.year?u.year-d.year:u.month&&d.month?u.month!==d.month?u.month-d.month:u.day&&d.day&&u.day!==d.day?u.month-d.month:o:o:o}}(t));return Object.assign({},e,{children:n})}function j(e){if(!e.imageUrl||e.imageUrl.startsWith("http"))return e;var t=Object.assign({},e);return delete t.imageUrl,t}function C(e){var t=Object(y.gedcomToJson)(e);if(!t||!t.indis||!t.indis.length||!t.fams||!t.fams.length)throw new Error("Failed to read GEDCOM file");return function(e){var t=e.indis.map(j);return Object.assign({},e,{indis:t})}(function(e){var t=e.fams.map(function(t){return k(t,e)});return Object.assign({},e,{fams:t})}(t))}function R(e,t,n){return{id:t||e.indis[0].id,generation:n||0}}function S(e,t){try{return Promise.resolve(function(e,t){var n=sessionStorage.getItem(e);if(n)return JSON.parse(n);if(!t)throw new Error("Error loading data. Please upload your file again.");var a=C(t),r=JSON.stringify(a);return sessionStorage.setItem(e,r),a}(e,t))}catch(n){return Promise.reject(new Error("Failed to read GEDCOM file"))}}O.contextTypes={intl:c.d};var z=n(480),_=n(473);function L(e){return l.createElement(_.a,{to:{pathname:"/view",search:p.stringify({url:e.url})}},e.text)}function M(){return l.createElement(z.a,{className:"intro"},l.createElement(z.a.Content,null,l.createElement(z.a.Header,null,l.createElement(c.a,{id:"intro.title",defaultMessage:"Topola Genealogy Viewer"}))),l.createElement(z.a.Content,null,l.createElement("p",null,l.createElement(c.a,{id:"intro.description",defaultMessage:"Topola Genealogy is a genealogy tree viewer that lets you browse the structure of the family."})),l.createElement("p",null,l.createElement(c.a,{id:"intro.instructions",defaultMessage:"Use the LOAD FROM URL or LOAD FROM FILE buttons above to load a GEDCOM file. You can export a GEDCOM file from most of the existing genealogy programs and web sites."})),l.createElement("p",null,l.createElement(c.a,{id:"intro.examples",defaultMessage:"Here are some examples from the web that you can view:"})),l.createElement("ul",null,l.createElement("li",null,l.createElement(L,{url:"http://genpol.com/module-Downloads-prep_hand_out-lid-32.html",text:"Karol Wojty\u0142a"})," ","(",l.createElement(c.a,{id:"intro.from",defaultMessage:"from"})," ",l.createElement("a",{href:"http://genpol.com/module-Downloads-display-lid-32.html"},"GENPOL"),")"),l.createElement("li",null,l.createElement(L,{url:"https://webtreeprint.com/tp_downloader.php?path=famous_gedcoms/shakespeare.ged",text:"Shakespeare"})," ","(",l.createElement(c.a,{id:"intro.from",defaultMessage:"from"})," ",l.createElement("a",{href:"https://webtreeprint.com/tp_famous_gedcoms.php"},"webtreeprint.com"),")"),l.createElement("li",null,l.createElement(L,{url:"http://genealogyoflife.com/tng/gedcom/HarryPotter.ged",text:"Harry Potter"})," ","(",l.createElement(c.a,{id:"intro.from",defaultMessage:"from"})," ",l.createElement("a",{href:"http://famousfamilytrees.blogspot.com/"},"Famous Family Trees"),")")),l.createElement("p",null,l.createElement("b",null,l.createElement(c.a,{id:"intro.privacy",defaultMessage:"Privacy"})),":",l.createElement(c.a,{id:"intro.privacy_note",defaultMessage:'When using the "load from file" option, this site does not send your data anywhere and files loaded from disk do not leave your computer. When using "load from URL", data is passed through the {link} service to deal with an issue with cross-site file loading in the browser (CORS).',values:{link:l.createElement("a",{href:"https://cors-anywhere.herokuapp.com/"},"cors-anywhere")}}))))}var D=n(481),U=n(476),x=n(488),P=n(489),T=n(484),G=n(232),I=n.n(G),N=n(478),F=n(485),H=n(220),W=n(477),A=n(475),B=n(482),J=n(483),V=n(479),K=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loadUrlDialogOpen:!1},n.inputRef=void 0,n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleUpload",value:function(e){var t=this,n=e.target.files;if(n&&n.length){var a=new FileReader;a.onload=function(e){var n=e.target.result,a=I()(n);t.props.history.push({pathname:"/view",search:p.stringify({file:a}),state:{data:n}})},a.readAsText(n[0])}}},{key:"handleLoadFromUrl",value:function(){var e=this;this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!0}),function(){return e.inputRef.focus()})}},{key:"handleClose",value:function(){this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!1}))}},{key:"handleLoad",value:function(){this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!1})),this.state.url&&this.props.history.push({pathname:"/view",search:p.stringify({url:this.state.url})})}},{key:"handleUrlChange",value:function(e){this.setState(Object.assign({},this.state,{url:e.target.value}))}},{key:"render",value:function(){var e=this,t=l.createElement(N.a,{open:this.state.loadUrlDialogOpen,onClose:function(){return e.handleClose()},centered:!1},l.createElement(F.a,null,l.createElement(H.a,{name:"cloud download"}),l.createElement(c.a,{id:"load_from_url.title",defaultMessage:"Load from URL",children:function(e){return e}})),l.createElement(N.a.Content,null,l.createElement(W.a,{onSubmit:function(){return e.handleLoad()}},l.createElement(A.a,{placeholder:"https://",fluid:!0,onChange:function(t){return e.handleUrlChange(t)},ref:function(t){return e.inputRef=t}}),l.createElement("p",null,l.createElement(c.a,{id:"load_from_url.comment",defaultMessage:"Data from the URL will be loaded through {link} to avoid CORS issues.",values:{link:l.createElement("a",{href:"https://cors-anywhere.herokuapp.com/"},"cors-anywhere.herokuapp.com")}})))),l.createElement(N.a.Actions,null,l.createElement(B.a,{secondary:!0,onClick:function(){return e.handleClose()}},l.createElement(c.a,{id:"load_from_url.cancel",defaultMessage:"Cancel"})),l.createElement(B.a,{primary:!0,onClick:function(){return e.handleLoad()}},l.createElement(c.a,{id:"load_from_url.load",defaultMessage:"Load"})))),n=this.props.showingChart?l.createElement(l.Fragment,null,l.createElement(J.a.Item,{as:"a",onClick:function(){return e.props.onPrint()}},l.createElement(H.a,{name:"print"}),l.createElement(c.a,{id:"menu.print",defaultMessage:"Print"})),l.createElement(V.a,{trigger:l.createElement("div",null,l.createElement(H.a,{name:"download"}),l.createElement(c.a,{id:"menu.download",defaultMessage:"Download"})),className:"item"},l.createElement(V.a.Menu,null,l.createElement(V.a.Item,{onClick:function(){return e.props.onDownloadPng()}},l.createElement(c.a,{id:"menu.png_file",defaultMessage:"PNG file"})),l.createElement(V.a.Item,{onClick:function(){return e.props.onDownloadSvg()}},l.createElement(c.a,{id:"menu.svg_file",defaultMessage:"SVG file"}))))):null;return l.createElement(J.a,{attached:"top",inverted:!0,color:"blue",size:"large"},l.createElement(_.a,{to:"/"},l.createElement(J.a.Item,null,l.createElement("b",null,"Topola Genealogy"))),l.createElement(J.a.Item,{as:"a",onClick:function(){return e.handleLoadFromUrl()}},l.createElement(H.a,{name:"cloud download"}),l.createElement(c.a,{id:"menu.load_from_url",defaultMessage:"Load from URL"})),l.createElement("input",{className:"hidden",type:"file",accept:".ged",id:"fileInput",onChange:function(t){return e.handleUpload(t)}}),l.createElement("label",{htmlFor:"fileInput"},l.createElement(J.a.Item,{as:"a"},l.createElement(H.a,{name:"folder open"}),l.createElement(c.a,{id:"menu.load_from_file",defaultMessage:"Load from file"}))),n,l.createElement(J.a.Item,{as:"a",href:"https://github.com/PeWu/topola-viewer",position:"right"},l.createElement(c.a,{id:"menu.github",defaultMessage:"Source on GitHub"})),t)}}]),t}(l.Component);function q(e){return l.createElement(D.a,{negative:!0,className:"error"},l.createElement(D.a.Header,null,"Failed to load file"),l.createElement("p",null,e.message))}var Z=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},n.chartRef=null,n.onSelection=function(e){var t=n.props.location,a=p.parse(t.search);a.indi=e.id,a.gen=String(e.generation),t.search=p.stringify(a),n.props.history.push(t)},n.renderMainArea=function(){return n.state.data&&n.state.selection?l.createElement(O,{data:n.state.data,onSelection:n.onSelection,selection:n.state.selection,ref:function(e){return n.chartRef=e}}):n.state.error?l.createElement(q,{message:n.state.error}):l.createElement(U.a,{active:!0,size:"large"})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"isNewData",value:function(e,t){return!(!e||e===this.state.hash)||!(!t||this.state.url===t)}},{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=this;if("/view"===this.props.location.pathname){var t=this.props.location.state&&this.props.location.state.data,n=p.parse(this.props.location.search),a=function(e){var t=n[e];return"string"===typeof t?t:void 0},r=a("url"),o=a("indi"),l=Number(a("gen")),i=isNaN(l)?void 0:l,s=a("file"),c="false"!==a("handleCors");if(r||s){if(this.isNewData(s,r)){(s?S(s,t):function(e,t){var n=sessionStorage.getItem(e);if(n)return Promise.resolve(JSON.parse(n));var a=t?"https://cors-anywhere.herokuapp.com/"+e:e;return window.fetch(a).then(function(e){return 200!==e.status?Promise.reject(new Error(e.statusText)):e.text()}).then(function(t){var n=C(t),a=JSON.stringify(n);return sessionStorage.setItem(e,a),n})}(r,c)).then(function(t){e.setState(Object.assign({},e.state,{data:t,hash:s,selection:R(t,o,i),error:void 0,loading:!1,url:r}))},function(t){e.setState(Object.assign({},e.state,{error:t.message,loading:!1}))}),this.setState(Object.assign({},this.state,{data:void 0,selection:void 0,hash:s,error:void 0,loading:!0,url:r}))}else if(this.state.data&&this.state.selection){var u=R(this.state.data,o,i);this.state.selection.id===u.id&&this.state.selection.generation===u.generation||this.setState(Object.assign({},this.state,{selection:u}))}}else this.props.history.replace({pathname:"/"})}}},{key:"render",value:function(){var e=this;return l.createElement(l.Fragment,null,l.createElement(x.a,{render:function(t){return l.createElement(K,Object.assign({},t,{showingChart:!("/view"!==e.props.history.location.pathname||!e.state.data||!e.state.selection),onPrint:function(){return e.chartRef&&e.chartRef.print()},onDownloadSvg:function(){return e.chartRef&&e.chartRef.downloadSvg()},onDownloadPng:function(){return e.chartRef&&e.chartRef.downloadPng()}}))}}),l.createElement(P.a,null,l.createElement(x.a,{exact:!0,path:"/",component:M}),l.createElement(x.a,{exact:!0,path:"/view",render:this.renderMainArea}),l.createElement(T.a,{to:"/"})))}}]),t}(l.Component),Y=n(250),Q=n(486);n(459),n(461);Object(c.c)([].concat(Object(a.a)(r),Object(a.a)(o)));var X={pl:s},$=navigator.language&&navigator.language.split(/[-_]/)[0],ee=Object(Y.detect)();ee&&"ie"===ee.name?i.render(l.createElement("p",null,"Topola Genealogy Viewer does not support Internet Explorer. Please try a different browser."),document.querySelector("#root")):i.render(l.createElement(c.b,{locale:$,messages:X[$]},l.createElement(Q.a,null,l.createElement(x.a,{component:Z}))),document.querySelector("#root"))}},[[261,2,1]]]);
//# sourceMappingURL=main.370a0e3a.chunk.js.map