#!/usr/bin/env sh

# abort on errors
set -e

# Build the library
# yarn build

# Publish lib to npm
# npm publish

# Push new version to GitHub
# git add -A
# git commit -m 'Bumping version'
# git push -u origin-master https://github.com/phillipcurl/mise-en-place.git

# BUILD AND DEPLOY DOCS
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/phillipcurl/mise-en-place.git master:gh-pages

cd -