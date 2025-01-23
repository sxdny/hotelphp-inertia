<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clients extends Model
{
    /** @use HasFactory<\Database\Factories\ClientsFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'surname',
        'username',
        'password',
        'phone_number',
        'email',
        'reservation_id',
        'img_url'
    ];
}
