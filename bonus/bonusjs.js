
const button=document.querySelector('.fa-bars');
button.addEventListener('click',function(){
 document.querySelector('.hamburger-menu').style.display = "block";
});

const buttonClosed=document.querySelector('.fa-times');
buttonClosed.addEventListener('click',function () {
    document.querySelector('.hamburger-menu').style.display="none";
});

const btnModale=document.querySelector('.header-left');
btnModale.addEventListener('click',function () {
    document.querySelector('.modale').style.display="block";
})
const closeModale=document.querySelector('.pulsante-chiusura');
closeModale.addEventListener('click',function(){
    document.querySelector('.modale').style.display="none";
})

const showYes=document.querySelector('.risposte1');
showYes.addEventListener('click',function(){
    document.querySelector('.riposta-affermativa').style.display="block";
    document.querySelector('.modale').style.display="none";
})