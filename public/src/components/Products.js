import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Products extends React.Component {
  render() {
    const { list } = this.props.items;
    let adsCounter = 0;
    return(
      <div className="columns is-multiline">
        {Object.keys(list).map(key => {
          adsCounter = adsCounter+1;
          const item = list[key];
          const ISODate = new Date(item.date).toISOString(); // http://momentjs.com/guides/#/warnings/js-date/
          const oneWeekAgo = moment(ISODate).add(7, 'days').isAfter(); // return true || false
          const relativeTime = moment(ISODate).fromNow();
          const fullTime = moment(ISODate);
          if(adsCounter == 20) {
            adsCounter = 0;
            const rndNum = Math.floor(Math.random()*1000);
            return(
              <div key={item.id} className="column is-3">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={`/ads/?r=${rndNum}`} alt="Sponsor" />
                    </figure>
                  </div>
                </div>
              </div>
            )
          }
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