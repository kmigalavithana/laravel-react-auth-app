<?php

namespace Tests\Product;


use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class GetProductsDetailsTest extends TestCase
{
    use RefreshDatabase;
    public function test_get_all_products_details()
    {
      $product = Product::factory()->create();

      $response = $this->get('api/get-products-details');

        $response->assertStatus(200);
      $response->assertJsonStructure([
          'status',
          'product_details'
      ]);

      $response->assertJson([
          'status' => Response::HTTP_OK,
          'product_details' => [
              [
                  'id' => $product->id,
                  'product_name' => $product->product_name,
                  'product_description' => $product->product_description,
                  'product_price'=> $product->product_price,
                  'product_qty' => $product->product_qty,
              ]
          ]
      ]);

    }

}
