class SessionsController < ApplicationController

  def new
    redirect_to root_url if logged_in?
  end

  def create
    user = User.find_by(name: params[:session][:name])
    if user 
      log_in user
      redirect_to root_url
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end
  
  
  
end