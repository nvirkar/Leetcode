/**
 * Leetcode-3074
 * Apple Redistribution into Boxes
 * https://leetcode.com/problems/apple-redistribution-into-boxes/description/
 * #Array
 */

var minimumBoxes = function(apple, capacity) {
    let appleLength = apple.length;
    let capacityLength = capacity.length;
    let appleQuant = 0;
    for(let i=0;i<appleLength;i++){
        appleQuant += apple[i]
    }
    let newcapacity = capacity.sort(function(a, b){return b - a})
    
    let boxes = 1;
    for(let i=0;i<capacityLength;i++){
        if(appleQuant > newcapacity[i]){
            appleQuant = appleQuant-newcapacity[i]
            boxes++
        }else if(appleQuant == newcapacity[i]){
            appleQuant = appleQuant-newcapacity[i]
        }
        else{
            break;
        }
    }
    return boxes;

};


// console.log(minimumBoxes([1,3,2],[4,3,1,5,2]))
// console.log(minimumBoxes([5,5,5],[2,4,2,7]))

console.log(minimumBoxes([6,9,8,5,2],[4,10,6,1,10,6,4,7,7,9]))





