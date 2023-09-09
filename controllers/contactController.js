const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @desc all contacts
//@route GET/api/contacts
//@access public

const allContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc create new contact
//@route POST/api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  const { fname, email, phone } = req.body;
  if (!fname || !email || !phone) {
    res.status(400);
    throw new Error("All the fields are mandatory");
  }
  const addContact = await Contact.create({
    fname,
    email,
    phone,
  });
  res.status(201).json(addContact);
});

const getContact = asyncHandler(async (req, res) => {
  console.log(await Contact.findById(req.params.id));
  const contact = await Contact.findById(req.params.id);
  console.log(Object.keys(showContact).length);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json({ contact });
});

const updateContact = (req, res) => {
  res
    .status(200)
    .json({ message: `update a specific contacts ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete  contacts ${req.params.id}` });
};

module.exports = {
  allContact,
  createContact,
  updateContact,
  getContact,
  deleteContact,
};


 