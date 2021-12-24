import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";


const AddEvent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
      const eventData = {
        name: data.name ,
      
        imageURL: imageURL
      };
    const url =`http://localhost:5050/addEvent`
    console.log(eventData)
    
      fetch(url, {
        method: "POST",
        headers:{
          'content-Type' : 'application/json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response', res))
  
  };

const handleImageUpload = event => {
console.log(event.target.files[0]);
  const imageData = new FormData()
  imageData.set('key', '9af591185721a4cead2ee3737cfec747')
  imageData.append('image', event.target.files[0])

  axios.post('https://api.imgbb.com/1/upload',
    imageData)
  .then(function (response) {
    setImageURL(response.data.data.display_url);
  })
  .catch(function (error) {
    console.log(error);
  });

}

    return (
        <div>
        <h2>Add your event</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue="New exciting Event" {...register('name', { required: true })}  />
      <br />
      <input type='file' name="exampleRequired" onChange={handleImageUpload} />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddEvent;