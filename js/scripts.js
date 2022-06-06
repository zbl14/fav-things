$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const favFood = $("input#favFood").val();
    const favBeverage = $("input#favBeverage").val();
    const favMovie = $("input#favMovie").val();
    const favBook = $("input#favBook").val();
    
    const arrayOfFavThings = [favFood, favBeverage, favMovie, favBook];
    $("#result").show();
    $("#nameInput").text(nameInput);
        
    arrayOfFavThings.forEach(function(thing) {
    $("#favThings").append("<li>" + thing + "</li>");
});
  });
});