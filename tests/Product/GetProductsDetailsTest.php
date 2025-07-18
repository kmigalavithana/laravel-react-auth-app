<?php

namespace Tests\Product;


use App\Models\Product;
use Tests\TestCase;

class GetProductsDetailsTest extends TestCase
{
    public function test_get_all_products_details()
    {
      $product = Product::factory()->create();

      dd($product);
    }

}
