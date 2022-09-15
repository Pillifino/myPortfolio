import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.form}
        // bg="red"
        h="45vh"
      >
        {/* First Name */}
        <Input
          color="white"
          bg="black"
          opacity=".5"
          w="50%"
          h="20%"
          borderRadius="20px"
          id='firstname'
          placeholder='First Name'
          {...register('firstname', {
            required: 'This is required',
            minLength: { value: 2, message: 'Enter Valid First Name' },
          })}
        />
        {/* Last Name */}
        <Input
          color="white"
          bg="black"
          opacity=".5"
          w="50%"
          h="20%"
          borderRadius="20px"
          id='lastname'
          placeholder='Last Name'
          {...register('lastname', {
            required: 'This is required',
            minLength: { value: 2, message: 'Enter Valid Last Name' },
          })}
        />
        {/* Email */}
        <Input
          color="white"
          bg="black"
          opacity=".5"
          w="50%"
          h="20%"
          borderRadius="20px"
          id='email'
          placeholder='Email'
          {...register('email', {
            required: 'This is required',
          })}
        />
        {/* Phone Number */}
        <Input
          color="white"
          bg="black"
          opacity=".5"
          w="50%"
          h="20%"
          borderRadius="20px"
          id='phone'
          placeholder='Phone Number'
          {...register('phone', {
            required: 'This is required',
            minLength: { value: 10, message: 'Retry Phone Number' },
          })}
        />
        {/* Message */}
        <Input
          color="white"
          bg="black"
          opacity=".5"
          w="100%"
          h="60%"
          borderRadius="20px"
          id='message'
          placeholder='Message'
          {...register('message', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.form && errors.form.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  )
}