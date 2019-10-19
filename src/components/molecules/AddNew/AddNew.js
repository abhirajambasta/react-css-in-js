import React, { PureComponent } from 'react';
import Popup from "reactjs-popup";
import withStyles from '../../../core/hoc/withStyles';

import Button from '../../atoms/Button';
import Image from '../../atoms/Image';

import CreateNewModal from '../../organisms/CreateNewModal';

import styles from './AddNew.style';

class AddNew extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  render() {
    const imagePath = `images/files/new.png`;
    return (
      <div>
        <Button onClick={this.openModal}>
          <Image src={imagePath} alt="add-new" height={108} width={96} />
        </Button>
        <Popup
          open={this.state.open}
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
            <CreateNewModal closeModal={this.closeModal}/>
          </div>
        </Popup>
      </div>
    );
  }
}

export default withStyles(AddNew, styles);
