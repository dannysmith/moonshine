# # Guardfile
notification :growl

# Rebuild the css when any SASS files are changed.
guard :sass, input: 'scss', output: 'css', style: 'expanded', all_on_start: true

# Concatinate JS using Jammit (could use for CSS too).
guard :jammit,
  :config_path => "assets.yml",
  :output_folder => "./assets",
  :package_on_start => true do
    watch %r{js/.+\.js$}
    watch 'css/main.css'
    watch 'assets.yml'
end

# Reload the browser on changes to CSS or HTML.
guard :livereload do
  watch 'index.html'
  watch %r{assets/.+\.(css|js|html)}
  watch %r{scss/.+\.(css|scss|sass)}
end
