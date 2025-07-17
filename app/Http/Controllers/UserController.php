<?php

namespace App\Http\Controllers;

use App\Action\User\UserSignIn;
use App\Http\Requests\User\UserSignInValidationRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function userSignIn(UserSignInValidationRequest $request, UserSignIn $userSignIn)
    {
        $validateUserSignInRequest = $request->validated();

        return response()->json($userSignIn($validateUserSignInRequest));
    }


}
