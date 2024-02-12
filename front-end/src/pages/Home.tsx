import { Input, Text, Button, Row, Column, List, Logo, Icon } from "components";
import { useTodo } from "hooks";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";

const SECONDS_DEFAULT = 1500;

export const Home = () => {
  const { tasks, getAllTodos, createTodo, updateTodo } = useTodo();
  const [taskName, setTaskName] = useState("");
  const [seconds, setSeconds] = useState(SECONDS_DEFAULT);
  const [timer, setTimer] = useState<any>();
  const [stage, setStage] = useState("ready");
  const [taskIndex, setTaskIndex] = useState(0);

  const handleOKButton = useCallback(async () => {
    await createTodo({ task: taskName, isDone: 0 });
    await getAllTodos();
    setTaskName('');
  }, [createTodo, getAllTodos, taskName]);

  const secondsToTime = (secs: number) => {
    const divisorMinutes = secs % 3600;
    let minutes: any = Math.floor(divisorMinutes / 60);
    minutes = String(minutes).padStart(2, "0");

    const divisorSeconds = divisorMinutes % 60;
    let seconds: any = Math.ceil(divisorSeconds);
    seconds = String(seconds).padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  const startTimer = () => {
    setStage("in_progress");

    const timerInterval = setInterval(() => {
      setSeconds((previousSeconds) => {
        if (previousSeconds === 0) {
          clearInterval(timerInterval);
          setTimer(undefined);
          setStage("finished");
          return 0;
        }

        return previousSeconds - 1;
      });
    }, 1000);

    setTimer(timerInterval);
  };

  const handleRestartButton = useCallback(() => {
    setStage("ready");
    setSeconds(SECONDS_DEFAULT);
    clearInterval(timer);
    setTimer(undefined);
  }, [timer]);

  const handlePauseButton = useCallback(() => {
    clearInterval(timer);
    setTimer(undefined);
  }, [timer]);

  const handleStopButton = useCallback(() => {
    handlePauseButton();
    setSeconds(SECONDS_DEFAULT);
    setStage("ready");
  }, [handlePauseButton]);

  const handleDoneButton = useCallback(async () => {
    const task = tasks[taskIndex];
    if (task) {
      await updateTodo(task.id, { task: task.task, isDone: 1 });
      await getAllTodos();
      setStage('ready');
    }
  }, [updateTodo, getAllTodos, taskIndex, tasks]);

  const handleStageStatus = useMemo(() => {
    switch (stage) {
      case "ready":
        return "Ready";

      case "in_progress":
        return "Time to work!";

      case "finished":
        return "Finished";

      default:
        return "Ready";
    }
  }, [stage]);

  useEffect(() => {
    getAllTodos();
  }, [getAllTodos]);

  const handleStageButtons = useMemo(() => {
    switch (stage) {
      case "ready":
        return (
          <Fragment>
            <Button variant="primary" onClick={startTimer}>
              <Text fontSize="bodyLarge" color="primary">
                Start
              </Text>
            </Button>
          </Fragment>
        );

      case "in_progress":
        return (
          <Fragment>
            <Row py="20px">
              <Button
                variant="primary"
                p="10px 20px"
                mx="5px"
                onClick={startTimer}
              >
                <Icon variant="play" />
              </Button>
              <Button
                variant="primary"
                p="10px 20px"
                mx="5px"
                onClick={handlePauseButton}
              >
                <Icon variant="pause" />
              </Button>
              <Button
                variant="primary"
                p="10px 20px"
                mx="5px"
                onClick={handleStopButton}
              >
                <Icon variant="stop" />
              </Button>
            </Row>
          </Fragment>
        );

      case "finished":
        return (
          <Row py="20px">
            <Button
              variant="primary"
              p="10px 20px"
              mx="5px"
              onClick={handleRestartButton}
            >
              <Icon variant="restart" />
            </Button>
            <Button variant="primary" p="10px 20px" mx="5px" onClick={handleDoneButton}>
              <Icon variant="done" />
            </Button>
          </Row>
        );

      default:
        return (
          <Fragment>
            <Button variant="primary" onClick={startTimer}>
              <Text fontSize="bodyLarge" color="primary">
                Start
              </Text>
            </Button>
          </Fragment>
        );
    }
  }, [stage, handlePauseButton, handleStopButton, handleRestartButton, handleDoneButton]);

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
        width="60%"
        minHeight="260px"
        borderRadius="12px"
        p="20px"
      >
        <Text fontSize="bodyExtraLarge">{handleStageStatus}</Text>
        <Text fontSize="displayExtraLarge" py="20px">
          {secondsToTime(seconds)}
        </Text>

        <Row>{handleStageButtons}</Row>
      </Column>
      <Row width="50%" paddingTop="8px">
        <Input
          fontSize="body"
          flex={1}
          placeholder="Enter a task name here.."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button fontSize="body" onClick={handleOKButton}>Ok</Button>
      </Row>
      <List items={tasks} selectedIndex={taskIndex} onClick={setTaskIndex} />
    </Column>
  );
};
