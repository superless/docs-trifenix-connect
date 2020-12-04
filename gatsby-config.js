/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const fs = require('fs');
const { readdirSync, statSync } = require('fs')
const { join } = require('path')

const path = require('path')

const globalNavFilePath = require.resolve('@adobe/gatsby-theme-aio/globalNav.json');
const globalNav = JSON.parse(fs.readFileSync(globalNavFilePath, 'utf8'));


const directory = `./src/pages/nuget-packages`
var nuget_packages = [];
const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());
const directoryPath = dirs(directory);
for (const key in directoryPath) {  
  const element = directoryPath[key];
  const menuPath = `${directory}/${element}/menu.json`;  
  const newpath = path.resolve(menuPath);  
  let jsn = JSON.parse(fs.readFileSync(newpath, 'utf8'));
  nuget_packages = [...nuget_packages, jsn];
}

globalNav.menus = [];
globalNav.console = false;
globalNav.home.title = 'Connect'
globalNav.footer = {};
module.exports = {
  siteMetadata: {
    globalNav,
    versions: [
      {
        title: 'v0.1' 
      }
    ],
    pages: [
      {
        title: 'Trifenix Connect',
        path: '/'
      },
      {
        title: 'backend C# packs',
        path :'/nuget-packages/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
    ],
    subPages: [...nuget_packages]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/dev-site-documentation-template/'
};
console.log(module.exports);