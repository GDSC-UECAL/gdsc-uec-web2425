<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = ['title', 'description'];

    public function team()
    {
        return $this->hasOne(Teams::class);
    }

}
