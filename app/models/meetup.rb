# == Schema Information
#
# Table name: meetups
#
#  id         :integer          not null, primary key
#  date       :date             not null
#  time       :time             not null
#  address    :string           not null
#  city_id    :integer          not null
#  host_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Meetup < ApplicationRecord
end
