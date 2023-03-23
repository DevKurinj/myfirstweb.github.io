let ul=document.getElementById("burger");
burger.style.maxHeight="0px";
function press(){
    if(burger.style.maxHeight=="0px"){
        burger.style.maxHeight="400px"
    }
    else{
        burger.style.maxHeight="0px"
    }
}