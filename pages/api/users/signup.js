import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  console.log({ name: req.body.name,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
    isSuperAdmin: false,})


  await db.connect();
  const newUser = new User({
    name: req.body.name,
    phone: req.body.phone,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
    isSuperAdmin: false,
  });
  const user = await newUser.save();
  await db.disconnect();

  console.log(user)

  res.send({
    _id: user._id,
    name: user.name,
    phone: user.phone,
    isAdmin: user.isAdmin,
    isSuperAdmin: user.isSuperAdmin,
  });
});

export default handler;
