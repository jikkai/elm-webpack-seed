#!/bin/sh
if which yarn; then
  yarn
else
  npm i
fi

if which elm; then
  elm-package install
else
  npm i -g elm
  elm-package install
fi
