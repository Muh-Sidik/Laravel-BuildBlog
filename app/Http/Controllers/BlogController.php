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
        $title = "My Blog";

        $posts = Post::activePost()
                ->with('user:id,name,email')
                ->with('categories:name_category,slug')
                ->get();

        return Inertia::render("Blog/Index", ['posts' => $posts])->withViewData(["title" => $title]);
    }

    public function show($slug)
    {
        $post = Post::with("user:id,name")
                ->with("categories:name_category,slug")
                ->where('slug', $slug)
                ->firstOrFail();

        return Inertia::render("Blog/Show", ['post' => $post])->withViewData(["title" => $post->title]);
    }

    
}
