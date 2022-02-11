class BookingSerializer < ActiveModel::Serializer
  attributes :id, :day_booked, :time_booked, :guest
  # attributes :id, :guest
 
  has_one :user
  has_one :restaurant
end
