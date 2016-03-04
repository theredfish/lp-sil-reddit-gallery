let ImageBox = React.createClass({

	loadRedditImages: function() {
		let _this = this;
		let sort =  this.props.sort;
		let url =  this.props.url;
		let limit = this.props.limit;
		let images_cached = {
			hot: [],
			top: [],
			new: [],
			controversial: []
		};

		fetch(url + sort + '.json?limit=' + limit, {
			method: 'GET',
			cache: 'force-cache'
		})
		.then(_this.checkResponseStatus)
		.then(_this.parseResponseJson)
		.then(function(data) {
			let images = data.data.children.filter(_this.filterByImage);
			images = images.filter(_this.getSafeForWork);
			images_cached[sort] = images;
            _this.setState({data: images_cached});
		}).catch(function(error) {
		    console.log('request failed', error);
		});
    },
	/**
    * Handle new sort submitted from ImageForm
    */
	handleSortSubmit: function(sort) {
		let images_cached = this.state.data;
		if (images_cached[sort].length > 0) {
			this.setState({sort: sort});
		} else {
			let _this = this;
			let url =  this.props.url;
			let limit = this.props.limit

			fetch(url + sort + '.json?limit=' + limit, {
				method: 'GET',
				cache: 'force-cache'
			})
			.then(_this.checkResponseStatus)
			.then(_this.parseResponseJson)
			.then(function(data) {
				let images = data.data.children.filter(_this.filterByImage);
                images = images.filter(_this.getSafeForWork);
				images_cached[sort] = images;
                _this.setState({data: images_cached, sort});
			}).catch(function(error) {
			    console.log('request failed', error);
			});
		}
	},
	/**
    * Check status from HTTP response and return response or HTTP error.
    *
    * "For now, unfortunate as it is, file and ftp URLs are left
    * as an exercise for the reader. When in doubt, return a network error."
    *
    * @see https://fetch.spec.whatwg.org/#basic-fetch (file and ftp parts)
    */
	checkResponseStatus: function(response) {
		if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
	    } else {
            return Promise.reject(new Error(response.statusText));
	    }
	},
	/**
    * Get JSON response from fetch request.
    */
	parseResponseJson: function(response) {
		return response.json();
	},
	/**
    * Check if the specified url match with image extension.
    * This function is used when element post_hint is typeof undefined.
    */
	isImage: function(url) {
		let ext_match = /^.*\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|bmp|BMP)$/;

		return ext_match.test(url);
	},
	/**
    * Keep image only. Item can have post_hint equals to undefined.
    * In this case, we check his extension.
    */
	filterByImage: function(item) {
		if (typeof item.data.post_hint === 'undefined') {
			return this.isImage(item.data.url);
		}

		return (item.data.post_hint === 'image');
	},
	/**
    * Remove stuff which is not safe for work
    */
	getSafeForWork: function(item) {
		return (!item.data.over_18);
	},
	/**
    * Initialize our component with an initial state
    */
	getInitialState: function() {
		return {data: {
			hot: [],
			new: [],
			top: [],
			controversial: []
		}, sort: this.props.sort};
	},
	/**
    * When our component is render we load Reddit images.
    */
	componentDidMount: function() {
        this.loadRedditImages();
    },
	/**
    * Simple render function to display our component
    */
	render: function() {
		return (
			<div className="imageBox">
				<ImageForm onSortSubmit={this.handleSortSubmit} />
				<ImageList data={this.state.data} sort={this.state.sort} />

				<footer>
					IUT Nantes ~ LP : SIL project. Reddit based gallery. <a href="mailto:julian.didier@etu.univ-nantes.fr">julian.didier@etu.univ-nantes.fr</a>
				</footer>
			</div>
		);
	}
});
