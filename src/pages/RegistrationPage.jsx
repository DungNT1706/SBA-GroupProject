import RegistrationForm from '../components/RegistrationForm'

export default function RegistrationPage() {
  return (
    <main className="signup-page">
      <section className="signup-card" aria-labelledby="signup-title">
        <div className="brand"><span aria-hidden="true">🌱</span> GreenBite</div>
        <h1 id="signup-title">Đăng ký tài khoản</h1>
        <p className="intro">Bắt đầu những bữa ăn ngon và lành mạnh.</p>
        <RegistrationForm />
      </section>
    </main>
  )
}
