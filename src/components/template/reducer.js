import { CREATE_NEW_ITEM } from '../organisms/CampaignTable/constants';

import initialState from './initialState';

export default (state = initialState, action ) => {
  const { type, payload } = action;

  switch(type) {
    case CREATE_NEW_ITEM:
      return Object.assign({}, state, {
        campaignsData: [ ...state.campaignsData, payload],
      })
    default:
        return state;
  }
}
