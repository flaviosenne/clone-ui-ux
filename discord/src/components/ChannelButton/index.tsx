import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export interface Props {
    channelName: string
    selected?: boolean
}

const ChannelButton: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <Container className={props.selected ? 'active': ''}>
            <div>
                <HashtagIcon />
                <span>{props.channelName}</span>
            </div>
            <div>
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container>
    )
}

export default ChannelButton