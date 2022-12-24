const btns = document.querySelectorAll('.btns button')
const input = document.querySelector('input')
let num = 0
let op = ""

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
    let label = e.target.innerText
        if("1234567890.".includes(label)){
            if("/*-+".includes(input.value)){                
                input.value = ''
            }
            input.value +=label
        } else if("/*-+".includes(label)){
            num = input.value
            op = label
            input.value =label
        } else if(label == "="){
            input.value = eval(num + op + input.value)
        }

        if(input.value[0] == "0" && input.value[1] !="."){
            input.value = input.value.slice(1)
        }
        input.value = input.value.replace(/(?<=\..*)\./, "");
    })
})