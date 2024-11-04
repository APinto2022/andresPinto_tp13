
//console.log(" test");
function createMultiplicationTable(){
    for(let i=1; i<=10;i++){
        console.log("la siguiente es la tabla del "+i);
        for(let j=0; j<=10; j++){
            console.log(i,"x",j, "= ", i*j)
        }
    }
}
createMultiplicationTable();