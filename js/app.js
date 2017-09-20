$(document).ready(function() {
  $('.materialboxed').materialbox();
});


$(function() {
  var API = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='
  var API_KEY = '634657769.f866f3d.214922cf24f84b52bdcb85eee0ca8be1';

  $.getJSON(API + API_KEY + '&callback=?', function(insta) {
    $.each(insta.data, function(photos, src) {
      if (photos === 20) {
        return false;
      }
      var imgUrl = src.images.standard_resolution.url

      $("#picDiv").append(`

                          <div class="col s12 m6 l4 ">
                            <div class="card">
                              <div class="card-image">
                                <img class="materialboxed" src=${imgUrl}>
                              </div>
                            </div>
                          </div>

                        `)
    });
  });
});

$(function() {
  var API = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='
  var API_KEY = '497728630.f866f3d.be333d265ed0425899255e2a9d245d82';

  $.getJSON(API + API_KEY + '&callback=?', function(insta) {
    $.each(insta.data, function(photos, src) {
      if (photos === 20) {
        return false;
      }
      var imgUrl = src.images.standard_resolution.url
      $("#picDiv").append(`

                          <div class="col s12 m6 l4 ">
                            <div class="card">
                              <div class="card-image">
                                <img class="materialboxed" src=${imgUrl}>
                              </div>
                            </div>
                          </div>

                        `)
    });
  });
});

$(function() {
  var API = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='
  var API_KEY = '144606724.f866f3d.18f35ca468af49c3b6a35b6c3267c3aa';

  $.getJSON(API + API_KEY + '&callback=?', function(insta) {
    $.each(insta.data, function(photos, src) {
      if (photos === 20) {
        return false;
      }
      var imgUrl = src.images.standard_resolution.url
      $("#picDiv").append(`

                          <div class="col s12 m6 l4 ">
                            <div class="card">
                              <div class="card-image">
                                <img class="materialboxed" src=${imgUrl}>
                              </div>
                            </div>
                          </div>

                        `)
    });
  });
});

$(function() {
  var API = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='
  var API_KEY = '2999558429.f866f3d.b1fa2ffae720409ba4cbe9f383bcbc47';

  $.getJSON(API + API_KEY + '&callback=?', function(insta) {
    $.each(insta.data, function(photos, src) {
      if (photos === 20) {
        return false;
      }
      var imgUrl = src.images.standard_resolution.url
      $("#picDiv").append(`

                          <div class="col s12 m6 l4 ">
                            <div class="card">
                              <div class="card-image">
                                <img class="materialboxed" src=${imgUrl}>
                              </div>
                            </div>
                          </div>

                        `)
    });
  });
});

$(function() {
  var API = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='
  var API_KEY = '6047501312.f866f3d.57828d6449b34ba28b6ea2b59d0b254d';

  $.getJSON(API + API_KEY + '&callback=?', function(insta) {
    $.each(insta.data, function(photos, src) {
      if (photos === 20) {
        return false;
      }
      var imgUrl = src.images.standard_resolution.url
      $("#picDiv").append(`

                          <div class="col s12 m6 l4 ">
                            <div class="card">
                              <div class="card-image">
                                <img class="materialboxed" src=${imgUrl}>
                              </div>
                            </div>
                          </div>

                        `)
    });
  });
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
