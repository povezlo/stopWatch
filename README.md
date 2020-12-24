# Secundamer
Задача тест на проверку знаний Angular 2+, умения пользоваться библиотекой RxJs, знание реактивного программирования и алгоритмов и шаблонов проектирования.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.
##
Angular 2+

Реализовать секундомер, который подсчитывает время в формате «HH: MM: SS»

Таймер должен иметь следующие кнопки:
* «Start / Stop» - запуск / остановка отсчета времени, останавливает и обнуляет значение таймера.
* «Wait» - работает на двойной клик (время между нажатиями не более 300 мс!) таймер должен прекратить отсчет времени; 
если после него нажать старт, то возобновляется отсчет.
* «Reset» - сброс таймера на 0.  Обнуляет таймер и снова начинает отсчет.

Требования:

 - используйте Observables в коде
 - RxJS подход
 - функциональный подход
 - нам важнее всего увидеть Ваше умение писать код
- 300млс – это не DoubleClick

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
