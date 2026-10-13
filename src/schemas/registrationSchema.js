import { z } from 'zod'

export const registrationSchema = z.object({
  fullName: z.string().trim()
    .min(2, 'Họ và tên cần ít nhất 2 ký tự.')
    .max(80, 'Họ và tên không được quá 80 ký tự.'),
  email: z.string().trim()
    .min(1, 'Vui lòng nhập email.')
    .email('Email không hợp lệ.'),
  password: z.string()
    .min(8, 'Mật khẩu cần ít nhất 8 ký tự.')
    .max(128, 'Mật khẩu không được quá 128 ký tự.')
    .regex(/[a-z]/, 'Mật khẩu cần có chữ thường.')
    .regex(/[A-Z]/, 'Mật khẩu cần có chữ hoa.')
    .regex(/\d/, 'Mật khẩu cần có ít nhất một chữ số.'),
  confirmPassword: z.string().min(1, 'Vui lòng xác nhận mật khẩu.'),
  terms: z.boolean().refine(value => value, 'Vui lòng đồng ý với điều khoản.'),
}).refine(values => values.password === values.confirmPassword, {
  message: 'Mật khẩu xác nhận không khớp.',
  path: ['confirmPassword'],
})
