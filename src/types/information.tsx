export type Information = {
  caption: string;
  videoId: string;
}

export type InformationState = {
  information: Array<Information>;
}

export type InformationViewProps = {
  information: Array<Information>;
}
