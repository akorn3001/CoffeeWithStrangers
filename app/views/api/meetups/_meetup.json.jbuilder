json.extract! meetup, :id, :date, :address, :host_id, :city_id
json.host_name meetup.host.username

# json.host do
#   json.name meetup.host.username
#   json.email meetup.host.email
# end
