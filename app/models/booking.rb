class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  validates :user_id, :restaurant_id, :time_booked, :guest, presence: true
end
