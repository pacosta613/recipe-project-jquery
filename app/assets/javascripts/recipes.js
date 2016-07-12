$(document).ready(function(){
  loadIngredients();
  loadComments();
  new_ingredients();
  new_comments();
});

function Recipe(id, name, ingredients){
  this.id = id 
  this.name = name 
  this.ingredients = ingredients
};

var loadIngredients = function(){
  $("a.load_ingredients").on("click", function(e){
    //debugger
    e.preventDefault();

    $.ajax({
      url: this.href,
      dataType: 'script'
    });
  });
};


var loadComments = function(){
  $("a.load_comments").on("click", function(e){
    e.preventDefault();

    $.ajax({
      url: this.href,
      dataType: 'script'
    });
  });
  //  $.get(this.href).success(function(response){
  //    $("div.comments").html(response)
  //  });
}

var new_ingredients = function(){
  $("#new_ingredient").on("submit", function(e){
    e.preventDefault();

    $.ajax({
      method: 'POST',
      url: this.action,
      data: $(this).serialize(),
      type: ($("input[name='_method']").val() || this.method),
      success: function(response){
        var $ol = $("ingredients ol");
        $ol.append(response);
      }
    });
  });
};

var new_comments = function(){

};