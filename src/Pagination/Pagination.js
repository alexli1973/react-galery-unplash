import React, {Component} from 'react';
import Spinner from "../Spinner/Spinner";

export default class Pagination extends Component {
    state = {
        imagesTotal: this.props.imagesTotal,
        imagesPerPage: this.props.imagesPerPage,
        totalPages: this.props.totalPages,
        firstPage: null,
        lastPage: null,
        currentPage: 1,
        firstThreeArray: [1]
    };

    // constructor(props) {
    //     super (props);
    //    // this.getTotalPages();
    // }

    componentDidMount() {
        //this.props.onPageChanged(3);
        if(this.props.imagesTotal <= 5) {
            let pagesArr = [];
            for (let i=0; i<this.state.totalPages; i++) {
                pagesArr.push(i);
            }
            this.setState({firstThreeArray: pagesArr});


        }
    }
    handleClick = e => {
        console.log(e);
        this.props.onPageChanged(3);
    };

    render() {
        const{ imagesTotal, imagesPerPage, totalPages, firstPage, lastPage} = this.state;
        return (
            <div>
                Images Total: {imagesTotal}
                Pages Total: {totalPages}
                First Page: {firstPage}
                Last Page: {lastPage}
                <button onClick={e => this.handleClick(e)}>Click</button>
                {/*<button onClick={this.props.onPageChanged(3)}>Click</button>*/}
            </div>
        );
    }
}
