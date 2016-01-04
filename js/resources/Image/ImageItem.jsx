let ImageItem = React.createClass({
	render: function() {
		return (
			<div className="img-box" contentEditable="true">
                <div className="img-content">
                    <img src={this.props.url} alt={this.props.title} contentEditable="false" />
					<div className="img-title" contentEditable="false">{this.props.title}</div>
                </div>
			</div>
		);
	}
});
