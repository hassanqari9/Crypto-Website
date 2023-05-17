console.log("hello")
document.querySelector("button").addEventListener("click", handleClick) 
function handleClick(){
    document.querySelector(".navlinks").classList.toggle("marginadd")
}

// for (var i=0; i<4; i++) {
// document.querySelectorAll("a")[i].addEventListener("click", handleClick2) 
// function handleClick2(e){
//     e.preventDefault();
//     document.querySelector(".navlinks").classList.toggle("marginadd");
// }
// }