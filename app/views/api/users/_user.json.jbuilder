json.extract! user, :id, :username, :email, :city_id, :host_status, :attended_meetup_ids, :user_bio

# json.meetups do
#   json.array! user.invitations, partial: 'api/meetups/meetup.json.jbuilder', as: :meetup
# end


# @meetups = @user.attended_meetups
