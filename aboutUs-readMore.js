var i = 0;
function read(){
    if(!i){
        document.getElementById("readMore-text").style.
            display = "inline";

        document.getElementById("dots").style.
            display = "none";
        
        document.getElementById("readMore-button").innerHTML =
            "Show Less";
        i = 1;
    }
    else{
        document.getElementById("readMore-text").style.
        display = "none";

        document.getElementById("dots").style.
        display = "inline";
    
        document.getElementById("readMore-button").innerHTML =
            "Read More";
        i = 0;
    }
}