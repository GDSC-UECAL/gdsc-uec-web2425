<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Merchandises extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = [
        'title', 
        'date', 
        'description', 
        'price',
        'banner',
    ];

}
