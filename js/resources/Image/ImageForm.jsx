let ImageForm = React.createClass({

  getInitialState: function() {
    return {sort: 'hot'};
  },
  handleSortChange: function(event) {
    this.setState({sort: event.target.value});
  },
  handleSubmit: function(event) {
    event.preventDefault();

    let sort = this.state.sort;

    if (!sort) {
      return;
    }

    this.props.onSortSubmit(sort);
  },
  render: function() {
    return (
      <header>
        <nav>
          <form action="#" className="imageForm" id="FormRedditGallery" onSubmit={this.handleSubmit}>

            <label id="FormLabelInformation">Trier par type et taille : </label>
            <div className="select flat-select">
              <select name="picture-type" id="SelectPictureType" onChange={this.handleSortChange}>
                <option value="hot">Hot</option>
                <option value="top">Top</option>
                <option value="new">New</option>
                <option value="controversial">Controversial</option>
              </select>
            </div>

            <div className="select flat-select">
              <select name="picture-size" id="SelectPictureSize">
                <option value="350">350px</option>
    						<option value="500">500px</option>
    						<option value="600">600px</option>
    						<option value="700">700px</option>
              </select>
            </div>

            <button type="submit" className="btn btn-blue">Go!</button>
        	</form>
        </nav>
      </header>
    );
  }
});
