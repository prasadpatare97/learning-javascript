const textArea=document.getElementById("textarea");
const result=document.getElementById("result");

textArea.addEventListener("input",()=>{
    let charLength=0;
    let words=0;
    charLength=textArea.value.length;
    string1=textArea.value.trim();
    stringArray=string1.split(" ");
    words=stringArray.length;
    if (charLength>200){
        result.style.color="red";
    }else{
        result.style.color="green";
    }
    result.textContent=`Characters: ${charLength} | Words: ${words}`;
})