import type { NextApiRequest, NextApiResponse } from 'next'
import {supabase} from '../../../utils/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method === 'POST'){
    const portalConfig = req.body
    try{
      const {data, error} = await supabase
      .from('portals')
      .insert(portalConfig)

      if (error) throw error
      res.status(200).json(data)
    } catch(error){
      res.status(500).json({ error: error })
    }
  }
  if(req.method == 'GET'){
    try{
      const {data, error} = await supabase
      .from('portals')
      .select('id, name, desc')
      if (error) throw error
      res.status(200).json(data)
    } catch(error){
      res.status(500).json({ error: error })
    }
  }
}