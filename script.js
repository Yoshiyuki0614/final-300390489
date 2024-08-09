function getDate() {
    return document.getElementById("birthday").value;
}

function start() {
    const countDownDate = new Date(getDate()).getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const dicsecs = Math.floor((distance % 1000) / 100);

        document.getElementById("demo").innerHTML = days + " <sub>days</sub> " + hours + " <sub>hrs</sub> " + minutes + " <sub>mins</sub> " + seconds + " <sub>secs</sub>" + dicsecs + " <sub>dicsecs</sub>";
        

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}


