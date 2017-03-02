console.log("this works");
$(document).ready(function(){

  //add pets into table on the DOM
  $('tbody').append('<td>owner name</td>' +
  '<td><input type="text" placeholder="owner" class="inputOwnerName"/></td>' +
  '<td><input type="text" placeholder="breed" class="inputBreed"/></td>' +
  '<td><input type="text" placeholder="color" class="inputColor"/></td>' +
  '<td><button class="updateButton">GO</button></td>' +
  '<td><button class="deleteButton">GO</button></td>' +
  '<td><button class="checkedIn">IN</button></td>');

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

    //     $.ajax({
    //       type: 'POST',
    //       url: '/ownername'
    //       data: ownerName
    //       success: function() {
    //
    //       }
    //     })
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






    // button to save pet edits
    $("table").on("click", ".goButton", function() { // change .goButton if name is different
      var thisPetId = $(this).parent().parent().children()
      $.ajax({
        type: 'GET',
        url: '/save/' + thisPetId
      });
    }); //end on go button click
  });//end of doc.ready
