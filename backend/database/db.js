import mangoos from 'mongoose'

const connectdb = async() => {
    try{
        await mangoos.connect(process.env.MONGO_URL, {
            dbName: "pinterest"
        });
        console.log("Database Connected");
    } catch(error){
        console.log(error);
    }
};

export default connectdb;