<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class redirection extends Controller
{
    public function invite()
    {
        return view("index");
    }
}
