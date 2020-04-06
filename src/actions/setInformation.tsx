import {SET_INFORMATION} from '../constants';
import {Information} from '../types';

export type SetInformation = {
  type: SET_INFORMATION;
  information: Array<Information>;
};

const setInformation = (information: Array<Information>): SetInformation => {
  return {
    type: SET_INFORMATION,
    information: information,
  };
};

export default setInformation;
