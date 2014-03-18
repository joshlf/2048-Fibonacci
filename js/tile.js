function Tile(position, value, index) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.index            = index;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};
