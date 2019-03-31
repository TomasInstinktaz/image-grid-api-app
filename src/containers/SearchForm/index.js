import React, { Component } from 'react';
import Loader from '../../components/Loader';
import ImagesList from '../../components/ImagesList';
import QueryDataList from '../../components/QueryDataList';

const clientId = '91a8803cad63e68b7905d1f5537952f6909ba40b106d21af0160d01b247b4883';
const endpoint = 'https://api.unsplash.com/search/photos';

class SearchForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        query: '',
        images: [],
        query_data: [],
        isFetching: false
       };

      this.trackQueryValueChange = this.trackQueryValueChange.bind(this);
      this.searchClick = this.searchClick.bind(this);
      this.saveClick = this.saveClick.bind(this);
    }

    fetchFunc() {
      this.setState({ isFetching: true });

      fetch(`${endpoint}?query=${this.state.query}&client_id=${clientId}`).then(response => {
        return response.json()
      }).then(jsonResponse => {
        console.log(jsonResponse);
        this.setState({
          images: jsonResponse.results,
          isFetching: false
        })
      })
    }

    searchClick(event) {
      event.preventDefault();
      
      this.fetchFunc();
    }

    saveClick() {
      var newArr = this.state.query_data;
      newArr.push(this.state.query);
      this.setState({query_data: newArr})
    }

    trackQueryValueChange(event) {
        this.setState({query: event.target.value});
    }

    render() {
        const {query, query_data, images, isFetching } = this.state;

        return (
                <div className="searchForm">
                  <div className="container">
                    <div className="block1">
                      <div className="row">
                          <div className="col-sm-8">
                            <input
                                className="searchForm__searchInput"
                                type="text"
                                placeholder="Search Input"
                                value={query}
                                onChange={this.trackQueryValueChange} />
                          </div>
                          <div className="col-sm-4">
                            <input
                                className="searchForm__searchBtn"
                                type="submit"
                                value="Search"
                                onClick={this.searchClick} />
                            <input
                                className="searchForm__saveBtn"
                                type="submit"
                                value="Save"
                                onClick={this.saveClick} />
                          </div>
                      </div>
                    </div>

                    <div className="block1">
                      <div className="row">
                          <div className="col-sm-8">
                            <div className="searchForm__imageGrid">
                                {
                                    !isFetching && images.length === 0 && query.trim() === ''
                                    &&
                                    <p className="text-center">Please enter images name into the input</p>
                                }
                                {
                                    !isFetching && images.length === 0 && query.trim() !== ''
                                    &&
                                    <p className="text-center">Empty Image Grid</p>
                                }
                                {
                                    isFetching && query.trim() !== '' && <Loader/>
                                }
                                {
                                    !isFetching && <ImagesList list={images}/>
                                }
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="searchForm__savedQueries">
                                <QueryDataList list={query_data} />
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
        );
    }
}

export default SearchForm;
