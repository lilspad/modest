const stripe = require('stripe')('sk_test_51MgDG3GrxL0zd9YApF0W5fxk3eBj4UBVuWsKGVOce4Vi3PaGsYIw7ytQiJThbnEK3iMRKKJTDhq67OyEQrLWcbtn0083OfPuxI');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(express.static('public'));

app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({
 extended: true})); 
app.use(cors())

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/', async (req, res) => {
  const prices = JSON.parse(req.body.test);
  console.log('server', prices, prices[0].price);
})

app.post('/create-checkout-session', async (req, res) => {
  const prices = JSON.parse(req.body.prices);

  const session = await stripe.checkout.sessions.create({
    line_items: prices,
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));