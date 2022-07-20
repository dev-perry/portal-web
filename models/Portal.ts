import Field from "./Field";

type Portal = {
    id: string;
    team_id: string;
    name: string;
    desc: string;
    created_on: Date;
    is_active: boolean;
    files: boolean;
    fields: Field[]
}

export type PortalApiResponse ={
    id: string;
    team_id: string;
    name: string;
    desc: string;
    created_on: Date;
    is_active: boolean;
    files: boolean;
    fields: {
        blocks: Field[]
    }
}

export default Portal;