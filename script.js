function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b) => a-b);
	
	totalSum =0;
  while(arr.length>1){
	  let first = arr.shift();
	  let second = arr.shift();
	  let cost = first+second;
    totalSum +=cost;
	  arr.push(cost);
	  arr.sort((a,b) => a-b);
	  
  }
	return totalSum;
}

module.exports=mincost;
