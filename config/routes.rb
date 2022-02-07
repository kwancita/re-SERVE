Rails.application.routes.draw do
 
  resources :bookings, except: [:show]
  resources :restaurants, only: [:index, :show]
  resources :users, only: [:update, :delete]

  post '/signup', to: "users#create"
  get '/me', to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  #custom routes

end
