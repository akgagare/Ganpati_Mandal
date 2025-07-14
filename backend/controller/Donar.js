const Donar = require('../models/Donar');

exports.createDonar = async (req, res) => {
    console.log("Req reached here");
  try {
    const {
      name,
      PAN,
      mobile,
      email,
      address,
      amount,
      amount_in_words,
      payment_mode,
      transaction_no,
      date
    } = req.body;

    // Optional: Basic field validation
    if (!name || !PAN || !mobile || !email || !address || !amount || !payment_mode) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    // Create and save the donor
    const newDonar = new Donar({
      name,
      PAN,
      mobile,
      email,
      address,
      amount,
      amount_in_words,
      payment_mode,
      transaction_no,
      date,
    });

    const savedDonar = await newDonar.save();   
    



    res.status(201).json({
      message: 'Donor created successfully',
      data: savedDonar,
    });
    console.log("Donor created");   
  } catch (error) {
    console.error('Error in creating the Donor:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

