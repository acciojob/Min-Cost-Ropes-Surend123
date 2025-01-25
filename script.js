function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b) => a-b);
	minCost =0;
	totalSum =0;
  while(arr.length>1){
	  let first = arr.shift();
	  let second = arr.shift();
	  minCost = first+second;
    totalSum +=minCost;
	  arr.push(minCost);
	  arr.sort((a,b) => a-b);
	  
  }
	return totalSum;
}

module.exports=mincost;
