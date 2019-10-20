import React, { PureComponent } from 'react';
import withStyles from '../../../core/hoc/withStyles';

import Button from '../../atoms/Button';
import Anchor from '../../atoms/Anchor';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

import styles from './TopNav.style';

class AddNew extends PureComponent {
  render() {
    const imagePath = `images/logo.png`;
    const { className } = this.props;
    return (
      <div className={className}>
        <Anchor>
          <Image src={imagePath} alt="add-new" height={64} width={64} />
        </Anchor>
      </div>
    );
  }
}

export default withStyles(AddNew, styles);
