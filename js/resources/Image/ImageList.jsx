let ImageList = React.createClass({
	render: function() {
		let imageNodes = this.props.data[this.props.sort].map(function(image) {
			return (
				<ImageItem url={image.data.url} title={image.data.title} key={image.data.id} />
			);
		});

		return (
			<section id="gallery">
				<div className="imageList">
					{imageNodes}
				</div>
			</section>
		);
	}
});
