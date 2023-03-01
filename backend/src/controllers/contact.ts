import { Request, Response } from "express";
import Contact, { ContactDocument } from "../models/Contact";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts: ContactDocument[] = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createContact = async (req: Request, res: Response) => {
  const { fullname, number, emailAddress, gender } = req.body;

  try {
    const contact: ContactDocument = new Contact({
      fullname,
      number,
      emailAddress,
      gender,
    });

    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getContact = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const contact: ContactDocument | null = await Contact.findById(id);
    if (!contact) {
      res.status(404).json({ message: "Contact not found" });
    } else {
      res.status(200).json(contact);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { fullname, number, emailAddress, gender } = req.body;

  try {
    const contact: ContactDocument | null = await Contact.findByIdAndUpdate(
      id,
      {
        fullname,
        number,
        emailAddress,
        gender,
      },
      { new: true }
    );

    if (!contact) {
      res.status(404).json({ message: "Contact not found" });
    } else {
      res.status(200).json(contact);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const contact: ContactDocument | null = await Contact.findByIdAndDelete(id);

    if (!contact) {
      res.status(404).json({ message: "Contact not found" });
    } else {
      res.status(200).json(contact);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
