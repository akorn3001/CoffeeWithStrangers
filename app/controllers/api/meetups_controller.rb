class Api::MeetupsController < ApplicationController
  def index
    if params[:city_id]
      @meetups = Meetup.where(city_id: params[:city_id])
    else
      @meetups = Meetup.where(host_id: current_user.id)
      # @meetups = current_user.invitations
    end

    render "api/meetups/index"
  end

  def create
    @meetup = Meetup.new(meetup_params)
    if @meetup.save
      render "api/meetups/show"
    else
      render json: @meetup.errors.full_messages, status: 422
    end
  end

  def show
    @meetup = Meetup.find(params[:id])
    if @meetup
      render "api/meetups/show"
    else
      render json: ["Meetup does not exist"], status: 404
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

  def unattend
    @attendance = Attendance.find_by(meetup_id: params[:id], attendee_id: current_user.id)
    if @attendance
      Attendance.destroy(@attendance.id)
      render "api/meetups/show"
    else
      render json: @attendance.errors.full_messages, status: 422
    end
  end

  private

  def meetup_params
    params.require(:meetup).permit(:date, :address, :host_id, :city_id, :guests)
  end
end
