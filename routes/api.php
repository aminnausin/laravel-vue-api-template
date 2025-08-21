<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\EmailController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\SessionController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:sanctum']], function () {
    // Auth
    Route::get('/user', fn(Request $request) => $request->user());
    Route::get('/auth', [AuthController::class, 'authenticate']);
    Route::delete('/logout', [AuthController::class, 'destroy']);

    Route::prefix('settings')->group(function () {
        // Account Settings
        Route::get('/sessions', [SessionController::class, 'index'])->name('sessions.list');
        Route::delete('/sessions', [SessionController::class, 'destroyOthers'])->name('sessions.destroyOthers');
        Route::delete('/account', [ProfileController::class, 'destroy'])->name('account.destroy');
        Route::put('/password', [PasswordController::class, 'update'])->name('password.update');
        Route::put('/email', [EmailController::class, 'update'])->name('email.update');
    });
});

// Auth
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register'])->middleware('throttle:6,1')->name('register');
Route::post('/recovery', [PasswordResetLinkController::class, 'store'])->name('password.recovery');
Route::post('/reset-password/{token}', [PasswordController::class, 'store'])->name('password.reset');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
