var button1 = document.getElementById("productBtn1");
var button2 = document.getElementById("productBtn2");
var bg = document.getElementById("productBackground");
button2.addEventListener('click', function() {
    bg.style.backgroundImage = "url('/Images/PostureLIFT2 (479).png')";
}, false);
button1.addEventListener('click', function() {
    bg.style.backgroundImage = "url('/Images/PostureLIFT (479).png')";
}, false);

