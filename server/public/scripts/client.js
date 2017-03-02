
$(document).ready(function(){



//register button click listener
$(".ownerRegistration").on("click", function(){

var firstInput = $(".firstInput").val();
var lastInput = $(".lastInput").val();
var fullName = toString(firstInput + lastInput);

$(".ownerName").append(fullName)

  $.ajax({
    type: 'GET',
    url: '/books',
    success: function(response) {

    }
  });//end of ajax GET
})://end of on.click

// Checking in a pet is done by inserting the current date into
// the check-in date column of the visits table.
// A checked-in pet will have a button that displays OUT.









});//end of doc.ready
