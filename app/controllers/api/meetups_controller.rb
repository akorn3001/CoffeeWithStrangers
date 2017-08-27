class Api::MeetupsController < ApplicationController
  def index
    @meetups = Meetup.where(city_id: params[:meetup][:city_id])
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

  end

  def unattend

  end

  private

  def meetup_params
    params.require(:meetup).permit(:date, :address, :host_id, :city_id)
  end
end