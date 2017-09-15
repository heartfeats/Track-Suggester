$(function() {
  $("#formOne").submit(function(event) {
    $("#css").hide();
    $("#ruby").hide();
    $("#c").hide();
    $("#all").hide();

    var questionOne = parseInt($('#design').val());
    var questionTwo = parseInt($('#ide').val());
    var questionThree = parseInt($('#open').val());
    var questionFour = parseInt($('#server').val());
    var questionFive = parseInt($('#front').val());

    var answer = questionOne + questionTwo + questionThree + questionFour + questionFive

    if (answer === 5 || answer === 14 || answer === 104 || answer === 23 || answer === 203 || answer === 113) {
      $("#css").show();
    }
    else if (answer === 50 || answer === 41 || answer === 140 || answer === 32 || answer === 131 || answer === 230) {
      $("#ruby").show();
    }
    else if (answer === 500 || answer === 401 || answer === 410 || answer === 302 || answer === 320 || answer === 311) {
      $("#c").show();
    }
    else {
      $("#css").show();
      $("#ruby").show();
      $("#c").show();
      $("#all").show();
    }
    event.preventDefault();
  });
});
