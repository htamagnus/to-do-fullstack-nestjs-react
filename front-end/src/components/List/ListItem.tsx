import { Column, Text } from 'components';

export type ListItemProps = {
    label: string;
}

export const ListItem: React.FC<ListItemProps> = ({ label }) => {
    return (
        <Column width="400px" bg="rgba(128, 128, 128, 0.301)" p="20px" my= "10px" mb="10px" borderLeft="5px solid #ffffffd6" borderRadius="4px">
            <Text>{label}</Text>
        </Column>
    )
}