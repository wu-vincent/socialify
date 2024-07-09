import { isBot } from 'next/dist/server/web/spec-extension/user-agent'
import type { NextRequest } from 'next/server'
import svgEndpoint from './svg'

const imageEndpoint = async (req: NextRequest) => {
    return svgEndpoint(req)
}

export const config = {
  runtime: 'edge',
}

export default imageEndpoint
