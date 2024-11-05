import { model, Schema } from "mongoose";

// create an interface representing a document in mongoDB
interface IQUestion{
    title : string ;
    explanation : string;
    tags:string[];
}

// create an Schema corresponding to the document interface
const questionSchema = new Schema<IQUestion>({
    title : {type: String, required: true},
    explanation : {type: String, required: true},
    tags : {type: [], required: true}
})


// create a model
// eslint-disable-next-line no-unused-vars
const Question = model<IQUestion>('Question',questionSchema)
// connect to mongoDB
