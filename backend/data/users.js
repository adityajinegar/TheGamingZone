import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Aditya Jinegar',
    email: 'aditya@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rinkal Mehta',
    email: 'rinkal@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
