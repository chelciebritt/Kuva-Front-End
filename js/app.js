$(document).ready(function() {
  $('.materialboxed').materialbox();
});

$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 2, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false // Close upon selecting a date,
});

// Adding email fields dynamically

var counter = 1;
var limit = 15;

function addInput(divName) {
  if (counter == limit) {
    alert("You have reached the limit of adding " + counter + " inputs");
  } else {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "Enter email " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
    document.getElementById(divName).appendChild(newdiv);
    counter++;
  }
}
