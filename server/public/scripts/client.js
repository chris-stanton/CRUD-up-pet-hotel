
$(document).ready(function(){



//registure button click listener
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
});//end of doc.ready



$("table").on("click", ".goButton", function() { // change .goButton if name is different
  var thisPetId = $(this).parent().parent().children()
  $.ajax({
    type: 'POST',
    url: '/save/' + thisPetId
  })
}); //end on go button click
