import React, { PureComponent } from 'react';

import Image from '../../atoms/Image';
import TextGroup from '../TextGroup';
import withStyles from '../../../core/hoc/withStyles';

import styles from './GetInfoModal.style';

class GetInfoModal extends PureComponent {

  render() {
    const { logo, name, country, className, closeModal } = this.props;
    const imgConfig = {
      src: logo,
      alt: name,
      height: '70',
      width: '50',
    };

    const formattedTextFile = [
      {
        key: 'Name',
        value: name,
      },
      {
        key: 'Country',
        value: country,
      },
    ]

    return (
      <div className={className}>
        <div>
          <h2 className="modal-title">
            Campaign Info
          </h2>
          <em className="cross-icon close" onClick={closeModal}/>
        </div>
        <Image {...imgConfig} />

        <div className="text-group">
          <TextGroup textList={formattedTextFile}/>
        </div>
      </div>
    );
  }
}

GetInfoModal.defaultProps = {
  type: 'file',
  name: '',
  size: '',
  creatorName: '',
  createdOn: '',
  className: '',
  closeModal: () => {}
};

export default withStyles(GetInfoModal, styles);
