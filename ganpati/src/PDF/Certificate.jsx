import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas-pro';

const Certificate = () => {
  const {state} = useLocation();
  const printRef = useRef(null);

  if(!state){
    return(<div>

    </div>)
  }

  // const generatePDF = async()=>{
  //     try {
  //     const element = printRef.current;
  //     if (!element) return;

  //     // Apply a custom scale style for high-quality capture
  //     const originalStyle = element.style.transform;
  //     element.style.transform = "scale(1)"; // reset scale


  //     const data = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF({
  //       orientation: "portrait",
  //       unit: "px",
  //       format: "a4",
  //     });

  //     const imgProps = pdf.getImageProperties(data);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //     pdf.addImage(data, "PNG", 0, 0, 350, 300);
  //     pdf.save(`${state.name}_receipt.pdf`);

  //     // Reset style
  //     element.style.transform = originalStyle;
  //   } catch (error) {
  //     console.error("Error in PDF generation", error);
  //   }
  // }


  const generatePDF = async()=>{
   try {
    const element = printRef.current;
    if (!element) return;

    // 🔒 Backup original styles
    const originalWidth = element.style.width;
    const originalTransform = element.style.transform;

    // 🛠️ Force a desktop-like fixed width for consistent rendering
    element.style.width = "1024px";
    element.style.transform = "scale(1)";

    // 📸 Capture the element as high-res image
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    // 🖼️ Convert canvas to image data
    const data = canvas.toDataURL("image/png");

    // 📄 Create A4 PDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // 🧩 Add image dynamically fitted to PDF page
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);

    // 💾 Download the file
    pdf.save(`${state.name}_receipt.pdf`);

    // 🔄 Restore original styles
    element.style.width = originalWidth;
    element.style.transform = originalTransform;
  } catch (error) {
    console.error("Error in PDF generation", error);
  }
  }


  return (
    <div className="relative min-h-screen bg-white" >
     {/* Background Image */}
    {/*<div className="absolute inset-0 z-0">
      <img
        src="/bg-image.jpeg"
        alt="Background"
        className="w-full h-full object-contain opacity-15 z-5 pointer-events-none"
      />
    </div> */}

    {/* Receipt Card */}
    <div className="relative z-30 max-w-4xl mx-auto mt-6  border-2 border-black rounded-2xl p-6 shadow-lg" ref={printRef}>
      {/* Receipt Title */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-image.jpeg"
          alt="Background"
          className="w-full h-full object-contain opacity-25 z-5 pointer-events-none"
        />
      </div>
      <div className="flex justify-center mb-4">
        <h2 className="bg-red-700 text-white rounded-2xl h-10 w-40 flex items-center justify-center font-semibold">
          Receipt
        </h2>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h2 className="text-red-600 text-2xl font-extrabold">THE LIFE EXTERNAL TRUST</h2>
          <p>C-17, Qutub Institutional Area,</p>
          <p>Behind Qutub Hotel</p>
          <p>New Delhi - 110016</p>
          <div className="flex flex-wrap gap-4">
            <p><span className="font-bold">Mob:</span> 7065088873</p>
            <p><span className="font-bold">Phone:</span> 011-26866801</p>
          </div>
          <p><span className="font-bold">Email:</span> contributions@gmail.org</p>
        </div>

        <div className="pt-4">
          <p className="font-bold">Receipt No: <span>{state._id}</span></p>
          <p><span className="font-bold">Dated:</span> <span>{new Date(state.date).toLocaleDateString()}</span></p>
        </div>
      </div>

      {/* Donor Info */}
      <div className="mt-6 text-lg md:text-xl space-y-2">
        <p>
          Received with thanks from Mr/Mrs/M/s: <span className="font-bold ml-2">{state.name}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <p>PAN: <span className="font-bold">{state.PAN}</span></p>
          <p>Mobile: <span className="font-bold">{state.mobile}</span></p>
        </div>
        <p>
          Address: <span className="font-bold ml-2">{state.address}</span>
        </p>
        <p>
          A Sum of Rupees: <span className="font-bold ml-2">{state.amount_in_words}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <p>By: <span className="font-bold">{state.name}</span></p>
          <p>No: <span className="font-bold">{state.transaction_no}</span></p>
          <p>Installment Date: <span className="font-bold">{new Date(state.date).toLocaleDateString()}</span></p>
        </div>
        <p>towards voluntary donation</p>
      </div>

      {/* Amount Section */}
      <div className="flex items-center mt-6 text-3xl text-orange-600 font-bold">
        <FontAwesomeIcon icon={faIndianRupeeSign} className="mr-2" />
        {state.amount}
      </div>

      {/* Footer Notes */}
      <div className="mt-8 flex flex-col md:flex-row justify-between gap-6 text-sm sm:text-base">
        <div className="space-y-1">
          <p>Exempted u/s 80G Vide Letter Issued by</p>
          <p>Director of Income Tax (Exemptions), Delhi - 110092</p>
          <p>Order No. AAAFRFIDSDJ</p>
          <p>Trust PAN No. AGVP73683</p>
          <p>Renewed for AY 2022-23 to AY 2026-27</p>
          <p>* Subject to Encashment of Cheque</p>
          <p>* Cash donation above ₹2000 not entitled for tax benefit</p>
        </div>

        <div className="text-right">
          <h1 className="text-xl font-bold">For The Life Eternal Trust</h1>
          <p>This is a system-generated Receipt; it does not require signature.</p>
        </div>
      </div>
    </div>

    {/* Button */}
    <div className="flex justify-center mt-8 z-20 relative">
      <button
        className="h-14 w-48 bg-green-600 hover:bg-green-700 transition-all duration-200 text-white text-xl font-bold rounded-full shadow-lg"
        onClick={generatePDF}
      >
        Generate PDF
      </button>
    </div>
  </div>
  )
}

export default Certificate
