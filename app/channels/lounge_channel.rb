class LoungeChannel < ApplicationCable::Channel
  def subscribed
    # 接続
    stream_from "lounge_channel"
  end

  def unsubscribed
    # 切断
  end

  def speak(data)
    ChatMessage.create! message: data['message'], lounge_id: data['lounge_id'].to_i, user_id: data['user_id'].to_i
  end
end
