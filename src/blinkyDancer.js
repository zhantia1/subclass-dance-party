// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype); // set inheritance
BlinkyDancer.prototype.constructor = BlinkyDancer; // set BlinkyDancer constructor func


BlinkyDancer.prototype.step = function() {
  //console.log('called');
  Dancer.prototype.step.call(this);
  this.$node.toggle();  
};

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var dancer = new BlinkyDancer(top, left, timeBetweenSteps);
  return dancer;
}

var Fatty = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

Fatty.prototype = Object.create(Dancer.prototype);
Fatty.prototype.constructor = Fatty;

Fatty.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    width: '25px',
    height: '25px'
  }, 1000);
  this.$node.animate({
    width: '1px',
    height: '1px'
  }, 1000);
};

var makeFattyDancer = function(top, left, timeBetweenSteps) {
  var dancer = new Fatty(top, left, timeBetweenSteps);
  return dancer;
};

var Shuffle = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

Shuffle.prototype = Object.create(Dancer.prototype);
Shuffle.prototype.constructor = Shuffle;

Shuffle.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    marginTop: '+=15px',
    marginLeft: '+=70px'
  }, 1000);
  this.$node.animate({
    marginTop: '-=15px',
    marginLeft: '-=70px'
  }, 1000) 
}

var makeShuffleDancer = function(top, left, timeBetweenSteps) {
  var dancer = new Shuffle(top, left, timeBetweenSteps);
  return dancer;
}









