#!/usr/bin/env bash

# include license file only if MIT license is chosen

if [ "MIT" != "{{ cookiecutter.license }}" ]
then
  echo "{{ cookiecutter.license }}"
  rm LICENSE
fi

# install the required Node packages

npm install --save-dev \
    jest \
    babel-core@^7.0.0-bridge.0 \
    @babel/core \
    @babel/preset-env \
    babel-loader \
    babel-jest \
    regenerator-runtime \
    eslint \
    eslint-config-standard \
    eslint-plugin-standard \
    eslint-plugin-promise \
    eslint-plugin-import \
    eslint-plugin-node \
    eslint-plugin-jest \
    puppeteer \
    jest-puppeteer \
    express \
    webpack \
    webpack-cli \
    webpack-dev-server \
    webpack-merge \
    mini-html-webpack-plugin
