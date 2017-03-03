var petTableArray = [];
var checkedInWord;
var checkedInStatus = true;

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
        url: '/pets',
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

  //add pets into table on the DOM, checks for checkinstatus

  $.ajax({
    type: 'GET',
    url: '/pets/fetch',
    success: function(response) {
      petTableArray = response;
      console.log(petTableArray);
      for (var i = 0; i < petTableArray.length; i++) {
        appendPetToTable(petTableArray[i], checkedInStatus);
        checkedInStatus = response[i].checkedin;
        if(checkedInStatus) {
          $('.checkedIn').text('CHECK IN');
          checkedInStatus = false;
        } else {
          $('.checkedIn').text('CHECK OUT');
          checkedInStatus = true;
        }
      }
    },
    error: function(response) {
      console.log(response);
    }


  }); // end ajax call for table

  //Paige in process update button
  $("table").on("click", ".updateButton", function() {
    var thisPetId = $(this).parent().parent().data().id;
    var thisPetUpdateObject = {
      owner_id: $('.ownerInfo').data().id,
      name: $('.inputPetName').val(),
      breed: $('.inputBreed').val() ,
      color: $('.inputColor').val()
    }
    console.log(thisPetUpdateObject);
    $.ajax({
      type: 'PUT',
      url: '/pets/save/' + thisPetId,
      data: thisPetUpdateObject,
      success: function(response) {
        console.log(response);
      },
      error: function(response) {
        console.log(response);
      }
    })
  }); //end on click update button click


  //petDeleteButton listener
  $('table').on('click', '.deleteButton',  function(){
    event.preventDefault();
    var idPetDelete = $(this).parent().parent().data().id;
    console.log(idPetDelete);
    $.ajax({
      type: 'DELETE',
      url: 'pets/delete/' + idPetDelete,
      success: function(response){
        console.log(response);
      },
      error: function(response) {
        console.log(response);
      }
    })
  });//ends delete pet button


  // checked in on click
  $('table').on('click', '.checkedIn', function() {
    if(checkedInWord) {
      $('.checkedIn').text('CHECK IN');
      checkedInWord = false;
    } else {
      $('.checkedIn').text('CHECK OUT');
      checkedInWord = true;
    }
    var idPetCheckIn = $(this).parent().parent().data().id
    var checkedInObject = {
      petId: checkedInWord
    };
    $.ajax({
      type: 'POST',
      url: 'pets/checkin/' + idPetCheckIn,
      data: checkedInObject,
      success: function(response) {
        console.log(response);
      },
      error: function(response) {
        console.log(response);
      }
    }); // end ajax call
    console.log(checkedInWord);
  }); // on checkedIn button click
});//end of doc.ready

// appends pet to the table
function appendPetToTable(response, checkedInStatus) {
  $('tbody').append('<tr class="ownerInfo" data-id="' + response.id + '"><td>' + response.first_name + ' ' + response.last_name + '</td>' +
  '<td><input type="text" placeholder="pet name" class="inputPetName" value="' + response.name + '"/></td>' +
  '<td><input type="text" placeholder="breed" class="inputBreed" value="' + response.breed + '"/></td>' +
  '<td><input type="text" placeholder="color" class="inputColor" value="' + response.color + '"/></td>' +
  '<td><button class="updateButton">GO</button></td>' +
  '<td><button class="deleteButton">GO</button></td>' +
  '<td><button class="checkedIn">' + response.checkedin + '</button></td></tr>');
}
