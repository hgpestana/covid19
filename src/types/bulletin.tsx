import {BulletinInformation} from '../components/atoms/BulletinCard';

export type BulletinState = {
  bulletins: Array<BulletinInformation>;
}

export type BulletinViewProps = {
  bulletins: Array<BulletinInformation>;
}
