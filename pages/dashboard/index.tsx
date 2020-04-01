import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '@services/apollo/withApollo';
import { ApolloClient } from 'apollo-client';
import { observer, inject } from 'mobx-react';
import { withAuth } from '@HOC/withAuth';

@inject('userStore')
@observer
class Dashboard extends React.Component<{
  userStore: any;
  apollo: ApolloClient<any>;
}> {
  render() {
    return (
      <ApolloProvider client={this.props.apollo}>
        <div>Dashboard Page</div>
      </ApolloProvider>
    );
  }
}

export default withAuth(withApollo(Dashboard));
