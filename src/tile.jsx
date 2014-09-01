/** @jsx React.DOM */
var Tile = React.createClass({
  render: function () {
    var imageStyles = {
      maxWidth: '100px',
      maxHeight: '100px',
      margin: '0px auto',
      display: 'block'
    };
    var assetStyles = {
      cursor: 'pointer'
    };
    return (
      <div style={assetStyles} onClick={this.onClick} className="chute-asset-view">
        <img style={imageStyles} src={this.props.model.get('source').source_url} />
      </div>
    );
  },
  componentDidMount: function () {
    if (this.props.masonry) {
      this.props.masonry.appended([this.getDOMNode()]);
    }
  },
  onClick: function () {
    this.props.onClick(this.props.model);
  }
});