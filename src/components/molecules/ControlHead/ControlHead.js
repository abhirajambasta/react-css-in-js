import React, { PureComponent } from 'react';
import withStyles from '../../../core/hoc/withStyles';

import Button from '../../atoms/Button';
import Text from '../../atoms/Text';

import styles from './ControlHead.style';

class ControlHead extends PureComponent {
  render() {
    const buttonList = [
      {
        name: 'Upcoming Campaigns',
        value: 'future',
      },
      {
        name: 'Live Campaigns',
        value: 'live',
      },
      {
        name: 'Past Campaigns',
        value: 'past',
      },
    ];
    const { headTextPrimary = 'Manage Campaigns', onTypeSelection, showCampaignType, className } = this.props;
    return (
      <div className={className}>
        <Text text={headTextPrimary} Type="h1" />
        <ul className="button-group">
          {
            buttonList.map(buttonItem => (
              <Button
                onClick={() => onTypeSelection(buttonItem.value)}
                key={buttonItem.value}
                inheritedClass={`${showCampaignType === buttonItem.value ? 'selected-button': ''} campaign-button`}
              >
                <Text text={buttonItem.name} />
              </Button>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default withStyles(ControlHead, styles);
