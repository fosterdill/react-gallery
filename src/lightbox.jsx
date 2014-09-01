/** @jsx React.DOM */
var Lightbox = React.createClass({
  render: function () {
    var model = this.props.model;
    return (
      <div onClick={this.onBackdropClick} className="chute-modal">
        <div className="chute-modal-container">
          <div onClick={this.onLightboxClick} className="chute-lightbox">
            <img src={model.get('source').source_url} />
          </div>
        </div>
      </div>
    );
  },
  onBackdropClick: function () {
    this.props.closeModal();
  },
  onLightboxClick: function (e) {
    return false;
  }
});