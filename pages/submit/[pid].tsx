import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';
import FormInput from '../../components/FormInput';
import { PortalApiResponse } from '../../models/Portal';
import { SubmissionContext } from '../../contexts/Submission';

const Submit: NextPage = () => {
  const router = useRouter();
  const [portal, setPortal] = useState<PortalApiResponse>();
  const { sendSubmission } = useContext(SubmissionContext);

  let { pid } = router.query;

  useEffect(() => {
    if (pid) {
      fetch(`/api/portals/${pid}`)
        .then((res) => res.json())
        .then((data) => {
          setPortal(data);
        });
    }
  }, [pid]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = {};
    for (let element of e.target.elements) {
      formData[element.name] = element.value;
    }
    sendSubmission(pid as string, formData);
  };

  if (!portal) {
    return <div className="m-auto">Loading...</div>;
  }

  return (
      <div className="container h-screen mx-auto">
        <Head>
          <title>{portal.name}</title>
        </Head>
        <div className="py-8 overflow-auto w-1/2 mx-auto">
          <p className="text-2xl font-medium text-[#427A5B] mb-1">
            {portal.name}
          </p>
          <div className="flex flex-row items-center space-x-2">
            <p> Start Date </p>
            <hr
              style={{
                color: '#D4D4D4',
                backgroundColor: '#D4D4D4',
                height: 2,
                width: 16,
              }}
            />
            <p> End Date </p>
          </div>
          <p className="leading-5 mt-6 mb-7">{portal.desc}</p>
          <hr
            style={{
              color: '#D4D4D4',
              backgroundColor: '#D4D4D4',
              height: 2,
              width: 216,
              margin: 'auto',
            }}
          />
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col space-y-8 mt-7 h-screen px-3"
          >
            {portal.fields.blocks.map((field, position) => (
              <FormInput key={position} type={field.type} id={field.id} editable={false}/>
            ))}
            <button className="bg-[#427A5B] w-20 h-8 text-[#FFFFFF] font-medium rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
  );
};

export default Submit;
