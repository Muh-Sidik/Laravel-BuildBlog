<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CategoryPost extends Migration{

    public function up(){
        Schema::create('category_post', function (Blueprint $table) {
            $table->foreignId("post_id")->constrained('post');
            $table->foreignId("category_id")->constrained('category');
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('category_post');
    }
}
