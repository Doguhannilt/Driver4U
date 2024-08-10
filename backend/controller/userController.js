import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'
import implementToken from '../utils/implementToken.js'



// Create
const createUser = async (req, res) => {
    const { name, email, nickname, password } = req.body;

    console.log("Checking if all inputs are filled...");
    if (!name || !email || !password || !nickname) {
        console.log("Some inputs are not filled");
        return res.status(400).send('Please fill all the inputs');
    }

    try {
        console.log("Checking if user already exists...");
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log("User already exists");
            return res.status(400).send("User already exists");
        }
        if (userExists) return res.status(400).send("User already exists");

        console.log("Hashing the password...");
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        console.log("Creating a new user...");
        // Create a new user
        const newUser = new User({
            name,
            email,
            nickname,
            password: hashedPass
        });

        console.log("Saving the user...");
        // Save the user
        await newUser.save();

        console.log("Generating and setting the token...");
        // Generate and set the token
        const token = implementToken(res, newUser._id);
       
        console.log("Responding with user info...");
        // Respond with user info
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            nickname: newUser.nickname
        });

    } catch (err) {
        console.error(err); // Log the error for debugging
        console.log("Invalid User Data");
        res.status(400).send('Invalid User Data');
    }
};

// Login 
const loginUser = async (req, res) => {
    const {
        email,
        password
    } = req.body

    console.log('Attempting to login user with email:', email);

    const existingUser = await User.findOne({ email })

    console.log('Found existing user:', existingUser ? existingUser._id : 'none');

    if (existingUser) {
        const isPasswordValid = await bcrypt.compare(password, existingUser.password)

        console.log('Checking if password is valid...');

        if (isPasswordValid) {
            console.log('Password is valid! Generating and setting token...');
            implementToken(res, existingUser._id)
            console.log('Returning user data...');
            res.status(201).json({
                _id: existingUser._id,
                username: existingUser.username,
                password: existingUser.password,
                email: existingUser.email,
                isAdmin: existingUser.isAdmin
            })
            return
        }
        else {
            console.log('Password is invalid.');
        }
    }
    else {
        console.log('User does not exist.');
    }


}

// Logout
const logoutUser = async (req, res) => {
    console.log('Attempting to logout user...');
    res
        .cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        })

    res
        .status(200)
        .json({ message: "Removed" })
        .end(() => console.log('User successfully logged out.'));
}

// Export functions
export {
    loginUser,
    createUser,
    logoutUser
}