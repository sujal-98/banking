"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../@/components/ui/form';
import { Input } from '../../@/components/ui/input';
import CustomInput from './customInput'

const formSchema = z.object({
  email: z
    .string().email()
  });

const AuthForm = ({ type }: { type: String }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true); // Start loading

    try {
      // Simulate API call
      console.log(values);
      // Add actual authentication logic here
      // For example: await authAPI.signIn(values)
    } catch (error) {
      console.error('Error during sign-in:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon Logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
            <p className="text-16 font-normal text-gray-600">
              {user ? 'Link your account to get started' : 'Please enter your details'}
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">
          {/* Plaid Link logic */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
             <CustomInput control={form.control} name='username' label='UserName' placeholder='Enter you username' type='text' />
             <CustomInput control={form.control} name='password' label='Password' placeholder='Enter you Password' type='password' />
             
      
      
              <Button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;
