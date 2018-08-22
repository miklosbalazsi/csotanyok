Array.prototype.uniq = function(){
  var a = {};
  var i = null;
  for(i=0; i < this.length; i++){
    a[this[i]]++;
  }
  return Object.keys(a);
}

function sym(args) {

  var args_num = arguments.length;
  var sym_hash = {};

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

