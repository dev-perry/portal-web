type Submission = {
    id: string;
    portal_id: string;
    created_on: string;
    review_status: string;
    fields: {
        [key: string]: string;
    };
}

export default Submission;