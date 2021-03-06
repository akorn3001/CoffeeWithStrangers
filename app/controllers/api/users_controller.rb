class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render "api/users/index"
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      @meetups = @user.attended_meetups
      render "api/users/show"
    else
      render json: ["User does not exist"], status: 404
    end
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def attend
    @attendance = Attendance.new(meetup_id: params[:id], attendee_id: current_user.id)
    if @attendance.save
      @meetup = @attendance.meetup
      render "/api/meetups/show"
    else
      render json: @attendance.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user)
    .permit(:username, :email, :password, :city_id, :host_status, :description, :background, :topics, :tagline, :image)
  end
end
