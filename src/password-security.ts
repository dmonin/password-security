import zxcvbn from 'zxcvbn';
import hsimp from 'hsimp';
import './../demo/styles.scss';

export default class PasswordSecurity
{
  private element: Element;
  private inputElement: HTMLInputElement;
  private durationElement: Element;
  private tipsElement: Element;

  private isPasswordVisible: boolean = false;

  constructor(element: Element) {
    this.element = element;
    this.durationElement = element.querySelector('.pws__duration-value') as Element;
    this.inputElement = element.querySelector('input') as HTMLInputElement;
    this.tipsElement = element.querySelector('.pws__tips') as Element;
  }

  enterDocument() {
    this.inputElement.addEventListener('keyup', this.handleKeyUp.bind(this));
    const visibilitySwitch = this.element.querySelector('.pws__visibility-switch');
    if (visibilitySwitch) {
      visibilitySwitch.addEventListener('click', this.handleVisibilityChange.bind(this));
    }
  }

  private evaluatePassword() {
    const password = this.inputElement.value;
    const result = zxcvbn(password);
    const levelCls = ['pws__level0', 'pws__level1', 'pws__level2', 'pws__level3', 'pws__level4'];
    levelCls.forEach((cls) => this.element.classList.remove(cls));
    const score = result['score'];
    const cls = 'pws__level' + score;
    const secs = result.crack_times_seconds.offline_slow_hashing_1e4_per_second as number;

    // Strong Password
    if (secs / 60 / 60 / 24 > 90) {
      this.setSuccess(true);
      return;
    } else {
      this.setSuccess(false);
    }


    this.element.classList.add(cls);
    const msg = result.crack_times_display.offline_slow_hashing_1e4_per_second as string;

    this.durationElement.innerHTML = msg;

    const hsimpResult = hsimp(password);
    this.renderChecks(hsimpResult.checks);
  }

  private handleVisibilityChange() {
    this.isPasswordVisible = this.inputElement.type == 'text';
    this.isPasswordVisible = !this.isPasswordVisible;
    this.inputElement.type = this.isPasswordVisible ? 'text' : 'password';

    if (this.isPasswordVisible) {
      this.element.classList.add('password-visible');
    } else {
      this.element.classList.remove('password-visible');
    }
  }

  private handleKeyUp() {
    this.evaluatePassword();
  }

  private renderChecks(checks: any[]) {
    this.tipsElement.innerHTML = checks.length > 0 ? checks[0]['message'] : '';
  }

  private setSuccess(isSuccess: boolean) {
    if (isSuccess) {
      this.element.classList.add('pws__success');
    } else {
      this.element.classList.remove('pws__success');
    }
  }
}
