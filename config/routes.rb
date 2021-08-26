Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  devise_for :users
  root to: 'homes#index'

  resources :homes, only: :index
  resources :users, only: :show
  resources :user_informations, only: [:new, :create]
  resources :user_relationships, only: [:create, :destroy]
  resources :lounges, only: [:index, :show, :destroy] do
    resources :chat_messages, only: [:create]
  end
  resources :books do
    collection do
      get 'search'
      get 'external_search'
    end
  end
  
end
