import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset:"production",
  projectId:"mr3seyiy",
  useCdn:false,
})
