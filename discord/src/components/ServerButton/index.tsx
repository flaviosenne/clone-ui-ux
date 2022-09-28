import { Button } from './styles'

import logo from '../../assets/logo.svg'

export interface Props {
    selected?: boolean
    isHome?: boolean
    hasNotification?: boolean
    mentions?: number
}

const ServerButton: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <Button
            isHome={props.isHome}
            hasNotification={props.hasNotification}
            mentions={props.mentions}
            className={props.selected ? 'active' : ''}
        >
            {props.isHome && <img src={logo} />}
        </Button>
    )
}

export default ServerButton