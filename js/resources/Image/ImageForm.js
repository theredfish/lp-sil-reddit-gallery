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
          <form className="ImageForm" onSubmit={this.handleSubmit}>
            <input type="text" name="keywords" placeholder="Search reddit picture" />

            <select name="picture-type" id="SelectPictureType" onChange={this.handleSortChange}>
              <option value="hot">Hot</option>
              <option value="top">Top</option>
              <option value="new">New</option>
              <option value="controversial">Controversial</option>
            </select>

            <button type="submit" className="btn btn-blue">Go!</button>
        	</form>
        </nav>
      </header>
    );
  }
});
