let ImageForm = React.createClass({
  render: function() {
    return (
      <header>
        <nav>
          <form className="ImageForm">
            <input type="text" name="keywords" placeholder="Search reddit picture" />

            <select name="picture-type" id="SelectPictureType">
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
