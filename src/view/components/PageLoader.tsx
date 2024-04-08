import { Spinner } from "./Spinner";

export function PageLoader() {
  return (
    <div className="fidex top-0 left-0 w-full h-full bg-gray-50 grid place-items-center">
      <Spinner />
    </div>
  )
}
