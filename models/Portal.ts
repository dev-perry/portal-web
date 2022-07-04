type Portal = {
    _id: string;
    teamId: string;
    name: string;
    desc: string;
    createdOn: Date;
    isActive: boolean;
    files: boolean;
    payment: boolean;
    fee: number;
    fields: {
        _id: string;
        label: string;
        type: string;
        required: boolean;
        options?: {
            _id: string;
            label: string;
        }[]
    }[]
}

export default Portal;