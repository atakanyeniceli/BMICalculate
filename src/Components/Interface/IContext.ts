import { IBody } from "./IBody"

export interface IContext {
    body: IBody
    setBody: React.Dispatch<React.SetStateAction<IBody>>
    BMI: number
}