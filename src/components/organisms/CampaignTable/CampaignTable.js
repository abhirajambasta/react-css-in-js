import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import withStyles from '../../../core/hoc/withStyles';
import Popup from 'reactjs-popup';

import { createNewItemAction } from './action';
import Text from '../../atoms/Text';
import CreateNewModal from '../CreateNewModal';
import CampaignRow from '../../molecules/CampaignRow';

import styles from './CampaignTable.style';

import { composeDate } from '../../../core/utils';

class CampaignTable extends PureComponent {
  state = {
    isScheduleOpen: false,
  };

  closeModal = () => {
    this.setState({
      isScheduleOpen: false,
    });
  };

  render() {
    const { campaignsData, className, showCampaignType, createNewEntry } = this.props;
    const tableHeads = ['Date', 'Campaign', 'View', 'Actions'];

    let filteredCampaignData = campaignsData;

    if (showCampaignType === 'future') {
      filteredCampaignData = filteredCampaignData.filter(({date}) => {
        return composeDate(date).formattedDate !== composeDate().formattedDate && composeDate(date).date.getTime() > composeDate().date.getTime()
      });
    } else if (showCampaignType === 'past') {
      filteredCampaignData = filteredCampaignData.filter(({date}) => {
        return composeDate(date).formattedDate !== composeDate().formattedDate && composeDate(date).date.getTime() < composeDate().date.getTime()
      });
    } else if (showCampaignType === 'live') {
      filteredCampaignData = filteredCampaignData.filter(({date}) => composeDate(date).formattedDate === composeDate().formattedDate);
    }

    const actionElements = [
      {
        name: 'CSV',
        image: '',
      },
      {
        name: 'REPORT',
        image: '',
      },
      {
        name: 'SCHEDULE AGAIN',
        image: '',
        onClick: () =>
          this.setState({
            isScheduleOpen: true,
            isInfo: false,
          }),
      },
    ];

    return (
      <div className={className}>
        {!filteredCampaignData.length ? (
          <Text text="no data found" />
        ) : (
          <table>
            <tr>
              {tableHeads.map(tableHead => (
                <th>{tableHead}</th>
              ))}
            </tr>
            {filteredCampaignData.map(campaign => (
              <CampaignRow
                actionElements={actionElements}
                showCampaignType={showCampaignType}
                {...campaign}
              />
            ))}
          </table>
        )}
        <Popup
          open={this.state.isScheduleOpen}
          closeOnDocumentClick
          onClose={this.closeModal}
          position="center center"
          modal
          lockScroll
          closeOnEscape
          repositionOnResize
          className="modal-container"
        >
          <div className="modal">
            <CreateNewModal closeModal={this.closeModal} createNewEntry={createNewEntry} />
          </div>
        </Popup>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  createNewEntry: payload => dispatch(createNewItemAction(payload)),
});

CampaignTable.defaultProps = {
  className: '',
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(CampaignTable, styles));
