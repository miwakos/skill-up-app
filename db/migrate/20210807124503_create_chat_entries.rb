class CreateChatEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :chat_entries do |t|
      t.references :lounge, null: false, foreign_key: true
      t.references :user,   null: false, foreign_key: true

      t.timestamps
    end
  end
end
