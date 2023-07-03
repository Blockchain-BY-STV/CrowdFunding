// TODO 8 - Fetch storage of the Lottery by completing fetchStorage
import axios from "axios";
export const fetchStorage = async () => {
    try{
        const res=await axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1KJJ5oHXHiAfsfytVaFupEJ1pyaNxQLMz6/storage/")
        return (await res).data
        //use res.data if error
    }catch(err){
        throw err;
    }
};
