var Carousel = React.createClass({
  displayName: 'Carousel',
  render: function() {
    var slides = [];
    var indicators = [];
    var i = 0;

    this.props.data.forEach( function(x) {
      if(i == 0) {
        slides.push( <Slide key={i} imgSrc={x} c="item active" /> );
      }
      else{
        slides.push( <Slide key={i} imgSrc={x} c="item" /> );
      }
      i = i + 1;
    });
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            {indicators}
            {slides}
          </div>
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
    );
  }
});

var Slide = React.createClass({
  displayName: 'slide',
  render: function() {
    return (
      <div className={this.props.c}>
        <img src={this.props.imgSrc} alt="..." width="100%"/>
      </div>
    );
  }
});

ReactDOM.render(
  <Carousel data={images} />,
  document.getElementById('slides')
);
