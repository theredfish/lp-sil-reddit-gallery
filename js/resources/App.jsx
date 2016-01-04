/**
 * Main React component.
 * Default sort is "hot".
 */
ReactDOM.render(
   <ImageBox url='https://www.reddit.com/r/Pics/' sort='hot' limit='100' />,
   document.getElementById('BodyRedditGallery')
);
