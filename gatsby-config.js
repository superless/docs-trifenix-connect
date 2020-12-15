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

// Creamos repositorios para paquetes.
const directory_nugets = `./src/pages/nuget-packages`
const directoryModels = `./src/pages/models`
// paquetes nuget
var nuget_packages = [];

// modelos (incluye nuget y npm)
var models = [];

// functión para obtener la ruta de ub directorio.
const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());

// ruta de nugets
const directoryPath = dirs(directory_nugets);

// ruta de modelos
const directoryModelPath = dirs(directoryModels);

// recorremos cada carpeta dentro del modelo (cada carpeta es un componente)
for (const key in directoryModelPath) {  
  // nombre de la carpeta
  const element = directoryModelPath[key];

  // ruta relativa de menu.json
  const menuPath = `${directoryModels}/${element}/menu.json`;  

  // ruta absoluta
  const newpath = path.resolve(menuPath);  

  // obteniendo json
  let jsn = JSON.parse(fs.readFileSync(newpath, 'utf8'));

  // añadiendo el nuevo json al modelo
  models = [...models, jsn];
}

// TODO: hacer función
for (const key in directoryPath) {  
  const element = directoryPath[key];
  const menuPath = `${directory_nugets}/${element}/menu.json`;  
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
    // versions: [
    //   {
    //     title: 'v0.1' 
    //   }
    // ],
    pages: [
      {
        title: 'Get Started',
        path: '/'
      },
      {
        title: 'backend C# packs',
        path :'/nuget-packages/'
      },
      {
        title: 'Models',
        path: '/models/'
      }
    ],
    subPages: [...nuget_packages, ...models]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  flags: {PRESERVE_WEBPACK_CACHE : false},
  pathPrefix: process.env.PATH_PREFIX || '/dev-site-documentation-template/'
};
