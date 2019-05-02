 class Api::V1::AuthController < ApplicationController
 # POST /signup
  def signup
    @user = User.new(user_params)
    if @user.save
      render json: { success: true, token: Auth.generate_token(@user) }
    else
      render json: { success: false, errors: @user.errors.full_messages }
    end
  end

  def login
    user = User.find_by(email: user_params[:email])
    if user && user.authenticate(user_params[:password])
      render json: { success: true, token: Auth.generate_token(user) }
    else
      render json: { success: false }
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end