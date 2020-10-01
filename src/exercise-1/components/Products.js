import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Product from "./Product";

class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bicycle: {
        id: 1,
        name: 'Bicycle',
        price: 30,
        quantity: 15,
        desc: 'Bicycle is Good'
      },
      TV: {
        id: 2,
        name: 'TV',
        price: 40,
        quantity: 16,
        desc: 'TV is Good'
      },
      pencil: {
        id: 3,
        name: 'Pencil',
        price: 50,
        quantity: 17,
        desc: 'Pencil is Good'
      }
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path='/products'>
          <p className='title'>All Products:</p>
          {Object.entries(this.state).map(entry => this.renderProductLink(entry))}
        </Route>
        <Route path='/products/:id' component={Product} />
      </Switch>
    );
  }

  renderProductLink = ([key, data]) => {
    const { name, price, quantity, desc } = data;
    return (
      <div key={key}>
        <br />
        <Link
          to={{
            pathname: `/products/${data.id}`,
            state: { name, price, quantity, desc }
          }}
          className='redirect product'
        >
          {key}
        </Link>
      </div>
    )
  };
}

export default Products;
