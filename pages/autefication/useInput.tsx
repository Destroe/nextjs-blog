import { useEffect, useState } from 'react'
import useValidation from './useValidation'



function useInput(initialValue: any, validations: any){
    const [value, setvalue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (event: any) => {
        setvalue(event.target.value)
    }

    const onBlur = (event: any) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

export default useInput