import React from 'react';
import { DatePicker } from 'antd';
import { observer, inject } from 'mobx-react';
import { withAuth } from '@HOC/withAuth';
import { Store } from '../mobx/store';

@inject('store')
@observer
class Secure extends React.Component<{ store: any }> {
  render() {
    return (
      <div className="mainContainer">
        <div className="container">
          <DatePicker />
          <h1 className="heading">
            Secure Page {this.props.store.user && this.props.store.user.email}
          </h1>
        </div>
      </div>
    );
  }
}

export default withAuth(Secure);
