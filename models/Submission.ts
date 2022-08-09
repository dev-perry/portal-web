type Submission = {
    id: string;
    portal_id: string;
    created_on: Date;
    review_status: string;
    fields: {
        _id: string;
        value: string;
    }[];
}

export default Submission;