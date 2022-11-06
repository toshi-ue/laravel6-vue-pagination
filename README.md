<!-- ## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT). -->
# My Laravel6 boilerplate

This is my boilerplate of Laravel 6.20.26( with MySQL 5.7).

## Introduction
<!-- 
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).
 -->

<!-- ## Preinstalled Packages

for Laravel
|||
|---------|----------|
| doctrine/dbal| 2.* | -->

## Requirements

|||
---------|----------|
macOS | BigSur |
PHP |8.0.x|
MySQL|5.7|

## Setup

TODO: vuexを追加する

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
