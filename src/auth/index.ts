import { bar } from '../base';
import { foo } from '../user';

function auth() {
  bar();
  foo();
}

export { auth };
export default auth;
