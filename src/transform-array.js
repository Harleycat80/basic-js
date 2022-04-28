const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr){
  
  if (!Array.isArray(arr)){
   throw new Error( "'arr' parameter must be an instance of the Array!")
  }
  try {
    Array.isArray(arr)
  }
  catch(err){
    return err

  }
  let arr2=arr.slice()
  for(let i=0;i<=arr2.length-1;i++){
  
  if((arr2[i]== "--discard-next" && arr2[i+2]=="--discard-prev")||(arr2[i]=="--discard-next" && arr2[i+2]== "--double-prev")){
      arr2.splice(i,3)
      
  }
  else if(arr2[i]== "--discard-next" && i!=arr2.length-1){
   arr2.splice(i,2)
  }
  else if(arr2[i]== "--discard-next" && i==arr2.length-1){
    arr2.splice(i,1)
  }
  if(arr2[i]== "--discard-prev"&&i!=0){
     arr2.splice(i-1,2)
} 
else if (arr2[i]== "--discard-prev"&&i==0){
  arr2.splice(i,1)
}
 if(arr2[i]== "--double-next"&& i!=arr2.length-1){
     arr2.fill(arr[i+1],i,i+2)
}
else if (arr2[i]== "--double-next"&& i==arr2.length-1){
  arr2.splice(i,1)
} 
 if(arr2[i]== "--double-prev"&&i!=0){
     arr2.fill(arr[i-1],i,i+1)
}    
else if (arr2[i]== "--double-prev"&&i==0){
  arr2.splice(i,1)
}  
    
  }
 return (arr2)
  
}


module.exports = {
  transform
};
