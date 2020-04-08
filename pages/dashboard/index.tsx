import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '@services/apollo/withApollo';
import { ApolloClient } from 'apollo-client';
import { observer, inject } from 'mobx-react';

import styled from 'styled-components';
import Header from '@components/Dashboard/Header';
import { IUserStore, IUserMe } from '@interfaces/store/user/';

const DashboardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DashboardHeader = styled.header`
  flex: 0 1 20%;
  margin-bottom: auto;
`;

const DashboardMain = styled.main`
  flex: 0 1 55%;
  background: ${(props) => props.theme.colors.lightergray};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DashboardFooter = styled.footer`
  flex: 0 1 12.5%;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.white};
  margin-top: auto;
`;

const StyledBox = styled.div`
  border-radius: 8px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.bs};
  flex: 0 1 49%;
`;

@inject('userStore')
@observer
class Dashboard extends React.Component<{
  userStore: IUserStore<IUserMe>;
  apollo: ApolloClient<any>;
}> {
  render() {
    const { userStore } = this.props;

    return (
      <ApolloProvider client={this.props.apollo}>
        <DashboardWrapper>
          <DashboardHeader>
            <Header me={userStore.me} />
          </DashboardHeader>
          <DashboardMain>
            <StyledBox /> <StyledBox />
          </DashboardMain>
          <DashboardFooter></DashboardFooter>
        </DashboardWrapper>
      </ApolloProvider>
    );
  }
}

export default withApollo(Dashboard);
