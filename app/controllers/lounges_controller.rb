class LoungesController < ApplicationController

  def index
    @lounges = Lounge.all
  end

  def show
    @lounge = Lounge.find(params[:id])
    @chat_messages = ChatMessage.where(lounge_id: params[:id]).includes(:user)
  end

end
