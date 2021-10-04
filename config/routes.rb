Rails.application.routes.draw do
  
  resources :gardens do
    resources :plants, only: :create 
  end

  resources :plants, only: :destroy do 
    resources :plant_tags, only: [:new, :create]
  end
  # get '/plants/:plant_id/new', to: 'plant_tags#new'
  # post '/plants/:plant_id/plant_tags', to: 'plant_tags#create'

  #delete '/plants/:id', to: 'plants#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
