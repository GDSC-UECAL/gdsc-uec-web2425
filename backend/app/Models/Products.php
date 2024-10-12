<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Products extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = [
        'title', 
        'date', 
        'description', 
        'contributor', 
        'banner',
        'link'
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($product) {
            if ($product->banner) {
                Storage::disk('public')->delete($product->banner); 
            }
        });
    }
}
