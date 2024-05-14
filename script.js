const display=document.querySelector(".display");

// buttons
const plusBtn=document.querySelector(".add");
const minusBtn=document.querySelector(".sub");
const resetBtn=document.querySelector(".reset");

const buttons=document.querySelectorAll("button");

let sum=0; 

// event listener 
buttons.forEach((button,index)=>{
    button.addEventListener('click',( )=>{

        if (button.classList.contains("add")){
            sum+=1;
            display.innerHTML=sum;
        } else if (button.classList.contains("sub")){
            sum-=1;
            display.innerHTML=sum;
        } else if (button.classList.contains("reset")){
            sum=0;
            display.innerHTML=sum;
        }

    })
})

