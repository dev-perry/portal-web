type Submission = {
    id: string;
    portal_id: string;
    created_on: Date;
    submitter: string;
    fee: number;
    review_status: string;
    fields: {
        _id: string;
        value: string;
    }[];
    files: string[];
}

export default Submission;