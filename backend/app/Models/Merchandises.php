<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

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

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($merchandise) {
            if ($merchandise->banner) {
                Storage::disk('public')->delete($merchandise->banner); 
            }
        });
    }

}
