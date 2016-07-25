$(document).ready(function(){
  loadIngredients();
  //loadComments();
  new_ingredients();
  //new_comments();
});

function loadIngredients(){
  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: this.action
  }).done(function(response){
    //grabIngredients(response.ingredients);
    $("a.load_ingredients").append(grabIngredients(response.ingredients));
  });
};

function grabIngredients(array){ 
  var names = [];
  var nameId = [];
  var orderIngredients = "<ol>";
  
  for (var i = 0; i < array.length; i++) {
    names.push(array[i]["name"]);
    nameId.push(array[i]["id"]);
  }
  for (var i = 0; i < nameId.length; i++) {
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