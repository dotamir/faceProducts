import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts, sortBy, loadMore } from '../actions/index';
import Products from './Products';
import Loader from 'react-spinkits';
import classnames from 'classnames';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(fetchProducts());
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    let clientHeight = document.documentElement.clientHeight || window.innerHeight;
    let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      if(this.props.products.hasMore) {
        this.props.dispatch(loadMore());
      }
    }
  }
  handleSelect(e) {
    const value = e.target.value;
    this.props.dispatch(sortBy(value));
  }
  render() {
    const { products, app } = this.props;
    const prodSection = classnames('section', {
      'is-hidden': app.isLoading
    });
    const loaderSection = classnames('section', {
      'is-hidden': !app.isLoading
    });
    const loadMoreStyle = classnames('field', {
      'is-hidden': !app.loadMore
    });
    const endOfStyle = classnames('field has-text-centered', {
      'is-hidden': products.hasMore,
    });
    return (
      <div>
        <nav className="navbar is-black" role="navigation">
          <div className="navbar-brand">
            <div className="navbar-item">
              <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="#">
                Home
              </a>
            </div>
          </div>
        </nav>
        <div className="container">
          <nav className="breadcrumb">
            <ul>
              <li className="is-active"><a>Products</a></li>
            </ul>
          </nav>
          <section style={{padding: '0 1.5rem'}} className={prodSection}>
            <div className="field">
              <div className="select">
                <select onChange={this.handleSelect}>
                  <option>Sort by</option>
                  <option value="id">ID</option>
                  <option value="size">Size</option>
                  <option value="price">Price</option>
                </select>
              </div>
            </div>
            <Products items={products} />
            <div className={loadMoreStyle}>
              <Loader type="bounce" />
            </div>
            <div style={{fontSize: '1.618rem'}} className={endOfStyle}>
            ~ end of catalogue ~
            </div>
          </section>
          <section className={loaderSection}>
            <Loader />
          </section>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

const mapStateToProps = state => ({
  products: state.products,
  app: state.app
});

export default connect(mapStateToProps)(App);