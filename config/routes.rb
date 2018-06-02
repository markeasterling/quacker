Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :users do
    member do 
      get :posts
      get :relationships
      get :post_feed
      get :feed_users
    end
  end
  resources :posts
  resources :relationships

  post 'user_token' => 'user_token#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
