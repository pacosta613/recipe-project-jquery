$(document).ready(function(){
  grabLink();
  Recipe();
  loadIngredients();
  loadComments();
  newIngredients();
  newComments();
});

function Recipe(hash){
  this.id = hash['id'];
  this.name = hash['name'];
  this.ingredients = hash['ingredients']
  this.readMore = '<a href="/recipes/' + this.id + '" id="readMore">See Ingredients</a>'
}

function grabLink(){
  $("#recipe").on("click", function(e){
    e.preventDefault();
    var target = e["target"]["href"];

    $.getJSON (target + ".json", function(result){
      handleReponse(result);
      hideIngredients(result);
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