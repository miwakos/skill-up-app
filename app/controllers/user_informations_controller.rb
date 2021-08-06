class UserInformationsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create]

  def new
    @user_information = UserInformation.new
  end

  def create
    if UserInformation.create(user_information_params)
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def user_information_params
    params.require(:user_information).permit(:user_icon, :nickname,:birthday,  :prefecture_id, :user_introduction).merge(user_id: current_user.id)
  end

end
