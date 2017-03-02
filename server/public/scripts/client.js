
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







// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>PET HOTEL</title>
//   </head>
//   <body>
//     <h1>Owners and Pets</h1>
//     <form class="ownerRegistration" action="index.html" method="post">
//       <h2>Owner Registration</h2>
//       <label for="firstName">First Name</label>
//<input type="text" name="firstName" placeholder="First Name"/>
//       <label for="lastName">Last Name</label><input type="text" name="lastName" placeholder="Last Name" />
//       <button type="button" name="register" id="register">Register</button>
//     </form>
//     <form class="petRegistration" action="index.html" method="post">
//       <h2>Pet Registration</h2>
//       <label class="ownerName">Owner Name</label>
//         <select>
//           <option>
//             Owners go here
//         </option>
//       </select>
//       <label>Pet Name</label><input type="text" placeholder="Pet Name">
//       <label>Color</label><input type="text" placeholder="Color">
//       <label>Breed</label><input type="text" placeholder="Breed">
//       <button type="button" id="addPet">Add Pet</button>
//     </form>
//
//     <table>
//       <thead>
//         <th>Owner</th>
//       </thead>
//     </table>
//   </body>
// </html>
// Contact GitHub API Training Shop Blog About
