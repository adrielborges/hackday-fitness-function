import { parse, formatters } from 'plantuml-parser';

const data = `
@startuml

class Auth
class User
class Base

Auth -> Base
User -> Base
Auth -> User

@enduml
`;

// parse PlantUML
const result = parse(data);

// Format and print parse result
console.log(
  formatters.default(result),
);
