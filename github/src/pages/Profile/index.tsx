import { Container, Main, LeftSide, RightSide } from "./styles"

import ProfileData from '../../components/ProfileData'

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={'flaviosenne'}
                        name={'João Flávio'}
                        avatarUrl={'https://avatars.githubusercontent.com/u/20491701?v=4s'}
                        followers={50}
                        following={10}
                        company={'Bart Digital'}
                        location={'Paraná, Brasil'}
                        email={'joaodev3@gmail.com'}
                        blog={undefined}
                    />

                </LeftSide>

                <RightSide></RightSide>
            </Main>
        </Container>
    )
}

export default Profile