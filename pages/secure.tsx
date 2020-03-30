import React from 'react';
import { DatePicker } from 'antd';
import { observer, inject } from 'mobx-react';
import { withAuth } from '@HOC/withAuth';

@inject('userStore')
@observer
class Secure extends React.Component<{ userStore: any }> {
  render() {
    return (
      <div className="mainContainer">
        <div className="container">
          <DatePicker />
          <h1 className="heading">
            Secure Page
            {this.props.userStore.getUser && this.props.userStore.getUser.email}
          </h1>
        </div>
      </div>
    );
  }
}

export default withAuth(Secure);
