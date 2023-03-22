import { number, string } from "joi";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
    name: {
        type: string,
    },
    price: {
        type: number,

    },

});

export default mongoose.model('Product', productSchema);