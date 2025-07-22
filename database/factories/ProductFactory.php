<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_name'        => fake()->word(),
            'product_description' => fake()->sentence(),
            'product_price'       => fake()->randomFloat(2, 1, 1000),
            'product_qty'         => fake()->numberBetween(0, 100),
            'created_at'          => now(),
            'updated_at'          => now(),

        ];
    }
}
