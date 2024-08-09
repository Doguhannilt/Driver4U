import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'
import implementToken from '../utils/implementToken.js'



// Create
const createUser = async (req, res) => {
    const { name, email, nickname, password } = req.body;

    if (!name || !email || !password || !nickname) {
        return res.status(400).send('Please fill all the inputs');
    }

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).send("User already exists");

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            name,
            email,
            nickname,
            password: hashedPass
        });

        // Save the user
        await newUser.save();

        // Generate and set the token
        const token = implementToken(res, newUser._id);
       
        // Respond with user info
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            nickname: newUser.nickname
        });

    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(400).send('Invalid User Data');
    }
};

// Login 
const loginUser = async (req, res) => {
    const {
        email,
        password
    } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        const isPasswordValid = await bcrypt.compare(password, existingUser.password)

        if (isPasswordValid) {
            implementToken(res, existingUser._id)
            res.status(201).json({
                _id: existingUser._id,
                username: existingUser.username,
                password: existingUser.password,
                email: existingUser.email,
                isAdmin: existingUser.isAdmin
            })
            return
        }
    }


}

// Logout
const logoutUser = async (req, res) => {
    res
        .cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        })

    res
        .status(200)
        .json({ message: "Removed" })
}

export {
    loginUser,
    createUser,
    logoutUser
}