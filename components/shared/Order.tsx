"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

// import Modal from './Modal'; 
// import './OrderForm.css'; 

const Order = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectTitle: '',
    budget: '',
    email: '',
    description: '',
    image: null,
    deadline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(true);
  };

  return (
    <div className="order-form-container">
      <Form onSubmit={handleSubmit} className="order-form">
        <FormItem>
          <FormLabel htmlFor="projectTitle">Project Title:</FormLabel>
          <FormControl>
            <input type="text" id="projectTitle" name="projectTitle" value={formData.projectTitle} onChange={handleChange} required />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="budget">Budget:</FormLabel>
          <FormControl>
            <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} required />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormControl>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="description">Description:</FormLabel>
          <FormControl>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="image">Image:</FormLabel>
          <FormControl>
            <input type="file" id="image" name="image" onChange={handleImageChange} required />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="deadline">Deadline:</FormLabel>
          <FormControl>
            <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} required />
          </FormControl>
        </FormItem>
        <button type="submit" className="submit-button">Place Order</button>
      </Form>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Order;
