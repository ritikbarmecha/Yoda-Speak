
var btn1=document.querySelector("#translate");
var txt=document.querySelector("#txt");
var out=document.querySelector("#out");
var str1="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var str="https://api.funtranslations.com/translate/ferb-latin.json"
function geturl1(text){
    return str + "?" + "text=" + text;
}
function checkerror(error){
    console.log(error+"error occuer")
    alert("server not respond");
}
function call(){
var val2=txt.value;
var op
fetch(geturl1(val2)).then(response=>response.json()).then(json=>{console.log(json);
out.innerText="Translated :"+json.contents.text}).catch(checkerror);


}
btn1.addEventListener('click',call);