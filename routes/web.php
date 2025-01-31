<?php

use App\Http\Controllers\ClientsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationsController;
use App\Http\Controllers\RoomsController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Welcome'))
        ->name('welcome');

// group all the routes inside the middleware
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))
        ->name('dashboard');
    

    // Admin routes
    Route::resource('clients', ClientsController::class)->middleware(AdminMiddleware::class.':admin');
    Route::resource('rooms', RoomsController::class)->middleware(AdminMiddleware::class.':admin');
    Route::resource('reservations', ReservationsController::class)->middleware(AdminMiddleware::class.':admin');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
