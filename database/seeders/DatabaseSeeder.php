<?php

namespace Database\Seeders;

use App\Models\Clients;
use App\Models\User;
use App\Models\Rooms;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::create([
        //     'name' => 'Sidney Silva',
        //     'email' => 'sidneysbo@icloud.com',
        //     'password' => bcrypt('sidney123'),
        //     'role' => 'admin'
        // ]);
        User::create([
            'name' => 'Usuario Normal',
            'email' => 'usuarionormal@icloud.com',
            'password' => bcrypt('usuarionormal123'),
            'role' => 'user'
        ]);
        // Clients::factory()->count(30)->create();
    }
}
