import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                            {source}
                        </span>
                    </div>

                    <img src={imageUrl ? imageUrl : "https://www.hindustantimes.com/ht-img/img/2023/06/07/1600x900/US-SMOKE-FROM-CANADIAN-WILDFIRES-BLOWS-SOUTH-CREATING-HAZY-CONDI-28_1686119845800_1686119880032.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
