<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReservationsRequest;
use App\Http\Requests\UpdateReservationsRequest;
use App\Http\Resources\ReservationsResource;
use App\Models\Reservations;

class ReservationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Reservations::query();

        $rooms = $query->paginate(10)->onEachSide(1);

        // All the information is going to be available on the frontend.
        // Do NOT pass sensitive information here. Because of Inertia

        return inertia('Reservations/Index', [
            'reservations' => ReservationsResource::collection($rooms),
            'flash' => [
                'success' => session('success')
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReservationsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Reservations $reservations)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservations $reservations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReservationsRequest $request, Reservations $reservations)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservations $reservations)
    {
        //
    }
}
