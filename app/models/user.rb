class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one  :user_information, dependent: :destroy
  has_many :chat_messages, dependent: :destroy
  has_one  :lounge, through: :chat_entry
  has_many :books, dependent: :nullify
  # フォロー関連
  has_many :user_relationships, dependent: :destroy
  has_many :followings, through: :user_relationships, source: :follower
  # フォロワー関連
  has_many :passive_user_relationships, class_name: 'UserRelationship', foreign_key: 'follower_id', dependent: :destroy
  has_many :followers, through: :passive_user_relationships, source: :user

end
