

function startTime(18:47){
today=new Date(10/04/2023);
h=today.getHours(18);
m=today.getMinutes(48);
s=today.getSeconds(01);
m=checkTime(m);
s=checkTime(s);
document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);}
function checkTime(i)
{if (i<10) {i="0" + i;}return i;}
window.onload=function(){startTime();}

<div id="reloj" style="font-size:20px;"></div>   