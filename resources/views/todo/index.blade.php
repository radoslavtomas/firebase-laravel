@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <ul>
                @foreach($todos as $todo)
                    <li>{{ $todo['title'] }}</li>
                @endforeach
            </ul>
        </div>
    </div>
</div>
@endsection