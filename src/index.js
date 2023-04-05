import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Pokedex } from './Pokedex';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<Pokedex />);
