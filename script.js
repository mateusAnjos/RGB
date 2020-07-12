window.addEventListener('load', start);
function start() {
  console.log('oi');
  valorRange();
}

function valorRange() {
  var rangeRed = document.getElementById('red').value;
  var rangeGreen = document.getElementById('green').value;
  var rangeBlue = document.getElementById('blue').value;
  var colour = 'rgb(' + rangeRed + ',' + rangeGreen + ',' + rangeBlue + ')';
  var novaCor = document.getElementById('cor');
  document.getElementById('redBox').value = rangeRed;
  document.getElementById('greenBox').value = rangeGreen;
  document.getElementById('blueBox').value = rangeBlue;
  novaCor.style.backgroundColor = colour;
}
