// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.even = 0;

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  var self = this;
  setTimeout(function() {
    self.step(); // must rebind this or else this will be called on window
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  // var lineUp = {
  //   top: '500px'
  // };
  // this.$node.css(lineUp);
  this.$node.stop().animate({
    top: '500px'
  }, {duration: 100});
}

var lineUp = function(array) {
  for(var i = 0; i < array.length; i++) {
    array[i].$node.stop(true).animate({
      top: '500px'
    }, {duration: 100});
  }
}

var pairUp = function(array) {
  var closestDistance = 1000000; //arbitrarily large number
  var result = [];
  var firstIndex;
  var secondIndex;
  
  //console.log(array);
  if (array.length === 0) {
    return result;
  }
  
  //debugger;
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < array.length; j++) {
      if(i !== j) {
        var height = Math.abs(array[i].top - array[j].top);
        var length = Math.abs(array[i].left - array[j].left);
        var value = Math.sqrt(height ** 2 + length ** 2);
        
        if(value < closestDistance) {
          closestDistance = value;
          //result[0] = array[i];
          firstIndex = i;
          //result[1] = array[j];
          secondIndex = j;
        }       
      }
    }
  }
  
  if(array.length === 1) {
    return array;
  }
  
  result.push(array[firstIndex], array[secondIndex]);
  //console.log(result);
  var newArr = [];
  if(array.length > 0) {
    for (var k = 0; k < array.length; k++) {
      if (k !== firstIndex && k !== secondIndex) {
        newArr.push(array[k]); 
      }
    } 
  }
  //console.log(result);
  return result.concat(pairUp(newArr));
}

var movePairs = function(array) {
  var copiedArray = array.slice();
  if (array.length % 2 === 1) {
    copiedArray.pop();
  }
  
  var offset = 50;
  for (var i = 0; i < copiedArray.length; i+=2) {
    var newTop = copiedArray[i].top;
    var newLeft = copiedArray[i].left + offset;
    
    copiedArray[i+1].$node.stop(true).animate({
      top: newTop,
      left: newLeft
    });
  }
  
}


  
