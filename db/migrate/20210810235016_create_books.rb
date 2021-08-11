class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.text       :book_title,        null: false
      t.string     :author,            null: false
      t.string     :published_date
      t.text       :book_introduction, null: false
      t.references :user,              null: false, foreign_key: true
      t.references :category,          null: false, foreign_key: true

      t.timestamps
    end
  end
end
