
alert("สี่เหลี่ยมสีส้มคือ !!คำใบ้!! คำใบ้จะสามารถเปิดได้วันละใบเท่านั้น5 5 5 5 5")


let output = document.getElementById('')
let numberDate = document.getElementById('')

let d = new Date();
let day = d.getDate();

function countdown1() {
    if(day == 6) {
        let show = document.getElementById("card1");
        if (show.classList.contains("card1-hidden")) {
            show.classList.replace("card1-hidden","card1-show") 
        }
        else if (show.classList.contains("card1-show")) {
            show.classList.replace("card1-show","card1-hidden")  
    }
    
    }
}
function countdown2() {
    let show = document.getElementById("card2");
    if (show.classList.contains("card2-hidden")) {
        show.classList.replace("card2-hidden","card2-show") 
    }
    else if (show.classList.contains("card2-show")) {
        show.classList.replace("card2-show","card2-hidden") 
    }
}
function countdown3() {
    if(day == 7){
    let show = document.getElementById("card3");
    if (show.classList.contains("card3-hidden")) {
        show.classList.replace("card3-hidden","card3-show") 
    }
    else if (show.classList.contains("card3-show")) {
        show.classList.replace("card3-show","card3-hidden") 
    }}
}
function countdown4() {
    if(day == 8){
    let show = document.getElementById("card4");
    if (show.classList.contains("card4-hidden")) {
        show.classList.replace("card4-hidden","card4-show") 
    }
    else if (show.classList.contains("card4-show")) {
        show.classList.replace("card4-show","card4-hidden") 
    }}
}
function countdown5() {
    if(day == 9){
        let show = document.getElementById("card5");
    if (show.classList.contains("card5-hidden")) {
        show.classList.replace("card5-hidden","card5-show") 
    }
    else if (show.classList.contains("card5-show")) {
        show.classList.replace("card5-show","card5-hidden") 
    }}
}
function countdown6() {
    if(day == 10){
        let show = document.getElementById("card6");
    if (show.classList.contains("card6-hidden")) {
        show.classList.replace("card6-hidden","card6-show") 
    }
    else if (show.classList.contains("card6-show")) {
        show.classList.replace("card6-show","card6-hidden") 
    }}
}

console.log(typeof day)
