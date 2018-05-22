Rails.application.routes.draw do
  resources :users do
    member do 
      get :posts
      get :relationships
      get :post_feed
    end
  end
  resources :posts
  resources :relationships

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
