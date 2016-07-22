$(document).ready(function(){
  loadIngredients();
  loadComments();
  new_ingredients();
  new_comments();
});

var loadIngredients = function(){
  $("a.load_ingredients").on("click", function(e){
    //debugger
    e.preventDefault();

    $.ajax({
      method: 'GET',
      url: this.href,
      dataType: 'json'
    }).done(function(response){
      grabIngredients(response);
    });   
  });
};

function grabIngredients(array){ 
  var names = [];
  var nameId = [];
  var orderIngredients = "<ul>";

  for (var i = 0; i < array.length; i++) {
    names.push(array[i]["name"]);
    nameId.push(array[i]["id"]);
  }
  for (var i = 0; i < nameId.length; i ++) {
    orderIngredients += "<li>" + nameId[i] + ". " + names[i] + "</li>";
  }
  $(".ingredients").html(orderIngredients);
}


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