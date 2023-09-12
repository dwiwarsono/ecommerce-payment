'use client';

import { ReactNode } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { store } from '@/store';
import { Provider as ReduxProvider } from 'react-redux';

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <ReduxProvider store={store}>
      <StyleProvider hashPriority="high" ssrInline>
        {children}
      </StyleProvider>
    </ReduxProvider>
  );
};

export default Provider;
