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

class UserBio < ApplicationRecord
  validates :description, :background, :topics, :tagline, :user_id, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

    
end
