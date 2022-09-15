import { Input, useToast, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AlertPop from "../AlertPop/alertPop";

export default function Builder() {
    const toast = useToast();
    const [data, setData] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        //console.log(data);
        toast({
            title: "Submitted!",
            status: "success",
            duration: 3000,
            isClosable: true
        });

        setData(data);
    };
    console.log(data);
    console.log(errors)

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        color="white"
                        bg="black"
                        opacity=".5"
                        w="40vw"
                        h="10vh"
                        borderRadius="20px"
                        type="text"
                        placeholder="First name"
                        {...register("firstname", {
                            required: "Please enter first name",
                            minLength: 3,
                            maxLength: 80
                        })}
                    />
                    {errors.firstname && <AlertPop title={errors.firstname.message} />}
                    <Input
                        color="white"
                        bg="black"
                        opacity=".5"
                        w="40vw"
                        h="10vh"
                        borderRadius="20px"
                        type="text"
                        placeholder="Last name"
                        {...register("lastname", {
                            required: "Please enter Last name",
                            minLength: 3,
                            maxLength: 100
                        })}
                    />
                    {errors.lastname && <AlertPop title={errors.lastname.message} />}
                    <Input
                        color="white"
                        bg="black"
                        opacity=".5"
                        w="40vw"
                        h="10vh"
                        borderRadius="20px"
                        type="email"
                        placeholder="email"
                        {...register("email", {
                            required: "Please enter Email",
                            minLength: { value: 5, message: "Too short" }
                        })}
                    />
                    {errors.email && <AlertPop title={errors.email.message} />}
                    <Input
                        color="white"
                        bg="black"
                        opacity=".5"
                        w="40vw"
                        h="10vh"
                        borderRadius="20px"
                        type="number"
                        placeholder="Phone Number"
                        {...register("phonenumber", {
                            required: "Please enter Email",
                            minLength: { value: 10, message: "Enter Valid Phone Number" }
                        })}
                    />
                    {errors.phonenumber && <AlertPop title={errors.phonenumber.message} />}
                    <Input
                        color="white"
                        bg="black"
                        opacity=".5"
                        w="100%"
                        h="20vh"
                        borderRadius="20px"
                        type="message"
                        placeholder="message"
                        {...register("message", {
                            required: "Please enter message",
                            minLength: { value: 1, message: "Too short" }
                        })}
                    />
                    {errors.message && <AlertPop title={errors.message.message} />}

                    <Button
                    mt="5vh"
                    w={["100%","100%","40%","40%",]}
                    h="10vh"
                    colorScheme="purple"
                        borderRadius="md"
                        bg="purple.300"
                        _hover={{ bg: "purple.500" }}
                        type="submit"
                    >
                        Submit
                    </Button>
            </form>
    );
}
