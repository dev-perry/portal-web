import Field from "./Field";

type Portal = {
    id: string;
    name: string;
    desc: string;
    created_on: Date;
    is_active: boolean;
    fields: Field[]
}

export default Portal;