// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if (block>42){
   let res=block-42;
   return res
  }
  else
  {
    let res = 42 - block ;
    return res
  } 
}

console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))
function distanceFromHqInFeet(block) {
 let  res=distanceFromHqInBlocks(block);
  let res1=res*264
  return res1
}
console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))
function distanceTravelledInFeet(start, destination) {
  if (destination >start){
  let res= (destination - start)*264;
  return res}
  else{
    let res = (start - destination) * 264;
  return res
}
}
function calculatesFarePrice(start, destination) {
  
  let res = distanceTravelledInFeet(start, destination)
  let price;
  if (res > 0 && res <=400)
      return price = 0;
  if (res > 400 && res <=2000)
    return price = 2.56
  if (res > 2000 && res <= 2500)
    return price = 25
  if (res > 2500 )
    return  'cannot travel that far'
    
  }
console.log(calculatesFarePrice(43, 44))
