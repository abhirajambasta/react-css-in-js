import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ControlHead from '../../molecules/ControlHead';
import TopNav from '../../molecules/TopNav';
import CampaignTable from '../CampaignTable';

import withStyles from '../../../core/hoc/withStyles';
import styles from './Dashboard.style';

class Dashboard extends PureComponent {

  state = {
    showCampaignType: 'live',
  };

  onTypeSelection = showCampaignType => {
    this.setState({
      showCampaignType
    });
  }

  render() {
    const { className, campaignsData } = this.props;
    const { showCampaignType } = this.state;

    return (
      <div className={`${className} col-sm-12 col-md-12 col-lg-12`}>
        <div className="top-nav">
          <TopNav />
        </div>
        <div className="main-container">
          <ControlHead onTypeSelection={this.onTypeSelection} showCampaignType={showCampaignType} />
          <CampaignTable showCampaignType={showCampaignType} campaignsData={campaignsData} />
        </div>
      </div>
    )
  }
}

Dashboard.defaultProps = {
  campaignsData: [],
  className: '',
};

const mapStateToProps = state => ({
  campaignsData: state.AppState.campaignsData,
});


export default connect(mapStateToProps)(withStyles(Dashboard, styles));
