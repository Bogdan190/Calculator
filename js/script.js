const btns = document.querySelectorAll(".btns button");
const screen = document.querySelector("input");

let num = 0;
let op = '';

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const label = e.target.innerText;

    if ("1234567890.".includes(label)) {
      if ("/*-+".includes(screen.value)) screen.value = "";      
      
      screen.value += label;
    } 
    else if ("/*-+".includes(label)) {
      num = screen.value;
      op = label
      screen.value = label;
    } 
    else if (label == "="){
      screen.value = eval(num + op + screen.value).toPrecision(4)
    }

    if (screen.value[0] == "0" && screen.value[1] != ".") {
      screen.value = screen.value.slice(1);
    }

    screen.value = screen.value.replace(/(?<=\..*)\./, "");


  });
});

// const btns = document.querySelectorAll('.btns button')
// const screen = document.querySelector('input')
// let num = 0
// btns.forEach((btn) => {
//     btn.addEventListener('click', (e)=>{
//         const label = e.target.innerText

//         if("0123456789".includes(label)){
//             screen.value += label
//         }else if(label == '.'){
//             screen.value += label
//         }else if ("/*-+".includes(label)){
//             num = screen.value
//             screen.value = label
//             if(label == '='){
//                 console.log(true)
//             }
//             //screen.value = eval(num + label)

//         }

//         if(screen.value[0] == "0" && screen.value[1] != "."){
//             screen.value = screen.value.slice(1)
//         }
//         screen.value = screen.value.replace(/(?<=\..*)\./, '')
//     })
// })
