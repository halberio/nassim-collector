<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table("status")->insert([
      [
        "name" => "En cours",
        "description" => "En cours",
      ],
      [
        "name" => "Annulé",
        "description" => "Annulé",
      ],
      [
        "name" => "Terminé",
        "description" => "Terminé",
      ],
      [
        "name" => "En attente",
        "description" => "En attente",
      ],
    ]);
  }
}
