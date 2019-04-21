import React, {Component} from 'react';

export default class Image extends Component {

    // state = {
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

    render() {

        //const { id, width, height, alt_description, urls: {raw, full, regular, small, thumb}} = this.state;

        return (
            <div className=''>
                <h4>Name: {this.props.name}</h4>
                <img className=''
                     src={this.props.thumb} alt={this.props.altDescription} />
            </div>

        );

    }
}