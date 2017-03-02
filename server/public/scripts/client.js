console.log("this works");
$(document).ready(function(){



//registure button click listener
$("#register").on("click", function(){
  event.preventDefault();
  var firstInput = $("#firstName").val();
  var lastInput = $("#lastName").val();
  var fullName = firstInput + " " + lastInput;

  $("#ownerContainer").append('<p>' + fullName + '</p>');

    $.ajax({
      type: 'POST',
      url: '/ownername'
    })
});//end of registure listener


//addpet button click listener
$("#addPetButton").on("click", function(){
  event.preventDefault();
  var petName = $("#pName").val();
  var petColor = $("#petColor").val();
  var petBreed = $("#breed").val();

  $("#petNameContainer").append('<p>' + petName + '</p>');
  $("#petBreedContainer").append('<p>' + petColor + '</p>');
  $("#petColorContainer").append('<p>' + petBreed + '</p>');
});//end of addpet listener







$("table").on("click", ".goButton", function() {
  var thisPetId = $(this).parent().parent().children()
  $.ajax({
    type: 'POST',
    url: '/save/' + thisPetId
  })
}); //end on go button click
});//end of doc.ready
