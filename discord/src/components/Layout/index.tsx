import ChannelData from '../ChannelData'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import ServerName from '../ServerName'
import ServerList from '../SeverList'
import UserInfo from '../UserInfo'
import UserList from '../UserList'
import { Grid } from './styles'

const Layout: React.FunctionComponent = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
            <ChannelData />
            <UserList />
        </Grid>
    )
}

export default Layout