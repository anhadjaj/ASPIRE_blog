/* ASPIRE upgrade layer: polish + app-style icons + Wardbook + Face Sense.
   Add this line right before </body> in your page, after the existing <script>:
   <script src="aspire-upgrade.js"></script> */
(function(){
var css=`
::selection{background:rgba(122,167,255,.35)}
html{scrollbar-color:#2b3038 #050607}
#prog{position:fixed;top:0;left:0;height:2px;width:100%;transform-origin:0 50%;transform:scaleX(0);z-index:1100;background:linear-gradient(90deg,#7aa7ff,#b39aff,#6fe0b4)}
.aurora{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.aurora i{position:absolute;width:55vw;height:55vw;border-radius:50%;filter:blur(110px);opacity:.16;animation:drift 26s ease-in-out infinite alternate}
.aurora i:nth-child(1){background:#4f6bff;left:-15vw;top:-10vw}
.aurora i:nth-child(2){background:#9b5cff;right:-20vw;top:35vh;animation-delay:-9s}
.aurora i:nth-child(3){background:#19d3a2;left:20vw;bottom:-30vw;opacity:.09;animation-delay:-16s}
@keyframes drift{to{transform:translate(8vw,6vh) scale(1.15)}}
.hero:after{content:"";position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(rgba(255,255,255,.08) 1px,transparent 1px);background-size:34px 34px;-webkit-mask-image:radial-gradient(ellipse at 50% 40%,#000,transparent 70%);mask-image:radial-gradient(ellipse at 50% 40%,#000,transparent 70%)}
.wordmark.grad{background:linear-gradient(110deg,#fff 10%,#9bbcff 32%,#c0a8ff 52%,#6fe0b4 72%,#fff 92%);background-size:220% auto;-webkit-background-clip:text;background-clip:text;animation:shine 9s linear infinite}
@keyframes shine{to{background-position:220% center}}
.btn.primary,.nav-cta{background:linear-gradient(120deg,#fff,#d9e5ff)}
.cap,.change,.feature,.duo-card,.perf-card,.techcard,.hs{background-image:linear-gradient(160deg,rgba(255,255,255,.045),rgba(255,255,255,.008))}
.marquee{overflow:hidden;border-block:1px solid var(--line);background:rgba(255,255,255,.015);padding:20px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.mq{display:flex;width:max-content;animation:mq 40s linear infinite;font:600 12.5px "JetBrains Mono",monospace;letter-spacing:.16em;color:var(--muted)}
.mq .g{display:flex;gap:44px;padding-right:44px}
.mq em{color:var(--accent);font-style:normal}
@keyframes mq{to{transform:translateX(-50%)}}

/* app-style icons */
.bento .cap{transition:border-color .3s,opacity .9s cubic-bezier(.2,.7,.2,1),transform .35s ease-out}
.bento .cap.in{transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(var(--ty,0px))}
.bento .cap:hover{--ty:-4px}
.cap .top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:30px}
.cap .tg{margin:0!important;padding-top:4px}
.ico{position:relative;width:56px;height:56px;border-radius:16px;display:grid;place-items:center;background:linear-gradient(145deg,var(--c1),var(--c2));box-shadow:0 14px 28px -10px var(--c2),inset 0 1px 0 rgba(255,255,255,.5),inset 0 -8px 14px rgba(0,0,0,.2);transition:transform .35s cubic-bezier(.3,1.6,.5,1)}
.ico:after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(180deg,rgba(255,255,255,.3),transparent 48%);pointer-events:none}
.ico svg{width:27px;height:27px;position:relative;z-index:1;filter:drop-shadow(0 2px 3px rgba(0,0,0,.25))}
.cap:hover .ico{transform:scale(1.1) rotate(-4deg)}
.cap.hero-cap .ico{width:68px;height:68px;border-radius:20px}.cap.hero-cap .ico svg{width:33px;height:33px}
.new{font:700 9px "JetBrains Mono",monospace;letter-spacing:.12em;vertical-align:middle;margin-left:10px;padding:3px 8px;border-radius:999px;background:linear-gradient(120deg,var(--c1),var(--c2));color:#fff}
.mini-chat{margin-top:20px;display:grid;gap:8px}
.mini-chat i{font-style:normal;font-size:12.5px;padding:8px 12px;border-radius:14px 14px 14px 4px;background:rgba(255,255,255,.07);color:var(--soft);width:fit-content}
.mini-chat i.out{justify-self:end;border-radius:14px 14px 4px 14px;background:linear-gradient(135deg,var(--c1),var(--c2));color:#fff}
.mini-id{margin-top:20px;display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid var(--line2);border-radius:14px;font-size:13px;color:var(--soft)}
.mini-id .dot{width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 10px var(--green)}
.mini-id small{color:var(--muted);margin-left:auto}

/* new section */
.duo2{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:60px}
.nc{border:1px solid var(--line);border-radius:28px;padding:38px;background:linear-gradient(155deg,rgba(255,255,255,.05),rgba(255,255,255,.01));position:relative;overflow:hidden}
.nc:before{content:"";position:absolute;width:340px;height:340px;right:-120px;top:-140px;border-radius:50%;background:radial-gradient(circle,var(--c2),transparent 70%);opacity:.22;pointer-events:none}
.nc h3{font-size:34px;letter-spacing:-.04em;margin:22px 0 10px}
.nc p{font-size:15.5px}
.nc ul{list-style:none;display:grid;gap:10px;margin-top:22px}
.nc li{display:flex;gap:12px;font-size:14.5px;color:var(--soft)}
.nc li:before{content:"";flex:none;width:7px;height:7px;margin-top:9px;border-radius:50%;background:var(--c1);box-shadow:0 0 10px var(--c1)}
.nc li b{color:#fff;font-weight:600}
.profile{display:flex;gap:20px;align-items:center;margin-top:24px;padding:16px;border:1px solid var(--line2);border-radius:20px;background:rgba(5,6,7,.55)}
.av{position:relative;flex:none;width:100px;height:116px;border-radius:14px;background:linear-gradient(160deg,#1b2030,#0c0e14);overflow:hidden}
.av svg{width:100%;height:100%;display:block}
.av i{position:absolute;width:16px;height:16px;border:2px solid #2dd4bf}
.av i:nth-of-type(1){left:6px;top:6px;border-right:0;border-bottom:0}
.av i:nth-of-type(2){right:6px;top:6px;border-left:0;border-bottom:0}
.av i:nth-of-type(3){left:6px;bottom:6px;border-right:0;border-top:0}
.av i:nth-of-type(4){right:6px;bottom:6px;border-left:0;border-top:0}
.av u{position:absolute;left:0;right:0;height:2px;background:#2dd4bf;box-shadow:0 0 14px #2dd4bf;animation:vs 3s ease-in-out infinite}
@keyframes vs{0%,100%{top:8%}50%{top:90%}}
.pf b{font-size:20px;display:block;letter-spacing:-.02em}
.pf small{font:500 11px "JetBrains Mono",monospace;color:var(--muted)}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.tags span{font-size:11.5px;padding:4px 10px;border-radius:999px;border:1px solid var(--line2);color:var(--soft)}
.tags span.h{border-color:rgba(45,212,191,.45);color:#7ff0dc}
.priv{margin-top:18px;font-size:12.5px;color:var(--muted);border-top:1px solid var(--line);padding-top:14px}
#demo2{margin-top:24px}
.nc.full{grid-column:1/-1}
.nc.full ul{grid-template-columns:repeat(2,1fr);column-gap:34px}
@media(max-width:720px){.nc.full ul{grid-template-columns:1fr}}
@media(max-width:980px){.duo2{grid-template-columns:1fr}}
@media(max-width:720px){.nc{padding:28px}.profile{flex-direction:column;align-items:flex-start}}
@media(prefers-reduced-motion:reduce){.aurora i,.mq,.av u,.wordmark.grad{animation:none!important}}
`;
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

/* ambient layers */
document.body.insertAdjacentHTML('afterbegin','<div id="prog"></div><div class="aurora"><i></i><i></i><i></i></div>');
var prog=$('#prog');
function pg(){var h=document.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')'}
addEventListener('scroll',pg,{passive:true});pg();

/* copy tweaks */
var pill=$('.pill');if(pill)pill.innerHTML='<b>V3</b> The third generation of ASPIRE';
$$('.hs b').forEach(function(b){if(/\d+ cap/.test(b.textContent))b.textContent='16 capabilities'});
var nl=$('.navlinks');if(nl)nl.insertAdjacentHTML('beforeend','<a href="#new">Messages &amp; Faces</a>');

/* marquee */
var words=['SEES','HEARS','RECOGNISES FACES','SENDS WHATSAPPS','MAKES CALLS','REPLIES ON INSTAGRAM','POSTS ON WARDBOOK','NAVIGATES','READS MAIL','REMEMBERS','PLAYS MUSIC','TRANSLATES','TAKES PHOTOS'];
var g='<div class="g">'+words.map(function(w){return '<span>'+w+'</span><em>◆</em>'}).join('')+'</div>';
var hero=$('.hero');if(hero)hero.insertAdjacentHTML('afterend','<div class="marquee" aria-hidden="true"><div class="mq">'+g+g+'</div></div>');

/* icons */
function ic(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>'}
var I={
vision:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
nav:'<path d="M3 11l18-8-8 18-2-8-8-2z"/>',
mem:'<path d="M6 3h12v18l-6-4-6 4z"/><path d="M12 7v4M10 9h4"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 8l9 6 9-6"/>',
cal:'<rect x="3" y="4" width="18" height="17" rx="3"/><path d="M3 9h18M8 2v4M16 2v4"/><circle cx="12" cy="15" r="1.4"/>',
web:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
music:'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
wx:'<circle cx="8" cy="8" r="3"/><path d="M8 2v1M2 8h1M3.8 3.8l.7.7M12.2 3.8l-.7.7"/><path d="M8 20a4 4 0 010-8 5.5 5.5 0 0110.5 1.5A3.3 3.3 0 0118 20z"/>',
drive:'<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
cam:'<path d="M4 8h3l2-3h6l2 3h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"/><circle cx="12" cy="13" r="3.5"/>',
news:'<path d="M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
ward:'<path d="M21 12a8 8 0 01-11.5 7.2L4 20l1.2-4.4A8 8 0 1121 12z"/><path d="M12 15.5s-3-1.8-3-4a1.7 1.7 0 013-.8 1.7 1.7 0 013 .8c0 2.2-3 4-3 4z"/>',
msg:'<path d="M21 12a8 8 0 01-11.5 7.2L4 20l1.2-4.4A8 8 0 1121 12z"/><path d="M8.5 11h7M8.5 14h4"/>',
ig:'<rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r=".9" fill="#fff"/>',
phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/>',
face:'<path d="M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3"/><path d="M9 10v1M15 10v1M9.5 15c1.5 1.3 3.5 1.3 5 0"/>'};

/* capabilities: 16 cards with app icons */
var caps=[
['vision','01 · VISION','ASPIRE Vision','Analyses scene details, translates text, and answers visual questions about whatever you’re looking at.','#6d8dff','#4f46e5','wide tall hero-cap','<div class="mini-reticle"><i></i><span>subject</span></div>'],
['nav','02 · NAVIGATE','Live Navigation','Real-time traffic ETAs, distances and route summaries from Google Maps, without looking at a screen.','#2dd4bf','#0f766e'],
['msg','03 · MESSAGES','WhatsApp &amp; SMS','Say who and what. Aspire finds the contact, writes the message and sends it in about two seconds.','#4ade80','#128c7e','','<div class="mini-chat"><i>Where are you?</i><i class="out">Running ten minutes late.</i></div>',1],
['phone','04 · CALLS','Phone Calls','“Call Dad.” Aspire matches the contact and starts the call without you touching your phone.','#38bdf8','#0369a1','','<div class="mini-id"><span class="dot"></span><b>Calling Dad…</b><small>~2 s</small></div>',1],
['ig','05 · INSTAGRAM','Instagram DMs','Send new Instagram DMs or reply to an existing conversation, hands-free.','#fbbf24','#d62976','','',1],
['mem','06 · REMEMBER','Memories','Saves facts, reminders and notes on command, and fetches them whenever you ask.','#c084fc','#7e22ce'],
['mail','07 · MAIL','Mail','Reads your latest unread emails, parses senders and subjects, and sends replies hands-free.','#60a5fa','#2563eb'],
['cal','08 · CALENDAR','Calendar','Checks your schedule, summarises your day and creates events from natural speech.','#fb7185','#e11d48'],
['music','09 · MUSIC','Spotify','Play, pause, skip, see what’s playing, shuffle and adjust volume.','#4ade80','#16a34a'],
['web','10 · SEARCH','Live Web Search','Queries the live internet for up-to-date facts, current events, sports scores and anything that changed since a model was trained.','#22d3ee','#0e7490','wide'],
['wx','11 · WEATHER','Weather &amp; AQI','Live weather, Air Quality Index safety levels and seasonal pollen forecasts.','#facc15','#f97316'],
['drive','12 · FILES','Google Drive Search','Finds your cloud documents by name and reads their contents aloud.','#a3e635','#4d7c0f'],
['ward','13 · SOCIAL','Wardbook','Run your social life by voice. Post updates, send DMs, share photos from the glasses, read your messages and reply, all hands-free.','#ff6b9a','#7c3aed','wide','<div class="mini-chat"><i>Anhad Jaj: Free on Saturday?</i><i class="out">Yes, Saturday works.</i></div>',1],
['face','14 · PEOPLE','Face Sense','Recognises and remembers familiar people. Say “remember this person” and it stores a 512-dimensional facial embedding, then identifies them later with a reported 96% accuracy, along with their name, hobbies and context.','#2dd4bf','#6366f1','wide','<div class="mini-id"><span class="dot"></span><b>Anhad Jaj</b><small>Programmer · Athlete</small></div>',1],
['cam','15 · CAPTURE','Vision &amp; Telegram','Capture photos from the glasses and push images or translations straight to your phone.','#f472b6','#be185d','wide'],
['news','16 · NEWS','Top Headlines','Breaking global headlines and top stories across categories, whenever you want a briefing.','#94a3b8','#475569','wide']
];
var bento=$('.bento');
if(bento){bento.innerHTML=caps.map(function(c,i){
  return '<div class="cap '+(c[6]||'')+' reveal d'+(i%3+1)+'" style="--c1:'+c[4]+';--c2:'+c[5]+'"><div class="top"><span class="ico">'+ic(I[c[0]])+'</span><span class="tg">'+c[1]+'</span></div><h3>'+c[2]+(c[8]?'<span class="new">NEW</span>':'')+'</h3><p>'+c[3]+'</p>'+(c[7]||'')+'</div>'}).join('');
  $$('.cap',bento).forEach(function(c){
    c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();
      c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');
      c.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*5+'deg');c.style.setProperty('--rx',(.5-(e.clientY-r.top)/r.height)*5+'deg')});
    c.addEventListener('pointerleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')});
  });
}

/* Wardbook + Face Sense showcase */
var sil='<svg viewBox="0 0 120 140"><circle cx="60" cy="52" r="26" fill="rgba(255,255,255,.1)"/><path d="M14 140c4-34 26-48 46-48s42 14 46 48z" fill="rgba(255,255,255,.08)"/></svg>';
var showcase='<section id="new"><div class="container">'
+'<div class="kicker reveal">New · Personal Intelligence</div>'
+'<h2 class="reveal d1">Now it knows your people. <span class="grad">And talks to them for you.</span></h2>'
+'<p class="sub reveal d2">Three abilities turn ASPIRE from a tool you use into someone who’s with you: a voice-controlled social life, a way to message and call anyone, and a memory for every face that matters.</p>'
+'<div class="duo2">'
+'<div class="nc reveal" style="--c1:#ff6b9a;--c2:#7c3aed"><span class="ico" style="--c1:#ff6b9a;--c2:#7c3aed">'+ic(I.ward)+'</span><h3>Wardbook</h3><p>Your social network, spoken. No feed to scroll, no keyboard to find.</p>'
+'<ul><li><span><b>Post</b> a thought or a photo just by saying it.</span></li><li><span><b>DM</b> anyone and ask VIPER to word it for you.</span></li><li><span><b>Share</b> what the glasses see straight to your story.</span></li><li><span><b>Read &amp; reply</b> to messages out loud, then answer in your own voice.</span></li></ul></div>'
+'<div class="nc reveal d1" style="--c1:#2dd4bf;--c2:#6366f1"><span class="ico" style="--c1:#2dd4bf;--c2:#6366f1">'+ic(I.face)+'</span><h3>Face Sense</h3><p>Look at someone and ask. VIPER already knows who they are.</p>'
+'<div class="profile"><div class="av">'+sil+'<i></i><i></i><i></i><i></i><u></u></div><div class="pf"><b>Anhad Jaj</b><small>MET 4 TIMES · Tennis Ga</small><div class="tags"><span>Warm</span><span>Direct</span><span class="h">Tennis</span><span class="h">Cricket</span></div></div></div>'
+'<ul><li><span><b>Names &amp; personas</b> told quietly in your ear.</span></li><li><span><b>Hobbies</b> and shared interests, for better conversations.</span></li><li><span><b>Remembers</b> the people around you, and where you met.</span></li></ul>'
+'<p class="priv">Consent-first by design: only people you choose to save are remembered, and you can tell VIPER to forget anyone. Profile shown is illustrative.</p></div>'
+'<div class="nc full reveal d2" style="--c1:#4ade80;--c2:#0369a1"><span class="ico" style="--c1:#4ade80;--c2:#0369a1">'+ic(I.msg)+'</span><h3>Messages &amp; Calls<span class="new">V3</span></h3><p>Reach anyone on the app they actually use, without touching your phone.</p>'
+'<ul><li><span><b>WhatsApp &amp; SMS</b> sent by voice in about two seconds.</span></li><li><span><b>Instagram DMs</b>: send new ones or reply to existing threads.</span></li><li><span><b>Phone calls</b> started straight from your contacts.</span></li><li><span><b>Smarter intent</b>: finds the right person and conversation before it acts.</span></li></ul></div></div>'
+'<div class="demo reveal" id="demo2"><div class="demo-top"><span><i></i>WARDBOOK &amp; FACESENSE · SEE IT IN ACTION</span><span>illustrative</span></div><div class="demo-body"><div class="chips" id="chips2"><small>TRY A REQUEST</small>'
+'<button class="chip active" data-s="post">“Post that V3 is live.”</button><button class="chip" data-s="dm">“Message Arjun I’m late.”</button><button class="chip" data-s="story">“Share this on my story.”</button><button class="chip" data-s="read">“Read my messages.”</button><button class="chip" data-s="reply">“Tell Anhad Jaj yes.”</button><button class="chip" data-s="wa">“WhatsApp Mom I’m late.”</button><button class="chip" data-s="ig">“Reply to Riya on Instagram.”</button><button class="chip" data-s="call">“Call Dad.”</button><button class="chip" data-s="who">“Who is that?”</button><button class="chip" data-s="rem">“Remember this person.”</button><button class="chip" data-s="around">“Who’s around me?”</button></div>'
+'<div class="stream" id="stream2" aria-live="polite"></div></div><div class="demo-foot">Names and replies are examples, not recordings.</div></div>'
+'</div></section>';
var capSec=$('#capabilities');if(capSec)capSec.insertAdjacentHTML('afterend',showcase);

var W=['WAKE','Wake word detected','t-wake'];
var sc={
post:[W,['HEARD','“Post that V3 is live.”','t-heard'],['TOOL','Wardbook · publishing post','t-tool'],['SAY','Posted. It’s live on your Wardbook feed.','t-say']],
dm:[W,['HEARD','“Message Arjun that I’m running ten minutes late.”','t-heard'],['TOOL','Wardbook · sending direct message','t-tool'],['SAY','Sent to Arjun: running ten minutes late.','t-say']],
story:[W,['HEARD','“Share this on my story.”','t-heard'],['SEE','Frame captured from the glasses','t-see'],['TOOL','Wardbook · uploading photo to story','t-tool'],['SAY','Done. The photo is on your story.','t-say']],
read:[W,['HEARD','“Read my messages.”','t-heard'],['TOOL','Wardbook · fetching unread DMs','t-tool'],['SAY','Two new messages. Anhad Jaj asks if you’re free Saturday, and Arjun sent a thumbs up. Want to reply?','t-say']],
reply:[W,['HEARD','“Tell Anhad Jaj yes, Saturday works.”','t-heard'],['TOOL','Wardbook · replying to Anhad Jaj','t-tool'],['SAY','Replied to Anhad Jaj: yes, Saturday works.','t-say']],
wa:[W,['HEARD','“Send Mom a WhatsApp: running ten minutes late.”','t-heard'],['TOOL','Resolving contact · sending on WhatsApp','t-tool'],['SAY','Sent to Mom on WhatsApp.','t-say']],
ig:[W,['HEARD','“Reply to Riya on Instagram: sounds great, see you at six.”','t-heard'],['TOOL','Instagram · finding latest DM · replying','t-tool'],['SAY','Replied to Riya on Instagram.','t-say']],
call:[W,['HEARD','“Call Dad.”','t-heard'],['TOOL','Contacts · matching “Dad” · placing call','t-tool'],['SAY','Calling Dad now.','t-say']],
who:[W,['HEARD','“Who is that?”','t-heard'],['SEE','Face detected, matching saved people','t-see'],['TOOL','Face Sense · memory lookup','t-tool'],['SAY','That’s Anhad Jaj, from the design meetup. He plays Tennis, Cricket, badminton, and codes AI glasses (A.S.P.I.R.E.).','t-say']],
rem:[W,['HEARD','“Remember this person. His name is Kabir.”','t-heard'],['SEE','Face captured · generating 512-dimensional embedding','t-see'],['TOOL','Face Sense · saving face and name','t-tool'],['SAY','Got it. I’ll recognise Kabir next time. Anything you’d like me to note about him?','t-say']],
around:[W,['HEARD','“Who’s around me?”','t-heard'],['SEE','Three faces in view','t-see'],['TOOL','Face Sense · matching against memory','t-tool'],['SAY','Anhad Jaj and Kabir are here. The third person isn’t saved yet.','t-say']]
};
var s2=$('#stream2'),tm=[];
function play(k){tm.forEach(clearTimeout);tm=[];s2.innerHTML='';sc[k].forEach(function(r,i){tm.push(setTimeout(function(){
  var d=document.createElement('div');d.className='ev';
  var t=document.createElement('div');t.className='tag '+r[2];t.textContent=r[0];
  var m=document.createElement('div');m.className='msg'+(r[0]==='SAY'?' say':'');m.textContent=r[1];
  d.appendChild(t);d.appendChild(m);s2.appendChild(d)},i*650))})}
var ch=$$('#chips2 .chip');
ch.forEach(function(c){c.addEventListener('click',function(){ch.forEach(function(x){x.classList.toggle('active',x===c)});play(c.dataset.s)})});
if(s2)play('post');

/* reveal for new elements */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
$$('.bento .reveal,#new .reveal').forEach(function(el){io.observe(el)});
})();
