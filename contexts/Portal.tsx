import {createContext, useState} from "react"
import Portal from "../models/Portal";
import { supabase } from "../utils/supabaseClient";

type PortalContext = {
    portals: Portal[];
    setPortals: (portals: Portal[]) => void;
    deletePortal: (portal_id: string) => void;
}

export const PortalContext = createContext({} as PortalContext);

function PortalManager({children}: {children: React.ReactNode}) {
    const [portals, setPortals] = useState<Portal[]>([])

    const deletePortal = async (portal_id: string) => {
        try{
            const {error} = await supabase
            .from('portals')
            .delete()
            .eq('id', portal_id)
            if (error) throw error
          } catch(error){
            console.error(error)
          }
    }

    return (
        <PortalContext.Provider value={{portals, setPortals, deletePortal}}>
            {children}
        </PortalContext.Provider>
    )
 }

 export default PortalManager;