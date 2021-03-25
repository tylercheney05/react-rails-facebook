Rails.application.routes.draw do

  namespace :api do
    resources :profiles do
      resources :posts
    end
  end

  # resources :posts do
  #   resources :comments
  # end

end
