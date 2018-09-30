class EbookListController < ApplicationController

  def create

  	@ebook_list = ebook_list.new(params[:ebook_list])

  	respond_to do |format|
  		if @ebook_list.save
  			Ebook_ListMailer.with(ebook_list: @ebook_list).welcome_email.deliver_now

  			format.html { redirect_to(:index, flash: "THANKS FOR SIGNING UP!")}
  		end
  	end
  end

end