import React from 'react';
import { AccountProvider } from '../_Provider/AccountProvider';
import AccountMain from '../UI/Account/AccountMain';

export default function Account() {

    return (
        <AccountProvider>
            <AccountMain />
        </AccountProvider>
    );
}
