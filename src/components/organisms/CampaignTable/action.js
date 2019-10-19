import { CREATE_NEW_ITEM } from './constants';

export const createNewItemAction = payload => ({
  type: CREATE_NEW_ITEM,
  payload,
})
