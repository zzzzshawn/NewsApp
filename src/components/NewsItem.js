import React, { Component } from 'react'


export class NewsItem extends Component {
  d =new Date(this.props.date);

  render() {
    // let{title, desc, imgUrl,newsUrl}= this.props;
    return (
      <>
        <div className="card mb-3 my-3" data-bs-theme="dark">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left: '82%',width:'10rem'}}>
          {this.props.source}
        </span>
          <img src={this.props.imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.desc}... </p>
            <p className="card-text">By {this.props.author?this.props.author:'Unknown'} </p>
            <p className="card-text">{this.d.toGMTString() }</p>
            <p className="card-text"><small className="text-body-secondary"><a href={this.props.newsUrl} target="_blank" rel='noreferrer'><b>Read more</b> </a></small></p>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem; 