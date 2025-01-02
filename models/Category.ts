import { model, models, Schema } from "mongoose";

const CategorySchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false
    },
    transactions: {
        type: [],
        required: false
    }
})

const Category = models.Category || model("Category", CategorySchema)
export default Category