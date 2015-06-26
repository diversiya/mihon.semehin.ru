require 'sqlite3'
require 'json'

db = SQLite3::Database.new 'production.db'

full_db_content = ''
db.execute 'select * from posts' do |post|
	post_data = {} 
	post_data[:id] = post[0]
	post_data[:content] = post[1]
	post_data[:title] = post[2]
	post_data[:created_at] = post[5]
	full_db_content += post_data.to_json+", \n\r"
end

File.write('/home/mihon/projects/react_test/db.txt', full_db_content)