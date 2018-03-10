'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertWight;
function convertWight(from, to, weight) {
  var newWeight = weight;

  if (from == 'g' && to == 'kg') {
    return weight * 0.001;
  } else if (from == 'g' && to == 'oz') {
    return weight * 0.03277;
  } else if (from == 'g' && to == 'lb') {
    return weight * 0.002205;
  } else if (from == 'oz' && to == 'lb') {
    return weight * 0.0625;
  } else if (from == 'oz' && to == 'kg') {
    return weight * 0.02835;
  } else if (from == 'lb' && to == 'kg') {
    return weight * 0.4536;
  } else if (from == 'kg' && to == 'g') {
    return weight * 1000;
  } else if (from == 'oz' && to == 'g') {
    return weight * 28.35;
  } else if (from == 'lb' && to == 'g') {
    return weight * 453.6;
  } else if (from == 'lb' && to == 'oz') {
    return weight * 16;
  } else if (from == 'kg' && to == 'oz') {
    return weight * 35.27;
  } else if (from == 'kg' && to == 'lb') {
    return weight * 2.205;
  }

  return newWeight;
}