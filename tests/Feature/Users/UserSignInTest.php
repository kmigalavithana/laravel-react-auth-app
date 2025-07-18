<?php

namespace Tests\Feature\Users;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

final class UserSignInTest extends TestCase
{

    use RefreshDatabase;
   public function test_user_can_sign_in_with_correct_user_credentials()
   {
       $user = User::factory()->create([
           'email' => 'test@gmail.com',
           'password' => Hash::make('12345678'),
       ]);

       $userSignInCredentials = [
           'email'=>$user->email,
           'password'=>'12345678',
       ];

       $response = $this->post('api/sign-in',$userSignInCredentials);

       dd($response->json());

       $response->assertStatus(200);

       $response->assertJsonStructure([
           'user_id',
           'user_token',
           'user_role',
       ]);


   }
}
