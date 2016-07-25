$(document).ready(function(){
  loadIngredients();
  loadComments();
  newIngredients();
  newComments();
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
    orderIngredients += "<li>" + names[i] + "</li>";
    
  }
  orderIngredients += "</ol>";
 $(".ingredients").html(orderIngredients);
}

function newIngredients(){
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

function loadComments(){
  $('#recipe_comments').html('<h3>Comments:</h3>');

  $.ajax({
    url: this.action,
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    grabComments(response);
  });
}

function grabComments(array) {
  var comments = array["comments"];
  var commentId = [];
  var comment = [];
  var users = [];
  var orderComments = "<ol>";
  
  for (var i = 0; i < comments.length; i++) {
    commentId.push(comments[i]["id"]);
    comment.push(comments[i]["content"]);
    users.push(comments[i].user["email"]);
  }
  for (var i = 0; i < commentId.length; i++){
    orderComments += "<li>" + users[i] + " - " + comment[i] + "</li>";
  }

  orderComments += "</ol>";
  $(".comments").html(orderComments);
};

function newComments(){
  $("#new_comment").on("submit", function(e){
    e.preventDefault();

    $.ajax({
      method: 'POST',
      url: this.action,
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(response){
      $(".comments ol").append("<li>" + response.user["email"] + " - " + response["content"] + "</li>");
      $("#comment_content").val("");
    });
  });
}