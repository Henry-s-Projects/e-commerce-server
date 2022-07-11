import mongoose from 'mongoose';

const componentSchema = new mongoose.Schema({}, { timestamps: true });

const component = mongoose.model('component', componentSchema);

export default component;
