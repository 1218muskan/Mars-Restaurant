import nc from 'next-connect';
import Orders from '../../models/Orders';
import db from '../../utils/db';

const handler = nc();

handler.post(async (req, res) => {

  await db.connect();
  const newOrders = new Orders({
    foodID: req.body.foodID,
    userID: req.body.userID
  });
  const order = await newOrders.save();
  await db.disconnect();

  console.log(order)

  res.send(order);
});

export default handler;
