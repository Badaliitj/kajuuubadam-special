
for(let i=0;i<25;i++){
 let h=document.createElement('div');
 h.className='heart';
 h.innerHTML='❤';
 h.style.left=Math.random()*100+'vw';
 h.style.animationDuration=(6+Math.random()*8)+'s';
 document.body.appendChild(h);
}
