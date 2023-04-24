var curryY = scrollTop,
    totalY = scrollHeight - clientHeight,
    percentage = (curryY/totalY) * 100,
    scrollBox = document.getElementById("scrollBox");


function change_scroll() {
    scrollBox.innerHTML = document.documentElement.scrollTop; 
    scrollBox.addEventListener("click", function() {
        alert("안녕");
    })
}


