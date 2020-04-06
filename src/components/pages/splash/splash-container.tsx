/*global setTimeout*/
import React, {Component, ReactElement} from 'react';
import SplashView from './splash-view';
import {Router} from '../../../routes';
import {storeWrapper} from '../../../storeWrapper';
import {StoreProps} from '../../../types';
import firestore, {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {BulletinInformation} from '../../atoms/BulletinCard';

class SplashContainer extends Component<StoreProps, {startupFinished: boolean}> {
  public state = {
    startupFinished: false,
  };

  public componentDidMount = async (): Promise<void> => {
    await this._setInformation();
    this._setContacts();
    this._setBulletins();
    this._startupFinished();
  };

  public render(): ReactElement<JSX.Element> {
    if (this.state.startupFinished) {
      return <Router/>;
    }
    return <SplashView/>;
  }

  private _setBulletins = async (): Promise<void> => {
    const documents: FirebaseFirestoreTypes.QuerySnapshot = await firestore().collection('bulletins').get();
    const bulletins: Array<BulletinInformation> = documents.docs.map((document: FirebaseFirestoreTypes.QueryDocumentSnapshot) => {
      return document.data() as BulletinInformation;
    });
    this.props.setBulletins(bulletins);
  };

  private _setContacts = (): void => {
    this.props.setContacts([
      {
        label: 'SNS 24',
        description: 'Linha de saúde nacional',
        phone: '+351 800 24 24 24',
      },
      {
        label: 'SNS 24 Madeira',
        description: 'Linha de saúde para R.A.M.',
        phone: '+351 800 24 24 20',
      },
      {
        label: 'SNS 24 Açores',
        description: 'Linha de saúde para R.A.A.',
        phone: '+351 800 24 60 24',
      },
      {
        label: 'Informações Açores',
        description: 'Outras dúvidas na R.A.A.',
        phone: '+351 800 29 29 29',
      },
    ]);
  };

  private _setInformation = (): void => {
    this.props.setInformation([
      {
        caption: 'Normas apoio ERPI',
        videoId: 'FBKlbf9qOcs',
      },
      {
        caption: 'Ajuda no isolamento',
        videoId: 'Z7me3iOx6Rk',
      },
      {
        caption: 'Técnica limpeza telemóveis',
        videoId: 'Ldf1N81A0KI',
      },
      {
        caption: 'Técnica limpeza superfícies',
        videoId: 'tcQ5zH2yAdg',
      },
      {
        caption: 'Cuidar dos séniores',
        videoId: 't47HuKohqr4',
      },
      {
        caption: 'Técnica lavagem mãos',
        videoId: '_TzLRKoCHxQ',
      },
      {
        caption: 'Evitar a transmissão',
        videoId: 'R2U1LXCEPEU',
      },
      {
        caption: 'Recomendações gerais',
        videoId: 'eLfKq5NvVFM',
      }, {
        caption: 'Medidas prevenção',
        videoId: 'MJmWJyWywIU',
      },
      {
        caption: 'O novo coronavírus',
        videoId: '3MkRE2rG4Ok',
      },
    ]);
  };

  private _startupFinished = (): void => {
    setTimeout(() => this.setState({startupFinished: true}), 2000);
  };
}

export default storeWrapper(SplashContainer);
