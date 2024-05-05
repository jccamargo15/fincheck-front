import { z } from "zod";
import { useDashboard } from "../../components/DashboardContext/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  initialBalance: z.string().nonempty('Saldo inicial é obritagório'),
  name: z.string().nonempty('Nome da conta é obrigatório'),
  type: z.enum(['INVESTIMENT', 'CHECKING', 'CASH']),
  color: z.string().nonempty('Cor é obrigatória'),
});

type FormData = z.infer<typeof schema>;

export function useNewAccountModalController() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal
  } = useDashboard();

  const isLoading = false;

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormSubmit(async (data: FormData) => {
    console.log(data);
  });

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
    isLoading,
    register,
    errors,
    handleSubmit,
    control,
  }
}
