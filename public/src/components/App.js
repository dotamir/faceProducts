import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/index';
import Products from './Products';
import Loader from 'react-spinkits';
import classnames from 'classnames';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(fetchProducts());
  }
  render() {
    console.log(this.props.app);
    const { products, app } = this.props;
    const prodSection = classnames('section', {
      'is-hidden': app.isLoading
    });
    const loaderSection = classnames('section', {
      'is-hidden': !app.isLoading
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
          <section className={prodSection}>
            <Products items={products} />
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