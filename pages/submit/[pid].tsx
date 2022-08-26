import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import FormInput from '../../components/FormInput';
import { SubmissionContext } from '../../contexts/Submission';
import { supabase } from '../../utils/supabaseClient';

const Submit: NextPage = () => {
  const router = useRouter();
  const { sendSubmission, targetPortal, setTargetPortal } = useContext(SubmissionContext);

  let { pid } = router.query;

  useEffect(() => {
    if (pid) {
      const fetchSubmission = async () => {
        try{
          const {data, error} = await supabase
          .from('portals')
          .select('*')
          .eq('id', pid)
          .single()
          if (error) throw error
          setTargetPortal(data)
        } catch(error){
          console.error(error)
        }
      }

      fetchSubmission()
    }
  }, [pid]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = {};
    for (let element of e.currentTarget.elements) {
      if(element.type === 'checkbox' || element.type === 'radio'){
        if(element.checked){
          formData[element.name] = element.value
        }
      }else{
        if(element.name){
          formData[element.name] = element.value;
        }
      }
    }
    sendSubmission(pid as string, formData);
  };

  if (!targetPortal.fields) {
    return <div className="m-auto w-full flex flex-col h-full text-white bg-[#427A5B] items-center"><p className="text-2xl font-medium my-auto w-1/2 text-center">Loading...</p></div>;
  }

  return (
      <div className="container h-screen mx-auto">
        <Head>
          <title>{targetPortal.name}</title>
        </Head>
        <div className="py-8 overflow-auto w-1/2 mx-auto">
          <p className="text-2xl font-medium text-[#427A5B] mb-1">
            {targetPortal.name}
          </p>
          <p className="leading-5 mt-6 mb-7">{targetPortal.desc}</p>
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
            {targetPortal.fields.map((field, position) => (
              <FormInput key={position} editable={false} {...field}/>
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
