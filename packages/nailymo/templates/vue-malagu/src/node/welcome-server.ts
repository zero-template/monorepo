import { Rpc } from '@malagu/rpc'
import { WelcomeServer } from '../common/welcome-protocol'

@Rpc(WelcomeServer)
export class WelcomeServerImpl implements WelcomeServer {
  say(): Promise<string> {
    return Promise.resolve('Welcome to Malagu')
  }
}
