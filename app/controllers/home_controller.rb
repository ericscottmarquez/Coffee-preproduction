class HomeController < ApplicationController


  def index

  	if user_signed_in?
  		
      @teams = Team.all.order("created_at DESC")
  		
  		@projects = Project.all.order("created_at DESC")

  	else

  		render layout: false
      
  	end

  	@activities = PublicActivity::Activity.order("created_at DESC").where(owner_id: current_user, owner_type: "User")
  	
  end
end
