class ChatEntry < ApplicationRecord

  belongs_to :lounge
  belongs_to :user
  
  validates :seat_no, presence: true, uniqueness: { scope: :lounge_id }
  validates :user, uniqueness: true
end
