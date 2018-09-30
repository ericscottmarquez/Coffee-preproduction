class ApplicationMailer < ActionMailer::Base
  default from: 'admin@coffeecrm.io'
  layout 'mailer'
    include Devise::Controllers::UrlHelpers 
  default template_path: 'devise/mailer' 
end


