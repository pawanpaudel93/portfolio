#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'www.pawanpaudel.com.np' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'Update'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:pawanpaudel93/pawanpaudel93.github.io.git main

cd -