<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientsRequest;
use App\Http\Requests\UpdateClientsRequest;
use App\Http\Resources\ClientsResource;
use App\Models\Clients;

class ClientsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Clients::query();

        $rooms = $query->paginate(10)->onEachSide(1);

        // All the information is going to be available on the frontend.
        // Do NOT pass sensitive information here. Because of Inertia

        return inertia('Clients/Index', [
            'rooms' => ClientsResource::collection($rooms),
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
    public function store(StoreClientsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Clients $clients)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Clients $clients)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientsRequest $request, Clients $clients)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Clients $clients)
    {
        //
    }
}
