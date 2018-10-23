#!/usr/bin/env bash

# include license file only if MIT license is chosen

if [ "MIT" != "{{ cookiecutter.license }}" ]
then
  echo "{{ cookiecutter.license }}"
  rm LICENSE
fi

# install the required Node packages

npm install --save-dev \
    "@stencil/core": "~0.13.2"
