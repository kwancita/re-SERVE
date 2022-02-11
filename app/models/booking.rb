class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  # validates :date_booked format: { with: '%m/%d/%Y' }
  # validates :time_booked format: { with: '%H:%M' }
  validates :user_id, :restaurant_id, :time_booked, :guest, presence: true
  # validates :user_id, :restaurant_id, :guest, presence: true
end
