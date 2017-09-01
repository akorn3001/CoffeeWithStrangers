# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  city_id         :integer
#  host_status     :string           default("false")
#  description     :text
#  background      :text
#  topics          :text
#  tagline         :string
#  img_url         :text
#

class User < ApplicationRecord
  HOST_STATUS_STATES = %w(false true pending).freeze

  validates :username, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :host_status, inclusion: HOST_STATUS_STATES

  attr_reader :password

  has_many :hosted_meetups,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: 'Meetup'

  has_many :attended_meetups,
    primary_key: :id,
    foreign_key: :attendee_id,
    class_name: 'Attendance'

  has_many :invitations,
    through: :attended_meetups,
    source: :meetup

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    end

    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
