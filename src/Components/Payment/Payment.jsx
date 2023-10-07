import React from 'react'
import mastercard from '../../assets/mastercard.png'
import paypal from '../../assets/paypal.png'
import mpesa from '../../assets/lipa.png'

import {useFormik,Field} from 'formik'

import * as yup from 'yup'

const Payment = () => {

    const {values,errors,touched,handleBlur,handleChange} = useFormik({
        initialValues :{
            payment:""
        },
        validationSchema:{
            payment:yup.string().required("Select one method of payment")
        },
      })

  return (
    <div className='mt-2'>
        <h4 className="text-base mb-2">Choose payment method</h4>
        
        <div className="flex items-center gap-4">
            <div class="flex items-center mb-4 ml-4">
                <input id="default-radio-1" type="radio" onChange={handleChange} onBlur={handleBlur}  value="mastercard"  defaultChecked={values.payment === "mastercard"} name="payment" class="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 outline-0"/>
                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <img src={mastercard} className="h-6 object-cover" alt="" srcset="" />
                </label>
                <span className={`text-sm text-red-500 mt-1 ${errors.payment && touched.payment ? "block" : "hidden"}`}>{errors.payment}</span>
            </div>

            <div class="flex items-center mb-4 ml-4">
                <input id="default-radio-1" type="radio"  name="payment" onChange={handleChange} onBlur={handleBlur}  value="paypal" defaultChecked={values.payment === "paypal"} class="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 outline-0"/>
                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <img src={paypal} className="h-6 object-cover" alt="" srcset="" />
                </label>
            </div>

            <div class="flex items-center mb-4 ml-4">
                <input id="default-radio-1" type="radio" value="mpesa" name="payment"  defaultChecked={values.payment === "mpesa"} class="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 outline-0"/>
                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <img src={mpesa} className="h-8 object-cover" alt="" srcset="" />
                </label>
            </div>

        </div>
       
       {
         values.payment === "mpesa" && 
         <div className="">
           <h1 className="text-base mb-2">Lipa na Mpesa</h1>
           <div className="ml-4">
              <h5 className="text-base mb-2 ">Paybill: </h5>
              <h5 className="text-base mb-2 ">Account: </h5>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo autem, ea voluptates soluta nulla.</p>
           </div>
      </div>
       }
      
    </div>
  )
}

export default Payment