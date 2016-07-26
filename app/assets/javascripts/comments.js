$(document).ready(function(){
  loadComments();
  newComments();
});


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