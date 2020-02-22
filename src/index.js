
// You should implement your task here.

module.exports =   function towelSort(matrix){
  if(!matrix || !matrix.length){ return [];}
  let n = matrix[0].length;
  let m = matrix.length;
  let arr = [];
  for (let i=0; i< m; i++){

    if(i%2!=0){
        for(let j=matrix[i].length-1; j>=0;j--){
            arr.push(matrix[i][j])
        }
    } else {
        for(let j=0; j<matrix[i].length;j++){
            arr.push(matrix[i][j])
        }
    }
  } 
 
  return arr;
}
