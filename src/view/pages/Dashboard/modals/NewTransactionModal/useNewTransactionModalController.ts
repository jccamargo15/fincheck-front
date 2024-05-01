import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType
  } = useDashboard();

  const isLoading = false;

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    isLoading
  }
}
