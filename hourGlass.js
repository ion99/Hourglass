function hourGlass(array){
  let arr =[];
  for (let i = 0; i < array.length-2; i++){
    for (let j = 0; j < array.length-2; j++){
      arr.push(array[i][j] + array[i][j+1] + array[i][j+2] + array[i+1][j+1] + array[i+2][j] + array[i+2][j+1] + array[i+2][j+2]);
    } 
  }
  //return arr.sort(function(a, b){ return b-a;})[0];
  //return Math.max(...arr);
  return arr.reduce(function(previous, current){ return previous > current ? previous:current; });
}