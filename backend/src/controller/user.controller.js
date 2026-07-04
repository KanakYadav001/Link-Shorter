
const UserModel = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




async function register(req, res) {

    const { username, email, password } = req.body;

    const IsEmailExist = await UserModel.findOne({ email: email });

    if (IsEmailExist) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
        username,
        email,
        password : hashedPassword,
    });

  
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });


    res.cookie('token', token, {
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });




    res.status(201).json({ message: 'User registered successfully', user , token});


    

}

async function login(req, res) {

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

   const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }



    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('token', token, {
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });



    res.status(200).json({ message: 'User logged in successfully', user , token });




}


async function logout(req, res) {
    res.clearCookie('token');
    res.status(200).json({ message: 'User logged out successfully' });
}





module.exports = {
  register,
  login,
    logout,
};