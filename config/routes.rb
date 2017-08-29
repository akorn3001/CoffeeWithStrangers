Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]

    resources :meetups do
      post :attend, :on => :member
      delete :unattend, :on => :member
    end

    resources :cities, only: [:index, :show] do
      resources :meetups, only: [:show, :index]
    end
  end
end
