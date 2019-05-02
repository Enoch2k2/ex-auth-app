Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :users, except: [:create]
      post '/signup', to: 'auth#signup'
      post '/login', to: 'auth#login'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
