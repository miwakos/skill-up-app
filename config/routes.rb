Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  devise_for :users
  root to: 'homes#index'

  resources :homes, only: :index
  resources :user_informations, only: [:new, :create]
  resources :lounges, only: [:index, :show, :destroy] do
    resources :chat_messages, only: [:create]
  end
  resources :books, only: [:index, :show, :new, :create, :edit, :destroy] do
    collection do
      get 'search'
      get 'external_search'
    end
  end
  
end
