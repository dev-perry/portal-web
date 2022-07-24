type Field = {
    id: number;
    label: string;
    type: string;
    required: boolean;
    options?: {
        id: number;
        label: string;
    }[]
}

export default Field;