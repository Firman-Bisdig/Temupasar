/* Khusus beranda: testimoni bergerak */
(function(){var $=function(s){return document.querySelector(s)};
// testimonials
var TS=[['Kios Mentari','Usaha Sembako','Desain kontennya bagus dan sesuai dengan karakter usaha kami. Setelah kerja sama dengan Temu Pasar, jangkauan Instagram kami meningkat pesat.','#647D1A'],['Aluna Food','Kuliner','Timnya kreatif dan komunikatif. Konten yang dibuat sangat menarik dan membantu meningkatkan penjualan kami.','#F89C10'],['Nusantara Drink','Minuman','Sangat terbantu dengan strategi promosinya. Hasilnya terasa di penjualan dan engagement media sosial kami.','#8aa332'],['Tenun Kita','Fesyen Lokal','Prosesnya jelas dari konsultasi sampai evaluasi. Kami selalu tahu apa yang dikerjakan dan hasilnya.','#d98410'],['Dapur Bunda','Katering','Konten kami jadi lebih rapi dan konsisten. Pelanggan baru mulai berdatangan dari Instagram.','#4f6613']];
var tr=$('#tr');tr.innerHTML=TS.map(function(t){return '<article class="tc"><header><i style="background:'+t[3]+'">'+t[0].charAt(0)+'</i><div><b>'+t[0]+'</b><small>'+t[1]+'</small></div></header><blockquote>'+t[2]+'</blockquote><div class="stars" aria-label="5 bintang">★★★★★</div></article>'}).join('');
function step(d){var w=tr.firstChild.offsetWidth+20;if(d>0&&tr.scrollLeft+tr.clientWidth>=tr.scrollWidth-8)tr.scrollTo({left:0});else tr.scrollBy({left:d*w})}
$('#tn').onclick=function(){step(1)};$('#tp').onclick=function(){step(-1)};
var tm=null;function ts(){if(!matchMedia('(prefers-reduced-motion:reduce)').matches){clearInterval(tm);tm=setInterval(function(){step(1)},3800)}}
ts();['pointerenter','focusin','touchstart'].forEach(function(ev){tr.addEventListener(ev,function(){clearInterval(tm)},{passive:true})});['pointerleave','focusout'].forEach(function(ev){tr.addEventListener(ev,ts)});
})();
