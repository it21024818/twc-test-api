import { Schema, model, Document } from "mongoose";

export interface Contact {
  fullname: string;
  number: string;
  emailAddress: string;
  gender: string;
}

export interface ContactDocument extends Contact, Document {}

const contactSchema = new Schema<Contact>({
  fullname: { type: String, required: true },
  number: { type: String, required: true },
  emailAddress: { type: String, required: true },
  gender: { type: String, required: true },
});

export default model<ContactDocument>("Contact", contactSchema);
