Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  devise_for :users
  root to: 'homes#index'

  resources :homes, only: :index
  resources :user_informations, only: [:new, :create]
  resources :lounges, only: [:index, :show] do
    resources :chat_messages, only: [:create]
  end
  
end
