import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './loading';
import PropTypes from 'prop-types'


export default class News extends Component {
    articles = []
    defaultUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Z2vkbGfwcIqMmmMvZJGqmVOkmTU6_5np1A&usqp=CAU";

    static defaultProps = {
        pgSize: 12,
        category: 'general',
        country: 'us'
    }

    static propTypes = {
        pgSize: PropTypes.number,
        category: PropTypes.string,
        country: PropTypes.string
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            totalResults: [],
            loading: false
        }
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e636d63b30d4472bd2e60b97fab8669&page=${this.state.page}&pageSize=${this.props.pgSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        await this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        console.log(this.state.articles)
        
    }

    async componentDidMount() {
        await this.updateNews()

    }

    handlePrevClick = async () => {
        await this.setState({
            page: this.state.page - 1
        })
        this.updateNews()
    }

    handleNextClick = async () => {
        await this.setState({
            page: this.state.page + 1
        })
        this.updateNews()
    }

    render() {
        return (
            <>
                <div className="container my-5">
                    <h1 className='text-center my-4'>OnlyFacts - Headlines</h1>
                    {this.state.loading && <Loading />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} desc={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage ? element.urlToImage : this.defaultUrl} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between my-4">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-light" onClick={this.handlePrevClick}><b>&larr; Previous</b></button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pgSize)} type="button" className="btn btn-light" onClick={this.handleNextClick}><b>Next &rarr;</b></button>
                    </div>
                </div>
            </>
        )
    }
}