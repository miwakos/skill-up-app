class CreateUserInformations < ActiveRecord::Migration[6.0]
  def change
    create_table :user_informations do |t|
      t.string     :user_icon,         null: false
      t.string     :nickname,          null: false
      t.date       :birthday,          null: false
      t.integer    :prefecture_id,     null: false
      t.text       :user_introduction, null: false
      t.references :user,              null: false, foreign_key: true

      t.timestamps
    end
  end
end
