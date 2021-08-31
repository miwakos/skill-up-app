# アプリ名
### 『Skill Up アップ！』
<br>
<br>

# 概要
### 資格試験などに挑戦する大人のための、学習意欲継続アプリ。
### 同じ目標を持ったユーザーが、仲間と学習している空間を味わえる。
<br>

### <u>このアプリでできること</u>
- ### 学習室 （実装予定）
  他ユーザーと同じ空間での学習
- ### 談話室
  他ユーザーとのリアルタイムチャット  
- ### アウトプット（実装予定）
  学びのアウトプット投稿と、他者のアウトプット参照
- ### イベント掲示板（実装予定）
  予定を合わせた勉強会や交流会の投稿
- ### 図書館
  参考書籍投稿と、他者の投稿参照
- ### マイページ（実装予定）
  学習状況管理、交流状況管理、各種設定管理
<br>

※初めてこのサイトに訪れた方に雰囲気を感じていただくため、トップページ・アウトプット画面・図書館画面は、ログインをしていない方でも遷移することができます。
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
- #### Email：testa@test.com
- #### Pass：test123
#### アカウント2
- #### Email：testb@test.com
- #### Pass：test123
<br>
<br>

# 要件定義
### https://docs.google.com/spreadsheets/d/1uDQGB18DkNTCSHGGJmHoyBzwLlUnzuyK62FTgUeTbn8/edit#gid=675956806
<br>
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
<!-- フォロー -->
- has_many :user_relationships, dependent: :destroy
- has_many :followings, through: :user_relationships, source: :follower
<!-- フォロワー -->
- has_many :passive_user_relationships, class_name: 'UserRelationship', foreign_key: 'follower_id', dependent: :destroy
- has_many :followers, through: :passive_user_relationships, source: :user


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


## user_relationships テーブル

| Column      | Type       | Options                                        |
| ----------- | ---------- | ---------------------------------------------- |
| user_id     | references | null: false, foreign_key: true                 |
| follower_id | references | null: false, foreign_key: { to_table: :users } |

### Association
- belongs_to :user
- belongs_to :follower, class_name: 'User'


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
