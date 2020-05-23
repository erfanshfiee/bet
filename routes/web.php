<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get("/profile",function(){
    return view("index");
});
Route::get("/cashOut",function (){
    return view("index");
});
Route::get("/deposite",function (){
    return view('index');
});
Route::get("/test",function()
{
    $data=[
        ["status"=>"ok","id"=>123456,"price"=>250000,"data"=>"13/8/1399","time"=>"13:20"],
        ["status"=>"no","id"=>654321,"price"=>550000,"data"=>"23/11/1399","time"=>"15:44"]
    ];
    return response()->json($data);
});
Route::get("/invite","redirection@invite");
