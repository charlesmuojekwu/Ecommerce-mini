<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;

class CategoryProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = Category::all();
        Product::all()->each(function ($product) use ($categories) {
            $product->categories()->attach(
                $categories->random(2)->pluck('id')->toArray()
            );
        });
    }
}
