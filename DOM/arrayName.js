// let names = ["Gayatri","chetan","Gauri","komal","jay","Gopal"]

// let Answer = document.getElementById("hAns")
// let i=0
// setInterval(()=>{
//     if(i<names.length){
//         Answer.innerText=names[i]
//         i++
//     }
    
// },1000)
let btn = document.getElementById("btnSub")

let inp1=document.getElementById("inp1")
let inp2=document.getElementById("inp2")
let inp3=document.getElementById("inp3")
let inp4=document.getElementById("inp4")
let inp5=document.getElementById("inp5")

let ans = document.getElementById("ans")
let ans1 = document.getElementById("ans1")
let ans2 = document.getElementById("ans2")
let ans3 = document.getElementById("ans3")
let ans4 = document.getElementById("ans4")
btn.addEventListener("click",()=>{
      ans.innerText=inp1.value
      ans1.innerText=inp2.value
      ans2.innerText=inp3.value
      ans3.innerText=inp4.value
      ans4.innerText=inp5.value
      inp1.value=""
      inp2.value=""
      inp3.value=""
      inp4.value=""
      inp5.value=""
})

