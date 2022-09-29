import { useRef, useEffect } from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FunctionComponent = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
    useEffect(() => {
        const div = messagesRef.current

        if (div) {
            div.scrollTop = div.scrollHeight
        }
    }, [messagesRef])
    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map(n => {
                    return (
                        <ChannelMessage
                            key={n}
                            author='Joao Flávio'
                            content='@flavio, ei vc vai jogar ou mão cara'
                            date='22/09/2022'
                        />
                    )
                })}

                <ChannelMessage
                    author='Joao Flávio'
                    content={
                        <>
                            <Mention>@flavio</Mention>, se não quiser não me aceitae blz'
                        </>
                    }
                    date='22/09/2022'
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversarem #chat-livre" />
                <InputIcon />
            </InputWrapper>

        </Container>
    )
}

export default ChannelData