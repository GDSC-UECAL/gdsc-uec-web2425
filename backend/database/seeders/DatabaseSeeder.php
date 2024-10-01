<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Teams;
use App\Models\Partners;
use App\Models\Carousel;
use App\Models\Products;
use App\Models\Events;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Teams::factory(10)->create();
        Partners::factory(10)->create();
        Products::factory(10)->create();
        Carousel::factory(10)->create();
        Events::factory(10)->create();
    }
}
