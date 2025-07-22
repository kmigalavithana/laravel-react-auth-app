<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/sign-in', [UserController::class, 'userSignIn']);

Route::get('/get-products-details', [ProductController::class,'getProductsDetails']);
