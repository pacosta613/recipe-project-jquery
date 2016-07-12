class IngredientsController < ApplicationController
  before_action :find_recipe, except: [:index]

  def index
    if params[:recipe_id]
      @recipe = Recipe.find(params[:recipe_id])
      @ingredients = @recipe.ingredients

      respond_to do |format|
        format.html {render :index}
        format.js {render 'index.js', :layout => false}
      end
    else
    #render layout: false
    #render :json => @ingredients
      @ingredients = Ingredient.all 
    end
  end
  
  def new
    @ingredient = @recipe.ingredients.build
  end

  def create
    @ingredient = @recipe.ingredients.create(ingredient_params)
    if @ingredient.save

      redirect_to recipe_path(@recipe)
    else
      flash[:alert] = @ingredient.errors.full_messages
      
      redirect_to new_recipe_ingredient_path
    end
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name, :recipe_id, :ingredient_ids => [])
  end

  def find_recipe
    @recipe = Recipe.find(params[:recipe_id])
  end

end
