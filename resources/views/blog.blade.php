<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ $title }}</title>

        <!-- FONTS ONLINE -->
        <link href='http://fonts.googleapis.com/css?family=Raleway:500,600,700,100,800,900,400,200,300' rel='stylesheet' type='text/css'>

        <!--MAIN STYLE-->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/main.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/style.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/responsive.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/font-awesome.min.css') }}" rel="stylesheet" type="text/css">

        <style>
            @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

            .font-family-karla {
                font-family: karla;
            }
        </style>


        <!-- Scripts -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" integrity="sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
    </head>
    <body class="bg-white font-family-karla">
        @inertia
    </body>
</html>
