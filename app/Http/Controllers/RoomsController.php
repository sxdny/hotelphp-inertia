<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRoomsRequest;
use App\Http\Requests\UpdateRoomsRequest;
use App\Http\Resources\RoomsResource;
use App\Models\Room;

class RoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $query = Room::query();

        $rooms = $query->paginate(10)->onEachSide(1);

        // All the information is going to be available on the frontend.
        // Do NOT pass sensitive information here. Because of Inertia

        return inertia('Rooms/Index', [
            'rooms' => RoomsResource::collection($rooms),
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
        return inertia('Rooms/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoomsRequest $request)
    {
        $data = $request->validated();
        
        // once the data is validated, we create the new room
        if(Room::create($data)) {
            return to_route('rooms.index')->with('success', 'The room was created succesfully!');
        } else {
            return back()->with('error','There was an error creating the room...');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Room $room)
    {
        return inertia('Rooms/Show', [
            'room' => $room
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Room $room)
    {
        return inertia('Rooms/Edit', [
            'room' => $room
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoomsRequest $request, Room $room)
    {
        $data = $request->validated();

        // Change the values of room
        $room->name = $data['name'];
        $room->description = $data['description'];
        $room->state = $data['state'];
        $room->type = $data['type'];
        $room->capacity = $data['capacity'];
        $room->price = $data['price'];

        if ($room->save($data)) {
            return redirect()->route('rooms.index')->with('success','The room was updated succesfully!');
        }
        else {
            return back()->with('error','There was an error...');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Room $room)
    {
        if($room->delete()) {
            return to_route('rooms.index')->with('success', 'Room was removed succesfully!');
        } else {
            return redirect()->back()->with('error', 'There was an error...');
        }
    }
}
