const _0x52c7f0=_0x3620;(function(_0x215ff1,_0x535e8a){const _0x1981c0=_0x3620,_0x401e96=_0x215ff1();while(!![]){try{const _0xa1761a=-parseInt(_0x1981c0(0x181))/0x1*(-parseInt(_0x1981c0(0x1ae))/0x2)+parseInt(_0x1981c0(0x1a6))/0x3*(-parseInt(_0x1981c0(0x19d))/0x4)+-parseInt(_0x1981c0(0x1bf))/0x5*(-parseInt(_0x1981c0(0x1be))/0x6)+parseInt(_0x1981c0(0x1c2))/0x7*(-parseInt(_0x1981c0(0x17f))/0x8)+-parseInt(_0x1981c0(0x194))/0x9*(-parseInt(_0x1981c0(0x192))/0xa)+-parseInt(_0x1981c0(0x1a0))/0xb+-parseInt(_0x1981c0(0x193))/0xc*(-parseInt(_0x1981c0(0x1b3))/0xd);if(_0xa1761a===_0x535e8a)break;else _0x401e96['push'](_0x401e96['shift']());}catch(_0x3f3eb6){_0x401e96['push'](_0x401e96['shift']());}}}(_0x230f,0x6ade4));const axios=require(_0x52c7f0(0x190)),fs=require('fs'),path=require(_0x52c7f0(0x199)),colors={'reset':_0x52c7f0(0x1a2),'info':_0x52c7f0(0x1aa),'success':_0x52c7f0(0x1ab),'warning':_0x52c7f0(0x1a9),'error':_0x52c7f0(0x19a),'highlight':_0x52c7f0(0x1ad)};console[_0x52c7f0(0x183)](colors[_0x52c7f0(0x188)]+_0x52c7f0(0x179)),console[_0x52c7f0(0x183)]('[+]\x20SYSTEM\x20INITIALIZED',colors[_0x52c7f0(0x19b)]);function getTokenAndQuery(){const _0x56fca4=_0x52c7f0,_0x306c21=[],_0x19bb0e=fs[_0x56fca4(0x186)](_0x56fca4(0x1bd),_0x56fca4(0x1ba))['trim']()['split']('\x0a');return _0x19bb0e[_0x56fca4(0x172)](_0x25e39d=>{const _0x41341c=_0x56fca4,[_0x29cd2b,_0x2a820e,_0x25b163]=_0x25e39d[_0x41341c(0x177)]('|');_0x25b163!==_0x41341c(0x18e)&&_0x306c21[_0x41341c(0x18c)]({'query':_0x29cd2b,'accessToken':_0x2a820e});}),_0x306c21;}function getKeyS(){const _0x67a9f=_0x52c7f0;return fs[_0x67a9f(0x186)]('key.txt',_0x67a9f(0x1ba))[_0x67a9f(0x184)]();}function updateHash(_0x465e89,_0x39fac6,_0x25fced=null){const _0x1a404d=_0x52c7f0,_0x2601a4=fs['readFileSync']('hash.txt',_0x1a404d(0x1ba))[_0x1a404d(0x184)]()[_0x1a404d(0x177)]('\x0a'),_0x485334=_0x2601a4[_0x1a404d(0x1c1)](_0x4ac1fd=>{const _0xaf5f1a=_0x1a404d,[_0x88c3a6,_0xafbd8f,_0x245869]=_0x4ac1fd[_0xaf5f1a(0x177)]('|');if(_0x88c3a6===_0x465e89){if(_0x25fced)return _0x465e89+'|'+_0xafbd8f+'|'+_0x25fced;return _0x465e89+'|'+_0x39fac6[_0xaf5f1a(0x184)]();}return _0x4ac1fd;});fs[_0x1a404d(0x1b7)](_0x1a404d(0x1bd),_0x485334[_0x1a404d(0x1b8)]('\x0a'),'utf8');}function _0x3620(_0x125212,_0x31663e){const _0x230f3e=_0x230f();return _0x3620=function(_0x362050,_0x12e064){_0x362050=_0x362050-0x171;let _0x4b5978=_0x230f3e[_0x362050];return _0x4b5978;},_0x3620(_0x125212,_0x31663e);}function getHeaders(_0x2175f9){const _0x15cd37=_0x52c7f0;if(!_0x2175f9||typeof _0x2175f9!==_0x15cd37(0x17a))throw new Error(_0x15cd37(0x1b2)+_0x2175f9);return{'user-agent':_0x15cd37(0x175),'content-type':_0x15cd37(0x17c),'authorization':'Bearer\x20'+_0x2175f9['trim']()};}function delay(_0xa0066d){return new Promise(_0x123db6=>setTimeout(_0x123db6,_0xa0066d));}async function login(_0x3009f8,_0x3d808b){const _0x395f78=_0x52c7f0;console['log'](colors[_0x395f78(0x1b1)]+_0x395f78(0x187));const _0x3128a0=getKeyS(),_0x144f8c=await axios[_0x395f78(0x1af)](_0x395f78(0x1a8),{'telegram_data':_0x3009f8,'s':_0x3128a0},{'headers':getHeaders(_0x3d808b)});if(_0x144f8c[_0x395f78(0x18f)]['code']===0x0){const _0x59f1ad=_0x144f8c[_0x395f78(0x18f)][_0x395f78(0x18f)][_0x395f78(0x1ac)];return updateHash(_0x3009f8,_0x59f1ad),console[_0x395f78(0x183)](colors['success']+_0x395f78(0x171)),_0x59f1ad;}else{console[_0x395f78(0x173)](colors[_0x395f78(0x173)]+_0x395f78(0x19c)),updateHash(_0x3009f8,_0x3d808b,_0x395f78(0x18e));throw new Error(_0x395f78(0x1a5));}}async function main(_0x57ad3f){const _0x14bb59=_0x52c7f0,{query:_0x59450a,accessToken:_0x3e1ad5}=_0x57ad3f;let _0x1f9cda=_0x3e1ad5;if(!_0x1f9cda){console['error'](colors[_0x14bb59(0x173)]+_0x14bb59(0x1c5)+_0x59450a+colors[_0x14bb59(0x19b)]);return;}try{_0x1f9cda=await login(_0x59450a,_0x1f9cda),console[_0x14bb59(0x183)](colors['info']+_0x14bb59(0x174)+colors[_0x14bb59(0x19b)]),await dailyTask(_0x1f9cda),console[_0x14bb59(0x183)](colors['info']+'[INFO]\x20Mengambil\x20informasi\x20pengguna...'+colors[_0x14bb59(0x19b)]);const _0x2ae58b=await fetchUserInfo(_0x1f9cda);console[_0x14bb59(0x183)](colors[_0x14bb59(0x1b1)]+_0x14bb59(0x18b)+colors[_0x14bb59(0x19b)]),await playLottery(_0x1f9cda,_0x2ae58b[_0x14bb59(0x1a1)]),console[_0x14bb59(0x183)](colors[_0x14bb59(0x1b1)]+_0x14bb59(0x17d)+colors[_0x14bb59(0x19b)]),await handleQuest(_0x1f9cda),console[_0x14bb59(0x183)](colors[_0x14bb59(0x1b1)]+_0x14bb59(0x185)+colors[_0x14bb59(0x19b)]),await startFarming(_0x1f9cda),console[_0x14bb59(0x183)](colors[_0x14bb59(0x195)]+_0x14bb59(0x1b9)+colors[_0x14bb59(0x19b)]);}catch(_0x1b6317){console[_0x14bb59(0x173)](colors[_0x14bb59(0x173)]+_0x14bb59(0x17e)+_0x59450a+colors[_0x14bb59(0x19b)],_0x1b6317[_0x14bb59(0x19f)]);}}async function runMultipleAccounts(){const _0x2258bb=_0x52c7f0,_0x2a3e2c=getTokenAndQuery();for(let _0x199b3b of _0x2a3e2c){await main(_0x199b3b),console['log'](colors['info']+'[INFO]\x20Menunggu\x201\x20detik\x20sebelum\x20akun\x20berikutnya...'+colors[_0x2258bb(0x19b)]),await delay(0x3e8);}console[_0x2258bb(0x183)](colors[_0x2258bb(0x195)]+_0x2258bb(0x1c3)+colors[_0x2258bb(0x19b)]);}async function dailyTask(_0x55c474){const _0x5835cc=_0x52c7f0,_0x3bb0e4=await axios[_0x5835cc(0x191)](_0x5835cc(0x1b4),{'headers':getHeaders(_0x55c474)});console[_0x5835cc(0x183)](colors[_0x5835cc(0x1b1)]+_0x5835cc(0x18a)+_0x3bb0e4[_0x5835cc(0x18f)][_0x5835cc(0x18f)][_0x5835cc(0x1a7)]+colors['reset']);}async function fetchUserInfo(_0x1d7436){const _0x58c55c=_0x52c7f0,_0x25ada9=await axios[_0x58c55c(0x191)](_0x58c55c(0x18d),{'headers':getHeaders(_0x1d7436)});return console[_0x58c55c(0x183)](colors[_0x58c55c(0x1b1)]+_0x58c55c(0x1bc)+_0x25ada9[_0x58c55c(0x18f)]['data']['telegram_name']+colors[_0x58c55c(0x19b)]),_0x25ada9['data'][_0x58c55c(0x18f)];}async function playLottery(_0x800876,_0x569ca1){const _0x1c1526=_0x52c7f0;if(_0x569ca1>0x0){const _0x56bce8=await axios[_0x1c1526(0x1af)](_0x1c1526(0x1c4),{},{'headers':getHeaders(_0x800876)});console[_0x1c1526(0x183)](colors[_0x1c1526(0x195)]+_0x1c1526(0x1bb)+_0x56bce8[_0x1c1526(0x18f)][_0x1c1526(0x18f)]['asset_key']+',\x20Jumlah:\x20'+_0x56bce8[_0x1c1526(0x18f)][_0x1c1526(0x18f)]['amount']+colors[_0x1c1526(0x19b)]);}else console[_0x1c1526(0x183)](colors['warning']+'[INFO]\x20Tidak\x20ada\x20kesempatan\x20gratis\x20untuk\x20lotere.'+colors[_0x1c1526(0x19b)]);}async function handleQuest(_0x4f1af0){const _0x9f2ace=_0x52c7f0,_0x32416b=await axios[_0x9f2ace(0x191)]('https://buzz.tips/api/v1/task/one-time/list',{'headers':getHeaders(_0x4f1af0)});console[_0x9f2ace(0x183)](colors['info']+'[INFO]\x20Mendapatkan\x20daftar\x20quest...'+colors[_0x9f2ace(0x19b)]);for(const _0x4f9fec of _0x32416b['data']['data'][_0x9f2ace(0x182)]){for(const _0x3368e6 of _0x4f9fec[_0x9f2ace(0x197)]){if(!_0x3368e6[_0x9f2ace(0x1c0)])try{console['log'](colors[_0x9f2ace(0x1b1)]+_0x9f2ace(0x1b5)+_0x3368e6[_0x9f2ace(0x1b0)]+colors[_0x9f2ace(0x19b)]),await axios[_0x9f2ace(0x1af)]('https://buzz.tips/api/v1/task/one-time/claim',{'task_type':_0x3368e6[_0x9f2ace(0x178)],'task_value':_0x3368e6[_0x9f2ace(0x17b)],'s':getKeyS()},{'headers':getHeaders(_0x4f1af0)}),console[_0x9f2ace(0x183)](colors['success']+_0x9f2ace(0x189)+_0x3368e6['task_name']+_0x9f2ace(0x176)+colors[_0x9f2ace(0x19b)]),await delay(0x7d0);}catch(_0x3ef364){console[_0x9f2ace(0x173)](colors[_0x9f2ace(0x173)]+'[ERROR]\x20Gagal\x20menyelesaikan\x20task:\x20'+_0x3368e6['task_name'],_0x3ef364['response']?.[_0x9f2ace(0x18f)]?.[_0x9f2ace(0x19f)]||_0x3ef364['message'],colors[_0x9f2ace(0x19b)]),_0x3ef364[_0x9f2ace(0x1a3)]?.['status']===0x1ad&&(console[_0x9f2ace(0x183)](colors[_0x9f2ace(0x196)]+'[WARNING]\x20Permintaan\x20terlalu\x20sering,\x20menunggu\x20lebih\x20lama...'+colors[_0x9f2ace(0x19b)]),await delay(0x2710));}}}}async function startFarming(_0x372bba){const _0x4310e7=_0x52c7f0,_0x250ea6=await axios['get'](_0x4310e7(0x1a4),{'headers':getHeaders(_0x372bba)});_0x250ea6[_0x4310e7(0x18f)]['data'][_0x4310e7(0x1b6)]?(await axios[_0x4310e7(0x1af)](_0x4310e7(0x198),{},{'headers':getHeaders(_0x372bba)}),console[_0x4310e7(0x183)](colors[_0x4310e7(0x195)]+_0x4310e7(0x180)+colors[_0x4310e7(0x19b)])):(await axios[_0x4310e7(0x1af)]('https://buzz.tips/api/v1/farming/start',{},{'headers':getHeaders(_0x372bba)}),console[_0x4310e7(0x183)](colors[_0x4310e7(0x195)]+_0x4310e7(0x19e)+colors['reset']));}runMultipleAccounts();function _0x230f(){const _0x2d035=['\x1b[36m','\x1b[32m','access_token','\x1b[35m','108BEGhzN','post','task_name','info','Token\x20tidak\x20valid\x20untuk\x20header:\x20','754ZQpWEd','https://buzz.tips/api/v1/user/launch-page/info','[INFO]\x20Menyelesaikan\x20task:\x20','in_process','writeFileSync','join','[INFO]\x20Siklus\x20selesai\x20untuk\x20akun\x20ini.','utf8','[INFO]\x20Lotere\x20dimenangkan:\x20','[INFO]\x20Username\x20Telegram:\x20','hash.txt','6fHjJZp','4327105nbdNnr','completed','map','7nXNHiU','[INFO]\x20Semua\x20akun\x20selesai\x20diproses.','https://buzz.tips/api/v1/game/roulette/lottery','[ERROR]\x20Tidak\x20ada\x20token\x20untuk\x20query:\x20','[INFO]\x20Login\x20berhasil','forEach','error','[INFO]\x20Memulai\x20daily\x20task...','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/130.0.0.0\x20Safari/537.36\x20Edg/130.0.0.0','\x20selesai.','split','task_type','[+]\x20Follow\x20GitHub:\x20@farhanrizaldi48','string','task_value','application/json','[INFO]\x20Menjalankan\x20quest...','[ERROR]\x20Terjadi\x20masalah\x20dengan\x20akun\x20query:\x20','5580696uFRhip','[INFO]\x20Farming\x20selesai\x20dan\x20klaim\x20dilakukan.','2533zgkvaS','limit_time_tasks','log','trim','[INFO]\x20Memeriksa\x20dan\x20memulai\x20farming...','readFileSync','[INFO]\x20Mencoba\x20Login','highlight','[SUCCESS]\x20Task\x20','[INFO]\x20Reward\x20harian:\x20','[INFO]\x20Memeriksa\x20lotere...','push','https://buzz.tips/api/v1/user/info','FAILED','data','axios','get','10KZnlQM','90348pgIHdN','1003761uxaWVJ','success','warning','task_list','https://buzz.tips/api/v1/farming/claim','path','\x1b[31m','reset','[ERROR]\x20Login\x20gagal','72308xqVmac','[INFO]\x20Farming\x20dimulai.','message','787952PKXYRi','game_times_free','\x1b[0m','response','https://buzz.tips/api/v1/farming/status','Login\x20failed','57bwNTdR','daily_login_rewards','https://buzz.tips/api/v1/user/telegram/login','\x1b[33m'];_0x230f=function(){return _0x2d035;};return _0x230f();}
