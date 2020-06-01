"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var d3 = _interopRequireWildcard(require("d3"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _mdc = mdc,
    ripple = _mdc.ripple,
    slider = _mdc.slider;
var MDCSlider = slider.MDCSlider;
var epochSlider = new MDCSlider(document.querySelector('.mdc-slider'));
epochSlider.listen('MDCSlider:change', function () {
  return console.log("Value changed to ".concat(epochSlider.value));
});
var MDCRipple = ripple.MDCRipple;
var playButton = document.querySelector('.mdc-button');
var playButtonRipple = new MDCRipple(playButton); // playButtonRipple.listen('MDCRipple:onclick', () => console.log(`Value changed to ${playButtonRipple.value}`));

var getEpoch = function getEpoch() {
  return epochSlider.value;
};

var width = 5000;
var height = 5000;
var cnn = {
  conv: [{
    weights: [[0.0, 0.4, 1.0], [0.35, 0.8, 0.3], [0.2, 0.68, 0.58]]
  }, {
    weights: [[0.3, 0.4, 1.0], [0.35, 0.8, 0.3], [0.2, 0.68, 0.58]]
  }, {
    weights: [[0.3, 0.8, 1.0], [1.0, 0.3, 0.3], [0.0, 0.77, 0.58]]
  }],
  subsampling: [{
    weights: [[0.0, 1.0], [0.3, 0.7]]
  }, {
    weights: [[0.25, 0.95], [0.3, 0.7]]
  }]
};
var svg = d3.select("body").append("svg").attr("width", width).attr("height", height); // Conv Layers

var conv = svg.selectAll(".rect").data(cnn.conv).enter().append("g").classed('rect', true);
conv.append("text").text("Convolution Layers");
var colorScale = d3.scale.linear().domain([0.0, 1.0]).range(['white', 'black']);
cnn.conv.forEach(function (layer, idx) {
  var layerAgg = conv.append("g").attr("transform", function (d) {
    return "translate(" + idx * 80.0 + "," + 0.0 + ")";
  }).attr("stroke", "black");

  for (var row = 0; row < layer.weights.length; row++) {
    for (var col = 0; col < layer.weights[row].length; col++) {
      layerAgg.append("rect").attr("width", 20).attr("height", 20).attr("x", row * 20).attr("y", col * 20).attr("fill", function (d) {
        return colorScale(layer.weights[row][col]);
      });
    }
  }
});
var subsampling = svg.selectAll(".subsampling").data(cnn.subsampling).enter().append("g");
cnn.subsampling.forEach(function (layer, idx) {
  var layerAgg = subsampling.append("g").attr("transform", function (d) {
    return "translate(" + idx * 60.0 + "," + 0.0 + ")";
  }).attr("stroke", "black");

  for (var row = 0; row < layer.weights.length; row++) {
    for (var col = 0; col < layer.weights[row].length; col++) {
      layerAgg.append("rect").attr("width", 20).attr("height", 20).attr("x", row * 20).attr("y", col * 20).attr("fill", function (d) {
        return colorScale(layer.weights[row][col]);
      });
    }
  }
});
subsampling.attr("transform", function (d) {
  return "translate(" + 0 + "," + 100 + ")";
});