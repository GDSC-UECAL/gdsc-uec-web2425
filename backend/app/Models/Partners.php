<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Partners extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'logo',
        'link'
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($partner) {
            if ($partner->logo) {
                Storage::disk('public')->delete($partner->logo); 
            }
        });
    }
}
