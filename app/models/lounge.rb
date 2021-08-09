class Lounge < ApplicationRecord

  belongs_to :category
  has_many :chat_messages, dependent: :destroy
  has_many :users, through: :chat_entries
  
end
