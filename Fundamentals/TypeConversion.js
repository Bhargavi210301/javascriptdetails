function ConverttoString(){
    let text=document.getElementById("convertToString").value;
    let result=String(text);
    let x=document.getElementById("StringData");
    x.innerHTML="After conversion to String : "+result;
    x.classList.add("divborder");  
}

function ConverttoNumber(){
    let text=document.getElementById("convertToNumber").value;
    let result=Number(text);
    let x= document.getElementById("NumberData")
    x.innerHTML="After conversion to Number : "+result;
    x.classList.add("divborder");  
}

function ConverttoBoolean(){
    let text=document.getElementById("booleaninput").value;
    let a=parseInt(text);
    let result=Boolean(a);
    let x=document.getElementById("BooleanData");
    x.innerHTML="After conversion to Boolean : "+result;
    x.classList.add("divborder");  
}