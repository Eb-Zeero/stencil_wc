#!/usr/bin/env bash

# include license file only if MIT license is chosen

if [ "MIT" != "{{ cookiecutter.license }}" ]
then
  echo "{{ cookiecutter.license }}"
  rm LICENSE
fi

# install the required Node packages

npm install --save-dev \
    eslint \
    eslint-config-standard \
    eslint-config-prettier \
    eslint-plugin-standard \
    eslint-plugin-import \
    eslint-plugin-jest \
    eslint-plugin-node \
    eslint-plugin-promise \
    jest \
    jest-cli \
    puppeteer \
    regenerator-runtime \
    typescript \
    tslint \
    @stencil/core \
    @types/jest \
    @types/puppeteer
