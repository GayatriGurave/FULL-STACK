let inp = document.getElementById("ino")
let btn = document.getElementById("btnSub")
let head = document.getElementById("hAns")

btnSub.addEventListener("click",()=>{
    let no = Number(inp.value)
    factNo = 1
    for(let i=1;i<=no;i++){
      factNo*=i
    }
    head.innerText = factNo
})