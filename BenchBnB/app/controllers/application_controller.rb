class ApplicationController < ActionController::Base

    helper_method :logged_in?, :current_user

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
        return @current_user if @current_user
    end

    # def ensure_logged_in
    #     redirect_to new_session_url
    # end

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

end
