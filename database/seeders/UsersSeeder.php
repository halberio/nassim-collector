<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table("users")
      ->insert([
        "email" => "4yech.hamza@gmail.com",
        "password" => bcrypt("adminadmin"),
        "register_date" => Carbon::now(),
      ]);
  }
}
