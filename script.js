
const PASSWORD='BadalKashuu#103';
function unlock(){if(document.getElementById('pwd').value===PASSWORD){login.style.display='none';site.style.display='block';}else{msg.innerText='Wrong Password ❤️';}}
function showJourney(){journey.style.display='block';journey.scrollIntoView({behavior:'smooth'});}
function playVideo(){playBtn.style.display='none';videoFrame.style.display='block';videoFrame.src='https://drive.google.com/file/d/1hBeBB0j-lXvJLU_uhUhjxub4rqSQ2bBg/preview';}
