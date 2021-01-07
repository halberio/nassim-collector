<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table("roles")
      ->insert([
        [
          "name" => "Super Admin",
          "color" => "red",
          "created_at" => \Carbon\Carbon::now(),
          "updated_at" => \Carbon\Carbon::now(),
        ],
        [
          "name" => "Debbo",
          "color" => "blue",
          "created_at" => \Carbon\Carbon::now(),
          "updated_at" => \Carbon\Carbon::now(),
        ],
        [
          "name" => "Dawarji",
          "color" => "pink",
          "created_at" => \Carbon\Carbon::now(),
          "updated_at" => \Carbon\Carbon::now(),
        ],
        [
          "name" => "Client",
          "color" => "yellow",
          "created_at" => \Carbon\Carbon::now(),
          "updated_at" => \Carbon\Carbon::now(),
        ],

      ]);
  }
}
