# Настройка Webpack под React проект без CSS, SSR, HMR

>Установка React /не имеет отношения к настройке сборщика/
>Источник инф.
>https://reactjs.org/
>https://github.com/facebook/react
>https://www.npmjs.com/package/react
>
>`npm i react`
>
>и react-dom
>Источник инф.
>https://www.npmjs.com/package/react-dom
>
>`npm install react-dom`
>
> вместе
>
>`npm install react react-dom`
>
---

>Установка TS /не имеет отношения к настройке сборщика/
>Источник инф.
>https://www.typescriptlang.org/download
>https://www.npmjs.com/package/typescript
>    ```
>        npm install typescript --save-dev
>    ```
>Конфигурация TS
>Создание конфигурационного файла typescript - tsconfig.json
>
> `tsc --init`
>
>





## Установка пакета Webpack
Источник инф.
https://webpack.js.org/guides/getting-started/

    ```
        npm install webpack webpack-cli --save-dev
    ```
---

## Установка ts-loader

Источник инф.
https://github.com/TypeStrong/ts-loader

    ```
        npm install ts-loader --save-dev
    ```

Вместе
    ```
        npm i -D typescript ts-loader
    ```

====

Для настройки Webpack существует файл, в корне проекта webpack.config.js - создается вручную

https://webpack.js.org/guides/getting-started/#using-a-configuration



Хорошая статья для понимания переменных окружения в node.js

https://medium.com/@hydrock/%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8-node-js-e9ca2131e6b6



===

Для того, чтобы dist создать html бандл собраный из html модулей и вставить скрипт js бандла воспользуемся

HtmlWebpackPlugin - https://webpack.js.org/plugins/html-webpack-plugin/



npm install --save-dev html-webpack-plugin

Конфигурация

https://github.com/jantimon/html-webpack-plugin#options

док-ция по свойству template

https://github.com/jantimon/html-webpack-plugin/blob/main/docs/template-option.md





====

Написание скриптов для запуска различных конфигураций webpack

Используем свойство scripts в package.json

  "scripts": {

    "build:dev": "env NODE_ENV=development webpack --config webpack.config.js",

    "build:prod": "env NODE_ENV=production webpack --config webpack.config.js",

    "test": "echo \"Error: no test specified\" && exit 1"

  },

  "scriptsComments": {

    "build:dev": "Сначала при выполнении скрипта переменной NODE_ENV присвоится значение development, потом вызов webpack с файлом конфигурации webpack.config.js"

  },





====

Установка devServer

https://webpack.js.org/configuration/dev-server/

Использование

https://webpack.js.org/guides/development/#using-webpack-dev-server



https://github.com/webpack/webpack-dev-server



https://webpack.js.org/api/webpack-dev-server/

св-во hot

https://webpack.js.org/configuration/dev-server/#devserverhot



св-во open

https://webpack.js.org/configuration/dev-server/#devserveropen

Чтобы открыть хром

 open: {
      app: {
        name: 'google-chrome',
      },
    },



св-во port

https://webpack.js.org/configuration/dev-server/#devserverport



установка пакета

npm install webpack-dev-server --save-dev



====

devtool - создает source-map

https://webpack.js.org/configuration/devtool/
