<?php

use App\Http\Controllers\Api\V1\ProductsController;
use App\Http\Controllers\Api\V1\PartnersController;
use App\Http\Controllers\Api\V1\CarouselController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (){
    Route::apiResource('products', ProductsController::class);
    Route::apiResource('partners', PartnersController::class);
    Route::apiResource('carousel', CarouselController::class);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
