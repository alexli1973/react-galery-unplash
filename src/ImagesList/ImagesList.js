import React, {Component} from 'react';
import ApiService from '../services/ApiService'
import Image from "../Image/Image";
import Spinner from "../Spinner/Spinner";

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
        imagesList: null
    };

    constructor() {
        super();
    }

    componentDidMount() {
        this.updateImages();
    }

    updateImages() {
        this.apiService.
        getImages()
            .then((imagesList) => {
                // console.log(image)
                this.setState({
                    //name: image.id,
                    //id: image.id
                    imagesList
                });
            });
        debugger;
    }

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
            return(<div>{images}</div>);
        }


    }
}