#!/bin/sh
yarn install && \
NODE_OPTIONS=--max_old_space_size=2048 yarn run build && \
cp -rf dist/ /dist