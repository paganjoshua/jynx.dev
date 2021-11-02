import React, { createContext, useContext, useEffect, useState } from 'react'
import Xarrow, { Xwrapper } from 'react-xarrows'
import Square from './Square'

export const ArrowsContext = createContext(null)

const Arrows = () => {
    const [arrows, setArrows] = useState([])
    const ar = [];
    useEffect(() => {
        // console.log(arrows)

        // console.log(ar)
    }, [arrows])
    Object.values(arrows).forEach((arrow, i) => {
        ar.push(<Xarrow key={i + arrow.start} {...arrow} />)
    })
    return (
        <ArrowsContext.Provider value={[arrows, setArrows]}>
            <Xwrapper>
                <Square />
                {ar}
            </Xwrapper>
        </ArrowsContext.Provider>
    )
}

export default Arrows;