<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:sanctum']], function () {
    // Auth
    Route::get('/user', fn(Request $request) => $request->user());
    Route::get('/auth', [AuthController::class, 'authenticate']);
    Route::delete('/logout', [AuthController::class, 'destroy']);
});

// Auth
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register'])->middleware('throttle:6,1')->name('register');
Route::post('/recovery', [PasswordResetLinkController::class, 'store'])->name('password.recovery');
Route::post('/reset-password/{token}', [PasswordController::class, 'store'])->name('password.reset');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
