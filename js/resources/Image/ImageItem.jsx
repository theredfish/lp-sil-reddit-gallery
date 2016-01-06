let ImageItem = React.createClass({
	render: function() {
		return (
			<div className="img-box" tabIndex="0">
                <div className="img-content">
                    <img src={this.props.url} alt={this.props.title}/>
					<div className="img-title">{this.props.title}</div>
                </div>
			</div>
		);
	}
});
