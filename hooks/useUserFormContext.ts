'use Client'
import { UserContext } from "@/app/(protected)/(multiform)/multi-form-context"
import { useContext } from "react"

export const useUserFormContext = () => {
    const context = useContext(UserContext)
    if (!context) {
      throw new Error('useNewPropertyFormContext must be used within a NewUserFormContextProvider')
    }
  
    return context
  }