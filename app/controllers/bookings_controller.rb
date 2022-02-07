class BookingsController < ApplicationController

    def index
        render json: current_user.bookings.all
    end

    def create
        booking = current_user.bookings.create!(booking_params)
        render json: booking, status: :created
    end

    def update
        booking = find_booking
        booking.update!(booking_params)
        render json: booking, status: :ok
    end

    def destroy
        booking = find_booking
        booking.destroy
        head :no_content
    end

    private

    def find_booking
        Booking.find(params[:id])
    end

    def booking_params
        params.permit(:user_id, :restaurant_id, :day_booked, :time_booked, :guest)
    end

end
