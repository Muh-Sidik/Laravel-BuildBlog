<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{

    public function __construct() {

        Inertia::setRootView('blog');
        
    }

    public function index()
    {
        $posts = Post::with('user:id,name,email')->with('categories:name_category,slug')->get();

        return Inertia::render("Blog/Index", ['posts' => $posts]);
    }
}
