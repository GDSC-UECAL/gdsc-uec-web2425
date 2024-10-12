<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Carousel extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = [
        'title',
        'image'
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($carousel) {
            if ($carousel->image) {
                Storage::disk('public')->delete($carousel->image); 
            }
        });
    }
}
