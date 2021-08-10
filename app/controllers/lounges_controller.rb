class LoungesController < ApplicationController

  def index
    @lounges = Lounge.all
  end

  def show
    @lounge = Lounge.find(params[:id])
    @chat_messages = ChatMessage.where(lounge_id: params[:id]).includes(:user)
    @chat_entry1 = ChatEntry.find_by(lounge_id: params[:id], seat_no: 1)
    @chat_entry2 = ChatEntry.find_by(lounge_id: params[:id], seat_no: 2)
    @chat_entry3 = ChatEntry.find_by(lounge_id: params[:id], seat_no: 3)
  end

end
