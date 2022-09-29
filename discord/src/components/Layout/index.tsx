import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import ServerName from '../ServerName'
import ServerList from '../SeverList'
import { Grid } from './styles'

const Layout: React.FunctionComponent = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
        </Grid>
    )
}

export default Layout