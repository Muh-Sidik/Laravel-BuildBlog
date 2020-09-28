<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $table = "gallery";
    protected $guarded = ['id'];

    public function images()
    {
        return $this->morphMany("\App\Models\Image", "imageable");
    }

    public function tags()
    {
        return $this->morphToMany("\App\Models\Tags", "taggable");
    }
}
