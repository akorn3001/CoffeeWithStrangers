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
  validates :date, :time, :address, :city, :host, :host_city, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: 'User'

  has_many :attendances,
    primary_key: :id,
    foreign_key: :meetup_id,
    class_name: 'Attendance'

  has_one :host_city,
    through: :host,
    source: :city

end
