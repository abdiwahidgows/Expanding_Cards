let next = document.querySelector('#next');
let progrss = document.querySelector('.progress');
let prev = document.querySelector('#prev');
let circle = document.querySelectorAll('.circle');



let currentActive = 1;

next.addEventListener('click',()=>{

    currentActive ++;
    
    if(currentActive > circle.length){
        currentActive=circle.length;
    }
    update();

})

prev.addEventListener('click',()=>{

    currentActive --;
    
    if(currentActive > circle.length){
        currentActive = 1;
    }
    // Power_of_function
    update();

})


function update(){
    // progresska Statementigiisa
    circle.forEach((circle , idx) =>{

        if(idx < currentActive){
            circle.classList.add('circle-active')
        }
        else{
            circle.classList.remove('circle-active');

        }
    })
    const actives = document.querySelectorAll('.circle-active');

    progrss.style.width=((actives.length -1) /(circle.length -1))*100 + '%';
    console.log(progrss);


    if(currentActive === 1){
        prev.disabled = true;

    }else if(currentActive === circle.length){
        next.disabled = true;

    }else{
        prev.disabled= false;
        next.disabled = false;

    }
}















// btn.addEventListener("mouse",()=>{
//     btn.style.cursor='normal';
// })


// btn.addEventListener('click',()=>{
//     click();
// })


// function click(){

//     progrss.style.width='35%';

    
    
// }