window.addEventListener("load", () =>
{
    let loader_function = () => 
    {
        document.querySelector(".loader").classList.remove("loader-active");
    };
    setInterval(loader_function, 2300);
    
});

function f1(){
    let theday = new Date('12/18/2022 21:41:00');
    let today = new Date();

    let sec = (theday, today) =>{
        let time = today.getTime() - theday.getTime();
        let total = Math.ceil(time / (1000));
        if (total == 1)
            return total + " sekunda";
        if (total > 1 && total < 5)
            return total + " sekundy";
        return total + " sekund";
    }

    let min = (theday, today) =>{
        let time = today.getTime() - theday.getTime();
        let total = Math.ceil(time / (1000 * 60));
        if (total == 1)
            return total + " minuta";
        if (total > 1 && total < 5)
            return total + " minuty";
        return total + " minut";
    }

    let hour = (theday, today) =>{
        let time = today.getTime() - theday.getTime();
        let total = Math.ceil(time / (1000 * 60 * 60));
        if (total == 1)
            return total + " godzina";
        if (total > 1 && total < 5)
            return total + " godziny";
        return total + " godzin";
    }

    let day = (theday, today) =>{
        let time = today.getTime() - theday.getTime();
        let total = Math.ceil(time / (1000 * 60 * 24 * 60));
        if (total == 1)
            return total + " dzień";
        return total + " dni";
    }
    
    let month = (theday, today) =>{
        let total = (today.getFullYear() - theday.getFullYear()) * 12;
        total -= theday.getMonth();
        total += today.getMonth();
        if (today.getDate() < theday.getDate())
            total -= 1;
        if (total == 1)
            return total + " miesiąc";
        if (total > 1 && total < 5)
            return total + " miesiące";
        return total + " miesięcy";
    }
    
    let year = (theday, today) =>{
        let time = (today.getFullYear() - theday.getFullYear()) * 12;
        time -= theday.getMonth();
        time += today.getMonth();
        let total = Math.floor(time / 12);
        if (total == 1)
            return total + " rok";
        if (total > 1 && total < 5)
            return total + " lata";
        return total + " lat";
    }

    document.querySelector("#sec").innerHTML = sec(theday, today);
    document.querySelector("#min").innerHTML = min(theday, today);
    document.querySelector("#hour").innerHTML = hour(theday, today);
    document.querySelector("#day").innerHTML = day(theday, today);
    document.querySelector("#month").innerHTML = month(theday, today);
    document.querySelector("#year").innerHTML = year(theday, today);
}
f1();
window.setInterval("f1()", 1000);
