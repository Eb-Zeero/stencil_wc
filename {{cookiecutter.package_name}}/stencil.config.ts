import { Config } from '@stencil/core';

export const config: Config = {
  namespace: '{{ cookiecutter.namespace }}',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
