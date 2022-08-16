import {createContext, useState} from "react"
import Portal from "../models/Portal";

type PortalContext = {
    portals: Portal[];
    setPortals: (portals: Portal[]) => void;
    deletePortal: (portal_id: string) => void;
}

export const PortalContext = createContext({} as PortalContext);

function PortalManager({children}: {children: React.ReactNode}) {
    const [portals, setPortals] = useState<Portal[]>([])

    const deletePortal = (portal_id: string) => {
        fetch(`/api/portals/${portal_id}`, {
            method: 'DELETE'
        }).then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error('Error deleting portal');
            }
        }).catch((err) => {
            console.error(err);
        })
    }

    return (
        <PortalContext.Provider value={{portals, setPortals, deletePortal}}>
            {children}
        </PortalContext.Provider>
    )
 }

 export default PortalManager;