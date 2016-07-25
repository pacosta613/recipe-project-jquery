$(document).ready(function(){
  loadIngredients();
  //loadComments();
  newIngredients();
  //newComments();
});

function loadIngredients(){
  $('#recipe_ingredients').html('<h3>Ingredients:</h3>')
  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: this.href
  }).done(function(response){
    grabIngredients(response);
  });
};

function grabIngredients(data){ 
  var ingredients = [];
  var names = [];
  var nameId = [];
  var orderIngredients = "<ol>";
  
  for (var i = 0; i < data.length; i++) {
    names.push(data[i]["name"]);
    nameId.push(data[i]["id"]);
  }
  for (var i = 0; i < nameId.length; i++) {
    orderIngredients += "<li>" + names[i] + "</li>";
  }
  orderIngredients += "</ol>";
  return orderIngredients;
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
    grabComments(response.comments);
  });
}

function grabComments(array) {
  var comments = [];
  var commentId = [];
  var user = [];
  var orderComments = "<ol>";
  
  for (var i = 0; i < array.length; i++) {
    
    commentsId.push(array[i]["id"]);
    comments.push(array[i]["content"]);
    user.push(array[i].user["email"]);
  }
  for (var i = 0; i < commentId.length; i++){
    orderComments += "<li>" + user[i] + " - " + comments[i] + "</li>";
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
      $(".comments ol").append("<li>" + response["content"] + "</li>");
      //$("#comment_content").val("");
    });
  });
}