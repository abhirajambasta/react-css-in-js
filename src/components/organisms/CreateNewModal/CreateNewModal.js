import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import withStyles from '../../../core/hoc/withStyles';

import CreateNewForm from '../../molecules/CreateNewForm';
import { createNewItemAction } from './action';

import styles from './CreateNewModal.style';

class CreateNewModal extends PureComponent {
  createNewItem = formInputData => {
    const { closeModal, createNewEntry  } = this.props;
    createNewEntry({ formInputData });
    closeModal();
  }

  render() {
    const { closeModal, className } = this.props;

    return (
      <div className={className}>
        <div>
          <h2 className="modal-title">
            Schedule
          </h2>
          <em className="cross-icon close" onClick={closeModal} />
        </div>
        <CreateNewForm createNewItem={this.createNewItem} />
      </div>
    );
  }
}


export const mapStateToProps = state => {
  const { fileList, folderList } = state.AppState;
  return {
    fileList,
    folderList,
  };
};

export const mapDispatchToProps = dispatch => ({
  createNewEntry: payload => dispatch(createNewItemAction(payload)),
});

CreateNewModal.defaultProps = {
  fileList: [],
  folderList: [],
  closeModal: () => {},
  className: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(CreateNewModal, styles));
