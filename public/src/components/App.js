import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Products</h1>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;