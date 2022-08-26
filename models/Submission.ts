type Submission = {
    id: string;
    portal_id: string;
    created_on: string;
    fields: {
        [key: string]: string;
    };
    portal_owner_id: string;
    portals?: {
        name: string
    }
}

export default Submission;