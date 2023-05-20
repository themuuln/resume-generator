"use client"
import { useForm } from 'react-hook-form';
import { Step } from './Components';
import Button from './Button';
import Required from './form/Required';
import Star from './form/Star';

const NameEmail = ({ onNext }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Step>What’s the best way for employers to contact you?</Step>
      <p>We suggest including an email and phone number.</p>
      <p>* indicates a required field</p>

      <div className='flex flex-col w-40'>
        <label htmlFor="firstName">First Name<Star /></label>
        <input
          placeholder='e.g. Temuulen'
          type="text"
          id="firstName"
          {...register('firstName', { required: true })}
        />
        {errors.firstName && <Required />}
      </div>

      <div className='flex flex-col w-40'>
        <label htmlFor="lastName">Last Name<Star /></label>
        <input
          placeholder='e.g. Undrakhbayar'
          type="text"
          id="lastName"
          {...register('lastName', { required: true })}
        />
        {errors.lastName && <Required />}
      </div>

      <div className='flex flex-col w-40'>
        <label htmlFor="phoneNumber">Phone<Star /></label>
        <input
          type="number"
          id="phoneNumber"
          placeholder='e.g. +97688650115'
          {...register('phoneNumber', { required: true })}
        />
        {errors.email && <Required />}
      </div>

      <div className='flex flex-col w-40'>
        <label htmlFor="email">Email<Star /></label>
        <input
          type="email"
          id="email"
          placeholder='e.g. zerone.offical@gmail.com'
          {...register('email', { required: true })}
        />
        {errors.email && <Required />}
      </div>
      <Button type="submit">Next</Button>
    </form>
  );
};

export default NameEmail;
