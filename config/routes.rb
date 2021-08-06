Rails.application.routes.draw do
  devise_for :users
  root to: 'homes#index'

  resources :homes, only: :index
  resources :user_informations, only: [:new, :create]
  
end
