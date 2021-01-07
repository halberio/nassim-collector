<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesPermissionsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table("roles_permissions")
      ->insert([
        [
          "role_id" => 1,

          "users_create" => 1,
          "users_read" => 1,
          "users_update" =>1,
          "users_delete" => 1,

          "providers_create" => 1,
          "providers_read" => 1,
          "providers_update" => 1,
          "providers_delete" => 1,

          "clients_create" => 1,
          "clients_read" => 1,
          "clients_update" => 1,
          "clients_delete" => 1,

          "delivery_men_create" => 1,
          "delivery_men_read" => 1,
          "delivery_men_update" => 1,
          "delivery_men_delete" => 1,

          "products_create" => 1,
          "products_read" => 1,
          "products_update" => 1,
          "products_delete" => 1,

          "categories_create" => 1,
          "categories_read" => 1,
          "categories_update" => 1,
          "categories_delete" => 1,

          "orders_create" => 1,
          "orders_read" => 1,
          "orders_update" => 1,
          "orders_delete" => 1,

          "status_create" => 1,
          "status_read" => 1,
          "status_update" => 1,
          "status_delete" => 1,
        ],
        [
          "role_id" => 2,

          "users_create" => 0,
          "users_read" => 1,
          "users_update" => 0,
          "users_delete" => 0,

          "providers_create" => 0,
          "providers_read" => 1,
          "providers_update" => 0,
          "providers_delete" => 0,

          "clients_create" => 0,
          "clients_read" => 1,
          "clients_update" => 0,
          "clients_delete" => 0,

          "delivery_men_create" => 0,
          "delivery_men_read" => 1,
          "delivery_men_update" => 0,
          "delivery_men_delete" => 0,

          "products_create" => 0,
          "products_read" => 1,
          "products_update" => 0,
          "products_delete" => 0,

          "categories_create" => 0,
          "categories_read" => 1,
          "categories_update" => 0,
          "categories_delete" => 0,

          "orders_create" => 0,
          "orders_read" => 1,
          "orders_update" => 0,
          "orders_delete" => 0,

          "status_create" => 0,
          "status_read" => 1,
          "status_update" => 0,
          "status_delete" => 0,
        ],
        [
          "role_id" => 3,

          "users_create" => 0,
          "users_read" => 1,
          "users_update" => 0,
          "users_delete" => 0,

          "providers_create" => 0,
          "providers_read" => 1,
          "providers_update" => 0,
          "providers_delete" => 0,

          "clients_create" => 0,
          "clients_read" => 1,
          "clients_update" => 0,
          "clients_delete" => 0,

          "delivery_men_create" => 0,
          "delivery_men_read" => 1,
          "delivery_men_update" => 0,
          "delivery_men_delete" => 0,

          "products_create" => 0,
          "products_read" => 1,
          "products_update" => 0,
          "products_delete" => 0,

          "categories_create" => 0,
          "categories_read" => 1,
          "categories_update" => 0,
          "categories_delete" => 0,

          "orders_create" => 0,
          "orders_read" => 1,
          "orders_update" => 0,
          "orders_delete" => 0,

          "status_create" => 0,
          "status_read" => 1,
          "status_update" => 0,
          "status_delete" => 0,
        ],
        [
          "role_id" => 4,

          "users_create" => 0,
          "users_read" => 1,
          "users_update" => 0,
          "users_delete" => 0,

          "providers_create" => 0,
          "providers_read" => 1,
          "providers_update" => 0,
          "providers_delete" => 0,

          "clients_create" => 0,
          "clients_read" => 1,
          "clients_update" => 0,
          "clients_delete" => 0,

          "delivery_men_create" => 0,
          "delivery_men_read" => 1,
          "delivery_men_update" => 0,
          "delivery_men_delete" => 0,

          "products_create" => 0,
          "products_read" => 1,
          "products_update" => 0,
          "products_delete" => 0,

          "categories_create" => 0,
          "categories_read" => 1,
          "categories_update" => 0,
          "categories_delete" => 0,

          "orders_create" => 0,
          "orders_read" => 1,
          "orders_update" => 0,
          "orders_delete" => 0,

          "status_create" => 0,
          "status_read" => 1,
          "status_update" => 0,
          "status_delete" => 0,
        ],
      ]);
  }
}
