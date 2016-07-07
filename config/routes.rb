Rails.application.routes.draw do
  root 'recipes#index'
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" } do 
    resources :comments
    resources :recipes
  end
  
  post '/rate' => 'rater#create', :as => 'rate'
  resources :recipes do
    resources :ingredients
    resources :comments
  end
  resources :comments, only: [:index]
  resources :ingredients, only: [:index, :new]
end