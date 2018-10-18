$(document).ready(function() {
  $("#blanks form").submit(function() {
    var blanks = ["name", "city", "state", "date", "vote"];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
    });
    $("#story").show();
    event.preventDefault();
  });
});
