/*
shaolin-kongfu

仅适配v2p以及青龙（青龙请自行抓包），不支持圈x

新手写脚本，难免有bug,欢迎反馈！
频道:https://t.me/ShaolinTemple1


软件名称：晶彩看点
赞赏:邀请码54870223 

万分感谢！！

[rewrite_local]
#阅读文章、视频
https://ant.xunsl.com/v5/article/complete.json 重写目标 https://raw.githubusercontent.com/shaolin-kongfu/js_scripts/main/jcwz.js
[MITM]
hostname = ant.xunsl.com
*/

const _0x52a7=['W79wWRJcISoSWPu','B2jQzwn0','j8kDfNVdJ8kbW4FcJmktiIbjWRddSJC4emkoxJnpWPL9pSkSw8oSoSoBeJ8Fha','5PQz5B+j55+854cg5PsL56MU6zIm6k6k','W6tcRgW8','cSo/q8kC','WRJdMGxdNs3dPmoYug0','AxnoB2rL','y3jVBG','CNvUu2nYAxb0','AgvHzgvYCW','gmkDWRfEW652W7K7dG','q29VA2LL','p2NcTW','l3yXl3nJCMLWDgLUzY9LDMfSDwf0zq','C2vUze5VDgLMEq','Bg9N','AM9PBG','BwvZC2fNzq','WRFNNRxLP7pKUzdKUydVV5/MJRhKU5NNRyJORBtORBu','CMvHzf9Zy29Yzq','B3b0CW','WPq/WPTY','yM9KEq','q29VA2LLsMfY','z2v0ANnVBG','zgf0yq','W5pcQSkqW53dL2a','wxxcPJJcVCoxz8o9ita','WRDFWQ3dNG','W4tcSupcSWz6bq','WRtdKchdSctcJq','cUA1J+INIoAwH+EROoAiKowkN++8JoIoT+w+L++8MG','W6tcRgW','zMv0y2G','pCoTWQG','WRRdHHNdUYRcLX8','ACoRhW','WO3cVdBdIq','W6dcPMORkCkHWOO','CMvWBgfJzq','C3rHy2S','bCkOW4/dKcZdVW','W6hcSfG6pSk0WPW','Bwf0y2G','B3bLBI11CMW','C2v0zgf0yq','WPr7WO0','Cg9ZDa','mtaYnZe5mxHqvKn3Aq','j1pdNCojwNDjymoBW7m','nSoNWRVcI8k+WONdQmozaYFcIxe','b8kyWO07b8ooqG','6i+j5y2b6zIJ6kYjWO9o5OMk5yMZWPWuWPddHxmBW7CgW7utya','kSkcb3pdGSkdW5lcMq','C2vUza','AxnozwvKuMv3CML0zq','C3rHDhvZ','D3PIB2r5','lmoIyqyxvCos','W6VcK1VcQ3ldMJGSWOJcLqDV','jtZdISkPWO3cHw50WQrf','WOFdHCkwW5VdH8o8EG','mSkqjXClWQFcQebOW7ZcGMpdRG','z290','WPq1WRTYWPFcJCkEda','imoFg3ZcSG','W74JWOaGWRSuWPe','z2v0u2vJB25KCW','vcjmssldPG','bmk+W6ddMY3dQmk9','DtXBW6K','AxrLBxm','rSksguhcJmo0','zw52','WQhdMWy','W5ddNCk/uG','Bg9KyxnOx2DLDa','BMfTzq','CMvKAxjLy3q','W7VcT3KMiSk0WPddLNu','lcTzbmoyFW','ACoHfSkwW4q9','W6X4WOZcO8kCtCkRW7/dRc4','qMpcItNcH8oavSo3jcCgWPldSa','W451WPTJWOVcGmk+bmojW6dcVfO','ndm0ntyZowvXsNvwuq','kSkPW40','WO/dNmo+WOxdKcS','q29UDgvUDc1mzw5NDgG','lcdPLjNOR68H','z2v0sg91CNm','pgFcT0S','W6akW6FdM1e4','Dg91z2GTy29VA2LL','W7JdPmkFACkWaG','zg9Uzq','xmkEWPldUW','AxnbCNjHEq','W7NcOWJcRGTA','W5pdN8k0Ca','qN7cOZNcMSoRyG','W7NdIWRdKXHNWRFcUwvnW4qiACk3FCk6WP8ylYxdLb8+wGFcKNLvWOS','nmoFhw4','W5pdGSkS','W6jCmCol','y2fSBa','z8kgW6j1W4ybEXVcR2S','C2v0ANnVBG','nmkifxJdISkuW4m','zSoVdmkEW4uYvW','y29VA2LLsMfY','WPddJCoIWOVdIItcQJea','rNhcTW','W53dIrBdKYH3WOtcVG','WQzqWR3dMNGpDJGa','W6nsWRZcKmk0WPmmW7S','D3jPDgvgAwXLu3LUyW','WOtdNmoK','WRDrWRFdMG','C3rHDhvZq29Kzq','W57dOmkXWQpcPmoLA8k6WPZcQcZdRCkx','n3BcPKtcKcZdMG','m8kdaNldGmklW4JcNCkE','wmkBkLVcICoJW7C','vmkqc0hcMSo5W5W','W7NcOWRcRGbr','Aw5KzxHpzG','z2v0twLUDxrLCW','gYygjN/dPfW','mwf6DKP3Aa','C2v0DMfS','zxHPC3rZu3LUyW','z2v0rNvSBfLLyxi','CgfYC2u','WOBdJSktW5RdMSobBW','Bg9NCW','WRP+qCo5W6bWWORdRGq','mtn1Cw5vC2G','pwij','5lMW6zQn6kYNWRRcTmkDW7a','WP7cQcNdJq','BwvKAweTDxjS','zSoBC0i','eCkbDHe','cSk3W67dKdO','6iYN5yYg562O5lUb5lMo6zIX6k2P6kYs5Rg8W5BdToAjQUwkLpcNVBO','sNlcTa','WQddHWy','FCkCW7LOW68jzJJcUa','WQbPxmoLW6PW','C3bSAxq','Cgf0Aa','WQr/zSoIW6fX','WQpdLqZdNq','mmo3yre','WPCGWOPPWOhcNq','y2T0B3vNAa','W5RdIq7dNG','mtC2mZi2rNfhEKvJ','lSoHWRhcVCk0WOZdVq','rCoNemkqW4ySydhcMSoJrCkbnmkhWP8Gj8kLcmktlr8FimosuCkDEmoEW4VcMqyYfMtcPNG','5Q+O6zIN6kYI6kYj5RoB5Bsu5AYM5z6/776I5P2p5QYY6lAx6lY0','W78OWOuHWQyPWOq','D3jPDgu','C3rHCNruAw1L','W6HdWQ3cNW','eCoNq8kCWPGBkmka','D2fPDa','Bg9NrxjY','WOBdK8kKW4RdKmoPBa','z2v0zgf0yq','WPNdL1ZdMmkHWRG','WO7cNCo5fSouEwbKW53dJxZcT8kq','zgf0yuzPBgu','WP3cUc7dPSoeWPPCW7BdPIaunSol','BgvUz3rO','lIqX','WQbkWQVdLNabCtSD','cGOGC2HHB2XPBI1RB25NzNu','yw5KCM9Pza','W4RcPCkEW54','ChvZAa','B3bLBLvYBa','y2f0y2G','WR9rWR4','jCombq','W7XCkmog','wxxcTdpcJSosyq','D3jPDgvKyxrH','FmkE57Q65P2qW7BcN/c8HRPr','bSktWOG6gSoZvW','gmkDWQjfW7rfW7KWeG','W69jWQ3cKCoSWOew','Ahr0Chm6lY9HBNqUEhvUC2WUy29Tl3y1l2fYDgLJBguVy29TCgXLDguUANnVBG','z8k9ng7cUhW','mvJdNW','BmkhW7mVW6upEW','gCoYuSkwW5qAoW','W5ddJCk+','pCkTW41g','CMvHza','WR9rWR7dUMWu','qtxcRmkIaIRcNJVdOahdVbbM','W7OPWOy','44cI5OYV56Ef44kp6k6E6zUh6k6x5PwY56IR56665B+v6l6Y5z6X5A2e5OMr5zc46i6x5y+uW7Tzv8o2776L5yAu6lEo5lUW5Q2a6iwI5PY6','kCo4WRdcSCkV','W6hcSfO6lCk9WQe','DCoLdmkz','WP/cPSoZW70','W6ThWQ3cS8o2WOGkW78','EHRcJSkSuhOC','W788gmk/WRbGWQBdJclcGSk0','W5lcRv7cUG','WPBdI8o8','i8oobwBcOW','zSoRfSksW5eH','Bg9KyxnOx3nLDa','nJa2ndK5rM96svPS','yw50lNH1BNnSlMnVBq','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','Aw5PDeDVDevUDG','aSkAWPbcW7j2W7u','Dw5KzwzPBMvK','WQr/E8o4W7DZWO4','DgvZDa','ndK5mdeWB0vfuMnR','CMvZB2X2zq','WRJdJrS','ue9tva','z2v0','AxntDxjNzq','WOBdK8kMW4RdG8oGuq','Bg9HzgrHDge','y2TQyxi','AxnrDwfUwa','DhjPBq','DxjS','W6fLWOtcTmkntmkl','Dg9tDhi','Dg9tDhjPBMC','WRtdJqtdQWZcJaOgWPZcQG','WOJcSIJdOmokWPzF','m1pdNCkawgXh','bmkzWOaW','EHRcJCkVxw8C','z2v0vgLTzq','WONcUc7dGCokWOfw','eEAVIEMzVUIVLEs4K+wiRoAlIoIJUos6OmorjmoHw35UW64NW6m','WR9rWR7dRhSwEs8fhtJdOW','5OkO6ycj5OUP55Qe5PIV55sOiIyI6zQu5BYacG','WOVdG0G','W71OWOdcVG','ftaJb3FdP2e','AxnmB29U','yxnZAwDU','6i+N5y2O562f','zxHPDa','DMfSDwvgB3jlzxK','z2v0DMfS','mtiWmq','W7GNWOWH','mJaWmJv0tvzhwKq','A2v5CW','Ahr0Ca','W6rLWOhcUCkjA8kkW6O','C2v0lwnVB2TPzq','6i635y+w6zIf6k+7oIdMIjdLIP8SihD6yM9KExm6ia','q29UDgvUDc1uExbL','tmo5WQJcHSoSW6ddSa','yqZcSCkSu2i','oCo/WRG','zcHxDcRdRXzqW4pcHbzkhYK','oCkPW4PA','WOdcVdFdGa','CMvHzezPBgvtEw5J'];const _0x2fca0c=_0x5546,_0x4c5fb8=_0x5364;(function(_0x3735c6,_0x208727){const _0x15a997=_0x5546,_0x29f12f=_0x5364;while(!![]){try{const _0x8a5240=parseInt(_0x29f12f(0x1d2))+-parseInt(_0x15a997(0x1ac,'OBiy'))+-parseInt(_0x29f12f(0x101))+-parseInt(_0x29f12f(0x1bd))*parseInt(_0x29f12f(0x125))+-parseInt(_0x29f12f(0x20d))+-parseInt(_0x15a997(0x1e0,']cD['))+-parseInt(_0x29f12f(0x189))*-parseInt(_0x29f12f(0x1b5));if(_0x8a5240===_0x208727)break;else _0x3735c6['push'](_0x3735c6['shift']());}catch(_0x4283bd){_0x3735c6['push'](_0x3735c6['shift']());}}}(_0x52a7,0xc63e3));function _0x5364(_0x418cdb,_0x544e1d){return _0x5364=function(_0x52a79d,_0x5364f0){_0x52a79d=_0x52a79d-0x101;let _0x55656a=_0x52a7[_0x52a79d];if(_0x5364['FcueLd']===undefined){var _0x554e5c=function(_0x2f1030){const _0x554671='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3c23a4='',_0x226e44='';for(let _0x4520e1=0x0,_0x34c0c9,_0x126bee,_0x31567f=0x0;_0x126bee=_0x2f1030['charAt'](_0x31567f++);~_0x126bee&&(_0x34c0c9=_0x4520e1%0x4?_0x34c0c9*0x40+_0x126bee:_0x126bee,_0x4520e1++%0x4)?_0x3c23a4+=String['fromCharCode'](0xff&_0x34c0c9>>(-0x2*_0x4520e1&0x6)):0x0){_0x126bee=_0x554671['indexOf'](_0x126bee);}for(let _0x9bc4b5=0x0,_0x384170=_0x3c23a4['length'];_0x9bc4b5<_0x384170;_0x9bc4b5++){_0x226e44+='%'+('00'+_0x3c23a4['charCodeAt'](_0x9bc4b5)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x226e44);};_0x5364['geYnng']=_0x554e5c,_0x418cdb=arguments,_0x5364['FcueLd']=!![];}const _0x27417a=_0x52a7[0x0],_0x2fdc42=_0x52a79d+_0x27417a,_0x56a203=_0x418cdb[_0x2fdc42];return!_0x56a203?(_0x55656a=_0x5364['geYnng'](_0x55656a),_0x418cdb[_0x2fdc42]=_0x55656a):_0x55656a=_0x56a203,_0x55656a;},_0x5364(_0x418cdb,_0x544e1d);}const $=new Env('晶彩看点'),notify=$[_0x4c5fb8(0x13a)]()?require(_0x2fca0c(0x188,'$Sll')):'';message='';let wzbody=$['isNode']()?process[_0x2fca0c(0x103,'aGVU')][_0x2fca0c(0x1df,'Oyg*')]?process[_0x2fca0c(0x1f7,'1GO6')]['wzbody']:'':$[_0x4c5fb8(0x1de)]('wzbody')?$['getdata'](_0x4c5fb8(0x16d)):'',wzbodyArr=[],wzbodys='';const wzheader={'device-platform':_0x4c5fb8(0x1e7),'Content-Type':_0x4c5fb8(0x20f),'Content-Length':_0x4c5fb8(0x123),'Host':_0x4c5fb8(0x20e)};typeof $request!==_0x4c5fb8(0x212)&&(getwzbody(),$['done']());if(!wzbody)$[_0x2fca0c(0x1fa,'ousx')]($[_0x2fca0c(0x124,'0qz$')],_0x2fca0c(0x200,'V@)o'),'测试',{'open-url':''}),$[_0x4c5fb8(0x193)]();else{if(wzbody[_0x2fca0c(0x1d6,'0qz$')]('&')==-0x1)wzbodyArr['push'](wzbody);else{if(wzbody[_0x2fca0c(0x1ba,'2K9m')]('&')>-0x1)wzbodys=wzbody[_0x4c5fb8(0x1ca)]('&');else process['env'][_0x2fca0c(0x1cf,'$Sll')]&&process[_0x2fca0c(0x11a,'Oyg*')][_0x2fca0c(0x17c,'1D0p')][_0x4c5fb8(0x1b2)]('&')>-0x1?(wzbodyArr=process[_0x4c5fb8(0x17d)]['wzbody'][_0x4c5fb8(0x1ca)]('&'),console['log'](_0x4c5fb8(0x119))):wzbodys=[process[_0x4c5fb8(0x17d)][_0x4c5fb8(0x16d)]];}};Object[_0x4c5fb8(0x126)](wzbodys)[_0x2fca0c(0x111,'E)B5')](_0x9bc4b5=>{const _0x58a074=_0x2fca0c;wzbodys[_0x9bc4b5]&&wzbodyArr[_0x58a074(0x1c0,'E)B5')](wzbodys[_0x9bc4b5]);}),!(async()=>{const _0x30a311=_0x4c5fb8,_0x1c2acb=_0x2fca0c;console['log']('共'+wzbodyArr[_0x1c2acb(0x18b,'xlLd')]+_0x1c2acb(0x1bf,'YT(H'));for(let _0x384170=0x0;_0x384170<wzbodyArr['length'];_0x384170++){$[_0x30a311(0x145)]='',wzbody1=wzbodyArr[_0x384170],console[_0x1c2acb(0x17e,'7cCC')]('--------第\x20'+(_0x384170+0x1)+_0x1c2acb(0x117,'1D0p')),await wzjl(),await $[_0x30a311(0x1db)](0x7530),console[_0x1c2acb(0x19b,']cD[')]('\x0a\x0a');}date=new Date(),$[_0x30a311(0x13a)]()&&date[_0x30a311(0x18e)]()==0xb&&date[_0x30a311(0x1b3)]()<0xa?message[_0x30a311(0x1e3)]!=0x0&&await notify[_0x30a311(0x142)](_0x1c2acb(0x136,'2K9m'),message+_0x30a311(0x1e6)):$[_0x1c2acb(0x1c7,'7cCC')]($[_0x1c2acb(0x194,'V@)o')],'',message);})()[_0x4c5fb8(0x1eb)](_0x5ca81a=>$[_0x4c5fb8(0x1dc)](_0x5ca81a))[_0x2fca0c(0x151,'EspG')](()=>$[_0x2fca0c(0x1aa,'ptl1')]());function getwzbody(){const _0x369c37=_0x4c5fb8,_0x23e6e0=_0x2fca0c;if($request[_0x23e6e0(0x209,'xlLd')][_0x369c37(0x15f)](/\/article\/complete/)){bodyVal=$request[_0x369c37(0x14a)];if(wzbody){if(wzbody[_0x369c37(0x1b2)](bodyVal)>-0x1)$[_0x23e6e0(0x158,'yVfy')](_0x23e6e0(0x1d5,'E3m0'));else wzbody[_0x23e6e0(0x198,'MLW8')](bodyVal)==-0x1&&(wzbodys=wzbody+'&'+bodyVal,$[_0x23e6e0(0x16e,'nSUB')](wzbodys,_0x369c37(0x16d)),$['log']($[_0x23e6e0(0x1ee,'dyjI')]+_0x369c37(0x12a)+bodyVal),bodys=wzbodys[_0x23e6e0(0x20a,'4$ml')]('&'),$['msg']($[_0x23e6e0(0x197,'ousx')],_0x23e6e0(0x11f,'4$ml')+bodys[_0x23e6e0(0x18b,'xlLd')]+'个阅读请求:\x20成功🎉',''));}else $[_0x369c37(0x161)](bodyVal,_0x23e6e0(0x14e,'$&Z6')),$[_0x369c37(0x143)]($[_0x369c37(0x181)]+_0x23e6e0(0x168,'JNo$')+bodyVal),$['msg']($[_0x23e6e0(0x131,'E)B5')],_0x23e6e0(0x1c5,'1B!V'),'');}}function wzjl(_0x244892=0x0){return new Promise(_0x1dbaa0=>{const _0xa2c8b6=_0x5364;let _0x46b695={'url':_0xa2c8b6(0x1f5),'headers':wzheader,'body':wzbody1};$[_0xa2c8b6(0x163)](_0x46b695,async(_0x4aeffb,_0x490075,_0x114f3a)=>{const _0x247f5b=_0x5546,_0x697e53=_0xa2c8b6;try{const _0x2436c2=JSON['parse'](_0x114f3a);_0x2436c2[_0x697e53(0x17b)][_0x697e53(0x147)]!==_0x247f5b(0x1ae,'#Eq4')?console[_0x247f5b(0x1ec,'ptl1')](_0x697e53(0x153)+_0x2436c2[_0x697e53(0x17b)][_0x247f5b(0x14f,'MLW8')]+'金币'):console[_0x247f5b(0x1ff,'0qz$')](_0x247f5b(0x146,'ousx'));}catch(_0x372038){}finally{_0x1dbaa0();}},_0x244892);});}function _0x5546(_0x418cdb,_0x544e1d){return _0x5546=function(_0x52a79d,_0x5364f0){_0x52a79d=_0x52a79d-0x101;let _0x55656a=_0x52a7[_0x52a79d];if(_0x5546['NrWLpD']===undefined){var _0x554e5c=function(_0x554671){const _0x3c23a4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x226e44='',_0x4520e1='';for(let _0x34c0c9=0x0,_0x126bee,_0x31567f,_0x9bc4b5=0x0;_0x31567f=_0x554671['charAt'](_0x9bc4b5++);~_0x31567f&&(_0x126bee=_0x34c0c9%0x4?_0x126bee*0x40+_0x31567f:_0x31567f,_0x34c0c9++%0x4)?_0x226e44+=String['fromCharCode'](0xff&_0x126bee>>(-0x2*_0x34c0c9&0x6)):0x0){_0x31567f=_0x3c23a4['indexOf'](_0x31567f);}for(let _0x384170=0x0,_0x5ca81a=_0x226e44['length'];_0x384170<_0x5ca81a;_0x384170++){_0x4520e1+='%'+('00'+_0x226e44['charCodeAt'](_0x384170)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4520e1);};const _0x2f1030=function(_0x244892,_0x1dbaa0){let _0x46b695=[],_0x4aeffb=0x0,_0x490075,_0x114f3a='';_0x244892=_0x554e5c(_0x244892);let _0x2436c2;for(_0x2436c2=0x0;_0x2436c2<0x100;_0x2436c2++){_0x46b695[_0x2436c2]=_0x2436c2;}for(_0x2436c2=0x0;_0x2436c2<0x100;_0x2436c2++){_0x4aeffb=(_0x4aeffb+_0x46b695[_0x2436c2]+_0x1dbaa0['charCodeAt'](_0x2436c2%_0x1dbaa0['length']))%0x100,_0x490075=_0x46b695[_0x2436c2],_0x46b695[_0x2436c2]=_0x46b695[_0x4aeffb],_0x46b695[_0x4aeffb]=_0x490075;}_0x2436c2=0x0,_0x4aeffb=0x0;for(let _0x372038=0x0;_0x372038<_0x244892['length'];_0x372038++){_0x2436c2=(_0x2436c2+0x1)%0x100,_0x4aeffb=(_0x4aeffb+_0x46b695[_0x2436c2])%0x100,_0x490075=_0x46b695[_0x2436c2],_0x46b695[_0x2436c2]=_0x46b695[_0x4aeffb],_0x46b695[_0x4aeffb]=_0x490075,_0x114f3a+=String['fromCharCode'](_0x244892['charCodeAt'](_0x372038)^_0x46b695[(_0x46b695[_0x2436c2]+_0x46b695[_0x4aeffb])%0x100]);}return _0x114f3a;};_0x5546['YBpBsv']=_0x2f1030,_0x418cdb=arguments,_0x5546['NrWLpD']=!![];}const _0x27417a=_0x52a7[0x0],_0x2fdc42=_0x52a79d+_0x27417a,_0x56a203=_0x418cdb[_0x2fdc42];return!_0x56a203?(_0x5546['vFDKTa']===undefined&&(_0x5546['vFDKTa']=!![]),_0x55656a=_0x5546['YBpBsv'](_0x55656a,_0x5364f0),_0x418cdb[_0x2fdc42]=_0x55656a):_0x55656a=_0x56a203,_0x55656a;},_0x5546(_0x418cdb,_0x544e1d);}function Env(_0x52122b,_0x1668ca){const _0x3d1e4b=_0x4c5fb8,_0x2f6263=_0x2fca0c;'undefined'!=typeof process&&JSON[_0x2f6263(0x1e5,'ptl1')](process[_0x3d1e4b(0x17d)])[_0x2f6263(0x167,'w^^w')](_0x2f6263(0x192,']cD['))>-0x1&&process[_0x3d1e4b(0x120)](0x0);class _0x345b90{constructor(_0x7d253b){const _0x28fbce=_0x3d1e4b;this[_0x28fbce(0x17d)]=_0x7d253b;}[_0x3d1e4b(0x16a)](_0x37e7fc,_0x40dc30=_0x2f6263(0x162,'ptl1')){const _0x8e0425=_0x3d1e4b,_0x40a559=_0x2f6263;_0x37e7fc='string'==typeof _0x37e7fc?{'url':_0x37e7fc}:_0x37e7fc;let _0x556004=this[_0x40a559(0x1a9,'xlLd')];return _0x8e0425(0x104)===_0x40dc30&&(_0x556004=this[_0x8e0425(0x163)]),new Promise((_0x1b3066,_0x524b3c)=>{const _0x3a00d9=_0x40a559;_0x556004[_0x3a00d9(0x1d1,'bx!q')](this,_0x37e7fc,(_0x50f1c9,_0x120e28,_0x2810bb)=>{_0x50f1c9?_0x524b3c(_0x50f1c9):_0x1b3066(_0x120e28);});});}[_0x2f6263(0x156,'YT(H')](_0x122369){const _0x41373c=_0x3d1e4b;return this[_0x41373c(0x16a)][_0x41373c(0x19d)](this[_0x41373c(0x17d)],_0x122369);}['post'](_0x59ef1c){const _0x53331d=_0x2f6263,_0xe5175c=_0x3d1e4b;return this[_0xe5175c(0x16a)][_0x53331d(0x159,'E)B5')](this[_0xe5175c(0x17d)],_0x59ef1c,_0xe5175c(0x104));}}return new class{constructor(_0x53ad75,_0x3a21bb){const _0x4d2f5c=_0x3d1e4b,_0x18d8cb=_0x2f6263;this[_0x18d8cb(0x1cd,'7cCC')]=_0x53ad75,this[_0x4d2f5c(0x127)]=new _0x345b90(this),this['data']=null,this[_0x4d2f5c(0x1e1)]=_0x18d8cb(0x1f8,'Fapo'),this['logs']=[],this['isMute']=!0x1,this[_0x4d2f5c(0x16b)]=!0x1,this[_0x18d8cb(0x166,'YT(H')]='\x0a',this[_0x4d2f5c(0x1d8)]=new Date()[_0x18d8cb(0x11c,'hf0b')](),Object[_0x18d8cb(0x184,'UR#v')](this,_0x3a21bb),this[_0x4d2f5c(0x143)]('','🔔'+this[_0x18d8cb(0x1ee,'dyjI')]+',\x20开始!');}[_0x3d1e4b(0x13a)](){const _0x32d2f5=_0x2f6263;return _0x32d2f5(0x139,'7cCC')!=typeof module&&!!module[_0x32d2f5(0x1b0,'1D0p')];}[_0x2f6263(0x1af,'1D0p')](){const _0x557499=_0x3d1e4b;return _0x557499(0x212)!=typeof $task;}[_0x2f6263(0x213,'fEAx')](){const _0x5e9629=_0x3d1e4b,_0x3636c3=_0x2f6263;return _0x3636c3(0x1a6,'ptl1')!=typeof $httpClient&&_0x5e9629(0x212)==typeof $loon;}['isLoon'](){const _0x11dcc5=_0x3d1e4b;return _0x11dcc5(0x212)!=typeof $loon;}['toObj'](_0x2fe4a3,_0x18d4e4=null){try{return JSON['parse'](_0x2fe4a3);}catch{return _0x18d4e4;}}[_0x3d1e4b(0x10e)](_0x22e140,_0x133f3a=null){try{return JSON['stringify'](_0x22e140);}catch{return _0x133f3a;}}[_0x3d1e4b(0x14c)](_0x277252,_0x189bf7){const _0x9653f8=_0x3d1e4b,_0x4f7d51=_0x2f6263;let _0x1ee1fc=_0x189bf7;const _0x422f18=this[_0x4f7d51(0x157,'aGVU')](_0x277252);if(_0x422f18)try{_0x1ee1fc=JSON[_0x9653f8(0x1b9)](this[_0x4f7d51(0x116,'E)B5')](_0x277252));}catch{}return _0x1ee1fc;}[_0x3d1e4b(0x19f)](_0x5bdd54,_0x391224){const _0x561703=_0x2f6263;try{return this[_0x561703(0x12c,'S123')](JSON[_0x561703(0x13e,'Z[n$')](_0x5bdd54),_0x391224);}catch{return!0x1;}}['getScript'](_0x53bd19){return new Promise(_0xe5ae37=>{const _0x2aa9cd=_0x5364;this[_0x2aa9cd(0x105)]({'url':_0x53bd19},(_0x538c0f,_0xf8861,_0x4dedae)=>_0xe5ae37(_0x4dedae));});}[_0x3d1e4b(0x13c)](_0xcc49f3,_0x1785b5){const _0x2b343d=_0x2f6263,_0x22fdee=_0x3d1e4b;return new Promise(_0x5c2745=>{const _0x44eebd=_0x5364,_0x9dbca6=_0x5546;let _0x3499e0=this[_0x9dbca6(0x1f9,'JNo$')](_0x9dbca6(0x199,'bx!q'));_0x3499e0=_0x3499e0?_0x3499e0['replace'](/\n/g,'')[_0x44eebd(0x10b)]():_0x3499e0;let _0x4d2571=this[_0x9dbca6(0x112,'1GO6')](_0x9dbca6(0x1d4,'yVfy'));_0x4d2571=_0x4d2571?0x1*_0x4d2571:0x14,_0x4d2571=_0x1785b5&&_0x1785b5[_0x9dbca6(0x1d3,'YT(H')]?_0x1785b5['timeout']:_0x4d2571;const [_0x4b64f5,_0x3bd9aa]=_0x3499e0['split']('@'),_0x113ec7={'url':'http://'+_0x3bd9aa+_0x44eebd(0x141),'body':{'script_text':_0xcc49f3,'mock_type':_0x44eebd(0x13b),'timeout':_0x4d2571},'headers':{'X-Key':_0x4b64f5,'Accept':_0x9dbca6(0x1be,'m#n&')}};this['post'](_0x113ec7,(_0x48104e,_0x3249f0,_0x473dd6)=>_0x5c2745(_0x473dd6));})[_0x22fdee(0x1eb)](_0x418424=>this[_0x2b343d(0x1fd,'ptl1')](_0x418424));}[_0x2f6263(0x169,'#Eq4')](){const _0x24d30a=_0x3d1e4b,_0xac31ce=_0x2f6263;if(!this[_0xac31ce(0x15d,'UrKU')]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x24d30a(0x1cb)]=this[_0x24d30a(0x1cb)]?this[_0xac31ce(0x203,'yVfy')]:require(_0xac31ce(0x19c,'dyjI'));const _0x5f294a=this[_0x24d30a(0x1cb)][_0xac31ce(0x206,'&LDw')](this[_0x24d30a(0x1e1)]),_0x61ba16=this[_0x24d30a(0x1cb)][_0x24d30a(0x102)](process[_0xac31ce(0x12e,'YT(H')](),this[_0x24d30a(0x1e1)]),_0x5a4db0=this['fs'][_0x24d30a(0x1b7)](_0x5f294a),_0x11dd95=!_0x5a4db0&&this['fs']['existsSync'](_0x61ba16);if(!_0x5a4db0&&!_0x11dd95)return{};{const _0x21bfe9=_0x5a4db0?_0x5f294a:_0x61ba16;try{return JSON['parse'](this['fs'][_0x24d30a(0x132)](_0x21bfe9));}catch(_0x141a64){return{};}}}}[_0x3d1e4b(0x1f0)](){const _0x46a28c=_0x2f6263,_0x461650=_0x3d1e4b;if(this[_0x461650(0x13a)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x461650(0x1cb)]=this[_0x461650(0x1cb)]?this['path']:require(_0x46a28c(0x1fb,'ZH^3'));const _0x32fc14=this[_0x46a28c(0x1fb,'ZH^3')][_0x46a28c(0x1a0,'#Eq4')](this[_0x46a28c(0x1a5,'bx!q')]),_0x2da610=this[_0x461650(0x1cb)][_0x46a28c(0x1ef,'MLW8')](process['cwd'](),this['dataFile']),_0x4c4941=this['fs'][_0x46a28c(0x186,'YV)8')](_0x32fc14),_0x54eabb=!_0x4c4941&&this['fs']['existsSync'](_0x2da610),_0x3bc9a1=JSON[_0x46a28c(0x1a3,'xlLd')](this[_0x46a28c(0x1d9,'E3m0')]);_0x4c4941?this['fs'][_0x461650(0x1a8)](_0x32fc14,_0x3bc9a1):_0x54eabb?this['fs'][_0x46a28c(0x1fe,'B(z$')](_0x2da610,_0x3bc9a1):this['fs'][_0x461650(0x1a8)](_0x32fc14,_0x3bc9a1);}}['lodash_get'](_0x5974b6,_0x2d84a0,_0x4c9318){const _0x3095b5=_0x2f6263,_0x4de242=_0x3d1e4b,_0x4e26fa=_0x2d84a0[_0x4de242(0x15b)](/\[(\d+)\]/g,_0x4de242(0x1e4))[_0x3095b5(0x201,'YT(H')]('.');let _0x1dd64d=_0x5974b6;for(const _0x2d0d5f of _0x4e26fa)if(_0x1dd64d=Object(_0x1dd64d)[_0x2d0d5f],void 0x0===_0x1dd64d)return _0x4c9318;return _0x1dd64d;}[_0x3d1e4b(0x20c)](_0x4f0cac,_0x3b6e77,_0x4b5216){const _0x4e93dd=_0x2f6263,_0xcf9e45=_0x3d1e4b;return Object(_0x4f0cac)!==_0x4f0cac?_0x4f0cac:(Array[_0xcf9e45(0x195)](_0x3b6e77)||(_0x3b6e77=_0x3b6e77[_0xcf9e45(0x10f)]()[_0xcf9e45(0x15f)](/[^.[\]]+/g)||[]),_0x3b6e77['slice'](0x0,-0x1)[_0x4e93dd(0x1f6,'3TSA')]((_0x1bcf6c,_0x15f57c,_0x3853c5)=>Object(_0x1bcf6c[_0x15f57c])===_0x1bcf6c[_0x15f57c]?_0x1bcf6c[_0x15f57c]:_0x1bcf6c[_0x15f57c]=Math[_0x4e93dd(0x1c6,'MLW8')](_0x3b6e77[_0x3853c5+0x1])>>0x0==+_0x3b6e77[_0x3853c5+0x1]?[]:{},_0x4f0cac)[_0x3b6e77[_0x3b6e77[_0x4e93dd(0x185,'yVfy')]-0x1]]=_0x4b5216,_0x4f0cac);}[_0x3d1e4b(0x1de)](_0x3c8b89){const _0x49b1d0=_0x3d1e4b,_0x8824d1=_0x2f6263;let _0x51264f=this['getval'](_0x3c8b89);if(/^@/[_0x8824d1(0x149,'$Sll')](_0x3c8b89)){const [,_0x723716,_0x214eb0]=/^@(.*?)\.(.*?)$/['exec'](_0x3c8b89),_0x3cf450=_0x723716?this[_0x49b1d0(0x122)](_0x723716):'';if(_0x3cf450)try{const _0x2c28c1=JSON[_0x8824d1(0x175,'4$ml')](_0x3cf450);_0x51264f=_0x2c28c1?this[_0x49b1d0(0x180)](_0x2c28c1,_0x214eb0,''):_0x51264f;}catch(_0x1c45d4){_0x51264f='';}}return _0x51264f;}['setdata'](_0x6b64fa,_0x2eb2dd){const _0x352e00=_0x3d1e4b,_0x5c49af=_0x2f6263;let _0x401842=!0x1;if(/^@/[_0x5c49af(0x130,'ZH^3')](_0x2eb2dd)){const [,_0x471027,_0x532486]=/^@(.*?)\.(.*?)$/[_0x5c49af(0x1c2,'HbD*')](_0x2eb2dd),_0x282d0c=this['getval'](_0x471027),_0x5e5723=_0x471027?_0x5c49af(0x1e8,'$&Z6')===_0x282d0c?null:_0x282d0c||'{}':'{}';try{const _0x1a266b=JSON['parse'](_0x5e5723);this[_0x5c49af(0x170,'wOXO')](_0x1a266b,_0x532486,_0x6b64fa),_0x401842=this['setval'](JSON[_0x5c49af(0x183,'O7us')](_0x1a266b),_0x471027);}catch(_0xb37071){const _0x29b700={};this['lodash_set'](_0x29b700,_0x532486,_0x6b64fa),_0x401842=this['setval'](JSON[_0x5c49af(0x1c8,'Fapo')](_0x29b700),_0x471027);}}else _0x401842=this[_0x352e00(0x1b6)](_0x6b64fa,_0x2eb2dd);return _0x401842;}['getval'](_0x3d67c1){const _0x5d371e=_0x3d1e4b,_0x4b9e5f=_0x2f6263;return this[_0x4b9e5f(0x15e,'O7us')]()||this[_0x5d371e(0x11d)]()?$persistentStore[_0x5d371e(0x1fc)](_0x3d67c1):this[_0x5d371e(0x10a)]()?$prefs[_0x5d371e(0x121)](_0x3d67c1):this[_0x4b9e5f(0x1cc,'fEAx')]()?(this[_0x4b9e5f(0x150,'ptl1')]=this['loaddata'](),this['data'][_0x3d67c1]):this['data']&&this[_0x5d371e(0x14d)][_0x3d67c1]||null;}[_0x3d1e4b(0x1b6)](_0x459d39,_0x33605d){const _0x4d60bd=_0x3d1e4b,_0x150661=_0x2f6263;return this[_0x150661(0x211,'Z[n$')]()||this[_0x4d60bd(0x11d)]()?$persistentStore[_0x4d60bd(0x1d7)](_0x459d39,_0x33605d):this[_0x4d60bd(0x10a)]()?$prefs[_0x150661(0x12f,'m#n&')](_0x459d39,_0x33605d):this['isNode']()?(this[_0x150661(0x18f,'kDBs')]=this[_0x4d60bd(0x108)](),this[_0x150661(0x19a,'4$ml')][_0x33605d]=_0x459d39,this[_0x150661(0x1bc,'fEAx')](),!0x0):this[_0x4d60bd(0x14d)]&&this['data'][_0x33605d]||null;}[_0x2f6263(0x110,'aGVU')](_0x226ec8){const _0x42ebb0=_0x3d1e4b,_0x293bcb=_0x2f6263;this[_0x293bcb(0x140,'kDBs')]=this[_0x42ebb0(0x173)]?this[_0x42ebb0(0x173)]:require(_0x42ebb0(0x173)),this[_0x293bcb(0x1f4,'E3m0')]=this[_0x42ebb0(0x1d0)]?this[_0x42ebb0(0x1d0)]:require(_0x42ebb0(0x191)),this['ckjar']=this['ckjar']?this['ckjar']:new this['cktough'][(_0x42ebb0(0x14b))](),_0x226ec8&&(_0x226ec8[_0x293bcb(0x15a,'O7us')]=_0x226ec8[_0x42ebb0(0x13d)]?_0x226ec8[_0x293bcb(0x15a,'O7us')]:{},void 0x0===_0x226ec8[_0x42ebb0(0x13d)][_0x42ebb0(0x13f)]&&void 0x0===_0x226ec8[_0x42ebb0(0x1a2)]&&(_0x226ec8[_0x42ebb0(0x1a2)]=this['ckjar']));}[_0x3d1e4b(0x105)](_0x133ee5,_0x3d4a0c=()=>{}){const _0x441c4b=_0x3d1e4b,_0x3b4acf=_0x2f6263;_0x133ee5[_0x3b4acf(0x179,'UrKU')]&&(delete _0x133ee5[_0x441c4b(0x13d)]['Content-Type'],delete _0x133ee5[_0x441c4b(0x13d)][_0x441c4b(0x18c)]),this[_0x441c4b(0x106)]()||this['isLoon']()?(this[_0x441c4b(0x106)]()&&this['isNeedRewrite']&&(_0x133ee5[_0x441c4b(0x13d)]=_0x133ee5[_0x441c4b(0x13d)]||{},Object[_0x3b4acf(0x190,'G]Qw')](_0x133ee5[_0x3b4acf(0x1f2,'w^^w')],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x3b4acf(0x18a,'ZH^3')](_0x133ee5,(_0x223091,_0x24f2b5,_0x50977d)=>{const _0x32a3ea=_0x3b4acf;!_0x223091&&_0x24f2b5&&(_0x24f2b5[_0x32a3ea(0x1c3,'!kes')]=_0x50977d,_0x24f2b5['statusCode']=_0x24f2b5[_0x32a3ea(0x133,'E3m0')]),_0x3d4a0c(_0x223091,_0x24f2b5,_0x50977d);})):this['isQuanX']()?(this[_0x3b4acf(0x187,'MLW8')]&&(_0x133ee5[_0x441c4b(0x148)]=_0x133ee5[_0x3b4acf(0x17f,']cD[')]||{},Object[_0x441c4b(0x11e)](_0x133ee5[_0x441c4b(0x148)],{'hints':!0x1})),$task[_0x441c4b(0x155)](_0x133ee5)['then'](_0x5701ae=>{const {statusCode:_0xce441b,statusCode:_0x46ba79,headers:_0x2a924e,body:_0x316fcb}=_0x5701ae;_0x3d4a0c(null,{'status':_0xce441b,'statusCode':_0x46ba79,'headers':_0x2a924e,'body':_0x316fcb},_0x316fcb);},_0x562e15=>_0x3d4a0c(_0x562e15))):this[_0x3b4acf(0x1cc,'fEAx')]()&&(this[_0x441c4b(0x210)](_0x133ee5),this[_0x441c4b(0x173)](_0x133ee5)['on'](_0x441c4b(0x182),(_0x527718,_0x136413)=>{const _0x3a48bb=_0x3b4acf,_0x6d522=_0x441c4b;try{if(_0x527718['headers'][_0x6d522(0x129)]){const _0x1c5154=_0x527718[_0x6d522(0x13d)][_0x3a48bb(0x165,'1GO6')][_0x3a48bb(0x1a4,'MLW8')](this[_0x3a48bb(0x1a1,'yVfy')][_0x3a48bb(0x178,'m#n&')]['parse'])[_0x3a48bb(0x174,'$Sll')]();this['ckjar'][_0x3a48bb(0x1e2,'E)B5')](_0x1c5154,null),_0x136413[_0x6d522(0x1a2)]=this[_0x6d522(0x109)];}}catch(_0x767970){this['logErr'](_0x767970);}})[_0x3b4acf(0x11b,'YV)8')](_0x2380a3=>{const {statusCode:_0xdf7f19,statusCode:_0x1366b1,headers:_0x512182,body:_0x3a4dd8}=_0x2380a3;_0x3d4a0c(null,{'status':_0xdf7f19,'statusCode':_0x1366b1,'headers':_0x512182,'body':_0x3a4dd8},_0x3a4dd8);},_0x2e3aa5=>{const _0x2a2e68=_0x441c4b,{message:_0x5d3672,response:_0x443cf7}=_0x2e3aa5;_0x3d4a0c(_0x5d3672,_0x443cf7,_0x443cf7&&_0x443cf7[_0x2a2e68(0x14a)]);}));}['post'](_0x33d650,_0x2de665=()=>{}){const _0x10d30c=_0x2f6263,_0x2f9780=_0x3d1e4b;if(_0x33d650[_0x2f9780(0x14a)]&&_0x33d650[_0x10d30c(0x171,'2K9m')]&&!_0x33d650['headers']['Content-Type']&&(_0x33d650[_0x2f9780(0x13d)][_0x2f9780(0x12b)]=_0x10d30c(0x135,'#Eq4')),_0x33d650[_0x10d30c(0x10d,'YV)8')]&&delete _0x33d650['headers'][_0x2f9780(0x18c)],this[_0x10d30c(0x213,'fEAx')]()||this[_0x2f9780(0x11d)]())this['isSurge']()&&this['isNeedRewrite']&&(_0x33d650[_0x10d30c(0x176,'0qz$')]=_0x33d650[_0x2f9780(0x13d)]||{},Object[_0x2f9780(0x11e)](_0x33d650['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x2f9780(0x163)](_0x33d650,(_0x5e1b87,_0x10c551,_0x402cfb)=>{const _0x56111b=_0x2f9780;!_0x5e1b87&&_0x10c551&&(_0x10c551[_0x56111b(0x14a)]=_0x402cfb,_0x10c551[_0x56111b(0x1ab)]=_0x10c551[_0x56111b(0x16c)]),_0x2de665(_0x5e1b87,_0x10c551,_0x402cfb);});else{if(this[_0x2f9780(0x10a)]())_0x33d650[_0x10d30c(0x1c9,'fEAx')]=_0x2f9780(0x104),this[_0x2f9780(0x16b)]&&(_0x33d650[_0x2f9780(0x148)]=_0x33d650['opts']||{},Object[_0x2f9780(0x11e)](_0x33d650[_0x10d30c(0x1ce,'nSUB')],{'hints':!0x1})),$task[_0x2f9780(0x155)](_0x33d650)[_0x10d30c(0x138,'JNo$')](_0x41c650=>{const {statusCode:_0x423715,statusCode:_0xbba5f3,headers:_0x3246c3,body:_0xc9fd28}=_0x41c650;_0x2de665(null,{'status':_0x423715,'statusCode':_0xbba5f3,'headers':_0x3246c3,'body':_0xc9fd28},_0xc9fd28);},_0x2916e8=>_0x2de665(_0x2916e8));else{if(this[_0x10d30c(0x1b1,'1B!V')]()){this[_0x10d30c(0x19e,'Fapo')](_0x33d650);const {url:_0x58dc93,..._0x5737e3}=_0x33d650;this[_0x2f9780(0x173)][_0x2f9780(0x163)](_0x58dc93,_0x5737e3)['then'](_0x46b63a=>{const {statusCode:_0x5b8aca,statusCode:_0x309834,headers:_0xabeada,body:_0x10baa8}=_0x46b63a;_0x2de665(null,{'status':_0x5b8aca,'statusCode':_0x309834,'headers':_0xabeada,'body':_0x10baa8},_0x10baa8);},_0x120a16=>{const _0x468c72=_0x10d30c,{message:_0x21cda7,response:_0xb65839}=_0x120a16;_0x2de665(_0x21cda7,_0xb65839,_0xb65839&&_0xb65839[_0x468c72(0x17a,'8lPA')]);});}}}}['time'](_0x4e8276){const _0x1bd273=_0x3d1e4b,_0x4844b7=_0x2f6263;let _0x18f391={'M+':new Date()[_0x4844b7(0x205,'E3m0')]()+0x1,'d+':new Date()['getDate'](),'H+':new Date()[_0x1bd273(0x18e)](),'m+':new Date()[_0x1bd273(0x1b3)](),'s+':new Date()[_0x1bd273(0x177)](),'q+':Math[_0x4844b7(0x1c4,'UrKU')]((new Date()['getMonth']()+0x3)/0x3),'S':new Date()['getMilliseconds']()};/(y+)/[_0x1bd273(0x214)](_0x4e8276)&&(_0x4e8276=_0x4e8276[_0x4844b7(0x114,'&LDw')](RegExp['$1'],(new Date()[_0x1bd273(0x1b8)]()+'')['substr'](0x4-RegExp['$1']['length'])));for(let _0x4d4c02 in _0x18f391)new RegExp('('+_0x4d4c02+')')[_0x1bd273(0x214)](_0x4e8276)&&(_0x4e8276=_0x4e8276[_0x1bd273(0x15b)](RegExp['$1'],0x1==RegExp['$1'][_0x1bd273(0x1e3)]?_0x18f391[_0x4d4c02]:('00'+_0x18f391[_0x4d4c02])['substr']((''+_0x18f391[_0x4d4c02])[_0x1bd273(0x1e3)])));return _0x4e8276;}[_0x2f6263(0x1fa,'ousx')](_0x2548fc=_0x52122b,_0x38e038='',_0x12dece='',_0x508667){const _0x36f107=_0x2f6263,_0x4253b4=_0x3d1e4b,_0x3246c1=_0x2eb64b=>{const _0xc0a14f=_0x5546,_0x2468bc=_0x5364;if(!_0x2eb64b)return _0x2eb64b;if('string'==typeof _0x2eb64b)return this[_0x2468bc(0x11d)]()?_0x2eb64b:this['isQuanX']()?{'open-url':_0x2eb64b}:this[_0xc0a14f(0x1dd,'2K9m')]()?{'url':_0x2eb64b}:void 0x0;if(_0x2468bc(0x134)==typeof _0x2eb64b){if(this[_0x2468bc(0x11d)]()){let _0x74d1b5=_0x2eb64b[_0x2468bc(0x1ea)]||_0x2eb64b[_0xc0a14f(0x1ed,'4$ml')]||_0x2eb64b[_0xc0a14f(0x1a7,'E3m0')],_0x5a05fc=_0x2eb64b[_0xc0a14f(0x128,'YV)8')]||_0x2eb64b[_0x2468bc(0x1c1)];return{'openUrl':_0x74d1b5,'mediaUrl':_0x5a05fc};}if(this[_0xc0a14f(0x1b4,'hf0b')]()){let _0x206443=_0x2eb64b[_0x2468bc(0x160)]||_0x2eb64b[_0x2468bc(0x10c)]||_0x2eb64b[_0x2468bc(0x1ea)],_0x501899=_0x2eb64b['media-url']||_0x2eb64b['mediaUrl'];return{'open-url':_0x206443,'media-url':_0x501899};}if(this[_0x2468bc(0x106)]()){let _0x590ba5=_0x2eb64b[_0x2468bc(0x10c)]||_0x2eb64b[_0xc0a14f(0x1ad,'kDBs')]||_0x2eb64b[_0xc0a14f(0x1da,'JNo$')];return{'url':_0x590ba5};}}};this['isMute']||(this[_0x4253b4(0x106)]()||this[_0x36f107(0x196,'1B!V')]()?$notification[_0x4253b4(0x163)](_0x2548fc,_0x38e038,_0x12dece,_0x3246c1(_0x508667)):this['isQuanX']()&&$notify(_0x2548fc,_0x38e038,_0x12dece,_0x3246c1(_0x508667)));let _0x59dd2f=['','==============📣系统通知📣=============='];_0x59dd2f[_0x4253b4(0x1e9)](_0x2548fc),_0x38e038&&_0x59dd2f[_0x36f107(0x208,'EspG')](_0x38e038),_0x12dece&&_0x59dd2f[_0x36f107(0x204,'OBiy')](_0x12dece),console['log'](_0x59dd2f[_0x4253b4(0x144)]('\x0a')),this['logs']=this['logs'][_0x36f107(0x20b,'yVfy')](_0x59dd2f);}[_0x2f6263(0x154,'O7us')](..._0x544f90){const _0x413bdf=_0x3d1e4b,_0x43f9e=_0x2f6263;_0x544f90[_0x43f9e(0x18b,'xlLd')]>0x0&&(this[_0x43f9e(0x137,'O7us')]=[...this[_0x413bdf(0x1bb)],..._0x544f90]),console[_0x413bdf(0x143)](_0x544f90[_0x43f9e(0x113,'w^^w')](this[_0x43f9e(0x118,'ptl1')]));}[_0x3d1e4b(0x1dc)](_0x3b131d,_0x2ecff9){const _0x4baef6=_0x3d1e4b,_0x2be601=_0x2f6263,_0x434190=!this['isSurge']()&&!this[_0x2be601(0x202,'O7us')]()&&!this[_0x2be601(0x152,'aGVU')]();_0x434190?this[_0x4baef6(0x143)]('','❗️'+this[_0x2be601(0x124,'0qz$')]+_0x4baef6(0x18d),_0x3b131d[_0x4baef6(0x15c)]):this[_0x4baef6(0x143)]('','❗️'+this[_0x4baef6(0x181)]+_0x4baef6(0x18d),_0x3b131d);}[_0x3d1e4b(0x1db)](_0x528508){return new Promise(_0xe2bcaf=>setTimeout(_0xe2bcaf,_0x528508));}['done'](_0x68d1f0={}){const _0x1c8c60=_0x2f6263,_0x1912de=_0x3d1e4b,_0x365e59=new Date()[_0x1912de(0x115)](),_0x5cadc7=(_0x365e59-this[_0x1c8c60(0x1f3,'Z[n$')])/0x3e8;this['log']('','🔔'+this['name']+_0x1c8c60(0x1f1,'4$ml')+_0x5cadc7+'\x20秒'),this['log'](),(this[_0x1912de(0x106)]()||this[_0x1c8c60(0x107,'2K9m')]()||this[_0x1c8c60(0x12d,'&LDw')]())&&$done(_0x68d1f0);}}(_0x52122b,_0x1668ca);}
