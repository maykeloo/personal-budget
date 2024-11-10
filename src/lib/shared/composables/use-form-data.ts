export const useFormData = () => {
  function getFormData<T>(form: EventTarget | null) {
    const formData = new FormData(form as HTMLFormElement)
    return Object.fromEntries(formData.entries()) as T
  }

  return {
    getFormData,
  }
}
