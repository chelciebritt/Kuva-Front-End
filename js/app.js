$(document).ready(function() {
  $('.materialboxed').materialbox();
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
  $(function() {
    var API = 'https://kuvafundb.herokuapp.com/api/sidenav/events/1'

    $.get(API)
      .then(function(data) {

        for (var i = 0; i < data.length; i++) {
          var album = data[i].name
          var tripid = data[i].trip_id
          $("#albumnames").append(`
            <li class="viewalbum" id="${tripid}"> ${album}</li>
      `)

        }

      });

  })
  //gets trip name/date
  $("#albumnames").on('click', '.viewalbum', function() {
    event.preventDefault()
    console.log(this.id)
    var API = "https://kuvafundb.herokuapp.com/api/event/eventdata/" + this.id;
    console.log(API)
    $.get(API)
      .then(function(data) {
        var response = data[0]
        console.log(response);
        var eventName = response.name;
        var startdate = moment(JSON.parse(response.start_date)).format('l');
        var enddate = moment(JSON.parse(response.start_date)).format('l');

        $("#eventname").text(`
              ${eventName}
            `)
        $("#daterange").text(`
              ${startdate} - ${enddate}
              `)
      })
  })
  //loop through the user keys retrieved from database
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
  })
})
