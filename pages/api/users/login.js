import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const user = await User.findOne({ phone: req.body.phone });
  await db.disconnect();

  console.log(req.body.phone)
  console.log(req.body.password)
  console.log(user)

  res.send({
    _id: user._id,
    name: user.name,
    phone: user.phone,
    isAdmin: user.isAdmin,
    isSuperAdmin: user.isSuperAdmin,
  });

  // if (bcrypt.compareSync(req.body.password, user.password)) {
  //   const token = signToken(user);
  //   console.log("hhhhhh")
  //   res.send({
  //     _id: user._id,
  //     name: user.name,
  //     phone: user.phone,
  //     isAdmin: user.isAdmin,
  //     isSuperAdmin: user.isSuperAdmin,
  //   });
  // } else {
  //   res.status(401).send({ message: 'Invalid Name or Password' });
  // }
});

export default handler;
