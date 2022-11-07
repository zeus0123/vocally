import { Schema, model } from "mongoose";

export interface ILead {
  name: string;
  email: string;
}

const leadSchema = new Schema<ILead>({
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
  }
});

const Lead = model<ILead>('leads', leadSchema);

export default Lead;