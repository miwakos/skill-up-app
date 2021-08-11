class Category < ApplicationRecord

  has_many :lounges
  has_many :books

end
