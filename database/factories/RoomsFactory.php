<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rooms>
 */
class RoomsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(),
            'description' => fake()->realText(),
            'state' => fake()->randomElement(['available', 'booked', 'not available']),
            'type' => fake()->randomElement(['studio', 'single', 'double', 'presidential']) ,
            'capacity' => fake()->randomDigitNotZero(),
            'price' => fake()->randomFloat(2, 10, 100),
        ];
    }
}
