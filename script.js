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
    
    let month = (theday, today) =>{
        //let time = today.getTime() - theday.getTime();
        let total = (today.getFullYear() - theday.getFullYear()) * 12;
        total -= theday.getMonth();
        total += today.getMonth();
        return total;
    }
    
    let year = (theday, today) =>{
        let time = (today.getFullYear() - theday.getFullYear()) * 12;
        time -= theday.getMonth();
        time += today.getMonth();
        let total = Math.ceil(time / 12);
        return total;
    }

    document.querySelector("#sec").innerHTML = sec(theday, today) + " sekund";
    document.querySelector("#min").innerHTML = min(theday, today) + " minut";
    document.querySelector("#hour").innerHTML = hour(theday, today) + " godzin";
    document.querySelector("#day").innerHTML = day(theday, today) + " dni";
    document.querySelector("#month").innerHTML = day(theday, today) + " miesięcy";
    document.querySelector("#year").innerHTML = day(theday, today) + " lat";
}
f1();
window.setInterval("f1()", 1000);
