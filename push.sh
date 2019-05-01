#!/bin/bash
find . -name "*.js" | xargs rm -rf
git pull &&
git add . &&
git commit -m 'add' &&
git push
