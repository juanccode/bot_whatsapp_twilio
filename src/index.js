const express = require('express')
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const app = express()

client.messages
      .create({
         from: `whatsapp:+${process.env.NUMBER_FROM}`,
         body: 'Hola soy Juan!, respondeme si te llego el whatsapp',
         to: `whatsapp:+${process.env.NUMBER_TO}`
      })
      .then(message => console.log(message));

app.listen('4000', ()=>{
   console.log('server iniciado');
})