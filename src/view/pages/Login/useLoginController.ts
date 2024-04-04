import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('Informe um e-mail válido'),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha deve conter pelo menos 8 caracteres'),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
  } = useForm<FormData>();

  const handleSubmit = hookFormHandleSubmit((data) => {
    schema.parse(data);
  });

  return { handleSubmit, register };
}
