# テーブル設計

## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false               |

### Association

- has_one  :user_information, dependent: :destroy
- has_many :chat_messages, dependent: :destroy
- has_one :lounge, through: :chat_entry


## user_informations テーブル

| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| user_icon          | string     | null: false                    |
| nickname           | string     | null: false                    |
| birthday           | date       | null: false                    |
| prefecture_id      | integer    | null: false                    |
| user_introduction  | text       | null: false                    |
| user_id            | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :prefecture  <!-- Active Hash -->


## categories テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

### Association

- has_many :lounges


## lounges テーブル

| Column      | Type       | Options                        |
| ----------- | ---------- | ------------------------------ |
| category_id | references | null: false, foreign_key: true |

### Association

- belongs_to :category
- has_many :chat_messages, dependent: :destroy
- has_many :users, through: :chat_entries


## chat_entries テーブル

| Column    | Type       | Options                        |
| --------- | ---------- | ------------------------------ |
| lounge_id | references | null: false, foreign_key: true |
| user_id   | references | null: false, foreign_key: true |

### Association

- belongs_to :lounge
- belongs_to :user


## chat_messages テーブル

| Column    | Type       | Options                        |
| --------- | ---------- | ------------------------------ |
| message   | text       | null: false                    |
| lounge_id | references | null: false, foreign_key: true |
| user_id   | references | null: false, foreign_key: true |

### Association

- belongs_to :lounge
- belongs_to :user
