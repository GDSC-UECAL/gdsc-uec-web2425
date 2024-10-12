<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Events;
use Illuminate\Support\Facades\Storage;

class Speakers extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = [
        'events_id',
        'name', 
        'role', 
        'image',
    ];

    public function event()
    {
        return $this->belongsTo(Events::class);
    }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($speaker) {
            if ($speaker->image) {
                Storage::disk('public')->delete($speaker->image); 
            }
        });
    }
}
