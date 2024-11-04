async function orderfood(name,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order "+name+" Prepared");
        },time);
    });
}
async function restaurent() {
    console.log("Order Placed");
    const pizza=await orderfood("pizza",1000);
    console.log(pizza);
    const Burger=await orderfood("burger",2000);
    console.log(Burger);
    const noodles=await orderfood("noodles",3000);
    console.log(noodles);
    console.log("All Order Served");
}
restaurent();