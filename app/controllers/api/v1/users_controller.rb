class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_user!

  # GET /users
  def index
    @users = User.all.limit(10)
    # this is a comment
    render json: { success: true, users: @users}
  end

  # GET /users/1
  def show
    render json: @user
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def authorize_user!
      if !user_signed_in?
        render json: { success: false, errors: 'You dont have access to view' }
      end
    end

    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :email, :password_digest)
    end
end
