var ProductCategoryRow = React.createClass({
  render: function () {
    return (
      <tr>
        <th>{this.props.category}</th>
      </tr>
    )
  }
})

var ProductItemRow = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
})

var ProductTable = React.createClass({
  render: function () {
    var row = []
    var previousCategory = null

    this.props.products.forEach(function(product) {
      if (product.category !== previousCategory) {
        row.push(<ProductCategoryRow category={product.category} key={product.category} />)
      }
      row.push(<ProductItemRow product={product} key={product.name} />)
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Product</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>
    )
  }
})

var SearchBar = React.createClass({
  render: function () {
    return (<input type="text" placeholder="Search..." />)
  }
})

var SearchableProductTable = React.createClass({
  render: function () {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    )
  }
})

var products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <SearchableProductTable products={products}/>,
  document.getElementById('app')
)
