# == Schema Information
#
# Table name: attendances
#
#  id          :integer          not null, primary key
#  meetup_id   :integer          not null
#  attendee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Attendance < ApplicationRecord

  belongs_to :meetup,
    primary_key: :id,
    foreign_key: :meetup_id,
    class_name: 'Meetup'

  belongs_to :attendee,
    primary_key: :id,
    foreign_key: :attendee_id,
    class_name: 'User'

end
