import { pocketbaseConfig } from '@/config'
import PocketBase from 'pocketbase'

import { type TypedPocketBase } from './pocketbase-types'
export * from './pocketbase-types'
export * from './utility-types-for-create-update-operations'

export const pb = new PocketBase(pocketbaseConfig.baseUrl) as TypedPocketBase
