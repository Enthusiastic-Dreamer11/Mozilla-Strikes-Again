
let Img=document.querySelector("img")

Img.onclick = function(){

    let Src=Img.getAttribute('src')

if(Src==="images/firefox.jpg"){
    Img.setAttribute('src','images/bfirefox.jpg');
}
else{
    Img.setAttribute('src','images/firefox.jpg');
}

}

let Button=document.querySelector("button")
let Text = document.querySelector('h3')

function userchange(){  

    let myName = prompt("What's your Name ?")
    Button.innerHTML = "Change User"

    if(!myName){
        change();
    }
    else{
        localStorage.setItem('name',myName);
        Text.innerHTML =  "Signed In as "+ myName;
    }
}

if(!localStorage.getItem('name')){
    userchange()
}
else{
    Button.innerHTML = "Change User"
    let myName = localStorage.getItem('name');
    Text.innerHTML = "Signed In as "+ myName;
}



Button.onclick = function change(){
    
    Button.innerHTML = "Change User"
    userchange();
}