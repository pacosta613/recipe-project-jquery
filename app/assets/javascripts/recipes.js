$(document).ready(function(){
  grabLink();
  Recipe();
});

function Recipe(hash){
  this.id = hash['id'];
  this.name = hash['name'];
  this.ingredients = hash['ingredients']
}

function grabLink(){
  $("a#recipe").on("click", function(e){
    e.preventDefault();
    var target = e["target"]["href"];

    $.getJSON (target + ".json", function(result){
      handleReponse(result);
      hideIngredients(result['id']);
    });
  });
}

function handleReponse(result){
  var recipe = new Recipe(result);
  var hide = '<a href="#" id="hideMe">Hide Ingredients</a>';

  $("p#recipe-" + recipe.id).html(recipe.listIngredients() + hide);
}

Recipe.prototype.listIngredients = function(){
  var ingredientList = "<h4> Ingredients in this Recipe </h4><ol>"; 

  for (var i = 0; i < this.ingredients.length; i++) {
    ingredientList += "<li>" + this.ingredients[i].name + "</li>";
  }
  ingredientList += "</ol>"
  return ingredientList;
}

function hideIngredients(id){
  $('#hideMe').on("click", function(e){
    e.preventDefault();
    
    $("p#recipe-" + id).text("");
  });
}