import { Input, Text, Button, Row, Column, List, Logo } from 'components'
import { useState } from 'react'

export const Home = () => {
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState<{label: string }[]>([])

    const handleOKButton = () => {
        if (!taskName) return;
        setTasks(previous => {
            const copy = [...previous];
            copy.push({ label: taskName });
            return copy;
        })
        setTaskName('');
    }

    return (
        <Column width="600px" margin="140px auto" background="rgba(255, 255, 255, 0.178)" boxShadow="0 2px 82px 0 rgba(0, 0, 0, 0.5)" borderRadius="12px" paddingBottom="40px">
            <Column  width="100%" py="10px" alignItems="center">
                <Logo />
            </Column>
            <Text fontWeight="bold" fontSize="bodyLarge" my="10px" pl="10px">Tasks</Text>
            <Row width="50%">
            <Input flex={1} placeholder="Enter a task name here.." value={taskName}onChange={(e) => setTaskName(e.target.value)} />
            <Button onClick={handleOKButton}>Ok</Button>
            </Row>
            <List items={tasks} />
        </Column>
    )
}
