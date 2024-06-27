var hr=0;
var min=0;
var sec=0;
var count=0;


var timer =false;


function start(){
    timer=true;
    stopwatch();
}

function stop(){
    timer =false;
    stopwatch();

}
function reset(){

    timer=false;

    hr= "00";
    min="00";
    sec="00";
   count="00";
   
   document.getElementById("hr").innerHTML=hr;
   document.getElementById("min").innerHTML=min;
   document.getElementById("sec").innerHTML=sec;
   document.getElementById("count").innerHTML=count;

    hr=0;
    min=0;
    sec=0;
    count=0;

   

}

function stopwatch(){

    if(timer==true){
        count=count+1;

        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }

        var hrstring=hr;
        var minstring=min;
        var secstring=sec;
        var countstring=count;

        if(hr<10){
            hrstring="0"+hrstring;
        }

        if(min<10){
            minstring= "0"+minstring;
        }

        if(sec<10){
            secstring="0"+secstring;
        }

        if(count<10){{
            countstring="0"+countstring;
        }}


        document.getElementById("hr").innerHTML=hrstring;
        document.getElementById("min").innerHTML=minstring;
        document.getElementById("sec").innerHTML=secstring;
        document.getElementById("count").innerHTML=countstring;
        
        setTimeout("stopwatch()",10);
    }

}

let c =document.getElementById("container");
let s =document.getElementById("start");
s.addEventListener('click',function(){
    c.style.boxShadow = '5px 5px 5px 5px #ffd166ab';
    c.style.color ='#343a40';
    c.style.backgroundColor='#dad7cd';
});

//let c =document.getElementById("container");
let r =document.getElementById("reset");
r.addEventListener('click',function(){
    c.style.color ='#d7dfe4';
    c.style.backgroundColor='#2c3e50';
    c.style.boxShadow='none';
});


