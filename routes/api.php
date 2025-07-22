<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminUserMiddlware;
use Illuminate\Support\Facades\Route;

Route::post('/sign-in', [UserController::class, 'userSignIn']);



Route::middleware(['auth:sanctum', AdminUserMiddlware::class])->group(function () {
    Route::get('/get-products-details', [ProductController::class,'getProductsDetails']);
});
