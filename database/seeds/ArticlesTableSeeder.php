<?php

use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $i = 1;
        while ($i <= 30) {
            DB::table('articles')->insert([
                [
                    'title' => 'タイトル' . $i,
                    'body' => '内容' . $i,
                    'created_at' => new DateTime(),
                    'updated_at' => new DateTime(),
                ],
            ]);
            $i++;
        }
    }
}
