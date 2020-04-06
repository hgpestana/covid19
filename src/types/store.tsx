import {BulletinInformation} from '../components/atoms/BulletinCard';
import {Contact} from './contact';
import {Information} from './information';

export type Store = {
  bulletins: Array<BulletinInformation>;
  contacts: Array<Contact>;
  information: Array<Information>;
};

export type StoreProps = {
  information: Array<Information>;
  bulletins: Array<BulletinInformation>;
  contacts: Array<Contact>;
  setInformation: (information: Array<Information>) => void;
  setBulletins: (bulletins: Array<BulletinInformation>) => void;
  setContacts: (contacts: Array<Contact>) => void;
};
