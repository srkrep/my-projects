import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../appState/Actions/addToCartAction';
import { filterAllToys, softToys, woodenToys } from '../appState/Actions/filterActions';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            sortType:'dsc'
        }
        // console.log("HOME PROPS", this.props)
    }


    render() {
       
        let filteredToys = []

        Object.keys(this.props.cartProps.items).forEach((e) => {
          filteredToys.push(this.props.cartProps.items[e])  
        })

        const toys = filteredToys.filter((e) => {
            return e.pname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })

        let sorted =  toys.sort((a, b) => {
            const isReversed = (this.state.sortType === 'asc') ? 1 : -1
            return isReversed * (a.price - b.price)
        })

        // console.log("<<<filteredToys>>>>",filteredToys)

        const onSort = sortType => {
        this.setState({sortType});
        }

        const realTimeSearch = (e) => {
            e.preventDefault();
            this.setState({
                search: e.target.value
            })
        }

        return (
            <Fragment>
                <div className="row center-xs center-sm center-lg">
                  <div className="col-xs-3 col-sm-2 col-lg-1">
                      <h4 className="filter" onClick={() => {this.props.filterAllToys()}}>All Toys</h4>
                  </div>
                  <div className="col-xs-3  col-sm-2 col-lg-1">
                      <h4 className="filter" onClick={() => {this.props.softToys()}}>Soft Toys</h4>
                  </div>
                  <div className="col-xs-3  col-sm-2 col-lg-2">
                      <h4 className="filter-1" onClick={() => {this.props.woodenToys()}}>Wooden Toys</h4>
                  </div>
                  <div className="col-xs-10  col-sm-5 col-lg-2">
                      <input type="search" value={this.state.serach} onChange={realTimeSearch} placeholder="Search By Letter / Toy Name"/>
                  </div>
                  <div className="col-xs-6  col-sm-4 col-lg-2 dinline mt22">
                     <strong>Sort By Price</strong>
                    <button className="mrl10" onClick={() => onSort('asc')}> Low </button>
                    <button className="mrl10" onClick={() => onSort('dsc')}> High </button>
                  </div>
                </div>
                <div className="row center-xs center-sm center-lg">
                    {
                          toys.map((e, index) => {
                            return <div className="col-xs-9 col-sm-5 col-md-6 col-lg-3 card center" key={index}>
                                    <img src={e.image} alt={e.pname} width="60%"/><br></br>
                                    <div className="dinline">
                                        <span className="pname">{e.pname}</span>
                                        <span className="mrl50 price">{e.price}.00</span>
                                        <span className="">
                                            <img className="cart-icon" src="../images/toys/cart.png" alt="cart" onClick={() => {this.props.addToCart(index)}}/>
                                        </span>
                                    </div>
                                  </div>
                            })
                    }
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    cartProps: state.cartState,
})


export default connect(mapStateToProps, { addToCart, filterAllToys, softToys, woodenToys })(Home)   