"use strict";

window.onload = function(){
    const topButton = document.getElementById("top-button");
    const minScrollDistance = 30;
    window.onscroll = function(){
        if( document.body.scrollTop > minScrollDistance || document.documentElement.scrollTop > minScrollDistance ){
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }
    topButton.onclick = function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
