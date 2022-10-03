import { Container, Header, BackIcon, ProfileInfo } from './styles'

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <ProfileInfo>
                    <strong>João Flávio</strong>
                    <span>1000 tweets</span>
                </ProfileInfo>
            </Header>

            {/* <ProfilePage /> */}

            {/* <BottonMenu>
                <HomeIcon />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottonMenu> */}
        </Container>
    )
}

export default Main