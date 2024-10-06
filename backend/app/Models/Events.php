<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Speakers;

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
}
