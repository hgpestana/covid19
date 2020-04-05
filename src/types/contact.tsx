export type Contact = {
  label: string;
  description?: string;
  email?: string;
  phone?: string;
  mobile?: string;
};

export type ContactState = {
  contacts: Array<Contact>;
}
export type ContactViewProps = {
  contacts: Array<Contact>;
}
