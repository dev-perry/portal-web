import {createContext, useState} from "react"
import Portal from "../models/Portal";

type PortalContext = {
    portals: Portal[];
    setPortals: (portals: Portal[]) => void;
}

export const PortalContext = createContext({} as PortalContext);

function PortalManager({children}: {children: React.ReactNode}) {
    const [portals, setPortals] = useState<Portal[]>([])
    return (
        <PortalContext.Provider value={{portals, setPortals}}>
            {children}
        </PortalContext.Provider>
    )
 }

 export default PortalManager;