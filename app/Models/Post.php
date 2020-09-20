<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = "post";
    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo("\App\Models\User");
    }

    public function categories()
    {
        return $this->belongsToMany("\App\Models\Category");
    }
}
