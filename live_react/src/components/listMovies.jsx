import React, { Component } from 'react';

class ListMovies extends Component {
    render () {
        return (
            <div className="container list-article home-movies">
                <div className="list-berita">                
                    <div className="list-berita-border">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <img src={this.props.poster} alt=""/>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-6">
                                <div className="news-content home-movies">
                                <h4><a href={this.props.url}>{this.props.title}</a></h4>
                                <p className="short-article">{this.props.year}</p>
                                <p className="short-article">{this.props.synopsis}</p>
                            </div>
                            </div>
                        </div>                              
                    </div>    
                </div>
            </div>
        );
    }
}

export default ListMovies;