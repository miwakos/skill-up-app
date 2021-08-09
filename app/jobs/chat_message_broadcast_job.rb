class ChatMessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    # ブロードキャスト処理の定義
    ActionCable.server.broadcast 'lounge_channel', message: render_message(message)
  end

  private

  def render_message(message)
    # 部分テンプレートを呼び出す
    ApplicationController.renderer.render(partial: 'lounges/message', locals: { message: message })
  end

end
