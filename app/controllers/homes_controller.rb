class HomesController < ApplicationController
  before_action :move_to_user_informations_new, only: [:index]

  def index
  end

  private

  def move_to_user_informations_new
    if user_signed_in? && (current_user.user_information == nil)
      redirect_to controller: :user_informations, action: :new
    end
  end

end
