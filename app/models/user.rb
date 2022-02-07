class User < ApplicationRecord
  has_secure_password
  has_many :bookings
  has_many :restaurants, through: :bookings

  validates :username, :email, presence: true, uniqueness: true

end
