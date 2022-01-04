var display = document.getElementById('display');
const pie=3.142;
const e=Math.E;
var mem=0;

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