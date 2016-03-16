import forEach from 'lodash.foreach';
import utils from 'helpers/utils';
import Component from 'components/component';
import React, {PropTypes} from 'react';

export default class Image extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
    editing: PropTypes.bool
  };

  render () {
    if (this.props.id && this.props.id !== '') {
      const url = utils.getBestImageUrl(this.props.id, this.props.width);
      const extraProps = {};

      forEach(this.props, (value, key) => {
        if (key !== 'id' && key !== 'width' && key !== 'height') {
          extraProps[key] = value;
        }
      });

      return (
        <img src={url} {...extraProps} />
      );
    } else if (this.props.editing) {
      const style = {};

      if (this.props.height) {
        style.height = this.props.height;
      }

      return (
        <div className='dummy-placeholder' style={style}>
          <i className='fa fa-image'></i>
        </div>
      );
    }

    return null;
  }
}
