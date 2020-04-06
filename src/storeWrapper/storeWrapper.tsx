import {Contact, Information, Store} from '../types';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {BulletinInformation} from '../components/atoms/BulletinCard';
import setInformation from '../actions/setInformation';
import setBulletins from '../actions/setBulletins';
import setContacts from '../actions/setContacts';

/* eslint-disable @typescript-eslint/no-explicit-any */
const mapStateToProps = (state: Store, props: any): any => {
  return {
    ...props,
    bulletins: state.bulletins,
    contacts: state.contacts,
    information: state.information,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): any => {
  return {
    setInformation: (information: Array<Information>): any => dispatch(setInformation(information)),
    setBulletins: (bulletins: Array<BulletinInformation>): any => dispatch(setBulletins(bulletins)),
    setContacts: (contacts: Array<Contact>): any => dispatch(setContacts(contacts)),
  };
};
/* eslint-enable @typescript-eslint/no-explicit-any */
const storeWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default storeWrapper;
