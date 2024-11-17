import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {productItem: "Beras"};
  }
  changeProduct = () => {
    this.setState({productItem: "Minyak"})
  }
  render() {
    return (
    <div className='App'>
    <h1>Produk Pilihan: 
    {this.state.productItem}</h1>
    <button type="button"
 onClick={this.changeProduct}>Ubah Produk</button>
   </div>);
  }
}
ReactDOM.render(<Product />, document.getElementById('root'));

export default Product;