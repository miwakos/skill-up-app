# アプリ名
## 『Skill Up アップ！』
<br>
<br>

# 概要
### 資格試験などに挑戦する大人のための、学習意欲継続アプリ。
### 同じ目標を持ったユーザーが、チームで学習している空間を味わえる。
<br>

### <u>このアプリでできること</u>
- #### 学習状況管理（時間等）
- #### 定期アウトプットとその共有
- #### 参考書籍投稿とその共有
- #### 他ユーザーと同じ空間での学習
- #### 他ユーザーとのリアルタイムチャット
<br>
<br>

# 本番環境
### https://skill-up-app-36089.herokuapp.com/
<br>

### <u>BASIC認証情報</u>
- #### ID：admin
- #### Pass：36089 
### <u>ログイン情報（テスト用）</u>
##### ※チャット用に2アカウント公開
#### アカウント1
- #### Email：testa@tast.com
- #### Pass：test123
#### アカウント2
- #### Email：testb@tast.com
- #### Pass：test123
<br>

# 制作背景
プログラミングスクールでチーム学習を体験し、チームメンバーの存在が学習意欲継続に繋がったと実感。<br>
「同じ目標を持っている」「本気で目指している」人々が出逢い、「一緒に頑張っている」「競い合える」を体験できる場を作りたいという想いから、作成に至った。
<br>
<br>

# 工夫した点
- 背景を学校の構内をイメージして設定した点
- チャット機能で、敢えてアイコン（アバター）を利用することで、交流のハードルを下げた点
<br>
<br>

# 使用技術（開発環境）

### バックエンド
Ruby, Ruby on Rails

### フロントエンド
eRuby, CSS, SCSS, JavaScript, JQuery

### データベース
MySQL, SequelPro
<br>
<br>

# テーブル設計

## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false               |

### Association

- has_one  :user_information, dependent: :destroy
- has_many :chat_messages, dependent: :destroy
- has_one  :lounge, through: :chat_entry
- has_many :books, dependent: :nullify


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
- has_many :books


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
| seat_no   | integer    | null: false                    |

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

## books テーブル

| Column            | Type       | Options                        |
| ----------------- | ---------- | ------------------------------ |
| book_title        | text       | null: false                    |
| author            | string     | null: false                    |
| published_date    | string     |                                |
| book_introduction | text       | null: false                    |
| user_id           | references | null: false, foreign_key: true |
| category_id       | references | null: false, foreign_key: true |

### Association

- belongs_to :category
- belongs_to :user, optional: true
