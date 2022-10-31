import { Container, Main, LeftSide, RightSide, Repos } from "./styles"

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'

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

                <RightSide>
                    <Repos>
                        <h2>Random repos</h2>

                        <div>
                            {[1,2,3,4,5,6].map(n => (
                                <RepoCard
                                    key={n}
                                    username={'flaviosenne'}
                                    reponame={'clone-ui'}
                                    description={'Clone de interfaces'}
                                    language={n % 3 === 0 ? 'Javascript': 'Typescript' }
                                    starts={8}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>

                </RightSide>
            </Main>
        </Container>
    )
}

export default Profile