let bankAcc = {
    accName:"Gayatri",
    accType:"Saving",
    accBalance:7020
}
let checkBalance = ()=>{
    console.log("Balance",bankAcc.accBalance);
}

let withDraw = (amt)=>{
    bankAcc.accBalance -= amt
    console.log("Current Balance",bankAcc.accBalance);
}

let depositeAmt = (amt)=>{
    bankAcc.accBalance += amt
    console.log("Current Balance",bankAcc.accBalance);
}

export {checkBalance,withDraw,depositeAmt}