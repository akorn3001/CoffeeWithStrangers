json.partial! "api/users/user", user: @user

json.meetups do
  json.array! @user.invitations, partial: 'api/meetups/meetup', as: :meetup
end
