import React, { useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect } from "react";

const News =(props)=> {
  let capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [articles, setarticles] = useState([])
  const [totalarticles, settotalArticles] = useState(0)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(12)

 const updateNews = async() => {
    props.setProgress(30)
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(50)
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalArticles(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
    // console.log(parsedData)
  }
  useEffect(() => {    
    document.title=`${capitalizeFirstLetter(props.category)}-Newsmonkey`
    updateNews();
    // eslint-disable-next-line
  }, [])
 const fetchData= async()=>{
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${pageSize}`;
    setPageSize(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalArticles(parsedData.totalResults)

 }


  // const omponentDidMount = async() => {
    // console.log('componentDidMount');
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=92ebaa45a3b24dc2b8893a0fdd161fe4&page=${this.state.page}&pageSize=${this.state.pageSize}`
    // this.setState({loading:true})
    // let data= await fetch(url);
    // let parsedData = await data.json()
    // this.setState({articles: parsedData.articles,loading:false,totalArticles:parsedData.totalResults})
    //   console.log(parsedData)
    // updateNews();
  // }
  // prevPage = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=92ebaa45a3b24dc2b8893a0fdd161fe4&page=${this.state.page-1}&pageSize=${this.state.pageSize}`
  //   // this.setState({loading:true})
  //   // let data= await fetch(url);
  //   // let parsedData = await data.json()
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  // nextPage = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=92ebaa45a3b24dc2b8893a0fdd161fe4&page=${this.state.page+1}&pageSize=${this.state.pageSize}`
  //   // this.setState({loading:true})
  //   // let data= await fetch(url);
  //   // let parsedData = await data.json()

  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

    return (
      <div>
       
          <h1 className="text-center">Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          {loading && <Loading/>}
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchData}
            hasMore={articles.length!==totalarticles}
            loader= {<p className="text-center"><Loading/></p> }
            endMessage={
              <p style={{ textAlign: 'center', color:'grey'}}>
                You have reached the end
              </p>
            }
            >
              <div className="container">
          <div className="row">
         <div className="text-center">
              {/* {this.state.loading && <Loading />} */}
            </div>
            { articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      img={element.urlToImage}
                      readMore={element.url}
                      description={element.description}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
                        </div>
                        </div>

              </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
              <button
                className="btn btn-dark"
                disabled={this.state.page <= 1}
                onClick={this.prevPage}
              >
                &larr; Previous
              </button>
              <button
                className="btn btn-dark"
                disabled={
                  this.state.page >=
                  this.state.totalArticles / this.state.pageSize
                }
                onClick={this.nextPage}
              >
                Next &rarr;
              </button>
            </div> */}
        </div>
    );
  }
News.propTypes = {
  category: PropTypes.string,
};
News.defaultProps = {
  category: "general",
};
export default News