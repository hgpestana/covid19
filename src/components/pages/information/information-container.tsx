import React, {Component, ReactElement} from 'react';
import InformationView from './information-view';
import {InformationState} from '../../../types/information';

class InformationContainer extends Component<{}, InformationState> {
  public state: Readonly<InformationState> = {
    information: [
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
    ],
  };

  public render(): ReactElement<JSX.Element> {
    return <InformationView {...this.state}/>;
  }
}

export default InformationContainer;
