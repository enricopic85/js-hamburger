//mostro il menù
const button=document.getElementById('hamburger');
button.addEventListener('click',function(){
document.getElementById("hamburger-dropdown").style.display = "block";
})

//nascondo il menu
const buttonClosed=document.getElementById('closing')
buttonClosed.addEventListener('click',function () {
document.getElementById("hamburger-dropdown").style.display = "none";
})