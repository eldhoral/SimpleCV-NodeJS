
//------- MENU (NAVBAR) SET
let toggleStat = false;
let toggle = function (x) {
    x.classList.toggle("change");
    let getSidebar = document.querySelector('.side-bar');
    let getSidebarLink = document.querySelector('.side-bar a');

    if (toggleStat === false) {
        getSidebar.style.visibility = 'visible';
        for (let i = 0; i < getSidebarLink.length; i++) {
            getSidebarLink[i].style.opacity = '1';
        }
        toggleStat = true;
    }
    else if (toggleStat === true) {
        getSidebar.style.visibility = 'hidden';
        for (let i = 0; i < getSidebarLink.length; i++) {
            getSidebarLink[i].style.opacity = '0';
        }
        toggleStat = false;
    }
}

//------landing-HOME-TYPEWRITER EFFECT


let line = document.getElementById("slogan")
let txts = ['an engineering student', 'a coder', 'a fullstack freelance', 'also a gamer'];
let speed = 50

async function typewriter(txt) {
    for (let i = 0; i < txt.length; i++) {
        line.innerHTML += txt[i];
        await delay(speed)
    }
}

async function reverseTypewriter(txt) {
    for (let i = txt.length; i > 0; i--) {
        line.innerHTML = line.innerHTML.slice(0, -1)
        await delay(speed)
    }
}

async function writeLoop() {
    for (let i = 0; i < txts.length; i++) {
        await typewriter(txts[i])
        await delay(1000)
        await reverseTypewriter(txts[i])
        await delay(300)
    }
    writeLoop()
}

function delay(ms) {
    return new Promise((resolve) => { setTimeout(() => { resolve() }, ms) })
}

writeLoop()

//----umur increment
function tahun(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970); 
}
document.getElementById("umur").innerHTML = tahun(new Date(2000, 7, 7));