import { Column, Row, Text, Icon } from 'components';

export type ListItemProps = {
    index: number;
    id: string;
    task: string;
    isDone: number;
    onClick: (index: number) => void;
    isActive: boolean;
  };

export const ListItem: React.FC<ListItemProps> = ({ index, id, task, isDone, isActive, onClick }) => {
    return (
        <Column width="400px" bg="rgba(128, 128, 128, 0.301)" p="20px" my= "4px" mb="10px"  borderRadius="4px" cursor= "pointer" borderLeftWidth="5px"  borderLeftStyle="solid" borderLeftColor={isActive ? '#ffffffd6' : 'transparent'} onClick={() => onClick(index)}>
        <Row>
        <Text mx="80px" flex={1}>{task}</Text>
        {isDone === 1 && <Icon variant="done" />}
        </Row>
        </Column>
    )
}