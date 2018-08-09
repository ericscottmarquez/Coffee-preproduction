class EbookMailer < ApplicationMailer


	def welcome_email(ebook_list)
		@ebook_list = ebook_list
		mail(to: @ebook_list.email, subject: 'testing help me pls')
	end
	
end
