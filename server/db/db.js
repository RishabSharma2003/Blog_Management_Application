import mongoose from "mongoose";

const connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.5s5n5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL)
        //purane vala url parser depricate ho chuka hai isliye apko new vala use ker na hai that is URL
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error while connecting database ",error)
    }
}

export default connection