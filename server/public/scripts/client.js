console.log("this works");
$(document).ready(function(){

//chris is working on this area
//update option dropdown
function table(){
    $.ajax({
      type: 'GET',
      url: '/customer',
      success: function(response) {
        console.log('response', response);
        $("#register").on("click", function(response){
          for (var i = 0; i < response.length; i++) {
            response[i]++
            $("option").append('<option value = "response[i].id">' + response[i].firstName  + response[i].lastName + '</option>');
          }
});//end of on.click
}
});//end of ajax request
}
//registure button click listener
$("#register").on("click", function(){
  event.preventDefault();
  var firstInput = $("#firstName").val();
  var lastInput = $("#lastName").val();
  //var fullName = firstInput + " " + lastInput;
  //$("#ownerContainer").append('<p>' + fullName + '</p>');
// stores first and last name values into the object
var ownerNameObject = {
  firstName: firstInput,
  lastName: lastInput
};//end of object

//adds owner name to the database
  $.ajax({
    type: 'POST',
    url: '/customer',
    data: ownerNameObject,
    success: function(response){
      table();
      console.log("line 37: " + response);
}
});//end of ajax POST
}); //end of button click listener


//addpet button click listener
$("#addPetButton").on("click", function(){
  event.preventDefault();
  var petName = $("#petName").val();
  var petColor = $("#petColor").val();
  var petBreed = $("#breed").val();

  $("#petNameContainer").append('<p>' + petName + '</p>');
  $("#petBreedContainer").append('<p>' + petColor + '</p>');
  $("#petColorContainer").append('<p>' + petBreed + '</p>');
});//end of click registure listener

});//end of doc.ready











//
//
//
//     function getAllPets() {
//      $.ajax({
//        type: 'GET',
//        url: '/newpet',
//        success: function(response) {
//           console.log(response);
//          }
//      });//end of ajax
//    }//end of getAllPets()
//
// //addpet button click listener
// $("#addPetButton").on("click", function(){
//   event.preventDefault();
//   var petName = $("#petName").val();
//   var petColor = $("#petColor").val();
//   var petBreed = $("#breed").val();
//
//   $("#petNameContainer").append('<p>' + petName + '</p>');
//   $("#petBreedContainer").append('<p>' + petColor + '</p>');
//   $("#petColorContainer").append('<p>' + petBreed + '</p>');
// });//end of addpet listener
// });//end of click registure listener
//
//   //add pets into table on the DOM
//   $.ajax({
//     type: 'GET',
//     url: '/newpet/getpet',
//     success: function(response) {
//       console.log(response);
//       for (var i = 0; i < response.length; i++) {
//         $('tbody').append('<td>owner name</td>' +
//         '<td><input type="text" placeholder="pet name" class="inputPetName" value="' + response[i].name + '"/></td>' +
//         '<td><input type="text" placeholder="breed" class="inputBreed" value="' + response[i].breed + '"/></td>' +
//         '<td><input type="text" placeholder="color" class="inputColor" value="' + response[i].color + '"/></td>' +
//         '<td><button class="updateButton">GO</button></td>' +
//         '<td><button class="deleteButton">GO</button></td>' +
//         '<td><button class="checkedIn">IN</button></td>');
//       }
//
//     },
//     error: function(response) {
//       console.log(response);
//     }
//
//
// }); // end ajax call for table
//
// //Paige in process save/edit button
// $("table").on("click", ".goButton", function() {
//   var thisPetId = $(this).parent().parent().children()
//   $.ajax({
//     type: 'GET',
//     url: '/save/' + thisPetId
//   })
// }); //end on go button click
//
//
// //petDeleteButton listener
//     $('table').on('click', '.deleteButton',  function(){
//       event.preventDefault();
//       var idPetDelete = $(this).parent().parent().data().id;
//       $.ajax({
//       type: 'DELETE',
//       url: '/delete/' + idPetDelete,
//       success: function(response){
//         console.log(response);
//       }
//     })
//   });//ends delete pet button
//
// });//end of doc.ready
