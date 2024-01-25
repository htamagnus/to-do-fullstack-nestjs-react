import { Column, Text } from 'components';

export type ListItemProps = {
    label: string;
}

export const ListItem: React.FC<ListItemProps> = ({ label }) => {
    return (
        <Column width="100%" bg="rgba(240, 235, 235, 0.11)" p="20px" mb="10px" borderLeft="5px solid #fff" borderRadius="4px">
            <Text>{label}</Text>
        </Column>
    )
}