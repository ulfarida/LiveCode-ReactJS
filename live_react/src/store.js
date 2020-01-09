import createStore from 'unistore';
import axios from 'axios'

const initialState = { 
                username : 'Awesome Alta',
                password : '',
                email : '',
                avatar : 'https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024',
                token : '',
                auth : false,
                listMovies : [],
                isLoading : true,
                category : ''
                };

export const store = createStore(initialState);

export const actions = store => ({

    getNewsAxios : (state) => {
        const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";
        axios
            .get(baseUrl)
            .then(function(response) {
                store.setState({ listMovies: response.data.movies, isLoading: false})
            })
            .catch(function(error) {
                store.setState({ isLoading: false })
            })
    }
    
})