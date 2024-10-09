<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;

class Teams extends Model
{
    use CrudTrait;
    use HasFactory;

    protected $fillable = ['name', 'role', 'image', 'link', 'department_id'];

 
    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
