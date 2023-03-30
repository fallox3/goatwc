function f1(){
    let theday = new Date('12/18/2022 21:41:00');
    let today = new Date();

let sec = (theday, today) =>{
    let time = today.getTime() - theday.getTime();
    let total = Math.ceil(time / (1000));
    return total;
}

let min = (theday, today) =>{
    let time = today.getTime() - theday.getTime();
    let total = Math.ceil(time / (1000 * 60));
    return total;
}

let hour = (theday, today) =>{
    let time = today.getTime() - theday.getTime();
    let total = Math.ceil(time / (1000 * 60 * 60));
    return total;
}

let day = (theday, today) =>{
    let time = today.getTime() - theday.getTime();
    let total = Math.ceil(time / (1000 * 60 * 24 * 60));
    return total;
}
console.log(sec(theday, today));
document.querySelector("#sec").innerHTML = "sekund: " + sec(theday, today);
document.querySelector("#min").innerHTML = "minut: " + min(theday, today);
document.querySelector("#hour").innerHTML = "godzin: " + hour(theday, today);
document.querySelector("#day").innerHTML = "dni: " + day(theday, today);
//document.querySelector("#sec").innerHTML = sec(theday, today) + " " + min(theday, today) + "    " + hour(theday, today) + " " +  day(theday, today);
}
f1();
window.setInterval("f1()", 1000);