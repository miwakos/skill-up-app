class CreateChatEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :chat_entries do |t|
      t.references :lounge,  null: false, foreign_key: true
      t.references :user,    null: false, foreign_key: true, unique: true
      t.integer    :seat_no, null: false

      t.timestamps
    end
  end
end
