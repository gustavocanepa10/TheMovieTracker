import React, { use, useState } from "react"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../components/ui/card"
import {Input} from "../components/ui/input"
import {Button} from "../components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { Controller, useForm } from "react-hook-form"
import Icone from "../assets/icone.png"
import { useNavigate } from "react-router"

export function Login() {

 
  const navigate = useNavigate()
  const {control, handleSubmit} = useForm({defaultValues : {
    email : "",
    password : ""
  }})


  const [loginData, setLoginData] = useState(null)


  function onSubmit(data) {
    console.log(data)

    setLoginData(data)

    navigate("homepage")
  

   

  }





  return (
    <main className="w-full h-screen items-center justify-center bg-background flex-col flex">

      <img src= {Icone} alt="Icone" className="mt-20" />
  
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-full mb-30 max-w-3xl w-full p-4 justify-center items-center">
        <Card  className="w-full max-w-md space-y-4">
          <CardHeader >

            <CardTitle className='text-2xl font-bold'>
              Entre com sua conta
            </CardTitle>

            <CardDescription>
              Utilize seu email e senha ou o GitHub para entrar
            </CardDescription>

            <CardContent>

              <div className="flex flex-col gap-1">
                <label  htmlFor="email">E-mail</label>
                <Controller control = {control} name = "email" render = {({field}) => (
                      <Input required  placeholder = "Digite seu e-mail"  type="email" {...field}  />
                )}  />
              
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="password">Senha</label>
                <Controller control = {control} name = "password" render = {({field}) => (
                    <Input required    placeholder = "Digite sua senha"  type="password" {...field}  />
                )}  />
                

              </div>

              <Button  type = "submit" className= "w-full mt-3">
                Entrar
              </Button>

              



            </CardContent>

            {loginData && (
              <div className="flex flex-col gap-3 p-4 items-center">
                <span>
                  {loginData.email}
                </span>
                <span>
                  {loginData.password}
                </span>
              </div>
            )}

            


          </CardHeader>


          <CardFooter>

           



              

             

              



              

             

              
              

           

            
          </CardFooter>


        </Card>
      </form>
    </main>
  )
}