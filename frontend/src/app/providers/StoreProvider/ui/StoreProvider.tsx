import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { store } from '../config/store';

const StoreProvider = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;