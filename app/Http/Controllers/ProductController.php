<?php

namespace App\Http\Controllers;

use App\Action\Product\GetProductDetails;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends Controller
{
    public function getProductsDetails(GetProductDetails $getProductDetails): JsonResponse
    {
        return response()->json($getProductDetails());
    }
}
