import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Products extends React.Component {
  render() {
    console.log(this.props.items);
    const { list } = this.props.items;
    return(
      <div className="columns is-multiline">
        {Object.keys(list).map(key => {
          const item = list[key];
          const oneWeekAgo = moment(item.date).add(7, 'days').isAfter(); // return true/false
          const relativeTime = moment(item.date).fromNow();
          const fullTime = moment(item.date);
          return(
            <div key={item.id} className="column is-3">
              <div className="card">
                <div className="card-header">
                  <span className="card-header-title">{oneWeekAgo ? relativeTime : fullTime.format('llll')}</span>
                </div>
                <div className="card-content">
                  <div className="content has-text-centered">
                    {item.face}
                  </div>
                </div>
                <div className="card-footer">
                  <span className="card-footer-item">size: {item.size}</span>
                  <span className="card-footer-item">${parseInt(item.price, 10) / 100}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Products;