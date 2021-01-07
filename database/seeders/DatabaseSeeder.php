<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    DB::table("providers")
      ->insert([
        "name" => "Admin",
        "password" => bcrypt("adminadmin"),
        "email" => "4yech.hamza@gmail.com",
      ]);
//    $this->call(RolesPermissionsSeeder::class);
//    $this->call(RolesSeeder::class);
//    $this->call(StatusSeeder::class);
//    $this->call(UsersSeeder::class);
  }
}
