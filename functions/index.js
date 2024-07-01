const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions=require('firebase-functions');
const express=require('express');
const cors=require('cors');
const stripe=require(`stripe`)(`sk_test_51PThYgRuRsuArQL27u3dySiNtlsQARrDditodIGnjdz40HuxDKFfcgYpObNCqHoTleFz95dhpRP7B1KLNdqyaHe000l2TjZfvQ`);

//API

//App Config
const app=express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//Api routes
app.get(`/`,(request,response)=>response.status(200).send("Hello World"))
app.get(`/rohan`,(request,response)=>response.status(200).send("Whatsup Qazi"))

app.post(`/payments/create`,async (request,response)=>{
    const total=request.query.total;
    console.log(`Payment Request Received BOOMMMMMMMMMM, for this amount>>>>>>>>>>>>>>>>>>>>>>>>>`,total)
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

//Listen command
exports.api=functions.https.onRequest(app)


