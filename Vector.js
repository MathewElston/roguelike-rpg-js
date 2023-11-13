class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
  multiply(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
  }
  scale(num) {
    this.x *= num;
    this.y *= num;
  }
  set(x,y) {
    this.x = x;
    this.y = y;
  }

  get() {
    return this;
  }
  getMagnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  normalize() {
    const mag = this.getMagnitude();
    if (mag != 0) {
      this.x /= mag;
      this.y /= mag;
    }
  }
  // If scalar > 0, vectors are facing the same directions
  // If scalar < 0, vectors are facing a opposite directions
  // if scalar = 0, vecotrs are perpendicular (L shaped)
  getDotProduct(vectorB) {
    const scalar = this.x * vectorB.x + this.y * vectorB.y;
    return scalar;
  }
  getAngle(vectorB) {
    const thisMag = this.getMagnitude();
    const vectorBMag = vectorB.getMagnitude();
    const cos = this.getDotProduct(vectorB) / (thisMag * vectorBMag);
    const radian = Math.acos(cos);
    const angle = radian* 180 / Math.PI
  
    return angle;
  }
}
