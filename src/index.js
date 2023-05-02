import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from './config/react-query';
import { Pokedex } from './Pokedex';

import './index.css';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <Pokedex />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
