import { z } from "zod";
import { useDashboard } from "../../components/DashboardContext/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNunber";

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


  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: bankAccountsService.create,
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
      });
      closeNewAccountModal();
    } catch (error) {
      console.error(error);
    }
  });

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
    isPending,
    register,
    errors,
    handleSubmit,
    control,
  }
}

