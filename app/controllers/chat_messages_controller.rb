class ChatMessagesController < ApplicationController

  def create
    ChatMessage.create(chat_message_params)
  end

  private

  def chat_message_params
    params.require(:chat_messages).permit(:message).merge(lounge_id: params[:lounge_id], user_id: current_user.id)
  end
  
end
