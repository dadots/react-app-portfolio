import React from 'react'
import PulseLoader from "react-spinners/PulseLoader"
import styled from 'styled-components'

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoaderContent = styled.div`
    display: flex; 
    flex-direction: column; 
    gap: 1rem; 
`;

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
