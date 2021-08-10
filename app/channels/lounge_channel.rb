class LoungeChannel < ApplicationCable::Channel
  def subscribed
    # 接続
    stream_from "lounge_channel"
  end

  def unsubscribed
    # 切断
  end

  def seat(data)
    ChatEntry.create! lounge_id: data['lounge_id'].to_i, user_id: data['user_id'].to_i, seat_no: data['seat_no'].to_i
    ActionCable.server.broadcast 'lounge_channel', todo: 'seat', seat_no: data['seat_no'], user_nickname: data['user_nickname'], seat_user_icon_img: data['seat_user_icon_img']
  end

  def speak(data)
    ChatMessage.create! message: data['message'], lounge_id: data['lounge_id'].to_i, user_id: data['user_id'].to_i
  end

  def exit(data)
    chat_entry = ChatEntry.find_by(user_id: data['user_id'].to_i)
    chat_entry.destroy
    ActionCable.server.broadcast 'lounge_channel', todo: 'exit', user_nickname: data['user_nickname']
  end

end
