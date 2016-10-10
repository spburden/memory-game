function Memory(name) {
  this.name = name;
}

Memory.prototype.checkMatch = function(cardOne, cardTwo) {
  if (cardOne === cardTwo) {
    return true;
  } else {
    return false;
  }
  
};

exports.memoryModule = Memory;
