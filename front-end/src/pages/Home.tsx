import { Input, Text, Button, Row, Column } from 'components'

export const Home = () => {
    return (
        <Column>
            <Text fontWeight="bold">Tasks</Text>
            <Row>
            <Input placeholder="Enter a task name here.."/>
            <Button>Ok</Button>
            </Row>
        </Column>
    )
}
