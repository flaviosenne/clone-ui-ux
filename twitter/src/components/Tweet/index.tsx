import {
    Container, Retweeted, RocketseatIcon, Body, Avatar, Content,
    Header, Dot, Description, ImageContent, Icons, Status, CommentIcon,
    RetweetIcon, LikeIcon
} from './styles'

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Você retweetou
            </Retweeted>
            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Joao Flávio</strong>
                        <span>@flaviosenne</span>
                        <Dot />
                        <time>04 de out</time>
                    </Header>

                    <Description>Foguete não tem ré</Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            100
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet