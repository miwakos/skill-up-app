class ChatMessage < ApplicationRecord
  # ActionCableç”¨
  after_create_commit { ChatMessageBroadcastJob.perform_later self }

  belongs_to :lounge
  belongs_to :user

  with_options presence: true do
    validates :message
  end
  
end
