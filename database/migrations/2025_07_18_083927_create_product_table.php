<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
$table->string('product_name');
$table->text('product_description');
$table->decimal('product_price', 10, 2);
$table->integer('product_qty');
$table->timestamps();
};
