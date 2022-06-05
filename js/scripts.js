$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const favFood = $("input#favFood").val();
    const favBeverage = $("input#favBeverage").val();
    const favMovie = $("input#favMovie").val();
    const favBook = $("input#favBook").val();
    
    const favThings = [favFood, favBeverage, favMovie, favBook];
    const favThingsOne = favThings.join()
    $("#result").show();
    $("#nameInput").text(nameInput);
    $("#favThings").text(favThingsOne);
  });
});