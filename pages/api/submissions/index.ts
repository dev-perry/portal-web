import type { NextApiRequest, NextApiResponse } from 'next'
import {supabase} from '../../../utils/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method === 'POST'){
    const submission = req.body
    try{
      const {data, error} = await supabase
      .from('submissions')
      .insert(submission)
      if (error) throw error
      res.status(200).json(data)
    } catch(error){
      res.status(500).json({ error: error })
    }
  }
}