import { PasswordSecurity } from '../src/password-security.ts';

const input = document.documentElement.querySelector('input');
const pwSecurity = new PasswordSecurity(input);
pwSecurity.enterDocument();