
$(document).ready(function(){



//registure button click listener
$("#register").on("click", function(){
var firstInput = $("#firstInput").val();
var lastInput = $("#lastInput").val();
var fullName = toString(firstInput + lastInput);

console.log(firstInput);
$("#ownerContainer").append('<th>' + fullName + '</th>');

  $.ajax({
    type: 'POST',
    url: '/books',
    success: function(response) {

    }
  });//end of ajax GET
});//end of on.click
});//end of doc.ready
