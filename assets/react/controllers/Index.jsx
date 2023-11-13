import React from 'react';
import { AppProvider } from './_Provider/AppContext';
import PublicRouter from './Router/PublicRouter';

export default function Index() {

    return (
        <AppProvider>
            <PublicRouter />
        </AppProvider>
    )
}
