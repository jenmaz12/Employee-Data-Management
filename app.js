  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCLnSEtYVsJe6i28IxRmx70scldecVp4Po",
    authDomain: "employee-data-management-17ab7.firebaseapp.com",
    databaseURL: "https://employee-data-management-17ab7.firebaseio.com",
    projectId: "employee-data-management-17ab7",
    storageBucket: "employee-data-management-17ab7.appspot.com",
    messagingSenderId: "936549750918"
  };
  firebase.initializeApp(config);
// set database variable equal to database
  var database = firebase.database();

// set initial variables
  var name = "";
  var role = "";
  var start = "";
  var rate = 0;

// when the user clicks the submit button, set variables equal to the values entered
$("button").on("click", function(){
    event.preventDefault();

    name = $("#name").val().trim();
    role = $("#role").val().trim();
    start = $("#start").val().trim();
    rate = $("#rate").val().trim();

    console.log(name);
    console.log(role);
    console.log(start);
    console.log(rate);

    database.ref().push({
        name: name,
        role: role,
        start: start,
        rate: rate
    });
    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
        var newname = snapshot.val()
        $("tbody").append(`<tr>
                            <td>${newname.name}</td>
                            <td>${newname.role}</td>
                            <td>${newname.start}</td>
                            <td id="monthsWorked"></td>
                            <td>${newname.rate}</td>
                            <td id="totalBilled"></td>
                          </tr>`)
      })
})
