const _0x10ce6a=_0xb160;(function(_0x24cc18,_0x3d123e){const _0x9e0a41=_0xb160,_0x50f9a9=_0x24cc18();while(!![]){try{const _0x347b20=parseInt(_0x9e0a41(0x1eb))/0x1+-parseInt(_0x9e0a41(0x1f1))/0x2*(parseInt(_0x9e0a41(0x205))/0x3)+-parseInt(_0x9e0a41(0x1f4))/0x4+parseInt(_0x9e0a41(0x1f6))/0x5+-parseInt(_0x9e0a41(0x20b))/0x6+-parseInt(_0x9e0a41(0x1f0))/0x7*(-parseInt(_0x9e0a41(0x20c))/0x8)+parseInt(_0x9e0a41(0x203))/0x9*(-parseInt(_0x9e0a41(0x1e7))/0xa);if(_0x347b20===_0x3d123e)break;else _0x50f9a9['push'](_0x50f9a9['shift']());}catch(_0xbfeb98){_0x50f9a9['push'](_0x50f9a9['shift']());}}}(_0x21c7,0x43741));function ReturnY(_0x546bcf,_0x4927cc,_0xa4df81,_0x57b56a,_0x31f393){return(_0x57b56a-_0x4927cc)*_0x31f393/(_0xa4df81-_0x546bcf)+(_0xa4df81*_0x4927cc-_0x546bcf*_0x57b56a)/(_0xa4df81-_0x546bcf);}function pad(_0x1de11f,_0x52f8bf){const _0x187cd8=_0xb160;var _0x1719b4='0000'+_0x1de11f;return _0x1719b4['substr'](_0x1719b4[_0x187cd8(0x1e8)]-_0x52f8bf);}function formatTime(_0x38bcb0){var _0x3e8bbd=s=ms=0x0,_0x1b25a5='';return _0x3e8bbd=Math['floor'](_0x38bcb0/0x3c),s=_0x38bcb0%0x3c,_0x1b25a5=pad(_0x3e8bbd,0x2)+':'+pad(s,0x2),_0x1b25a5;}let Abcd_str=_0x10ce6a(0x1fb),Abcd_Arr=Abcd_str[_0x10ce6a(0x1f3)](','),current_audio=()=>Number($(_0x10ce6a(0x204))[_0x10ce6a(0x1f9)]('index')),current_slide=()=>Number($(_0x10ce6a(0x204))['attr'](_0x10ce6a(0x1fa))),currentTime=()=>Number($('#Center_Content\x20audio')[_0x10ce6a(0x201)](0x0)[_0x10ce6a(0x1fd)]),total_Slide=()=>Object[_0x10ce6a(0x1ef)](Master_obj)[_0x10ce6a(0x1e8)],slide_Duration=()=>{const _0x1f9dc=_0x10ce6a;let _0xbddba6=Return_total_min(),_0x59e233=Return_current_min();$('#CurrentPlay')[_0x1f9dc(0x200)](formatTime(_0x59e233)+'\x20of\x20'+formatTime(_0xbddba6)),$('#ProgressRound')[_0x1f9dc(0x20e)](_0x1f9dc(0x1f8),ReturnY(0x0,0x0,_0xbddba6,0x5c,_0x59e233)+'%'),isNaN(_0xbddba6)&&setTimeout(function(){const _0x4e562a=_0x1f9dc;_0xbddba6=Return_total_min(),$(_0x4e562a(0x20d))['html'](formatTime(_0x59e233)+_0x4e562a(0x209)+formatTime(_0xbddba6)),$('#ProgressRound')[_0x4e562a(0x20e)](_0x4e562a(0x1f8),ReturnY(0x0,0x0,_0xbddba6,0x5c,_0x59e233)+'%');},0x12c);},Return_img=_0x28fefa=>{const _0x2a1285=_0x10ce6a;let _0x39488d=document[_0x2a1285(0x207)](_0x2a1285(0x1f5));return _0x39488d[_0x2a1285(0x208)]=_0x2a1285(0x20a)+_0x28fefa+'.jpg',_0x39488d;},Return_Vo=_0x299f21=>{const _0x1ca5bd=_0x10ce6a;let _0x330ead=_0x299f21[_0x1ca5bd(0x1f3)]('-')[0x0],_0x2d15d4=_0x299f21[_0x1ca5bd(0x1f3)]('-')[0x1],_0x3c14cd=new Audio(_0x1ca5bd(0x1ff)+_0x299f21+'.mp3');return _0x3c14cd['setAttribute'](_0x1ca5bd(0x1fc),Abcd_Arr[_0x1ca5bd(0x1ec)](_0x2d15d4)),_0x3c14cd['setAttribute'](_0x1ca5bd(0x1fa),_0x330ead),_0x3c14cd;},check_slide=(_0x58cc20,_0x345811)=>{const _0x11f95b=_0x10ce6a;return Master_obj[findSlide(_0x58cc20)][_0x11f95b(0x202)][_0x11f95b(0x1e8)]>_0x345811;},findSlide=_0x2067c2=>{const _0x449eef=_0x10ce6a;for(let _0x12ba56=0x0;_0x12ba56<Master_obj[_0x449eef(0x1e8)];_0x12ba56++){if(Master_obj[_0x12ba56][_0x449eef(0x1f2)]==_0x2067c2)return _0x12ba56;}return _0x449eef(0x1e9);},retun_alpha=_0x16a21d=>{return Abcd_Arr[_0x16a21d];},Return_total_min=()=>{const _0x451f00=_0x10ce6a;let _0x4d4e70=[...current_vo_arr[_0x451f00(0x1f7)](function(_0x1733e4){return _0x1733e4['duration'];})],_0x5d5b24=Math[_0x451f00(0x1e6)](_0x4d4e70[_0x451f00(0x1fe)]((_0x140376,_0x5da8f9)=>_0x140376+_0x5da8f9,0x0));return _0x5d5b24;},Return_current_min=()=>{const _0xd93d46=_0x10ce6a;let _0x2ad9bc=current_audio();if(isNaN(_0x2ad9bc))return 0x0;let _0x820478=[...current_vo_arr[_0xd93d46(0x1f7)](function(_0x2319e9){const _0x1af525=_0xd93d46;return _0x2319e9[_0x1af525(0x1ee)];})],_0x21d9cb=0x0;for(let _0x9ea516=0x0;_0x9ea516<_0x2ad9bc;_0x9ea516++){_0x21d9cb+=_0x820478[_0x9ea516];}return _0x21d9cb+=currentTime(),Math[_0xd93d46(0x1e6)](_0x21d9cb);};var full=!0x0,elem=document[_0x10ce6a(0x1ea)];function maximize(){(full?openFullscreen:closeFullscreen)();}function _0xb160(_0x24cf18,_0xe3078f){const _0x21c748=_0x21c7();return _0xb160=function(_0xb160dd,_0x14a069){_0xb160dd=_0xb160dd-0x1e5;let _0xe753c2=_0x21c748[_0xb160dd];return _0xe753c2;},_0xb160(_0x24cf18,_0xe3078f);}function _0x21c7(){const _0xc79539=['input/Slides/','1234938wkJjNh','2944VmeCYf','#CurrentPlay','css','requestFullscreen','round','4193040jBsorm','length','end','documentElement','549187KTCSZu','indexOf','exitFullscreen','duration','keys','2044iZMIjm','2iHDqFz','num','split','63340wvKDMl','img','1325470HLFbpz','map','left','attr','slide','a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z','index','currentTime','reduce','input/VO/','html','get','arr','9lKqJUb','#Center_Content\x20audio','13458eFMTXc','webkitRequestFullscreen','createElement','src','\x20of\x20'];_0x21c7=function(){return _0xc79539;};return _0x21c7();}function openFullscreen(){const _0x5eb028=_0x10ce6a;elem[_0x5eb028(0x1e5)]?elem[_0x5eb028(0x1e5)]():elem[_0x5eb028(0x206)]?elem['webkitRequestFullscreen']():elem['msRequestFullscreen']&&elem['msRequestFullscreen'](),full=!0x1;}function closeFullscreen(){const _0x4fc90c=_0x10ce6a;document[_0x4fc90c(0x1ed)]?document[_0x4fc90c(0x1ed)]():document['webkitExitFullscreen']?document['webkitExitFullscreen']():document['msExitFullscreen']&&document['msExitFullscreen'](),full=!0x0;}