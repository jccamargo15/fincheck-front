import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewAccountModalController() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal
  } = useDashboard();

  const isLoading = false;

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
    isLoading
  }
}
