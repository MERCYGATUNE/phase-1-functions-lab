// Code your solution in this file!
l
 function distanceFromHqInBlocks(numofblocks){
  if (numofblocks >=42){
    return (numofblocks-42);
  }else {
    return (42-numofblocks);
  }
 }

 function distanceFromHqInFeet(blockNum){
    const ftPerBlock =264;
    if(blockNum >= 42){
        return(blockNum-42) * 264;
        }else {
        return (42-blockNum) * 264;
    }

 }


function distanceTravelledInFeet(start,destination){
 const ftPerBlock =264;
 if (start >= destination){
    return (start-destination) *ftPerBlock;
 }
 return (destination-start) * ftPerBlock;

}




function calculatesFarePrice ( start,destination){

     const distance = distanceTravelledInFeet(start,destination);
     let price = 0;

    if (distance <= 400){
        return price=0;

        }else if (distance > 400 && distance <=2000){
        return (distance-400) * 0.02;

    }else if (distance > 2000 && distance <= 2500){
        return price =25;
    
     }else {
        
        return 'cannot travel that far';
    }
    return price;
}