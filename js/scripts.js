$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const favFood = $("input#favFood").val();
    const favBeverage = $("input#favBeverage").val();
    const favMovie = $("input#favMovie").val();
    const favBook = $("input#favBook").val();
    
    const arrayOfFavThings = [favFood, favBeverage, favMovie, favBook];
    arrayOfFavThings.push("coffee");
    console.log(arrayOfFavThings);
    $("#result").show();
    $("#nameInput").text(nameInput);
    $("#nameInput1").text(arrayOfFavThings[0]);
    $("#nameInput2").text(arrayOfFavThings[1]);
    $("#nameInput3").text(arrayOfFavThings[2]);
    $("#nameInput4").text(arrayOfFavThings[3]);
        
    //   arrayOfFavThings.forEach(function(thing) {
    //   $("#favThings").append("<li>" + thing + "</li>");
    // });
  });
});