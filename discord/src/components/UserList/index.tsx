import { Container, Role, User, Avatar } from './styles'

interface Props {
    nickname: string
    isBot?: boolean
}

const UserRow: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <User>
            <Avatar className={props.isBot ? 'bot' : ''} />
            <strong>{props.nickname}</strong>
            {props.isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FunctionComponent = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Joao Flavio" />

            <Role>Offline - 4</Role>
            <UserRow nickname="Daniel" isBot />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Beltrano" />
            <UserRow nickname="Ciclalo" />
        </Container>
    )
}

export default UserList