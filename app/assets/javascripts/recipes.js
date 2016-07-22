$(document).ready(function(){
  loadIngredients();
  loadComments();
  new_ingredients();
  new_comments();
});

function loadIngredients(){
  $("a.load_ingredients").on("click", function(e){
    e.preventDefault();

    $.ajax({
      method: 'GET',
      url: this.href,
      dataType: 'json'
    }).done(function(response){
      $("a.load_ingredients").append(grabIngredients(response));
    });   
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

function loadComments(){
  $("a.load_comments").on("click", function(e){
    e.preventDefault();

    $.ajax({
      url: this.href,
      method: 'GET',
      dataType: 'json'
    }).success(function(response){
      $("a.load_comments").append(grabComments(response));
    });
  });
};

function grabComments(array) {
  var commentId = [];
  var comments = [];
  var user = [];
  var orderComments = "<ol>";
  for (var i = 0; i < array.length; i++) {
    commentId.push(array[i]["id"]);
    comments.push(array[i]["content"]);
    user.push(array[i].user["email"]);
  }
  for (var i = 0; i < commentId.length; i++){
    orderComments += "<li>" + user[i] + " - " + comments[i] + "</li>";

  }
  orderComments += "</ol>";
  $(".comments").html(orderComments);
};

function new_ingredients(){
  $("#new_ingredient").on("submit", function(e){
    e.preventDefault();

    $.ajax({
      method: 'POST',
      url: this.action,
      data: $(this).serialize()
    }).done(function(response){
      grabIngredients().append(response);
      $("#ingredient_name").val("");
    });
  });
};

var new_comments = function(){

};