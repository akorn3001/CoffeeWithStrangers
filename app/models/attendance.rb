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
end
