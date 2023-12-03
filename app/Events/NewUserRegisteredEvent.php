<?php

namespace App\Events;

use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewUserRegisteredEvent implements  ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    public $user;
    public $messageContent;
    /**
     * Create a new event instance.
     */
    public function __construct($user)
    {
        $this->user = $user;
        $this->messageContent = "New User Registered to our website : " . $user->name;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('realtime'),
        ];
    }
}