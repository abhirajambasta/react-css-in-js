import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import withStyles from '../../../core/hoc/withStyles';
import Popup from 'reactjs-popup';
import Calendar from 'react-calendar';

import { createNewItemAction } from './action';
import Text from '../../atoms/Text';
import CampaignRow from '../../molecules/CampaignRow';

import styles from './CampaignTable.style';

import { composeDate } from '../../../core/utils';

class CampaignTable extends PureComponent {
  state = {
    isScheduleOpen: false,
    date: new Date(),
    selectedIndex: undefined,
  };

  closeModal = () => {
    this.setState({
      isScheduleOpen: false,
    });
  };

  onChangeDate = date => {
    const { createNewEntry, campaignsData } = this.props;
    const { selectedIndex } = this.state;
    this.setState({
      date,
    }, () => {
      this.closeModal();
      const selectedCampaign = campaignsData.find((item, itemIndex) => itemIndex === selectedIndex);
      createNewEntry({
        ...selectedCampaign,
        date: (new Date(date)).getTime(),
      });
    });
  }


  render() {
    const { campaignsData, className, showCampaignType } = this.props;
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
        image: 'images/csv.png',
      },
      {
        name: 'Report',
        image: 'images/report.png',
      },
      {
        name: 'Schdeule Again',
        image: 'images/schedule.png',
        onClick: index =>
          this.setState({
            isScheduleOpen: true,
            isInfo: false,
            selectedIndex: index,
          }),
      },
    ];

    return (
      <div className={className}>
        {!filteredCampaignData.length ? (
          <Text text="no data found" />
        ) : (
          <table>
            <thead>
              <tr>
                {tableHeads.map(tableHead => (
                  <th>{tableHead}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCampaignData.map((campaign, index) => (
                <CampaignRow
                  actionElements={actionElements}
                  showCampaignType={showCampaignType}
                  {...campaign}
                  index={index}
                  key={campaign.name}
                />
              ))}
            </tbody>
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
            <Calendar
              onChange={this.onChangeDate}
              value={this.state.date}
              minDate={new Date()}
              className='datepicker-component'
            />
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
