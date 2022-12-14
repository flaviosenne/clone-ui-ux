import ServerButton from '../ServerButton'
import { Container, Separator } from './styles'

const ServerList: React.FunctionComponent = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton/>
            <ServerButton hasNotification/>
            <ServerButton mentions={3}/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
        </Container>
    )
}

export default ServerList