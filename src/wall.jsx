/** @jsx React.DOM */
var Wall = React.createClass({
  className: 'chute-wall-view',
  getInitialState: function () {
    var initialState = {
      collection: new ChuteApp.Assets([], { albumShortcut: "axx2ypmi" }),
      lightboxModel: null
    };
    return initialState;
  },
  openLightbox: function (model) {
    this.setState({ lightboxModel: model });
  },
  createTileView: function (model) {
    return (
      <Tile 
        onClick={this.openLightbox} 
        model={model} 
        masonry={this.masonry} />
    );
  },
  createTileViews: function () {
    return this.state.collection.map(this.createTileView);
  },
  componentDidMount: function () {
    var el = this.getDOMNode();
    this.masonry = new Masonry(el, {
      gutter: 10,
      columnWidth: 1,
      itemSelector: '.chute-asset-view',
      isFitWidth: true,
      hiddenStyle: {}
    });
  },
  closeModal: function () {
    this.setState({ lightboxModel: null })
  },
  loadMore: function (e) {
    e.preventDefault();
    var that = this;
    var nextAssets = new ChuteApp.Assets(this.state.collection.toJSON(), { albumShortcut: "axx2ypmi" });
    nextAssets.url = this.state.collection.url;
    nextAssets.fetch({ remove: false }).done(function (data) {
      nextAssets.url = data.pagination.next_page;
      that.setState({ collection: nextAssets });
    });
  },
  lightbox: function () {
    var lightbox;
    if (this.state.lightboxModel) {
      lightbox = (
        <Lightbox 
          closeModal={this.closeModal} 
          model={this.state.lightboxModel} />
      );
    }
    return lightbox;
  },
  render: function () {
    var divStyle = {
      marginTop: '50px',
      position: 'relative'
    };
    return (
      <div>
        {this.lightbox()}
        <a href="#" onClick={this.loadMore}>load more</a>
        <div style={divStyle} className={this.className}>
          {this.createTileViews()}
        </div>
      </div>
    );
  }
});