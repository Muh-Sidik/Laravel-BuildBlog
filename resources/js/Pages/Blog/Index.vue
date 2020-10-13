<template>
    <blog-layout>
        <article v-for="post in posts" :key="post.id">
            <div class="img-post"> <img class="img-responsive" src="images/img-8-2.jpg" alt="" > </div>
                <div class="style-up">

                <!-- Content -->
                <aside> <span class="post-tags">
                    <template v-for="(category, index) in post.categories">
                        <template v-if="index > 0">, </template>
                        <inertia-link :href="`/category/${category.slug}`" :key="category.slug">{{ category.name_category }}</inertia-link>
                    </template>
                    <span class="like"> 5<i class="fa fa-heart-o"></i></span>
                    </span>
                    <!-- Tittle -->
                    <h2><inertia-link :href="`/${post.slug}`">{{ post.title }}</inertia-link></h2>
                    <span class="post-tags">by {{ post.user.name }}, {{ post.published_at }}</span>

                    <!-- details -->
                    <p>{{ post.body }}</p>

                    <!--======= POST IN IMAGES =========-->
                    <div class="post-in">
                        <ul class="row">

                            <!--======= IMAGE 1 =========-->
                            <li class="col-sm-6"> <img class="img-responsive none-scals" src="images/img-8-2-1.jpg" alt="" > </li>
                            <!--======= IMAGE 3 =========-->
                            <li class="col-sm-6">
                                <h5>Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. </h5>
                                <p>Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.<br>
                                    <br>
                                    Suspendisse mauris. Fusce accumsan mollis eros.
                                    Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. </p>
                            </li>
                        </ul>
                    </div>

                    <!--======= SOCIAL SHARES ICONS =========-->
                    <div class="share-social"> <i class="fa fa-share-alt"></i>
                    <!--======= SOCIAL ICONS =========-->
                        <ul class="social_icons">
                            <li class="facebook"><a href="#."><i class="fa fa-facebook"></i> </a></li>
                            <li class="twitter"><a href="#."><i class="fa fa-twitter"></i> </a></li>
                            <li class="dribbble"><a href="#."><i class="fa fa-dribbble"></i> </a></li>
                            <li class="pinterest"><a href="#."><i class="fa fa-pinterest"></i> </a></li>
                            <li class="linkedin"><a href="#."><i class="fa fa-linkedin"></i> </a></li>
                        </ul>
                    </div>

                    <!-- Button -->
                    <inertia-link :href="`/${post.slug}`" class="btn">Continue reading…</inertia-link> <a href="#." class="comm">4 Comments</a> </aside>
                </div>
        </article>
    </blog-layout>
</template>

<script>
    import BlogLayout from './../../Layouts/BlogLayout'

    export default {
        props: ['posts'],
        components: {
            BlogLayout,
        },
    }
</script>
