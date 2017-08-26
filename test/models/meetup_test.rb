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
#  guest_id   :integer
#

require 'test_helper'

class MeetupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
