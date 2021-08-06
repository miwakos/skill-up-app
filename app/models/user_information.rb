class UserInformation < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  belongs_to :user
  belongs_to :prefecture

  with_options presence: true do
    validates :user_icon
    validates :nickname
    validates :prefecture_id, numericality: { other_than: 0, message: 'を入力してください' }
    validates :user_introduction
  end

end
