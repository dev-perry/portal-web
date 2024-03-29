import type { NextPage } from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import { useEffect, useContext } from 'react';
import PortalCard from '../../components/PortalCard';
import { AuthContext } from '../../contexts/Auth';
import { PortalContext } from '../../contexts/Portal';
import { supabase } from '../../utils/supabaseClient';

const Portals: NextPage = () => {
  const router = useRouter();
  const {portals, setPortals} = useContext(PortalContext);
  const {user} = useContext(AuthContext);

  const fetchPortals = async () => {
    try{
      const {data, error} = await supabase
      .from('portals')
      .select('id, name, desc')
      .eq('owner_id', user!.id)
      if (error) throw error
      setPortals(data)
    } catch(error){
      console.error(error)
    }
  }

  useEffect(() => {
      fetchPortals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    const portalsListener = supabase
      .from('portals')
      .on('*', () => {
        fetchPortals()
      }
      ) .subscribe()

    return () => {
      portalsListener.unsubscribe()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="pt-12 px-12 h-screen">
      <Head>
        <title> Vostome - Portals</title>
      </Head>
      <div className="flex flex-row">
      <p className="text-3xl font-default font-semibold">Portals</p>
      <button className="h-8 ml-9 text-base rounded border px-4 border-[#427A5B] text-[#427A5B] hover:text-[#ffffff] hover:bg-[#427A5B]" onClick={() => router.push("/portals/editor")}>Create Portal</button>
      </div>
      <div className="grid grid-cols-3 mt-8 gap-y-6">
        {portals.map((portal) => <PortalCard key={portal.id} name={portal.name} desc={portal.desc} id={portal.id}/>)}
      </div>
    </div>
  );
};

export default Portals;