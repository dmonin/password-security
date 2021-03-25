import PasswordSecurity from '../src/password-security.ts';

const input = document.documentElement.querySelector('.password-security');
const pwSecurity = new PasswordSecurity(input);
pwSecurity.enterDocument();