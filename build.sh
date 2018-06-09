#!/usr/bin/env bash
ng build --project iwe7-toolbar
mkdir -p ./dist/iwe7-toolbar/themes
cp -fr ./projects/iwe7-toolbar/themes/* ./dist/iwe7-toolbar/themes/
cd dist/iwe7-toolbar
npm publish
cd ../
rm -rf dist/iwe7-toolbar
yarn add iwe7-toolbar
