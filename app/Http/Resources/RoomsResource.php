<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoomsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // Information that we are passing to the browser.
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'state' => $this->state,
            'type' => $this->type,
            'capacity' => $this->capacity,
            'image_url' => $this->image_url,
            'price' => $this->price,
            'created_at' => (new Carbon($this->create_at))->format('d-m-Y'),
            'updated_at'=> (new Carbon($this->update_at))->format('d-m-Y'),
        ];
    }
}
