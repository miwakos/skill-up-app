# テーブル設計

## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false               |

### Association

- has_one  :user_information
- has_many :

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
- has_one :