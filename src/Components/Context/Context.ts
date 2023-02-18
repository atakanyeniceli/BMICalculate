import { createContext, useState } from "react"
import { IContext } from "../Interface/IContext"


const contextDefaultValue: IContext = {
    body: {
        height: 0,
        weight: 0
    },
    setBody: useState,
    BMI: 0
}

const MyContext = createContext(contextDefaultValue)

export default MyContext