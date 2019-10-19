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
    const { navText = 'BETA', className } = this.props;
    return (
      <div className={className}>
        <ul>
          <li>
            <Anchor>
              <Image src={imagePath} alt="add-new" height={24} width={24} />
            </Anchor>
          </li>
          <li style={{float:'right'}}>
            <Button onClick={this.openModal}>
              <Text text={navText} />
              <Image
                src={imagePath}
                alt="add-new"
                height={24}
                width={24}
                type='span'
                inheritedClass="sidebar-class"
              />
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(AddNew, styles);
