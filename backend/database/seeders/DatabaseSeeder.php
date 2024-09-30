<?php

namespace Database\Seeders;


use App\Models\User;
use App\Models\Events;
use App\Models\Teams;
use App\Models\Products;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Events::factory(10)->create();
        Teams::factory(10)->create();
        Products::factory(10)->create();
    }
}
