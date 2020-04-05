import React, {Component, ReactElement} from 'react';
import firestore, {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import BulletinView from './bulletin-view';
import {BulletinState} from '../../../types/bulletin';
import {BulletinInformation} from '../../atoms/BulletinCard';

class BulletinContainer extends Component<{}, BulletinState> {
  public async componentDidMount(): Promise<void> {
    await this._fetchData();
  }

  public state: Readonly<BulletinState> = {
    bulletins: [],
  };

  public render(): ReactElement<JSX.Element> {
    return <BulletinView {...this.state}/>;
  }

  private _fetchData = async (): Promise<void> => {
    const documents: FirebaseFirestoreTypes.QuerySnapshot = await firestore().collection('bulletins').get();
    const bulletins: Array<BulletinInformation> = documents.docs.map((document: FirebaseFirestoreTypes.QueryDocumentSnapshot) => {
      return document.data() as BulletinInformation;
    });
    this.setState({
      bulletins,
    });
  };
}

export default BulletinContainer;
