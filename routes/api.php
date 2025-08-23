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

    /**
     * Inertia template routes
     *
     * Route::get('verify-email', EmailVerificationPromptController::class)
     *     ->name('verification.notice');
     *
     * Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
     *     ->middleware(['signed', 'throttle:6,1'])
     *     ->name('verification.verify');
     *
     * Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
     *     ->middleware('throttle:6,1')
     *     ->name('verification.send');
     */
});

// Auth
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register'])->middleware('throttle:6,1')->name('register');
Route::post('/recovery', [PasswordResetLinkController::class, 'store'])->name('password.recovery');
Route::post('/reset-password/{token}', [PasswordController::class, 'store'])->name('password.reset');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// The way the Inertia template does it is separate each group into a file so like settings.php for all the /settings/ routes
// And then include them with a require __DIR__ . '/settings.php'; into the root file so web.php for inertia or api.php for me
