class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate_user
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    private
    
    def authenticate_user
        render json: {error: "not authorized"}, status: :unauthorized unless current_user
    end

    def current_user
        User.find_by(id: session[:user_id])
    end

    def record_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found(error)
        render json: { error: error.message }, status: :not_found
    end

end
