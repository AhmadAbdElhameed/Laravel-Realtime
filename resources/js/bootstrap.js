/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

console.log('hello from bootstrap file');
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});

//** public channel
window.Echo.channel('realtime')
    .listen('NewUserRegisteredEvent', (e) => {
        console.log(e);
        $('.notificationsIcon').load(" .notificationsIcon > * ")
        $('#notificationsModal').load(" #notificationsModal > * ")
    });

//** Private Channel

//** Private Channel Authorization
// window.Echo.private('realtime')
//     .listen('NewUserRegisteredEvent', (e) => {
//         console.log(e);
//         $('.notificationsIcon').load(" .notificationsIcon > * ")
//         $('#notificationsModal').load(" #notificationsModal > * ")
//     })
//     .listen('NewUserRegisteredEvent2', (e) => {
//         console.log(e);
//     });


//** Presence Channel

// window.Echo.join(`admin_room`)
//     .here((users) => {
//         console.log('here : ')
//         console.log(users)
//
//         $.each(users,function (index,user){
//             $('#onlineAdmins').append($('<li>').text(user.name))
//         })
//     })
//     .joining((user) => {
//         console.log('joining : ')
//         console.log(user)
//         $('#onlineAdmins').append($('<li>').text(user.name))
//     })
//     .leaving((user) => {
//         console.log('leaving: ')
//         console.log(user)
//         $("#onlineAdmins li:contains('" + user.name + "')").remove();
//     })
//     .error((error) => {
//         console.log('error : ')
//         console.log(error)
//     });

