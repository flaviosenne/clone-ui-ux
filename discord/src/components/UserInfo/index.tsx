import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadPhoneIcon, SettingsIcon } from './styles'

const UserInfo: React.FunctionComponent = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Joao FLávio</strong>
                    <span>#1234</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadPhoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
}

export default UserInfo