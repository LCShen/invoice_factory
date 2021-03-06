class StaticPagesController < ApplicationController
  respond_to :html, :js
  before_action :logged_in_user
  
  
  def dashboard
    @recipients = []
    @invs = Inv.all.where(user_id: current_user.id).reverse
    
    @invs.each {|x| @recipients << [x.recipient, x.address_1, x.address_2, x.address_3] }
    
    @inv = Inv.new
    @group = Group.all.where(user_id: current_user.id).reverse #finds all groups created by current user
  end
  
  def tutorial
    if current_user.tutorial_complete == true
      redirect_to new_inv_path
    end
    @user = current_user
    @toplines = current_user.toplines.all
    @invs = Inv.all.where(user_id: current_user.id).reverse
  end
  
end
