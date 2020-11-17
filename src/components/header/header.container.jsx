import React from 'react';

import {Query, Mutation} from 'react-apollo'
import {gql} from 'apollo-boost'

import Header from './header.component'

const GET_HEADER_PROPERTIES = gql`
{
    cartHidden @client
    currentUser @client
}
`;

const HeaderContainer = () => (
    <Query query={GET_HEADER_PROPERTIES}>
        {
            ({data: {currentUser, cartHidden}}) => <Header hidden={cartHidden} currentUser={currentUser}></Header>
        }
    </Query>
)

export default HeaderContainer;