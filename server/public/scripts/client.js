var petTableArray = [];

console.log("this works");
$(document).ready(function(){

//registure button click listener
$("#register").on("click", function(){
  event.preventDefault();
  var firstInput = $("#firstName").val();
  var lastInput = $("#lastName").val();
  var fullName = firstInput + " " + lastInput;

  $("#ownerContainer").append('<p>' + fullName + '</p>');

var ownerNameObject = {
  firstName: firstInput,
  lastName: lastInput
};
console.log(ownerNameObject);

      $.ajax({
        type: 'POST',
        url: '/customername',
        data: ownerNameObject,
        success: function(response){
          console.log(response);
          getAllPets();
          }
      });//end of ajax POST

    function getAllPets() {
     $.ajax({
       type: 'GET',
       url: '/newpet',
       success: function(response) {
          console.log(response);
         }
     });//end of ajax
   }//end of getAllPets()
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

  appendPetToTable(petTableArray);
});//end of addpet listener

  //add pets into table on the DOM

  $.ajax({
    type: 'GET',
    url: '/newpet/getpet',
    success: function(response) {
      petTableArray = response;
      console.log(petTableArray);
      for (var i = 0; i < petTableArray.length; i++) {
        appendPetToTable(petTableArray[i]);
      }

    },
    error: function(response) {
      console.log(response);
    }


}); // end ajax call for table

//Paige in process save/edit button
$("table").on("click", ".goButton", function() {
  var thisPetId = $(this).parent().parent().children()
  $.ajax({
    type: 'GET',
    url: '/save/' + thisPetId
  })
}); //end on go button click


//petDeleteButton listener
    $('table').on('click', '.deleteButton',  function(){
      event.preventDefault();
      var idPetDelete = $(this).parent().parent().data().id;
      $.ajax({
      type: 'DELETE',
      url: '/delete/' + idPetDelete,
      success: function(response){
        console.log(response);
      }
    })
  });//ends delete pet button

});//end of doc.ready

// appends pet to the table
function appendPetToTable(response) {
  $('tbody').append('<tr><td>' + response.owner_id + '</td>' +
  '<td><input type="text" placeholder="pet name" class="inputPetName" value="' + response.name + '"/></td>' +
  '<td><input type="text" placeholder="breed" class="inputBreed" value="' + response.breed + '"/></td>' +
  '<td><input type="text" placeholder="color" class="inputColor" value="' + response.color + '"/></td>' +
  '<td><button class="updateButton">GO</button></td>' +
  '<td><button class="deleteButton">GO</button></td>' +
  '<td><button class="checkedIn">IN</button></td></tr>');
}
