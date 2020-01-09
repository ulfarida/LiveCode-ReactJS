import React, { Component } from 'react';
import Header from "../components/header"
import ListMovies from "../components/listMovies"
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Movies extends Component {

    componentDidMount = () => { 
        this.props.getNewsAxios()
    };

    render () {
        const listMovies = this.props.listMovies
        const isLoading = this.props.isLoading
        const movies = listMovies.filter(item => {
            console.warn('props category',this.props.category)
            if (item.Category === this.props.category) {
                console.warn('item category', item.Category)
                return item;
            }
            return false;
        })

        const itemMovies = movies.map((item, key) => {
            return (
                <ListMovies 
                    key={key} 
                    title={item.Title} 
                    year={item.Year} 
                    category={item.Category}
                    synopsis={item.Synopsis}
                    poster={item.Poster} />
            );
        });

        return (
            <div>
                <Header {...this.props} />
                {itemMovies}
            </div>    
        );
    }
}

export default connect("listMovies, category", actions)(Movies);