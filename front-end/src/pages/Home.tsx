import { Input, Text, Button, Row, Column, List, Logo, Icon } from "components";
import { useState } from "react";

export const Home = () => {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<{ label: string }[]>([]);

  const handleOKButton = () => {
    if (!taskName) return;
    setTasks((previous) => {
      const copy = [...previous];
      copy.push({ label: taskName });
      return copy;
    });
    setTaskName("");
  };

  return (
    <Column
      width="600px"
      margin="140px auto"
      background="rgba(255, 255, 255, 0.178)"
      boxShadow="0 2px 82px 0 rgba(0, 0, 0, 0.5)"
      borderRadius="12px"
      paddingBottom="40px"
      paddingTop="40px"
    >
      <Column width="100%" py="10px" alignItems="center">
        <Logo />
      </Column>
      <Column
        width="100%"
        minHeight="300px"
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="4px"
        p="20px"
      >
        <Text fontSize="bodyLarge">Ready</Text>
        <Text fontSize="displayExtraLarge" py="20px">
          25:00
        </Text>
        <Button variant="primary">
          <Text fontSize="bodyLarge" color="primary">
            Start
          </Text>
        </Button>

        <Row py="20px">
          <Button variant="primary" p="10px 20px" mx="5px">
            <Icon variant="play" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px">
            <Icon variant="pause" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px">
            <Icon variant="stop" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px">
            <Icon variant="restart" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px">
            <Icon variant="done" />
          </Button>
        </Row>

      </Column>
      <Text fontWeight="bold" fontSize="bodyLarge" my="10px" pl="10px">
        Tasks
      </Text>
      <Row width="50%">
        <Input
          flex={1}
          placeholder="Enter a task name here.."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button onClick={handleOKButton}>Ok</Button>
      </Row>
      <List items={tasks} />
    </Column>
  );
};
