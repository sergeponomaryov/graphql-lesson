import React from 'react';

import {Query, Mutation} from 'react-apollo';
import {gql} from 'apollo-boost';

import Checkout from './checkout.component';

const GET_CART_ITEMS_AND_TOTAL = gql`
{
    cartItems @client
    cartTotal @client
}`;

const CheckoutContainer = () => (
    <Query query={GET_CART_ITEMS_AND_TOTAL}>
        {
            ({data: {cartItems, cartTotal}}) => (
                <Checkout cartItems={cartItems} cartTotal={cartTotal}></Checkout>
            )
        }
    </Query>
)

export default CheckoutContainer;