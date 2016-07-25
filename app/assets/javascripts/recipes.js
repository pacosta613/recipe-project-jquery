$(document).ready(function(){
  loadIngredients();
  //loadComments();
  new_ingredients();
  //new_comments();
});

function loadIngredients(){
  $('#recipe_ingredients').html('<h3>Ingredients:</h3>')
  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: this.action
  }).done(function(response){
    grabIngredients(response);
  });
};

function grabIngredients(data){ 
  var ingredients = data["ingredients"];
  var names = [];
  var nameId = [];
  var orderIngredients = "<ol>";
  
  for (var i = 0; i < ingredients.length; i++) {
    names.push(ingredients[i]["name"]);
    nameId.push(ingredients[i]["id"]);
  }
  for (var i = 0; i < nameId.length; i++) {
    debugger
    orderIngredients += "<li>" + names[i] + "</li>";
  }
  orderIngredients += "</ol>";
  $(".ingredients").html(orderIngredients);
}

function new_ingredients(){
  $("#new_ingredient").on("submit", function(e){
    e.preventDefault();

    $.ajax({
      method: 'POST',
      url: this.action,
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(response){
      $(".ingredients ol").append("<li>" + response["name"] + "</li>");
      $("#ingredient_name").val("");
    });
  });
};