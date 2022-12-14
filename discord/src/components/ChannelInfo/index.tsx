import { Container, HashtagIcon, Title, Separator, Description } from './styles'

const ChannelInfo: React.FunctionComponent = () => {
    return (
        <Container>
            <HashtagIcon />
            <Title>chat-livre</Title>
            <Separator />
            <Description>Canal aberto para conversas</Description>
        </Container>
    )
}

export default ChannelInfo