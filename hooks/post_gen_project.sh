#!/usr/bin/env bash

# include license file only if MIT license is chosen

if [ "MIT" != "{{ cookiecutter.license }}" ]
then
  echo "{{ cookiecutter.license }}"
  rm LICENSE
fi

# install the required Node packages

npm install --save-dev \
    @stencil/core \
    @types/jest \
    @types/puppeteer \
    jest \
    jest-cli \
    prettier \
    prettier-standard \
    puppeteer \
    regenerator-runtime \
    typescript \
    tslint \
    tslint-config-standard \
    tslint-plugin-prettier


echo -e "\e[33mGet started\e[0m"
echo ""
echo " cd {{cookicuter.package_name}}"
echo " npm start"
