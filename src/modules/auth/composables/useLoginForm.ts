import { reactive, ref } from 'vue';
import { loginScheme } from '../schemas/auth.schema';

export function useLoginForm() {
  const form = reactive({
    email: '',
    password: '',
  })

  const errors = ref<Record<string, string>>({})

  const validate = () => {
    const result = loginScheme.safeParse(form)

    if(!result.success){
      errors.value = {}
      result.error.errors.forEach(error => {
        const field = error.path[0] as string
        errors.value[field] = error.message
      })
      return false
    }

    errors.value = {}
    return true
  }

  return {
    form,
    errors,
    validate,
  }
}
