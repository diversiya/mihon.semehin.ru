var CurrentBlogPost = React.createClass({

	render: function(){
		//post = all_posts[all_posts.length-this.props.post_number]
		post_id = window.location.search.substr(1);
		all_posts.map(function(post){
			if(post['id'] == post_id){
				current_post = post
			}
		});

		var raw_content = marked(current_post['content'].toString(), {sanitize: true});
		return(
			<div className = 'post'>
				<h2>{current_post['title']}</h2>
				<div className = 'content' dangerouslySetInnerHTML={{__html: raw_content}}></div>
			</div>
		);
	}
});

React.render(<CurrentBlogPost></CurrentBlogPost>, document.getElementById('contents'));