import type { NextApiRequest, NextApiResponse } from 'next'
import {supabase} from '../../../utils/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const {pid} = req.query
  if(req.method === 'GET'){
    try{
      const {data, error} = await supabase
      .from('portals')
      .select('*')
      .eq('id', pid)
      .single()
  
      if (error) throw error
      res.status(200).json(data)
    } catch(error){
      res.status(500).json({ error: error })
    }
  }
}
