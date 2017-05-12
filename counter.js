function Counter() {
  this._count = 0;
};

Counter.prototype.add = function() {
  this._count++;
};

Counter.prototype.getCount = function() {
  return this._count;
}
