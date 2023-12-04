<?php

use App\Broadcasting\SecureChannel;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

//Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
//    return (int) $user->id === (int) $id;
//});

//Private Channel Authorization
//Broadcast::channel('realtime', function ($user) {
//    return true;
//},['guards' => ['admin']]);

////Private Channel Authorization (Channel class)
Broadcast::channel('realtime', SecureChannel::class,['guards' => ['admin']]);
