/* let answer = confirm("Do you have 18 years old?");
console.log(answer); */



/* if (2*4 == 8*2) {
    console.log('Yes')
} else {
    console.log('No');
} */



/* let answer = prompt("Are you Mila?")
if (answer =='yes') {
    console.log('Welcome');
} else {
    console.log('Go away!');
} */


/* 
const num = 52;
if (num < 49) {
    console.log("Wrong");
} else if (num > 51) {
    console.log("Wrong, sorry");
} else {
    console.log('Coool, you win!');
} */



// ЦИКЛЫ->

/* for (let i = 1; i < 8; i++) {
    console.log(i);
} */


//ФУНКЦИИ 

/* function funcName(a, b) {
    console.log(a+b)
}
funcName(3, 5); */



  $(document).ready(function(){
    $('.testimonials__carousel').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right.svg"</button>',
        dots: true,
    });
  });