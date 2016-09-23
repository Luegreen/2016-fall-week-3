/**
 * Created by siqi on 9/21/16.
 */

/* Simulation */

var numOfSimulations = 100;
/*
step 1: construct a for loop, iterating over it for x number of times each time, run Math.random()
each run of Math.random() will generate a number between 0 and 1 
*/
var numOfSimulations = 10000;
var sum = 0;
var bucket1 = 0;
var bucket2 = 0;
var bucket3 = 0;
var bucket4 = 0;


for(var i=0; i<numOfSimulations; i++) {

    var result = Math.random();
    
    sum = sum + result;
    console.log("iteration" + i + ", sum is" + sum);
}

console.log("Average is" + sum/numOfSimulations);

if(result <= .25){
    bucket1 = bucket1 + 1;

}else if(result <= .5){
    bucket2 = bucket2 + 1;

}else if(result <= .75){
    bucket3 ++;

}else{
    bucket4 += 1;
}
console.log("Average is " + sum/numOfSimulations);
console.log("Proportion of values betwen 0 and .25 is" + bucket1/numOfSimulations*100 + "%");
console.log("Proportion of values betwen .25 and .50 is" + bucket2/numOfSimulations*100 + "%");           
console.log("Proportion of values betwen .50 and .75 is" + bucket3/numOfSimulations*100 + "%");
console.log("Proportion of values betwen .75 and 1.0 is" + bucket4/numOfSimulations*100 + "%");

/* inside the for loop, run Math.random();
add the result to a sum variable
devide the total by the number of variables we've run.
*/



