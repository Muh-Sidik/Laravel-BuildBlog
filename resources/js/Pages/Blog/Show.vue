<template>
    <blog-layout>
        <article>
            <div class="content">
                <div class="container">
                    <div class="row">
                    <!--======= POST SECTION =========-->
                        <div class="col-md-8">
                            <div class="post-section single-post">

                                <!--======= BLOG ROW =========-->
                                <ul class="row">

                                <!--======= BLOG POST =========-->
                                    <li class="col-sm-12">
                                        <article>
                                            <div class="img-post"> <img class="img-responsive" src="images/img-8-1.jpg" alt="" > </div>
                                                <div class="style-up">

                                                    <!-- Content -->
                                                    <aside> <span class="post-tags">
                                                            <template v-for="(category, index) in post.categories">
                                                                <template v-if="index > 0">, </template>
                                                                <inertia-link :href="`/category/${category.slug}`" :key="category.slug">{{ category.name_category }}</inertia-link>
                                                            </template>
                                                            <span class="like"> 5<i class="fa fa-heart-o"></i></span> </span>
                                                        <!-- Tittle -->
                                                        <h2><inertia-link :href="`/${post.slug}`">{{ post.title }}</inertia-link></h2>
                                                        <span class="post-tags">{{ post.user.name }}, {{ post.published_at }}</span>

                                                            <!-- details -->
                                                            <p>{{ post.body }}</p>

                                            <!--======= POST IN IMAGES =========-->
                                            <!-- <div class="post-in">
                                                <ul class="row"> -->

                                                <!--======= IMAGE 1 =========-->
                                                <!-- <li class="col-sm-6"> <img class="img-responsive none-scals" src="images/img-8-1-1.jpg" alt="" > </li> -->
                                                <!--======= IMAGE 2 =========-->
                                                <!-- <li class="col-sm-6"> <img class="img-responsive" src="images/img-8-1-2.jpg" alt="" > </li> -->
                                                <!--======= IMAGE 3 =========-->
                                                <!-- <li class="col-sm-12"> <img class="img-responsive" src="images/img-8-1-3.jpg" alt="" > </li> -->
                                                <!-- </ul> -->
                                            <!-- </div> -->

                                                    <!--======= SOCIAL SHARES ICONS =========-->
                                                    <div class="share-social">
                                                        <!--======= SOCIAL ICONS =========-->
                                                        <ul class="social_icons">
                                                        <li><i class="fa fa-share-alt share-i"></i></li>
                                                        <li class="facebook"><a href="#."><i class="fa fa-facebook"></i> </a></li>
                                                        <li class="twitter"><a href="#."><i class="fa fa-twitter"></i> </a></li>
                                                        <li class="dribbble"><a href="#."><i class="fa fa-dribbble"></i> </a></li>
                                                        <li class="pinterest"><a href="#."><i class="fa fa-pinterest"></i> </a></li>
                                                        <li class="linkedin"><a href="#."><i class="fa fa-linkedin"></i> </a></li>
                                                        </ul>
                                                    </div>
                                                </aside>
                                            </div>
                                        </article>
                                    </li>
                                </ul>

                                <!--=======  PREVIS POST =========-->
                                <div class="pre-next-post">
                                    <ul class="row">

                                        <!--=======  PREVIS POST =========-->
                                        <li class="col-sm-6">
                                        <div class="row">
                                            <div class="col-xs-2"> <i class="fa fa-angle-left"></i> </div>
                                            <div class="col-xs-10"> <span>Previous Post</span> <inertia-link v-if="prevPost" :href="`/${prevPost.slug}`">{{ prevPost.title }}</inertia-link> </div>
                                        </div>
                                        </li>

                                        <!--=======  NEXT POST =========-->
                                        <li class="col-sm-6">
                                        <div class="row">
                                            <div class="col-xs-10"> <span>Next Post</span> <inertia-link v-if="nextPost" :href="`/${nextPost.slug}`">{{ nextPost.title }}</inertia-link> </div>
                                            <div class="col-xs-2"> <i class="fa fa-angle-right"></i> </div>
                                        </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--======= POST SECTION END =========-->
                    </div>
                </div>
            </div>
        </article>
    </blog-layout>
</template>

<script>
    import BlogLayout from './../../Layouts/BlogLayout'

    export default {
        props: ['post', 'nextPost', 'prevPost'],
        components: {
            BlogLayout,
        },
    }
</script>
