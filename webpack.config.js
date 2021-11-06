const path = require('path'); //служит для преобразования относительного пути в абсолютный
const HtmlWebpackPlugin = require('html-webpack-plugin');


const NODE_ENV = process.env.NODE_ENV; //Читаем из переменных окружения node.js - объект process.env значение свойства NODE_ENV в которое предварительно должны записать режим сборки - это предусмотрели в секции scripts файла package.json

const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtools() {  // Функция возвращает настройку devtool в зависимости от режима сборки
  if (IS_DEV) return 'eval'; // если dev - настройка eval
  if (IS_PROD) return false; // если prod - source maps не нужны
}

module.exports = {
  resolve: { // в этом объекте указывается какие файлы будет обрабатывать webpack
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], //это свойство указывает раcширение файлов которые будут обрабатываться
  },

  mode: NODE_ENV ? NODE_ENV : 'development', // режим сборки. если в переменную окружения NODE_ENV записали режим - используем его, нет - режим по умолчанию в данном случае development

  entry: path.resolve(__dirname, './src/index.jsx'),  //указываем входящий файл проекта

  output: { // выходной бандл
    filename: 'index.js', // название файла
    path: path.resolve(__dirname, 'dist'), // место его размещения
  },

  module: { //в этом объекте описываeм как будут обрабатываться различные типы модулей webpack в рамках проекта
    rules: [ //массив правил которые соответствуют запросам при создании модулей. Могут изменять способ создания модуля.
      { // объект может состоять из частей conditions, results, nested rules
        test: /\.[tj]sx?$/,  //свойство Rule.test включит все модули, которые соответствуют условиям, записанным в его значении. В данном случае используются регулярное выражение
        use: ['ts-loader'], //свойство Rule.use массив или функция. Массив должен содержать строку загрузчика. Это шорткат, который соответствует настройкам применяемым в правиле загрузчикам
      }
    ]
  },

  plugins: [ // массив подключенных плагинов
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }) // св-во template указывает откуда брать шаблон для дальнейшего преобразования в бандл
  ],

  devServer: {  // конфигурация devServer
    port: 3000, // порт который будет открыт для сервера
    // open: true, // будет ли открыт браузер и передан ему URL, если true - открывается браузер по умолчанию
    open: { // открываем браузеры отличные от назначенного по умолчанию
      app: {
        name: 'chrome',
        // name: 'firefox',
        // name: 'msedge',
      },
    },
    hot: IS_DEV, // будет ли обновляться страница при изменении файлов проекта (в нашем случае development)
  },

  devtool: setupDevtools(), // должен получить строку с настройкой, рекомендуют 'eval', или false - если source-maps не нужны

};
