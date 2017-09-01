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
  validate :date_cannot_be_in_the_past

  def date_cannot_be_in_the_past
    if date.present? && date < Date.today
      errors.add(:date, "cannot be in the past")
    end
  end

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: 'User'

  has_many :attendances,
    primary_key: :id,
    foreign_key: :meetup_id,
    class_name: 'Attendance'

  has_many :guests,
    through: :attendances,
    source: :attendee

  # has_one :city,
  #   through: :host,
  #   source: :city

end
