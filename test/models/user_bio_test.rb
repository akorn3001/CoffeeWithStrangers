# == Schema Information
#
# Table name: user_bios
#
#  id          :integer          not null, primary key
#  description :text             not null
#  background  :text             not null
#  topics      :text             not null
#  tagline     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#

require 'test_helper'

class UserBioTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
