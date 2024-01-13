import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from '../Form/FormInput';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { BASE_URL } from '@/libs/contants';

const schema = zod.object({
  amount: zod.string(),
});

type Schema = zod.infer<typeof schema>;

const SubtractModal = () => {
  const resolver = zodResolver(schema);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<Schema>({ mode: 'onChange', resolver });

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post(`${BASE_URL}/admin/transactions/withdrawal`);
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <FormInput
            id='amount'
            register={register}
            errorMessage={errors}
          />
          <button className='w-full'>Withdraw</button>
        </div>
      </form>
    </div>
  );
};

export default SubtractModal;
