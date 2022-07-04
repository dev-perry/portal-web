type Submission = {
    _id: string;
    portalId: string;
    submittedOn: Date;
    submitter: string;
    fee: number;
    reviewStatus: string;
    fields: {
        _id: string;
        value: string;
    }[]
}

export default Submission;