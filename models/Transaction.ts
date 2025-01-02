import {Schema} from 'mongoose';

const TransactionSchema = new Schema({
    id: {
      type: String,
      required: true,
    },
    concept: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  });

export default TransactionSchema;