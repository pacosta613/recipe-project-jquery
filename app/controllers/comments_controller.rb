class CommentsController < ApplicationController
  before_action :find_recipe

  def index
    if params[:recipe_id]
      @recipe = Recipe.find(params[:recipe_id])
      @comments = @recipe.comments

      respond_to do |format|
        format.html {render :index}
        format.js {render :index}
      end 
    else
      @comments = Comment.all 
    end
  end

  def new
    @comment = @recipe.comments.build
  end
  
  def create
    @comment = Comment.create(comment_params)
    if @comment.save

      redirect_to recipe_path(@comment.recipe)
    else
      flash[:alert] = @comment.errors.full_messages

      redirect_to recipe_path(@comment.recipe)
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:recipe_id, :content, :user_id)
  end

  def find_recipe
    @recipe = Recipe.find(params[:recipe_id])
  end

end