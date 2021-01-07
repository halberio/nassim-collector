<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\CatalogController;

Route::resource("catalogs", CatalogController::class);

Route::get("get-last-catalog", [CatalogController::class, 'getLastCatalog']);
