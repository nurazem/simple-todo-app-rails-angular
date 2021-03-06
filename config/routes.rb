TodoApp::Application.routes.draw do
  devise_for :users

  scope :api, defaults: {format: :json} do
    resources :task_lists, only: [:index, :create, :show] do
      resources :tasks, only: [:index, :create, :update, :destroy]
    end
  end

  root to: "home#index"

  get '/dashboard' => 'templates#index'
  get '/task_lists/:id' => 'templates#index'
  get '/templates/:path.html' => 'templates#template', constraints: {path: /.+/}
end
