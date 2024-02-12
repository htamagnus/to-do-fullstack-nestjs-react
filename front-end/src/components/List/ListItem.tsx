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
        <Column width="400px" bg="rgba(128, 128, 128, 0.301)" p="20px" my= "4px" mb="10px" borderLeft="5px solid #ffffffd6" borderRadius="4px" cursor= "pointer" borderLeftColor={isActive ? '#fff' : 'transparent'} onClick={() => onClick(index)}>
        <Row>
        <Text flex={1}>{task}</Text>
        {isDone === 1 && <Icon variant="done" />}
        </Row>
        </Column>
    )
}