<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Merchandises>
 */
class MerchandisesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title"=>fake()->sentence(),
            "date"=>fake()->date(),
            "description"=>fake()->sentence(),
            "price"=>fake()->randomFloat(2, 10, 1000),
            "banner"=>fake()->sentence()
        ];
    }
}
