puts user.city_id
json.extract! user, :id, :username, :email, :city_id, :host_status, :attended_meetup_ids, :description, :background, :topics, :tagline
json.image_url asset_path(user.image.url)

# json.meetups do
#   json.array! user.invitations, partial: 'api/meetups/meetup.json.jbuilder', as: :meetup
# end


# @meetups = @user.attended_meetups
