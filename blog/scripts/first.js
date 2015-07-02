var BlogPost = React.createClass({

	render: function(){
		post = all_posts[all_posts.length-this.props.post_number]
		var raw_content = marked(post['content'].toString(), {sanitize: true});
		return(
			<div className = 'post'>
				<h2>
					<a href={"post.html?"+post['id']}>{post['title']}</a>
				</h2>
				<div className = 'content' dangerouslySetInnerHTML={{__html: raw_content}}></div>
			</div>
		);
	}
});


var PrevButton = React.createClass({
 	render: function(){
 		return(
 			<div className = 'left-arrow'>&larr; <a href='#' onClick={this.props.cur_post_number}>предыдущий пост</a></div>
 		);
 	}
});

var NextButton = React.createClass({
 	render: function(){
 		return(
 			<div className = 'right-arrow'><a href='#' onClick={this.props.cur_post_number}>следующий пост</a> &rarr;</div>
 		);
 	}
});

var Parent = React.createClass({
	
	getInitialState: function(){
		return {
			post_number: 1
		}
	},

	increasePostPosition: function(e){
		e.preventDefault()
		this.state.post_number = this.state.post_number + 1
		this.forceUpdate();
	},

	decreasePostPosition: function(e){
		e.preventDefault()
		if((this.state.post_number - 1) > 0){
			this.state.post_number = this.state.post_number - 1
			this.forceUpdate();
		}

	},

	render: function(){
		this.changeNextPostPosition
		return(
			<div>
				<BlogPost post_number={this.state.post_number} />
				<div id="controls">
					<PrevButton cur_post_number={this.increasePostPosition}/>
					<NextButton cur_post_number={this.decreasePostPosition}/>
				</div>
			</div>
		);
	}
});


React.render(<Parent></Parent>, document.getElementById('contents'));
