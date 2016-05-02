class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_email(params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to root_url 
    else
      redirect_to login_url
    end
  end

  def destroy
    session.destroy
    redirect_to root_url
  end

end