import { bar } from '../base';
import { foo } from '../user';

function auth() {
  foo();
  bar();
}

export { auth };
export default auth;
