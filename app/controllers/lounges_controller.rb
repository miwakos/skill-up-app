class LoungesController < ApplicationController
  before_action :authenticate_user!, only: [:index, :create, :show, :destroy]

  def index
    @lounges = Lounge.all
  end

  def create
    # lounge_channel.rbにて定義
  end

  def show
    @lounge = Lounge.find(params[:id])
    @chat_messages = ChatMessage.where(lounge_id: params[:id]).includes(:user)
    @chat_entry1 = ChatEntry.find_by(lounge_id: params[:id], seat_no: 1)
    @chat_entry2 = ChatEntry.find_by(lounge_id: params[:id], seat_no: 2)
    @chat_entry3 = ChatEntry.find_by(lounge_id: params[:id], seat_no: 3)
  end

  def destroy
    # lounge_channel.rbにて定義
  end

end
