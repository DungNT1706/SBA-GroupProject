export default `
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-width: 320px;
    font-family: 'Segoe UI', Arial, sans-serif;
    color: #28452f;
    background: #f2f6ed;
    color-scheme: light;
  }
  button, input { font: inherit; }
  .signup-page { min-height: 100svh; display: grid; place-items: center; padding: 28px 16px; }
  .signup-card { width: 100%; max-width: 440px; padding: 32px; background: white; border: 1px solid #e0e8d8; border-radius: 16px; }
  .brand { display: flex; align-items: center; gap: 8px; color: #44693a; font-size: 22px; font-weight: 700; }
  h1 { font-size: 25px; margin: 23px 0 8px; }
  .intro { color: #6e7c67; font-size: 13px; line-height: 1.6; margin: 0 0 24px; }
  .field { margin-bottom: 16px; }
  .field label { display: block; margin-bottom: 7px; font-size: 13px; font-weight: 600; }
  .field input { width: 100%; height: 43px; padding: 10px 12px; border: 1px solid #d5dfcb; border-radius: 7px; background: white; color: #28452f; font-size: 14px; }
  .field input::placeholder { color: #88927f; }
  .field input[aria-invalid=true] { border-color: #bb5a49; }
  .field input:focus { border-color: #6f9255; outline: 2px solid #dcebcf; outline-offset: 1px; }
  .hint, .error { font-size: 11px; line-height: 1.6; margin: 6px 0 0; }
  .hint { color: #6e7c67; }
  .error { color: #ac4233; }
  .checkbox-label { display: flex; align-items: flex-start; gap: 8px; font-size: 12px; line-height: 1.7; color: #5f7154; cursor: pointer; }
  .checkbox-label input { width: 15px; height: 15px; margin: 3px 0 0; flex-shrink: 0; accent-color: #44693a; }
  .terms { margin-top: 13px; }
  button { width: 100%; margin-top: 22px; padding: 12px; border: 0; border-radius: 7px; background: #44693a; color: white; font-weight: 600; cursor: pointer; }
  button:hover { background: #35572d; }
  button:disabled { opacity: .6; cursor: wait; }
  button:focus-visible, input[type=checkbox]:focus-visible { outline: 3px solid #9bb57d; outline-offset: 3px; }
  .demo-note { margin: 15px 0 0; font-size: 10px; line-height: 1.6; text-align: center; color: #6e7c67; }
  .success { padding: 12px; margin-bottom: 22px; border-radius: 7px; background: #edf5e6; color: #44693a; font-size: 13px; line-height: 1.7; overflow-wrap: anywhere; }
  @media (max-width: 480px) {
    .signup-card { padding: 25px 22px; }
    .field input { font-size: 16px; }
  }
`
