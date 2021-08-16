class Book < ApplicationRecord

  belongs_to :category
  belongs_to :user, optional: true
  has_one_attached :image

  with_options presence: true do
    validates :book_title
    validates :author
    validates :book_introduction
  end

end
