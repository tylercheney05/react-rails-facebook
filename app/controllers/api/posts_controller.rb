class Api::PostsController < ApplicationController
  before_action :set_profile
  before_action : set_post, execpt: [:index, :create]

  def index
    render json: @profile.posts 
  end

  def show
    render json: @post
  end

  def create
    @post = @profile.posts.new(post_params)
    if @post.save
      render json: @post 
    else
      render json: { errors: @post.errors },
      status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post 
    else
      render json: { errors: @post.errors }, 
      status: :unprocessable_entity
    end 
  end

  def destroy
    @post.destroy
    render json: { message: 'Post Deleted'}
  end

  private
    def post_params
      params.require(:post).permit(:title, :body)
    end

    def set_profile
      @profile = Profile.find(params[:profile_id])
    end

    def set_post
      @post = @blog.posts.find(params[:id])
    end
end
