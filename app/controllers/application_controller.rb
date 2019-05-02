class ApplicationController < ActionController::API

  def fallback_index_html
    render :file => 'public/index.html'
  end

  def user_signed_in?
    !!current_user
  end

  def current_user
    Auth.get_user_from_token(request.headers)
  end
end
