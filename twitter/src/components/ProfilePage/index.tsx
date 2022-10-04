import Feed from '../Feed'
import {
    Container, Banner, Avatar, ProfileData,
    LocationIcon, CakeIcon, Followage, EditButton
} from './styles'

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                <h1>João FLávio</h1>
                <h2>@flaviosenne</h2>
                <p>Developer at <a href='https://github.com/flaviosenne/front-clones/twitter'>@flaviosenne</a></p>
                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 11 de abril de 1999
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>100 </strong>
                    </span>
                    <span>
                        <strong>60 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>

    )
}

export default ProfilePage