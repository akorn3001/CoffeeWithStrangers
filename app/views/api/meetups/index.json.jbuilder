@meetups.each do |meetup|
  json.set! meetup.id do
    json.partial! 'meetup', meetup: meetup
  end
end
