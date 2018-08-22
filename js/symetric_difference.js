// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" 
// of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). 
// For every additional symmetric difference you take (say on a set D = {2, 3}), 
// you should get the set with elements which are in either of the two the sets 
// but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). 
// The resulting array must contain only unique values (no duplicates).

/*
* Extend Array object with uniq methond
*/
Array.prototype.uniq = function(){
  var a = {};
  var i = null;
  for(i=0; i < this.length; i++){
    a[this[i]]++;
  }
  return Object.keys(a);
}

/*
* Sym subroutine to get the two or more array symetrical difference
*
* ex.: sym([1, 2, 3], [5, 2, 1, 4]);
* returns array
*/
function sym() {
  var args_num = arguments.length;
  var sym_hash = {};

  // get all array and remove duplicates.
  // create a hash with keys 
  for(var i=0; i<args_num ; i++){
    if (!Array.isArray(arguments[i]) ) { throw "Array Expected!"; }

    var a = arguments[i].uniq();

    for(var j=0; j< a.length; j++){
      var val = a[j];

      if ( val in sym_hash ){ sym_hash[val]++;}
      else{sym_hash[val] = 0;} 
    } 
  }
  var sym_a = [];
  var keys = Object.keys(sym_hash);
  console.log( keys );
  for(var j = 0; j< keys.length; j++) {
    var key = keys[j]; 
 //   console.log(j +" : "+ keys[j]+" : "+sym_hash[key]+" : "+sym_hash[key] % 2);
    var is_odd = Number(sym_hash[key]%2);
   if( !is_odd) { sym_a.push(Number(key));}
  };
  return(sym_a.sort());
}

sym([1, 2, 3], [5, 2, 1, 4]);

