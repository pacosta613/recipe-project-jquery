//$(function(){
  //$("a.load_ingredients").on("click", function(event){
    //$.ajax({
    //  method: "GET",
    //  url: this.href
    //}).success(function(response) {
    //  $("div.ingredients").html(response)
    //});

    //$.get(this.href).success(function(response){
    //  $("div.ingredients").html(response)
    //});

    //$.get(this.href).success(function(json){
    //  var $ol = $("div.ingredients ol");

    //  $ol.html("")
    //  json.forEach(function(ingredient){
    //    $ol.append("<li>" + ingredient.name + "</li>");
    //  });
    //});
  //$("a.load_ingredients").on("click", function(event){
  //  $.ajax({
  //    dataType: 'script',
  //    url: this.href
  //  });
  //  event.preventDefault();
 // })
//})

//$(function(){
//
//  $("#new_ingredient").on("submit", function(e){
//
//    $.ajax({
//      url: this.action,
//      type: ($("input[name='_method']").val() || this.method),
//      success: function(response){
//        var $ol = $("ingredients ol");
//        $ol.append(response);
//      }
//    });
//    console.log(data)
//    $("input#ingredient_name").val('');
//    e.preventDefault();
//  })

//});