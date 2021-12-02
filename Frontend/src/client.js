// const { secondsToHours } = require("date-fns");
// const { sendMulticastNotification } = require("../../Backend/firebaseAdmin");

const publicVapidKey = "BAZmwAYKsc2buBkqgJgzZ57yXY2sDXtt615c17JQAUExuX3qda6e96uPqq1F4GmR4y4tERKPrajiw9cTgxHXBK8";

if('serviceWorker' in navigator){
    send().catch(err => console.error(err));
}

async function send(){
    console.log('registering service worker...');
    const register = await navigator.serviceWorker.register('/worker.js',{
        scope: '/'});
        console.log('register push');
        const subscription=await register.pushManager.subscribe({
            userVisibleOnly:true,
            applicationServerKey:urlBase64ToUnit8Array(publicVapidKey)
        });
        console.log('Push Registered...');

        console.log('sending Push...');
        await fetch('/subscribe',{
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'content-type': 'application/json'
            }
        });
        console.log('push Sent ....');
}

function urlBase64ToUnit8Array(base64String){
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for(let i = 0;i< rawData.length;i++){
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}