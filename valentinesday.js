let distance = 0, fare = 0
while(distance <= 10){
    fare = fare + 10;
    distance += 2;
    console.log(distance);
    // console.log(`The fare charge are ${fare} for ${distance} km distance <br>`);
}
// document.write(`Thank You for  visiting this site`);

let j=0;
    while(j<=20){
        j++;
        if(j%2==0){
            continue;
        }
        else{
            console.log(`${j}`);
            // document.write(`${j} <br> <hr>`);
// while loops
            let j = 1;
            while(j <=20){
                j++;
                if(j%5 ==0){
                    break;
                }
                else{
                    console.log(`${j}`);
                    // document.write(`${j}`);
                }
            }
        // }
    // }