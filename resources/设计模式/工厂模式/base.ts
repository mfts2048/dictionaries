import { OS } from './os'
import { HardWare } from './hardWare'

export abstract class MobilePhoneFactory {
    abstract createOS(): OS
    abstract createHardWare(): HardWare
}
