class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one  :user_information, dependent: :destroy
  has_many :chat_messages, dependent: :destroy
  has_one  :lounge, through: :chat_entry
  has_many :books, dependent: :nullify

end
