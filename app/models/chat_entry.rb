class ChatEntry < ApplicationRecord

  belongs_to :lounge
  belongs_to :user
  
end
