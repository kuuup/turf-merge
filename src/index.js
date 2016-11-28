var union = require('@turf/union');

function merge(input) {
  if(Array.isArray(input)) {
    if(!input || input.length === 0) return null;
    if(input.length === 1) return input[0];
    if(input.length === 2) return union(input[0], input[1]);

    var leftSide = input.splice(0, Math.floor(input.length / 2));

    return union(merge(leftSide), merge(input));
  } else if(input.type === 'FeatureCollection') {
    return merge(input.features);
  }
}

module.exports = merge;
