Rails.application.routes.draw do
  get "users/show"

  devise_for :users
  # , controllers: {
  #   session:"users/sessions",
  #   registrations: "users/registrations"
  # }

  get "rooms/index"

  resources :rooms do
    resources :messages
  end

  get "user/:id", to: "users#show", as: "user"

  root "pages#home"

  devise_scope :user do
    get "users", to: "devise/sessions#new"
  end
end
