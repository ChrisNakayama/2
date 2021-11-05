$(document).ready(function() {
  $("form.formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var dobInput = new Date($("#born").val());
    var cancerInput = $("input:radio[name=cancer]:checked").val();
    var energyColorInput = $("#color").val();
    var crimeInput = $("#crime").val();

    var score = 0;

 

    $(".name").text(nameInput);
    var crimeInputValue = parseInt(crimeInput);
    var millenial = dobInput.getFullYear();
    var r = nameInput.includes("r");

    console.log("Name: " + nameInput); 
    console.log("Year born: " + millenial); 
    console.log("Energy color: " + energyColorInput); 
    console.log("Crime score: " + crimeInputValue); 
    console.log("Score: " + score); 