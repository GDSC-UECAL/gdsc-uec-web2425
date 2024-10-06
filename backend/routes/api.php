<?php

use App\Http\Controllers\Api\V1\TeamsController;
use App\Http\Controllers\Api\V1\ProductsController;
use App\Http\Controllers\Api\V1\PartnersController;
use App\Http\Controllers\Api\V1\CarouselController;
use App\Http\Controllers\Api\V1\EventsController;
use App\Http\Controllers\Api\V1\DepartmentController;
use App\Http\Controllers\Api\V1\MerchandisesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (){
    Route::apiResource('teams', TeamsController::class);
    Route::apiResource('products', ProductsController::class);
    Route::apiResource('partners', PartnersController::class);
    Route::apiResource('carousel', CarouselController::class);
    Route::apiResource('events', EventsController::class);
    Route::apiResource('departments', DepartmentController::class);
    Route::apiResource('merchandises', MerchandisesController::class);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
