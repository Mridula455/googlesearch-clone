var input = document.querySelector("submit");

input.addEventListener("keyup",function(){
    if(keycode=== 13){
        preventDefault();

        document.querySelector("submit").click();
    }
});

var img = document.querySelector("searchbarlogo-googleimage");
img.addEventListener("click",function(event){
    document.querySelector("submit").click();
})




