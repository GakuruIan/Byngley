import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { validateSchema } from '../../Utils/yup';
import Loader from '../../Components/Loader/Loader';
import axios from 'axios'


const Register = () => {
  const onSubmit=async(values,actions)=>{
      const {confirmpassword,...userdetails}=values; 

      axios.post("http://localhost:8000/register",{...userdetails})
      .then(response=>console.log(response))
      .catch(err=>console.log(err))
     actions.resetForm()
  }

  const {values,errors,isSubmitting,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues :{
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      confirmpassword:''
    },
    validationSchema:validateSchema,
    onSubmit
  })

  return (
    <div className='h-full md:h-screen flex items-center justify-center '>
 
     {
        isSubmitting ? 
           <Loader text="Submitting..."/>
        :

        <div className='px-6 py-8 md:mt-8 mt-0 md:dark:bg-[#1E1E1E] md:border border-gray-200 dark:border-[#333] md:max-w-xl w-full'>
            <form onSubmit={handleSubmit}>
              <h5 className="text-center md:text-3xl text-xl mb-2 ">Welcome to Byngley</h5>
              <h6 className="text-center md:text-xl text-base mb-6 text-gray-400">Create account</h6>

              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="w-full">
                        <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                          <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                  </svg>
                              </div>
                              <input type="text" id="firstname" name='firstname' onChange={handleChange} onBlur={handleBlur} value={values.firstname} className="dark:bg-[#232323] focus:dark:bg-[#232323] bg-[#dddeed] dark:text-white text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400" placeholder="John"/>
                          </div>
                          <span className={`text-sm text-red-500 mt-1 ${errors.firstname && touched.firstname ? "block" : "hidden"}`}>{errors.firstname}</span>
                  </div>

                  <div className="w-full">
                      <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                            <input type="text" id="lastname" name='lastname' onChange={handleChange} onBlur={handleBlur}  value={values.lastname} className="dark:bg-[#232323] focus:dark:bg-[#232323] bg-[#dddeed] dark:text-white text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400" placeholder="Doe"/>
                        </div>
                        <span className={`text-sm text-red-500 mt-1 ${errors.lastname && touched.lastname ? "block" : "hidden"}`}>{errors.lastname}</span>
                </div>
              </div>

                <div className="mb-6 w-full">
                      <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <input type="email" name='email' id="email" onChange={handleChange} onBlur={handleBlur}  value={values.email} className="dark:bg-[#232323] bg-[#dddeed] dark:text-white text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400" placeholder="John@gmail.com"/>
                        </div>
                        <span className={`text-sm text-red-500 mt-1 ${errors.email && touched.email ? "block" : "hidden"}`}>{errors.email}</span>
                </div>

                <div className="mb-6 w-full">
                      <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                              </svg>
                            </div>
                            <input type="password" name='password' onChange={handleChange} onBlur={handleBlur}  value={values.password} id="password" className="dark:bg-[#232323] bg-[#dddeed] dark:text-white text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400" placeholder="password"/>
                        </div>
                        <span className={`text-sm text-red-500 mt-1 ${errors.password && touched.password ? "block" : "hidden"}`}>{errors.password}</span>
                </div>

                <div className="mb-6 w-full">
                      <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                              </svg>
                            </div>
                            <input type="password" id="confirmpassword" name='confirmpassword' onChange={handleChange} onBlur={handleBlur}  value={values.confirmpassword} className="dark:bg-[#232323] bg-[#dddeed] dark:text-white text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400" placeholder="password"/>
                        </div>
                        <span className={`text-sm text-red-500 mt-1 ${errors.confirmpassword && touched.confirmpassword ? "block" : "hidden"}`}>{errors.confirmpassword}</span>
                </div>

                <button type='submit' className="bg-indigo-700 mb-7 px-4 py-2 text-white w-full flex items-center gap-4 justify-center  hover:bg-indigo-800 cursor-pointer">Register 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
            </form>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className='text-sm'>Have an Account ? <Link to="/login" className="text-sm md:ml-2 text-indigo-400">Login</Link></p>
            </div>
        </div>
      }
</div>
  )
}

export default Register