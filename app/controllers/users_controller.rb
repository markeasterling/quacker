class UsersController < ApplicationController
  before_action :authenticate_user
  before_action :set_user, only: [:show, :update, :destroy]
  wrap_parameters :user, include: [:name, :email, :password, :password_confirmation]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # GET /users/1/posts
  def posts
     @user = User.find(params[:id])
     render json: @user.posts
  end

  # GET /user/current -- current authenticated user
  def current
    render json: current_user
  end

  # GET /users/1/post_feed -- for logged in user's feed
  def post_feed
    @user = User.find(params[:id])
    @following = @user.following.ids
    @posts = Post.where("user_id = ? OR user_id IN (?)", :id, @following).order(created_at: :desc)
    render json: @posts
  end

  def feed_users
    @user = User.find(params[:id])
    @following = @user.following
    render json: @following
  end

  # GET /users/1/relationships
  def relationships
     @user = User.find(params[:id])
     render :json => {:following => @user.following, :followed_users => @user.followers }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :email, :password_digest, :password, :password_confirmation)
    end
end
