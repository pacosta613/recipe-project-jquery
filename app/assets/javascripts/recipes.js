$(document).ready(function(){
  loadIngredients();
  loadComments();
});

var loadIngredients = function(){
  $("a.load_ingredients").on("click", function(e){
    //debugger
    e.preventDefault();
    $.ajax({
      method: 'Get',
      url: this.href,
      dataType: 'JSON'
    }).success(function(){
      $("div.ingredients").html(response)
    });
  });
};

var loadComments = function(){
  $("a.load_comments").on("click", function(e){
    e.preventDefault();
    $.ajax({
      method: 'Get',
      url: this.href,
      dataType: 'JSON'
    }).success(function(){
      $("div.comments").html(response)
    });
  });
};