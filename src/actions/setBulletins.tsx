import {SET_BULLETINS} from '../constants';
import {BulletinInformation} from '../components/atoms/BulletinCard';

export type SetBulletins = {
  type: SET_BULLETINS;
  bulletins: Array<BulletinInformation>;
};

const setBulletins = (bulletins: Array<BulletinInformation>): SetBulletins => {
  return {
    type: SET_BULLETINS,
    bulletins: bulletins,
  };
};

export default setBulletins;
