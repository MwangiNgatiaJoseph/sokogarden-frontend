import React from 'react'
import { useState } from 'react'
import axios from 'axios'



const AddProducts = () => {

  const[product_name,setProduct_name]=useState("")

  const[product_description,setProduct_description]=useState("")
  
  const[product_cost,setProduct_cost]=useState("")

  const[product_photo,setProduct_photo]=useState("")

  const[success,setSuccess]=useState("");
  const[error,setError]=useState("");
  const[loading,setLoading]=useState("");

    

  const submit=async(e)=>{

      
      e.preventDefault()
      
      setLoading("please wait....")

      try {
        const data=new FormData();
          data.append("product_name",product_name);

          data.append('product_description',product_description);

          data.append('product_cost',product_cost);

          data.append('product_photo',product_photo);

          const response=await axios.post("http://shinejoe.alwaysdata.net/api/addproducts",data)

          setLoading('')

          setSuccess(response.data.message)

          setProduct_name('')
          setProduct_description('')
          setProduct_cost('')
          setProduct_photo('')



  
        
      } catch (error) {
        setLoading('')
        setError(error.message)


        
      }
      
      
    }





  return (
    <div className='row justify-content-center mt-5'>

      <div className='card shadow col-md-6'>

        <h1>Add Product</h1>

        <form action="" onSubmit={submit} >


          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>


          <input type="text" placeholder='Enter Product Name' className='form-control'   required value={product_name} onChange={(e)=>setProduct_name(e.target.value)}  />
          <br />
          <textarea name="" id="" placeholder='Describe Your Product'className='form-control'  required value={product_description} onChange={(e)=>setProduct_description(e.target.value)} ></textarea>
          <br />
          <input type="number" placeholder='Enter Product cost' className='form-control' required value={product_cost} onChange={(e)=>setProduct_cost(e.target.value)} />
          <br />
          <p><b>Upload Product Photo</b></p>
          <br />
          <input
          type="file" 
          className='form-control' 
          accept='image/*'
           onChange={(e)=>setProduct_photo(e.target.files[0]) }/>
          <br />

           <input type="submit"value="Upload Product" className='btn bg-info   form-control  w-100 text-white'/>
           <br />
           




        </form>



      </div>


    </div>
  )
}

export default AddProducts