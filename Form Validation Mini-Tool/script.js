const nameInput=document.getElementById("nameInput");
const emailInput=document.getElementById("emailInput");
const nameWarning=document.getElementById("nameWarning");
const emailWarning=document.getElementById("emailWarning");
const submitBtn=document.getElementById("submitBtn");
const confirmation=document.getElementById("confirmation");

window.addEventListener("load", ()=>{
    let nameFlag=validateNameInput();
    let emailFlag=validateEmailInput();
    if( nameFlag && emailFlag )
        buttonEnable();
})

nameInput.addEventListener("input",()=>{
    confirmation.textContent="";
    let nameFlag=validateNameInput();
    let emailFlag=validateEmailInput();
    if( nameFlag && emailFlag )
        buttonEnable();
})

emailInput.addEventListener("input",()=>{
    confirmation.textContent="";
    let nameFlag=validateNameInput();
    let emailFlag=validateEmailInput();
    if( nameFlag && emailFlag )
        buttonEnable();
})

submitBtn.addEventListener("click",()=>{
    confirmation.textContent="Success!";
})
function validateNameInput(){
    if(nameInput.value.trim()==""){
        nameWarning.textContent="Please enter a name";
        submitBtn.disabled=true;
        submitBtn.style.opacity=0.5;
        return false;
    } 
    nameWarning.textContent="";
    return true;

}

function validateEmailInput(){
    let emailCheck= emailInput.value.trim();
    if (emailCheck==""){
        emailWarning.textContent="Please enter an email";
        submitBtn.disabled=true;
        submitBtn.style.opacity=0.5;
        return false;
    }
    else if (!emailCheck.includes("@") || !emailCheck.includes(".")){
        emailWarning.textContent="Email must contain @ and .";
        submitBtn.disabled=true;
        submitBtn.style.opacity=0.5;
        return false;
    }else{
        emailWarning.textContent="";
        return true;
    }
}

function buttonEnable(){
    
    emailWarning.textContent="";
    submitBtn.style.opacity=1;
    submitBtn.disabled=false;
}