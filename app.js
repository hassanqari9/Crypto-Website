document.querySelector("button").addEventListener("click", handleClick) 
function handleClick(){
    document.querySelector(".navlinks").classList.toggle("marginadd")
}

steps = document.querySelectorAll(".stepsdiv")
leftsideimgs = document.querySelectorAll(".left-side-img")
rightsideimgs = document.querySelectorAll(".right-side-img")
leftside = document.querySelector(".left-side")
rightside = document.querySelector(".right-side")
bouncers = document.querySelectorAll(".bounce")

window.addEventListener("scroll", scrollClick)
function scrollClick(){
    const triggerBottom = window.innerHeight / 5 * 4;

    steps.forEach(step => {
        const stepTop = step.getBoundingClientRect().top;
        if (stepTop < triggerBottom){
            step.classList.add("flip-vertical-right")
        }
        else{
            step.classList.remove("flip-vertical-right")
        }      
    });

    leftsideimgs.forEach(leftsideimg => {
        const leftsideimgTop = leftsideimg.getBoundingClientRect().top;
        if (leftsideimgTop < triggerBottom){
            leftsideimg.classList.add("slide-right")
        }
        else{
            leftsideimgs.classList.remove("slide-right")
        }      
    });
    rightsideimgs.forEach(rightsideimg => {
        const rightsideimgTop = rightsideimg.getBoundingClientRect().top;
        if (rightsideimgTop < triggerBottom){
            rightsideimg.classList.add("slide-left")
        }
        else{
            rightsideimgs.classList.remove("slide-left")
        }      
    });

    bouncers.forEach(bouncer => {
        const bouncerTop = bouncer.getBoundingClientRect().top;
        if (bouncerTop < triggerBottom){
            bouncer.classList.add("bounce-top")
        }
        else{
            rightsideimgs.classList.remove("bounce-top")
        }      
    });

    const leftsideTop = leftside.getBoundingClientRect().top;
    if (leftsideTop < triggerBottom){
        leftside.classList.add("slide-right")
    }
    else{
        leftside.classList.remove("slide-right")
    } 
    const rightsideTop = rightside.getBoundingClientRect().top;
    if (rightsideTop < triggerBottom){
        rightside.classList.add("slide-left")
    }
    else{
        rightside.classList.remove("slide-left")
    }     
}



let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data"));

    let duration = Math.floor(interval/endValue)
    console.log(duration);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
})