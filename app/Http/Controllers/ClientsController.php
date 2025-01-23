<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientsRequest;
use App\Http\Requests\UpdateClientsRequest;
use App\Http\Resources\ClientsResource;
use App\Models\Clients;
use Illuminate\Support\Facades\Storage;

class ClientsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Clients::query();

        $clients = $query->paginate(10)->onEachSide(1);

        // All the information is going to be available on the frontend.
        // Do NOT pass sensitive information here. Because of Inertia

        return inertia('Clients/Index', [
            'clients' => ClientsResource::collection($clients),
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
        return inertia('Clients/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientsRequest $request)
    {
        $data = $request->validated();

        $path = $request->file('img_url')->store('public/images');

        $data['img_url'] = $path;

        // once the data is validated, we create the new room
        if (Clients::create($data)) {
            return to_route('clients.index')->with('success', 'The client was created succesfully!');
        } else {
            return back()->with('error', 'There was an error creating the client...');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Clients $client)
    {

        $avatar_url = Storage::disk('s3')->temporaryUrl(
            $client->img_url,
            now()->addMinutes(5)
        );

        return inertia('Clients/Show', [
            'client' => $client,
            'avatar_url' => $avatar_url
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Clients $client)
    {
        return inertia('Clients/Edit', [
            'client' => $client
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientsRequest $request, Clients $client)
    {
        $data = $request->validated();

        // Change the values of room
        $client->name = $data['name'];
        $client->surname = $data['surname'];
        $client->email = $data['email'];
        $client->phone_number = $data['phone_number'];

        if ($client->save($data)) {
            return redirect()->route('clients.index')->with('success', 'The Client was updated succesfully!');
        } else {
            return back()->with('error', 'There was an error...');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Clients $client)
    {
        if ($client->delete()) {
            return to_route('clients.index')->with('success', 'Client was deleted succesfully!');
        } else {
            return redirect()->back()->with('error', 'There was an error...');
        }
    }
}
