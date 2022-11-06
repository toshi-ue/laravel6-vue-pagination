<!-- ## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT). -->

# Introduction

This is sample repository of pagination with vuejs-pagination.

## Requirements

|||
---------|----------|
macOS | BigSur |
PHP |8.0.x|
MySQL|5.7|
Laravel|6.x|

## Setup

Firstly cloning this repository, and execute bellow commands in terminal.

```bash
composer update;
composer install;
cp .env.example .env;
php artisan key:generate;
npm install --legacy-peer-deps;
```

Secondly, create a database and change `DB_DATABASE` in the `.env` file to the same name as the created database.

And you can start developing immediately by running the following command.

If you want to develop app with existing article table data, execute command `php artisan db:seed`.
## Operation check

Execute the following commands in the terminal in separate tabs.

```bash
php artisan serve;
```

```bash
npm run watch;
```

and access `localhost:8000` in Browser.

<!-- 
Ref:
[Laravel 6系でmake:authを使う方法 - Qiita](https://qiita.com/rei67/items/d6d0f5f6e58edbb17c09)
[Laravel6.xとvue.jsのVue RouterでSPA構築 | アールエフェクト](https://reffect.co.jp/laravel/laravel-vue-router-single-page-application#Laravel-2) -->
