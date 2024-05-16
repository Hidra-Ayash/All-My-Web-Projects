let span =document.getElementById('span')
let b1=document.getElementById('btn1');
let b2=document.getElementById('btn2');
let b3=document.getElementById('btn3');

 function choose()
 {
    let s=span.innerHTML;
    let Ps=parseInt(s);
    if(b1||b2||b3)
    {
       Ps++;
      span.innerHTML=''
      span.innerHTML=Ps;
    }
 }
 