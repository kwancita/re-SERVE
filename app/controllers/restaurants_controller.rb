class RestaurantsController < ApplicationController
    skip_before_action :authenticate_user

    def index
        render json: Restaurant.all
    end

    def show 
        render json: Restaurant.find(params[:id])
    end

end
