function hello(){
    alert("Hello World!!");
}
function prevent(e){
    console.log(e);
    e.preventDefault();
}
function Alretme(){
    let msg=document.getElementById("AlertInput");
    alert(msg.value);
}
function Promptme(){
    let name=document.getElementById("inputdataPrompt");
    let msg= prompt("Hi "+name.value+" Enter your message!!");
    let x=document.getElementById("PromptData");
    x.innerHTML="Your Message is : "+msg;    
    x.classList.add("divborder");               //classList works after onclick function for given class
}
function ConfirmMe(){
    let ans=confirm("Do you Like Our Website?");
    if(ans==true){
        ans="Yes, I Like it!";
    }
    else{
        ans="No, I don't Like it!";
    }

    let x=document.getElementById("ConfirmData");
    x.innerHTML="Your Anser is: "+ans;
    x.classList.add("divborder");     
}

function down(x){
    x.style="background: cyan; color:blue";
}
function up(x){
    x.style="background: pink; color:red";
}