import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Certificate = () => {
  const {state} = useLocation();

  if(!state){
    return(<div>Sorry No Data Found.</div>)
  }


  return (
    <div className='relative min-h-screen'>
         <div
          className="absolute inset-0 bg-no-repeat bg-contain bg-center z-0"
          style={{
            backgroundImage: "url('/bg-image.jpeg')",
            opacity: 0.2, // watermark effect
            pointerEvents: 'none', // allows clicking through background
          }}
      ></div>
      
        <div className='flex-col justify-center h-90% w-50% border-2 border-black m-5 rounded-2xl p-3'>
          <div className='flex justify-center z-20'>
            <h2 className='flex bg-red-700 rounded-2xl h-10 w-40 items-center justify-center text-white'>Receipt</h2>
          </div>
          
          {/* blue div */}
          <div className='flex h-40 w-100% justify-between'>
                <div>
                  <h2 className='text-red-600 text-2xl font-extrabold'>THE LIFE EXTERNAL TRUST</h2>
                  <div className='flex-col'>
                    <p>C-17, Qutub Institutional Area,</p>
                    <p>Behind Qutub Hotel</p>
                    <p>New Delhi - 110016</p>
                    <div className='flex gap-3'>
                      <p><span className='font-bold'>Mob</span>: 7065088873</p>
                      <p><span className='font-bold'>Ph</span>: 011-26866801</p>
                    </div>
                    <p><span className='font-bold'>Email</span> : contributions@gmail.org</p>
                  </div>
                </div>

                {/* purple div */}
                <div className=' h-40 w-70 pt-8'>
                  <h2 className='font-bold'>Receipt No : <span>{state._id}</span></h2>
                  <h2 className='gap-2'><span className='font-bold'>Dated :</span><span>{new Date(state.date).toLocaleDateString()}</span></h2>
                </div>
          </div>
            {/* green div */}
            <div className='flex-col text-2xl mt-3'>
                <p>Received with thanks from Mr/Mrs/M/s:<span className='font-bold ml-3'>{state.name}</span></p>
                <div className='flex gap-20'>
                  <p>PAN:<span className='font-bold ml-3'>{state.PAN}</span></p>
                  <p>Mobile:<span className='font-bold ml-3'>{state.mobile}</span></p>
                </div>
                <div>
                  Address:<span className='font-bold ml-3'>{state.address}</span>
                </div>
                <p className=''>a Sum of Rupee:<span className='font-bold ml-3'>{state.amount_in_words}</span></p>
                <div className='flex gap-20'>
                  <p>by:{state.name}</p>
                  <p>No:{state.transaction_no}</p>
                  <p>Installment Date:{new Date(state.date).toLocaleDateString()}</p>
                </div>  
                <p>towards voluntary donation</p>
            </div>

             <div className='flex mt-8 items-center'>
                <FontAwesomeIcon icon={faIndianRupeeSign} className='text-3xl'/>  
                <h1 className='font-bold text-3xl'>{state.amount}</h1>
             </div>

            {/* orange div */}
            <div className='flex mt-2 text-xl  justify-between'>
              <div className='flex-col'>
                <p>Exempted u/s 80G Vide Letter Issued by</p>
                <p>Director of Income Tax (Exemeptions), Delhi -110092</p>
                <p>Order No. AAAFRFIDSDJ</p>
                <p>Trust PAN No.AGVP73683</p> 
                <p>Renewed for AY 2022-23 to AY 2026-27</p>
                <p>*Subject to Encashment of Cheque</p>
                <p>*Cash donation above rupees 2000 not entitled for tax benefit</p>
              </div>

              <div className='mt-9'>
                <h1 className='text-3xl font-extrabold'>For The Life Eternal Trust</h1>
                <h4>This is system generated Receipt,it does not require signature.</h4>
              </div>
              <div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate
