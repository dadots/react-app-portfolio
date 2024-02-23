import React from 'react'
import PulseLoader from "react-spinners/PulseLoader"
import { Loader, LoaderContent } from "../../utils/Loader.js"

const index = () => {
    return (
        <Loader>
            <LoaderContent>
                <PulseLoader 
                    color='#0f766e'
                    margin={18}
                    size={15}
                    speedMultiplier={1}
                />
            </LoaderContent>
        </Loader>
    )
}

export default index
