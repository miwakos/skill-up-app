class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @user_information = UserInformation.find_by(user_id: params[:id])
  end

end
