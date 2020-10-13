<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = "post";
    protected $guarded = ['id'];

    public const DRAFT = 0;
    public const ACTIVE = 1;
    public const INACTIVE = 2;

    public const POST = 'Post';
    public const PAGE = 'Page';

    public const STATUSES = [
        self::DRAFT => 'draft',
        self::ACTIVE => 'active',
        self::INACTIVE => 'inactive',
    ];

    public function user()
    {
        return $this->belongsTo("\App\Models\User");
    }

    public function categories()
    {
        return $this->belongsToMany("\App\Models\Category");
    }

    public function images()
    {
        return $this->morphMany("\App\Models\Image", "imageable");
    }

    public function tags()
    {
        return $this->morphToMany("\App\Models\Tags", "taggable");
    }

    public function scopeActivePost($query)
    {
        return $query->where('status', self::ACTIVE)
                    ->where('post_type', self::POST)
                    ->where('published_at', '<=', Carbon::now());
    }
}
