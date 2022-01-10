var display = document.getElementById('display');
const pie=3.142;
const e=Math.E;


let memory = [];
let ms = 0;

function mplus(){
    var num = display.innerText;
    memory.push(num);
}

function msclick(){
    var txt;
    if (ms === 0) {
        txt = display.innerText;
        ms = txt;
        display.innerText = ms;
    } else {
    display.innerText += ms;
    }
}

function mminus(){
    memory.pop();
}

function mrclick(){
    if (memory.length !== 0) {
    let sum = memory.reduce((a, b) => a + b);
    display.innerText = sum;
    } 
    else {
    display.innerText = 0;
    }
}

function mcclick(){
    memory = [];
}


let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

function squareroot(){
    display.innerText=Math.sqrt(display.innerText);
}
function signChange(){
    var plus=display.innerText;
    var nem=plus* -1;
    console.log(nem);
    display.innerText=nem;   
}
function log(){
    var txt=display.innerText;
    if(txt!=""){
        txt=Math.log10(txt);
        display.innerText=txt;
    }
}
function factorial(){
    var txt=display.innerText;
    var result=1;
    for(var i=0;i<txt;i++){
        result=result*(txt-i);
    }
    display.innerText=result;
}
function square(){
    var txt=display.innerText;
    var squareNum=Math.pow(txt,2);
    display.innerText=squareNum;
}
function power(){
    var txt=display.innerText;
    var powerNum=txt**2;
    display.innerText=powerNum;
}
function displayTxt(txt){
    display.innerText+=txt;

}
function logbasee(){
    var txt=display.innerText;
    if(txt!=""){
        txt=Math.log(txt);
        display.innerText=txt;
    }
}
function power10(){
    var txt=display.innerText;
    txt=Math.pow(10,txt);
    display.innerText=txt;
}
function inverse(){
    var txt=display.innerText
    txt=1/txt;
    display.innerText=txt;
}
function absoulte(){
    var txt=display.innerText;
    if(txt<0){
        txt=txt*(-1);
    }
    display.innerText=txt;
}
function exponentional(){
    var txt=display.innerText;
    txt=Math.exp(txt);
    display.innerText=txt;
}
function pier(){
    var txt=display.innerText;
    txt=txt*pie;
    display.innerText=txt;
}
function eValue(){
    var txt=display.innerText;
    if(txt!=""){
        txt=txt*e;
    }
    else{
        txt=e;
    }
    display.innerText=txt;
}
function sintrigo(){
    var txt=display.innerText;
    txt = Math.sin(txt * Math.PI / 180);
    display.innerText = txt;
}
function costrigo(){
    var txt=display.innerText;
    txt = Math.cos(txt * Math.PI / 180);
    display.innerText = txt;
}
function tantrigo(){
    var txt=display.innerText;
    txt = Math.tan(txt * Math.PI / 180);
    display.innerText = txt;
}
function ceilfun(){
    var txt=display.innerText;
    txt=Math.ceil(txt);
    display.innerText=txt;
}
function floorfun(){
    var txt=display.innerText;
    txt=Math.floor(txt);
    display.innerText=txt;
}
function randomfun(){
    var txt=Math.random();
    display.innerText+=txt;
}
function truncfun(){
    var txt=display.innerText;
    txt=Math.trunc(txt);
    display.innerText=txt;
}
function degtoradian(){
    var txt=display.innerText;
    txt=txt*Math.PI/180;
    display.innerText=txt;
}
function degtofeh(){
    var txt=display.innerText;
    txt=(txt*9/5)+32;
    display.innerText=txt;
}
function acostrigo(){
    var txt=display.innerText;
    txt = Math.acos(txt * Math.PI / 180);
    display.innerText = txt;
}
function asintrigo(){
    var txt=display.innerText;
    txt = Math.asin(txt * Math.PI / 180);
    display.innerText = txt;
}
function atantrigo(){
    var txt=display.innerText;
    txt = Math.atan(txt * Math.PI / 180);
    display.innerText = txt;
}
