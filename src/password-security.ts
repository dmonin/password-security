import zxcvbn from 'zxcvbn';
import hsimp from 'hsimp';

export default class PasswordSecurity
{
  inputElement: HTMLInputElement;

  isPasswordVisible: boolean = false;

  constructor(inputElement: HTMLInputElement) {
    this.inputElement = inputElement;

  }

  enterDocument() {
    this.inputElement.addEventListener('keyup', this.handleKeyUp.bind(this));

      //this.getHandler().listen(
    // this.getElementByClass('visibility-switch'), goog.events.EventType.CLICK,
    // this.handleVisibilityChange_);


  // this.getHandler().listen(this.input_, goog.events.EventType.KEYUP,
  //   this.handleKeyUp_);
  // hsimp({
  //   'outputChecks': this.renderChecks_.bind(this)
  // })(this.input_);
  }

  evaluatePassword() {
  //   var result = window['zxcvbn'](this.input_.value);
  // goog.dom.classlist.removeAll(this.getElement(), ['level0', 'level1',
  //   'level2', 'level3', 'level4']);

  // var score = result['score'];
  // var cls = 'level' + score;

  // var secs = result['crack_times_seconds']['offline_slow_hashing_1e4_per_second'];

  // if (secs / 60 / 60 / 24 > 90)
  // {
  //   this.setMessage(lang('password.strong'), 'strong');
  // }
  // else
  // {
  //   this.setMessage('');
  // }

  // goog.dom.classlist.add(this.getElement(), cls);

  // var msg = result['crack_times_display']['offline_slow_hashing_1e4_per_second'];

  // this.getElementByClass('duration-value').innerHTML = msg;
  }

  handleVisibilityChange() {
    // this.isPasswordVisible_ = !this.isPasswordVisible_;
    // this.input_.type = this.isPasswordVisible_ ? 'text' : 'password';

    // var target = /** @type {Element} */ (e.target);
    // goog.dom.classlist.toggle(target, 'visible');
  }

  handleKeyUp() {
    console.log(zxcvbn(this.inputElement.value).crack_times_display.offline_slow_hashing_1e4_per_second);
    console.log(hsimp(this.inputElement.value).time);

    // this.evaluatePassword_();

    // this.dispatchEvent(goog.events.EventType.CHANGE);
  }

  renderChecks() {
    // this.getElementByClass('message').innerHTML = checks.length > 0 ?
    // checks[0]['message'] : '';
  }

  setMessage() {
    // goog.dom.classlist.enable(this.getElement(), 'custom-message-visible',
    // !!message);

    // var customMessage = this.getElement().querySelector('.custom-message');
    // if (message)
    // {
    //   customMessage.className = 'custom-message ' + opt_cls;
    //   customMessage.innerHTML = goog.string.htmlEscape(message);
    // }
  }
}
