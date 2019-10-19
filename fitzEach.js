Number.prototype.each = function(d){
  var number = parseInt(this);
  for(var i = 0; i < number; i++){
    if(typeof d === 'function'){
      d();
    }
  }
};
