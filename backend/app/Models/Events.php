<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Speakers;
use Illuminate\Support\Facades\Storage;

class Events extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = [
        'title', 
        'date', 
        'description', 
        'location', 
        'banner',
    ];

    public function speakers()
    {
        return $this->hasMany(Speakers::class); 
    }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($event) {
            if ($event->banner) {
                Storage::disk('public')->delete($event->banner); 
            }
        });
    }
}
