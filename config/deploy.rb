# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'blog'
set :repo_url, 'https://github.com/diversiya/mihon.semehin.ru.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/home/mihon/mihon.semehin.ru'

set :keep_releases, 3
