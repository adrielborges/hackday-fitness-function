import { bar } from '../base';
import { auth } from '../auth';

function foo() {
  bar();
  auth();
}

export { foo };
export default foo;
