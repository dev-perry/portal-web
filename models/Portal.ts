import Field from "./Field";

type Portal = {
    id: string;
    name: string;
    desc: string;
    created_on: Date;
    owner_id: string;
    fields: Field[]
}

export default Portal;