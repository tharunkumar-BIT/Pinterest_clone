import mangoose from 'mongoose'

const connectdb = async() => {
    try{
        await mangoose.connect(process.env.MONGO_URL, {
            dbName: "pinterest"
        });
        console.log("Database Connected");
    } catch(error){
        console.log(error);
    }
};

export default connectdb;