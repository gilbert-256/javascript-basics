
function payee(income,pers,total){
    //calculating the tax
    var tax=(pers/total)*income;
    //printed out the tax
    console.log(tax)
    //claculating the netpay of the tax got
    netpay=income-tax;
    //printed out the net pay
    console.log(netpay)

}
//we callling the function payee
payee(100000,30,100)

