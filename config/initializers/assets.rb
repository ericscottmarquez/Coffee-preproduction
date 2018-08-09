# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )

Rails.application.config.assets.precompile += %w( bootstrap.min.css demo.css font-awesome.min.css
magnific-popup.css set1.css set2.css simple-line-icons.css style.css swiper.min.css themify-icons.css 
bootstrap.js bootstrap.min.js jquery-3.2.1.min.js 
jquery.magnific-popup.js popper.min.js swiper.min.js style.scss style.css.map header.js header.scss emailsignup.js emailsignup.css)











