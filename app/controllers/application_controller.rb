class ApplicationController < ActionController::Base

	
	include PublicActivity::StoreController

  def after_sign_in_path_for(resource)
    new_user_registration_path
  end

end
