function hello() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let clock = document.getElementById("clock");
    if (h > 12) {
        h = h - 12;
    }
    if (h < 10) {
        h = `0${h}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    if (s < 10) {
        s = `0${s}`;
    }
    clock.innerHTML = `${h}:${m}:${s}AM`;
    if (h + 12 > 12) {
        clock.innerHTML = `${h}:${m}:${s}PM`;
    }
    setTimeout(hello, 100);
}
hello();