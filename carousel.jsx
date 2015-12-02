"use strict";

class Carousel extends React.Component {
  render(){
    let slides = this.props.image_urls.map(function(source, index){
      let props = {
        key: index,
        index: index,
        imgSrc: source
      }
      return <Slide {...props}/>;
    });
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          { [] }
          { slides }
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
}
Carousel.propTypes = { image_urls: React.PropTypes.array };
Carousel.defaultProps = { image_urls: [] };

class Slide extends React.Component {
  render(){
    let className = this.props.index == 0? 'item active' : 'item';
    return(
      <div className={ className }>
        <img src={ this.props.imgSrc } alt="..." width="100%"/>
      </div>
    );
  }
}

function renderCarouselatNode(images, node){
  return ReactDOM.render(
    <Carousel image_urls={ images }/>,
    document.getElementById(node)
  );
}
