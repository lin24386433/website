// Section1
var btn1 = document.querySelector(".btn1");
btn1.onclick = function(){
    document.querySelector("#ct1").innerHTML = "Hello JavaScript";
    alert("T_T");
};

// Section2
var btn2_1 = document.querySelector(".btn2-1");
var btn2_2 = document.querySelector(".btn2-2");
btn2_1.onclick = function(){
    document.querySelector('#myImg').src = "https://www.w3schools.com/js/pic_bulbon.gif";
};
btn2_2.onclick = function(){
    document.querySelector('#myImg').src = "https://www.w3schools.com/js/pic_bulboff.gif";
};

// Section3
var btn3_1 = document.querySelector(".btn3-1");
var btn3_2 = document.querySelector(".btn3-2");
btn3_1.onclick = function(){
    document.querySelector('#ct3').style.fontSize = "16px";
};
btn3_2.onclick = function(){
    document.querySelector('#ct3').style.fontSize = "30px";
};

// Section4
var btn4_1 = document.querySelector(".btn4-1");
var btn4_2 = document.querySelector(".btn4-2");
btn4_1.onclick = function(){
    document.querySelector('#ct4').style.display = "none";
};
btn4_2.onclick = function(){
    document.querySelector('#ct4').style.display = "block";
};

// Section5
let btn5_1 = document.querySelector(".btn5-1")
let btn5_2 = document.querySelector(".btn5-2")
let btn5_3 = document.querySelector(".btn5-3")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")

btn5_1.onclick = function(){
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "none"
    img1.style.display = "block"
}

btn5_2.onclick = function(){
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "none"
    img2.style.display = "block"
}

btn5_3.onclick = function(){
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "none"
    img3.style.display = "block"
}
