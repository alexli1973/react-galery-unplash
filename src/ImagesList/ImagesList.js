import React, {Component} from 'react';
import ApiService from '../services/ApiService'
import Image from "../Image/Image";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";

export default class ImagesList extends Component {

    apiService = new ApiService();

    // state = {
    //     name: '',
    //     id: '',
    //     width: null,
    //     height: null,
    //     color: '',
    //     alt_description: null,
    //     urls: {
    //         raw: '',
    //         full: '',
    //         regular: '',
    //         small: '',
    //         thumb: '',
    //     },
    //     categories: [],
    //     likes: null
    // };
    state = {
        imagesList: null,
        page: 1,
        imagesPerPage: 9,
        imagesTotal: null,
        totalPages: null
    };

    props = {
        page: this.state.page
    };

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.updateImages();
    }

    updateImages() {
        // const { page } = this.props;
        this.apiService.
        getResource(this.state.page, this.state.imagesPerPage)
            .then((res) => {
                const imagesTotal = res.headers['x-total'];
                debugger;
                this.setState({
                    imagesList: res.data,
                    imagesTotal: imagesTotal,
                    totalPages: Math.ceil(imagesTotal/this.state.imagesPerPage)
                });
            });
        debugger;
    }

    // componentDidUpdate(prevState) {
    //     debugger;
    //     if(this.state.page !== prevState.page) {
    //         this.updateImages();
    //     }
    // }

    onPageChanged = data=> {
        this.setState({page: Number(data)});
        this.updateImages();
    };

    // getTotalPages() {
    //     const { imagesTotal, imagesPerPage } = this.state;
    //     let totalPages = Math.ceil(imagesTotal/imagesPerPage);
    //     if(imagesTotal) {
    //         this.setState({
    //             totalPages: totalPages,
    //             firstPage: 1,
    //             lastPage: totalPages
    //         });
    //     }
    // }

    render() {
        const { imagesList } = this.state;
        debugger;
        if(!imagesList) {
            return <Spinner/>
        } else {
           let images  = this.state.imagesList.map((image) => {
                return <Image
                    key={image.id}
                    name={image.id}
                    altDescription={image.alt_description}
                    thumb={image.urls.thumb}

                />
            });
            return (
                <div>
                    {images}
                    <Pagination
                        imagesTotal={this.state.imagesTotal}
                        imagesPerPage={this.state.imagesPerPage}
                        totalPages={this.state.totalPages}
                        onPageChanged={this.onPageChanged}
                    />
                </div>
            );
        }

    }
}




