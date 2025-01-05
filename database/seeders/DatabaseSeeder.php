<?php

namespace Database\Seeders;

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
        /*
            This is already created. No need to execute it again.
        */
        
        // Rooms::factory()->count(30)->create();
        // User::create(
        //     [
        //         "name"=> "Baba",
        //         "email"=> "baba@gmail.com",
        //         "password"=> "baba123",
        //     ]
        //     );
    }
}
