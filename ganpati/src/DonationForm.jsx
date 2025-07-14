import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const DonationForm = () => {
  const [amount,setAmount] = useState(0);
  const [formdata,setFormData] = useState({
    name:"",
    PAN:"",
    mobile:"",
    email:"",
    address:"",
    amount:"",
    amount_in_words:"",
    payment_mode:"",
    transaction_no:"",
    date:""
  })  
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "amount") {
      setAmount(value);
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log("formData", formdata);

    const response = await axios.post('http://localhost:3000/api/donar/create', formdata);
    console.log(response.data.data);

    if (response.status === 201 || response.status === 200) {
      toast.success("Donor details saved to database");
      navigate('/certificate', { state: response.data.data });
    } else {
      toast.error("Error in creating Donor details");
    }
  } catch (error) {
    console.log("Error in handleSubmit in Donar.jsx", error);
    toast.error("Something went wrong while submitting the form");
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 md:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-4">Donation Receipt Form</h2>

        {/* Name Input */}
        <div>
          <label className="block text-lg font-semibold mb-1">Received from (Mr/Mrs/M/s)</label>
          <input
            type="text"
            id='name'
            placeholder="Enter Full Name"
            value={formdata.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* PAN and Mobile */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label className="block text-lg font-semibold mb-1">PAN</label>
            <input
              type="text"
              id='PAN'
              value={formdata.PAN}
              placeholder="Enter PAN"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-lg font-semibold mb-1">Mobile</label>
            <input
              type="tel"
              id='mobile'
              value={formdata.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          
        </div>
        <div className="flex-1">
            <label className="block text-lg font-semibold mb-1">Email</label>
            <input
              type="email"
              id='email'
              value={formdata.email}
              placeholder="xyz@gmail.com"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

        {/* Address */}
        <div>
          <label className="block text-lg font-semibold mb-1">Address</label>
          <input
            type="text"
            id='address'
            value={formdata.address}
            placeholder="Enter Address"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-lg font-semibold mb-1">Amount</label>
          <input
            type="number"
            id='amount'
            value={formdata.amount}
            placeholder="1000/-"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-1">Amount in Words</label>
          <input
            type="text"
            id='amount_in_words'
            value={formdata.amount_in_words}
            placeholder="One Thousand Only/-"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Mode of Payment, No, Installment Date */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-lg font-semibold mb-1">Payment Mode</label>
            <input
              type="text"
              id='payment_mode'
              value={formdata.payment_mode}
              placeholder="Cash / UPI / Cheque"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-1">Payment No</label>
            <input
              type="number"
              id='transaction_no'
              value={formdata.transaction_no}
              onChange={handleChange}
              placeholder="Transaction/Cheque No"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-1">Date</label>
            <input
              type="date"
              id='date'
              onChange={handleChange}
              value={formdata.date}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Amount Box */}
        <div className="flex items-center justify-center gap-2 text-3xl font-bold text-green-600 mt-4">
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          <span>{amount}</span>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 text-white text-lg px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
            onClick={handleSubmit}
          >
            Save & Generate Receipt
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
