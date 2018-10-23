#!/usr/bin/env bash

# include license file only if MIT license is chosen

if [ "MIT" != "{{ cookiecutter.license }}" ]
then
  echo "{{ cookiecutter.license }}"
  rm LICENSE
fi

# install the required Node packages

npm install --save-dev \
    @stencil/core/ \
    regenerator-runtime \
    eslint \
    eslint-config-standard \
    eslint-plugin-standard \
    eslint-plugin-promise \
    eslint-plugin-import \
    eslint-plugin-node \
    eslint-plugin-jest \
