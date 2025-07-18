<?php

namespace App\Action\User;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSignIn
{
  public function __invoke (array $validateUserSignInRequest): array
  {
      $user = User::where('email', $validateUserSignInRequest['email'])->first();

      if (! $user) {
          return [
              'message' => 'User not found'
          ];
      }


      if ($this->isValidateUserCredentials($validateUserSignInRequest['email'],$validateUserSignInRequest['password'], $user)) {
          return [
              'user_id' => $user->id,
              'user_token' => $user->createToken('testToken', ['server:admin'])->plainTextToken,
              'user_role' => 1,
          ];
      }

      return [
          'message' => 'User credentials not valid'
      ];

  }

    public function isValidateUserCredentials(string $email,string $password, User $user): bool
    {
        return $user->email === $email && Hash::check ($password, $user->password);
    }



}
