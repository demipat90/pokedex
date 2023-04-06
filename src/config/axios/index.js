import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api'
});

export const v1 = 'v1';
export const v2 = 'v2';
