import { useState } from "react"

export const useForm = (initialForm = {}) => {

   const [formState, setFormState] = useState( initialForm )
   
   const onFormChage = ({target:{ value, name }}) =>{
      setFormState({
         ...formState,
         [name]:value
      })
   }

   const onResetForm = () => {
      setFormState(initialForm)
   }

   return {
      formState,
      onFormChage,
      onResetForm
   }
}