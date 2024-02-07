// ContactComponent.js 파일

import { Component } from 'react';
import ContactList from './ContactListComponent';

class Contact extends Component {
  render() {
    return (
      <div>
        <h3>연락처 목록</h3>
        <ContactList />
      </div>
    );
  }
}

export default Contact;
