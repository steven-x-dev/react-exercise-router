import React from 'react';

class Product extends React.Component {

  render() {
    const id = this.props.match.params.id;
    const url = this.props.match.url;
    const product = this.props.location.state;
    return (
      <div>
        <p className='title'>Product Details:</p>
        <br />
        <p className='data-line'>{`Name: ${product.name}`}</p>
        <br />
        <p className='data-line'>Id: {id}</p>
        <br />
        <p className='data-line'>Price: {product.price}</p>
        <br />
        <p className='data-line'>Quantity: {product.quantity}</p>
        <br />
        <p className='data-line'>Desc: {product.desc}</p>
        <br />
        <p className='data-line'>URL: {url}</p>
      </div>
    );
  }
}

export default Product;
