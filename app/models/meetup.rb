# == Schema Information
#
# Table name: meetups
#
#  id         :integer          not null, primary key
#  date       :datetime         not null
#  address    :string           not null
#  city_id    :integer          not null
#  host_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Meetup < ApplicationRecord
  validates :date, :address, :host, :city_id, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: 'User'

  has_many :attendees,
    primary_key: :id,
    foreign_key: :meetup_id,
    class_name: 'Attendance'

  has_many :guests,
    through: :attendees,
    source: :attendee

  # has_one :city,
  #   through: :host,
  #   source: :city

end
