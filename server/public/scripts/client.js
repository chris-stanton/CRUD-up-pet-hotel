console.log("this works");
$(document).ready(function(){

//registure button click listener
$("#register").on("click", function(){
  event.preventDefault();
  var firstInput = $("#firstName").val();
  var lastInput = $("#lastName").val();
  var fullName = firstInput + " " + lastInput;

  $("#ownerContainer").append('<p>' + fullName + '</p>');

var ownerName = {
  firstName: firstInput,
  lastName: lastInput
};

    $.ajax({
      type: 'POST',
      url: '/ownername'
      data: ownerName
      success: function() {

      }
    })
});//end of registure listener


//addpet button click listener
$("#addPetButton").on("click", function(){
  event.preventDefault();
  var petName = $("#petName").val();
  var petColor = $("#petColor").val();
  var petBreed = $("#breed").val();

  $("#petNameContainer").append('<p>' + petName + '</p>');
  $("#petBreedContainer").append('<p>' + petColor + '</p>');
  $("#petColorContainer").append('<p>' + petBreed + '</p>');
});//end of addpet listener







$("table").on("click", ".goButton", function() {
  var thisPetId = $(this).parent().parent().children()
  $.ajax({
    type: 'GET',
    url: '/save/' + thisPetId
  })
}); //end on go button click
});//end of doc.ready
