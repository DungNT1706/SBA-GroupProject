import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registrationSchema } from '../schemas/registrationSchema'

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [successName, setSuccessName] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  })

  function onSubmit(values) {
    setSuccessName(values.fullName)
    reset()
    setShowPassword(false)
  }

  const fields = [
    { name: 'fullName', label: 'Họ và tên', placeholder: 'Nguyễn Minh Anh', type: 'text', autoComplete: 'name' },
    { name: 'email', label: 'Email', placeholder: 'ban@example.com', type: 'email', autoComplete: 'email' },
    { name: 'password', label: 'Mật khẩu', placeholder: 'Nhập mật khẩu', type: showPassword ? 'text' : 'password', autoComplete: 'new-password' },
    { name: 'confirmPassword', label: 'Xác nhận mật khẩu', placeholder: 'Nhập lại mật khẩu', type: showPassword ? 'text' : 'password', autoComplete: 'new-password' },
  ]

  return (
    <>
      {successName && (
        <p className="success" role="status">
          Chào {successName}! Thông tin hợp lệ. Bản demo chưa tạo tài khoản thật.
        </p>
      )}

      <form noValidate onSubmit={handleSubmit(onSubmit)} onChange={() => setSuccessName('')}>
        {fields.map(({ name, label, ...inputProps }) => (
          <div className="field" key={name}>
            <label htmlFor={name}>{label}</label>
            <input
              {...inputProps}
              {...register(name)}
              id={name}
              aria-required="true"
              aria-invalid={!!errors[name]}
              aria-describedby={[
                name === 'password' ? 'password-hint' : '',
                errors[name] ? `${name}-error` : '',
              ].filter(Boolean).join(' ') || undefined}
            />
            {name === 'password' && (
              <p className="hint" id="password-hint">Ít nhất 8 ký tự, gồm chữ hoa, chữ thường và số.</p>
            )}
            {errors[name] && <p className="error" id={`${name}-error`} role="alert">{errors[name].message}</p>}
          </div>
        ))}

        <label className="checkbox-label">
          <input type="checkbox" checked={showPassword} onChange={event => setShowPassword(event.target.checked)} />
          Hiện mật khẩu
        </label>

        
        {errors.terms && <p className="error" id="terms-error" role="alert">{errors.terms.message}</p>}

        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Đang xử lý…' : 'Đăng ký'}</button>
        
      </form>
    </>
  )
}
