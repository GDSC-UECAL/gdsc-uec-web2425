<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Products>
 */
class ProductsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=> fake()->sentence(),
            'date'=> fake()->date(),
            'description'=> fake()->sentence(),
            'contributor'=> fake()->sentence(),
            'banner'=> fake()->sentence(),
            'link'=> fake()->sentence(),
        ];
    }
}
