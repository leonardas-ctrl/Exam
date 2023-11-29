import User from "./models/User.js";

export async function addUser(req, res) {
    const {fullName, email, dateAndTime, gender} = req.body;

    if (!fullName || !email || !dateAndTime) {
        return res.status(400).send({message: "All fields are required"});
    }

    try {
        const user = new User({
            fullName,
            email,
            dateAndTime,
            gender
        })
    
       await user.save()

        res.status(200).send({message: "User added"})
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }



}

export async function getUsers(req,res) {
    try {
        const users = await User.find({});
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}

export async function deleteUser(req, res) {
    const {id} = req.params
    
    try {
        const user = await User.findById(id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        } else {
            await User.findByIdAndDelete(id);
            res.status(200).json({ message: "User deleted" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function editUser(req, res) {
    const {id} = req.params
    const {fullName, email, dateAndTime, gender} = req.body;
    try {
        const user = await User.findById(id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (!fullName || !email || !dateAndTime) {
            return res.status(400).json({ message: "All fields are required" });
            
        }

        user.fullName = fullName;
        user.email = email;
        user.dateAndTime = dateAndTime;
        user.gender = gender

        await user.save();
        res.status(200).json({ message: "User updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getUserById(req, res) {
    const {id} = req.params

    if (!id) {
        return res.status(400).send({message: "Id is required"})
    }
    if (id.length !== 24) {
        return res.status(400).send({message: "Id is not valid"})
        
    }
    try {
        const user = await User.findById(id);
        res.status(200).send({user})
        
    } catch (error) {
        res.status(400).send({message: error.message})
    }

    
}