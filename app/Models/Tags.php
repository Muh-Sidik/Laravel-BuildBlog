<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    use HasFactory;

    protected $table = "tag";
    protected $guarded = ["id"];

    public function posts()
    {
        return $this->morphedByMany("\App\Models\Post", "taggable");
    }

    public function galleries()
    {
        return $this->morphedByMany("\App\Models\Gallery", "taggable");
    }
}
