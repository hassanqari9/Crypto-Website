document.querySelector("button").addEventListener("click", handleClick) 
function handleClick(){
    document.querySelector(".navlinks").classList.toggle("marginadd")
}

steps = document.querySelectorAll(".stepsdiv")
leftsideimgs = document.querySelectorAll(".left-side-img")
rightsideimgs1 = document.querySelectorAll(".right-side-img1")
rightsideimgs2 = document.querySelectorAll(".right-side-img2")
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
    rightsideimgs1.forEach(rightsideimg1 => {
        const rightsideimg1Top = rightsideimg1.getBoundingClientRect().top;
        if (rightsideimg1Top < triggerBottom){
            rightsideimg1.classList.add("slide-left")
        }
        else{
            rightsideimgs.classList.remove("slide-left")
        }      
    });
    rightsideimgs2.forEach(rightsideimg2 => {
        const rightsideimg2Top = rightsideimg2.getBoundingClientRect().top;
        if (rightsideimg2Top < triggerBottom){
            rightsideimg2.classList.add("slide-left")
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