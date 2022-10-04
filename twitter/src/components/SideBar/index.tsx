import StickyBox from 'react-sticky-box'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles'

import List from '../List'
import FollowSuggestions from '../FollowSuggestion'
import News from '../News'

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no twitter" />
                <SearchIcon />
            </SearchWrapper>
            <StickyBox>

                <Body>
                    <List
                        title="Talvez você curta"
                        elements={[
                            <FollowSuggestions name="gabriely oliveira" nickname="@gaby_oliver" />,
                            <FollowSuggestions name="daniel flausino" nickname="@danielkray" />,
                            <FollowSuggestions name="josé afonso" nickname="@afonsojose" />
                        ]}
                    />
                    <List
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />
                        ]}
                    />
                    <List
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />
                        ]}
                    />
                    <List
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />
                        ]}
                    />
                    <List
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    )
}

export default SideBar