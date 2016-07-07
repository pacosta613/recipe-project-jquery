class RecipesController < ApplicationController
  #before_action :find_recipes, only: [:index]
  before_action :find_recipe, only: [:show, :edit, :update, :destroy]
  
  def index
    @recipes = Recipe.all
    @recipe = Recipe.all.most_popular
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.create(recipe_params)
    if @recipe.save

      redirect_to @recipe
    else
      flash.now[:alert] = @recipe.errors.full_messages
      render :new
    end
  end

  def show
    #binding.pry
    @comment = Comment.new
    @ingredient = Ingredient.new
    @comments = @recipe.comments
    @ingredients = @recipe.ingredients

    respond_to do |format|
      format.html {render :show}
      format.json {render json: @recipe}
    end
  end

  def edit
  end

  def update
    if @recipe.update(recipe_params)

      redirect_to @recipe
    else
      render :edit
    end
  end

  def destroy
    @recipe.destroy

    redirect_to root_path
  end

  private
  
  def recipe_params
    params.require(:recipe).permit(:name, :user_id, :ingredient_ids => [], :ingredients_attributes => [:name])
  end

  def find_recipe
    @recipe = Recipe.find(params[:id])
  end

  def find_recipes
    @recipe = Recipe.find_by(params[:id])
  end

end