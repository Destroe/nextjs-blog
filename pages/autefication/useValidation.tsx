import { useEffect, useState } from 'react'





function useValidation(value: any, validations: any){

    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setmaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                case 'maxLength':
                    value.length < validations[validation] ? setmaxLengthError(true) : setmaxLengthError(false)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, emailError])

    return {
        isEmpty,
        minLengthError,
        emailError,
        maxLengthError,
        inputValid
    }
}

export default useValidation